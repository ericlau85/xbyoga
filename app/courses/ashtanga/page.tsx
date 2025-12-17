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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white safe-top safe-bottom pt-12">
      <Navigation />

      {/* 蓝色标题区域 */}
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 md:py-10">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-light mb-3 md:mb-4 text-center px-2">
            {t('title')}
          </h1>
          <h2 className="text-lg md:text-lg text-gray-200 font-medium mb-3 md:mb-6 text-center px-2">
            {t('subtitle')}
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
            {t('intro')}
          </p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="w-full flex justify-center px-4 py-4 md:py-8">
        <div className="w-full max-w-6xl">
          
          {/* 教师介绍 */}
          <section className="mb-6 md:mb-12">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-green-900">
                  <img
                    src="/images/profile.jpg"
                    alt={content.teacher?.name || 'Teacher'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
                <div className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-2">
                  {content.teacher?.name || ''}
                </div>
                <p className="text-red-800 font-medium mb-2 md:mb-4 text-sm md:text-base">
                  {content.teacher?.title || ''}
                </p>
                <p className="text-gray-700 leading-snug text-xs md:text-sm">
                  {content.teacher?.intro || ''}
                </p>
              </div>
            </div>
          </section>

          {/* 课程特色 */}
          <section className="mb-6 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-4 md:mb-8 font-medium">
              {t('featuresTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {(content.features || []).map((feature: any, index: number) => (
                <div
                  key={index}
                  className="p-4 md:p-6 text-center"
                >
                  <div className="text-2xl md:text-3xl text-red-800 mb-2 md:mb-4">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-4 px-2">
                    {feature.title}
                  </div>
                  <p className="text-gray-600 leading-snug px-2 text-xs md:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          
          {/* 练习形式 */}
          <section className="mb-6 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-4 md:mb-8 font-medium">
              {t('practiceFormatsTitle')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {(content.practiceFormats || []).map((style: any, index: number) => (
                <div key={index} className="p-4 md:p-6">
                  <div className="text-2xl md:text-3xl text-red-800 mb-2 md:mb-4">
                    <i className={style.icon}></i>
                  </div>
                  <div className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                    {style.title}
                  </div>
                  <p className="text-red-800 text-base md:text-base font-medium mb-2">
                    {style.subtitle}
                  </p>
                  <ul className="space-y-1">
                    {(style.features || []).map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5 mr-2">
                          <div className="w-1.5 h-1.5 bg-red-800 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 课程安排 - 去掉边框线 */}
          <section className="mb-6 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-4 md:mb-8 font-medium">
              {t('scheduleTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {(content.scheduleItems || []).map((item: any, index: number) => (
                <div key={index} className="p-3 md:p-5 text-center">
                  <div className="text-2xl md:text-3xl text-red-800 mb-2 md:mb-3">
                    <i className={item.icon}></i>
                  </div>
                  <div className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm mb-1">
                    {item.days}
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 时间表 - 减少横线 */}
          <section className="mb-6 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-4 md:mb-8 font-medium">
              {t('timetableTitle')}
            </h2>
            
            {/* 桌面表格 */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    {(content.timeTable?.days || []).map((day: string, index: number) => (
                      <th key={index} className="py-2 px-2 text-center text-sm font-medium text-gray-700">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    {(content.timeTable?.days || []).map((day: string, index: number) => {
                      const classType = content.timeTable?.rows[0]?.classes[index] || '';
                      return (
                        <td key={index} className="py-2 px-2 text-center align-top">
                          <div className={`font-medium text-sm ${
                            classType === 'Rest' || classType === '休息' 
                              ? 'text-gray-500' 
                              : 'text-gray-800'
                          }`}>
                            {classType.replace('*', '')}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {classType === 'Rest' || classType === '休息' ? '-' : '6:30-8:00'}
                          </div>
                          {index === 0 && (
                            <>
                              <div className="text-xs text-gray-400 font-medium mt-1">
                                {language === 'zh' ? '研习会' : 'Workshop'}
                              </div>
                              <div className="text-xs text-gray-400 mt-0.5">
                                8:00-9:00
                              </div>
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
              
              {content.timeTable?.note && (
                <div className="mt-1 pt-2">
                  <p className="text-xs text-gray-400 italic text-center">
                    {content.timeTable.note}
                  </p>
                </div>
              )}
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col items-center">
                  <div className="text-gray-800 font-medium text-sm">
                    {content.timeTable?.privateBooking}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {content.timeTable?.privateTime}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 移动版 - 减少横线 */}
            <div className="md:hidden">
              <div className="space-y-0">
                {(content.timeTable?.days || []).map((day: string, index: number) => {
                  const classType = content.timeTable?.rows[0]?.classes[index] || '';
                  const isRest = classType === 'Rest' || classType === '休息';
                  const isSunday = index === 0;
                  
                  return (
                    <div key={index} className="py-2">
                      {/* 主行：日期和时间靠近，课程类型居右 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-gray-800 text-xs">
                            {day}
                          </div>
                          {!isRest && (
                            <span className="text-gray-600 text-xs">6:30-8:00</span>
                          )}
                        </div>
                        <div>
                          <span className={`text-xs ${
                            isRest 
                              ? 'text-gray-500' 
                              : 'text-gray-700'
                          }`}>
                            {classType.replace('*', '')}
                          </span>
                        </div>
                      </div>
                      
                      {/* 周日研习会：时间在左，文字在右 */}
                      {isSunday && (
                        <div className="mt-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">8:00-9:00</span>
                            <span className="text-xs text-gray-500">
                              {language === 'zh' ? '研习会' : 'Workshop'}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* 备注 */}
              {content.timeTable?.note && (
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-400 italic text-left">
                    {content.timeTable.note}
                  </p>
                </div>
              )}
              
              {/* 私教课程 */}
              <div className="mt-3 pt-2 border-t border-gray-100">
                <div className="text-xs font-medium text-gray-800">
                  {content.timeTable?.privateBooking}
                </div>
                <div className="text-xs text-gray-600 mt-0.5">
                  {content.timeTable?.privateTime}
                </div>
              </div>
            </div>
          </section>

          {/* 休息日 */}
          <section className="mb-6 md:mb-12">
            <div className="flex items-center justify-center text-gray-700 py-2">
              <i className="fas fa-moon text-amber-500 mr-2 text-xs"></i>
              <p className="text-xs font-medium">
                {content.timeTable?.restDays}
              </p>
            </div>
          </section>

          {/* 价格 - 减少横线 */}
          <section className="mb-6 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-4 md:mb-8 font-medium">
              {t('pricingTitle')}
            </h2>
            <p className="text-gray-600 text-center text-sm md:text-base mb-3 md:mb-8 max-w-3xl mx-auto">
              {t('pricingSubtitle')}
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {/* 团体课程 */}
              <div className="p-4 md:p-6">
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {t('groupTitle')}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {t('groupSubtitle')}
                  </p>
                </div>
                
                <div className="space-y-1">
                  {(content.groupPrices || []).map((price: any, index: number) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-2 ${index < content.groupPrices.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="flex-1 pr-3">
                        <div className="font-medium text-gray-800 text-sm md:text-base">
                          {price.title}
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5">
                          {price.description}
                        </div>
                      </div>
                      <div className="text-sm md:text-base font-bold text-red-800 whitespace-nowrap">
                        {price.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 私教课程 */}
              <div className="p-4 md:p-6">
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {t('privateTitle')}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {t('privateSubtitle')}
                  </p>
                </div>
                
                <div className="space-y-1">
                  {(content.privatePrices || []).map((price: any, index: number) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-2 ${index < content.privatePrices.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="flex-1 pr-3">
                        <div className="font-medium text-gray-800 text-sm md:text-base">
                          {price.title}
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5">
                          {price.description}
                        </div>
                      </div>
                      <div className="text-sm md:text-base font-bold text-red-800 whitespace-nowrap">
                        {price.price}
                      </div>
                    </div>
                  ))}
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
