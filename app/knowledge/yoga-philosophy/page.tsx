// app/knowledge/yoga-philosophy/page.tsx
'use client';

import Link from 'next/link';
import { useLanguage } from '../../../lib/language-context';  // 修改导入路径

export default function YogaFoundationPage() {
  const { language } = useLanguage();  // 使用 Context

  const content = {
    en: {
      title: "Yoga Philosophy",
      subtitle: "Yoga Sutras Wisdom & Philosophical Systems",
      intro: "Systematic study of Patañjali's 196 Yoga Sutras, delving into consciousness structures, roots of suffering, and the eightfold path of practice.",
      articles: [
        {
          title: "SUTRAS STUDY",
          subtitle: "Yoga Sutras: Complete Translation & Study",
          description: "Comprehensive study of all 196 sutras across four chapters, featuring Sanskrit original, Roman transliteration, and English translation covering Samadhi, Sadhana, Vibhuti, and Kaivalya.",
          icon: "fas fa-book",
          link: "/knowledge/yoga-philosophy/sutras"
        },
        {
          title: "PHILOSOPHICAL SYSTEMS",
          subtitle: "Core Theories of Yoga Philosophy",
          description: "In-depth analysis of key philosophical frameworks including four-layer consciousness, five causes of suffering, five sheaths theory, seven chakras system, and the eightfold path.",
          icon: "fas fa-brain",
          link: "/knowledge/yoga-philosophy/systems"
        }
      ]
    },
    zh: {
      title: "瑜伽哲学",
      subtitle: "《瑜伽经》智慧与哲学体系",
      intro: "系统学习帕坦伽利《瑜伽经》196条经文，深入理解心识结构、痛苦根源、八支修行等核心哲学体系。",
      articles: [
        {
          title: "经文精讲",
          subtitle: "《瑜伽经》全文译注与研究",
          description: "完整学习《瑜伽经》四篇196条经文，包含梵文原文、国际转写和中文翻译，涵盖三昧品、修行品、神通品和解脱品。",
          icon: "fas fa-book",
          link: "/knowledge/yoga-philosophy/sutras"
        },
        {
          title: "哲学体系",
          subtitle: "瑜伽哲学核心理论解析",
          description: "深入解析心识四层结构、五苦因理论、五鞘学说、七轮系统和八支修行等瑜伽哲学核心理论体系。",
          icon: "fas fa-brain",
          link: "/knowledge/yoga-philosophy/systems"
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
