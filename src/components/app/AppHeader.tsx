import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Bell, LogOut, Moon, Sun, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AppMobileNav from "./AppMobileNav";

const AppHeader = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 border-b border-border/50 bg-card/30 backdrop-blur-xl px-6 flex items-center justify-between sticky top-0 z-40">
      {/* Mobile menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <AppMobileNav />
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block" />

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>

        <Link to="/account">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <User className="w-4 h-4" />
          </Button>
        </Link>

        <Link to="/notifies">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="w-4 h-4" />
          </Button>
        </Link>

        <Button variant="outline" size="sm" onClick={logout} className="ml-2">
          <LogOut className="w-4 h-4 mr-2" />
          Выйти
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
