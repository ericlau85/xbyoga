// app/knowledge/yoga-foundation/page.tsx
'use client';

import Link from 'next/link';
import { useLanguage } from '../../../lib/language-context';

export default function YogaFoundationPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Yoga Foundation",
      subtitle: "Asanas, Pranayama & Practice Methods",
      intro: "Systematic study of yoga asana Sanskrit names, pranayama principles and techniques to establish a complete yoga practice system.",
      articles: [
        {
          title: "ASANA SANSKRIT",
          subtitle: "Ashtanga Asanas Sanskrit Guide",
          description: "Detailed analysis of Ashtanga yoga asana Sanskrit names, etymology and accurate pronunciation to understand the deeper meaning of each posture.",
          icon: "fas fa-language",
          link: "/knowledge/yoga-foundation/asana"
        },
        {
          title: "PRACTICE METHODS",
          subtitle: "Asana Practice Elucidation",
          description: "Step-by-step guidance for each asana practice method, including breath coordination, movement sequences and precautions for clear practice instruction.",
          icon: "fas fa-user-check",
          link: "/knowledge/yoga-foundation/practice"
        },
        {
          title: "PRANAYAMA",
          subtitle: "Pranayama Principles & Practice",
          description: "In-depth exploration of pranayama philosophical foundations, technical essentials and practice methods, including bandha application and nadi purification techniques.",
          icon: "fas fa-wind",
          link: "/knowledge/yoga-foundation/pranayama"
        }
      ]
    },
    zh: {
      title: "瑜伽基础",
      subtitle: "体式、调息与练习方法",
      intro: "系统学习瑜伽体式梵文名称、调息法原理与技巧，建立完整的瑜伽练习体系。",
      articles: [
        {
          title: "体式梵文",
          subtitle: "阿斯汤加体式梵文释义",
          description: "详细解析阿斯汤加瑜伽体式的梵文名称、词源构成及准确发音，理解每个体式名称的深层含义。",
          icon: "fas fa-language",
          link: "/knowledge/yoga-foundation/asana"
        },
        {
          title: "体式方法",
          subtitle: "体式练习详解",
          description: "逐步讲解每个体式的具体练习方法，包括呼吸配合、动作序列和注意事项，提供清晰的练习指导。",
          icon: "fas fa-user-check",
          link: "/knowledge/yoga-foundation/practice"
        },
        {
          title: "调息法",
          subtitle: "调息法原理与实践",
          description: "深入探讨调息法的哲学基础、技术要点和实践方法，包括锁印运用和气脉净化等高级技巧。",
          icon: "fas fa-wind",
          link: "/knowledge/yoga-foundation/pranayama"
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
