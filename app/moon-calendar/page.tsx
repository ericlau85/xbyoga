'use client';

import { useState } from 'react';
import { useLanguage } from '../../lib/language-context';
import moonData from '../../data/moon-calendar.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function MoonCalendarPage() {
  const { language } = useLanguage();
  const [activeYear, setActiveYear] = useState('2025');
  
  const content = moonData[language as keyof typeof moonData];
  if (typeof content === 'string' || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">加载中...</div>
      </div>
    );
  }

  // 获取当前年份的数据
  const yearData = content.years.find(year => year.year === activeYear) || content.years[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white safe-top safe-bottom overflow-x-hidden">
      <Navigation />
      
      {/* 标题部分 */}
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-16">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-light mb-6 md:mb-6">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-red-300 mb-4 md:mb-8">
            {content.subtitle}
          </p>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
            {content.intro}
          </p>
        </div>
      </div>

      {/* 主要内容容器 */}
      <div className="w-full flex justify-center px-4 py-6 md:py-12">
        <div className="w-full max-w-6xl">
          
          {/* 年份切换选项卡 */}
          <div className="mb-8 md:mb-16 flex justify-center space-x-4 md:space-x-6 overflow-x-auto py-2">
            {content.years.map((yearObj) => (
              <button
                key={yearObj.year}
                onClick={() => setActiveYear(yearObj.year)}
                className={`px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium rounded-lg border transition-all duration-200 flex-shrink-0 ${activeYear === yearObj.year 
                  ? 'bg-red-800 text-white border-red-800 shadow-md' 
                  : 'text-gray-700 bg-white border-gray-300 hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm'}`}
              >
                {yearObj.year}
              </button>
            ))}
          </div>

          {/* 当前年份标题 */}
          <div className="mb-8 md:mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800">
              {activeYear}
            </h2>
          </div>

          {/* 月相表格 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 md:mb-12 border border-gray-100">
            
            {/* 表头 */}
            <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50">
              <div className="p-3 md:p-4 text-center font-semibold text-gray-800 text-sm md:text-base">
                {content.tableHeaders.month}
              </div>
              <div className="p-3 md:p-4 text-center border-l border-gray-200">
                <div className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                  🌑 {content.tableHeaders.newMoon.split('(')[0].trim()}
                </div>
                <div className="flex justify-center text-xs md:text-xs text-gray-600 space-x-2 md:space-x-4">
                  <span>GMT+8</span>
                  <span className="text-gray-400">|</span>
                  <span>UTC</span>
                </div>
              </div>
              <div className="p-3 md:p-4 text-center border-l border-gray-200">
                <div className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                  🌕 {content.tableHeaders.fullMoon.split('(')[0].trim()}
                </div>
                <div className="flex justify-center text-xs md:text-xs text-gray-600 space-x-2 md:space-x-4">
                  <span>GMT+8</span>
                  <span className="text-gray-400">|</span>
                  <span>UTC</span>
                </div>
              </div>
            </div>

            {/* 表格内容 */}
            <div className="divide-y divide-gray-100">
              {yearData.months.map((month, index) => (
                <div key={index} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                  {/* 月份 */}
                  <div className="p-3 md:p-4 flex items-center justify-center">
                    <span className="font-medium text-gray-800 text-base md:text-lg">
                      {month.month}
                    </span>
                  </div>
                  
                  {/* 新月 */}
                  <div className="p-3 md:p-4 border-l border-gray-200">
                    <div className="text-center space-y-1">
                      <div className="font-medium text-gray-800 text-sm md:text-base">
                        {month.newMoon.local.split(' ')[0]} {month.newMoon.local.split(' ')[1]}
                        {month.newMoon.nextDay && <sup className="text-red-800 ml-0.5">*</sup>}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500">
                        {month.newMoon.utc}
                      </div>
                    </div>
                  </div>
                  
                  {/* 满月 */}
                  <div className="p-3 md:p-4 border-l border-gray-200">
                    {Array.isArray(month.fullMoons) ? (
                      <div className="space-y-2 md:space-y-3">
                        {month.fullMoons.map((fullMoon, idx) => (
                          <div key={idx} className="text-center space-y-1">
                            <div className="font-medium text-gray-800 text-sm md:text-base">
                              {fullMoon.local.split(' ')[0]} {fullMoon.local.split(' ')[1]}
                              {fullMoon.nextDay && <sup className="text-red-800 ml-0.5">*</sup>}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500">
                              {fullMoon.utc}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center space-y-1">
                        <div className="font-medium text-gray-800 text-sm md:text-base">
                          {month.fullMoon.local.split(' ')[0]} {month.fullMoon.local.split(' ')[1]}
                          {month.fullMoon.nextDay && <sup className="text-red-800 ml-0.5">*</sup>}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500">
                          {month.fullMoon.utc}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 图例说明 */}
          <div className="mb-8 md:mb-12 p-4 md:p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
            <p className="text-gray-700 text-center text-sm md:text-base">
              <sup className="text-red-800 mr-1">*</sup>
              {content.legend}
            </p>
          </div>

          {/* 返回按钮 */}
          <div className="flex justify-center pt-6 md:pt-8 border-t border-gray-200">
            <Link
              href="/courses/ashtanga"
              className="inline-flex items-center px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base font-medium text-red-800 hover:text-red-900 hover:bg-red-50 rounded-lg transition-colors duration-150"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {language === 'en' ? 'Back to Ashtanga' : '返回阿斯汤加课程'}
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
