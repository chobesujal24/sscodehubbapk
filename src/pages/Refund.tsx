import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import FadeIn from "@/components/ui/FadeIn";
import SEO from "@/components/SEO";

const Refund = () => (
    <div className="min-h-screen bg-background text-foreground">
        <SEO
            title="Refund Policy"
            description="Our Refund Policy outlines the conditions under which you may request a refund for SSCODEHUB services."
            url="https://sscodehub.web.app/refund"
        />
        <Navbar />
        <section className="pt-32 pb-24 px-6">
            <div className="max-w-3xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Refund Policy</h1>
                    <p className="text-sm text-muted-foreground mb-12">Last updated: February 2026</p>
                </FadeIn>

                <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
                    <FadeIn delay={0.05}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">1. Overview</h2>
                            <p>We at SSCODEHUB are committed to delivering high-quality services. However, if you are not satisfied with the service, our refund policy is designed to ensure fairness for both parties.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">2. Eligibility</h2>
                            <p>Refund requests are accepted within 7 days of the initial payment <strong className="text-foreground">only if</strong> work has not yet commenced on the project. Once development work has started, refunds will be prorated based on work completed.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">3. Non-Refundable Items</h2>
                            <ul className="list-disc list-inside space-y-1.5">
                                <li>Domain registration and hosting fees (third-party charges)</li>
                                <li>Custom design work that has been completed and approved</li>
                                <li>Projects that have been fully delivered and deployed</li>
                                <li>Coupon-discounted or promotional purchases</li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">4. Refund Process</h2>
                            <p>To request a refund, email us at <a href="mailto:sscodehubb@gmail.com" className="text-foreground underline underline-offset-4 hover:text-foreground/80">sscodehubb@gmail.com</a> with your order details and reason for the request. Refunds are typically processed within 7–10 business days after approval.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.25}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">5. Cancellations</h2>
                            <p>You may cancel your project at any time. If work has already begun, you will be billed for the portion of work completed. Any unused prepaid balance will be refunded.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">6. Disputes</h2>
                            <p>If you are unsatisfied with the resolution, please reach out to us directly via WhatsApp or email. We are committed to resolving all disputes amicably.</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
        <CTAFooter />
    </div>
);

export default Refund;
