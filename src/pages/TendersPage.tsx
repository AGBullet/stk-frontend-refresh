import { motion } from "framer-motion";
import { TrendingUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const TendersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
          <TrendingUp className="w-7 h-7 text-primary" />
          Тендеры
        </h1>
        <p className="text-muted-foreground mt-1">
          Актуальные тендеры и закупки
        </p>
      </div>

      <div className="relative max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Поиск тендеров..." className="pl-10 bg-secondary/50 border-border/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 min-h-[400px] flex items-center justify-center"
      >
        <div className="text-center text-muted-foreground">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">Загрузка тендеров...</p>
          <p className="text-sm mt-1">Данные загружаются с сервера</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TendersPage;
