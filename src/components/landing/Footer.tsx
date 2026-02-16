import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Левая колонка */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="РейлСтат" className="w-7 h-7 object-contain" />
              <span className="font-display font-semibold text-lg">
                Рейл<span className="text-primary">Стат</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Copyright © {new Date().getFullYear()} РейлСтат
            </p>
            <p className="text-sm text-muted-foreground">Все права защищены</p>
            <a
              href="mailto:contact@rail-stat.ru"
              className="text-sm text-primary hover:underline mt-1"
            >
              contact@rail-stat.ru
            </a>
          </div>

          {/* Компания */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-foreground">Компания</h4>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">О нас</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Демоверсия</a>
          </div>

          {/* Политика сайта */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-foreground">Политика сайта</h4>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Пользовательское соглашение</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Обработка персональных данных</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
