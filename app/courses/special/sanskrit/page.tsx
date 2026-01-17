'use client';

import { useState, useEffect } from 'react';
import sanskritData from '../../../../data/courses/sanskrit.json';
import Footer from '../../../components/Footer';
import Navigation from '../../../components/Navigation';
import { useLanguage } from '../../../../lib/language-context';

type SyllabusItem = {
  title: string;
  content: string;
};

type InfoItem = {
  label: string;
  value: string;
};

type CourseContent = {
  title: string;
  subtitle: string;
  intro: string;
  overview: {
    title: string;
    items: string[];
  };
  objectives: {
    title: string;
    items: string[];
  };
  syllabus: {
    title: string;
    items: SyllabusItem[];
  };
  methods: {
    title: string;
    items: string[];
  };
  audience: {
    title: string;
    items: string[];
  };
  materials: {
    title: string;
    items: string[];
  };
  info: {
    title: string;
    items: InfoItem[];
  };
  pricing: {
    title: string;
    course: string;
    description: string;
    price: string;
  };
};

export default function SanskritPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<CourseContent | null>(null);

  useEffect(() => {
    setContent(sanskritData[language as keyof typeof sanskritData] as CourseContent);
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
        
        {/* 课程概述 */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.overview.title}
          </h2>
          <div className="space-y-3">
            {content.overview.items.map((item, index) => (
              <p key={index} className="text-gray-700 text-sm">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* 教学目标 */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.objectives.title}
          </h2>
          <div className="space-y-2">
            {content.objectives.items.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-800 mr-2">•</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 教学大纲 */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.syllabus.title}
          </h2>
          <div className="space-y-6">
            {content.syllabus.items.map((session, index) => (
              <div key={index}>
                <div className="text-base font-bold text-gray-900 mb-2">
                  {session.title}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {session.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 教学方法 */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.methods.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.methods.items.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded">
                <div className="text-gray-700 text-sm">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 适合人群 */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.audience.title}
          </h2>
          <div className="space-y-2">
            {content.audience.items.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-800 mr-2">•</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 教学资料 */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.materials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.materials.items.map((item, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded">
                <div className="text-gray-700 text-sm">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 课程信息 */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.info.title}
          </h2>
          <div className="space-y-3">
            {content.info.items.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row">
                <div className="text-gray-700 font-medium text-sm min-w-[120px] mb-1 sm:mb-0">
                  {item.label}
                </div>
                <div className="text-gray-900 text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 课程费用 */}
        <div className="pt-8 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.pricing.title}
          </h2>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <div className="font-medium text-gray-900 text-sm mb-1">
                {content.pricing.course}
              </div>
              <p className="text-gray-500 text-xs">
                {content.pricing.description}
              </p>
            </div>
            <div className="font-bold text-red-800 text-sm">
              {content.pricing.price}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
