import {
  ButtonSizesEnum,
  ButtonVariantsEnum,
} from "@/enums/ui/buttons/button.ui.enum";
import { CustomButton } from "../CustomButton/CustomButton";
import { PaginationPages } from "./PaginationPages/PaginationPages";
import type { Dispatch, SetStateAction } from "react";
import type { HeroListApiResponseType } from "@/types/api/heroes-list.api.type";
import { fetchHeroes } from "@/utils/heroes/heroes.util";

type PaginationProps = {
  onShowMore: Dispatch<SetStateAction<HeroListApiResponseType>>;
  pages: {
    page: number;
    totalPages: number;
  };
};

function Pagination({ onShowMore, pages }: PaginationProps) {
  const { page: currentPage, totalPages } = pages;

  const handleShowMore = async (page = currentPage) => {
    if (page >= totalPages) return;

    const nextPage = currentPage + 1;
    const fetchedNewHeroes = await fetchHeroes(nextPage);

    onShowMore((prev) => ({
      page: fetchedNewHeroes.page,
      totalPages: fetchedNewHeroes.totalPages,
      items: [...prev.items, ...fetchedNewHeroes.items],
    }));
  };

  const isLastPage = currentPage >= totalPages;

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="flex-1">
        <PaginationPages
          onSelectPage={onShowMore}
          pagesCount={totalPages}
          activePage={currentPage}
        />
      </div>
      <div className="flex-1 flex justify-center">
        <CustomButton
          config={{
            isFullHeight: true,
            size: ButtonSizesEnum.Large,
            variant: ButtonVariantsEnum.Primary,
          }}
          callback={handleShowMore}
          disabled={currentPage === totalPages}
        >
          {isLastPage ? "No more" : "Show more"}
        </CustomButton>
      </div>
      <div className="flex-1" />
    </div>
  );
}

export { Pagination };
