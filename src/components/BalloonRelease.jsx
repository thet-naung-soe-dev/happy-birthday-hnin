import { useEffect, useState } from 'react';

const balloons = [
  { left: '9%', size: 58, color: '#f5c85f', delay: '0ms', duration: '5.2s' },
  { left: '20%', size: 48, color: '#f8fdff', delay: '180ms', duration: '5.7s' },
  { left: '32%', size: 66, color: '#86d9ff', delay: '60ms', duration: '5.4s' },
  { left: '46%', size: 54, color: '#d7e4ec', delay: '260ms', duration: '5.9s' },
  { left: '58%', size: 62, color: '#f5c85f', delay: '120ms', duration: '5.5s' },
  { left: '70%', size: 50, color: '#f8fdff', delay: '340ms', duration: '6s' },
  { left: '84%', size: 64, color: '#38a7e8', delay: '220ms', duration: '5.6s' },
];

export default function BalloonRelease({ releaseId }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!releaseId) return;

    setIsVisible(true);
    const timer = window.setTimeout(() => setIsVisible(false), 6500);

    return () => window.clearTimeout(timer);
  }, [releaseId]);

  if (!isVisible) return null;

  return (
    <div
      key={releaseId}
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {balloons.map((balloon, index) => (
        <span
          key={`${releaseId}-${balloon.left}`}
          className="absolute -bottom-28 block animate-balloonFloat"
          style={{
            left: balloon.left,
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
          }}
        >
          <span
            className="relative block animate-balloonSway rounded-[50%_50%_46%_46%] border border-white/55 shadow-[inset_-10px_-14px_22px_rgba(23,71,107,0.16),inset_8px_10px_18px_rgba(255,255,255,0.46),0_12px_30px_rgba(23,71,107,0.16)]"
            style={{
              width: balloon.size,
              height: Math.round(balloon.size * 1.22),
              background: `radial-gradient(circle at 31% 24%, rgba(255,255,255,0.95) 0 10%, transparent 12%), linear-gradient(145deg, rgba(255,255,255,0.4), ${balloon.color})`,
              animationDelay: `${index * 120}ms`,
            }}
          >
            <span className="absolute bottom-[-7px] left-1/2 h-3 w-4 -translate-x-1/2 rotate-45 rounded-sm bg-current text-white/70" />
            <span className="absolute left-1/2 top-full h-28 w-px -translate-x-1/2 bg-white/65" />
          </span>
        </span>
      ))}
    </div>
  );
}
