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
  const [showWechat, setShowWechat] = useState(false);

  useEffect(() => {
    setContent(ashtangaData[language as keyof typeof ashtangaData]);
  }, [language]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white safe-top safe-bottom pt-12">
      <Navigation />

      {/* 蓝色标题区域 */}
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

      {/* 主要内容 */}
      <div className="w-full flex justify-center px-4 py-4 md:py-8">
        <div className="w-full max-w-6xl">
          
          {/* 教师介绍 */}
          <section className="mb-8 md:mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-green-900 shadow-md">
                    <img
                      src="/images/profile.jpg"
                      alt={content.teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
                  <h3 className="text-lg md:text-lg font-bold text-gray-800 mb-2 md:mb-2">
                    {content.teacher.name}
                  </h3>
                  <p className="text-red-800 font-medium mb-3 md:mb-4 text-sm md:text-base">
                    {content.teacher.title}
                  </p>
                  <p className="text-gray-700 leading-snug text-xs md:text-sm">
                    {content.teacher.intro}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 课程特色 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
              {language === 'zh' ? '课程特色' : 'Teaching Features'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {content.features.map((feature: any, index: number) => (
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
          
          {/* 练习方式 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
              {language === 'zh' ? '练习方式' : 'Practice Styles'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {content.practiceStyles.map((style: any, index: number) => (
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
                    {style.features.map((feature: string, featureIndex: number) => (
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

          {/* 课程安排 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
              {content.scheduleTitle}
            </h2>
            <p className="text-gray-600 text-center text-base md:text-base mb-4 md:mb-8 max-w-3xl mx-auto">
              {content.scheduleSubtitle}
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {/* Mysore */}
                <div className="bg-gray-50 rounded-lg p-4 md:p-5">
                  <div className="text-2xl md:text-3xl text-red-800 mb-3 md:mb-4 flex justify-center">
                    <i className="fas fa-user-clock"></i>
                  </div>
                  <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-2 text-center">
                    Mysore
                  </h3>
                  <p className="text-gray-600 text-sm md:text-sm text-center mb-3">
                    {language === 'zh' ? '周日至周四' : 'Sun - Thu'}
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm text-center">
                    {language === 'zh' ? '自主练习时间' : 'Self-Practice Time'}
                  </p>
                </div>
                
                {/* 领课 */}
                <div className="bg-gray-50 rounded-lg p-4 md:p-5">
                  <div className="text-2xl md:text-3xl text-red-800 mb-3 md:mb-4 flex justify-center">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-2 text-center">
                    {language === 'zh' ? '领课' : 'Led Class'}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-sm text-center mb-3">
                    {language === 'zh' ? '每周五' : 'Every Friday'}
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm text-center">
                    {language === 'zh' ? '统一口令引导' : 'Guided Practice'}
                  </p>
                </div>
                
                {/* 研习会 */}
                <div className="bg-gray-50 rounded-lg p-4 md:p-5">
                  <div className="text-2xl md:text-3xl text-red-800 mb-3 md:mb-4 flex justify-center">
                    <i className="fas fa-chalkboard-teacher"></i>
                  </div>
                  <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-2 text-center">
                    {language === 'zh' ? '研习会' : 'Workshop'}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-sm text-center mb-3">
                    {language === 'zh' ? '周日不定期' : 'Occasional Sunday'}
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm text-center">
                    {language === 'zh' ? '理论 · 答疑 · 深化理解' : 'Theory · Q&A · Deepening'}
                  </p>
                </div>
                
                {/* 私教 */}
                <div className="bg-gray-50 rounded-lg p-4 md:p-5">
                  <div className="text-2xl md:text-3xl text-red-800 mb-3 md:mb-4 flex justify-center">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                  <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-2 text-center">
                    {language === 'zh' ? '私教' : 'Private'}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-sm text-center mb-3">
                    {language === 'zh' ? '灵活预约' : 'Flexible Booking'}
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm text-center">
                    {language === 'zh' ? '专属定制时间' : 'Personalized Time'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 课程表 - 已修复移动端滑动问题和cls变量错误 */}
          <section className="mb-8 md:mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100">
              <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-4 text-center">
                {language === 'zh' ? '课程表' : 'Class Schedule'}
              </h3>
              
              {/* 桌面端：保持原来的表格 */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      {content.timeTable.days.map((day: string, index: number) => (
                        <th key={index} className="py-3 px-2 text-center text-sm font-medium text-gray-700">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* 第一行：课程名称 */}
                    <tr className="border-b border-gray-100">
                      {content.timeTable.rows[0].classes.map((cls: string, colIndex: number) => (
                        <td key={colIndex} className="py-3 px-2 text-center">
                          <div className={`font-medium text-sm ${
                            cls === 'Mysore' || cls === '领课' ? 'text-gray-800' :
                            cls === 'Led Class' ? 'text-gray-800' :
                            cls === 'Rest' || cls === '休息' ? 'text-gray-500' :
                            cls === 'Workshop*' || cls === '研习会*' || classType === 'Workshop' || classType === '研习会' ? 'text-amber-700' :
                            'text-gray-800'
                          }`}>
                            {cls.replace('*', '')}
                          </div>
                        </td>
                      ))}
                    </tr>
                    
                    {/* 第二行：时间段 */}
                    <tr className="border-b border-gray-100">
                      {content.timeTable.days.map((day: string, index: number) => {
                        let timeText = '';
                        const classType = content.timeTable.rows[0].classes[index];
                        
                        if (classType === 'Mysore' || classType === '领课') {
                          timeText = '6:30-8:00';
                        } else if (classType === 'Led Class' || classType === '领课') {
                          timeText = '6:30';
                        } else if (classType === 'Workshop*' || classType === '研习会*' || classType === 'Workshop' || classType === '研习会') {
                          // 修复这里：把 cls 改为 classType
                          timeText = '8:00-9:00';
                        } else if (classType === 'Rest' || classType === '休息') {
                          timeText = '-';
                        } else {
                          timeText = '9:00-20:00';
                        }
                        
                        return (
                          <td key={index} className="py-2 px-2 text-center">
                            <div className="text-xs text-gray-500">
                              {timeText}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                    
                    {/* 第三行：私教预约合并 */}
                    <tr>
                      <td colSpan={7} className="py-3 px-2 text-center border-t border-gray-100">
                        <div className="text-gray-800 font-medium text-sm">
                          {language === 'zh' ? '私教预约' : 'Private Booking'}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          9:00-20:00
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* 移动端：改为垂直列表式卡片（修复滑动问题） */}
              <div className="md:hidden space-y-3">
                {content.timeTable.days.map((day: string, index: number) => {
                  const classType = content.timeTable.rows[0].classes[index];
                  let timeText = '';
                  
                  if (classType === 'Mysore' || classType === '领课') {
                    timeText = '6:30-8:00';
                  } else if (classType === 'Led Class' || classType === '领课') {
                    timeText = '6:30';
                  } else if (classType === 'Workshop*' || classType === '研习会*' || classType === 'Workshop' || classType === '研习会') {
                    timeText = '8:00-9:00';
                  } else if (classType === 'Rest' || classType === '休息') {
                    timeText = '-';
                  } else {
                    timeText = '9:00-20:00';
                  }
                  
                  // 过滤掉私教预约（单独显示）和休息日
                  if (classType === 'Private Booking' || classType === '私教预约') return null;
                  
                  return (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-800 text-sm">
                          {day}
                        </div>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            classType === 'Rest' || classType === '休息' ? 'bg-gray-100 text-gray-500' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                          {classType.replace('*', '')}
                        </div>
                      </div>
                          <div className="mt-1 text-xs text-gray-600">
                            {timeText !== '-' ? `${language === 'zh' ? '时间: ' : 'Time: '}${timeText}` : language === 'zh' ? '休息日' : 'Rest Day'}
                          </div>
                    </div>
                  );
                })}
                
                {/* 私教预约单独卡片 */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-800 text-sm">
                    {language === 'zh' ? '私教预约' : 'Private Booking'}
                  </div>
          <div className="text-sm text-gray-600">
            {language === 'zh' ? '时间: ' : 'Time: '}9:00-20:00 {language === 'zh' ? '(灵活预约)' : '(Flexible appointment)'}
          </div>
                </div>
              </div>
            </div>
          </section>

          {/* 休息日 */}
          <section className="mb-8 md:mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100 text-center">
              <p className="text-gray-700 font-medium text-base md:text-base">
                {content.restDays}
              </p>
              <Link
                href="/moon-calendar"
                className="text-red-800 hover:text-red-900 underline underline-offset-2 transition-colors text-sm md:text-sm mt-2 inline-block"
              >
                {language === 'zh' ? '查看月相表' : 'View Moon Calendar'}
              </Link>
            </div>
          </section>

          {/* 价格表 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
              {content.pricingTitle}
            </h2>
            <p className="text-gray-600 text-center text-base md:text-base mb-4 md:mb-8 max-w-3xl mx-auto">
              {content.pricingSubtitle}
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {/* 团体课 */}
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-200 border border-gray-100">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-3 md:mb-3">
                    {content.groupTitle}
                  </h3>
                  <p className="text-gray-600 px-1 text-sm md:text-sm">
                    {content.groupSubtitle}
                  </p>
                </div>
                
                <div className="space-y-3 md:space-y-6">
                  {content.groupPrices.map((price: any, index: number) => (
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
              
              {/* 私教课 */}
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-200 border border-gray-100">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-3 md:mb-3">
                    {content.privateTitle}
                  </h3>
                  <p className="text-gray-600 px-1 text-sm md:text-sm">
                    {content.privateSubtitle}
                  </p>
                </div>
                
                <div className="space-y-3 md:space-y-6">
                  {content.privatePrices.map((price: any, index: number) => (
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
          
      {/* 页脚 */}
      <Footer />

      {/* 微信弹窗 */}
      {showWechat && (
        <div
          className="wechat-modal active"
          onClick={() => setShowWechat(false)}
        >
          <div
            className="wechat-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="wechat-close"
              onClick={() => setShowWechat(false)}
            >
              &times;
            </button>
            <h3 className="text-lg md:text-lg font-bold text-gray-800 mb-1.5">
              {language === 'en' ? 'Add WeChat' : '添加微信'}
            </h3>
            <p className="text-gray-600 mb-3 text-sm md:text-sm">
              {language === 'en' ? 'Scan QR code to contact me' : '扫描二维码联系我'}
            </p>
            <img
              src="/images/wechat-qr.jpg"
              alt="WeChat QR Code"
              className="wechat-image"
            />
            <p className="wechat-username">
              WeChat ID: xbyogi
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
