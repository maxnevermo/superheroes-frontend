import { HeroCard } from "./HeroCard/HeroCard";
import type { HeroCardType } from "@/types/heroes/hero-card.heroes.type";

type HeroesListType = {
  heroes: HeroCardType[];
};

function HeroesList({ heroes }: HeroesListType) {
  return (
    <ul className="w-full grid grid-cols-5 gap-5 mb-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </ul>
  );
}

export { HeroesList };
