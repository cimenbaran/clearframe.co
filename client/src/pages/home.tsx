import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { Team } from "@/components/sections/team";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      <Team />
    </div>
  );
}
