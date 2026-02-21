import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ComparisonSection from "@/components/ComparisonSection";
import TeamSection from "@/components/TeamSection";
import CTAFooter from "@/components/CTAFooter";
import FloatingAssets from "@/components/FloatingAssets";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <SEO
        title="Home"
        description="SSCODEHUB is a premium web and app development agency specializing in AI-powered SaaS solutions, modern UI/UX design, and scalable software."
      />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FloatingAssets variant="ambient" />
      <ShowcaseSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <ComparisonSection />
      <TeamSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
