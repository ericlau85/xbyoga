'use client';

import { useState, useEffect } from 'react';
import sanskritData from '../../../data/courses/sanskrit.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../../lib/language-context';

export default function SanskritPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    setContent(sanskritData[language as keyof typeof sanskritData]);
  }, [language]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen safe-top safe-bottom pt-12">
      <Navigation />

      {/* 蓝色标题区域 */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-light mb-3">
            {content.title}
          </h1>
          <h2 className="text-lg text-gray-200 font-medium mb-4">
            {content.subtitle}
          </h2>
          <p className="text-gray-300 text-base max-w-3xl mx-auto">
            {content.intro}
          </p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* 课程模块 */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.modules.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            {content.modules.subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {content.modules.items.map((module: any, index: number) => (
              <div key={index} className="p-3 border-l-2 border-green-800 hover:bg-gray-50 transition-colors">
                <div className="text-xs text-gray-500 mb-1">
                  {module.week}
                </div>
                <div className="text-base font-bold text-gray-900 mb-2">
                  {module.title}
                </div>
                <div className="text-sm text-green-800 font-medium mb-2">
                  {module.subtitle}
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 课程费用 - 简化版 */}
        <div className="mb-10 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.pricing.title}
          </h2>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <div className="font-medium text-gray-900 text-sm mb-1">
                {content.pricing.course}
              </div>
              <p className="text-gray-500 text-xs">
                {content.pricing.description}
              </p>
            </div>
            <div className="font-bold text-red-800 text-sm">
              {content.pricing.price}
            </div>
          </div>
        </div>

        {/* 常见问题 - 简化版 */}
        <div className="pt-8 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3 text-sm">
            {language === 'zh' ? '常见问题' : 'FAQ'}
          </h4>
          <div className="space-y-1 text-xs text-gray-600">
            <p className="flex items-start">
              <span className="text-gray-400 mr-1">•</span>
              <span>
                {language === 'zh'
                  ? '课程为实时在线教学，包含练习与互动环节'
                  : 'Course features real-time online teaching, including practice and interactive sessions'}
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-gray-400 mr-1">•</span>
              <span>
                {language === 'zh'
                  ? '课程资料报名后提供，包含天城文字帖、发音指南等'
                  : 'Course materials provided upon enrollment, including Devanagari scripts, pronunciation guides, etc.'}
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-gray-400 mr-1">•</span>
              <span>
                {language === 'zh'
                  ? '课程适合瑜伽教师、练习者及对梵语文化感兴趣者'
                  : 'Course suitable for yoga teachers, practitioners, and those interested in Sanskrit culture'}
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
