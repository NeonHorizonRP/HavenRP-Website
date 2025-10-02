import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageSquare, Gamepad2, LogIn, LogOut } from "lucide-react";
import { siteConfig } from "@/config/site";
import havenLogo from "@/assets/haven-logo.png";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export const Navigation = () => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rules", path: "/rules" },
    { name: "Apply", path: "/apply" },
    { name: "About", path: "/about" },
    { name: "Staff", path: "/staff" },
    { name: "Store", path: "https://store.haven-rp.com/", external: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={havenLogo} alt="HavenRP" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground/70 hover:text-primary transition-all duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-neon-cyan transition-all duration-300"
              asChild
            >
              <a
                href={siteConfig.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Discord
              </a>
            </Button>
            {user ? (
              <Button
                variant="secondary"
                size="sm"
                className="transition-all duration-300"
                onClick={handleSignOut}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                className="transition-all duration-300"
                asChild
              >
                <Link to="/auth">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Link>
              </Button>
            )}
            <Button
              size="sm"
              className="bg-gradient-neon hover:shadow-neon-cyan transition-all duration-300"
              asChild
            >
              <a
                href={`fivem://connect/${siteConfig.fivemConnect}`}
              >
                <Gamepad2 className="w-4 h-4 mr-2" />
                Connect
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
