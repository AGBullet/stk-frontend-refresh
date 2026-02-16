import { motion } from "framer-motion";
import { Monitor } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Главная панель",
    description: "Обзор ключевых показателей отрасли в реальном времени",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "AI-анализ компаний",
    description: "Детальный анализ финансового состояния и деловой активности",
    gradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    title: "Тендеры",
    description: "Каталог актуальных тендеров с фильтрацией и уведомлениями",
    gradient: "from-cyan-500/20 to-blue-500/5",
  },
  {
    title: "Мониторинг изменений",
    description: "Отслеживание изменений в компаниях и организациях",
    gradient: "from-green-500/20 to-emerald-500/5",
  },
  {
    title: "Сертификаты и Клейма",
    description: "База данных сертификатов на железнодорожную продукцию",
    gradient: "from-teal-500/20 to-green-500/5",
  },
  {
    title: "Интеллектуальный чат",
    description: "ИИ-ассистент для работы с данными отрасли",
    gradient: "from-primary/20 to-emerald-500/5",
  },
  {
    title: "Юридический мониторинг",
    description: "Информация о судебных разбирательствах компаний",
    gradient: "from-emerald-500/20 to-primary/5",
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
          className="max-w-4xl mx-auto"
        >
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {slides.map((slide, i) => (
                <CarouselItem key={i}>
                  <div className={`glass-card p-8 sm:p-12 rounded-2xl bg-gradient-to-br ${slide.gradient}`}>
                    <div className="aspect-video rounded-xl border border-border/30 bg-background/50 flex flex-col items-center justify-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Monitor className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-display font-semibold">{slide.title}</h3>
                      <p className="text-sm text-muted-foreground max-w-md text-center px-4">
                        {slide.description}
                      </p>
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
