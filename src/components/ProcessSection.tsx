import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, TrendingUp, ShoppingCart, Users, MousePointerClick, Building2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

/* ─── Decorative mock-dashboard illustrations ─── */

const ScoreBar = ({ label, score, color = "bg-primary" }: { label: string; score: number; color?: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0">
      <Building2 className="w-4 h-4 text-muted-foreground" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-semibold text-foreground mb-1">{label}</p>
      <div className="h-1.5 rounded-full bg-secondary/60 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
    </div>
    <span className="text-xs text-muted-foreground shrink-0">{score}% <span className="text-muted-foreground/60">Score</span></span>
  </div>
);

const MiniChart = ({ variant }: { variant: "line" | "bar" }) => {
  if (variant === "bar") {
    return (
      <div className="flex items-end gap-1.5 h-28">
        {[40, 65, 30, 80, 55, 90, 45, 70, 60, 85, 50, 75].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col gap-0.5">
            <div className="bg-primary/40 rounded-sm" style={{ height: `${h}%` }} />
            <div className="bg-primary/20 rounded-sm" style={{ height: `${h * 0.4}%` }} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <svg viewBox="0 0 200 60" className="w-full h-16" preserveAspectRatio="none">
      <path d="M0,50 Q20,45 40,30 T80,15 T120,35 T160,10 T200,25" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M0,55 Q30,50 50,40 T100,30 T140,45 T180,20 T200,35" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeOpacity="0.2" />
    </svg>
  );
};

/* Step 1 illustration: Analytics dashboard with stat cards + weakest systems */
const Step1Illustration = () => (
  <div className="relative w-full max-w-md mx-auto">
    {/* Top stat cards */}
    <div className="grid grid-cols-2 gap-3 mb-3">
      <div className="rounded-xl bg-card border border-border/50 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">Customers</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-secondary/50 text-muted-foreground">+ Chart</span>
        </div>
        <p className="text-2xl font-bold text-foreground">-32%</p>
        <MiniChart variant="line" />
      </div>
      <div className="rounded-xl bg-card border border-border/50 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">Cost Management</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-secondary/50 text-muted-foreground">+ Chart</span>
        </div>
        <p className="text-2xl font-bold text-foreground">-54%</p>
        <MiniChart variant="line" />
      </div>
    </div>
    {/* Bottom row */}
    <div className="grid grid-cols-[1fr_1.5fr] gap-3">
      <div className="rounded-xl bg-card border border-border/50 p-4">
        <span className="text-xs text-muted-foreground">Sales</span>
        <p className="text-lg font-bold text-foreground mt-1">$103,430 <span className="text-xs text-muted-foreground font-normal">-25%</span></p>
      </div>
      <div className="rounded-xl bg-card border border-border/50 p-4 space-y-3">
        <p className="text-xs font-semibold text-foreground">Weakest Systems</p>
        <ScoreBar label="Marketing & ads" score={32} />
        <ScoreBar label="AI Automation" score={14} />
        <ScoreBar label="Money & Finance" score={44} />
      </div>
    </div>
  </div>
);

/* Step 2 illustration: Activity chart + code snippet */
const Step2Illustration = () => (
  <div className="relative w-full max-w-md mx-auto">
    <div className="rounded-xl bg-card border border-border/50 p-4 mb-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-foreground">Activity</span>
        <span className="text-xs text-muted-foreground">Month</span>
      </div>
      <MiniChart variant="bar" />
      <div className="flex gap-4 text-[10px] text-muted-foreground mt-2 justify-between px-1">
        <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span>
      </div>
      <div className="flex gap-6 mt-3 pt-3 border-t border-border/30">
        <div className="flex items-center gap-1.5">
          <Users className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Users</span>
          <span className="text-sm font-bold text-foreground">3.6K</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MousePointerClick className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Clicks</span>
          <span className="text-sm font-bold text-foreground">2m</span>
        </div>
      </div>
    </div>
    {/* Code snippet card */}
    <div className="rounded-xl bg-primary/10 border border-border/30 p-4 -mt-6 ml-12 relative z-10">
      <pre className="text-[11px] leading-relaxed font-mono text-muted-foreground overflow-hidden">
        <code>{`// Build & Implement ->

async function generateResponse(prompt) {
  const response = await fetch('https://api.openai...',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      model: 'gpt-4',`}</code>
      </pre>
    </div>
  </div>
);

/* Step 3 illustration: Growth chart + score bars */
const Step3Illustration = () => (
  <div className="relative w-full max-w-md mx-auto">
    <div className="rounded-xl bg-card border border-border/50 p-4 mb-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-foreground">Growth & Efficiency</span>
      </div>
      {/* Curvy line chart */}
      <svg viewBox="0 0 200 80" className="w-full h-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,60 Q15,55 30,50 T60,30 T90,45 T120,15 T150,35 T180,10 T200,20" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M0,60 Q15,55 30,50 T60,30 T90,45 T120,15 T150,35 T180,10 T200,20 V80 H0Z" fill="url(#chartGrad)" />
      </svg>
      <div className="flex gap-4 text-[10px] text-muted-foreground mt-1 justify-between px-1">
        <span>Apr</span><span>May</span><span>Jun</span>
      </div>
      <p className="text-xs text-muted-foreground mt-3 border-t border-border/30 pt-3">Growth & Efficiency Driven by AI</p>
      <div className="flex gap-6 mt-2">
        <div className="flex items-center gap-1.5">
          <Users className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Users</span>
          <span className="text-sm font-bold text-foreground">3.6K</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MousePointerClick className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Clicks</span>
          <span className="text-sm font-bold text-foreground">2m</span>
        </div>
      </div>
    </div>
    {/* Score overlay card */}
    <div className="rounded-xl bg-card border border-border/50 p-4 -mt-4 ml-8 relative z-10 space-y-3">
      <ScoreBar label="Marketing & ads" score={84} />
      <ScoreBar label="AI Automation" score={94} color="bg-primary" />
      <ScoreBar label="Money & Finance" score={88} />
    </div>
  </div>
);

/* ─── Step data ─── */
const steps = [
  {
    num: "01",
    title: "Discover & Analyze",
    description: "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
    illustration: Step1Illustration,
  },
  {
    num: "02",
    title: "Design & Implement",
    description: "We create tailored AI workflows that align with your goals. Our team builds, tests, and deploys smart systems that integrate into your operations seamlessly.",
    illustration: Step2Illustration,
  },
  {
    num: "03",
    title: "Optimize & Scale",
    description: "We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation grows with it.",
    illustration: Step3Illustration,
  },
];

/* ─── Main component ─── */
const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const CurrentIllustration = steps[activeStep].illustration;

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">Process</span>
            <h2 className="section-title mt-4">Our Simple & Smart Process</h2>
            <p className="section-subtitle mt-4">
              Everything you need to collaborate, create, and scale, all in one place.
            </p>
          </div>
        </FadeIn>

        {/* Step tabs */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 gap-3 mb-16 max-w-2xl mx-auto">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(i)}
                className={`py-3 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${activeStep === i
                  ? "glass-btn-dark"
                  : "glass-btn text-foreground border-border/60"
                  }`}
              >
                Step {i + 1}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Two-column content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left: Illustration */}
            <div className="order-2 lg:order-1">
              <CurrentIllustration />
            </div>

            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <span className="text-sm text-muted-foreground/50 font-medium">{steps[activeStep].num}</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-5">{steps[activeStep].title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">{steps[activeStep].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProcessSection;
