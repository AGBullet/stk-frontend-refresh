import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 sm:p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <Play className="w-7 h-7 text-primary ml-1" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Демо-версия
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Вы можете воспользоваться демо-версией сайта без регистрации.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-xl glow-green"
              asChild
            >
              <a href="https://rail-stat.ru/demo">
                Попробовать прямо сейчас
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
