import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n/languageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d")',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-white/90 backdrop-blur-sm p-4 rounded-lg mb-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                {t("hero", "title")}
              </h1>
              <p className="text-xl text-muted-foreground mt-4">
                {t("hero", "subtitle")}
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/portfolio">
                <Button size="lg">{t("nav", "portfolio")}</Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  {t("nav", "about")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}