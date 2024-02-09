import { create } from "zustand";

type SettingsStore = {
    value : string,
    setValue : (data : string) => void
};

export const usePortfolioState = create<SettingsStore>((set) => ({
    value : 'Weddings',
    setValue : (data) => set({value : data})
}))