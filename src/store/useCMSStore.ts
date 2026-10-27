import { create } from "zustand";
import { cmsApi } from "@/services/cms";
import type { HomePageSections, GlobalSeoData } from "@/types/cms";

interface CmsState {
  globalSeo: GlobalSeoData | null;
  homeSections: HomePageSections | null;
  isLoadingGlobal: boolean;
  isLoadingHome: boolean;
  errorGlobal: string | null;
  errorHome: string | null;

  // Actions
  setGlobalSeo: (data: GlobalSeoData | null) => void;
  setHomeSections: (data: HomePageSections | null) => void;
  fetchGlobalSeo: () => Promise<void>;
  fetchHomePage: () => Promise<void>;
}

export const useCmsStore = create<CmsState>((set, get) => ({
  globalSeo: null,
  homeSections: null,
  isLoadingGlobal: false,
  isLoadingHome: false,
  errorGlobal: null,
  errorHome: null,

  setGlobalSeo: (data) => set({ globalSeo: data }),
  setHomeSections: (data) => set({ homeSections: data }),

  fetchGlobalSeo: async () => {
    if (get().isLoadingGlobal) return;
    set({ isLoadingGlobal: true, errorGlobal: null });
    try {
      const data = await cmsApi.getGlobalSeo();
      set({ globalSeo: data, isLoadingGlobal: false });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch global SEO";
      set({ errorGlobal: message, isLoadingGlobal: false });
    }
  },

  fetchHomePage: async () => {
    if (get().isLoadingHome) return;
    set({ isLoadingHome: true, errorHome: null });
    try {
      const data = await cmsApi.getHomePage();
      set({ homeSections: data, isLoadingHome: false });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch home page data";
      set({ errorHome: message, isLoadingHome: false });
    }
  },
}));
