'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../lib/language-context';
import Navigation from './components/Navigation';
import Image from 'next/image';

const homepageContent = {
  zh: {
    imageTitle: '线上阿斯汤加瑜伽',
    imageSubtitle: '每日Mysore · 线上教学 · 专注练习',
    coreValue: '我们专注于阿斯汤加瑜伽的线上指导，帮助练习者建立稳定、精进的个人练习。',
    features: [
      { title: '每日Mysore', desc: '早晨6:30开始，建立你的日常练习节奏' },
      { title: '个性化指导', desc: '根据你的进度和需求，提供精准的调整建议' },
      { title: '线上陪伴', desc: '在各自的空间，共享练习的能量' }
    ],
    ctaButton: '阿斯汤加课程',
    viewSpecial: '特别课程',
    thankYou: '感谢各位一直以来的支持与陪伴。',
    signature: 'XBYOGA'
  },
  en: {
    imageTitle: 'ASHTANGA YOGA ONLINE',
    imageSubtitle: 'Daily Mysore · Online Teaching · Focused Practice',
    coreValue: 'We specialize in online Ashtanga yoga instruction, helping practitioners cultivate consistent and progressive personal practice.',
    features: [
      { title: 'Daily Mysore', desc: 'Starting at 6:30 AM, build your daily practice rhythm' },
      { title: 'Personal Guidance', desc: 'Provide precise adjustment suggestions based on your progress and needs' },
      { title: 'Online Presence', desc: 'In our own spaces, sharing the energy of practice' }
    ],
    ctaButton: 'Ashtanga Courses',
    viewSpecial: 'Special Courses',
    thankYou: 'Thank you all for your continued support and presence.',
    signature: 'XBYOGA'
  }
};

export default function Home() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    setContent(homepageContent[language as keyof typeof homepageContent]);
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
      
      {/* 主图区域 - 更简约的设计 */}
      <div className="relative w-full h-screen md:h-[90vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/home-eric.jpg"
            alt={language === 'zh' ? '希波' : 'Eric'}
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        
        {/* 标题区域 - 固定在底部 */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {/* 装饰线 */}
              <div className="w-16 h-0.5 bg-gray-800 opacity-60 mx-auto md:mx-0"></div>
              
              {/* 主标题 */}
              <h1 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide text-center md:text-left">
                {content.imageTitle}
              </h1>
              
              {/* 副标题 */}
              <p className="text-sm md:text-base text-gray-700 font-light tracking-wide text-center md:text-left">
                {content.imageSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 核心价值区域 */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* 左侧装饰 */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="h-px w-12 bg-gray-800 mb-4"></div>
                <div className="text-xs text-gray-600 uppercase tracking-widest">
                  {language === 'zh' ? '核心价值' : 'Core Value'}
                </div>
              </div>
            </div>
            
            {/* 核心内容 */}
            <div className="md:col-span-2">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                {content.coreValue}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特性区域 - 网格布局 */}
      <section className="py-12 md:py-16 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature: any, index: number) => (
              <div key={index} className="group">
                {/* 序号 */}
                <div className="text-xs text-gray-500 mb-4 font-mono">
                  0{index + 1}
                </div>
                
                {/* 标题 */}
                <h3 className="text-base font-medium text-gray-900 mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                
                {/* 描述 */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
                
                {/* 底部分隔线 */}
                <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-gray-300 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 行动号召区域 */}
      <section className="py-12 md:py-16 px-4 border-t border-gray-100">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gray-800 opacity-30"></div>
              <div className="text-xs text-gray-600 uppercase tracking-widest">
                {language === 'zh' ? '开始练习' : 'Start Practice'}
              </div>
              <div className="w-8 h-px bg-gray-800 opacity-30"></div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <a
              href="/courses/ashtanga"
              className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 text-center"
            >
              {content.ctaButton}
            </a>
            
            <a
              href="/courses/special"
              className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-200 text-center"
            >
              {content.viewSpecial}
            </a>
          </div>
        </div>
      </section>

      {/* 页脚感谢语 */}
      <footer className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-6 max-w-md mx-auto">
              <p className="text-sm text-gray-600 font-light italic mb-4">
                {content.thankYou}
              </p>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <div className="inline-flex items-center gap-3">
                <div className="w-4 h-px bg-gray-400 opacity-30"></div>
                <span className="text-xs text-gray-500 uppercase tracking-widest">
                  {content.signature}
                </span>
                <div className="w-4 h-px bg-gray-400 opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
