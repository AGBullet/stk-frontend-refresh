import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

const PredictPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
          <BarChart3 className="w-7 h-7 text-primary" />
          Прогнозная аналитика
        </h1>
        <p className="text-muted-foreground mt-1">
          Аналитика и прогнозирование данных
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 min-h-[400px] flex items-center justify-center"
      >
        <div className="text-center text-muted-foreground">
          <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">Прогнозная аналитика</p>
          <p className="text-sm mt-1">Данные загружаются с сервера</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PredictPage;
