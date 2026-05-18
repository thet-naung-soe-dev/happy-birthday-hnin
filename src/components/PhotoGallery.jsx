import { Images } from 'lucide-react';
import { useState } from 'react';

export default function PhotoGallery({ photos }) {
  return (
    <section className="w-full overflow-hidden">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold drop-shadow-sm sm:text-sm sm:tracking-[0.28em]">
            Little moments
          </p>
          <h2 className="mt-2 max-w-[20rem] font-display text-3xl leading-tight text-cloud drop-shadow-[0_2px_14px_rgba(23,71,107,0.22)] sm:max-w-none sm:text-4xl">
            Soft memories, saved like clouds
          </h2>
        </div>
      </div>

      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {photos.map((photo) => (
          <PolaroidCard key={photo.src} photo={photo} />
        ))}
      </div>
    </section>
  );
}

function PolaroidCard({ photo }) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <figure
      className={`w-[82vw] max-w-[19rem] shrink-0 snap-center rounded-sm bg-cloud p-3 pb-6 shadow-polaroid transition duration-300 hover:-translate-y-2 hover:scale-[1.02] sm:w-auto sm:max-w-none sm:shrink ${photo.rotate}`}
    >
      <div className="grid aspect-[4/5] place-items-center overflow-hidden bg-gradient-to-br from-cloud via-mist to-sky/70">
        {!hasImageError ? (
          <img
            src={photo.src}
            alt={photo.caption}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center px-5 text-center text-midnight/60">
            <Images className="h-12 w-12 text-gold" />
            <span className="mt-3 text-sm font-medium">
              Add your photo here
            </span>
            <span className="mt-1 break-all text-xs">
              {photo.src}
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-4 text-center font-display text-lg leading-6 text-midnight">
        {photo.caption}
      </figcaption>
    </figure>
  );
}
