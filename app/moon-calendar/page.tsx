'use client';

import { useState } from 'react';
import { useLanguage } from '../../lib/language-context';
import moonData from '../../data/moon-calendar.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function MoonCalendarPage() {
  const { language } = useLanguage();
  const [activeYear, setActiveYear] = useState('2026');
  
  const content = moonData[language as keyof typeof moonData];
  if (typeof content === 'string' || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      </div>
    );
  }

  const yearData = content.years.find(year => year.year === activeYear) || content.years[0];

  return (
    <div className="min-h-screen safe-top safe-bottom pt-12">
      <Navigation />
      
      {/* 蓝色标题区域 - 保持原有 */}
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

      {/* 主要内容 - 去掉所有背景色 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
          {/* 年份切换 - 简化风格 */}
          <div className="mb-8 flex justify-center space-x-2 overflow-x-auto py-2">
            {content.years.map((yearObj) => (
              <button
                key={yearObj.year}
                onClick={() => setActiveYear(yearObj.year)}
                className={`px-4 py-1.5 text-sm font-medium border-b-2 transition-all duration-200 flex-shrink-0 ${activeYear === yearObj.year 
                  ? 'border-red-800 text-red-800' 
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}`}
              >
                {yearObj.year}
              </button>
            ))}
          </div>

        {/* 年份标题 */}
        <div className="mb-4 md:mb-6 text-center">
          <h2 className="text-base md:text-lg text-gray-800">
          {language === 'zh' ? '新满月表' : 'Moon Phase Table'}
          </h2>
        </div>

        {/* 月相表格 - 简化边框，去掉背景 */}
        <div className="mb-6 md:mb-8">
          
          {/* 桌面端表头 - 简化 */}
          <div className="hidden md:flex border-b border-gray-300">
            <div className="w-1/5 p-3 text-center font-medium text-gray-800 text-sm">
              {content.tableHeaders.month}
            </div>
            <div className="w-2/5 p-3 text-center border-l border-gray-200">
              <div className="font-medium text-gray-800 mb-1 text-sm">
                🌑 {content.tableHeaders.newMoon.split('(')[0].trim()}
              </div>
              <div className="text-xs text-gray-500">
                GMT+8 / UTC
              </div>
            </div>
            <div className="w-2/5 p-3 text-center border-l border-gray-200">
              <div className="font-medium text-gray-800 mb-1 text-sm">
                🌕 {content.tableHeaders.fullMoon.split('(')[0].trim()}
              </div>
              <div className="text-xs text-gray-500">
                GMT+8 / UTC
              </div>
            </div>
          </div>
          
          {/* 移动端表头 - 简化 */}
          <div className="md:hidden border-b border-gray-300 p-2">
            <div className="flex items-center justify-between">
              <div className="w-[8%] text-center">
                <span className="font-medium text-gray-800 text-xs">
                  {content.tableHeaders.month}
                </span>
              </div>
              <div className="w-[46%] text-center">
                <span className="font-medium text-gray-800 text-xs">
                  🌑 {content.tableHeaders.newMoon.split('(')[0].trim()}
                </span>
              </div>
              <div className="w-[46%] text-center">
                <span className="font-medium text-gray-800 text-xs">
                  🌕 {content.tableHeaders.fullMoon.split('(')[0].trim()}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="w-[8%] text-center">
                <span className="text-[9px] text-gray-500">&nbsp;</span>
              </div>
              <div className="w-[46%] text-center">
                <span className="text-[9px] text-gray-500">GMT+8 / UTC</span>
              </div>
              <div className="w-[46%] text-center">
                <span className="text-[9px] text-gray-500">GMT+8 / UTC</span>
              </div>
            </div>
          </div>

          {/* 表格内容 */}
          <div className="divide-y divide-gray-100">
            {yearData.months.map((month, index) => (
              <div key={index} className="hover:bg-gray-50 transition-colors">
                
                {/* 移动端布局 */}
                <div className="md:hidden p-2 border-b border-gray-100 last:border-0">
                  <div className="flex items-center justify-between">
                    <div className="w-[8%] text-center">
                      <span className="font-medium text-gray-800 text-xs">
                        {month.month}
                      </span>
                    </div>
                    
                    {/* 新月部分 - 添加 newMoons 数组检查 */}
                    <div className="w-[46%] text-center">
                      {Array.isArray(month.newMoons) ? (
                        <div>
                          <div className="flex justify-between mb-1">
                            {month.newMoons.map((newMoon, idx) => (
                              <div key={idx} className="w-1/2 px-1">
                                <div className="font-medium text-gray-800 text-xs">
                                  {newMoon.local.split(' ')[0]} {newMoon.local.split(' ')[1]}
                                  {newMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between">
                            {month.newMoons.map((newMoon, idx) => (
                              <div key={idx} className="w-1/2 px-1">
                                <div className="text-[10px] text-gray-500">
                                  {newMoon.utc}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="font-medium text-gray-800 text-xs mb-1">
                            {month.newMoon.local.split(' ')[0]} {month.newMoon.local.split(' ')[1]}
                            {month.newMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                          </div>
                          <div className="text-[10px] text-gray-500">
                            {month.newMoon.utc}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* 满月部分 - 保持不变 */}
                    <div className="w-[46%] text-center">
                      {Array.isArray(month.fullMoons) ? (
                        <div>
                          <div className="flex justify-between mb-1">
                            {month.fullMoons.map((fullMoon, idx) => (
                              <div key={idx} className="w-1/2 px-1">
                                <div className="font-medium text-gray-800 text-xs">
                                  {fullMoon.local.split(' ')[0]} {fullMoon.local.split(' ')[1]}
                                  {fullMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between">
                            {month.fullMoons.map((fullMoon, idx) => (
                              <div key={idx} className="w-1/2 px-1">
                                <div className="text-[10px] text-gray-500">
                                  {fullMoon.utc}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="font-medium text-gray-800 text-xs mb-1">
                            {month.fullMoon.local.split(' ')[0]} {month.fullMoon.local.split(' ')[1]}
                            {month.fullMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[8px]">*</sup>}
                          </div>
                          <div className="text-[10px] text-gray-500">
                            {month.fullMoon.utc}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* 桌面端布局 */}
                <div className="hidden md:flex">
                  <div className="w-1/5 p-3 text-center border-r border-gray-200">
                    <span className="font-medium text-gray-800 text-sm">
                      {month.month}
                    </span>
                  </div>
                  
                  {/* 新月部分 - 添加 newMoons 数组检查 */}
                  <div className="w-2/5 p-3 text-center border-r border-gray-200">
                    {Array.isArray(month.newMoons) ? (
                      <div>
                        <div className="flex justify-center space-x-4 mb-1">
                          {month.newMoons.map((newMoon, idx) => (
                            <div key={idx}>
                              <div className="font-medium text-gray-800 text-sm">
                                {newMoon.local.split(' ')[0]} {newMoon.local.split(' ')[1]}
                                {newMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[10px]">*</sup>}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center space-x-4">
                          {month.newMoons.map((newMoon, idx) => (
                            <div key={idx}>
                              <div className="text-xs text-gray-500">
                                {newMoon.utc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="font-medium text-gray-800 text-sm mb-1">
                          {month.newMoon.local.split(' ')[0]} {month.newMoon.local.split(' ')[1]}
                          {month.newMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[10px]">*</sup>}
                        </div>
                        <div className="text-xs text-gray-500">
                          {month.newMoon.utc}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* 满月部分 - 保持不变 */}
                  <div className="w-2/5 p-3 text-center">
                    {Array.isArray(month.fullMoons) ? (
                      <div>
                        <div className="flex justify-center space-x-4 mb-1">
                          {month.fullMoons.map((fullMoon, idx) => (
                            <div key={idx}>
                              <div className="font-medium text-gray-800 text-sm">
                                {fullMoon.local.split(' ')[0]} {fullMoon.local.split(' ')[1]}
                                {fullMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[10px]">*</sup>}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center space-x-4">
                          {month.fullMoons.map((fullMoon, idx) => (
                            <div key={idx}>
                              <div className="text-xs text-gray-500">
                                {fullMoon.utc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="font-medium text-gray-800 text-sm mb-1">
                          {month.fullMoon.local.split(' ')[0]} {month.fullMoon.local.split(' ')[1]}
                          {month.fullMoon.nextDay && <sup className="text-red-800 ml-0.5 text-[10px]">*</sup>}
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

        {/* 图例说明 */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-gray-500 text-[9px] sm:text-[10px] text-center leading-tight">
            <sup className="text-red-800 mr-0.5 text-[8px] sm:text-[9px]">*</sup>
            {content.legend}
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
