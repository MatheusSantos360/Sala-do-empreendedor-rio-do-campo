import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Materials } from "@/components/Materials";
import { NavBar } from "@/components/NavBar";
import { Services } from "@/components/Services";

export default function Home() {
  return <div>
    <NavBar />
    <Hero />
    <About />
    <Services />
    <Materials />
  </div>
}
