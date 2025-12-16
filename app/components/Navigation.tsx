// app/components/Navigation.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/language-context';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  const [showWechat, setShowWechat] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showMobileLanguageSheet, setShowMobileLanguageSheet] = useState(false);
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

  // 选择语言函数
  const handleLanguageSelect = (langCode: string) => {
    if (langCode !== language) {
      setLanguage(langCode);
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
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-12">
            
            {/* 网站标题 */}
            <Link href="/" className="text-base font-light text-gray-800">
              {language === 'zh' ? '阿斯汤加工作室' : 'ASHTANGA STUDIO'}
            </Link>

            <div className="flex items-center gap-2">
              
              {/* 桌面端导航链接 */}
              <div className="hidden md:flex items-center gap-4 mr-4">
                <Link href="/courses/ashtanga" className={`px-3 py-1 text-xs ${isCurrent('/courses/ashtanga') ? 'text-red-800 font-bold border-b-2 border-red-800' : 'text-gray-700 hover:text-red-800'}`}>
                  {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                </Link>
                <Link href="/courses/sanskrit" className={`px-3 py-1.5 text-xs ${isCurrent('/courses/sanskrit') ? 'text-red-800 font-bold border-b-2 border-red-800' : 'text-gray-700 hover:text-red-800'}`}>
                  {language === 'zh' ? '梵语课程' : 'Sanskrit Studies'}
                </Link>
                <Link href="/moon-calendar" className={`px-3 py-1 text-xs ${isCurrent('/moon-calendar') ? 'text-red-800 font-bold border-b-2 border-red-800' : 'text-gray-700 hover:text-red-800'}`}>
                  {language === 'zh' ? '休息日' : 'Rest Days'}
                </Link>
                <Link href="/knowledge" className={`px-3 py-1.5 text-xs ${isCurrent('/knowledge') ? 'text-red-800 font-bold border-b-2 border-red-800' : 'text-gray-700 hover:text-red-800'}`}>
                  {language === 'zh' ? '练习指南' : 'Practice Guide'}
                </Link>
              </div>

              {/* 🎯 移动端：三个图标并排 (菜单、语言、微信) */}
              <div className="md:hidden flex items-center gap-3">
                {/* 菜单按钮 */}
                <button
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="w-8 h-8 flex items-center justify-center text-gray-700"
                  aria-label="菜单"
                >
                  {showMobileMenu ? '✕' : '☰'}
                </button>
                
                {/* 语言图标 */}
                <button
                  onClick={() => setShowMobileLanguageSheet(true)}
                  className="w-8 h-8 flex items-center justify-center text-gray-700"
                  aria-label="切换语言"
                >
                  <img src="/images/globe.svg" alt="Language" className="w-4 h-4" />
                </button>
                
                {/* 微信图标 */}
                <button
                  onClick={() => setShowWechat(true)}
                  className="w-8 h-8 flex items-center justify-center text-green-800"
                  aria-label="微信"
                >
                  <i className="fab fa-weixin text-base"></i>
                </button>
              </div>

              {/* 🎯 桌面端：语言图标 + 微信图标 */}
              <div className="hidden md:flex items-center gap-3">
                {/* 语言切换 */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label="切换语言"
                  >
                    <img src="/images/globe.svg" alt="Language" className="w-3.5 h-3.5" />
                  </button>
                  
                  {/* 下拉菜单 */}
                  {showLanguageDropdown && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl py-1 min-w-[110px] z-50">
                      {languageOptions.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 transition-colors ${language === lang.code ? 'text-red-800 font-medium' : 'text-gray-700'}`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* 微信图标 */}
                <button
                  onClick={() => setShowWechat(true)}
                  className="w-8 h-8 flex items-center justify-center text-green-800 hover:text-green-700"
                  aria-label="微信"
                >
                  <i className="fab fa-weixin text-base"></i>
                </button>
              </div>
            </div>
          </div>

          {/* 移动端导航菜单 */}
          {showMobileMenu && (
            <div className="md:hidden border-t border-gray-100 bg-white py-3">
              <div className="flex flex-col gap-1 px-2">
                <Link href="/courses/ashtanga" className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/courses/ashtanga') ? 'text-red-800 font-bold bg-gray-100' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                </Link>
                <Link href="/courses/sanskrit" className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/courses/sanskrit') ? 'text-red-800 font-bold bg-gray-100' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '梵语课程' : 'Sanskrit Studies'}
                </Link>
                <Link href="/moon-calendar" className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/moon-calendar') ? 'text-red-800 font-bold bg-gray-100' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '休息日' : 'Rest Days'}
                </Link>
                <Link href="/knowledge" className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/knowledge') ? 'text-red-800 font-bold bg-gray-100' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '练习指南' : 'Practice Guide'}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 🎯 移动端语言选择底部弹窗 */}
      {showMobileLanguageSheet && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setShowMobileLanguageSheet(false)}
          />
          
          {/* 底部弹窗 */}
          <div className="fixed bottom-0 left-0 right-0 z-[70] bg-white rounded-t-2xl shadow-2xl md:hidden animate-slide-up max-h-[70vh]">
            <div className="p-1">
              {/* 拖拽手柄 */}
              <div className="flex justify-center py-3">
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
              </div>
              
              {/* 语言选项列表 */}
              <div className="px-2 pb-4">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 transition-colors ${language === lang.code ? 'text-red-800 font-medium' : 'text-gray-700'}`}
                  >
                    <span className={`font-medium ${language === lang.code ? 'text-red-800' : 'text-gray-800'}`}>
                      {lang.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* 微信弹窗 */}
      {showWechat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4" onClick={() => setShowWechat(false)}>
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl md:rounded-2xl p-6 md:p-8 w-full max-w-xs md:max-w-sm border border-white/20" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 md:top-4 right-3 md:right-4 text-white/60 hover:text-white text-xl md:text-2xl" onClick={() => setShowWechat(false)}>
              &times;
            </button>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-center">
              {language === 'zh' ? '添加微信' : 'Add WeChat'}
            </h3>
            <p className="text-white/70 mb-4 md:mb-6 text-sm md:text-base text-center">
              {language === 'zh' ? '扫描二维码联系我' : 'Scan QR code to contact me'}
            </p>
            <div className="bg-white p-3 md:p-4 rounded-lg mb-4 md:mb-6">
              <img src="/images/wechat-qr.jpg" alt="WeChat QR Code" className="w-full h-auto" />
            </div>
            <p className="text-white/80 text-xs md:text-sm text-center">
              {language === 'zh' ? '微信号：' : 'WeChat ID: '}
              <span className="text-green-600">xbyogi</span>
            </p>
          </div>
        </div>
      )}

      {/* 全局样式 */}
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
