'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../lib/language-context';
import Navigation from './components/Navigation';
import Image from 'next/image';

const homepageContent = {
  zh: {
    imageTitle: '线上阿斯汤加瑜伽',
    imageSubtitle: '专业指导 · 灵活安排',
    coreValue: '我们专注于线上阿斯汤加瑜伽教学，让您在任何地点接受个性化指导。自2020年至今，已帮助众多练习者建立稳定、精进的线上练习习惯。',
    features: [
      { title: '一对一指导', desc: '根据您的节奏与需求定制课程' },
      { title: '全球接入', desc: '身处何地，都能获得稳定指导' },
      { title: '灵活安排', desc: '根据您的时间表预约练习时段' }
    ],
    ctaButton: '查看课程与报名',
    thankYou: '感谢各位一直以来的支持与陪伴。',
    signature: '— XBYOGA —'
  },
  en: {
    imageTitle: 'Ashtanga Yoga Online',
    imageSubtitle: 'Professional Guidance · Flexible Practice',
    coreValue: 'We specialise in online Ashtanga yoga instruction, providing personalised guidance wherever you are. Since 2020, we have helped practitioners establish consistent, progressive online practice routines.',
    features: [
      { title: '1-on-1 Guidance', desc: 'Tailored sessions for your pace & needs' },
      { title: 'Global Access', desc: 'Stable guidance from anywhere' },
      { title: 'Flexible Schedule', desc: 'Book sessions around your time' }
    ],
    ctaButton: 'View Courses & Enroll',
    thankYou: 'Thank you all for your continued support and presence.',
    signature: '— XBYOGA —'
  }
};

export default function Home() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setContent(homepageContent[language as keyof typeof homepageContent]);
  }, [language]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-12">
        {/* 1. 顶部图片区 */}
        <div className="w-full px-4 py-8 md:py-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-[50vh] min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/home.jpg"
                alt={language === 'zh' ? '阿斯汤加瑜伽练习' : 'Ashtanga Yoga Practice'}
                fill
                priority
                quality={90}
                className={`object-cover object-center transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                sizes="100vw"
                onLoadingComplete={() => setImageLoaded(true)}
              />
              
              {/* 渐变叠加层 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-1/4 left-0 right-0 text-center px-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-wider">
                    {content.imageTitle}
                  </h1>
                  <div className="w-32 h-1 bg-amber-400 mx-auto mb-8"></div>
                  <p className="text-xl md:text-2xl text-amber-100 font-light">
                    {content.imageSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 核心价值陈述 */}
        <div className="w-full px-4 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-center font-light px-4">
              <span className="text-amber-700 font-medium">
                {language === 'zh' ? "专注线上教学" : "Specialized Online Instruction"}
              </span>
              {language === 'zh'
                ? " - 自2020年至今，我们致力于提供专业的阿斯汤加瑜伽线上指导，帮助全球练习者建立稳定、精进的个人练习。"
                : " - Since 2020, we have been dedicated to providing professional Ashtanga yoga guidance online, helping practitioners worldwide establish consistent and progressive personal practice."}
            </p>
          </div>
        </div>

        {/* 3. 卖点区 - 纯文本，无图标 */}
        {content.features && (
          <div className="w-full px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {content.features.map((feature: any, index: number) => (
                  <div key={index} className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. 行动号召区 */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-light text-gray-900 mb-8">
              {language === 'zh' ? '开始您的练习' : 'Begin Your Practice'}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses/ashtanga"
                className="px-8 py-3 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg shadow hover:shadow-md transition-all duration-200"
              >
                {content.ctaButton}
              </a>
              
              <a
                href="/courses/special"
                className="px-8 py-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                {language === 'zh' ? '浏览特别课程' : 'View Special Courses'}
              </a>
            </div>
          </div>
        </div>

        {/* 5. 底部感谢语 */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-2xl mx-auto">
            <div className="pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-700 text-lg font-light italic mb-6">
                  {content.thankYou}
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-400 text-sm tracking-widest">
                    {content.signature}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
