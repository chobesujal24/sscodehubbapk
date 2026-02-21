import { ArrowUpRight, Mail, Instagram, Github } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FadeIn from "@/components/ui/FadeIn";

const footerLinks = [
  { label: "Services", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const CTAFooter = () => (
  <>
    {/* CTA */}
    <section id="contact" className="py-24 px-6">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm italic text-muted-foreground mb-4">Reach out anytime</p>
          <h2 className="section-title">
            Ready to Build? Let's Build Together
          </h2>
          <FadeIn delay={0.2}>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full glass-btn-dark font-semibold text-sm"
            >
              Book
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </FadeIn>
    </section>

    {/* Footer */}
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="/" className="flex items-center gap-2">
              <span className="text-sm font-black text-foreground">SH</span>
              <span className="text-[10px] text-muted-foreground">SSCODEHUB</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4" />
              sscodehubb@gmail.com
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/sscodehub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-btn flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917507156183?text=Hey%20SS%20Code%20Hub%2C%20I%20visited%20your%20website%20and%20interested%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-btn flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/chobesujal24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-btn flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">© 2026 SSCODEHUB</p>
          <p className="text-xs text-muted-foreground">sscodehubb@gmail.com</p>
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooter;
