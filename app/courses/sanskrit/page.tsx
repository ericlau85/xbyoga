'use client';

import { useState, useEffect } from 'react';
import sanskritData from '../../../data/courses/sanskrit.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Link from 'next/link';
import { useLanguage } from '../../../lib/language-context';

export default function SanskritPage() {
  const { language, toggleLanguage } = useLanguage();
  const [content, setContent] = useState<any>(null);
  const [showWechat, setShowWechat] = useState(false);

  useEffect(() => {
    setContent(sanskritData[language as keyof typeof sanskritData]);
  }, [language]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white safe-top safe-bottom overflow-x-hidden">
      {/* ==================== 导航栏 ==================== */}
      <Navigation />

      {/* ==================== 页面内容 ==================== */}
      {/* 蓝色标题区域 */}
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-16">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-light mb-6 md:mb-6 text-center">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-red-300 mb-4 md:mb-8 text-center">
            {content.subtitle}
          </p>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl text-center mx-auto px-4">
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
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6 text-center px-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center px-4 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 学习模块 */}
          <section className="mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl text-center text-gray-800 mb-8 md:mb-16 font-medium">
              {content.practiceTitle}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {content.practiceStyles.map((style: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                  <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="text-3xl md:text-4xl text-red-800">
                      <i className={style.icon}></i>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-2">
                        {style.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">{style.subtitle}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 md:space-y-4">
                    {style.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="text-green-600 mt-1">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
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
            <p className="text-center text-gray-600 mb-6 md:mb-12 text-sm md:text-base">
              {content.scheduleSubtitle}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {content.scheduleItems.map((item: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-5 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl text-red-800 mb-3 md:mb-4">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-2 md:mb-3 text-sm md:text-base">{item.time}</p>
                  <p className="text-gray-700 text-sm md:text-base">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-4 md:mt-8 text-gray-600">
              <p className="text-sm md:text-base">{content.restDays}</p>
            </div>
          </section>

          {/* 价格表 */}
          <section className="mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl text-center text-gray-800 mb-8 md:mb-16 font-medium">
              {content.pricingTitle}
            </h2>
            <p className="text-center text-gray-600 mb-6 md:mb-12 text-sm md:text-base">
              {content.pricingSubtitle}
            </p>
            
            <div className="max-w-2xl mx-auto">
              {/* 标准课程 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 hover:shadow-xl transition-all duration-300">
                <div className="space-y-4 md:space-y-8">
                  {content.groupPrices.map((price: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 md:py-6 border-b border-gray-100 last:border-0 px-4"
                    >
                      <div className="flex-1 pr-6">
                        <div className="font-medium text-gray-800 text-base md:text-lg mb-2 md:mb-2">
                          {price.title}
                        </div>
                        <div className="text-gray-500 text-xs md:text-sm">
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
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              {language === 'en' ? 'Add WeChat' : '添加微信'}
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
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
