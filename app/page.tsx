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
    // 卖点改为纯文本
    features: [
      { title: '全球接入', desc: '身处何地，都能获得稳定指导' },
      { title: '一对一指导', desc: '根据您的节奏与需求定制课程' },
      { title: '灵活安排', desc: '根据您的时间表预约练习时段' }
    ],
    ctaButton: '查看课程与报名',
    ctaSubtext: '或访问我们的特别课程',
    ctaLinkText: '了解更多',
    thankYou: '感谢各位一直以来的支持与陪伴。',
    signature: '— XBYOGA —'
  },
  en: {
    imageTitle: 'Ashtanga Yoga Online',
    imageSubtitle: 'Professional Guidance · Flexible Practice',
    coreValue: 'We specialise in online Ashtanga yoga instruction, providing personalised guidance wherever you are. Since 2020, we have helped practitioners establish consistent, progressive online practice routines.',
    // 卖点改为纯文本
    features: [
      { title: '1-on-1 Guidance', desc: 'Tailored sessions for your pace & needs' },
      { title: 'Global Access', desc: 'Stable guidance from anywhere' },
      { title: 'Flexible Schedule', desc: 'Book sessions around your time' }
    ],
    ctaButton: 'View Courses & Enroll',
    ctaSubtext: 'Or explore our special courses',
    ctaLinkText: 'Learn more',
    thankYou: 'Thank you all for your continued support and presence.',
    signature: '— XBYOGA —'
  }
};

export default function Home() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // 确保content完整设置
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
            <div className="relative w-full h-[40vh] min-h-[280px] rounded-xl overflow-hidden shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 transition-opacity duration-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
                </div>
              </div>
              
              <Image
                src="/images/home.jpg"
                alt={language === 'zh' ? '阿斯汤加瑜伽练习' : 'Ashtanga Yoga Practice'}
                fill
                priority
                quality={90}
                className={`object-cover object-center transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                sizes="100vw"
                onLoadingComplete={() => setImageLoaded(true)}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-xl">
                    <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">
                      {content.imageTitle}
                    </h1>
                    <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
                    <p className="text-xl md:text-xl font-light opacity-95">
                      {content.imageSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 核心价值陈述 */}
        <div className="w-full px-4 pb-8 md:pb-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center font-light">
              {content.coreValue}
            </p>
          </div>
        </div>

        {/* 3. 卖点区 - 纯文本专业样式 */}
        {content.features && (
          <div className="w-full px-4 pb-10 md:pb-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
                {content.features.map((feature: any, index: number) => (
                  <div key={index} className="p-5">
                    <div className="text-lg font-semibold text-red-800 mb-3 border-b border-amber-800 pb-3">
                      {feature.title}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. 行动号召区 */}
        <div className="w-full px-4 pb-12 md:pb-14">
          <div className="max-w-2xl mx-auto text-center">
            <a
              href="/courses/ashtanga"
              className="inline-block px-8 py-3 bg-red-800 hover:bg-amber-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              {content.ctaButton}
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              {content.ctaSubtext}
              <a href="/special-courses" className="text-amber-600 hover:text-amber-800 ml-1 underline">
                {content.ctaLinkText}
              </a>
            </p>
          </div>
        </div>

        {/* 5. 底部感谢语 */}
        <div className="w-full px-4 pb-12">
          <div className="max-w-2xl mx-auto">
            <div className="pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-center text-sm md:text-base font-light italic">
                {content.thankYou}
              </p>
              <p className="text-gray-400 text-center mt-6 text-xs tracking-wider">
                {content.signature}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
