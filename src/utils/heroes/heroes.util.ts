import type { HeroListApiResponseType } from "@/types/api/heroes-list.api.type";
import { axiosGet } from "../axios/index.axios.util";

export const fetchHeroes = async (page: number) => {
  return await axiosGet<HeroListApiResponseType>("/heroes", {
    params: { page },
  });
};
