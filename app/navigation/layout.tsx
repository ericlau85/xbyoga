// app/navigation/layout.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState('en');
  const [isPractice GuideOpen, setIsPractice GuideOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
    localStorage.setItem('preferred-language', newLang);
  };

  const navContent = {
    en: {
      courses: "Courses",
      ashtanga: "Ashtanga",
      sanskrit: "Sanskrit",
      Practice Guide: "Practice Guide Base",
      yogaFoundation: "Yoga Foundation",
      sanskritWisdom: "Sanskrit Wisdom",
      yogaPhilosophy: "Yoga Philosophy"
    },
    zh: {
      courses: "课程",
      ashtanga: "阿斯汤加",
      sanskrit: "梵语",
      Practice Guide: "练习指南",
      yogaFoundation: "瑜伽基础",
      sanskritWisdom: "梵语智慧",
      yogaPhilosophy: "瑜伽哲学"
    }
  };

  const content = navContent[language as keyof typeof navContent] || navContent.en;

  return (
    <div className="navigation-layout">
      {/* 导航栏 */}
      <nav className="main-navigation">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            {language === 'zh' ? '🌞' : '🌛'} Ashtanga
          </Link>
          
          <div className="nav-items">
            {/* 课程下拉 */}
            <div
              className="nav-item dropdown"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <span>{content.courses}</span>
              {isCoursesOpen && (
                <div className="dropdown-menu">
                  <Link href="/courses/ashtanga" className="dropdown-item">
                    <i className="fas fa-dharmachakra"></i>
                    {content.ashtanga}
                  </Link>
                  <Link href="/courses/sanskrit" className="dropdown-item">
                    <i className="fas fa-om"></i>
                    {content.sanskrit}
                  </Link>
                </div>
              )}
            </div>

            {/* 练习指南下拉 */}
            <div
              className="nav-item dropdown"
              onMouseEnter={() => setIsPractice GuideOpen(true)}
              onMouseLeave={() => setIsPractice GuideOpen(false)}
            >
              <span>{content.Practice Guide}</span>
              {isPractice GuideOpen && (
                <div className="dropdown-menu">
                  <Link href="/Practice Guide/yoga-foundation" className="dropdown-item">
                    <i className="fas fa-seedling"></i>
                    {content.yogaFoundation}
                  </Link>
                  <Link href="/Practice Guide/sanskrit-wisdom" className="dropdown-item">
                    <i className="fas fa-language"></i>
                    {content.sanskritWisdom}
                  </Link>
                  <Link href="/Practice Guide/yoga-philosophy" className="dropdown-item">
                    <i className="fas fa-book-open"></i>
                    {content.yogaPhilosophy}
                  </Link>
                </div>
              )}
            </div>

            {/* 语言切换 */}
            <button
              className="nav-language-btn"
              onClick={toggleLanguage}
            >
              {language === 'en' ? '🇨🇳' : '🇬🇧'}
            </button>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <main>{children}</main>
    </div>
  );
}
