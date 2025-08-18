import type { RootState } from "@/store";

export const isModalOpenSelector = (state: RootState) =>
  state.modal.isModalOpen;

export const modalContentSelector = (state: RootState) =>
  state.modal.modalContent;
