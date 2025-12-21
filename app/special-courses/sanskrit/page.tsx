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
    <div className="min-h-screen bg-gray-50 safe-top safe-bottom pt-12">
      <Navigation />

      {/* 蓝色标题区域 - 与其他页面统一 */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-light mb-3">
            {content.title}
          </h1>
          <h2 className="text-lg text-gray-200 font-medium mb-4">
            {content.subtitle}
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            {content.intro}
          </p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* 课程模块卡片 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-medium text-gray-900">
              {content.modules.title}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {content.modules.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.modules.items.map((module: any, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors">
                <div className="text-sm text-gray-500 mb-2">
                  {module.week}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">
                  {module.title}
                </div>
                <div className="text-sm text-red-700 font-medium mb-3">
                  {module.subtitle}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 课程费用卡片 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {content.pricing.title}
          </h2>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {content.pricing.course}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {content.pricing.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-6">
              <div className="flex flex-col items-center text-center">
                <div className="text-lg font-bold text-red-800 mb-2">
                  {content.pricing.price}
                </div>
                <p className="text-gray-500 text-sm">
                  {language === 'zh' ? '4周系统学习 · 包含所有学习资料' : '4-week systematic learning · All materials included'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">
            {language === 'zh' ? '常见问题' : 'FAQ'}
          </h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>
                {language === 'zh'
                  ? '课程为实时在线教学，包含练习与互动环节'
                  : 'Course features real-time online teaching, including practice and interactive sessions'}
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>
                {language === 'zh'
                  ? '课程资料报名后提供，包含天城文字帖、发音指南等'
                  : 'Course materials provided upon enrollment, including Devanagari scripts, pronunciation guides, etc.'}
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
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
