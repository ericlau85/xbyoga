'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/language-context';
import { isTodayRestDay, getRestDayInfo } from '../../lib/rest-day-utils';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const [showWechat, setShowWechat] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isRestDay, setIsRestDay] = useState(false);
  const [restDayType, setRestDayType] = useState<'saturday' | 'new_moon' | 'full_moon' | null>(null);
  const pathname = usePathname();

  const handleLanguageToggle = () => {
    toggleLanguage();
    setShowMobileMenu(false);
  };

  const handleWechatClick = () => {
    setShowWechat(true);
    setShowMobileMenu(false);
  };

  const isCurrent = (path: string) => pathname.startsWith(path);

  useEffect(() => {
    // 获取休息日信息
    const info = getRestDayInfo(language === 'zh' ? 'zh' : 'en');
    setIsRestDay(info.isRestDay);
    setRestDayType(info.type);
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    link.integrity = 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==';
    link.crossOrigin = 'anonymous';
    link.referrerPolicy = 'no-referrer';
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
        {/* 小红点 */}
        <div className="w-1.5 h-1.5 bg-green-800 rounded-full animate-pulse"></div>
        {/* 文字标签 */}
        <span className="text-green-800 text-[8px] font-medium px-1.5 py-0.5 rounded">
          {getBadgeText()}
        </span>
      </div>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-12">
            
            <Link href="/" className="text-base font-light text-gray-800">
              {language === 'zh' ? '阿斯汤加工作室' : 'ASHTANGA STUDIO'}
            </Link>

            <div className="flex items-center gap-2">
              
              <div className="hidden md:flex items-center gap-4 mr-4">
                <Link
                  href="/courses/ashtanga"
                  className={`px-3 py-1 text-xs ${isCurrent('/courses/ashtanga') 
                    ? 'text-red-800 font-bold border-b-2 border-red-800'
                    : 'text-gray-700 hover:text-red-800'}`}
                >
                  {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                </Link>
                <Link
                  href="/courses/sanskrit"
                  className={`px-3 py-1.5 text-xs ${isCurrent('/courses/sanskrit') 
                    ? 'text-red-800 font-bold border-b-2 border-red-800'
                    : 'text-gray-700 hover:text-red-800'}`}
                >
                  {language === 'zh' ? '梵语' : 'Sanskrit'}
                </Link>
          
                {/* 休息日链接 */}
                <Link
                  href="/moon-calendar"
                  className={`px-3 py-1.5 text-xs flex items-center ${pathname === '/moon-calendar' 
                    ? 'text-red-800 font-bold border-b-2 border-red-800'
                    : 'text-gray-700 hover:text-red-800'}`}
                >
                  {language === 'zh' ? '休息日' : 'Rest Days'}
                  {isRestDay && <RestDayBadge />}
                </Link>
          
                <Link
                  href="/knowledge"
                  className={`px-3 py-1.5 text-xs ${isCurrent('/knowledge') 
                    ? 'text-red-800 font-bold border-b-2 border-red-800'
                    : 'text-gray-700 hover:text-red-800'}`}
                >
                  {language === 'zh' ? '练习指南' : 'Practice Guide'}
                </Link>
              </div>

              <button
                className="md:hidden w-8 h-8 text-gray-700"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                aria-label="菜单"
              >
                {showMobileMenu ? '✕' : '☰'}
              </button>

              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={handleLanguageToggle}
                  className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100"
                >
                  {language === 'zh' ? 'English' : '简体中文'}
                </button>
                <button
                  onClick={() => setShowWechat(true)}
                  className="w-10 h-10 text-green-800 hover:text-green-700"
                  aria-label="微信"
                >
                  <i className="fab fa-weixin text-base"></i>
                </button>
              </div>
            </div>
          </div>

          {showMobileMenu && (
            <div className="md:hidden border-t border-gray-100 bg-white py-3">
              <div className="flex flex-col gap-1 px-2">
                <Link
                  href="/courses/ashtanga"
                  className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/courses/ashtanga') 
                    ? 'text-red-800 font-bold bg-gray-100'
                    : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                </Link>
                <Link
                  href="/courses/sanskrit"
                  className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/courses/sanskrit') 
                    ? 'text-red-800 font-bold bg-gray-100'
                    : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {language === 'zh' ? '梵语' : 'Sanskrit'}
                </Link>
                              
                {/* 移动端休息日链接 */}
                <Link
                  href="/moon-calendar"
                  className={`px-3 py-2 text-xs rounded-lg flex items-center justify-between ${pathname === '/moon-calendar' 
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
                            {language === 'zh' ? '月相休息' : 'Moon Day'}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
                
                <Link
                  href="/knowledge"
                  className={`px-3 py-2 text-xs rounded-lg ${isCurrent('/knowledge') 
                    ? 'text-red-800 font-bold bg-gray-100'
                    : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {language === 'zh' ? '练习指南' : 'Practice Guide'}
                </Link>
                
                <div className="flex gap-3 pt-3 mt-3 border-t border-gray-100">
                  <button
                    onClick={handleLanguageToggle}
                    className="flex-1 px-4 py-3 text-xs border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    {language === 'zh' ? 'English' : '简体中文'}
                  </button>
                  <button
                    onClick={handleWechatClick}
                    className="flex-1 px-4 py-3 text-xs border border-gray-300 rounded-lg hover:bg-green-50"
                  >
                    <i className="fab fa-weixin mr-2 text-base"></i>
                    {language === 'zh' ? '微信' : 'WeChat'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 微信弹窗 */}
      {showWechat && (
        <div className="wechat-modal active" onClick={() => setShowWechat(false)}>
          <div className="wechat-modal-content" onClick={e => e.stopPropagation()}>
            <button className="wechat-close" onClick={() => setShowWechat(false)}>×</button>
            <h3 className="text-xl font-bold mb-2">{language === 'zh' ? '添加微信' : 'Add WeChat'}</h3>
            <p className="text-gray-600 mb-4">{language === 'zh' ? '扫描二维码联系我' : 'Scan QR code'}</p>
            <img src="/images/wechat-qr.jpg" alt="WeChat" className="wechat-image" />
            <p className="wechat-username">WeChat ID: xbyogi</p>
          </div>
        </div>
      )}
    </>
  );
}
