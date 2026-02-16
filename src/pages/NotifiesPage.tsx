import { motion } from "framer-motion";
import { Bell } from "lucide-react";

const NotifiesPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
          <Bell className="w-7 h-7 text-primary" />
          Уведомления
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 min-h-[300px] flex items-center justify-center"
      >
        <div className="text-center text-muted-foreground">
          <Bell className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">Нет новых уведомлений</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotifiesPage;
