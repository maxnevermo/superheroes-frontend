import type { LoaderFunctionArgs } from "react-router-dom";
import type { HeroType } from "@/types/heroes/hero-details.heroes.type";
import { axiosGet } from "@/utils/axios/index.axios.util";

export const heroDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  return await axiosGet<HeroType>(
    `${import.meta.env.VITE_API_URL}/heroes/${id}`
  );
};
