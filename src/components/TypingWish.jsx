import { useEffect, useState } from 'react';

export default function TypingWish({ message }) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');

    let index = 0;
    const interval = window.setInterval(() => {
      setTypedText(message.slice(0, index + 1));
      index += 1;

      if (index >= message.length) {
        window.clearInterval(interval);
      }
    }, 36);

    return () => window.clearInterval(interval);
  }, [message]);

  return (
    <article className="mx-auto w-full max-w-3xl rounded-[1.75rem] border border-white/65 bg-white/35 p-5 shadow-glow backdrop-blur-xl sm:rounded-[2rem] sm:p-9">
      <p className="break-words font-display text-[1.55rem] leading-9 text-midnight sm:text-3xl sm:leading-[3.2rem]">
        {typedText}
        <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 bg-gold align-middle animate-pulse" />
      </p>
    </article>
  );
}
