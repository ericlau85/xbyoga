'use client';

import Link from 'next/link';
import { useLanguage } from '../../../../lib/language-context';

export default function AlphabetPage() {
  const { language } = useLanguage();

  const pageContent = {
    en: {
      title: "Sanskrit Alphabet & Grammar",
      subtitle: "Sanskrit Alphabet and Grammar System",
      description: "Complete study of 16 vowels and 33 consonants with pronunciation points, writing rules, syllable division, sandhi changes and core grammatical structures.",
      developing: "Under Development",
      developingDescription: "We are working hard to develop this page. Please check back later.",
      back: "Back to Sanskrit Wisdom"
    },
    zh: {
      title: "字母语法",
      subtitle: "梵语字母与语法体系",
      description: "完整学习16个元音和33个辅音，包括发音要点、书写规则、音节划分、连音变化和核心语法结构。",
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
