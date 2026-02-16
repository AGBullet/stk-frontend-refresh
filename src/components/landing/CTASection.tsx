import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Подключитесь к нашему{" "}
            <span className="gradient-text">приложению</span>{" "}
            прямо сейчас!
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Начните анализировать железнодорожную отрасль с помощью нашего ИИ-сервиса.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10 py-6 rounded-xl glow-green"
            asChild
          >
            <a href="https://rail-stat.ru/auth/register">
              Начать работу
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
