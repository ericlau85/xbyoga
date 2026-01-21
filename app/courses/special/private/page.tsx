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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen safe-top safe-bottom pt-12">
      <Navigation />

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

      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* 课程特色 - 更紧凑的排版 */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            {content.features.title}
          </h2>
          
          <div className="space-y-6">
            {content.features.items.map((feature: any, index: number) => (
              <div key={index} className="pb-6 border-b border-gray-100 last:pb-0 last:border-0">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 适合人群 - 保持原样 */}
        <section className="mb-10 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.suitableFor.title}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {content.suitableFor.items.map((item: any, index: number) => (
              <div key={index} className="p-3">
                <div className="text-xs text-gray-400 mb-1">
                  {index + 1}
                </div>
                <div className="text-sm font-bold text-gray-900 mb-2">
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
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.pricing.title}
          </h2>
          
          <div className="space-y-2">
            {content.pricing.packages.map((pkg: any, index: number) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <div className="font-medium text-gray-900 text-sm">
                    {pkg.title}
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    {pkg.note}
                  </p>
                </div>
                <div className="font-bold text-red-800 text-sm">
                  {pkg.price}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
