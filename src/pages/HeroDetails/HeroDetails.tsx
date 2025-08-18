import { HeroDetails } from "@/components/HeroDetails/HeroDetails";
import type { HeroType } from "@/types/heroes/hero-details.heroes.type";
import { useLoaderData } from "react-router-dom";

function HeroDetailsPage() {
  const hero: HeroType = useLoaderData();

  return <HeroDetails hero={hero} />;
}

export { HeroDetailsPage };
