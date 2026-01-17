import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";
import AiPlayground from "../components/home/AiPlayground";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AiPlayground />
      <CTASection />
      <Footer />
    </div>
  );
}
