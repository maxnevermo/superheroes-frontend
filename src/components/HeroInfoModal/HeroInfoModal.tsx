import type { HeroType } from "@/types/heroes/hero-details.heroes.type";
import { HeroSuperpowersEnum } from "@/enums/heroes/superpowers.heroes.enum";
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useModal } from "@/hooks/useModal";
import { createHero } from "@/utils/heroes/heroes.util";
import type { HeroCardType } from "@/types/heroes/hero-card.heroes.type";

type HeroInfoModalProps = {
  hero?: HeroType;
  isEdit?: boolean;
  onCreated?: (newHero: HeroCardType) => void;
};

function HeroInfoModal({
  hero,
  isEdit = false,
  onCreated,
}: HeroInfoModalProps) {
  const { closeModal } = useModal();

  const [formData, setFormData] = useState({
    nickname: hero?.nickname || "",
    realName: hero?.realName || "",
    originDescription: hero?.originDescription || "",
    superPowers: (hero?.superPowers as HeroSuperpowersEnum[]) || [],
    catchPhrase: hero?.catchPhrase || "",
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (hero?.images) {
      setPreviewUrls(hero.images.map((img) => img.url));
    }
  }, [hero]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSuperPowerToggle = (power: HeroSuperpowersEnum) => {
    setFormData((prev) => ({
      ...prev,
      superPowers: prev.superPowers.includes(power)
        ? prev.superPowers.filter((p) => p !== power)
        : [...prev.superPowers, power],
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(0, 3);
    setSelectedFiles(files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (!isEdit) {
      const newHero = await createHero(formData, selectedFiles);
      onCreated?.(newHero);
      closeModal();
    } else {
      // TODO: ДОРОБИТИ РЕДАГУВАННЯ
      closeModal();
    }

    setSubmitting(false);
  };

  return (
    <div className="p-6 max-h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">
        {isEdit ? "Edit Hero" : "Add New Hero"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nickname</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Real Name</label>
          <input
            type="text"
            name="realName"
            value={formData.realName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Origin Description
          </label>
          <textarea
            name="originDescription"
            value={formData.originDescription}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Super Powers</label>
          <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
            {Object.values(HeroSuperpowersEnum).map((power) => (
              <label key={power} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.superPowers.includes(power)}
                  onChange={() => handleSuperPowerToggle(power)}
                  className="rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm">{power}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Catch Phrase</label>
          <input
            type="text"
            name="catchPhrase"
            value={formData.catchPhrase}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Images (max 3)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...(!isEdit && { required: true })}
          />
          {previewUrls.length > 0 && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {previewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-20 h-20 object-cover rounded border"
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2 bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {submitting ? "Saving..." : isEdit ? "Update Hero" : "Create Hero"}
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export { HeroInfoModal };
