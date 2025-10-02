import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Rules = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const rulesSections = [
    {
      id: "general",
      title: "General Rules",
      rules: [
        "Be respectful to all players and staff at all times.",
        "No racism, sexism, homophobia, or any form of discrimination.",
        "English only in global communications.",
        "No advertising other servers or communities.",
        "Follow all staff instructions without argument.",
        "Use of exploits or cheats will result in permanent ban.",
      ],
    },
    {
      id: "roleplay",
      title: "Roleplay Rules",
      rules: [
        "Stay in character at all times while in the city.",
        "Value your character's life (Fear RP).",
        "Create realistic and believable characters.",
        "No Random Deathmatch (RDM) - killing without valid RP reason.",
        "No Vehicle Deathmatch (VDM) - using vehicles as weapons without RP.",
        "All criminal activities must have proper roleplay buildup.",
        "Respect the New Life Rule (NLR) - forget events after respawn.",
      ],
    },
    {
      id: "crime",
      title: "Criminal Activity",
      rules: [
        "Robberies require minimum 2 police officers online.",
        "Bank heists require 4+ police officers online.",
        "Maximum hostage negotiation: 2 hostages for large heists.",
        "No cop baiting or unrealistic criminal behavior.",
        "Gang activities must have proper territories and RP.",
        "Drug operations require discretion and realistic risk assessment.",
      ],
    },
    {
      id: "police",
      title: "Police Rules",
      rules: [
        "Follow proper police procedures and chain of command.",
        "Searches require probable cause or warrant.",
        "Lethal force only as last resort or when threatened.",
        "Proper Miranda rights and booking procedures required.",
        "No corruption without admin approval and RP setup.",
        "Body cameras and dash cams should be respected in RP.",
      ],
    },
    {
      id: "ems",
      title: "EMS Rules",
      rules: [
        "Prioritize saving lives over everything else.",
        "Medical RP should be realistic and thorough.",
        "No reviving in active combat zones without police clearance.",
        "Respect patient confidentiality and HIPAA in RP.",
        "EMS can refuse treatment if threatened.",
        "Proper medical assessments and documentation required.",
      ],
    },
    {
      id: "metagaming",
      title: "Metagaming & Powergaming",
      rules: [
        "No metagaming - using out-of-character information in RP.",
        "No stream sniping or watching other players' streams during RP.",
        "No powergaming - forcing RP on others without giving them a chance.",
        "Cannot use third-party communication (Discord) for in-character info.",
        "Respect RP scenarios even if you know OOC information.",
        "Give others realistic chances to respond in RP situations.",
      ],
    },
    {
      id: "bans",
      title: "Bans & Appeals",
      rules: [
        "First offense: Warning or temporary ban depending on severity.",
        "Second offense: 3-7 day ban.",
        "Third offense: Permanent ban with appeal option after 30 days.",
        "Appeals must be submitted via Discord ticket system.",
        "Ban evasion results in permanent ban of all accounts.",
        "Staff decisions are final, arguments will extend ban duration.",
      ],
    },
  ];

  const filteredSections = rulesSections.map(section => ({
    ...section,
    rules: section.rules.filter(rule =>
      rule.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(section => section.rules.length > 0);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading font-bold mb-4">
              <span className="text-neon-cyan">Server </span>
              <span className="text-neon-magenta">Rules</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Please read and follow all rules to ensure a quality roleplay experience.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search rules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/50 border-primary/30 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="font-heading font-bold text-lg mb-4 text-primary">
                  Quick Jump
                </h3>
                <nav className="space-y-2">
                  {rulesSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Rules Content */}
            <div className="lg:col-span-3 space-y-8">
              {filteredSections.map((section) => (
                <div key={section.id} id={section.id} className="glass-card p-8 scroll-mt-24">
                  <h2 className="text-2xl font-heading font-bold mb-6 text-primary">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.rules.map((rule, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-secondary font-bold mt-1">•</span>
                        <span className="text-foreground/90">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {filteredSections.length === 0 && (
                <div className="glass-card p-12 text-center">
                  <p className="text-muted-foreground">No rules found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rules;
