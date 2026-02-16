import { Train } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Train className="w-5 h-5 text-primary" />
          <span className="font-display font-semibold">
            Рейл<span className="text-primary">Стат</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} РейлСтат. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
