import type { HeroType } from "@/types/heroes/hero-details.heroes.type";

function HeroInfo({ hero }: { hero: HeroType }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-[700] text-gray-900 mb-2">
          {hero.nickname}
        </h1>
        <h2 className="text-xl font-[600] text-gray-600">{hero.realName}</h2>
      </div>
      <div>
        <h3 className="text-lg font-[600] text-gray-900 mb-3">Origin Story</h3>
        <p className="text-gray-600">{hero.originDescription}</p>
      </div>
      <div>
        <h3 className="text-lg font-[600] text-gray-900 mb-3">Super Powers</h3>
        <div className="flex flex-wrap gap-2">
          {hero.superPowers.map((power, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-[500]"
            >
              {power}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-[600] text-gray-900 mb-3">Catch Phrase</h3>
        <blockquote className="italic text-gray-700 text-lg border-l-4 border-blue-500 pl-4">
          "{hero.catchPhrase}"
        </blockquote>
      </div>
    </div>
  );
}

export { HeroInfo };
