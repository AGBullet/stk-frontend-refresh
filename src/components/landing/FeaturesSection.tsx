import { motion } from "framer-motion";
import { 
  Brain, 
  FileText, 
  Building2, 
  RefreshCw, 
  TrendingUp, 
  MessageSquare, 
  Scale, 
  Award 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-анализ компаний",
    description: "Искусственный интеллект анализирует финансовое состояние, деловую активность и репутацию каждой компании. Получайте рекомендации по взаимодействию.",
  },
  {
    icon: FileText,
    title: "Актуальные тендеры",
    description: "Каталог новых тендеров от железнодорожных компаний и госзаказчиков.",
  },
  {
    icon: Building2,
    title: "Новые компании",
    description: "Система в режиме реального времени отслеживает регистрацию новых компаний в железнодорожной отрасли.",
  },
  {
    icon: RefreshCw,
    title: "Мониторинг изменений",
    description: "Система отслеживает изменения в компании.",
  },
  {
    icon: TrendingUp,
    title: "Прогнозирование спроса",
    description: "Наши алгоритмы ИИ анализируют рынок и предсказывают спрос на различные виды железнодорожной продукции и комплектующих.",
  },
  {
    icon: MessageSquare,
    title: "Интеллектуальный чат",
    description: "Общайтесь с ИИ-ассистентом, который знает о железнодорожной отрасли.",
  },
  {
    icon: Scale,
    title: "Юридический мониторинг",
    description: "Информация о судебных разбирательствах каждой компании.",
  },
  {
    icon: Award,
    title: "Сертификаты и Клейма",
    description: "Последние сертификаты на железнодорожную продукцию. Актуальные данные по клеймам организаций.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Возможности</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3">
            Что вы получаете?
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group glass-card p-6 hover:border-primary/30 transition-all duration-300 hover:glow-green"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
