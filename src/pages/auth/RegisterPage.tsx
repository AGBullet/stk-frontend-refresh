import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthAPI } from "@/services/api/auth";
import logo from "@/assets/logo.png";
import { Eye, EyeOff, ArrowLeft, ArrowRight, Building2, User, Mail, Lock, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import type { CustomerType, RegisterForm } from "@/types/api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    password: "",
    confirmPassword: "",
    customerType: "individual",
    subscriptionPriceId: null,
    organizationName: "",
    inn: "",
    kpp: "",
    ogrn: "",
    address: "",
    phone: "",
    step: 0,
  });

  const updateForm = (field: keyof RegisterForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      toast.error("Пароли не совпадают");
      return;
    }
    setLoading(true);
    try {
      const response = await AuthAPI.register(form);
      if (response.paymentUrl) {
        window.location.href = response.paymentUrl;
      } else {
        toast.success("Регистрация успешна!");
        navigate("/auth/login");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    // Step 0 - Customer type
    <div key="step0" className="space-y-6">
      <div>
        <h2 className="text-xl font-display font-bold text-foreground">Тип клиента</h2>
        <p className="text-muted-foreground text-sm mt-1">Выберите тип аккаунта</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {([
          { type: "individual" as CustomerType, icon: User, label: "Физ. лицо" },
          { type: "legal" as CustomerType, icon: Building2, label: "Юр. лицо" },
        ]).map(({ type, icon: Icon, label }) => (
          <button
            key={type}
            onClick={() => updateForm("customerType", type)}
            className={`glass-card p-6 text-center transition-all hover:border-primary/50 ${
              form.customerType === type ? "border-primary glow-green" : ""
            }`}
          >
            <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
            <p className="font-medium text-foreground">{label}</p>
          </button>
        ))}
      </div>
      <Button onClick={next} className="w-full">
        Далее <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>,

    // Step 1 - Main info
    <div key="step1" className="space-y-4">
      <div>
        <h2 className="text-xl font-display font-bold text-foreground">Основная информация</h2>
        <p className="text-muted-foreground text-sm mt-1">Заполните данные</p>
      </div>
      <div className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Email" type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)} className="pl-10 bg-secondary/50 border-border/50" />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Телефон" value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} className="pl-10 bg-secondary/50 border-border/50" />
        </div>
        {form.customerType === "legal" && (
          <>
            <Input placeholder="Название организации" value={form.organizationName} onChange={(e) => updateForm("organizationName", e.target.value)} className="bg-secondary/50 border-border/50" />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="ИНН" value={form.inn} onChange={(e) => updateForm("inn", e.target.value)} className="bg-secondary/50 border-border/50" />
              <Input placeholder="КПП" value={form.kpp} onChange={(e) => updateForm("kpp", e.target.value)} className="bg-secondary/50 border-border/50" />
            </div>
            <Input placeholder="ОГРН" value={form.ogrn} onChange={(e) => updateForm("ogrn", e.target.value)} className="bg-secondary/50 border-border/50" />
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Адрес" value={form.address} onChange={(e) => updateForm("address", e.target.value)} className="pl-10 bg-secondary/50 border-border/50" />
            </div>
          </>
        )}
      </div>
      <div className="flex gap-3">
        <Button variant="outline" onClick={back} className="flex-1">
          <ArrowLeft className="w-4 h-4 mr-2" /> Назад
        </Button>
        <Button onClick={next} className="flex-1">
          Далее <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>,

    // Step 2 - Password
    <div key="step2" className="space-y-4">
      <div>
        <h2 className="text-xl font-display font-bold text-foreground">Пароль</h2>
        <p className="text-muted-foreground text-sm mt-1">Создайте надежный пароль</p>
      </div>
      <div className="space-y-3">
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Пароль"
            value={form.password}
            onChange={(e) => updateForm("password", e.target.value)}
            className="pl-10 pr-10 bg-secondary/50 border-border/50"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Подтвердите пароль"
            value={form.confirmPassword}
            onChange={(e) => updateForm("confirmPassword", e.target.value)}
            className="pl-10 bg-secondary/50 border-border/50"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" onClick={back} className="flex-1">
          <ArrowLeft className="w-4 h-4 mr-2" /> Назад
        </Button>
        <Button onClick={next} className="flex-1">
          Далее <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>,

    // Step 3 - Confirm
    <div key="step3" className="space-y-4">
      <div>
        <h2 className="text-xl font-display font-bold text-foreground">Подтверждение</h2>
        <p className="text-muted-foreground text-sm mt-1">Проверьте данные и завершите регистрацию</p>
      </div>
      <div className="glass-card p-4 space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-muted-foreground">Email:</span><span className="text-foreground">{form.email}</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Телефон:</span><span className="text-foreground">{form.phone}</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Тип:</span><span className="text-foreground">{form.customerType === "legal" ? "Юр. лицо" : "Физ. лицо"}</span></div>
        {form.customerType === "legal" && (
          <>
            <div className="flex justify-between"><span className="text-muted-foreground">Организация:</span><span className="text-foreground">{form.organizationName}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">ИНН:</span><span className="text-foreground">{form.inn}</span></div>
          </>
        )}
      </div>
      <div className="flex gap-3">
        <Button variant="outline" onClick={back} className="flex-1">
          <ArrowLeft className="w-4 h-4 mr-2" /> Назад
        </Button>
        <Button onClick={handleSubmit} disabled={loading} className="flex-1">
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </Button>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
            <img src={logo} alt="РейлСтат" className="w-10 h-10 rounded-lg object-contain" />
            <span className="text-2xl font-display font-bold">
              Рейл<span className="text-primary">Стат</span>
            </span>
          </Link>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-6">
          {[0, 1, 2, 3].map((s) => (
            <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-secondary"}`} />
          ))}
        </div>

        <div className="glass-card p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {steps[step]}
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 text-center">
            <Link to="/auth/login" className="text-sm text-primary hover:text-primary/80 transition-colors">
              Уже есть аккаунт? Войти
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
