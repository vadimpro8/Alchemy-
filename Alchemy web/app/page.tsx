'use client';

import { useRef } from 'react';
import HeroSection from './components/hero-section';
import StickyHeader from './components/sticky-header';
import AnimatedSection from './components/animated-section';
import DoseCard from './components/dose-card';
import ApplicationForm from './components/application-form';
import ImageGallery from './components/image-gallery';
import { 
  Mountain, Heart, Users, Sparkles, 
  Zap, Shield, Sun, Droplets,
  Check, MapPin, Calendar, DollarSign,
  ChevronDown, Target, Lightbulb, Wind
} from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef?.current?.scrollIntoView?.({ behavior: 'smooth' });
  };

  const galleryImages = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
    '/images/gallery7.jpg',
    '/images/gallery8.jpg',
    '/images/gallery9.jpg',
    '/images/gallery10.jpg',
    '/images/gallery11.jpg',
    '/images/gallery12.jpg',
  ];

  return (
    <>
      <StickyHeader onApplyClick={scrollToForm} />
      
      {/* Hero */}
      <div id="hero">
        <HeroSection onApplyClick={scrollToForm} />
      </div>

      {/* Main Principle */}
      <section className="py-20 bg-mountain-50">
        <div className="section-container">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-mountain-800 leading-relaxed">
              Мы не меняем локацию. <span className="text-earth-700">Мы меняем состояние</span>
            </p>
            <p className="body-lg text-mountain-600 mt-6">
              Не туристы. Исследователи собственной силы.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About / Philosophy */}
      <section id="about" className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg text-mountain-900 mb-6">О проекте</h2>
            <p className="body-lg text-mountain-600 max-w-3xl mx-auto">
              Мы не меняем человека разговорами. Мы меняем состояние через тело, биохимию и среду.
            </p>
          </AnimatedSection>

          {/* Enemy */}
          <AnimatedSection className="bg-mountain-50 rounded-2xl p-8 md:p-12 mb-16 max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <Target className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="heading-sm text-mountain-900 mb-3">Главный враг — ИНЕРЦИЯ</h3>
                <p className="body-md text-mountain-700 mb-4">
                  Не лень. Не усталость. А состояние, когда жизнь стала функциональной, но перестала быть живой.
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-mountain-700">
              <li className="flex items-start gap-3">
                <ChevronDown className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                <span>Жизнь на автопилоте и дешёвом дофамине</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronDown className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                <span>Бесконечная занятость при внутренней пустоте</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronDown className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                <span>Цифровой шум вместо настоящего проживания</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronDown className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                <span>Контроль вместо контакта</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronDown className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                <span>Внешняя эффективность при потере вкуса к жизни</span>
              </li>
            </ul>
          </AnimatedSection>

          {/* D.O.S.E. Methodology */}
          <AnimatedSection className="text-center mb-12">
            <h3 className="heading-md text-mountain-900 mb-4">Методология D.O.S.E.</h3>
            <p className="body-lg text-mountain-600 max-w-3xl mx-auto mb-2">
              Биохимия трансформации: мы не верим в абстрактное «счастье».
            </p>
            <p className="body-lg text-earth-700 max-w-3xl mx-auto font-semibold">
              Мы верим в гормональный коктейль, который варим сами.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <DoseCard
              title="D — Dopamine"
              hormone="Дофамин"
              function="Мотивация, целеполагание, предвкушение награды"
              role="Двигатель трансформации, желание меняться"
              activation="Движение к цели через микро-победы: перевалы, подходы, трекинги, преодоление внутренних границ"
              effect="Возвращается энергия, импульс вперёд, вкус к движению"
              inExpedition="Каждый день — серия достижимых вызовов. Новые ландшафты. Ощущение «я могу»."
              icon={Zap}
              delay={0}
            />
            <DoseCard
              title="O — Oxytocin"
              hormone="Окситоцин"
              function="Связь, доверие, социальная сплочённость"
              role="Создание безопасного пространства, групповая синергия"
              activation="Вечерние круги откровенности, совместное преодоление, честное присутствие без масок"
              effect="Уходит внутренняя оборона, появляется чувство «меня видят», снижается изоляция"
              inExpedition="Мы не туристическая группа. Мы — временное племя, где можно перестать играть роль."
              icon={Heart}
              delay={0.1}
            />
            <DoseCard
              title="S — Serotonin"
              hormone="Серотонин"
              function="Уверенность, достоинство, эмоциональная стабильность"
              role="Устойчивое состояние, внутренняя опора"
              activation="Работа с голосом, телесная вертикаль, проживание себя в сильных ландшафтах"
              effect="Спокойная самоценность, меньше зависимости от внешнего подтверждения"
              inExpedition="Право занимать пространство собой. Возвращение достоинства без брони."
              icon={Shield}
              delay={0.2}
            />
            <DoseCard
              title="E — Endorphins"
              hormone="Эндорфины"
              function="Обезболивание, эйфория, преодоление"
              role="Прорыв через сопротивление, пиковые состояния"
              activation="Холод (ледяная вода, горные реки), дыхательные практики, физическое усилие, высота"
              effect="Естественная эйфория, телесное освобождение, чистота и живость"
              inExpedition="Холодные практики, высокогорная гипоксия, горячие источники. Чистая инженерия состояния."
              icon={Droplets}
              delay={0.3}
            />
          </div>

          <AnimatedSection className="bg-earth-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <Sparkles className="w-12 h-12 text-earth-700 mx-auto mb-4" />
            <h4 className="heading-sm text-mountain-900 mb-4">Состояние «Хищника в покое»</h4>
            <p className="body-md text-mountain-700 mb-3">
              Тело расслаблено, но готово к прыжку. В голове — тишина. В груди — распирающая радость и гордость за то, что ты смог.
            </p>
            <p className="text-lg font-semibold text-earth-700">
              Это не эзотерика. Это чистая физиология. Мы возвращаем заводские настройки.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-mountain-50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg text-mountain-900 mb-6">Для кого эта экспедиция</h2>
            <p className="body-lg text-mountain-600 max-w-3xl mx-auto">
              30–45 лет. Профессионалы, управленцы, предприниматели и создатели, которые внешне держатся, а внутри давно живут на кортизоле
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Archetype 1 */}
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-earth-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-earth-700" />
                </div>
                <h3 className="heading-sm text-mountain-900 mb-4">Выгоревший Атлант</h3>
                <p className="text-mountain-600 mb-6">
                  Профессионал, управленец, предприниматель. Много лет тащит, решает, держит. Снаружи всё собрано. Внутри — усталость, пустота, потеря вкуса.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mountain-700">Хроническая усталость, которая не проходит после отпуска</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mountain-700">Потеря смысла при внешнем успехе</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mountain-700">Ощущение, что «глаза потухли»</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Archetype 2 */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-earth-100 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-earth-700" />
                </div>
                <h3 className="heading-sm text-mountain-900 mb-4">Создатель в Застое</h3>
                <p className="text-mountain-600 mb-6">
                  Человек с потенциалом, амбицией и опытом, но без движения внутри. Много рутины, мало живого импульса. Знает, что может больше, но застрял.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mountain-700">Творческий ступор</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mountain-700">Потеря вдохновения и драйва</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mountain-700">Знание потенциала, но невозможность его раскрыть</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Archetype 3 */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-earth-100 rounded-lg flex items-center justify-center mb-6">
                  <Wind className="w-8 h-8 text-earth-700" />
                </div>
                <h3 className="heading-sm text-mountain-900 mb-4">Телесник / Биохакер</h3>
                <p className="text-mountain-600 mb-6">
                  Человек, интересующийся телом, состоянием, практиками. Уже знаком с холодом, дыханием. Хочет не спа, а глубокий прожитый опыт в сильной среде.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mountain-700">Практики в городе теряют силу</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mountain-700">Нет сильной среды для глубокого опыта</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mountain-700">Хочется большего, чем домашние упражнения</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Route Preview */}
      <section id="route" className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg text-mountain-900 mb-6">Маршрут экспедиции</h2>
            <p className="body-lg text-mountain-600 max-w-3xl mx-auto">
              11 дней / 10 ночей. Бишкек, Иссык-Куль, Сон-Кёль, горные ущелья
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { day: 1, title: 'Бишкек — Прибытие и настройка', theme: 'Снятие маски' },
              { day: 2, title: 'Башня Бурана → Иссык-Куль', theme: 'Первое замедление' },
              { day: 3, title: 'Каньон Сказка → Катамаран', theme: 'Контраст стихий' },
              { day: 4, title: 'Беркуты → Барскоон → Каракол', theme: 'Сила и точность' },
              { day: 5, title: 'Джети-Огуз → Девичьи Косы', theme: 'Вызов и преодоление' },
              { day: 6, title: 'Каракольское ущелье', theme: 'Масштаб' },
              { day: 7, title: 'Северный берег → Чолпон-Ата', theme: 'Выдох' },
              { day: 8, title: 'Григорьевское ущелье', theme: 'Природа севера' },
              { day: 9, title: 'Сон-Кёль — Высокогорное озеро', theme: 'Пиковый опыт' },
              { day: 10, title: 'Горячие источники Кенмол-Сай', theme: 'Тепло после холода' },
              { day: 11, title: 'Возвращение в Бишкек', theme: 'Интеграция' },
            ]?.map?.((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="bg-mountain-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-earth-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item?.day}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-mountain-900 mb-1">{item?.title}</h4>
                      <p className="text-sm text-earth-700 italic">{item?.theme}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )) ?? null}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="body-md text-mountain-600">
              Маршрут построен как последовательность состояний. Это не гонка по достопримечательностям, а архитектура трансформации.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-earth-50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg text-mountain-900 mb-6">Что включено</h2>
            <p className="body-lg text-mountain-600 max-w-3xl mx-auto">
              Это не просто логистика. Это архитектура условий для трансформации.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <h3 className="heading-sm text-mountain-900 mb-6">Логистика и проживание</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Все внутренние трансферы по маршруту</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Проживание (отели, гостевые дома, юртовый лагерь)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Все входные билеты по программе</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Прогулка на катамаране по Иссык-Кулю</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Посещение горячих источников</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Демонстрация охоты с беркутом</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <h3 className="heading-sm text-mountain-900 mb-6">Практики и сопровождение</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Утренние дыхательные практики (ежедневно)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Вечерние круги «Живое зеркало» (ежедневно)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Работа с телом и состоянием</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Голосовые и звуковые практики</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Сопровождение Вадима и Александры</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-1" />
                    <span className="text-mountain-700">Местный русскоязычный гид</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-8 bg-white rounded-lg p-8 max-w-4xl mx-auto">
            <h4 className="font-semibold text-mountain-900 mb-4">Не включено в стоимость:</h4>
            <ul className="grid md:grid-cols-2 gap-3 text-mountain-700">
              <li className="flex items-start gap-2">
                <span className="text-earth-600">•</span>
                <span>Перелёт до Бишкека и обратно</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth-600">•</span>
                <span>Питание (кроме 1 ужина)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth-600">•</span>
                <span>Медицинская страховка</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth-600">•</span>
                <span>Личные расходы</span>
              </li>
            </ul>
            <p className="text-sm text-mountain-600 mt-4">
              Дополнительный бюджет на питание и личные расходы: 300–500 USD
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg text-mountain-900 mb-6">Стоимость участия</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <AnimatedSection>
              <div className="bg-earth-50 rounded-lg p-8 border-2 border-earth-600 shadow-xl relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-earth-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Ограниченное количество
                </div>
                <h3 className="heading-sm text-mountain-900 mb-2">Early Bird</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-display font-bold text-earth-700">$1299</span>
                </div>
                <p className="text-mountain-600">Ранняя цена</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-mountain-50 rounded-lg p-8 shadow-lg">
                <h3 className="heading-sm text-mountain-900 mb-2">Стандарт</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-display font-bold text-mountain-700">$1500</span>
                </div>
                <p className="text-mountain-600">Стандартная цена</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="bg-mountain-50 rounded-lg p-6 mb-8">
              <p className="text-mountain-700 mb-2">
                <span className="font-semibold">Предоплата для брони места:</span> $300
              </p>
              <p className="text-sm text-mountain-600">
                Минимальный набор: 6 человек • Целевая группа: 10–12 человек
              </p>
            </div>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 bg-earth-600 hover:bg-earth-700 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              <DollarSign className="w-5 h-5" />
              Забронировать место
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-mountain-50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg text-mountain-900 mb-6">Кыргызстан</h2>
            <p className="body-lg text-mountain-600">
              Горы, озёра, ущелья и бескрайние просторы
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <ImageGallery images={galleryImages} />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg text-mountain-900 mb-6">Частые вопросы</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: 'Нужна ли специальная физическая подготовка?',
                a: 'Нет, но готовность к умеренной физической активности обязательна. Трекинги не экстремальные, но требуют базовой выносливости. Если ты можешь пройти 5-7 км в день с небольшим подъёмом — этого достаточно.',
              },
              {
                q: 'Что делать, если я никогда не был в горах?',
                a: 'Это нормально. Маршрут построен с учётом акклиматизации. Мы начинаем с более низких высот и постепенно поднимаемся. Плюс дыхательные практики помогают адаптироваться к высоте.',
              },
              {
                q: 'Что с интернетом и связью?',
                a: 'В большинстве мест будет связь для экстренных случаев. Но формат предполагает цифровой детокс — минимум соцсетей и рабочих чатов. Телефон остаётся для фото и важных звонков.',
              },
              {
                q: 'Можно ли приехать одному?',
                a: 'Да, большинство участников приезжают самостоятельно. Групповая динамика быстро создаёт атмосферу доверия, и ты не будешь чувствовать себя одиноко.',
              },
              {
                q: 'Это безопасно?',
                a: 'Да. Вадим — опытный гид с 10-летним стажем. Плюс местный гид знает все особенности маршрута. Мы не идём в экстремальные зоны, соблюдаем все меры предосторожности.',
              },
              {
                q: 'Нужна ли виза для россиян/украинцев/казахстанцев?',
                a: 'Гражданам России, Украины, Казахстана, Беларуси виза в Кыргызстан не нужна для пребывания до 60 дней. Нужен только загранпаспорт.',
              },
            ]?.map?.((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="bg-mountain-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-mountain-900 mb-3">{faq?.q}</h4>
                  <p className="text-mountain-700">{faq?.a}</p>
                </div>
              </AnimatedSection>
            )) ?? null}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-20 bg-earth-600">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12 text-white">
            <h2 className="heading-lg mb-6">Подать заявку на участие</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Оставьте свои контакты, и мы свяжемся с вами для обсуждения деталей
            </p>
          </AnimatedSection>

          <ApplicationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-mountain-900 text-white">
        <div className="section-container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-6 h-6" />
            <span className="font-display font-bold text-xl">ALCHEMY: KYRGYZSTAN</span>
          </div>
          <p className="text-mountain-300 mb-6">
            Экспедиция-перезагрузка • 18–28 августа 2026
          </p>
          <p className="text-sm text-mountain-400">
            © 2026 ALCHEMY. Все права защищены.
          </p>
        </div>
      </footer>
    </>
  );
}
