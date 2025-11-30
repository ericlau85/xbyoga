// app/moon-calendar/page.tsx
'use client';

import { useLanguage } from '../../lib/language-context';
import moonData from '../../data/moon-calendar.json';

export default function MoonCalendarPage() {
  const { language } = useLanguage();
  
  const content = moonData[language as keyof typeof moonData];
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

      {content.years.map((yearData, yearIndex) => (
        <section key={yearIndex} className="moon-calendar-section">
          <div className="container">
            <h2 className="year-title">{yearData.year}</h2>
            <div className="moon-table">
              {/* 表头 */}
              <div className="moon-header">
                <div className="month-header">{content.tableHeaders.month}</div>
                <div className="phase-header">{content.tableHeaders.newMoon}</div>
                <div className="phase-header">{content.tableHeaders.fullMoon}</div>
              </div>

              {/* 月份数据行 */}
              {yearData.months.map((month, monthIndex) => (
                <div key={monthIndex} className="moon-row">
                  <div className="month-name">{month.month}</div>
                  
                  {/* 新月时间 */}
                  <div className="phase-times">
                    <div className={`time-pair ${month.newMoon.nextDay ? 'next-day' : ''}`}>
                      <div className="main-time">
                        {month.newMoon.local}
                        {month.newMoon.nextDay && <span className="next-day-marker"> *</span>}
                      </div>
                      <div className="utc-reference">UTC: {month.newMoon.utc}</div>
                    </div>
                  </div>
                  
                  {/* 满月时间 - 支持多次满月 */}
                  <div className="phase-times">
                    {Array.isArray(month.fullMoons) ? (
                      <div className="multiple-fullmoons">
                        {month.fullMoons.map((fullMoon, index) => (
                          <div key={index} className={`time-pair ${fullMoon.nextDay ? 'next-day' : ''}`}>
                            <div className="main-time">
                              {fullMoon.local}
                              {fullMoon.nextDay && <span className="next-day-marker"> *</span>}
                            </div>
                            <div className="utc-reference">UTC: {fullMoon.utc}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`time-pair ${month.fullMoon.nextDay ? 'next-day' : ''}`}>
                        <div className="main-time">
                          {month.fullMoon.local}
                          {month.fullMoon.nextDay && <span className="next-day-marker"> *</span>}
                        </div>
                        <div className="utc-reference">UTC: {month.fullMoon.utc}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 图例说明 */}
            {yearIndex === content.years.length - 1 && (
              <div className="legend">
                <div className="legend-item">
                  <span className="next-day-marker">*</span>
                  <span>{content.legend}</span>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
