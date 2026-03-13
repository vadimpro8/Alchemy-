'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mountain } from 'lucide-react';

interface StickyHeaderProps {
  onApplyClick: () => void;
}

export default function StickyHeader({ onApplyClick }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 100);
    };

    window?.addEventListener?.('scroll', handleScroll);
    return () => window?.removeEventListener?.('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document?.getElementById?.(id);
    element?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <Mountain className={`w-6 h-6 transition-colors ${
              isScrolled ? 'text-earth-700' : 'text-white'
            }`} />
            <span className={`font-display font-bold text-xl transition-colors ${
              isScrolled ? 'text-mountain-900' : 'text-white'
            }`}>
              ALCHEMY: KYRGYZSTAN
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: 'about', label: 'О проекте' },
              { id: 'route', label: 'Маршрут' },
              { id: 'pricing', label: 'Стоимость' },
              { id: 'gallery', label: 'Галерея' },
            ]?.map?.((item) => (
              <button
                key={item?.id}
                onClick={() => scrollToSection(item?.id ?? '')}
                className={`text-sm font-medium transition-colors hover:text-earth-600 ${
                  isScrolled ? 'text-mountain-700' : 'text-white/90'
                }`}
              >
                {item?.label}
              </button>
            )) ?? null}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onApplyClick}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              isScrolled
                ? 'bg-earth-600 hover:bg-earth-700 text-white shadow-md'
                : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md'
            }`}
          >
            Подать заявку
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
