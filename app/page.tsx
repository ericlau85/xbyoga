'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../lib/language-context';
import Navigation from './components/Navigation';
import Image from 'next/image';

const homepageContent = {
  zh: {
    // 图片上的主标题
    imageTitle: '线上阿斯汤加瑜伽',
    imageSubtitle: '专业指导 · 灵活安排',
        
    // 核心价值陈述
    coreValue: '我们专注于线上阿斯汤加瑜伽教学，让您在任何地点接受个性化指导。自2020年至今，已帮助众多练习者建立稳定、精进的线上练习习惯。'
  },
  en: {
    imageTitle: 'Ashtanga Yoga Online',
    imageSubtitle: 'Professional Guidance · Flexible Practice',
    coreValue: 'We specialise in online Ashtanga yoga instruction, providing personalised guidance wherever you are. Since 2020, we have helped practitioners establish consistent, progressive online practice routines.'
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
        {/* 单张高质量图片 */}
        <div className="w-full px-4 py-8 md:py-9">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-[50vh] min-h-[360px] rounded-xl overflow-hidden shadow-xl">
              {/* 加载状态 */}
              <div className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 transition-opacity duration-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
                </div>
              </div>
              
              {/* 主图片 */}
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
              
              {/* 图片上的文字层 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-xl">
                    
                    {/* 主标题 */}
                    <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">
                      {content.imageTitle}
                    </h1>
                    
                    {/* 装饰线 */}
                    <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
                    
                    {/* 副标题 */}
                    <p className="text-xl md:text-xl font-light opacity-90">
                      {content.imageSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 唯一的文字内容*/}
        <div className="w-full px-4 pb-16 md:pb-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-base md:text-base leading-relaxed text-center font-light">
              {content.coreValue}
            </p>
          </div>
        </div>
          
        {/* 底部感谢语 */}
            <div className="w-full px-4 pb-16 md:pb-24">
            <div className="max-w-2xl mx-auto">
                <div className="border-t border-gray-200 pt-8 md:pt-12">
                <p className="text-gray-600 text-center text-sm md:text-base font-light italic">
                {language === 'zh'
                ? '感谢各位一直以来的支持与陪伴。'
                : 'Thank you all for your continued support and presence'}
            </p>
                        
            {/* 工作室署名 */}
            <p className="text-gray-500 text-center mt-6 text-xs">
                {language === 'zh' ? '— XBYOGA —' : '— XBYOGA —'}
               </p>
             </div>
            </div>
          </div>
          </main>
      
      {/* 字体图标 */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}
