import { create } from "zustand";

const useStore = create((set) => ({
  data: 25,
  setData: (newData) => set({ data: newData }),
}));

export default useStore;
