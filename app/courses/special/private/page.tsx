'use client';

import { useState, useEffect } from 'react';
import privateData from '../../../../data/courses/private.json';
import Footer from '../../../components/Footer';
import Navigation from '../../../components/Navigation';
import { useLanguage } from '../../../../lib/language-context';

export default function PrivatePage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    setContent(privateData[language as keyof typeof privateData]);
  }, [language]);

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

      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="relative">
        
          {/* 课程特色 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.features.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            
            <div className="space-y-8">
              {content.features.items.map((feature: any, index: number) => (
                <div key={index} className="pb-8 border-b border-gray-100 last:pb-0 last:border-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-2 h-2 bg-gray-800"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 适合人群 */}
          <section className="mb-12 md:mb-16 pt-8 border-t border-gray-200">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.suitableFor.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.suitableFor.items.map((item: any, index: number) => (
                <div key={index} className="p-4 border border-gray-200">
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                    {index + 1}
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-3">
                    {item.title}
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 课程费用 */}
          <section className="pt-8 border-t border-gray-200">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.pricing.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            
            <div className="space-y-4">
              {content.pricing.packages.map((pkg: any, index: number) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {pkg.title}
                    </div>
                    <p className="text-gray-500 text-xs mt-2">
                      {pkg.note}
                    </p>
                  </div>
                  <div className="font-normal text-gray-900 text-base">
                    {pkg.price}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
