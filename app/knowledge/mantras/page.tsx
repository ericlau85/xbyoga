'use client';

import { useLanguage } from '../../../lib/language-context';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

export default function SanskritAlphabetPage() {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* 文章内容区域 - 极简设计 */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-light text-gray-800 mb-6">
          {language === 'zh' ? '梵语字母入门' : 'Sanskrit Alphabet Basics'}
        </h1>
        
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-sm font-medium text-red-800 bg-red-50 rounded-full mr-4">
            {language === 'zh' ? '基础' : 'Foundation'}
          </span>
          <span className="text-gray-500 text-sm">
            {language === 'zh' ? '预计阅读时间：10分钟' : 'Estimated reading: 10 minutes'}
          </span>
        </div>
        
        {/* 占位内容 */}
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6 text-lg">
            {language === 'zh'
              ? '梵语是世界上最古老的语言之一，也是瑜伽的传统语言。学习梵语字母是理解梵唱、经文和体式名称的基础。'
              : 'Sanskrit is one of the oldest languages in the world and the traditional language of yoga. Learning the Sanskrit alphabet is fundamental to understanding chants, scriptures, and posture names.'
            }
          </p>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              {language === 'zh' ? '这篇文章包含：' : 'This article includes:'}
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>{language === 'zh' ? '梵语字母表' : 'The Sanskrit alphabet'}</li>
              <li>{language === 'zh' ? '发音指南' : 'Pronunciation guide'}</li>
              <li>{language === 'zh' ? '常见梵语词汇' : 'Common Sanskrit vocabulary'}</li>
              <li>{language === 'zh' ? '练习发音的方法' : 'Methods to practice pronunciation'}</li>
            </ul>
          </div>
          
          <p className="text-gray-600 mb-6">
            {language === 'zh'
              ? '完整的文章内容稍后添加...'
              : 'Full article content will be added soon...'
            }
          </p>
        </div>
        
        {/* 返回按钮 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/knowledge"
            className="inline-flex items-center text-red-800 hover:text-red-900 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {language === 'zh' ? '返回知识库' : 'Back to Knowledge Base'}
          </a>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}
