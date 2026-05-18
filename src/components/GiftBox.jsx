import { Gift } from 'lucide-react';

export default function GiftBox({ onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex min-h-[28rem] w-full max-w-[22rem] flex-col items-center justify-center rounded-[2rem] border border-white/65 bg-white/30 px-5 py-8 text-center shadow-glow backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/40 focus:outline-none focus:ring-4 focus:ring-gold/40 sm:max-w-sm sm:px-8 sm:py-10"
      aria-label="Open birthday surprise"
    >
      <span className="absolute inset-x-8 top-5 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />

      <span className="relative grid h-44 w-44 place-items-center rounded-[2rem] bg-gradient-to-br from-cloud via-mist to-sky shadow-gold animate-float sm:h-52 sm:w-52">
        <span className="absolute inset-0 overflow-hidden rounded-[2rem]">
          <span className="absolute top-0 h-full w-16 bg-white/65 blur-sm animate-shimmer" />
        </span>
        <span className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-gold/90" />
        <span className="absolute top-1/2 h-8 w-full -translate-y-1/2 bg-gold/90" />
        <Gift className="relative z-10 h-20 w-20 text-white drop-shadow-[0_3px_12px_rgba(23,71,107,0.22)] transition duration-500 group-hover:scale-110" />
      </span>

      <span className="mt-8 font-display text-4xl text-cloud drop-shadow-[0_2px_12px_rgba(23,71,107,0.28)]">
        Open Me
      </span>
      <span className="mt-3 max-w-[16rem] text-sm leading-6 text-midnight/75">
        There is a small surprise hiding here, wrapped in clouds and gold.
      </span>
    </button>
  );
}
