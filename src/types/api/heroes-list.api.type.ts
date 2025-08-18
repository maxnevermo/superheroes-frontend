import type { HeroCardType } from "../heroes/hero-card.heroes.type";

export type HeroListApiResponseType = {
  items: HeroCardType[];
  page: number;
  totalPages: number;
};
