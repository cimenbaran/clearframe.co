import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import Portfolio from "./portfolio";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Team />
    </div>
  );
}