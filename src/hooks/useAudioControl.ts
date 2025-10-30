import { useEffect, useRef } from "react";
import { useAudioStore } from "../stores/audioStore";

export const useAudioControl = () => {
  const { volume, audioEnabled, setVolume, setAudioEnabled } = useAudioStore();

  // Hook para controlar el volumen de una referencia de audio
  const useAudioRef = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const currentVolume = useAudioStore((state) => state.volume);

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = currentVolume;
      }
    }, [currentVolume]);

    const playAudio = () => {
      if (audioEnabled && audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Error reproduciendo audio:", error);
        });
      }
    };

    return { audioRef, playAudio };
  };

  return {
    volume,
    audioEnabled,
    setVolume,
    setAudioEnabled,
    useAudioRef,
  };
};
