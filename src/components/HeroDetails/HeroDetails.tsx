import type { HeroType } from "@/types/heroes/hero-details.heroes.type";
import { HeroImagesCarousel } from "./HeroImagesCarousel/HeroImagesCarousel";
import { HeroInfo } from "./HeroInfo/HeroInfo";

type HeroDetailsProps = {
  hero: HeroType;
};

function HeroDetails({ hero }: HeroDetailsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 pt-15">
      <div className="flex flex-col items-center">
        <HeroImagesCarousel hero={hero} />
      </div>
      <div>
        <HeroInfo hero={hero} />
      </div>
    </div>
  );
}

export { HeroDetails };
