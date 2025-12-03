'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/language-context';

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { language } = useLanguage();
  
  if (isHomePage) return null;

  return (
    <footer className="py-4 text-center mt-12 border-t border-gray-200 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-500 text-xs m-0">
          {language === 'zh'
            ? '© 2025 阿斯汤加工作室. 保留所有权利。'
            : '© 2025 ASHTANGA STUDIO. All rights reserved.'
          }
        </p>
      </div>
    </footer>
  );
}
