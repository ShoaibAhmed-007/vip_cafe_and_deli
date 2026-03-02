import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import MenuSection from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Hours from "@/components/Hours";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <MenuSection />
        <Testimonials />
        <Hours />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
