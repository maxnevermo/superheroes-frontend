import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import {
  isModalOpenSelector,
  modalContentSelector,
} from "@/store/modal/modal-selectors";
import { useAppSelector } from "@/store";
import { useModal } from "@/hooks/useModal";

function Modal() {
  const isOpen = useAppSelector(isModalOpenSelector);
  const modalContent = useAppSelector(modalContentSelector);
  const { closeModal } = useModal();

  const handleOpenChange = (open: boolean): void => {
    if (!open) closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTitle />
      <DialogDescription />
      <DialogClose />
      <DialogContent className="w-full max-h-[80%] md:max-h-full overflow-y-scroll max-w-md max-sm:w-[95vw] max-sm:max-w-none max-sm:p-4 sm:max-w-lg md:max-w-xl">
        {modalContent}
      </DialogContent>
    </Dialog>
  );
}

export { Modal };
