import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import homeImg from "@/assets/carousel/home.png";
import tendersImg from "@/assets/carousel/tenders.png";

const slides = [
  {
    title: "Главная — Поиск",
    subtitle: "Добро пожаловать в раздел поиска организаций и сертификатов!",
    description: "Найдите компании в ЖД-отрасли по ИНН, ОГРН, названию или ОКВЭД. Просмотрите основные сведения и добавляйте в избранное.",
    image: homeImg,
    bullets: ["Поиск по ИНН, ОГРН, названию или ОКВЭД", "Подробная информация о компаниях", "Добавление в избранное", "AI-сводка с финансами и прогнозами", "Переключение между поиском организаций и сертификатов"],
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const onSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  const handleSetApi = (newApi: CarouselApi) => {
    setApi(newApi);
    newApi?.on("select", onSelect);
  };

  return (
    <section id="screenshots" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Интерфейс
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mt-3">
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
          <Carousel 
            opts={{ loop: true }} 
            setApi={handleSetApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {slides.map((slide, i) => (
                <CarouselItem key={i} className="pl-2 sm:pl-4">
                  <div className="glass-card p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl">
                    <div className="flex flex-row items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-2xl font-display font-bold">{slide.title}</h3>
                      <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap ml-2">{i + 1} из {slides.length}</span>
                    </div>
                    <p className="text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">{slide.subtitle}</p>
                    
                    {slide.image ? (
                      <>
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full rounded-lg sm:rounded-xl border border-border/30 mb-3 sm:mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                          loading="lazy"
                          onClick={() => setExpandedImage(slide.image)}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="sm:hidden mb-3 w-full border-primary/30 text-primary text-xs"
                          onClick={() => setExpandedImage(slide.image)}
                        >
                          Посмотреть
                        </Button>
                      </>
                    ) : (
                      <div className="aspect-video rounded-lg sm:rounded-xl border border-border/30 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-3 sm:mb-4">
                        <p className="text-muted-foreground text-xs sm:text-sm px-4 text-center">Скриншот раздела «{slide.title}»</p>
                      </div>
                    )}
                    
                    <p className="text-muted-foreground text-sm mb-3 sm:mb-4">{slide.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {slide.bullets.map((bullet, j) => (
                        <p key={j} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Desktop arrows */}
            <CarouselPrevious className="hidden sm:flex -left-14" />
            <CarouselNext className="hidden sm:flex -right-14" />
          </Carousel>

          {/* Mobile controls */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:hidden">
            <button 
              onClick={() => api?.scrollPrev()} 
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-4" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={() => api?.scrollNext()} 
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen image dialog */}
      <Dialog open={!!expandedImage} onOpenChange={() => setExpandedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 bg-background/95 border-border/50">
          {expandedImage && (
            <img
              src={expandedImage}
              alt="Скриншот"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ScreenshotsCarousel;
