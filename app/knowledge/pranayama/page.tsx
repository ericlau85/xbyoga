// 文件路径: app/Practice Guide/UnderDevelopment.tsx
'use client';

import { useLanguage } from '../../../lib/language-context';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

interface UnderDevelopmentProps {
  // 可以接收不同的标题和图标
  pageTitle_en: string;
  pageTitle_zh: string;
  icon?: string; // 可选的图标
}

export default function UnderDevelopment({ pageTitle_en, pageTitle_zh, icon = '📄' }: UnderDevelopmentProps) {
  const { language } = useLanguage();

  return (
    // 修改1：最外层添加 flex 和 min-h-screen
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* 修改2：主要内容区域用 flex-1 撑满剩余空间 */}
      <div className="flex-1 max-w-3xl mx-auto px-4 py-24 w-full">
        
        {/* 图标和标题 */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-6 opacity-80">{icon}</div>
          <h1 className="text-3xl font-normal text-gray-800">
            {language === 'zh' ? pageTitle_zh : pageTitle_en}
          </h1>
        </div>

        {/* 简洁提示区 */}
        <div className="bg-white rounded-xl p-10 mb-12 text-center border border-gray-200">
          <div className="text-gray-600 text-lg leading-relaxed mb-2">
            {language === 'zh' ? '内容准备中' : 'Content in Preparation'}
          </div>
          <div className="text-gray-500">
            {language === 'zh' ? '请稍后再来访问。' : 'Please check back later.'}
          </div>
        </div>

        {/* 返回按钮 */}
        <div className="text-center">
          <a
            href="/knowledge"
            className="inline-flex items-center px-5 py-2.5 text-base font-medium text-red-800 hover:text-red-900 hover:bg-red-50 rounded-lg transition-colors duration-150"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {language === 'zh' ? '返回练习指南' : 'Back to Practice Guide'}
          </a>
        </div>
      </div> {/* 主要内容区域结束 */}
      
      <Footer />
    </div>
  );
}

