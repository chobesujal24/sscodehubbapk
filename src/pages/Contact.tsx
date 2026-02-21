import { useState } from "react";
import { Phone, Mail, MessageSquare, Instagram, Github } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import FadeIn from "@/components/ui/FadeIn";
import SEO from "@/components/SEO";

const Contact = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = name ? `Name: ${name}\nMessage: ${message}` : message;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/917507156183?text=${encodedText}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <SEO
                title="Contact Us"
                description="Get in touch with SSCODEHUB for premium web and app development services. We're here to help you build your next big idea."
                url="https://sscodehub.web.app/contact"
            />
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                                <Phone className="w-4 h-4" />
                                Contact
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                Reach Us <span className="font-serif italic font-normal">Anytime</span>
                            </h1>
                            <p className="text-muted-foreground mt-4 text-base md:text-lg">
                                Have questions or need help? We're here for you
                            </p>
                        </div>
                    </FadeIn>

                    {/* Two-column grid */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Left column: info cards */}
                        <div className="space-y-6">
                            <FadeIn delay={0.1}>
                                <div className="rounded-2xl bg-card border border-border/60 p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-foreground/70" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground">Email Us</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                        Facing technical challenges or product concerns? We're here to assist
                                    </p>
                                    <a href="mailto:sscodehubb@gmail.com" className="text-sm text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
                                        sscodehubb@gmail.com
                                    </a>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="rounded-2xl bg-card border border-border/60 p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                                            <MessageSquare className="w-5 h-5 text-foreground/70" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground">Contact Sales</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                        Let's collaborate on custom solutions or discuss product insights
                                    </p>
                                    <a href="https://wa.me/917507156183?text=Hey%20SS%20Code%20Hub%2C%20I%20visited%20your%20website%20and%20interested%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="text-sm text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
                                        Book a call
                                    </a>
                                </div>
                            </FadeIn>

                            {/* Social links */}
                            <FadeIn delay={0.3}>
                                <div className="rounded-2xl bg-card border border-border/60 p-8">
                                    <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href="https://www.instagram.com/sscodehub/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-5 py-3 rounded-xl glass-btn text-foreground"
                                        >
                                            <Instagram className="w-5 h-5 text-foreground/70" />
                                            <span className="text-sm font-medium text-foreground">Instagram</span>
                                        </a>
                                        <a
                                            href="https://wa.me/917507156183?text=Hey%20SS%20Code%20Hub%2C%20I%20visited%20your%20website%20and%20interested%20to%20know%20more%20about%20your%20services."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-5 py-3 rounded-xl glass-btn text-foreground"
                                        >
                                            <WhatsAppIcon className="w-5 h-5 text-foreground/70" />
                                            <span className="text-sm font-medium text-foreground">WhatsApp</span>
                                        </a>
                                        <a
                                            href="https://github.com/chobesujal24"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-5 py-3 rounded-xl glass-btn text-foreground"
                                        >
                                            <Github className="w-5 h-5 text-foreground/70" />
                                            <span className="text-sm font-medium text-foreground">GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right column: contact form */}
                        <FadeIn delay={0.15}>
                            <div className="rounded-2xl bg-card border border-border/60 p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-foreground/70" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-8">
                                    We'd love to help! Let us know how
                                </h3>

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-foreground">Full Name</label>
                                        <Input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Ikta Sollork"
                                            className="bg-background border-border/40 h-11 rounded-lg focus-visible:ring-1 focus-visible:ring-primary/40 placeholder:text-muted-foreground/60"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-foreground">How may we assist you?</label>
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Give us more info.."
                                            rows={4}
                                            className="w-full bg-background border border-border/40 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/40 resize-y"
                                        />
                                    </div>

                                    <button type="submit" className="w-full h-12 glass-btn-dark rounded-lg font-semibold text-sm flex items-center justify-center">
                                        Send Your Message
                                    </button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <CTAFooter />
        </div>
    );
};

export default Contact;
