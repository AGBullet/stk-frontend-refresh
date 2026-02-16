import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import homeImg from "@/assets/carousel/home.png";
import tendersImg from "@/assets/carousel/tenders.png";

const slides = [
  {
    title: "Главная — Поиск",
    subtitle: "Добро пожаловать в раздел поиска организаций и сертификатов!",
    description: "Найдите компании в ЖД-отрасли по ИНН, ОГРН, названию или ОКВЭД. Просмотрите основные сведения и добавляйте в избранное.",
    image: homeImg,
    bullets: ["Поиск по ИНН, ОГРН, названию или ОКВЭД", "Подробная информация о компаниях", "Добавление в избранное", "AI-сводка с финансами и прогнозами"],
  },
  {
    title: "AI-анализ компаний",
    subtitle: "Искусственный интеллект анализирует каждую компанию",
    description: "Финансовое состояние, деловая активность и репутация — всё в одном месте с рекомендациями.",
    image: null,
    bullets: ["Финансовый анализ", "Оценка репутации", "Рекомендации по взаимодействию", "Прогнозы развития"],
  },
  {
    title: "Актуальные тендеры",
    subtitle: "Каталог тендеров от железнодорожных компаний",
    description: "Находите актуальные тендеры и госзаказы в железнодорожной отрасли.",
    image: tendersImg,
    bullets: ["Фильтрация по категориям", "Уведомления о новых тендерах", "Детали и условия", "Экспорт данных"],
  },
  {
    title: "Мониторинг изменений",
    subtitle: "Отслеживайте изменения в компаниях",
    description: "Система автоматически отслеживает все значимые изменения.",
    image: null,
    bullets: ["Изменения в руководстве", "Смена юридического адреса", "Обновление уставного капитала", "История изменений"],
  },
  {
    title: "Сертификаты и Клейма",
    subtitle: "База данных сертификатов на ЖД-продукцию",
    description: "Актуальные данные по сертификатам и клеймам организаций.",
    image: null,
    bullets: ["Поиск по номеру сертификата", "Проверка срока действия", "Данные по клеймам", "Экспорт в отчёт"],
  },
  {
    title: "Интеллектуальный чат",
    subtitle: "ИИ-ассистент для работы с данными",
    description: "Общайтесь с ИИ, который знает всё о железнодорожной отрасли.",
    image: null,
    bullets: ["Вопросы на естественном языке", "Анализ данных по запросу", "Рекомендации", "Экспорт ответов"],
  },
  {
    title: "Юридический мониторинг",
    subtitle: "Судебные разбирательства компаний",
    description: "Полная информация о судебных делах каждой компании.",
    image: null,
    bullets: ["Активные дела", "История разбирательств", "Суммы исков", "Уведомления о новых делах"],
  },
];

const ScreenshotsCarousel = () => {
  return (
    <section id="screenshots" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Интерфейс
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3">
            Как выглядит сервис
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {slides.map((slide, i) => (
                <CarouselItem key={i}>
                  <div className="glass-card p-6 sm:p-10 rounded-2xl">
                    <div className="flex flex-row items-center justify-between mb-2">
                      <h3 className="text-2xl font-display font-bold">{slide.title}</h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{i + 1} из {slides.length}</span>
                    </div>
                    <p className="text-primary text-sm font-medium mb-4">{slide.subtitle}</p>
                    
                    {slide.image ? (
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full rounded-xl border border-border/30 mb-4"
                      />
                    ) : (
                      <div className="aspect-video rounded-xl border border-border/30 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                        <p className="text-muted-foreground text-sm">Скриншот раздела «{slide.title}»</p>
                      </div>
                    )}
                    
                    <p className="text-muted-foreground mb-4">{slide.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {slide.bullets.map((bullet, j) => (
                        <p key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-14" />
            <CarouselNext className="hidden sm:flex -right-14" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenshotsCarousel;
