import { HeroesList } from "@/components/HeroesList/HeroesList";
import { Pagination } from "@/components/Pagination/Pagination";
import type { HeroListApiResponseType } from "@/types/api/heroes-list.api.type";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import { HeroInfoModal } from "@/components/HeroInfoModal/HeroInfoModal";

function HeroesListPage() {
  const [heroesApiResponse, setHeroesApiResponse] =
    useState<HeroListApiResponseType>(useLoaderData());

  const { openModal } = useModal();
  const { items: heroes, ...pages } = heroesApiResponse;

  const handleAddHero = () => {
    openModal({
      content: (
        <HeroInfoModal
          onCreated={(newHero) =>
            setHeroesApiResponse((prev) => ({
              ...prev,
              items: [newHero, ...prev.items].slice(0, prev.items.length),
            }))
          }
        />
      ),
    });
  };

  return (
    <div className="min-h-screen flex flex-col px-15 bg-[#345ea1] pb-10">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-center text-5xl text-white flex-1">
          Heroes Gallery
        </h1>
        <button
          onClick={handleAddHero}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          Add Hero
        </button>
      </div>
      <div className="flex-1 flex flex-col">
        <HeroesList heroes={heroes} onChangeHero={setHeroesApiResponse} />
        <Pagination pages={pages} onShowMore={setHeroesApiResponse} />
      </div>
    </div>
  );
}

export { HeroesListPage };
