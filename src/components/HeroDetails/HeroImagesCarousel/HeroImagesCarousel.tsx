import type { HeroType } from "@/types/heroes/hero-details.heroes.type";
import { useEffect, useState } from "react";

type HeroImagesCarouselProps = {
  hero: HeroType;
};

function HeroImagesCarousel({ hero }: HeroImagesCarouselProps) {
  const [activeImage, setActiveImage] = useState<string>(hero.images[0].url);

  useEffect(() => {
    setActiveImage(hero.images[0].url);
  }, [hero]);

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <img
          src={activeImage}
          alt={hero.nickname}
          className="w-96 h-96 object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {hero.images.map((image, index) => (
            <img
              key={image.publicId}
              src={image.url}
              alt={`${hero.nickname} ${index + 1}`}
              onClick={() => setActiveImage(image.url)}
              className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition flex-shrink-0 ${
                activeImage === image.url
                  ? "border-blue-500"
                  : "border-transparent hover:border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { HeroImagesCarousel };
