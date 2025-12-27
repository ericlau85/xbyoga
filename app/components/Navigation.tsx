'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/language-context';
import { getRestDayInfo } from '../../lib/rest-day-utils';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  // 删除 showWechat 状态
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showMobileLanguageSheet, setShowMobileLanguageSheet] = useState(false);
  const [isRestDay, setIsRestDay] = useState(false);
  const [restDayType, setRestDayType] = useState<'saturday' | 'new_moon' | 'full_moon' | null>(null);
  
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 支持的语言配置
  const languageOptions = [
    { code: 'zh', name: '简体中文' },
    { code: 'en', name: 'English' },
  ];

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 获取休息日信息
  useEffect(() => {
    const info = getRestDayInfo(language === 'zh' ? 'zh' : 'en');
    setIsRestDay(info.isRestDay);
    setRestDayType(info.type);
    
    // 字体图标 - 可以保留，因为可能其他地方会用到
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, [language]);

  // 休息日徽章组件
  const RestDayBadge = () => {
    if (!isRestDay) return null;
    
    const getBadgeText = () => {
      switch(restDayType) {
        case 'saturday':
          return language === 'zh' ? '周六休' : 'Sat';
        case 'new_moon':
          return language === 'zh' ? '新月' : 'New';
        case 'full_moon':
          return language === 'zh' ? '满月' : 'Full';
        default:
          return language === 'zh' ? '休息' : 'Rest';
      }
    };
    
    return (
      <div className="flex items-center gap-1 ml-1">
        <div className="w-1.5 h-1.5 bg-green-800 rounded-full animate-pulse"></div>
        <span className="text-green-800 text-[8px] font-medium px-1.5 py-0.5 rounded">
          {getBadgeText()}
        </span>
      </div>
    );
  };

  // 选择语言函数
  const handleLanguageSelect = (langCode: string) => {
    if (langCode !== language) {
      setLanguage(langCode as "zh" | "en");
    }
    setShowLanguageDropdown(false);
    setShowMobileLanguageSheet(false);
    setShowMobileMenu(false);
  };

  const isCurrent = (path: string) => pathname.startsWith(path);

  // 防止滚动穿透
  useEffect(() => {
    if (showMobileLanguageSheet) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileLanguageSheet]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full px-4 max-w-4xl mx-auto">
          <div className="flex justify-between items-center h-12">
            
            {/* 左侧：移动端菜单按钮 + Logo */}
            <div className="flex items-center gap-3">
              {/* 移动端菜单按钮 - 放在Logo左侧 */}
              <div className="md:hidden">
                <button
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="relative w-5 h-5 flex items-center justify-center text-gray-700 focus:outline-none"
                  aria-label={language === 'zh' ? '菜单' : 'Menu'}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-base leading-none transform transition-transform ${showMobileMenu ? 'rotate-90' : ''}`}>
                      {showMobileMenu ? '✕' : '☰'}
                    </span>
                  </span>
                </button>
              </div>
              
              {/* 网站标题 */}
              <Link href="/" className="text-base font-light text-gray-800">
                {language === 'zh' ? 'XBYOGA' : 'XBYOGA'}
              </Link>
            </div>

            <div className="flex items-center gap-1">
              
              {/* 桌面端导航链接 - 包含休息日徽章 */}
              <div className="hidden md:flex items-center gap-3 mr-3">
          <Link href="/about" className={`px-2 py-1 text-xs ${isCurrent('/about') ? 'text-red-800 font-bold border-b-2 border-red-800' : 'text-gray-700 hover:text-red-800'}`}>
              {language === 'zh' ? '关于' : 'About'}
            </Link>
                <Link href="/courses/ashtanga" className={`px-2 py-1 text-xs ${isCurrent('/courses/ashtanga') ? 'text-red-800 font-bold border-b-2 border-red-800' : 'text-gray-700 hover:text-red-800'}`}>
                  {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                </Link>
                <Link href="/courses/special" className={`px-2 py-1 text-xs ${isCurrent('/special-courses') ? 'text-red-800 font-bold border-b-2 border-red-800' : 'text-gray-700 hover:text-red-800'}`}>
                  {language === 'zh' ? '特别课程' : 'Special Courses'}
                </Link>
                
                {/* 休息日链接 - 包含徽章 */}
                <Link href="/moon-calendar" className={`px-2 py-1 text-xs flex items-center ${isCurrent('/moon-calendar') ? 'text-red-800 font-bold border-b-2 border-red-800' : 'text-gray-700 hover:text-red-800'}`}>
                  {language === 'zh' ? '休息日' : 'Rest Days'}
                  {isRestDay && (
                    <span className="ml-1 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-800 rounded-full animate-pulse"></div>
                      <span className="text-green-800 text-[8px] font-medium px-1.5 py-0.5 rounded">
                        {restDayType === 'saturday'
                          ? (language === 'zh' ? '周六' : 'Sat')
                          : restDayType === 'new_moon'
                          ? (language === 'zh' ? '新月' : 'New')
                          : restDayType === 'full_moon'
                          ? (language === 'zh' ? '满月' : 'Full')
                          : (language === 'zh' ? '休息' : 'Rest')}
                      </span>
                    </span>
                  )}
                </Link>
                
                <Link href="/knowledge" className={`px-2 py-1 text-xs ${isCurrent('/knowledge') ? 'text-red-800 font-bold border-b-2 border-red-800' : 'text-gray-700 hover:text-red-800'}`}>
                  {language === 'zh' ? '练习指南' : 'Practice Guide'}
                </Link>
          
              </div>

              {/* 移动端：只保留语言切换按钮 */}
              <div className="md:hidden">
                {/* 语言切换按钮 */}
                <button
                  onClick={() => setShowMobileLanguageSheet(true)}
                  className="relative w-5 h-5 flex items-center justify-center text-gray-700 focus:outline-none"
                  aria-label={language === 'zh' ? '切换语言' : 'Change language'}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/images/globe.svg"
                      alt={language === 'zh' ? '语言' : 'Language'}
                      className="w-3.5 h-3.5 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNy41IiBzdHJva2U9IiM0QTU1NjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik04IDEuNUMxMS4wMzYgMS41IDEzLjUgMy45NjQgMTMuNSA3SDE1QzE1IDMuMTM0IDExLjg2NiAwIDggMFYxLjVaIiBmaWxsPSIjNEE1NTY5Ii8+PHBhdGggZD0iTTggMTQuNUM0Ljk2NCAxNC41IDIuNSAxMi4wMzYgMi41IDlIMEMwIDEyLjg2NiAzLjEzNCAxNiA4IDE2VjE0LjVaIiBmaWxsPSIjNEE1NTY5Ii8+PC9zdmc+';
                      }}
                    />
                  </span>
                </button>
              </div>

              {/* 桌面端：只保留语言图标 */}
              <div className="hidden md:flex items-center">
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="w-5 h-5 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label="切换语言"
                  >
                    <img src="/images/globe.svg" alt="Language" className="w-3.5 h-3.5" />
                  </button>
                  
                  {showLanguageDropdown && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl py-1 min-w-[110px] z-50">
                      {languageOptions.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 transition-colors ${language === lang.code ? 'text-red-900 font-medium' : 'text-gray-700'}`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {/* 删除了微信按钮 */}
              </div>
            </div>
          </div>

          {/* 移动端导航菜单 */}
          {showMobileMenu && (
            <div className="md:hidden border-t border-gray-100 bg-white py-3">
              <div className="flex flex-col gap-1 px-2">
                              <Link href="/about" className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/about') ? 'text-red-800 font-bold bg-gray-100' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setShowMobileMenu(false)}>
                                      {language === 'zh' ? '关于' : 'About'}
                                    </Link>
                <Link href="/courses/ashtanga" className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/courses/ashtanga') ? 'text-red-800 font-bold bg-gray-100' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                </Link>
                <Link href="/courses/special" className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/special-courses') ? 'text-red-800 font-bold bg-gray-100' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '特别课程' : 'Special Courses'}
                </Link>
                
                {/* 移动端休息日链接 */}
                <Link
                  href="/moon-calendar"
                  className={`px-3 py-2 text-xs rounded-lg flex items-center justify-between ${isCurrent('/moon-calendar') 
                    ? 'text-red-800 font-bold bg-gray-100'
                    : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  <div className="flex items-center gap-2">
                    <span>{language === 'zh' ? '休息日' : 'Rest Days'}</span>
                    {isRestDay && (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-800 rounded-full animate-pulse"></div>
                        {restDayType === 'saturday' && (
                          <span className="text-green-800 text-[10px] font-medium">
                            {language === 'zh' ? '周六休息' : 'Saturday'}
                          </span>
                        )}
                        {(restDayType === 'new_moon' || restDayType === 'full_moon') && (
                          <span className="text-red-600 text-[10px] font-medium">
                            {restDayType === 'new_moon'
                              ? (language === 'zh' ? '新月' : 'New Moon')
                              : (language === 'zh' ? '满月' : 'Full Moon')}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
                
                <Link href="/knowledge" className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/knowledge') ? 'text-red-800 font-bold bg-gray-100' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '练习指南' : 'Practice Guide'}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 移动端语言选择 */}
      {showMobileLanguageSheet && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setShowMobileLanguageSheet(false)}
          />
          
          <div className="fixed bottom-0 left-0 right-0 z-[70] bg-white rounded-t-2xl shadow-2xl md:hidden animate-slide-up max-h-[70vh]">
            <div className="p-1">
              <div className="flex justify-center py-3">
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
              </div>
              
              <div className="px-2 pb-4">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 transition-colors ${language === lang.code ? 'text-red-900 font-medium' : 'text-gray-700'}`}
                  >
                    <span className={`font-medium ${language === lang.code ? 'text-red-900' : 'text-gray-800'}`}>
                      {lang.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx global>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
