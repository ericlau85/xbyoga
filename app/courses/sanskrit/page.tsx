'use client';

import { useState, useEffect } from 'react';
import sanskritData from '../../../data/courses/sanskrit.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../../lib/language-context';

export default function SanskritPage() {
  const { language } = useLanguage();
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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white safe-top safe-bottom overflow-x-hidden pt-12">
        {/* ==================== 导航栏 ==================== */}
        <Navigation />

        {/* ==================== 页面内容 ==================== */}
        {/* 蓝色标题区域 - 紧凑 */}
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
            {/* 课程特色 */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
                {content.whyTitle}
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

            {/* 学习模块 */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
                {content.practiceTitle}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {content.practiceStyles.map((style: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="text-2xl md:text-3xl text-red-800">
                        <i className={style.icon}></i>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-1">
                          {style.title}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm">{style.subtitle}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 md:space-y-2">
                      {style.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="text-green-600 mt-0.5 text-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <span className="text-gray-700 text-sm md:text-sm">{feature}</span>
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
              <p className="text-center text-gray-600 mb-4 md:mb-8 text-xs md:text-sm">
                {content.scheduleSubtitle}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {content.scheduleItems.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center">
                    <div className="text-2xl md:text-3xl text-red-800 mb-2 md:mb-3">
                      <i className={item.icon}></i>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-1 md:mb-2 text-xs md:text-sm">{item.time}</p>
                    <p className="text-gray-700 text-xs md:text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-4 md:mt-6 text-gray-600">
                <p className="text-xs md:text-sm">{content.restDays}</p>
              </div>
            </section>

            {/* 价格表 */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
                {content.pricingTitle}
              </h2>
              <p className="text-center text-gray-600 mb-4 md:mb-8 text-xs md:text-sm">
                {content.pricingSubtitle}
              </p>
              
              <div className="max-w-2xl mx-auto">
                {/* 标准课程 */}
                <div className="bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-200">
                  <div className="space-y-3 md:space-y-6">
                    {content.groupPrices.map((price: any, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 md:py-4 border-b border-gray-100 last:border-0 px-2"
                      >
                        <div className="flex-1 pr-4">
                          <div className="font-medium text-gray-800 text-sm md:text-base mb-1 md:mb-1">
                            {price.title}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {price.description}
                          </div>
                        </div>
                        <div className="text-xl md:text-xl font-bold text-red-800 whitespace-nowrap">
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
