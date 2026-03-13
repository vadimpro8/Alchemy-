'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mountain, Calendar, Users } from 'lucide-react';

interface HeroSectionProps {
  onApplyClick: () => void;
}

export default function HeroSection({ onApplyClick }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero.jpg"
            alt="Горы Кыргызстана"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm md:text-base">
            <Mountain className="w-4 h-4" />
            <span>Премиальная трансформационная экспедиция</span>
          </div>

          <h1 className="heading-xl text-white">
            ALCHEMY: KYRGYZSTAN
          </h1>

          <p className="body-lg max-w-3xl mx-auto text-white/90">
            Экспедиция-перезагрузка для тех, кто устал жить на автопилоте
          </p>

          <p className="text-2xl md:text-3xl font-display font-semibold text-white">
            11 дней трансформации через горы, холод и честность
          </p>

          {/* Key Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">18—28 августа 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5" />
              <span className="text-lg">11 дней / 10 ночей</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-lg">Пилотный набор</span>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-earth-600 hover:bg-earth-700 text-white rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:shadow-earth-500/50"
          >
            <Mountain className="w-5 h-5" />
            Подать заявку
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm">Пролистайте вниз</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
