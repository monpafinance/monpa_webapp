import NavBar from "@/app/components/NavBar";
import AboutUs from "./sections/AboutUs";
import Benefits from "./sections/Benefits";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutUs />
      <Benefits />
    </div>
  );
}
