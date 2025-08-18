import type { HeroSuperpowersEnum } from "@/enums/heroes/superpowers.heroes.enum";
import type { HeroCardType } from "../heroes/hero-card.heroes.type";

export type HeroListApiResponseType = {
  items: HeroCardType[];
  page: number;
  totalPages: number;
};

export type CreateHeroPayload = {
  nickname: string;
  realName: string;
  originDescription: string;
  catchPhrase: string;
  superPowers: HeroSuperpowersEnum[];
};
