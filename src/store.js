import { create } from 'zustand';

export const useStore = create((set) => ({
  isResumeOpen: false,
  setResumeOpen: (isOpen) => set({ isResumeOpen: isOpen }),
  cursorVariant: 'default',
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
}));
