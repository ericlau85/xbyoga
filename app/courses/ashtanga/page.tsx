'use client';

import { useState, useEffect } from 'react';
import ashtangaData from '../../../data/courses/ashtanga.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Link from 'next/link';
import { useLanguage } from '../../../lib/language-context';

export default function AshtangaPage() {
  const { language } = useLanguage(); // 删除了 toggleLanguage
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

      {/* 蓝色区域 */}
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-16">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-light mb-6 md:mb-6 text-center">
            {content.title}
          </h1>
          <p className="text-xl md:text-xl text-red-800 mb-4 md:mb-8 text-center">
            {content.subtitle}
          </p>
          <p className="text-gray-300 text-lg md:text-lg max-w-2xl text-center mx-auto px-4">
            {content.intro}
          </p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="w-full flex justify-center px-4 py-6 md:py-12">
        <div className="w-full max-w-6xl">
          {/* 课程特色 */}
          <section className="mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl text-center text-gray-800 mb-8 md:mb-16 font-medium">
              {content.whyTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {content.features.map((feature: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 md:p-10 hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-3xl md:text-4xl text-red-800 mb-4 md:mb-8 flex justify-center">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-xl md:text-xl font-semibold text-gray-800 mb-4 md:mb-6 text-center px-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center px-2 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          
          {/* 练习方式 */}
          <section className="mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl text-center text-gray-800 mb-8 md:mb-16 font-medium">
              {content.practiceTitle}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {content.practiceStyles.map((style: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-10 hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl md:text-4xl text-red-800 mb-4 md:mb-6 flex justify-center">
                    <i className={style.icon}></i>
                  </div>
                  <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-2 text-center">
                    {style.title}
                  </h3>
                  <p className="text-red-800 text-lg md:text-lg font-medium mb-4 md:mb-6 text-center">
                    {style.subtitle}
                  </p>
                  <ul className="space-y-3 md:space-y-4">
                    {style.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                        </div>
                        <span className="ml-3 text-gray-700 text-base md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 课程安排 */}
          <section className="mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl text-center text-gray-800 mb-8 md:mb-16 font-medium">
              {content.scheduleTitle}
            </h2>
            <p className="text-gray-600 text-center text-lg md:text-lg mb-6 md:mb-12 max-w-3xl mx-auto">
              {content.scheduleSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {content.scheduleItems.map((item: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-5 md:p-8 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-2xl md:text-3xl text-red-800 mb-3 md:mb-4">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-xl md:text-xl font-semibold text-gray-800 mb-2 md:mb-2">
                    {item.title}
                  </h4>
                  <div className="text-red-800 font-medium mb-2 md:mb-3 text-base md:text-base">{item.time}</div>
                  <p className="text-gray-600 text-base md:text-base">{item.description}</p>
                </div>
              ))}
            </div>
            {/* 休息日信息 */}
            <div className="mt-6 md:mt-12 text-center">
              <p className="text-gray-700 font-medium text-base md:text-base">
                休息日：每周六 & <Link href="/moon-calendar" className="text-red-800 hover:text-red-900 underline underline-offset-2 transition-colors">新月/满月日
              </Link>
            </p>
          </div>
        </section>

          {/* 价格表 */}
          <section className="mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl text-center text-gray-800 mb-8 md:mb-16 font-medium">
              {content.pricingTitle}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
              {/* 团体课 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 hover:shadow-xl transition-all duration-300">
                <div className="mb-8 md:mb-10">
                  <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-4">
                    {content.groupTitle}
                  </h3>
                  <p className="text-gray-600 px-1 text-base md:text-base">
                    {content.groupSubtitle}
                  </p>
                </div>
                
                <div className="space-y-4 md:space-y-8">
                  {content.groupPrices.map((price: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 md:py-6 border-b border-gray-100 last:border-0 px-2"
                    >
                      <div className="flex-1 pr-4">
                        <div className="font-medium text-gray-800 text-lg md:text-lg mb-2 md:mb-2">
                          {price.title}
                        </div>
                        <div className="text-gray-500 text-sm md:text-sm">
                          {price.description}
                        </div>
                      </div>
                      <div className="text-2xl md:text-2xl font-bold text-red-800 whitespace-nowrap">
                        {price.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 私教课 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 hover:shadow-xl transition-all duration-300">
                <div className="mb-8 md:mb-10">
                  <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-4">
                    {content.privateTitle}
                  </h3>
                  <p className="text-gray-600 px-1 text-base md:text-base">
                    {content.privateSubtitle}
                  </p>
                </div>
                
                <div className="space-y-4 md:space-y-8">
                  {content.privatePrices.map((price: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 md:py-6 border-b border-gray-100 last:border-0 px-2"
                    >
                      <div className="flex-1 pr-4">
                        <div className="font-medium text-gray-800 text-lg md:text-lg mb-2 md:mb-2">
                          {price.title}
                        </div>
                        <div className="text-gray-500 text-sm md:text-sm">
                          {price.description}
                        </div>
                      </div>
                      <div className="text-2xl md:text-2xl font-bold text-red-800 whitespace-nowrap">
                        {price.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 希波介绍 */}
          <section className="mb-8 md:mb-12">
            {/* 删除粉色背景，改为白色背景 */}
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="flex-shrink-0">
                  {/* 头像边框从白色改为墨绿色 */}
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-green-900 shadow-lg">
                    <img
                      src="/images/profile.jpg"
                      alt="希波"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
                  <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-4">
                    {content.teacherName}
                  </h3>
                  {/* 指导语保持深红色 */}
                  <p className="text-red-800 font-medium mb-6 md:mb-8 text-lg md:text-lg">
                    {content.teacherSubtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {content.teacherIntro}
                  </p>
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
            <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-2">
              {language === 'en' ? 'Add WeChat' : '添加微信'}
            </h3>
            <p className="text-gray-600 mb-4 text-base md:text-base">
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
