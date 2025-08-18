import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { JSX } from "react";

type ModalStateType = {
  isModalOpen: boolean;
  modalContent: JSX.Element | null;
};

export type ModalPayloadType = {
  content: JSX.Element;
};

const initialModalState: ModalStateType = {
  isModalOpen: false,
  modalContent: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    openModal(state, action: PayloadAction<ModalPayloadType>): void {
      state.isModalOpen = true;
      state.modalContent = action.payload.content;
    },
    closeModal(state): void {
      state.isModalOpen = false;
      state.modalContent = null;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
