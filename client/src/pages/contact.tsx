import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n/languageContext";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: t("contact", "form", "success"),
        description: t("contact", "form", "successDesc"),
      });
    } catch (error) {
      toast({
        title: t("contact", "form", "error"),
        description: t("contact", "form", "errorDesc"),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-6 max-w-7xl py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">{t("contact", "title")}</h1>
        <p className="text-muted-foreground mb-8 text-center">
          {t("contact", "subtitle")}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              placeholder={t("contact", "form", "name")}
              {...register("name", { required: t("contact", "validation", "required") })}
            />
            {errors.name && (
              <span className="text-sm text-destructive">{errors.name.message}</span>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder={t("contact", "form", "email")}
              {...register("email", {
                required: t("contact", "validation", "required"),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("contact", "validation", "email"),
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-destructive">{errors.email.message}</span>
            )}
          </div>

          <div>
            <Input
              placeholder={t("contact", "form", "subject")}
              {...register("subject", { required: t("contact", "validation", "required") })}
            />
            {errors.subject && (
              <span className="text-sm text-destructive">{errors.subject.message}</span>
            )}
          </div>

          <div>
            <Textarea
              placeholder={t("contact", "form", "message")}
              className="min-h-[150px]"
              {...register("message", { required: t("contact", "validation", "required") })}
            />
            {errors.message && (
              <span className="text-sm text-destructive">{errors.message.message}</span>
            )}
          </div>

          <Button type="submit" className="w-full">
            {t("contact", "form", "submit")}
          </Button>
        </form>

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-muted-foreground">info@clearframe.co</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Phone</h3>
            <p className="text-muted-foreground">+90 (534) 973-8287</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}