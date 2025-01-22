import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: keyof typeof translations.en, key: string, nested?: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (section: keyof typeof translations.en, key: string, nested?: string): string => {
    try {
      const sectionData = translations[language][section];
      if (!sectionData) return key;

      if (!nested) {
        return (sectionData[key as keyof typeof sectionData] as string) || key;
      }

      const pathParts = nested.split('.');
      let value: any = sectionData[key as keyof typeof sectionData];

      for (const part of pathParts) {
        if (!value || typeof value !== 'object') return key;
        value = value[part];
      }

      return typeof value === 'string' ? value : key;
    } catch (error) {
      console.error(`Translation error for ${section}.${key}${nested ? '.' + nested : ''}`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}