'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/language-context';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const [showWechat, setShowWechat] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  // 自动关闭菜单
  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  // 简化版本 - 不用复杂的样式函数
  const isCurrent = (path: string) => pathname.startsWith(path);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-14">
            
            {/* Logo */}
            <Link href="/" className="text-lg font-light text-gray-800">
              {language === 'zh' ? '阿斯汤加工作室' : 'Ashtanga Studio'}
            </Link>

            {/* 右侧 */}
            <div className="flex items-center gap-2">
              
              {/* 桌面端链接 */}
              <div className="hidden md:flex items-center gap-4 mr-4">
                <Link href="/courses/ashtanga"
                  className={`px-3 py-1.5 text-sm ${isCurrent('/courses/ashtanga') ? 'text-red-800 font-bold' : 'text-gray-700'}`}>
                  {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                </Link>
                <Link href="/courses/sanskrit"
                  className={`px-3 py-1.5 text-sm ${isCurrent('/courses/sanskrit') ? 'text-red-800 font-bold' : 'text-gray-700'}`}>
                  {language === 'zh' ? '梵语' : 'Sanskrit'}
                </Link>
                <Link href="/knowledge"
                  className={`px-3 py-1.5 text-sm ${isCurrent('/knowledge') ? 'text-red-800 font-bold' : 'text-gray-700'}`}>
                  {language === 'zh' ? '知识库' : 'Knowledge'}
                </Link>
              </div>

              {/* 移动端菜单按钮 */}
              <button className="md:hidden w-10 h-10 text-gray-700" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? '✕' : '☰'}
              </button>

              {/* 桌面端功能按钮 */}
              <div className="hidden md:flex items-center gap-3">
                <button onClick={toggleLanguage} className="px-3 py-1.5 text-sm border border-gray-300 rounded">
                  {language === 'zh' ? 'EN' : '中文'}
                </button>
                <button onClick={() => setShowWechat(true)} className="w-10 h-10 text-green-600">
                  <i className="fab fa-weixin text-xl"></i>
                </button>
              </div>
            </div>
          </div>

          {/* 移动端菜单 */}
          {showMobileMenu && (
            <div className="md:hidden border-t border-gray-100 bg-white py-2">
              <div className="flex flex-col gap-1 px-2">
                <Link href="/courses/ashtanga" className="px-3 py-2 text-sm text-gray-700" onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                </Link>
                <Link href="/courses/sanskrit" className="px-3 py-2 text-sm text-gray-700" onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '梵语' : 'Sanskrit'}
                </Link>
                <Link href="/knowledge" className="px-3 py-2 text-sm text-gray-700" onClick={() => setShowMobileMenu(false)}>
                  {language === 'zh' ? '知识库' : 'Knowledge'}
                </Link>
                
                <div className="flex gap-3 pt-2 mt-2 border-t border-gray-100">
                  <button onClick={toggleLanguage} className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded">
                    {language === 'zh' ? 'EN' : '中文'}
                  </button>
                  <button onClick={() => { setShowWechat(true); setShowMobileMenu(false); }} className="flex-1 px-4 py-2 text-sm text-green-600 border border-green-300 rounded">
                    <i className="fab fa-weixin mr-2"></i>微信
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
