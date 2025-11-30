'use client';

import Link from 'next/link';
import { useLanguage } from '../../../../lib/language-context';

export default function ChantsPage() {
  const { language } = useLanguage();

  const pageContent = {
    en: {
      title: "Sanskrit Sacred Sounds & Chants",
      subtitle: "Sanskrit Sacred Sounds and Chanting Collection",
      description: "Learn traditional chants including seed syllables, short mantras, Vedic hymns, philosophical maxims, ritual recitations and peace invocations.",
      developing: "Under Development",
      developingDescription: "We are working hard to develop this page. Please check back later.",
      back: "Back to Sanskrit Wisdom"
    },
    zh: {
      title: "圣音唱诵",
      subtitle: "梵语圣音与唱诵集",
      description: "学习传统唱诵，包括种子音节、短咒、吠陀赞歌、哲学格言、仪式诵文和平安祈请。",
      developing: "开发中",
      developingDescription: "我们正在努力开发此页面，请稍后再来查看。",
      back: "返回梵语智慧"
    }
  };

  const content = pageContent[language];

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <p className="hero-description">
            {content.description}
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-card">
            <h3>{content.developing}</h3>
            <p>{content.developingDescription}</p>
            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <Link href="/knowledge/sanskrit-wisdom" className="tab active" style={{textDecoration: 'none'}}>
                {content.back}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
