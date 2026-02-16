import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img src={logo} alt="РейлСтат" className="w-12 h-12 rounded-lg object-contain" />
          <span className="text-xl font-display font-bold">
            Рейл<span className="text-primary">Стат</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <a href="#features" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Возможности
          </a>
          <a href="#how-it-works" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Как это работает
          </a>
          <a href="#demo" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Демо
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
            <a href="/auth/login">Войти</a>
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="/auth/register">Начать</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border/50 px-6 py-4 flex flex-col gap-3"
        >
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground py-2">Возможности</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground py-2">Как это работает</a>
          <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground py-2">Демо</a>
          <Button size="sm" className="bg-primary text-primary-foreground w-full mt-2" asChild>
            <a href="/auth/login">Войти</a>
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
