import { NavLink, useLocation } from "react-router-dom";
import { Home, Users, FileCheck, TrendingUp, BarChart3 } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Главная", icon: Home, to: "/home" },
  { title: "Мои контрагенты", icon: Users, to: "/org-favorites" },
  { title: "Мои сертификаты", icon: FileCheck, to: "/cert-favorites" },
  { title: "Тендеры", icon: TrendingUp, to: "/tenders" },
  { title: "Прогнозная аналитика", icon: BarChart3, to: "/predict" },
];

const AppMobileNav = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="p-4 flex items-center gap-3 border-b border-border/50">
        <img src={logo} alt="РейлСтат" className="w-9 h-9 rounded-lg object-contain" />
        <span className="text-lg font-display font-bold">
          Рейл<span className="text-primary">Стат</span>
        </span>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default AppMobileNav;
