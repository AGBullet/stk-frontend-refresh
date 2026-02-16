import { useState } from "react";
import logo from "@/assets/logo.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const subscriptions = [
  { name: "Ежемесячная", period: "1 месяц доступа", price: "12 000 ₽", selected: false },
  { name: "Квартальная", period: "3 месяца доступа", price: "30 000 ₽", selected: false },
  { name: "Полугодовая", period: "6 месяцев доступа", price: "48 000 ₽", selected: false },
  { name: "Годовая", period: "12 месяцев доступа", price: "70 000 ₽", selected: true },
];

const features = [
  "Полный доступ ко всем функциям",
  "Мониторинг новых и существующий компаний",
  "Уведомления об изменениях компаний или сертификатов",
  "Техническая поддержка",
  "Регулярные обновления",
  "Доступ к аналитике",
  "Юридический мониторинг",
  "Отслеживание сертификатов и клейм",
  "Тендеры более чем с 10 площадок",
];

const Footer = () => {
  const [contactsOpen, setContactsOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(3);

  return (
    <>
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Левая колонка */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <img src={logo} alt="РейлСтат" className="w-7 h-7 rounded object-contain" />
                <span className="font-display font-semibold text-lg">
                  Рейл<span className="text-primary">Стат</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Copyright © {new Date().getFullYear()} РейлСтат
              </p>
              <p className="text-sm text-muted-foreground">Все права защищены</p>
              <a href="mailto:contact@rail-stat.ru" className="text-sm text-primary hover:underline mt-1">
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

      {/* Контакты */}
      <Dialog open={contactsOpen} onOpenChange={setContactsOpen}>
        <DialogContent className="glass-card border-border/50 max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Наши контакты</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-2">
            <div className="space-y-1">
              <p className="font-semibold text-foreground">ООО «ПАРТНЕРВИЗОР»</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">ОГРН</p>
                <p className="text-foreground">1257700302970</p>
              </div>
              <div>
                <p className="text-muted-foreground">ИНН</p>
                <p className="text-foreground">9721253967</p>
              </div>
              <div>
                <p className="text-muted-foreground">КПП</p>
                <p className="text-foreground">772101001</p>
              </div>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">Юридический адрес</p>
              <p className="text-foreground">109428, г. Москва, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ РЯЗАНСКИЙ, пр-кт Рязанский, д. 10, стр. 2, помещ. 5/5/3</p>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">E-mail</p>
              <a href="mailto:contact@rail-stat.ru" className="text-primary hover:underline">contact@rail-stat.ru</a>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">Сервис</p>
              <a href="https://rail-stat.ru" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://rail-stat.ru</a>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">Генеральный директор</p>
              <p className="text-foreground">Мельников Денис Михайлович</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Тарифы */}
      <Dialog open={pricingOpen} onOpenChange={setPricingOpen}>
        <DialogContent className="glass-card border-border/50 max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Выберите подписку</DialogTitle>
            <p className="text-sm text-muted-foreground">Получите доступ к системе</p>
          </DialogHeader>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {subscriptions.map((sub, i) => (
              <button
                key={i}
                onClick={() => setSelectedPlan(i)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all text-center ${
                  selectedPlan === i
                    ? "border-primary bg-primary/10"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                <h3 className="font-display font-semibold text-sm">{sub.name}</h3>
                <p className="text-xs text-muted-foreground">{sub.period}</p>
                <p className="text-lg font-bold text-foreground">{sub.price}</p>
                {selectedPlan === i ? (
                  <Button size="sm" className="bg-primary text-primary-foreground w-full text-xs">
                    Выбрано
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" className="border-primary/30 text-primary w-full text-xs">
                    Выбрать
                  </Button>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-border/30 mt-2">
            <h5 className="font-display font-semibold text-sm mb-3">Все подписки включают:</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Продолжая регистрацию и/или оплату, вы соглашаетесь с условиями{" "}
              <a href="https://rail-stat.ru/posts/public-offer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Лицензионного договора (оферты)
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
