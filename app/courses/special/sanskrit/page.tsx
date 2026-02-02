'use client';

import { useState, useEffect } from 'react';
import sanskritData from '../../../../data/courses/sanskrit.json';
import Footer from '../../../components/Footer';
import Navigation from '../../../components/Navigation';
import { useLanguage } from '../../../../lib/language-context';

export default function SanskritPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    setContent(sanskritData[language as keyof typeof sanskritData]);
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

      {/* 瑞士风格标题区域 */}
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

      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="relative">
        
          {/* 课程概述 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.overview.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            <div className="space-y-4">
              {content.overview.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-1.5 h-1.5 bg-gray-800"></div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 教学目标 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.objectives.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            <div className="space-y-3">
              {content.objectives.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-1.5 h-1.5 bg-gray-800"></div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 教学大纲 - 优化处理重复 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.syllabus.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            <div className="space-y-8">
              {content.syllabus.items.map((session, index) => {
                // 提取标题：移除"第一讲："等前缀
                const getSessionTitle = (title) => {
                  // 如果是中文：移除"第X讲："部分
                  if (language === 'zh') {
                    return title.replace(/^第[一二三四]讲：\s*/, '');
                  }
                  // 如果是英文：移除"Session X："部分
                  return title.replace(/^Session \d+: /, '');
                };

                return (
                  <div key={index} className="pb-8 border-b border-gray-100 last:pb-0 last:border-0">
                    <div className="mb-3">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        {language === 'zh' ? `第${index + 1}讲` : `Session ${index + 1}`}
                      </div>
                      <h3 className="text-base font-medium text-gray-900">
                        {getSessionTitle(session.title)}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {session.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 教学方法 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.methods.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.methods.items.map((item, index) => (
                <div key={index} className="p-4 border border-gray-200">
                  <div className="text-gray-700 text-sm leading-relaxed">{item}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 适合人群 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.audience.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            <div className="space-y-3">
              {content.audience.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-1.5 h-1.5 bg-gray-800"></div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 教学资料 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.materials.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.materials.items.map((item, index) => (
                <div key={index} className="p-4 border border-gray-200">
                  <div className="text-gray-700 text-sm leading-relaxed">{item}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 课程信息 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {content.info.title}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            <div className="space-y-4">
              {content.info.items.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-4 py-2 border-b border-gray-100 last:border-0">
                  <div className="text-gray-700 font-normal text-sm min-w-[120px]">
                    {item.label}
                  </div>
                  <div className="text-gray-900 text-sm">{item.value}</div>
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
            
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <div>
                <div className="font-medium text-gray-900 text-sm mb-2">
                  {content.pricing.course}
                </div>
                <p className="text-gray-500 text-xs">
                  {content.pricing.description}
                </p>
              </div>
              <div className="font-normal text-gray-900 text-base">
                {content.pricing.price}
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
