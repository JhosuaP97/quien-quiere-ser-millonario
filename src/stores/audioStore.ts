import { create } from "zustand";

interface AudioState {
  volume: number;
  audioEnabled: boolean;
  setVolume: (volume: number) => void;
  setAudioEnabled: (enabled: boolean) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  volume: 0.5,
  audioEnabled: false,
  setVolume: (volume: number) => set({ volume }),
  setAudioEnabled: (audioEnabled: boolean) => set({ audioEnabled }),
}));
