import React, { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '447497631651'; // no leading + for wa.me

const FloatingButtons: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-3">
      {/* Back to top (on top of stack) */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-blue-900 shadow-lg shadow-black/20 border border-slate-200 flex items-center justify-center transition-all ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .53.22l6 6a.75.75 0 1 1-1.06 1.06L12.75 6.56V20a.75.75 0 0 1-1.5 0V6.56L6.53 11.03a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 .53-.22Z" clipRule="evenodd" />
        </svg>
      </button>

      {/* WhatsApp (at the bottom of the stack) */}
      <div className="relative group">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 animate-[pulse_2s_ease-in-out_infinite] hover:scale-105 transition-transform"
        >
          {/* WhatsApp icon (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" aria-hidden="true">
            <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.47-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.05-.22-.53-.45-.46-.62-.46-.16-.02-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.68 4.14.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
            <path d="M26.75 5.25A13.93 13.93 0 0 0 16 .06C7.22.06.1 7.18.1 15.94c0 2.81.74 5.56 2.16 7.97L.02 32l8.25-2.16c2.36 1.29 5.03 1.97 7.73 1.97h.01c8.76 0 15.88-7.12 15.88-15.88 0-4.25-1.65-8.25-4.64-11.35zM16 29.38h-.01a12.98 12.98 0 0 1-6.62-1.78l-.47-.28-4.88 1.28 1.3-4.76-.31-.49A12.94 12.94 0 0 1 3.02 15.94C3.02 8.63 8.69 2.96 16 2.96c3.46 0 6.71 1.35 9.16 3.8a12.88 12.88 0 0 1 3.8 9.18c0 7.31-5.67 12.98-12.96 12.98z"/>
          </svg>
        </a>
        {/* Tooltip */}
        <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs sm:text-sm bg-slate-900 text-white px-2.5 py-1 rounded-md opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </div>
    </div>
  );
};

export default FloatingButtons;
