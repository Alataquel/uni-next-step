import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import StudentFeatures from "@/components/StudentFeatures";
import UniversityFeatures from "@/components/UniversityFeatures";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <StudentFeatures />
      <UniversityFeatures />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
