import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const AppFooter = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-xl px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between">
        <div>
          <Link to="/home" className="flex items-center gap-2.5 mb-3">
            <img src={logo} alt="РейлСтат" className="w-8 h-8 rounded-lg object-contain" />
            <span className="text-lg font-display font-bold">
              Рейл<span className="text-primary">Стат</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">Copyright © 2025 РейлСтат</p>
          <p className="text-sm text-muted-foreground">Все права защищены</p>
          <a href="mailto:contact@rail-stat.ru" className="text-sm text-primary hover:text-primary/80 mt-3 block">
            contact@rail-stat.ru
          </a>
        </div>

        <div>
          <h5 className="font-semibold text-foreground mb-3">Компания</h5>
          <div className="space-y-2">
            <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">О нас</Link>
            <a href="https://rail-stat.ru/demo" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Демоверсия</a>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-foreground mb-3">Политика сайта</h5>
          <div className="space-y-2">
            <Link to="/user-agreement" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Пользовательское соглашение</Link>
            <Link to="/personal-policy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Обработка персональных данных</Link>
            <Link to="/public-offer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Публичная оферта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
