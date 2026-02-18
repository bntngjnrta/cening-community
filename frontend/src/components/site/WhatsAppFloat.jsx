import React, { useMemo } from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = ({ phone, message, onOpen }) => {
  const href = useMemo(() => {
    const encoded = encodeURIComponent(message || "Hello");
    return `https://wa.me/${phone}?text=${encoded}`;
  }, [phone, message]);

  return (
    <a
      href={href}
      onClick={(e) => {
        if (!onOpen) return;
        e.preventDefault();
        onOpen(phone, message);
      }}
      className="fixed bottom-20 right-5 z-[60] group"
      aria-label="Chat WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25D366]/35 blur-[2px] animate-waPulse" />
        <div className="relative h-14 w-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/25 ring-1 ring-white/30 flex items-center justify-center transition-colors">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <div className="pointer-events-none absolute right-16 bottom-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
          <div className="rounded-full bg-slate-900/80 backdrop-blur-[14px] text-white text-xs px-3 py-2 ring-1 ring-white/10 shadow-lg">
            Chat via WhatsApp
          </div>
        </div>
      </div>
    </a>
  );
};
