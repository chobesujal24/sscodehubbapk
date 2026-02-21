import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import BookingModal from "./BookingModal";
import FadeIn from "@/components/ui/FadeIn";

const webPlans = [
  {
    name: "Basic",
    price: "₹2,999",
    features: ["Single Page Website", "Responsive Design", "Clean UI"],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    price: "₹7,999",
    features: ["Multi-Page Website", "Contact Form", "Customization Allowed"],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "₹16,999",
    features: ["Full Website + Admin", "Hosting + Firebase", "Custom Design", "24/7 Premium Support + SLA"],
    popular: false,
    cta: "Get Started",
  },
];

const appPlans = [
  {
    name: "Basic",
    price: "₹5,999",
    features: ["3-4 Screens", "Offline App", "Clean UI"],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    price: "₹14,999",
    features: ["Multi-Screen App", "Firebase + Login/Signup", "Customization Allowed"],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "₹24,999",
    features: ["Backend + Admin Support", "Hosting + Firebase", "Notification System", "24/7 Premium Support + SLA"],
    popular: false,
    cta: "Get Started",
  },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<"web" | "app">("web");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);

  const plans = activeTab === "web" ? webPlans : appPlans;

  const handleGetStarted = (planName: string, price: string) => {
    const planType = activeTab === "web" ? "Website" : "App";
    setSelectedPlan({ name: `${planName} ${planType}`, price });
    setModalOpen(true);
  };

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="section-label">Pricing</span>
            <h2 className="section-title mt-4">Flexible Plans for Everyone</h2>
            <p className="section-subtitle mt-4">Choose a plan that fits your goals and scale as you grow</p>
          </div>
        </FadeIn>

        {/* Tab toggle */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center items-center gap-2 mb-14">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === "web"
                ? "glass-btn-dark"
                : "glass-btn text-foreground"
                }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("app")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === "app"
                ? "glass-btn-dark"
                : "glass-btn text-foreground"
                }`}
            >
              App Development
            </button>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <FadeIn key={`${activeTab}-${p.name}`} delay={i * 0.1}>
              <div
                className={`relative h-full rounded-2xl border p-8 ${p.popular
                  ? "bg-card border-primary/40 glow-sm"
                  : "bg-card border-border/60"
                  }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-1">{p.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-foreground">{p.price}</span>
                </div>
                <button
                  onClick={() => handleGetStarted(p.name, p.price)}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all mb-8 ${p.popular
                    ? "glass-btn-dark"
                    : "glass-btn text-foreground"
                    }`}
                >
                  {p.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={selectedPlan?.name || ""}
        price={selectedPlan?.price || ""}
      />
    </section>
  );
};

export default PricingSection;
