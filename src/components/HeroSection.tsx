import { ArrowUpRight, ChevronDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import FloatingAssets from "@/components/FloatingAssets";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-6">
      {/* 3D Floating Assets */}
      <FloatingAssets variant="hero" />

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/[0.08] blur-[150px] rounded-full opacity-60" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/[0.06] blur-[120px] rounded-full opacity-40" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent/[0.05] blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/40 border border-border/50 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
            Web And App Development
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05]">
            Premium Web & <br />
            <span className="gradient-text">App Development.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Turn your vision into reality with SSCODEHUB. We build scalable, high-performance websites and applications.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex justify-center pt-2">
            <a
              href="#pricing"
              className="group px-8 py-4 rounded-full glass-btn-dark font-semibold text-base flex items-center gap-2"
            >
              Book Now
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.8} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
        </div>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
