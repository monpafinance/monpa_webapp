import NavBar from "@/app/components/NavBar";
import AboutUs from "./sections/AboutUs";
import Benefits from "./sections/Benefits";
import Faqs from "./sections/Faqs";
import Hero from "./sections/Hero";
import HowItWork from "./sections/HowItWork";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutUs />
      <Benefits />
      <HowItWork />
      <Faqs />
      <Footer/>
    </div>
  );
}
