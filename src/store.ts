import { create } from 'zustand'

interface AppState {
  appData: any
  setApp: (value: any) => void
}

const useAppStore = create<AppState>()((set) => ({
  appData: null,
  setApp: (value) => set(() => ({ appData: value })),
}))

export default useAppStore;