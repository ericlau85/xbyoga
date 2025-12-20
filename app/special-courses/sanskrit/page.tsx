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
        <div className="text-xl">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 safe-top safe-bottom pt-12">
      {/* 导航栏 */}
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
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            {content.intro}
          </p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* 课程内容 - 简洁网格 */}
        <section className="mb-10 md:mb-14">
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
              <div key={index}>
                <div className="text-sm text-gray-500 mb-1">
                  {module.week}
                </div>
                <div className="text-base font-bold text-gray-900 mb-1">
                  {module.title}
                </div>
                <div className="text-sm text-green-700 font-medium mb-2">
                  {module.subtitle}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 课程费用 - 简洁展示 */}
        <section>
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {content.pricing.title}
          </h2>
          
          <div className="border-t border-b border-gray-200 py-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-lg font-bold text-gray-900 mb-1">
                  {content.pricing.course}
                </div>
                <p className="text-gray-600 text-sm">
                  {content.pricing.description}
                </p>
              </div>
              <div className="text-lg font-bold text-red-800">
                {content.pricing.price}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
