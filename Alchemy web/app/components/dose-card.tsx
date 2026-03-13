'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface DoseCardProps {
  title: string;
  hormone: string;
  function: string;
  role: string;
  activation: string;
  effect: string;
  inExpedition: string;
  icon: LucideIcon;
  delay: number;
}

export default function DoseCard({
  title,
  hormone,
  function: func,
  role,
  activation,
  effect,
  inExpedition,
  icon: Icon,
  delay,
}: DoseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, shadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-earth-100"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-earth-700" />
        </div>
        <div>
          <h3 className="heading-sm text-earth-800 mb-1">{title}</h3>
          <p className="text-sm text-earth-600 font-medium">{hormone}</p>
        </div>
      </div>

      <div className="space-y-3 text-mountain-700">
        <div>
          <p className="text-sm font-semibold text-earth-700 mb-1">Функция:</p>
          <p className="text-sm">{func}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-earth-700 mb-1">Роль:</p>
          <p className="text-sm">{role}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-earth-700 mb-1">Активация:</p>
          <p className="text-sm">{activation}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-earth-700 mb-1">Эффект:</p>
          <p className="text-sm">{effect}</p>
        </div>
        <div className="pt-2 border-t border-earth-100">
          <p className="text-sm font-semibold text-earth-700 mb-1">В экспедиции:</p>
          <p className="text-sm italic">{inExpedition}</p>
        </div>
      </div>
    </motion.div>
  );
}
