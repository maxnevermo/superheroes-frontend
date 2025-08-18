import { type AppDispatch } from "@/store";
import { modalActions, type ModalPayloadType } from "@/store/modal/modal-slice";
import { useDispatch } from "react-redux";

type UseModalType = {
  openModal: (modalContent: ModalPayloadType) => void;
  closeModal: () => void;
};

function useModal(): UseModalType {
  const dispatch = useDispatch<AppDispatch>();

  return {
    openModal(modalContent: ModalPayloadType): void {
      dispatch(modalActions.openModal(modalContent));
    },
    closeModal(): void {
      dispatch(modalActions.closeModal());
    },
  };
}

export { useModal };
