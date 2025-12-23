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

      {/* 蓝色标题区域 */}
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

      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* 课程特色 */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.features.title}
          </h2>
          
          <div className="space-y-4">
            {content.features.items.map((feature: any, index: number) => (
              <div key={index} className="p-3 border-l-2 border-red-800 hover:bg-gray-50 transition-colors">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 适合人群 */}
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

        {/* 课程费用 - 简化版 */}
        <section className="mb-10 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.pricing.title}
          </h2>
          
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-medium text-gray-900">
                {content.pricing.course}
              </div>
              <span className="text-xs text-gray-500">
                {language === 'zh' ? '每日 9:00-20:00 可约' : 'Available 9:00-20:00 daily'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              {content.pricing.description}
            </p>
          </div>
          
          <div className="space-y-2">
            {content.pricing.packages.map((pkg: any, index: number) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <div className="font-medium text-gray-900 text-sm">
                    {pkg.title}
                  </div>
                  <p className="text-gray-500 text-xs">
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

        {/* 常见问题 */}
        <section className="pt-8 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {language === 'zh' ? '常见问题' : 'FAQ'}
          </h2>
          
          <div className="space-y-3">
            <div className="pb-3 border-b border-gray-100 last:border-0">
              <h3 className="font-medium text-gray-900 text-sm mb-1">
                {language === 'zh' ? '如何确定我是否适合私教课程？' : 'How do I know if private lessons are suitable for me?'}
              </h3>
              <p className="text-gray-600 text-xs">
                {language === 'zh'
                  ? '请提前沟通，老师会根据您的身体状况、练习经验和目标进行评估，并给出专业建议。'
                  : 'Please communicate in advance. The teacher will assess your physical condition, practice experience, and goals, providing professional recommendations.'}
              </p>
            </div>
            
            <div className="pb-3 border-b border-gray-100 last:border-0">
              <h3 className="font-medium text-gray-900 text-sm mb-1">
                {language === 'zh' ? '课程需要提前多久预约？' : 'How far in advance should I book?'}
              </h3>
              <p className="text-gray-600 text-xs">
                {language === 'zh'
                  ? '建议提前一天预约，以方便老师为您留出时间和准备个性化课程内容。紧急情况可联系微信沟通。'
                  : 'We recommend booking at least one day in advance to allow time for teacher preparation. For urgent requests, please contact via WeChat.'}
              </p>
            </div>
            
            <div className="pb-3">
              <h3 className="font-medium text-gray-900 text-sm mb-1">
                {language === 'zh' ? '如果临时需要取消或改期怎么办？' : 'What if I need to cancel or reschedule?'}
              </h3>
              <p className="text-gray-600 text-xs">
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
