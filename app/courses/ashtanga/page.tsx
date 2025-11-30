// app/courses/ashtanga/page.tsx
'use client';

import { useLanguage } from '../../../lib/language-context';  // 新增这行
import ashtangaData from '../../../data/courses/ashtanga.json';

export default function AshtangaPage() {
  const { language } = useLanguage();
  
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

      {/* 练习方式部分 */}
      <section className="practice-section">
        <div className="container">
          <h2 className="section-title">{content.practiceTitle}</h2>
          <div className="practice-grid">
            {content.practiceStyles.map((style, index) => (
              <div key={index} className="practice-card">
                <div className="practice-icon">
                  <i className={style.icon}></i>
                </div>
                <h3>{style.title}</h3>
                <p className="practice-subtitle">{style.subtitle}</p>
                <ul className="practice-features">
                  {style.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
          
          {/* 课程安排部分 */}
          <section className="schedule-section">
            <div className="container">
              <h2 className="section-title">{content.scheduleTitle}</h2>
              <p className="schedule-subtitle">{content.scheduleSubtitle}</p>
              
              <div className="schedule-grid">
                {content.scheduleItems.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <div className="schedule-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="schedule-content">
                      <h3>{item.title}</h3>
                      <p className="schedule-time">{item.time}</p>
                      <p className="schedule-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
          <p className="rest-days">
            {content.restDays?.split('&')[0]} &
            <a
              href="/moon-calendar"
              style={{
                color: 'var(--accent-color)',
                textDecoration: 'underline',
                fontWeight: '500'
              }}
            >
              {content.restDays?.split('&')[1]?.trim()}
            </a>
          </p>
          </div>
          </section>

      {/* 价格部分 */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">{content.pricingTitle}</h2>
          <p className="pricing-subtitle">{content.pricingSubtitle}</p>
          
          <div className="pricing-grid">
            <div className="pricing-category">
              <h3>{content.groupTitle}</h3>
              <p className="category-subtitle">{content.groupSubtitle}</p>
              {content.groupPrices.map((price, index) => (
                <div key={index} className="price-item">
                  <div className="price-info">
                    <span className="price-title">{price.title}</span>
                    <span className="price-description">{price.description}</span>
                  </div>
                  <span className="price-amount">{price.price}</span>
                </div>
              ))}
            </div>
            
            <div className="pricing-category">
              <h3>{content.privateTitle}</h3>
              <p className="category-subtitle">{content.privateSubtitle}</p>
              {content.privatePrices.map((price, index) => (
                <div key={index} className="price-item">
                  <div className="price-info">
                    <span className="price-title">{price.title}</span>
                    <span className="price-description">{price.description}</span>
                  </div>
                  <span className="price-amount">{price.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 教师介绍部分 */}
      <section className="profile-section">
        <div className="container">
          <div className="profile-card">
            <div className="profile-image">
              <img src="/images/profile.jpg" alt="Xibo" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="profile-info">
              <h4>{content.teacherName}</h4>
              <p className="subtitle">{content.teacherSubtitle}</p>
              <p className="intro-text">{content.teacherIntro}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
