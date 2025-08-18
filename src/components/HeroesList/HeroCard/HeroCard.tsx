import type { HeroCardType } from "@/types/heroes/hero-card.heroes.type";
import { Link } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import { HeroInfoModal } from "@/components/HeroInfoModal/HeroInfoModal";
import { DeleteConfirmModal } from "@/components/ConfirmModal/ConfirmModal";
import { deleteHero, fetchHero } from "@/utils/heroes/heroes.util";
import type { Dispatch, SetStateAction } from "react";
import type { HeroListApiResponseType } from "@/types/api/heroes-list.api.type";

type HeroCardProps = {
  onChangeHero: Dispatch<SetStateAction<HeroListApiResponseType>>;
  hero: HeroCardType;
};

function HeroCard({ hero, onChangeHero }: HeroCardProps) {
  const { openModal } = useModal();

  const handleEdit = async () => {
    const fetchedHero = await fetchHero(hero.id);
    openModal({
      content: <HeroInfoModal hero={fetchedHero} isEdit={true} />,
    });
  };

  const handleConfirmDelete = async (id: string) => {
    await deleteHero(id);

    onChangeHero((prev) => ({
      ...prev,
      items: prev.items.filter((h) => h.id !== id),
    }));
  };

  const handleDelete = async () => {
    openModal({
      content: (
        <DeleteConfirmModal
          heroName={hero.nickname}
          onConfirm={() => handleConfirmDelete(hero.id)}
        />
      ),
    });
  };

  return (
    <li className="rounded-sm overflow-hidden hover:scale-[110%] transition-all duration-300 bg-white p-1 relative group">
      <Link to={hero.id} className="h-[310px] block">
        <div className="h-full flex flex-col">
          <img
            className="h-3/4 w-full object-cover"
            src={hero.mainImage}
            alt={hero.nickname}
          />
          <div className="h-1/4 bg-[#EFF4FA] flex items-center justify-center">
            <p className="text-center text-4xl">{hero.nickname}</p>
          </div>
        </div>
      </Link>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
        <button
          onClick={handleEdit}
          className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export { HeroCard };
