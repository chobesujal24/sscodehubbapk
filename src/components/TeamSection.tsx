import FadeIn from "@/components/ui/FadeIn";

const team = [
  { name: "Swapnil Shinde", role: "Founder / CEO" },
  { name: "Rushikesh Gavhane", role: "Co-founder / CFO" },
  { name: "Tech Lead", role: "Senior Developer" },
  { name: "Manager", role: "Operations Head" },
  { name: "Future Dev", role: "AI Engineer" },
  { name: "Dev", role: "Client Manager" },
];

const colors = [
  "from-primary/30 to-accent/20",
  "from-accent/30 to-primary/20",
  "from-primary/20 to-success/20",
  "from-success/20 to-primary/30",
  "from-accent/20 to-primary/30",
  "from-primary/30 to-accent/30",
];

const TeamSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="section-label">Our Amazing Team</span>
          <h2 className="section-title mt-4">Get to Know Us</h2>
          <p className="section-subtitle mt-4">Everything you need to collaborate, create, and scale, all in one place.</p>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <div className="group rounded-2xl bg-card border border-border/60 overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className={`h-56 bg-gradient-to-br ${colors[i]} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-card/50 backdrop-blur flex items-center justify-center text-2xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                  {t.name.split(" ").map(w => w[0]).join("")}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
