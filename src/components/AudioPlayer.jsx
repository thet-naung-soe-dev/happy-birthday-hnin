import { Pause, Play, Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AudioPlayer({ canStart, src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  useEffect(() => {
    if (!canStart || !audioRef.current) return;

    audioRef.current.volume = 0.35;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setNeedsGesture(false);
      })
      .catch(() => {
        setNeedsGesture(true);
      });
  }, [canStart]);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setNeedsGesture(false);
    } catch {
      setNeedsGesture(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-3 z-30 flex max-w-[calc(100vw-1.5rem)] items-center gap-2 rounded-full border border-white/65 bg-white/35 px-3 py-2 text-midnight shadow-polaroid backdrop-blur-xl sm:bottom-6 sm:right-6">
      <audio ref={audioRef} src={src} loop preload="auto" />
      <Volume2 className="h-5 w-5 shrink-0 text-gold drop-shadow-sm" aria-hidden="true" />
      <button
        type="button"
        onClick={toggleAudio}
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-midnight text-white shadow-gold transition hover:scale-105 hover:bg-midnight/90 focus:outline-none focus:ring-4 focus:ring-gold/40"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
      </button>
      {needsGesture && (
        <span className="hidden max-w-36 text-xs leading-4 text-midnight/70 sm:inline">
          Tap play for music
        </span>
      )}
    </div>
  );
}
