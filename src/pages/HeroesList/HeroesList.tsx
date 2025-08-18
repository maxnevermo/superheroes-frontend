import { HeroesList } from "@/components/HeroesList/HeroesList";
import { Pagination } from "@/components/Pagination/Pagination";
import type { HeroListApiResponseType } from "@/types/api/heroes-list.api.type";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function HeroesListPage() {
  const [heroesApiResponse, setHeroesApiResponse] =
    useState<HeroListApiResponseType>(useLoaderData());

  const { items: heroes, ...pages } = heroesApiResponse;

  return (
    <div className="min-h-screen flex flex-col px-15 bg-[#345ea1] pb-10">
      <h1 className="text-center text-5xl py-4 text-white">Heroes Gallery</h1>
      <div className="flex-1 flex flex-col">
        <HeroesList heroes={heroes} />
        <Pagination pages={pages} onShowMore={setHeroesApiResponse} />
      </div>
    </div>
  );
}

export { HeroesListPage };
