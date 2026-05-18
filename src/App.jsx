import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import AudioPlayer from './components/AudioPlayer.jsx';
import BalloonRelease from './components/BalloonRelease.jsx';
import BirthdayFooter from './components/BirthdayFooter.jsx';
import CandleWish from './components/CandleWish.jsx';
import GiftBox from './components/GiftBox.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import TypingWish from './components/TypingWish.jsx';

// const photos = [
//   {
//     src: './images/photo1.jpg',
//     caption: 'That smile I keep thinking about',
//     rotate: '-rotate-2',
//   },
//   {
//     src: './images/photo2.jpg',
//     caption: 'A tiny memory, a big feeling',
//     rotate: 'rotate-1',
//   },
//   {
//     src: './images/photo3.jpg',
//     caption: 'The day felt softer with you in it',
//     rotate: '-rotate-1',
//   },
//   {
//     src: './images/photo4.jpg',
//     caption: 'My favorite kind of sunshine',
//     rotate: 'rotate-2',
//   },
// ];
const photos = [
  {
    src: `${import.meta.env.BASE_URL}images/photo1.jpg`, 
    caption: 'That smile I keep thinking about',
    rotate: '-rotate-2',
  },
  {
    src: `${import.meta.env.BASE_URL}images/photo2.jpg`,
    caption: 'A tiny memory, a big feeling',
    rotate: 'rotate-1',
  },
  {
    src: `${import.meta.env.BASE_URL}images/photo3.jpg`,
    caption: 'The day felt softer with you in it',
    rotate: '-rotate-1',
  },
  {
    src: `${import.meta.env.BASE_URL}images/photo4.jpg`,
    caption: 'My favorite kind of sunshine',
    rotate: 'rotate-2',
  },
];

const birthdayMessage =
  "Happy Birthday, Hnin .I hope your special day is as lovely, bright, and wonderful as you are. May your year ahead be full of beautiful surprises, joy, and laughter. You deserve the absolute best. ";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [canStartMusic, setCanStartMusic] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const [balloonReleaseId, setBalloonReleaseId] = useState(0);

  const openSurprise = () => {
    setIsOpened(true);
    setCanStartMusic(true);
  };

  const handleWishMade = () => {
    setWishMade(true);
    setBalloonReleaseId((currentId) => currentId + 1);

    confetti({
      particleCount: 170,
      spread: 78,
      origin: { y: 0.52 },
      colors: ['#38a7e8', '#86d9ff', '#f8fdff', '#f5c85f', '#d7e4ec'],
    });
  };

  useEffect(() => {
    if (!isOpened) return;

    const timer = window.setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#86d9ff', '#f5c85f', '#f8fdff'],
      });
    }, 550);

    return () => window.clearTimeout(timer);
  }, [isOpened]);

  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[radial-gradient(circle_at_20%_12%,_rgba(248,253,255,0.9),_transparent_30%),radial-gradient(circle_at_86%_8%,_rgba(245,200,95,0.34),_transparent_24%),linear-gradient(160deg,_#38a7e8_0%,_#86d9ff_46%,_#f8fdff_100%)] text-midnight">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(248,253,255,0.8)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute left-1/2 top-6 h-44 w-44 -translate-x-1/2 rounded-full bg-cloud/60 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-52 w-52 rounded-full bg-sky/35 blur-3xl" />

      {/* <AudioPlayer canStart={canStartMusic} src="./music/birthday-song.mp3" /> */}
      <AudioPlayer canStart={canStartMusic} src={`${import.meta.env.BASE_URL}music/birthday-song.mp3`} />
      <BalloonRelease releaseId={balloonReleaseId} />

      {!isOpened ? (
        <section className="relative z-10 flex min-h-screen w-full flex-1 items-center justify-center px-4 py-10">
          <GiftBox onOpen={openSurprise} />
        </section>
      ) : (
        <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-9 px-4 pb-16 pt-8 opacity-0 animate-fadeUp sm:gap-12 sm:px-8 sm:pb-20 lg:py-14">
          <header className="mx-auto w-full max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold drop-shadow-sm sm:text-sm sm:tracking-[0.32em]">
              A little birthday magic
            </p>
            <h1 className="mx-auto max-w-[22rem] font-display text-[2.45rem] leading-[1.03] text-cloud drop-shadow-[0_2px_16px_rgba(23,71,107,0.25)] sm:max-w-3xl sm:text-6xl">
              For the girl who makes days feel sky blue
            </h1>
          </header>

          <TypingWish message={birthdayMessage} />

          <PhotoGallery photos={photos} />

          <section className="mx-auto w-full max-w-2xl rounded-[1.75rem] border border-white/60 bg-white/30 p-5 text-center shadow-glow backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
            <h2 className="font-display text-3xl text-midnight sm:text-4xl">
              Make a tiny wish
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-midnight/75 sm:text-base">
              Tap the candle and let the universe keep the secret.
            </p>
            <CandleWish onWishMade={handleWishMade} />
            {wishMade && (
              <p className="mt-5 rounded-full border border-white/60 bg-cloud/75 px-4 py-3 text-sm font-medium text-midnight shadow-sm backdrop-blur">
                Wish received. I hope it finds its way to you softly.
              </p>
            )}
          </section>
        </section>
      )}

      <BirthdayFooter />
    </main>
  );
}
