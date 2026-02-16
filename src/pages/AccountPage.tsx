import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { User, Mail, Calendar, Zap } from "lucide-react";

const AccountPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold text-foreground">Аккаунт</h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 space-y-6 max-w-2xl"
      >
        <div>
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-primary" />
            Контакты
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border/30">
              <span className="text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email:
              </span>
              <span className="text-foreground font-medium">{user?.email || "—"}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            Подписка
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border/30">
              <span className="text-muted-foreground">Действует до:</span>
              <span className="text-foreground font-medium">
                {user?.subscriptionEndTime || "—"}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-muted-foreground">Статус:</span>
              <span className={`font-medium ${user?.isActive ? "text-primary" : "text-destructive"}`}>
                {user?.isActive ? "Активна" : "Неактивна"}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            ИИ — агент
          </h3>
          <div className="flex items-center justify-between py-2">
            <span className="text-muted-foreground">Количество доступных запросов:</span>
            <span className="text-foreground font-medium">{user?.countRequest ?? 0}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AccountPage;
