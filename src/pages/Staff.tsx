import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MessageSquare, Crown, Shield, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import heroBg from "@/assets/hero-bg-new.png";
import pageBg from "@/assets/page-bg.png";

const Staff = () => {
  const staffMembers = [
    {
      name: "Alex Rivera",
      role: "Owner & Founder",
      icon: Crown,
      color: "text-primary",
      borderColor: "border-primary/30",
      bio: "Founded HavenRP with a vision for quality roleplay. Oversees all server operations and development.",
      timezone: "PST (UTC-8)",
      contact: "Discord: alexrivera",
    },
    {
      name: "Jordan Matthews",
      role: "Head Administrator",
      icon: Shield,
      color: "text-secondary",
      borderColor: "border-secondary/30",
      bio: "Leads the staff team and handles high-level administrative decisions. 5+ years of RP management experience.",
      timezone: "EST (UTC-5)",
      contact: "Discord: jordanmatthews",
    },
    {
      name: "Sam Chen",
      role: "Lead Developer",
      icon: Code,
      color: "text-accent",
      borderColor: "border-accent/30",
      bio: "Develops custom scripts and maintains server infrastructure. Creates unique features for HavenRP.",
      timezone: "CST (UTC-6)",
      contact: "Discord: samchen",
    },
    {
      name: "Taylor Johnson",
      role: "Community Manager",
      icon: Users,
      color: "text-blue-accent",
      borderColor: "border-blue-accent/30",
      bio: "Manages community events, Discord, and player relations. Your go-to for community questions.",
      timezone: "EST (UTC-5)",
      contact: "Discord: taylorjohnson",
    },
    {
      name: "Morgan Lee",
      role: "Senior Moderator",
      icon: Shield,
      color: "text-primary",
      borderColor: "border-primary/30",
      bio: "Handles player reports, enforces rules, and assists with applications. Active across all timezones.",
      timezone: "GMT (UTC+0)",
      contact: "Discord: morganlee",
    },
    {
      name: "Casey Brooks",
      role: "Moderator",
      icon: Shield,
      color: "text-secondary",
      borderColor: "border-secondary/30",
      bio: "Supports players in-game and on Discord. Helps with technical issues and roleplay questions.",
      timezone: "PST (UTC-8)",
      contact: "Discord: caseybrooks",
    },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${pageBg})` }}
    >
      <div className="relative z-10">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section
          className="relative min-h-[50vh] flex items-center justify-center mb-16"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              <span className="text-neon-cyan">Our </span>
              <span className="text-neon-magenta">Team</span>
            </h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
              Meet the dedicated staff keeping HavenRP running smoothly 24/7
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className={`glass-card p-6 border ${member.borderColor} hover:shadow-neon-cyan transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-card/50 border ${member.borderColor}`}>
                    <member.icon className={`w-8 h-8 ${member.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-medium ${member.color}`}>
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="space-y-2 text-xs text-muted-foreground mb-4">
                  <p>
                    <span className="font-semibold text-foreground">Timezone:</span> {member.timezone}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Contact:</span> {member.contact}
                  </p>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className={`w-full border-${member.color} ${member.color} hover:bg-card/50`}
                  asChild
                >
                  <a
                    href={siteConfig.discordInvite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact on Discord
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Join Staff CTA */}
          <div className="mt-16 glass-card p-8 text-center border-2 border-accent/30">
            <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-4 text-accent">
              Interested in Joining Our Team?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for dedicated individuals to join our staff team. 
              Staff applications open periodically - join our Discord to stay updated 
              on recruitment opportunities.
            </p>
            <Button
              size="lg"
              className="bg-gradient-purple-blue hover:shadow-neon-purple transition-all duration-300"
              asChild
            >
              <a
                href={siteConfig.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Join Our Discord
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
};

export default Staff;
