import { Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function CandleWish({ onWishMade }) {
  const [isBlownOut, setIsBlownOut] = useState(false);

  const makeWish = () => {
    if (isBlownOut) return;
    setIsBlownOut(true);
    onWishMade?.();
  };

  return (
    <button
      type="button"
      onClick={makeWish}
      className="group mx-auto mt-7 flex min-h-[25rem] w-full max-w-sm flex-col items-center justify-center rounded-[1.5rem] border border-white/65 bg-white/35 px-3 py-6 shadow-polaroid backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/45 focus:outline-none focus:ring-4 focus:ring-gold/40 sm:max-w-md sm:px-6 sm:py-7"
      aria-pressed={isBlownOut}
      aria-label={isBlownOut ? 'Birthday candle blown out' : 'Blow out birthday candle'}
    >
      <svg
        viewBox="0 0 260 360"
        className="h-auto w-full max-w-[20rem] overflow-visible sm:max-w-[23rem]"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cakeTop" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f8fdff" />
            <stop offset="52%" stopColor="#dff6ff" />
            <stop offset="100%" stopColor="#86d9ff" />
          </linearGradient>
          <linearGradient id="cakeBase" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="48%" stopColor="#dff6ff" />
            <stop offset="100%" stopColor="#78cdf5" />
          </linearGradient>
          <radialGradient id="watercolor" cx="35%" cy="24%" r="78%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#86d9ff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#38a7e8" stopOpacity="0.12" />
          </radialGradient>
          <linearGradient id="silverRibbon" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#c8d8e1" />
            <stop offset="45%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#b7c9d4" />
          </linearGradient>
          <radialGradient id="cakeGlow" cx="50%" cy="42%" r="68%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="62%" stopColor="#86d9ff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#38a7e8" stopOpacity="0" />
          </radialGradient>
          <filter id="goldGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="130" cy="338" rx="102" ry="16" fill="#17476b" opacity="0.14" />
        <ellipse cx="130" cy="250" rx="112" ry="102" fill="url(#cakeGlow)" opacity="0.85" />

        <path
          d="M53 235h154c13 0 24 11 24 24v45c0 16-13 29-29 29H58c-16 0-29-13-29-29v-45c0-13 11-24 24-24Z"
          fill="url(#cakeBase)"
          stroke="#d7e4ec"
          strokeWidth="4"
        />
        <path
          d="M58 244h144c9 0 17 7 17 16v36c0 12-10 22-22 22H63c-12 0-22-10-22-22v-36c0-9 8-16 17-16Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.65"
        />
        <path
          d="M31 255c17 12 31-6 45 7 13 13 27 13 41 0 13-12 27-12 41 0 14 13 27 13 41 0 10-9 20-4 31-7v26H31Z"
          fill="#f8fdff"
          opacity="0.9"
        />
        <path
          d="M54 235c22 19 35-8 52 9 16 16 30 14 48 0 18-14 31 9 51-9"
          fill="none"
          stroke="#f8fdff"
          strokeWidth="15"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path d="M57 279h146" stroke="url(#silverRibbon)" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
        <path d="M58 289h144" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.72" />
        <path d="M72 305c18 9 35 9 52 0M139 305c18 9 35 9 52 0" fill="none" stroke="#f5c85f" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        <path d="M78 258c16 7 29 7 45 0M139 258c16 7 29 7 45 0" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.65" />

        <path
          d="M77 166h106c14 0 25 11 25 25v37c0 14-11 25-25 25H77c-14 0-25-11-25-25v-37c0-14 11-25 25-25Z"
          fill="url(#cakeTop)"
          stroke="#d7e4ec"
          strokeWidth="4"
        />
        <path
          d="M81 174h98c9 0 17 8 17 17v29c0 10-8 18-18 18H82c-10 0-18-8-18-18v-29c0-9 8-17 17-17Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.68"
        />
        <path
          d="M53 185c13 10 24-6 35 5 11 12 24 12 36 0 12-11 24-11 36 0 12 12 24 12 36 0 4-4 8-6 12-6v22H53Z"
          fill="#f8fdff"
          opacity="0.95"
        />
        <path
          d="M73 169c15 14 27-5 41 7 13 12 25 12 39 0 13-12 22 7 36-7"
          fill="none"
          stroke="#f8fdff"
          strokeWidth="13"
          strokeLinecap="round"
          opacity="0.95"
        />
        <path d="M70 214h120" stroke="url(#silverRibbon)" strokeWidth="4" strokeLinecap="round" opacity="0.82" />
        <path d="M72 226c17 7 31 7 47 0M139 226c17 7 31 7 47 0" fill="none" stroke="#d7e4ec" strokeWidth="3" strokeLinecap="round" opacity="0.9" />

        <path
          d="M58 177c38-20 98-19 145 2M38 248c49-20 128-20 184 0"
          fill="none"
          stroke="url(#watercolor)"
          strokeWidth="24"
          strokeLinecap="round"
          opacity="0.55"
        />

        <g opacity="0.95">
          {[66, 91, 116, 141, 166, 191].map((cx) => (
            <circle key={`base-pearl-${cx}`} cx={cx} cy="279" r="3.2" fill="#f8fdff" stroke="#d7e4ec" strokeWidth="1" />
          ))}
          {[80, 105, 130, 155, 180].map((cx) => (
            <circle key={`top-pearl-${cx}`} cx={cx} cy="214" r="2.7" fill="#f8fdff" stroke="#d7e4ec" strokeWidth="1" />
          ))}
        </g>

        <g filter="url(#softGlow)">
          <path d="M70 207c8-11 21-11 28 0 9 0 15 6 15 14H57c0-8 5-14 13-14Z" fill="#f8fdff" />
          <path d="M177 286c7-10 19-10 26 0 8 0 13 5 13 12h-51c0-7 5-12 12-12Z" fill="#f8fdff" />
          <path d="M43 267c7-10 18-10 25 0 8 0 14 5 14 13H30c0-8 5-13 13-13Z" fill="#f8fdff" opacity="0.9" />
          <path d="M182 184c6-8 16-8 21 0 7 0 12 5 12 11h-45c0-6 5-11 12-11Z" fill="#f8fdff" opacity="0.92" />
        </g>

        <g filter="url(#goldGlow)">
          <path d="M201 219l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1 3-7Z" fill="#f5c85f" />
          <path d="M57 291l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1 3-7Z" fill="#f5c85f" />
          <path d="M128 191l2.2 5.2 5.6.5-4.2 3.7 1.3 5.5-4.9-2.9-4.9 2.9 1.3-5.5-4.2-3.7 5.6-.5 2.2-5.2Z" fill="#f5c85f" />
          <circle cx="152" cy="190" r="4" fill="#f5c85f" />
          <circle cx="99" cy="268" r="4" fill="#f5c85f" />
          <circle cx="190" cy="263" r="3" fill="#d7e4ec" />
          <circle cx="87" cy="196" r="3" fill="#d7e4ec" />
        </g>

        <ellipse cx="130" cy="165" rx="26" ry="7" fill="#17476b" opacity="0.1" />
        <rect x="117" y="76" width="26" height="94" rx="10" fill="#f8fdff" stroke="#f5c85f" strokeWidth="3.5" />
        <path d="M123 90c5 7 10 7 15 0M123 113c5 7 10 7 15 0M123 136c5 7 10 7 15 0" fill="none" stroke="#86d9ff" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="130" y1="75" x2="130" y2="59" stroke="#17476b" strokeWidth="4" strokeLinecap="round" />

        {!isBlownOut ? (
          <g className="origin-[130px_44px] animate-flame">
            <path d="M130 16c15 15 20 29 8 42-6 6-17 6-23-1-12-14 1-30 15-41Z" fill="#f5c85f" />
            <path d="M130 29c7 7 9 15 3 21-3 3-9 3-12 0-6-7 2-15 9-21Z" fill="#f8fdff" />
          </g>
        ) : (
          <g opacity="0.55">
            <path d="M128 45c-17-8-28-4-37 7" fill="none" stroke="#17476b" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 8" />
            <path d="M136 36c17-8 29-4 38 7" fill="none" stroke="#17476b" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 8" />
          </g>
        )}
      </svg>

      <span className="mt-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold drop-shadow-sm">
        <Sparkles className="h-4 w-4" />
        {isBlownOut ? 'Wish made' : 'Tap to wish'}
      </span>
    </button>
  );
}
