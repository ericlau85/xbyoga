'use client';

import Link from 'next/link';
import { useLanguage } from '../../../../lib/language-context';

export default function SutrasPage() {
  const { language } = useLanguage();

  const pageContent = {
    en: {
      title: "Yoga Sutras Study",
      subtitle: "Complete Translation and Study of Yoga Sutras",
      developing: "Under Development",
      description: "We are working hard to develop this page. Please check back later.",
      back: "Back to Yoga Philosophy"
    },
    zh: {
      title: "经文精讲",
      subtitle: "《瑜伽经》全文译注与研究",
      developing: "开发中",
      description: "我们正在努力开发此页面，请稍后再来查看。",
      back: "返回瑜伽哲学"
    }
  };

  const content = pageContent[language];

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
        </div>
      </section>
      
      <section className="content-section">
        <div className="container">
          <div className="content-card">
            <h3>{content.developing}</h3>
            <p>{content.description}</p>
            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <Link href="/knowledge/yoga-philosophy" className="tab active" style={{textDecoration: 'none'}}>
                {content.back}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
