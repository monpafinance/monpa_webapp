import NavBar from "@/app/components/NavBar";
import Footer from "./components/Footer";
import AboutUs from "./sections/AboutUs";
import Benefits from "./sections/Benefits";
import Faqs from "./sections/Faqs";
import Hero from "./sections/Hero";
import HowItWork from "./sections/HowItWork";

export default function Home() {
  return (
    <div className="max-w-full overflow-hidden">
      <NavBar />
      <Hero />
      <AboutUs />
      <Benefits />
      <HowItWork />
      <Faqs />
      <Footer />
    </div>
  );
}
