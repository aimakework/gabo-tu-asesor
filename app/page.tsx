import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSection from "@/components/FilterSection";
import AnalysisCards from "@/components/AnalysisCards";
import ProcessSteps from "@/components/ProcessSteps";
import AboutSection from "@/components/AboutSection";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import MobileStickyButton from "@/components/MobileStickyButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FilterSection />
        <AnalysisCards />
        <ProcessSteps />
        <AboutSection />
        <CTAFinal />
        <Footer />
      </main>
      <MobileStickyButton />
    </>
  );
}
