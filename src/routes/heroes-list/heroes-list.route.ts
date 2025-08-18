import type { HeroListApiResponseType } from "@/types/api/heroes-list.api.type";
import { axiosGet } from "@/utils/axios/index.axios.util";

export const heroesListLoader = async () => {
  return await axiosGet<HeroListApiResponseType>(
    `${import.meta.env.VITE_API_URL}/heroes`
  );
};
