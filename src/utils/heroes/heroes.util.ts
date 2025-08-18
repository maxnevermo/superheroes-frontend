import type {
  CreateHeroPayload,
  HeroListApiResponseType,
} from "@/types/api/heroes-list.api.type";
import {
  axiosDelete,
  axiosGet,
  axiosPost,
  axiosPut,
} from "../axios/index.axios.util";
import type { HeroType } from "@/types/heroes/hero-details.heroes.type";
import type { HeroCardType } from "@/types/heroes/hero-card.heroes.type";

export const fetchHeroes = async (page: number) => {
  return await axiosGet<HeroListApiResponseType>("/heroes", {
    params: { page },
  });
};

export const fetchHero = async (id: string) => {
  return await axiosGet<HeroType>(`/heroes/${id}`);
};

export const deleteHero = async (id: string) => {
  return await axiosDelete<HeroListApiResponseType>(`/heroes/${id}`);
};

export const createHero = async (payload: CreateHeroPayload, files: File[]) => {
  const formData = new FormData();
  formData.append("payload", JSON.stringify(payload));
  files.forEach((file) => formData.append("photos", file));

  return await axiosPost<HeroCardType>("/heroes", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const editHero = async (
  id: string,
  payload: CreateHeroPayload,
  newFiles: File[],
  keepPublicIds: string[]
) => {
  const formData = new FormData();
  formData.append("payload", JSON.stringify(payload));
  formData.append("keepPublicIds", JSON.stringify(keepPublicIds));
  newFiles.forEach((f) => formData.append("photos", f));

  const details = await axiosPut<HeroType>(`/heroes/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return details;
};

export const heroDetailsToCard = (d: HeroType): HeroCardType => ({
  id: d.id,
  nickname: d.nickname,
  mainImage: d.images?.[0]?.url ?? "",
});
