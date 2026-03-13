'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Phone, CheckCircle, AlertCircle } from 'lucide-react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', phone: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage(data?.error || 'Произошла ошибка. Попробуйте ещё раз.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Произошла ошибка. Проверьте подключение к интернету.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="heading-sm text-green-900 mb-2">Заявка принята!</h3>
            <p className="body-md text-green-700">{message}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-2xl p-8 md:p-10 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-mountain-700 mb-2">
                Имя *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mountain-400" />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData?.name ?? ''}
                  onChange={(e) => setFormData({ ...formData, name: e?.target?.value ?? '' })}
                  className="w-full pl-12 pr-4 py-3 border border-mountain-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition-all"
                  placeholder="Ваше имя"
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-mountain-700 mb-2">
                Телефон *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mountain-400" />
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData?.phone ?? ''}
                  onChange={(e) => setFormData({ ...formData, phone: e?.target?.value ?? '' })}
                  className="w-full pl-12 pr-4 py-3 border border-mountain-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent outline-none transition-all"
                  placeholder="+7 (XXX) XXX-XX-XX"
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{message}</p>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-earth-600 hover:bg-earth-700 disabled:bg-mountain-300 text-white rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </>
              )}
            </motion.button>

            <p className="text-sm text-mountain-500 text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
