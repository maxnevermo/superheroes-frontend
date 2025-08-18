import type { HeroCardType } from "@/types/heroes/hero-card.heroes.type";
import { Link } from "react-router-dom";

type HeroCardProps = {
  hero: HeroCardType;
};

function HeroCard({ hero }: HeroCardProps) {
  return (
    <li className="rounded-sm overflow-hidden hover:scale-[110%] transition-all duration-300 bg-white p-1">
      <Link to={hero.id} className="h-[310px] block">
        <div className="h-full flex flex-col">
          <img
            className="h-3/4 w-full object-cover"
            src={hero.mainImage}
            alt={hero.nickname}
          />
          <div className="h-1/4 bg-[#EFF4FA] flex items-center justify-center">
            <p className="text-center text-4xl">{hero.nickname}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export { HeroCard };
