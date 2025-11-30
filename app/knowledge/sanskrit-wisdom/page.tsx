// app/knowledge/sanskrit-wisdom/page.tsx
'use client';

import Link from 'next/link';
import { useLanguage } from '../../../lib/language-context';  // 修改导入路径

export default function YogaFoundationPage() {
  const { language } = useLanguage();  // 使用 Context

  const content = {
    en: {
      title: "Sanskrit Wisdom",
      subtitle: "Sanskrit Alphabet, Grammar & Sacred Chants",
      intro: "Systematic study of Sanskrit alphabet pronunciation, grammar rules, sandhi changes, and traditional chants, mantras and Vedic hymns with accurate pronunciation and meanings.",
      articles: [
        {
          title: "ALPHABET & GRAMMAR",
          subtitle: "Sanskrit Alphabet & Grammar System",
          description: "Complete study of 16 vowels and 33 consonants with pronunciation points, writing rules, syllable division, sandhi changes and core grammatical structures.",
          icon: "fas fa-language",
          link: "/knowledge/sanskrit-wisdom/alphabet"
        },
        {
          title: "SACRED CHANTS",
          subtitle: "Sanskrit Sacred Sounds & Chant Collection",
          description: "Learn traditional chants including seed syllables, short mantras, Vedic hymns, philosophical maxims, ritual recitations and peace invocations with accurate pronunciation and profound meanings.",
          icon: "fas fa-om",
          link: "/knowledge/sanskrit-wisdom/chants"
        }
      ]
    },
    zh: {
      title: "梵语智慧",
      subtitle: "梵语字母、语法与神圣唱诵",
      intro: "系统学习梵语字母发音、语法规则、连音变化，以及传统唱诵、曼陀罗和吠陀赞歌，掌握准确的发音和深刻含义。",
      articles: [
        {
          title: "字母语法",
          subtitle: "梵语字母与语法体系",
          description: "完整学习16个元音和33个辅音的发音要点、书写规则、音节划分、连音变化和核心语法结构。",
          icon: "fas fa-language",
          link: "/knowledge/sanskrit-wisdom/alphabet"
        },
        {
          title: "圣音唱诵",
          subtitle: "梵语圣音与唱诵集",
          description: "学习传统唱诵，包括种子音节、短咒、吠陀赞歌、哲学格言、仪式诵文和平安祈请，掌握准确的发音和深刻含义。",
          icon: "fas fa-om",
          link: "/knowledge/sanskrit-wisdom/chants"
        }
      ]
    }
  };

  const pageContent = content[language as keyof typeof content] || content.en;

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">{pageContent.title}</h1>
          <p className="hero-subtitle">{pageContent.subtitle}</p>
          <p className="hero-description">{pageContent.intro}</p>
        </div>
      </section>

      <section className="articles-section">
        <div className="container">
          <div className="articles-grid">
            {pageContent.articles.map((article, index) => (
              <Link key={index} href={article.link} className="article-card">
                <div className="article-icon">
                  <i className={article.icon}></i>
                </div>
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p className="article-subtitle">{article.subtitle}</p>
                  <p>{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
