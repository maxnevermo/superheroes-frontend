import { HeroCard } from "./HeroCard/HeroCard";
import type { HeroCardType } from "@/types/heroes/hero-card.heroes.type";
import type { Dispatch, SetStateAction } from "react";
import type { HeroListApiResponseType } from "@/types/api/heroes-list.api.type";

type HeroesListType = {
  onChangeHero: Dispatch<SetStateAction<HeroListApiResponseType>>;
  heroes: HeroCardType[];
};

function HeroesList({ heroes, onChangeHero }: HeroesListType) {
  return (
    <ul className="w-full grid grid-cols-5 gap-5 mb-3">
      {heroes.map((hero) => (
        <HeroCard onChangeHero={onChangeHero} key={hero.id} hero={hero} />
      ))}
    </ul>
  );
}

export { HeroesList };
