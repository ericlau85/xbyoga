'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../lib/language-context';
import moonData from '../../data/moon-calendar.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function MoonCalendarPage() {
  const { language } = useLanguage();
  const [activeYear, setActiveYear] = useState('2025');
  const [isMobile, setIsMobile] = useState(false);
  
  // 检测是否是移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white safe-top safe-bottom overflow-x-hidden pt-12">
      <Navigation />
      
      {/* 标题部分 */}
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 md:py-10">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-light mb-4 md:mb-4">
            {content.title}
          </h1>
          <p className="text-lg md:text-lg text-red-800 mb-3 md:mb-6">
            {content.subtitle}
          </p>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
            {content.intro}
          </p>
        </div>
      </div>

      {/* 主要内容容器 */}
      <div className="w-full flex justify-center px-4 py-4 md:py-8">
        <div className="w-full max-w-6xl">
          
          {/* 年份切换选项卡 */}
          <div className="mb-6 md:mb-12 flex justify-center space-x-2 md:space-x-4 overflow-x-auto py-2">
            {content.years.map((yearObj) => (
              <button
                key={yearObj.year}
                onClick={() => setActiveYear(yearObj.year)}
                className={`px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-lg border transition-all duration-200 flex-shrink-0 ${activeYear === yearObj.year 
                  ? 'bg-red-800 text-white border-red-800 shadow-sm' 
                  : 'text-gray-700 bg-white border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}
              >
                {yearObj.year}
              </button>
            ))}
          </div>

          {/* 当前年份标题 */}
          <div className="mb-4 md:mb-6 text-center">
            <h2 className="text-xl md:text-2xl font-light text-gray-800">
              {activeYear}
            </h2>
          </div>

          {/* 月相表格 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 md:mb-8 border border-gray-200">
            
            {/* 表头 - 桌面端使用flex布局，移动端保持单列 */}
            {/* 移动端：单列显示 */}
            <div className="md:hidden border-b border-gray-200 bg-gray-50 p-3">
              <div className="font-semibold text-gray-800 text-sm text-center">
                {content.tableHeaders.month} / 🌑 {content.tableHeaders.newMoon.split('(')[0].trim()} / 🌕 {content.tableHeaders.fullMoon.split('(')[0].trim()}
              </div>
            </div>
            
            {/* 桌面端：flex布局，三列等宽 */}
            <div className="hidden md:flex border-b border-gray-200 bg-gray-50">
              {/* 月份列 - 25% */}
              <div className="w-1/4 p-3 text-center font-semibold text-gray-800 text-sm">
                {content.tableHeaders.month}
              </div>
              {/* 新月列 - 37.5% */}
              <div className="w-3/8 p-3 text-center border-l border-gray-200">
                <div className="font-semibold text-gray-800 mb-1 text-sm">
                  🌑 {content.tableHeaders.newMoon.split('(')[0].trim()}
                </div>
                <div className="flex justify-center text-xs text-gray-500 space-x-2">
                  <span>GMT+8</span>
                  <span className="text-gray-400">|</span>
                  <span>UTC</span>
                </div>
              </div>
              {/* 满月列 - 37.5% */}
              <div className="w-3/8 p-3 text-center border-l border-gray-200">
                <div className="font-semibold text-gray-800 mb-1 text-sm">
                  🌕 {content.tableHeaders.fullMoon.split('(')[0].trim()}
                </div>
                <div className="flex justify-center text-xs text-gray-500 space-x-2">
                  <span>GMT+8</span>
                  <span className="text-gray-400">|</span>
                  <span>UTC</span>
                </div>
              </div>
            </div>

            {/* 表格内容 */}
            <div className="divide-y divide-gray-100">
              {yearData.months.map((month, index) => (
                <div key={index} className="hover:bg-gray-50 transition-colors">
                  {/* 移动端：单列显示 */}
                  <div className="md:hidden p-3 border-b border-gray-100 last:border-0">
                    <div className="font-medium text-gray-800 text-sm mb-2">
                      {month.month}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-0.5">
                        <div className="text-xs text-gray-600">🌑 新月</div>
                        <div className="font-medium text-gray-800 text-xs">
                          {month.newMoon.local.split(' ')[0]} {month.newMoon.local.split(' ')[1]}
                          {month.newMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                        </div>
                        <div className="text-xs text-gray-500">
                          {month.newMoon.utc}
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs text-gray-600">🌕 满月</div>
                        {Array.isArray(month.fullMoons) ? (
                          <div className="space-y-1">
                            {month.fullMoons.map((fullMoon, idx) => (
                              <div key={idx}>
                                <div className="font-medium text-gray-800 text-xs">
                                  {fullMoon.local.split(' ')[0]} {fullMoon.local.split(' ')[1]}
                                  {fullMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {fullMoon.utc}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>
                            <div className="font-medium text-gray-800 text-xs">
                              {month.fullMoon.local.split(' ')[0]} {month.fullMoon.local.split(' ')[1]}
                              {month.fullMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                            </div>
                            <div className="text-xs text-gray-500">
                              {month.fullMoon.utc}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* 桌面端：flex布局 */}
                  <div className="hidden md:flex">
                    {/* 月份列 - 25% */}
                    <div className="w-1/4 p-3 flex items-center justify-center border-r border-gray-200">
                      <span className="font-medium text-gray-800 text-base">
                        {month.month}
                      </span>
                    </div>
                    
                    {/* 新月列 - 37.5% */}
                    <div className="w-3/8 p-3 border-r border-gray-200">
                      <div className="text-center space-y-1">
                        <div className="font-medium text-gray-800 text-sm">
                          {month.newMoon.local.split(' ')[0]} {month.newMoon.local.split(' ')[1]}
                          {month.newMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                        </div>
                        <div className="text-xs text-gray-500">
                          {month.newMoon.utc}
                        </div>
                      </div>
                    </div>
                    
                    {/* 满月列 - 37.5% */}
                    <div className="w-3/8 p-3">
                      {Array.isArray(month.fullMoons) ? (
                        <div className="text-center space-y-2">
                          {month.fullMoons.map((fullMoon, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="font-medium text-gray-800 text-sm">
                                {fullMoon.local.split(' ')[0]} {fullMoon.local.split(' ')[1]}
                                {fullMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                              </div>
                              <div className="text-xs text-gray-500">
                                {fullMoon.utc}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center space-y-1">
                          <div className="font-medium text-gray-800 text-sm">
                            {month.fullMoon.local.split(' ')[0]} {month.fullMoon.local.split(' ')[1]}
                            {month.fullMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                          </div>
                          <div className="text-xs text-gray-500">
                            {month.fullMoon.utc}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 图例说明 - 小字号 */}
          <div className="mb-6 md:mb-8 p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700 text-center text-[10px] md:text-xs leading-tight">
              <sup className="text-red-800 mr-0.5 text-[8px]">*</sup>
              {content.legend}
            </p>
          </div>

          {/* 返回按钮 */}
          <div className="flex justify-center pt-4 md:pt-6 border-t border-gray-200">
            <Link
              href="/courses/ashtanga"
              className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-red-800 hover:text-red-900 hover:bg-red-50 rounded-lg transition-colors duration-150"
            >
              <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
