import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n/languageContext";
import { Language } from "@/lib/i18n/translations";
import { Globe } from "lucide-react";

const languageNames = {
  en: "English",
  tr: "Türkçe",
};

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
        <Globe className="h-4 w-4" />
        {languageNames[language]}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className="bg-white/90 backdrop-blur-sm text-foreground hover:bg-accent"
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
