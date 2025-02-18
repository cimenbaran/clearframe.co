import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/lib/i18n/languageContext";

export function Navbar() {
  const [location] = useLocation();
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t("nav", "home") },
    { href: "/portfolio", label: t("nav", "portfolio") },
    { href: "/about", label: t("nav", "about") },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-6 max-w-7xl flex h-16 items-center">
        <Link href="/" >
          <a className="mr-8 flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-xl">ClearFrame</span>
          </a>
        </Link>
        <nav className="flex flex-1 items-center">
          <div className="flex space-x-6">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/contact">
              <a className="text-sm font-medium text-muted-foreground hover:text-primary">
                {t("nav", "contact")}
              </a>
            </Link>
            <a href="https://calendly.com/clearframe-info/initial-meeting" target="_blank" rel="noopener noreferrer">
              <Button>{t("nav", "getStarted")}</Button>
            </a>
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}