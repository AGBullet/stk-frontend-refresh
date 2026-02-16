import { useState } from "react";
import logo from "@/assets/logo.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Footer = () => {
  const [contactsOpen, setContactsOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  return (
    <>
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
              <a href="https://rail-stat.ru/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <button onClick={() => setContactsOpen(true)} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">Контакты</button>
              <button onClick={() => setPricingOpen(true)} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">Тарифы</button>
              <a href="https://rail-stat.ru/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Демоверсия</a>
            </div>

            {/* Политика сайта */}
            <div className="flex flex-col gap-3">
              <h4 className="font-display font-semibold text-foreground">Политика сайта</h4>
              <a href="https://rail-stat.ru/posts/user-agreement" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Пользовательское соглашение</a>
              <a href="https://rail-stat.ru/posts/personal-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Обработка персональных данных</a>
              <a href="https://rail-stat.ru/posts/public-offer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Контакты модалка */}
      <Dialog open={contactsOpen} onOpenChange={setContactsOpen}>
        <DialogContent className="glass-card border-border/50">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Контакты</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-2">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <a href="mailto:contact@rail-stat.ru" className="text-primary hover:underline">contact@rail-stat.ru</a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Поддержка</p>
              <p className="text-foreground">Напишите нам на email, и мы ответим в течение 24 часов.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Тарифы модалка */}
      <Dialog open={pricingOpen} onOpenChange={setPricingOpen}>
        <DialogContent className="glass-card border-border/50 max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Тарифы</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-2">
            <p className="text-muted-foreground">
              Для получения информации о тарифах свяжитесь с нами по email или зарегистрируйтесь в системе.
            </p>
            <a
              href="mailto:contact@rail-stat.ru"
              className="text-primary hover:underline text-sm"
            >
              contact@rail-stat.ru
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
