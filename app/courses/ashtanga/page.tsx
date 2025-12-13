'use client';

import { useState, useEffect } from 'react';
import ashtangaData from '../../../data/courses/ashtanga.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Link from 'next/link';
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

  // Helper function to get text content
  const t = (key: string, defaultValue: string = '') => {
    return content[key] || defaultValue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white safe-top safe-bottom pt-12">
      <Navigation />

      {/* Blue title section */}
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 md:py-10">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-light mb-4 md:mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-lg text-red-800 mb-3 md:mb-6">
            {t('subtitle')}
          </p>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
            {t('intro')}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full flex justify-center px-4 py-4 md:py-8">
        <div className="w-full max-w-6xl">
          
          {/* Teacher introduction */}
          <section className="mb-8 md:mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-green-900 shadow-md">
                    <img
                      src="/images/profile.jpg"
                      alt={content.teacher?.name || 'Teacher'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
                  <h3 className="text-lg md:text-lg font-bold text-gray-800 mb-2 md:mb-2">
                    {content.teacher?.name || ''}
                  </h3>
                  <p className="text-red-800 font-medium mb-3 md:mb-4 text-sm md:text-base">
                    {content.teacher?.title || ''}
                  </p>
                  <p className="text-gray-700 leading-snug text-xs md:text-sm">
                    {content.teacher?.intro || ''}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Course features */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
              {t('featuresTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {(content.features || []).map((feature: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-200 border border-gray-100"
                >
                  <div className="text-2xl md:text-3xl text-red-800 mb-3 md:mb-4 flex justify-center">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-3 md:mb-4 text-center px-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-snug text-center px-2 text-xs md:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Practice styles */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
              {t('practiceStylesTitle')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {(content.practiceStyles || []).map((style: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-200">
                  <div className="text-2xl md:text-3xl text-red-800 mb-3 md:mb-4 flex justify-center">
                    <i className={style.icon}></i>
                  </div>
                  <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-1 md:mb-1 text-center">
                    {style.title}
                  </h3>
                  <p className="text-red-800 text-base md:text-base font-medium mb-3 md:mb-4 text-center">
                    {style.subtitle}
                  </p>
                  <ul className="space-y-2 md:space-y-2">
                    {(style.features || []).map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-red-800 rounded-full"></div>
                        </div>
                        <span className="ml-2 text-gray-700 text-sm md:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Schedule */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
              {t('scheduleTitle')}
            </h2>
            <p className="text-gray-600 text-center text-base md:text-base mb-4 md:mb-8 max-w-3xl mx-auto">
              {t('scheduleSubtitle')}
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {/* Schedule items */}
                {(content.scheduleItems || []).map((item: any, index: number) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 md:p-5">
                    <div className="text-2xl md:text-3xl text-red-800 mb-3 md:mb-4 flex justify-center">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-sm text-center mb-3">
                      {item.days}
                    </p>
                    <p className="text-gray-700 text-xs md:text-sm text-center">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timetable */}
          <section className="mb-8 md:mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100">
              <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-4 text-center">
                {t('timetableTitle')}
              </h3>
              
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {(content.timeTable?.days || []).map((day: string, index: number) => (
                    <th key={index} className="py-3 px-2 text-center text-sm font-medium text-gray-700">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* 主课程行 */}
                <tr className="border-b border-gray-100">
                  {(content.timeTable?.days || []).map((day: string, index: number) => {
                    const classType = content.timeTable?.rows[0]?.classes[index] || '';
                    return (
                      <td key={index} className="py-3 px-2 text-center align-top">
                        {/* 课程名称 */}
                        <div className={`font-medium text-sm ${
                          classType === 'Rest' || classType === '休息' 
                            ? 'text-gray-500' 
                            : 'text-gray-800'
                        }`}>
                          {classType.replace('*', '')}
                        </div>
                        
                        {/* 课程时间 */}
                        <div className="text-xs text-gray-500 mt-1">
                          {classType === 'Rest' || classType === '休息' ? '-' : '6:30-8:00'}
                        </div>
                        
                        {/* 周日研习会 - 放在时间下面 */}
                        {index === 0 && (
                          <>
                            <div className="text-xs text-gray-400 font-medium mt-2">
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
            
            {/* 备注显示 - 居左 */}
            {content.timeTable?.note && (
              <div className="mt1 pt-2">
                <p className="text-xs text-gray-400 italic text-center"> {/* 改为text-left */}
                  {content.timeTable.note}
                </p>
              </div>
            )}
            
            {/* Private booking */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex flex-col items-center">
                <div className="text-gray-800 font-medium text-sm">
                  {t('privateBookingTitle')}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {t('privateBookingTime')} {language === 'zh' ? '(灵活预约)' : '(Flexible booking)'}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {(content.timeTable?.days || []).map((day: string, index: number) => {
              const classType = content.timeTable?.rows[0]?.classes[index] || '';
              
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium text-gray-800 text-sm">
                      {day}
                    </div>
                    <div className="flex flex-col items-end">
                      {/* 主课程 */}
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        classType === 'Rest' || classType === '休息' 
                          ? 'bg-gray-100 text-gray-500' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {classType.replace('*', '')}
                      </div>
                    </div>
                  </div>
                  
                  {/* 时间 */}
                  <div className="space-y-1">
                    {/* 主课程时间 */}
                    <div className="text-xs text-gray-600">
                      {classType === 'Rest' || classType === '休息'
                        ? (language === 'zh' ? '休息日' : 'Rest Day')
                        : `${language === 'zh' ? '时间: ' : 'Time: '}6:30-8:00`
                      }
                    </div>
                    
                    {/* 周日研习会 - 小字号 */}
                    {index === 0 && (
                      <div className="space-y-0.5 mt-2">
                        <div className="text-xs text-gray-400 font-medium">
                          {language === 'zh' ? '研习会' : 'Workshop'}
                        </div>
                        <div className="text-xs text-gray-400">
                          {language === 'zh' ? '时间: ' : 'Time: '}8:00-9:00
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* 备注显示 - 移动版也居左 */}
            {content.timeTable?.note && (
              <div className="bg-gray-50 rounded-lg p-1 mt-1">
                <p className="text-xs text-gray-400 italic text-left"> {/* 改为text-left */}
                  {content.timeTable.note}
                </p>
              </div>
            )}
            
            {/* Private booking card */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="font-medium text-gray-800 text-sm">
                {t('privateBookingTitle')}
              </div>
              <div className="text-sm text-gray-600">
                {t('privateBookingTime')} {language === 'zh' ? '(灵活预约)' : '(Flexible booking)'}
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Rest days */}
          <section className="mb-8 md:mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100">
              <div className="flex items-center justify-center text-gray-700">
                <i className="fas fa-moon text-amber-500 mr-2"></i>
                <p className="text-sm md:text-base font-medium">
                  {t('restDays')}
                </p>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
              {t('pricingTitle')}
            </h2>
            <p className="text-gray-600 text-center text-base md:text-base mb-4 md:mb-8 max-w-3xl mx-auto">
              {t('pricingSubtitle')}
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {/* Group classes */}
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-200 border border-gray-100">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-3 md:mb-3">
                    {t('groupTitle')}
                  </h3>
                  <p className="text-gray-600 px-1 text-sm md:text-sm">
                    {t('groupSubtitle')}
                  </p>
                </div>
                
                <div className="space-y-3 md:space-y-6">
                  {(content.groupPrices || []).map((price: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 md:py-4 border-b border-gray-100 last:border-0 px-1"
                    >
                      <div className="flex-1 pr-3">
                        <div className="font-medium text-gray-800 text-base md:text-base mb-1 md:mb-1">
                          {price.title}
                        </div>
                        <div className="text-gray-500 text-xs md:text-xs">
                          {price.description}
                        </div>
                      </div>
                      <div className="text-base md:text-lg font-bold text-red-800 whitespace-nowrap">
                        {price.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Private classes */}
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-200 border border-gray-100">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-3 md:mb-3">
                    {t('privateTitle')}
                  </h3>
                  <p className="text-gray-600 px-1 text-sm md:text-sm">
                    {t('privateSubtitle')}
                  </p>
                </div>
                
                <div className="space-y-3 md:space-y-6">
                  {(content.privatePrices || []).map((price: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 md:py-4 border-b border-gray-100 last:border-0 px-1"
                    >
                      <div className="flex-1 pr-3">
                        <div className="font-medium text-gray-800 text-base md:text-base mb-1 md:mb-1">
                          {price.title}
                        </div>
                        <div className="text-gray-500 text-xs md:text-xs">
                          {price.description}
                        </div>
                      </div>
                      <div className="text-base md:text-lg font-bold text-red-800 whitespace-nowrap">
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
