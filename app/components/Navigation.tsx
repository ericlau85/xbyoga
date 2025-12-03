'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/language-context';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const [showWechat, setShowWechat] = useState(false);
    const pathname = usePathname();
    
    // 判断当前页面函数
      const isCurrentPage = (path: string) => {
        return pathname === path;
      };

      // 首页特殊处理（匹配根路径）
      const isHomePage = pathname === '/';

      // 链接样式函数
      const getLinkStyle = (path: string) => {
        const isCurrent = path === '/' ? isHomePage : pathname.startsWith(path);
        return isCurrent
          ? 'px-4 py-2 text-sm font-bold text-red-800 hover:text-red-900 hover:bg-red-50 rounded-lg transition-all duration-200'  // 当前页面
          : 'px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200';  // 普通页面
      };

    return (
        <>
          {/* 导航栏 */}
          <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                
                {/* Logo返回首页 */}
                <Link
                  href="/"
                  className="flex items-center text-gray-800 hover:text-gray-900 transition-colors px-2 py-1"
                >
                  <div className="text-xl font-light tracking-wider">
                    {language === 'zh' ? '阿斯汤加工作室' : 'Ashtanga Studio'}
                  </div>
                </Link>

                {/* 右侧按钮 */}
                <div className="flex items-center space-x-4 sm:space-x-6 whitespace-nowrap">
                  {/* 首页链接 */}
                  <Link
                    href="/"
                    className={getLinkStyle('/')}
                  >
                    {language === 'zh' ? '首页' : 'Home'}
                  </Link>
                  
                  {/* 阿斯汤加课程链接 */}
                  <Link
                    href="/courses/ashtanga"
                    className={getLinkStyle('/courses/ashtanga')}
                  >
                    {language === 'zh' ? '阿斯汤加' : 'Ashtanga'}
                  </Link>
                  
                  {/* 梵语课程链接 */}
                  <Link
                    href="/courses/sanskrit"
                    className={getLinkStyle('/courses/sanskrit')}
                  >
                    {language === 'zh' ? '梵语' : 'Sanskrit'}
                  </Link>
                  
                  {/* 知识库链接 */}
                  <Link
                    href="/knowledge"
                    className={getLinkStyle('/knowledge')}
                  >
                    {language === 'zh' ? '知识库' : 'Knowledge'}
                  </Link>

                  {/* 语言切换按钮 */}
                  <button
                    onClick={toggleLanguage}
                    className="px-4 py-2 bg-white text-red-800 border border-red-800 text-sm rounded-lg hover:bg-red-50 hover:border-red-900 transition-all duration-200 min-w-[80px] text-center"
                  >
                    {language === 'zh' ? 'EN' : '中文'}
                  </button>

                  {/* 微信按钮 */}
                  <button
                    onClick={() => setShowWechat(true)}
                    className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-all duration-200 min-w-[100px]"
                  >
                    {language === 'zh' ? '微信联系' : 'WeChat'}
                  </button>
                </div>
              </div>
            </div>
          </nav>

      {/* 微信弹窗 */}
      {showWechat && (
        <div
          className="wechat-modal active"
          onClick={() => setShowWechat(false)}
        >
          <div
            className="wechat-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="wechat-close"
              onClick={() => setShowWechat(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {language === 'en' ? 'Add WeChat' : '添加微信'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'en' ? 'Scan QR code to contact me' : '扫描二维码联系我'}
            </p>
            <img
              src="/images/wechat-qr.jpg"
              alt="WeChat QR Code"
              className="wechat-image"
            />
            <p className="wechat-username">
              WeChat ID: xbyogi
            </p>
          </div>
        </div>
      )}
    </>
  );
}
