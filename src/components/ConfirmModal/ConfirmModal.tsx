import { useModal } from "@/hooks/useModal";

type DeleteConfirmModalProps = {
  heroName: string;
  onConfirm: () => void;
};

function DeleteConfirmModal({ heroName, onConfirm }: DeleteConfirmModalProps) {
  const { closeModal } = useModal();

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Delete Hero</h2>
      <p className="text-gray-700 mb-6">
        Are you sure you want to delete <strong>{heroName}</strong>? This action
        cannot be undone.
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleConfirm}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
        <button
          onClick={closeModal}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export { DeleteConfirmModal };
