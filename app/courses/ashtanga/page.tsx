'use client';

import { useState, useEffect } from 'react';
import ashtangaData from '../../../data/courses/ashtanga.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../../lib/language-context';

export default function AshtangaPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    tradition: false,
    preparation: false,
    adjustment: false
  });

  useEffect(() => {
    setContent(ashtangaData[language as keyof typeof ashtangaData]);
  }, [language]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
                <h1 className="text-2xl md:text-3xl font-light mb-2">
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
              
              {/* 教师介绍 */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-green-800">
                      <img
                        src="/images/profile.jpg"
                        alt={content.teacher?.name || 'Teacher'}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-gray-900 mb-1">
                      {content.teacher?.name}
                    </div>
                    <p className="text-red-800 font-medium text-base mb-2">
                      {content.teacher?.title}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {content.teacher?.intro}
                    </p>
                  </div>
                </div>
              </div>

          {/* 课程形式与时间表 - 移动设备上下排列 */}
          <div className="mb-8">
            {/* 课程形式 - 移动设备在上 */}
            <div className="md:hidden mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {content.practiceFormatsTitle || (language === 'zh' ? '课程形式' : 'Practice Formats')}
              </h3>
              
              <div className="space-y-6">
                {content.practiceFormats.map((item: any, index: number) => (
                  <div key={index} className="border-l-2 border-red-800 pl-4">
                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 左侧：桌面显示课程形式，移动隐藏 */}
              <div className="hidden md:block">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {content.practiceFormatsTitle || (language === 'zh' ? '课程形式' : 'Practice Formats')}
                </h3>
                
                <div className="space-y-6">
                  {content.practiceFormats.map((item: any, index: number) => (
                    <div key={index} className="border-l-2 border-red-800 pl-4">
                      <div className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 右侧：时间表 */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {language === 'zh' ? '每周时间表' : 'Weekly Schedule'}
                </h3>
                
                <div className="space-y-3">
                  {content.timeTable.days.map((day: string, index: number) => {
                    const isRest = content.timeTable.classes[index] === 'Rest' || content.timeTable.classes[index] === '休息';
                    const isSunday = index === 0;
                    
                    return (
                      <div key={index} className="flex items-center py-2 border-b border-gray-200 last:border-0">
                        <div className="w-24 font-medium text-gray-900 text-sm">
                          {day}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            {content.timeTable.classes[index]}
                          </div>
                          <div className="text-xs text-gray-500">
                            {isRest ? '-' : '6:30-8:00'}
                          </div>
                          {isSunday && (
                            <div className="text-xs text-gray-500 mt-1">
                              {language === 'zh' ? '研习会（不定期）' : 'Workshop (occasional)'}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 课程费用 - 移动设备在下面 */}
          <div className="mt-8 pt-8 border-t border-gray-200 md:border-t-0 md:mt-12">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {content.pricingTitle}
            </h2>
            
            <div className="space-y-1 mb-6">
              {content.groupPrices.map((price: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="font-medium text-gray-900 text-sm">
                    {price.title}
                  </div>
                  <div className="font-bold text-red-800 text-base">
                    {price.price}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-sm text-gray-600">
              <p className="mb-4">
                {language === 'zh'
                  ? '所有课程均为收费项目，目前不提供免费体验。'
                  : 'All sessions are paid courses. Free trials are not currently offered.'}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-0.5">•</span>
                  <a
                    href="/policies/fees"
                    className="text-gray-700 hover:text-gray-900 hover:underline"
                  >
                    {language === 'zh' ? '《在线教学服务协议》' : 'Online Teaching Service Agreement'}
                  </a>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-0.5">•</span>
                  <a
                    href="/policies/agreement"
                    className="text-gray-700 hover:text-gray-900 hover:underline"
                  >
                    {language === 'zh' ? '《阿斯汤加瑜伽在线练习指南》' : 'Ashtanga Yoga Online Practice Guide'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
            
     <Footer />
   </div>
  );
}
