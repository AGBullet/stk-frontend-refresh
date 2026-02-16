import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Регистрация",
    description: "Зарегистрируйтесь в системе и получите доступ.",
  },
  {
    num: "02",
    title: "Сводка",
    description: "Вы можете искать актуальную информацию о контрагентах.",
  },
  {
    num: "03",
    title: "Глубокий анализ",
    description: "Изучайте подробные профили компаний с юридической, экономической информацией, судебными делами и оценкой ИИ. Сравнивайте контрагентов и принимайте обоснованные решения.",
  },
  {
    num: "04",
    title: "Прогнозы и чат",
    description: "Получайте прогнозы спроса от ИИ и консультируйтесь с интеллектуальным ассистентом, который поможет найти нужную информацию и даст рекомендации по развитию бизнеса.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Процесс</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3">
            Как это работает?
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-sm font-display font-bold text-primary">{step.num}</span>
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="text-xl font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
