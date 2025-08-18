import type { HeroSuperpowersEnum } from "@/enums/heroes/superpowers.heroes.enum";

export type HeroType = {
  nickname: string;
  realName: string;
  originDescription: string;
  superPowers: HeroSuperpowersEnum[];
  catchPhrase: string;
  images: string[];
};
