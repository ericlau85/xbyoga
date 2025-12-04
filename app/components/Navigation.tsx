'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/language-context';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const [showWechat, setShowWechat] = useState(false);
  const pathname = usePathname();

  // 当前页面判断
  const isCurrentPage = (path: string) => {
    return pathname.startsWith(path);
  };

  // 修改这里：去掉背景和边框，只保留深红和粗体
  const getLinkStyle = (path: string) => {
    const baseStyle = "px-3 py-1.5 text-sm rounded transition-all duration-200";
    return isCurrentPage(path)
      ? `${baseStyle} text-red-800 font-bold`  // 只保留深红+粗体
      : `${baseStyle} text-gray-700 hover:text-gray-900 hover:bg-gray-50`;
  };

  return (
    <>
      {/* 导航栏 */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full px-3 sm:px-4 md:px-6">
          <div className="flex justify-between items-center h-14 md:h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center min-w-0">
              <div className="text-lg md:text-xl font-light text-gray-800 whitespace-nowrap">
                {language === 'zh' ? '阿斯汤加工作室' : 'Ashtanga Studio'}
              </div>
            </Link>

            {/* 右侧区域 */}
            <div className="flex items-center">
              
              {/* 页面链接 */}
              <div className="hidden md:flex items-center space-x-2 lg:space-x-4 mr-4">
                <Link href="/courses/ashtanga" className={getLinkStyle('/courses/ashtanga')}>
                  {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                </Link>
                <Link href="/courses/sanskrit" className={getLinkStyle('/courses/sanskrit')}>
                  {language === 'zh' ? '梵语' : 'Sanskrit'}
                </Link>
                <Link href="/knowledge" className={getLinkStyle('/knowledge')}>
                  {language === 'zh' ? '知识库' : 'Knowledge'}
                </Link>
              </div>

              {/* 移动端菜单按钮 */}
              <button className="md:hidden flex items-center justify-center w-8 h-8 mr-2 text-gray-700 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* 功能按钮 */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                
                {/* 语言切换按钮 */}
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1.5 text-xs sm:text-sm border border-gray-300 bg-white text-gray-700 rounded hover:bg-gray-50 transition-all duration-200 min-w-[60px] sm:min-w-[70px] text-center"
                >
                  {language === 'zh' ? 'EN' : '中文'}
                </button>

                {/* 微信按钮 */}
                <button
                  onClick={() => setShowWechat(true)}
                  className="flex items-center justify-center w-10 h-10 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-all duration-200"
                  title={language === 'zh' ? '微信联系' : 'WeChat'}
                >
                  <i className="fab fa-weixin text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 微信弹窗 */}
      {showWechat && (
        <div className="wechat-modal active" onClick={() => setShowWechat(false)}>
          <div className="wechat-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="wechat-close" onClick={() => setShowWechat(false)}>
              &times;
            </button>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {language === 'en' ? 'Add WeChat' : '添加微信'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'en' ? 'Scan QR code to contact me' : '扫描二维码联系我'}
            </p>
            <img src="/images/wechat-qr.jpg" alt="WeChat QR Code" className="wechat-image" />
            <p className="wechat-username">WeChat ID: xbyogi</p>
          </div>
        </div>
      )}
    </>
  );
}
