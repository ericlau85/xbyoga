'use client';

import { useLanguage } from '../../lib/language-context';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Link from 'next/link';

// 三分类七文章结构
const categories = [
  {
    id: 'yoga-foundation',
    title_en: 'Yoga Foundation',
    title_zh: '瑜伽基础',
    subtitle_en: 'Asana, Pranayama & Practice Methods',
    subtitle_zh: '体式、调息与练习方法',
    description_en: 'Systematic learning of yoga asana Sanskrit names, pranayama principles and techniques, establishing a complete yoga practice system.',
    description_zh: '系统学习瑜伽体式梵文名称、调息法原理与技巧，建立完整的瑜伽练习体系。',
    articles: [
      {
        slug: 'asanas',
        title_en: 'ASHTANGA ASANAS SANSKRIT GUIDE',
        title_zh: '阿斯汤加体式梵文释义',
        excerpt_en: 'In-depth exploration of pranayama philosophical foundations, technical essentials and practice methods, including bandha application and nadi purification techniques.',
        excerpt_zh: '详细解析阿斯汤加瑜伽体式的梵文名称、词源构成及准确发音，理解每个体式名称的深层含义。',
        order: 1
      },
      {
        slug: 'pranayama',
        title_en: 'PRANAYAMA PRINCIPLES & PRACTICE',
        title_zh: '调息法原理与实践',
        excerpt_en: 'Complete guide to breathing techniques, energy control and prana management.',
        excerpt_zh: '深入探讨调息法的哲学基础、技术要点和实践方法，包括锁印运用和气脉净化等高级技巧。',
        order: 2
      },
      {
        slug: 'practice',
        title_en: 'ASANA PRACTICE METHODS',
        title_zh: '体式练习方法',
        excerpt_en: 'Step-by-step guidance for each asana practice method, including breath coordination, movement sequences and precautions for clear practice instruction.',
        excerpt_zh: '逐步讲解每个体式的具体练习方法，包括呼吸配合、动作序列和注意事项，提供清晰的练习指导。',
        order: 3
      }
    ]
  },
  {
    id: 'sanskrit-wisdom',
    title_en: 'Sanskrit Wisdom',
    title_zh: '梵语智慧',
    subtitle_en: 'Alphabet, Grammar & Sacred Chants',
    subtitle_zh: '梵语字母、语法与神圣唱诵',
    description_en: 'Systematic learning of Sanskrit alphabet pronunciation, grammar rules, sandhi changes, traditional chants and mantras.',
    description_zh: '系统学习梵语字母发音、语法规则、连音变化，以及传统唱诵、曼陀罗和吠陀赞歌。',
    articles: [
      {
        slug: 'sanskritalphabet',
        title_en: 'SANSKRIT ALPHABET & GRAMMAR SYSTEM',
        title_zh: '梵语字母与语法体系',
        excerpt_en: 'Complete study of 16 vowels and 33 consonants with pronunciation points, writing rules, syllable division, sandhi changes and core grammatical structures.',
        excerpt_zh: '完整学习16个元音和33个辅音的发音要点、书写规则和核心语法结构。',
        order: 4
      },
      {
        slug: 'mantras',
        title_en: 'SANSKRIT SACRED SOUNDS & CHANT COLLECTION',
        title_zh: '梵语圣音与唱诵集',
        excerpt_en: 'Learn traditional chants including seed syllables, short mantras, Vedic hymns, philosophical maxims, ritual recitations and peace invocations with accurate pronunciation and profound meanings.',
        excerpt_zh: '学习传统唱诵，包括种子音节、短咒、吠陀赞歌、哲学格言、仪式诵文和平安祈请，掌握准确的发音和深刻含义。',
        order: 5
      }
    ]
  },
  {
    id: 'yoga-philosophy',
    title_en: 'Yoga Philosophy',
    title_zh: '瑜伽哲学',
    subtitle_en: 'Yoga Sutras Wisdom & Philosophical System',
    subtitle_zh: '《瑜伽经》智慧与哲学体系',
    description_en: 'Systematic learning of Patanjali\'s 196 Yoga Sutras, understanding consciousness structure and eightfold path.',
    description_zh: '系统学习帕坦伽利《瑜伽经》196条经文，深入理解心识结构和八支修行。',
    articles: [
      {
        slug: 'yogasutras',
        title_en: 'YOGA SUTRAS: COMPLETE TRANSLATION & STUDY',
        title_zh: '《瑜伽经》全文译注与研究',
        excerpt_en: 'Comprehensive study of all 196 sutras across four chapters, featuring Sanskrit original, Roman transliteration, and English translation covering Samadhi, Sadhana, Vibhuti, and Kaivalya.',
        excerpt_zh: '完整学习《瑜伽经》四篇196条经文，包含梵文原文、国际转写和中文翻译，涵盖三昧品、修行品、神通品和解脱品。',
        order: 6
      },
      {
        slug: 'yogaphilosophy',
        title_en: 'CORE THEORIES OF YOGA PHILOSOPHY',
        title_zh: '瑜伽哲学核心理论解析',
        excerpt_en: 'In-depth analysis of key philosophical frameworks including four-layer consciousness, five causes of suffering, five sheaths theory, seven chakras system, and the eightfold path.',
        excerpt_zh: '深入解析心识四层结构、五苦因理论、五鞘学说、七轮系统和八支修行等瑜伽哲学核心理论体系。',
        order: 7
      }
    ]
  }
];

export default function KnowledgePage() {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden pt-12">
      
      <Navigation />
      
      {/* ============ 标题区域 ============ */}
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 md:py-10">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-light mb-3 md:mb-4 text-center px-2">
            {language === 'zh' ? '练习指南' : 'PRACTICE GUIDE'}
          </h1>
          <h2 className="text-lg md:text-lg text-gray-200 font-medium mb-3 md:mb-6 text-center px-2">
            {language === 'zh' ? '构建从基础到精通的系统化练习路径' : 'A Structured Learning Path from Foundation to Mastery'}
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl text-center mx-auto px-2 leading-snug">
            {language === 'zh'
              ? '本指南将带你系统掌握阿斯汤加瑜伽体式、梵语、哲学与方法，建立完整的个人知识体系'
              : 'This guide will lead you to systematically master Ashtanga Yoga asanas, Sanskrit, philosophy, and methodology, building a comprehensive personal knowledge framework.'
            }
          </p>
        </div>
      </div>
      
      {/* ============ 主要内容 ============ */}
      <div className="w-full flex justify-center px-3 sm:px-4 py-6 md:py-12">
        <div className="w-full max-w-4xl lg:max-w-6xl">
          
          {/* 分类循环 */}
          {categories.map((category) => (
            <section key={category.id} className="mb-8 md:mb-16 last:mb-0">
              {/* 分类标题 */}
              <div className="mb-4 md:mb-8 text-center px-2">
                <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2 md:mb-3">
                  {language === 'zh' ? category.title_zh : category.title_en}
                </h2>
                <p className="text-base md:text-lg text-red-800 mb-2 md:mb-4">
                  {language === 'zh' ? category.subtitle_zh : category.subtitle_en}
                </p>
                <p className="text-gray-600 text-xs md:text-sm max-w-3xl mx-auto leading-snug">
                  {language === 'zh' ? category.description_zh : category.description_en}
                </p>
              </div>
              
              {/* 文章列表 - 每行一个 */}
              <div className="space-y-3 md:space-y-6">
                {category.articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/knowledge/${article.slug}`}
                    aria-label={`Read article: ${language === 'zh' ? article.title_zh : article.title_en}`}
                    className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-green-800"
                  >
                    <div className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="flex-1 w-full">
                          <div className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3 group-hover:text-red-800 transition-colors">
                            {language === 'zh' ? article.title_zh : article.title_en}
                          </div>
                          <p className="text-gray-600 text-xs md:text-sm leading-snug">
                            {language === 'zh' ? article.excerpt_zh : article.excerpt_en}
                          </p>
                        </div>
                        <div className="mt-3 md:mt-0 md:ml-6 flex-shrink-0 self-start">
                          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-red-50 group-hover:bg-red-100 transition-colors">
                            <svg
                              className="w-4 h-4 md:w-5 md:h-5 text-red-800 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
          
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
