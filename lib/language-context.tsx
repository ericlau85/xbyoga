// lib/language-context.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // 从 localStorage 读取保存的语言设置
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'zh' : 'en';
    updateLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: updateLanguage,
      toggleLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
