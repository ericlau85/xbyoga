'use client';

import { useState, useEffect } from 'react';
import ashtangaData from '../../../data/courses/ashtanga.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../../lib/language-context';
import { getRestDayInfo } from '../../../lib/rest-day-utils';

export default function AshtangaPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);
  const [isRestDay, setIsRestDay] = useState(false);
  const [restDayType, setRestDayType] = useState<'saturday' | 'new_moon' | 'full_moon' | null>(null);

  useEffect(() => {
    setContent(ashtangaData[language as keyof typeof ashtangaData]);
    
    const info = getRestDayInfo(language === 'zh' ? 'zh' : 'en');
    setIsRestDay(info.isRestDay);
    setRestDayType(info.type);
  }, [language]);

  // 休息日徽章组件
  const RestDayBadge = () => {
    if (!isRestDay) return null;
    
    const getBadgeText = () => {
      switch(restDayType) {
        case 'saturday':
          return language === 'zh' ? '今日：周六休息' : 'Today: Saturday Rest';
        case 'new_moon':
          return language === 'zh' ? '今日：新月休息' : 'Today: New Moon Rest';
        case 'full_moon':
          return language === 'zh' ? '今日：满月休息' : 'Today: Full Moon Rest';
        default:
          return language === 'zh' ? '今日：休息' : 'Today: Rest Day';
      }
    };
    
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-800 rounded-none">
        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
        <span className="font-normal text-xs text-gray-900 uppercase tracking-wide">
          {getBadgeText()}
        </span>
      </div>
    );
  };

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-lg text-gray-800">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 标题区域 */}
      <div className="w-full bg-white border-b border-gray-200 py-10 md:py-14 pt-16 md:pt-20">
        <div className="w-full max-w-4xl mx-auto px-4 relative">
          
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-light tracking-wider text-gray-900 uppercase mb-3">
              {content.title}
            </h1>
            <div className="w-12 h-0.5 bg-gray-800 mx-auto mb-4"></div>
            <h2 className="text-lg text-gray-700 font-normal mb-6">
              {content.subtitle}
            </h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
              {content.intro}
            </p>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="relative">
        
          {/* 教师介绍 */}
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-gray-300">
                  <img
                    src="/images/studio-eric.jpg"
                    alt={content.teacher?.name || 'Teacher'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <div className="inline-flex items-center gap-3 mb-1">
                    <div className="w-4 h-px bg-gray-800 opacity-30"></div>
                    <h2 className="text-xl font-normal text-gray-900">
                      {content.teacher?.name || (language === 'zh' ? '希波老师' : 'Teacher Eric')}
                    </h2>
                    <div className="w-4 h-px bg-gray-800 opacity-30"></div>
                  </div>
                  <p className="text-gray-800 font-normal text-base uppercase tracking-wide">
                    {language === 'zh'
                      ? '线上阿斯汤加教学者'
                      : 'Online Ashtanga Instructor'
                    }
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                  {language === 'zh'
                    ? '五年专注线上阿斯汤加教学，每日持续Mysore早课。'
                    : 'Five years focused on online Ashtanga teaching, daily continuous Mysore morning classes.'
                  }
                </p>
                <div className="mt-2">
                  <a
                    href="/about"
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 text-sm font-normal border-b border-gray-900 hover:border-gray-700 pb-0.5"
                  >
                    {language === 'zh' ? '了解更多 →' : 'Learn More →'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 课程形式 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.practiceFormatsTitle}
              </h3>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.practiceFormats.map((item: any, index: number) => (
                <div key={index} className="border-l-2 border-gray-800 pl-4 py-1">
                  <div className="text-base font-medium text-gray-900 mb-1">
                    {item.title}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 休息日安排 */}
          <section className="mb-12 md:mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                  {content.restDays.title}
                </h3>
                <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
              </div>
              <RestDayBadge />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {/* 每周休息卡片 */}
              <div className="border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 text-base">
                    {content.restDays.saturday.title}
                  </h4>
                  <span className="px-2 py-1 text-xs text-gray-600 font-normal uppercase tracking-wide">
                    {language === 'zh' ? '休息' : 'Rest'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {content.restDays.saturday.description}
                </p>
              </div>
              
              {/* 新月满月休息卡片 */}
              <div className="border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 text-base">
                    {content.restDays.moonDays.title}
                  </h4>
                  <span className="px-2 py-1 text-xs text-gray-600 font-normal uppercase tracking-wide">
                    {language === 'zh' ? '休息' : 'Rest'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {content.restDays.moonDays.description}
                </p>
                <a
                  href="/moon-calendar"
                  className="inline-flex items-center text-gray-900 hover:text-gray-700 text-xs font-normal border-b border-gray-900 hover:border-gray-700 pb-0.5"
                >
                  {language === 'zh' ? '查看全年月相表 →' : 'View Annual Moon Calendar →'}
                </a>
              </div>
            </div>
            
            {/* 休息日说明 */}
            <div className="text-xs text-gray-600">
              <p>{content.restDays.note}</p>
            </div>
          </section>

          {/* 每周时间表 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.timeTable.title}
              </h3>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            
            <div className="border border-gray-200">
              {content.timeTable.days.map((day: string, index: number) => {
                const isRest = content.timeTable.classes[index] === 'Rest' || content.timeTable.classes[index] === '休息';
                const isSunday = index === 0;
                
                return (
                  <div
                    key={index}
                    className={`flex items-center py-3 px-4 border-b border-gray-100 last:border-0`}
                  >
                    {/* 星期 */}
                    <div className="w-20 font-medium text-gray-900 text-sm">
                      {day}
                    </div>
                    
                    {/* 课程信息 */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className={`text-sm font-medium ${
                            isRest ? 'text-gray-500' : 'text-gray-900'
                          }`}>
                            {content.timeTable.classes[index]}
                          </div>
                          <div className="text-xs text-gray-500">
                            {content.timeTable.times[index]}
                          </div>
                        </div>
                        
                        {/* 状态标签 */}
                        <div>
                          {isRest ? (
                            <span className="px-2 py-1 text-xs text-gray-600 rounded-none border border-gray-300 uppercase tracking-wide">
                              {language === 'zh' ? '休息' : 'Rest'}
                            </span>
                          ) : (
                            <span className="px-2 py-1 text-xs text-gray-900 rounded-none border border-gray-800 uppercase tracking-wide">
                              {language === 'zh' ? '练习' : 'Practice'}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* 周日特别说明 */}
                      {isSunday && (
                        <div className="mt-1 text-xs text-gray-500">
                          {language === 'zh' ? '研习会（不定期）' : 'Workshop (occasional)'}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 课程费用 */}
          <section className="pt-8 border-t border-gray-200">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.pricingTitle}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            
            <div className="space-y-1 mb-6">
              {content.groupPrices.map((price: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="font-medium text-gray-900 text-sm">
                    {price.title}
                  </div>
                  <div className="font-bold text-gray-900 text-base">
                    {price.price}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-xs text-gray-600 space-y-4">
              <p>
                {language === 'zh'
                  ? '所有课程均为收费项目，目前不提供免费体验。'
                  : 'All sessions are paid courses. Free trials are not currently offered.'}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-gray-500 mr-2 mt-0.5">•</span>
                  <a
                    href="/policies/fees"
                    className="text-gray-700 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 pb-0.5"
                  >
                    {language === 'zh' ? '《在线教学服务协议》' : 'Online Teaching Service Agreement'}
                  </a>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-2 mt-0.5">•</span>
                  <a
                    href="/policies/agreement"
                    className="text-gray-700 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 pb-0.5"
                  >
                    {language === 'zh' ? '《阿斯汤加瑜伽在线练习指南》' : 'Ashtanga Yoga Online Practice Guide'}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
