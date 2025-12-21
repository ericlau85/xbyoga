// app/special-courses/private/page.tsx
'use client';

import { useState, useEffect } from 'react';
import privateData from '../../../data/courses/private.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../../lib/language-context';

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
    <div className="min-h-screen bg-gray-50 safe-top safe-bottom pt-12">
      <Navigation />

      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-light mb-3">
            {content.title}
          </h1>
          <h2 className="text-lg text-gray-200 font-medium mb-4">
            {content.subtitle}
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            {content.intro}
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        <section className="mb-10 md:mb-14">
          <div className="mb-6">
            <h2 className="text-xl font-medium text-gray-900">
              {content.features.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.features.items.map((feature: any, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <i className={`${feature.icon} text-red-700`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
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

        <section className="mb-10 md:mb-14">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {content.suitableFor.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.suitableFor.items.map((item: any, index: number) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">
                  {index + 1}
                </div>
                <div className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {content.pricing.title}
          </h2>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {content.pricing.course}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {content.pricing.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-sm text-gray-500">
                    {language === 'zh' ? '每日 9:00-20:00 可约' : 'Available 9:00-20:00 daily'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {content.pricing.packages.map((pkg: any, index: number) => (
                <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="font-medium text-gray-900 mb-1">
                        {pkg.title}
                      </div>
                      <p className="text-gray-500 text-xs">
                        {pkg.note}
                      </p>
                    </div>
                    <div className="text-lg font-bold text-red-800">
                      {pkg.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {language === 'zh' ? '常见问题' : 'FAQ'}
          </h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">
                {language === 'zh' ? '如何确定我是否适合私教课程？' : 'How do I know if private lessons are suitable for me?'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'zh'
                  ? '请提前沟通，老师会根据您的身体状况、练习经验和目标进行评估，并给出专业建议。'
                  : 'Please communicate in advance. The teacher will assess your physical condition, practice experience, and goals, providing professional recommendations.'}
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">
                {language === 'zh' ? '课程需要提前多久预约？' : 'How far in advance should I book?'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'zh'
                  ? '建议提前一天预约，以方便老师为您留出时间和准备个性化课程内容。紧急情况可联系微信沟通。'
                  : 'We recommend booking at least one day in advance to allow time for teacher preparation. For urgent requests, please contact via WeChat.'}
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">
                {language === 'zh' ? '如果临时需要取消或改期怎么办？' : 'What if I need to cancel or reschedule?'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'zh'
                  ? '课程开始前12小时可免费取消或改期。12小时内调整需收取50%费用。具体政策详见报名后的详细条款。'
                  : 'Free cancellation or rescheduling is available up to 12 hours before the session. Changes within 12 hours incur a 50% fee. Detailed policies are provided upon enrollment.'}
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
