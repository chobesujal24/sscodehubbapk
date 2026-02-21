import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import FadeIn from "@/components/ui/FadeIn";
import SEO from "@/components/SEO";

const Privacy = () => (
    <div className="min-h-screen bg-background text-foreground">
        <SEO
            title="Privacy Policy"
            description="Our Privacy Policy explains how we collect, use, and protect your personal information at SSCODEHUB."
            url="https://sscodehub.web.app/privacy"
        />
        <Navbar />
        <section className="pt-32 pb-24 px-6">
            <div className="max-w-3xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-sm text-muted-foreground mb-12">Last updated: February 2026</p>
                </FadeIn>

                <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
                    <FadeIn delay={0.05}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h2>
                            <p>When you use our services or contact us, we may collect the following information:</p>
                            <ul className="list-disc list-inside space-y-1.5 mt-2">
                                <li>Name, email address, and phone number</li>
                                <li>Payment information (processed securely via Razorpay)</li>
                                <li>Project details and requirements provided by you</li>
                                <li>Usage data when you visit our website</li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
                            <ul className="list-disc list-inside space-y-1.5">
                                <li>To provide and deliver our services</li>
                                <li>To communicate with you about your project</li>
                                <li>To process payments and send invoices</li>
                                <li>To improve our website and services</li>
                                <li>To send service updates (with your consent)</li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">3. Data Security</h2>
                            <p>We implement industry-standard security measures to protect your personal information. Payment processing is handled by Razorpay, which complies with PCI-DSS standards. We do not store your card or bank details on our servers.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">4. Third-Party Sharing</h2>
                            <p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (e.g., hosting, payment processors) solely for the purpose of delivering our services.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.25}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">5. Cookies</h2>
                            <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some features may not function correctly without them.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
                            <p>You have the right to access, update, or request deletion of your personal data at any time. To exercise these rights, contact us at <a href="mailto:sscodehubb@gmail.com" className="text-foreground underline underline-offset-4 hover:text-foreground/80">sscodehubb@gmail.com</a>.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.35}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
                            <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of any changes.</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
        <CTAFooter />
    </div>
);

export default Privacy;
