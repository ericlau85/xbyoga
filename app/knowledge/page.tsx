// app/knowledge/page.tsx
'use client';

import Link from 'next/link';
import { useLanguage } from '../../lib/language-context';  // 修改导入路径

export default function KnowledgePage() {
  const { language } = useLanguage();  // 使用 Context

  const content = {
    en: {
      title: "Knowledge Base",
      subtitle: "Systematic learning of yoga asana, Sanskrit wisdom and philosophy",
      categories: [
        {
          title: "Yoga Foundation",
          description: "Complete Ashtanga sequence with Sanskrit names, practice methods, and pranayama techniques",
          icon: "fas fa-seedling",
          articleCount: "3 Articles",
          link: "/knowledge/yoga-foundation"
        },
        {
          title: "Sanskrit Wisdom",
          description: "Sanskrit alphabet, grammar rules, and traditional chants including mantras and Vedic hymns",
          icon: "fas fa-om",
          articleCount: "3 Articles",
          link: "/knowledge/sanskrit-wisdom"
        },
        {
          title: "Yoga Philosophy",
          description: "Patanjali's Yoga Sutras with 196 verses and core philosophical systems of yoga",
          icon: "fas fa-book-open",
          articleCount: "2 Articles",
          link: "/knowledge/yoga-philosophy"
        }
      ]
    },
    zh: {
      title: "知识库",
      subtitle: "系统学习瑜伽体式、梵语智慧和哲学体系",
      categories: [
        {
          title: "瑜伽基础",
          description: "完整的阿斯汤加序列体式列表、练习方法和调息技巧",
          icon: "fas fa-seedling",
          articleCount: "3篇文章",
          link: "/knowledge/yoga-foundation"
        },
        {
          title: "梵语智慧",
          description: "梵语字母、语法规则和传统唱诵，包括曼陀罗和吠陀赞歌",
          icon: "fas fa-om",
          articleCount: "3篇文章",
          link: "/knowledge/sanskrit-wisdom"
        },
        {
          title: "瑜伽哲学",
          description: "帕坦伽利《瑜伽经》196条经文及瑜伽哲学核心体系",
          icon: "fas fa-book-open",
          articleCount: "2篇文章",
          link: "/knowledge/yoga-philosophy"
        }
      ]
    }
  };

  const pageContent = content[language];

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">{pageContent.title}</h1>
          <p className="hero-subtitle">{pageContent.subtitle}</p>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="categories-grid">
            {pageContent.categories.map((category, index) => (
              <Link key={index} href={category.link} className="category-card">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                  <span className="article-count">{category.articleCount}</span>
                </div>
                <div className="category-arrow">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
