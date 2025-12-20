// app/special-courses/page.tsx
'use client';

import { useLanguage } from '../../lib/language-context';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Link from 'next/link';

// Special courses data
const specialCourses = [
  {
    slug: 'sanskrit',
    title_en: 'SANSKRIT STUDIES',
    title_zh: '梵语课程',
    subtitle_en: 'Online Sanskrit · Classical Foundation',
    subtitle_zh: '在线梵语 · 经典入门',
    description_en: 'Systematically master Devanagari script reading and writing, accurate pronunciation, and core terminology with common chants.',
    description_zh: '系统掌握天城文读写、精准发音与核心术语，常见念诵，奠定瑜伽文化的语言根基。',
    duration_en: '4 weeks · Complete materials',
    duration_zh: '4周系统学习 · 包含所有资料',
    price: '¥290',
    available: true,
    type: 'course'
  },
  {
    slug: 'evening-mysore',
    title_en: 'EVENING MYSORE',
    title_zh: '晚间迈场',
    subtitle_en: 'Post-Work Practice',
    subtitle_zh: '下班后练习',
    description_en: 'Evening Mysore practice sessions designed for working professionals, guided by an experienced Ashtanga teacher.',
    description_zh: '专为职场人士设计的晚间迈场练习，由经验丰富的阿斯汤加老师带领。',
    duration_en: 'Mon/Wed/Fri · 18:30-19:45',
    duration_zh: '周一/三/五 · 18:30-19:45',
    price: 'Coming Soon',
    available: false,
    type: 'evening',
    teacher: '特邀老师'
  },
  {
    slug: 'weekend-workshop',
    title_en: 'WEEKEND WORKSHOP',
    title_zh: '周末研习会',
    subtitle_en: 'Deep Dive into Pranayama & Philosophy',
    subtitle_zh: '深度研习调息与哲学',
    description_en: 'Intensive weekend workshop focusing on pranayama techniques, yoga philosophy discussions, and meditation practices.',
    description_zh: '深入的周末研习，专注于调息法技巧、瑜伽哲学探讨与禅定实践。',
    duration_en: 'Saturday · 18:30-19:45',
    duration_zh: '周六 · 18:30-19:45',
    price: 'Coming Soon',
    available: false,
    type: 'workshop',
    teacher: '特邀老师'
  }
];

export default function SpecialCoursesPage() {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 safe-top safe-bottom pt-12">
      <Navigation />
      
      {/* Blue header section - consistent with other pages */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-light mb-3 text-center">
            {language === 'zh' ? '特别课程' : 'SPECIAL COURSES'}
          </h1>
          <h2 className="text-lg text-gray-200 font-medium mb-4 text-center">
            {language === 'zh' ? '精选专题课程' : 'Selected Special Courses'}
          </h2>
          <p className="text-gray-300 text-base text-center max-w-3xl mx-auto">
            {language === 'zh'
              ? '包含专题课程及特别时段练习，为不同需求的练习者提供更多选择。'
              : 'Includes special topic courses and particular time sessions, offering more options for practitioners with varying needs.'}
          </p>
        </div>
      </div>
      
      {/* Main content */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Currently available courses */}
        <div className="mb-10">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {language === 'zh' ? '当前可报名课程' : 'Currently Available'}
          </h2>
          <div className="space-y-6">
            {specialCourses
              .filter(course => course.available)
              .map((course) => (
                <CourseCard key={course.slug} course={course} language={language} />
              ))}
          </div>
        </div>
        
        {/* Planned courses */}
        <div>
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {language === 'zh' ? '计划中的课程' : 'Planned Courses'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialCourses
              .filter(course => !course.available)
              .map((course) => (
                <ComingSoonCard key={course.slug} course={course} language={language} />
              ))}
          </div>
        </div>
        
        {/* Information notes */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              {language === 'zh'
                ? '• 晚间迈场课程特别为下班后的练习者设计，帮助放松身心，培养晚间练习习惯'
                : '• Evening Mysore sessions are specially designed for post-work practitioners, aiding relaxation and cultivating evening practice habits.'}
            </p>
            <p>
              {language === 'zh'
                ? '• 周末研习会将深入探讨调息法与瑜伽哲学，包含禅定实践指导'
                : '• Weekend workshops will delve deeply into pranayama techniques and yoga philosophy, including meditation practice guidance.'}
            </p>
            <p>
              {language === 'zh'
                ? '• 所有计划课程的具体安排将在确定后公布，课程时间可能会调整'
                : '• All specific arrangements for planned courses will be announced once confirmed; schedules may be adjusted.'}
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

// Available course card component
function CourseCard({ course, language }: { course: any; language: string }) {
  const hasPage = course.slug === 'sanskrit';
  
  const CardContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-red-800 transition-colors">
          {language === 'zh' ? course.title_zh : course.title_en}
        </h3>
        <span className={`text-lg font-bold ${course.price === 'Coming Soon' ? 'text-gray-500' : 'text-red-800'}`}>
          {course.price}
        </span>
      </div>
      
      <p className="text-base text-red-700 font-medium mb-3">
        {language === 'zh' ? course.subtitle_zh : course.subtitle_en}
      </p>
      
      <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed flex-1">
        {language === 'zh' ? course.description_zh : course.description_en}
      </p>
      
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{language === 'zh' ? course.duration_zh : course.duration_en}</span>
      </div>
      
      <div className="mt-4 flex justify-end">
        <svg
          className="w-5 h-5 text-red-800 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );

  if (hasPage) {
    return (
      <Link
        href={`/special-courses/${course.slug}`}
        className="group block p-6 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <a
      href="/enroll"
      className="group block p-6 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
    >
      <CardContent />
    </a>
  );
}

// Coming soon card component
function ComingSoonCard({ course, language }: { course: any; language: string }) {
  return (
    <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
      <div className="flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              {language === 'zh' ? course.title_zh : course.title_en}
            </h3>
            <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
              {language === 'zh' ? '计划中' : 'Planned'}
            </span>
          </div>
          <span className="text-lg font-bold text-gray-500">
            {course.price}
          </span>
        </div>
        
        <p className="text-base text-gray-700 font-medium mb-3">
          {language === 'zh' ? course.subtitle_zh : course.subtitle_en}
        </p>
        
        <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed flex-1">
          {language === 'zh' ? course.description_zh : course.description_en}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{language === 'zh' ? course.duration_zh : course.duration_en}</span>
          </div>
          
          {course.teacher && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>
                {language === 'zh' ? '指导老师：' : 'Instructor: '}
                {course.teacher}
              </span>
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            {language === 'zh'
              ? '课程正在筹备中，具体安排待公布'
              : 'Course under preparation, specific arrangements to be announced'}
          </p>
        </div>
      </div>
    </div>
  );
}
