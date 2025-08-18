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
      <DialogContent className="w-full">{modalContent}</DialogContent>
    </Dialog>
  );
}

export { Modal };
