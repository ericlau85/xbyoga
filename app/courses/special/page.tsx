'use client';

import { useLanguage } from '../../../lib/language-context';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

// Special data
const CoursesSpecial = [
  {
    slug: 'private',
    title_en: 'PRIVATE YOGA',
    title_zh: '私教瑜伽',
    subtitle_en: 'One-on-One Guidance · Individual Practice',
    subtitle_zh: '一对一指导 · 个性化练习',
    description_en: 'Yoga sessions adapted to your individual needs and practice experience, guided one-on-one by an experienced Ashtanga practitioner.',
    description_zh: '根据您的个人需求与练习经验调整的瑜伽课程，由经验丰富的阿斯汤加练习者一对一指导。',
    duration_en: '75 minutes · Flexible scheduling',
    duration_zh: '75分钟课程 · 灵活安排时间',
    price_zh: '¥380起',
    price_en: 'From ¥380',
    available: true,
    type: 'course'
  },
  {
    slug: 'sanskrit',
    title_en: 'SANSKRIT STUDIES',
    title_zh: '梵语课程',
    subtitle_en: 'Online Sanskrit · Classical Introduction',
    subtitle_zh: '在线梵语 · 经典入门',
    description_en: 'Systematically learn Devanagari script reading and writing, accurate pronunciation, and core terminology, including common chants.',
    description_zh: '系统掌握天城文读写、精准发音与核心术语，常见念诵，奠定瑜伽文化的语言根基。',
    duration_en: '4 sessions · All materials included',
    duration_zh: '4周系统学习 · 包含所有资料',
    price_zh: '¥290',
    price_en: '¥290',
    available: true,
    type: 'course'
  },
  {
    slug: 'evening-mysore',
    title_en: 'EVENING PRACTICE',
    title_zh: '晚间练习',
    description_en: 'Evening practice sessions designed for working professionals, guided by an experienced yoga teacher.',
    description_zh: '专为职场人士设计的晚间练习，由经验丰富的瑜伽老师带领。',
    duration_en: 'Schedule to be announced',
    duration_zh: '时间待定',
    price_zh: '即将推出',
    price_en: 'Coming Soon',
    available: false,
    type: 'evening',
    teacher: '特邀老师'
  },
  {
    slug: 'weekend-workshop',
    title_en: 'WEEKEND WORKSHOP',
    title_zh: '周末研习会',
    description_en: 'Intensive weekend workshop focusing on pranayama techniques, yoga philosophy discussions, and meditation practice.',
    description_zh: '深入的周末研习，专注于调息法技巧、瑜伽哲学探讨与禅定实践。',
    duration_en: 'Schedule to be announced',
    duration_zh: '时间待定',
    price_zh: '即将推出',
    price_en: 'Coming Soon',
    available: false,
    type: 'workshop',
    teacher: '特邀老师'
  }
];

export default function CoursesSpecialPage() {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* 标题区域 */}
      <div className="w-full bg-white border-b border-gray-200 py-10 md:py-14 pt-16 md:pt-20">
        <div className="w-full max-w-4xl mx-auto px-4 relative">
          
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-light tracking-wider text-gray-900 uppercase mb-3">
              {language === 'zh' ? '特别课程' : 'SPECIAL COURSES'}
            </h1>
            <div className="w-12 h-0.5 bg-gray-800 mx-auto mb-4"></div>
            <h2 className="text-lg text-gray-700 font-normal mb-6">
              {language === 'zh' ? '精选专题课程' : 'Selected Special Courses'}
            </h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
              {language === 'zh'
                ? '包含专题课程及特别时段练习，为不同需求的练习者提供更多选择。'
                : 'Includes special topic courses and particular time sessions, offering more options for practitioners with varying needs.'}
            </p>
          </div>
        </div>
      </div>
      
      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="relative">
        
          {/* 当前可报名课程 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {language === 'zh' ? '当前可报名课程' : 'Currently Available Courses'}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            <div className="space-y-6">
              {CoursesSpecial
                .filter(course => course.available)
                .map((course) => (
                  <CourseCard key={course.slug} course={course} language={language} />
                ))}
            </div>
          </section>
          
          {/* 计划中的课程 */}
          <section className="pt-8 border-t border-gray-200">
            <div className="mb-6">
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {language === 'zh' ? '计划中的课程' : 'Planned Courses'}
              </h2>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CoursesSpecial
                .filter(course => !course.available)
                .map((course) => (
                  <ComingSoonCard key={course.slug} course={course} language={language} />
                ))}
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

// Available course card component
function CourseCard({ course, language }: { course: any; language: string }) {
  const price = language === 'zh' ? course.price_zh : course.price_en;
  const isComingSoon = price === 'Coming Soon' || price === '即将推出';
  
  const hasDetailPage = course.available && (course.type === 'course' || course.type === 'private');
  
  const CardContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
          {language === 'zh' ? course.title_zh : course.title_en}
        </h3>
        <span className={`text-base font-normal ${isComingSoon ? 'text-gray-500' : 'text-gray-900'}`}>
          {price}
        </span>
      </div>
      
      {course.subtitle_zh && course.subtitle_en && (
        <p className="text-sm text-gray-800 font-normal mb-2 uppercase tracking-wide">
          {language === 'zh' ? course.subtitle_zh : course.subtitle_en}
        </p>
      )}
      
      <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
        {language === 'zh' ? course.description_zh : course.description_en}
      </p>
      
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-3 h-3 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
          </div>
          <span>{language === 'zh' ? course.duration_zh : course.duration_en}</span>
        </div>
        
        <div className="flex items-center gap-1 text-xs text-gray-900 uppercase tracking-wide">
          <span>{language === 'zh' ? '查看详情' : 'View Details'}</span>
          <div className="w-3 h-3 flex items-center justify-center">
            <svg className="w-2 h-2" viewBox="0 0 12 12" fill="none">
              <path d="M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  if (hasDetailPage) {
    return (
      <Link
        href={`/courses/special/${course.slug}`}
        className="group block p-4 border border-gray-200 hover:border-gray-800 transition-all duration-200"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <Link
      href={`/enroll?course=${course.slug}`}
      className="group block p-4 border border-gray-200 hover:border-gray-800 transition-all duration-200"
    >
      <CardContent />
    </Link>
  );
}

// Coming soon card component
function ComingSoonCard({ course, language }: { course: any; language: string }) {
  const price = language === 'zh' ? course.price_zh : course.price_en;
  
  return (
    <div className="p-4 border border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-medium text-gray-900">
              {language === 'zh' ? course.title_zh : course.title_en}
            </h3>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-normal uppercase tracking-wide">
              {language === 'zh' ? '计划中' : 'Planned'}
            </span>
          </div>
          <span className={`text-sm font-normal ${price === '即将推出' || price === 'Coming Soon' ? 'text-gray-500' : 'text-gray-900'}`}>
            {price}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
          {language === 'zh' ? course.description_zh : course.description_en}
        </p>
        
        <div className="space-y-2 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-3 h-3 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            </div>
            <span>{language === 'zh' ? course.duration_zh : course.duration_en}</span>
          </div>
          
          {course.teacher && (
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-3 h-3 flex items-center justify-center">
                <div className="w-1.5 h-1.5 border border-gray-400 rounded-full"></div>
              </div>
              <span>
                {language === 'zh' ? course.teacher : 'Guest Teacher'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
