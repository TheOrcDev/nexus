import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
