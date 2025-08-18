import type { HeroSuperpowersEnum } from "@/enums/heroes/superpowers.heroes.enum";

type ImageType = {
  url: string;
  publicId: string;
};

export type HeroType = {
  nickname: string;
  realName: string;
  originDescription: string;
  superPowers: HeroSuperpowersEnum[];
  catchPhrase: string;
  images: ImageType[];
};
