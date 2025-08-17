import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'left' | 'right' | 'up';

type RevealProps = {
  children: React.ReactNode;
  variant?: RevealVariant;
  once?: boolean;
  delayMs?: number;
  className?: string;
};

const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'up',
  once = true,
  delayMs = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setShown(true), delayMs);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, delayMs]);

  const variantClass =
    variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : 'reveal-up';

  return (
    <div
      ref={ref}
      className={`reveal-base ${variantClass} ${shown ? 'reveal-show' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
