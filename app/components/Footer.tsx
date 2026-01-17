// app/components/Footer.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/language-context';

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { language } = useLanguage();
  
  if (isHomePage) return null;

  return (
    <footer className="py-2.5 border-t border-gray-200 bg-gray-50 w-full">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        {/* 左侧：版权信息 */}
        <p className="text-gray-500 text-[10px] m-0">
          {language === 'zh'
            ? '© 2026 XBYOGA'
            : '© 2026 XBYOGA'
          }
        </p>
        
        {/* 右侧：联系方式 - 单行 */}
        <div className="flex items-center gap-2 text-gray-500 text-[10px]">
          <a
            href="mailto:hi@xbyoga.com"
            className="hover:text-gray-700 transition-colors flex items-center gap-1"
            title="Email"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>hi@xbyoga.com</span>
          </a>
          
          <span className="text-gray-300">•</span>
          
          <span className="flex items-center gap-1">
            <i className="fab fa-weixin text-xs text-green-600"></i>
            <span>xbyogi</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
