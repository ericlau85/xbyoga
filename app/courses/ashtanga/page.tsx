'use client';

import { useState, useEffect } from 'react';
import ashtangaData from '../../../data/courses/ashtanga.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../../lib/language-context';

export default function AshtangaPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    setContent(ashtangaData[language as keyof typeof ashtangaData]);
  }, [language]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      </div>
    );
  }

  const t = (key: string, defaultValue: string = '') => {
    return content[key] || defaultValue;
  };

  return (
    <div className="min-h-screen bg-gray-50 safe-top safe-bottom pt-12">
      <Navigation />

      {/* 蓝色标题区域 */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-light mb-3 text-center">
            {t('title')}
          </h1>
          <h2 className="text-lg text-gray-200 font-medium mb-4 text-center">
            {t('subtitle')}
          </h2>
          <p className="text-gray-300 text-base text-center max-w-3xl mx-auto">
            {t('intro')}
          </p>
        </div>
      </div>

      {/* 主要内容 - 使用卡片整合 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* 卡片1：教师介绍 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-green-900">
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
              <p className="text-red-800 font-medium text-base mb-3">
                {content.teacher?.title}
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                {content.teacher?.intro}
              </p>
            </div>
          </div>
        </div>

        {/* 卡片2：课程体系（整合形式+时间表） */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {language === 'zh' ? '课程体系' : 'Course Structure'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 左侧：课程形式 */}
            <div>
              <div className="space-y-6">
                {content.practiceFormats.map((item: any, index: number) => (
                  <div key={index} className="border-l-2 border-red-800 pl-4">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-xl text-red-800 mt-1">
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 mb-1">
                          {item.title}
                        </div>
                        <p className="text-gray-600 text-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 额外信息 */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="space-y-3">
                  <div className="text-base">
                    <span className="font-medium text-gray-900">{content.timeTable.privateBooking}</span>
                    <span className="text-gray-600 ml-2">{content.timeTable.privateTime}</span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    {content.timeTable.restDays}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 右侧：时间表 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {language === 'zh' ? '每周时间表' : 'Weekly Schedule'}
              </h3>
              
          {/* 移动版时间表 */}
          <div className="md:hidden">
            <div className="space-y-1">
              {content.timeTable.days.map((day: string, index: number) => {
                const isRest = content.timeTable.classes[index] === 'Rest' || content.timeTable.classes[index] === '休息';
                const isSunday = index === 0;
                
                return (
                  <div key={index} className="py-1 border-b border-gray-100 last:border-0">
                    <div className="flex justify-between items-center">
                      <div className="font-medium text-gray-900 text-xs">
                        {day}
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-900">
                          {content.timeTable.classes[index]}
                        </div>
                        <div className="text-xs text-gray-500">
                          {isRest ? '-' : '6:30-8:00'}
                        </div>
                        {isSunday && (
                          <div className="text-xs text-gray-500 mt-0.5">
                            {language === 'zh' ? '研习会（不定期）' : 'Workshop (occasional)'}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
              
              {/* 桌面版时间表 */}
              <div className="hidden md:block">
                <div className="space-y-3">
                  {content.timeTable.days.map((day: string, index: number) => {
                    const isRest = content.timeTable.classes[index] === 'Rest' || content.timeTable.classes[index] === '休息';
                    const isSunday = index === 0;
                    
                    return (
                      <div key={index} className="flex items-center py-2 border-b border-gray-100 last:border-0">
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
        </div>

          {/* 卡片3：价格体系 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
            <h2 className="text-xl font-medium text-gray-900 mb-3">
              {content.pricingTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* 团体课程 */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {content.groupTitle}
                </h3>
                <div className="space-y-1">
                  {content.groupPrices.map((price: any, index: number) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                      <div className="font-medium text-gray-900 text-sm">
                        {price.title}
                      </div>
                      <div className="font-bold text-red-800 text-sm">
                        {price.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 私教课程 */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {content.privateTitle}
                </h3>
                <div className="space-y-1">
                  {content.privatePrices.map((price: any, index: number) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                      <div className="font-medium text-gray-900 text-sm">
                        {price.title}
                      </div>
                      <div className="font-bold text-red-800 text-sm">
                        {price.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <Footer />
    </div>
  );
}
