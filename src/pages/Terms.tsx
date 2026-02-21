import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import FadeIn from "@/components/ui/FadeIn";
import SEO from "@/components/SEO";

const Terms = () => (
    <div className="min-h-screen bg-background text-foreground">
        <SEO
            title="Terms & Conditions"
            description="Read our Terms & Conditions to understand the rules and regulations for using SSCODEHUB services."
            url="https://sscodehub.web.app/terms"
        />
        <Navbar />
        <section className="pt-32 pb-24 px-6">
            <div className="max-w-3xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
                    <p className="text-sm text-muted-foreground mb-12">Last updated: February 2026</p>
                </FadeIn>

                <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
                    <FadeIn delay={0.05}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                            <p>By accessing or using the services provided by SSCODEHUB ("we", "us", or "our"), you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">2. Services</h2>
                            <p>SSCODEHUB provides website development, application development, UI/UX design, and related digital services. The scope of each project is defined at the time of booking and confirmed via mutual agreement.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">3. Payments</h2>
                            <p>All payments must be made upfront or as per the agreed milestone schedule. Prices are listed in Indian Rupees (INR). We accept payments via Razorpay and manual UPI transfer. A payment is considered complete once the full amount is received and verified.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">4. Delivery</h2>
                            <p>Project delivery timelines are communicated during the onboarding process. While we strive to deliver on time, delays may occur due to unforeseen circumstances. We will keep you informed of any changes to the estimated timeline.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.25}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">5. Intellectual Property</h2>
                            <p>Upon full payment, all project deliverables and source code become the intellectual property of the client. SSCODEHUB reserves the right to showcase completed work in our portfolio unless otherwise agreed upon.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">6. Revisions</h2>
                            <p>Each plan includes a defined number of revisions. Additional revisions beyond the agreed scope may incur extra charges. Major scope changes after project commencement will be treated as separate requests.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.35}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
                            <p>SSCODEHUB shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the total amount paid by the client for the specific service.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact</h2>
                            <p>For any questions regarding these terms, please reach out to us at <a href="mailto:sscodehubb@gmail.com" className="text-foreground underline underline-offset-4 hover:text-foreground/80">sscodehubb@gmail.com</a>.</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
        <CTAFooter />
    </div>
);

export default Terms;
