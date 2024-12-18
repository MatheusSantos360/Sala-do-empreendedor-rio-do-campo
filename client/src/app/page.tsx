import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Materials } from "@/components/Materials";
import { NavBar } from "@/components/NavBar";
import { Services } from "@/components/Services";
import { TrainingPrograms } from "@/components/TrainingPrograms";

export default function Home() {
  return <div>
    <NavBar />
    <Hero />
    <About />
    <Services />
    <Materials />
    <TrainingPrograms />
  </div>
}
