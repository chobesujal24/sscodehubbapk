import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    q: "How do I verify a manual payment?",
    a: "Send a screenshot of your payment to the admin via WhatsApp. Once verified, your order status will be updated.",
  },
  {
    q: "Can I customize the plans?",
    a: "Yes! Contact us directly on WhatsApp for a custom quote tailored to your specific needs.",
  },
  {
    q: "What technologies do you use?",
    a: "We specialize in React, Node.js, Firebase, Flutter, and Python for AI integration.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">FAQ's</span>
            <h2 className="section-title mt-4">Frequently Asked Questions</h2>
            <p className="section-subtitle mt-4">Find quick answers to the most common support questions</p>
          </div>
        </FadeIn>

        {/* Still Have Questions card */}
        <FadeIn delay={0.1}>
          <div className="rounded-2xl bg-card border border-border/60 p-8 text-center mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Still Have Questions?</h3>
            <p className="text-sm text-muted-foreground mb-4">Still have questions? Feel free to get in touch with us today!</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-btn-dark text-sm font-semibold">
              Ask A Question <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.05}>
              <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
