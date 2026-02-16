import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Building2, FileCheck, Stamp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "orgs", label: "Организации", icon: Building2 },
  { id: "certs", label: "Сертификаты", icon: FileCheck },
  { id: "stamps", label: "Клейма", icon: Stamp },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("orgs");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Поиск</h1>
        <p className="text-muted-foreground mt-1">
          На данной странице вы можете найти организации или сертификаты, которые имеют отношение к следующим ОКВЭД номерам:{" "}
          <span className="text-primary font-semibold">30.20.9</span>,{" "}
          <span className="text-primary font-semibold">30.20.31</span> и{" "}
          <span className="text-primary font-semibold">52.21.1</span>
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-secondary/50 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder={`Поиск ${activeTab === "orgs" ? "организаций" : activeTab === "certs" ? "сертификатов" : "клейм"}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-secondary/50 border-border/50"
        />
      </div>

      {/* Content area */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 min-h-[400px] flex items-center justify-center"
      >
        <div className="text-center text-muted-foreground">
          <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">Введите запрос для поиска</p>
          <p className="text-sm mt-1">Результаты появятся здесь</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
