// app/courses/sanskrit/page.tsx
'use client';

import { useLanguage } from '../../../lib/language-context';  // 新增这行
import ashtangaData from '../../../data/courses/sanskrit.json';

export default function AshtangaPage() {
  const { language } = useLanguage();  // 替换原来的 useState
  
  const content = ashtangaData[language as keyof typeof ashtangaData];
    if (typeof content === 'string' || !content) {
      return <div>Loading...</div>;
    }

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <p className="hero-description">{content.intro}</p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">{content.whyTitle}</h2>
          <div className="features-grid">
            {content.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 教学大纲部分 */}
      <section className="syllabus-section">
        <div className="container">
          <h2 className="section-title">{content.syllabusTitle}</h2>
          <div className="syllabus-steps">
            {content.syllabus.map((step, index) => (
              <div key={index} className="syllabus-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 价格部分 */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">{content.pricingTitle}</h2>
          <p className="pricing-subtitle">{content.courseDuration}</p>
          
          <div className="pricing-grid">
            <div className="pricing-category">
              <div className="price-item">
                <div className="price-info">
          <span className="price-title">{content.pricingTitle}</span>
          <span className="price-description">{content.priceNote}</span>
                </div>
                <span className="price-amount">{content.coursePrice}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
