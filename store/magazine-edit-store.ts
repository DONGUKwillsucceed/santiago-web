import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MagazineEditState {
  magazineId: string;
  title: string;
  tags: string[];
  regionId: string;
  content: string;

  setId: (newId: string) => void;
  setTitle: (newTitle: string) => void;
  setTags: (newTags: string[]) => void;
  setRegionId: (newRegionId: string) => void;
  setContent: (newContent: string) => void;
  reset: () => void;
}

export const magazineEditStore = create(
  persist<MagazineEditState>(
    (set) => ({
      magazineId: "",
      title: "",
      tags: [],
      regionId: "",
      content: "",
      setId: (newId) => set({magazineId: newId}),
      setTitle: (newTitle) => set({ title: newTitle }),
      setTags: (newTags) => set({ tags: newTags }),
      setRegionId: (newRegionId) => set({ regionId: newRegionId }),
      setContent: (newContent) => set({ content: newContent }),
      reset: () => set({ title: "", tags: [], regionId: "", content: "" }),
    }),
    { name: "magazine-edit-key" }
  )
);

export default magazineEditStore;
