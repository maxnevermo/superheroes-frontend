import type { HeroListApiResponseType } from "@/types/api/heroes-list.api.type";
import { fetchHeroes } from "@/utils/heroes/heroes.util";
import type { Dispatch, SetStateAction } from "react";

type PaginationPagesProps = {
  onSelectPage: Dispatch<SetStateAction<HeroListApiResponseType>>;
  pagesCount: number;
  activePage: number;
};

function PaginationPages({
  onSelectPage,
  pagesCount,
  activePage,
}: PaginationPagesProps) {
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const selectPage = async (pageNumber: number) => {
    const fetchedHeroes = await fetchHeroes(pageNumber);
    onSelectPage(fetchedHeroes);
  };

  return (
    <ul className="flex gap-1 items-center">
      {pages.map((page) => (
        <li key={page}>
          <button
            style={{
              color: "#FFFFFF",
              textDecoration: activePage === page ? "underline" : "none",
            }}
            onClick={() => selectPage(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
}

export { PaginationPages };
