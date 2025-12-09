'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function SanskritAlphabetPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'alphabet' | 'vowels' | 'consonants' | 'conjuncts' | 'syllables' | 'sandhi'>('alphabet');

  const sanskritData = {
    en: {
      title: "Sanskrit Alphabet System",
      subtitle: "संस्कृत अक्षर",
      intro: "A Sanskrit alphabet learning guide compiled for Ashtanga Yoga practitioners, covering pronunciation, writing, and chakra correspondences.",
      sections: {
        alphabet: {
          title: "Alphabet",
          content: "Comprehensive Sanskrit alphabet system"
        },
        vowels: {
          title: "Vowels",
          content: "Sanskrit vowel system: स्वराः svarāḥ"
        },
        consonants: {
          title: "Consonants",
          content: "Sanskrit consonant system: व्यञ्जनानि vyañjanāni"
        },
        conjuncts: {
          title: "Compound Letters",
          content: "Compound consonants: संयुक्ताक्षराणि saṃyuktākṣarāṇi"
        },
        syllables: {
          title: "Syllable Structure",
          content: "Syllable formation and pronunciation rules"
        },
        sandhi: {
          title: "Sandhi Rules",
          content: "Euphonic combination rules in Sanskrit"
        }
      },
      // 其他标签页为空数据
      vowels: [],
      consonants: [],
      conjuncts: [],
      syllables: [],
      sandhi: []
    },
    zh: {
      title: "梵语字母系统",
      subtitle: "संस्कृत अक्षर",
      intro: "为阿斯汤加瑜伽练习者编撰的梵语字母学习指南，包含发音、书写及脉轮对应关系。",
      sections: {
        alphabet: {
          title: "字母表",
          content: "完整的梵语字母系统"
        },
        vowels: {
          title: "元音",
          content: "梵语元音系统：स्वराः svarāḥ"
        },
        consonants: {
          title: "辅音",
          content: "梵语辅音系统：व्यञ्जनानि vyañjanāni"
        },
        conjuncts: {
          title: "复合字母",
          content: "复合辅音：संयुक्ताक्षराणि saṃyuktākṣarāṇi"
        },
        syllables: {
          title: "音节结构",
          content: "音节构成与发音规则"
        },
        sandhi: {
          title: "连音规则",
          content: "梵语中的音变组合规则"
        }
      },
      // 其他标签页为空数据
      vowels: [],
      consonants: [],
      conjuncts: [],
      syllables: [],
      sandhi: []
    }
  };

  const sanskritContent = sanskritData[language as keyof typeof sanskritData];

  // 定义标签配置
  const sectionTabs = {
    alphabet: sanskritContent.sections.alphabet.title,
    vowels: sanskritContent.sections.vowels.title,
    consonants: sanskritContent.sections.consonants.title,
    conjuncts: sanskritContent.sections.conjuncts.title,
    syllables: sanskritContent.sections.syllables.title,
    sandhi: sanskritContent.sections.sandhi.title
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-12">
        {/* 文章标题部分 */}
        <div className="max-w-6xl mx-auto px-4 pt-4 pb-2 md:pt-6 md:pb-3">
          <h1 className="text-base md:text-lg font-medium text-gray-900 mb-1 tracking-tight">
            {sanskritContent.title}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-1.5">
            {sanskritContent.subtitle}
          </p>
          <p className="text-xs md:text-sm text-gray-700 mb-3 leading-snug">
            {sanskritContent.intro}
          </p>
        </div>

        {/* SectionTabs 组件 */}
        <SectionTabs
          sections={sectionTabs}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* 内容区域 */}
        <div className="max-w-6xl mx-auto px-4 pb-6 md:pb-8">
          {activeSection === 'alphabet' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sanskritContent.sections.alphabet.content}
              </h2>
              
              {/* 梵语简介部分 */}
              <div className="bg-gradient-to-r from-gray-50 to-white p-4 md:p-6 rounded-lg border border-gray-100 mb-6">
                <div className="space-y-4">
                  <div className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    <div className="mb-2">
                      <div className="font-sans text-sm mb-1">梵语 Sanskrit</div>
                      <div className="font-sans text-sm mb-1">संस्कृतम् saṃskṛtam</div>
                    </div>
                    <p className="mb-2">
                      {language === 'zh'
                        ? 'संस्कृत的字面意义为"精炼、净化、完善"，因此梵语被视为"神圣的言语"（देवभाषा devabhāṣā）。作为印欧语系印度-伊朗语族中最古老的语言之一，梵语是古代印度宗教、哲学、文学与科学的主要载体。'
                        : 'The literal meaning of संस्कृत is "refined, purified, perfected," thus Sanskrit is called the "divine language" (देवभाषा devabhāṣā). As one of the oldest languages in the Indo-Iranian branch of the Indo-European language family, Sanskrit was the primary vehicle for ancient Indian religion, philosophy, literature, and science.'}
                    </p>
                    <div className="mt-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      {language === 'zh'
                        ? '梵语字母表被称为 वर्णमाला varṇamālā（字面义"字母花环"）。传统梵语音系包含16个元音（स्वराः svarāḥ）与33个辅音（व्यञ्जनानि vyañjanāni）。'
                        : 'The Sanskrit alphabet is called वर्णमाला varṇamālā (literally "garland of letters"). Traditional Sanskrit phonology contains 16 vowels (स्वराः svarāḥ) and 33 consonants (व्यञ्जनानि vyañjanāni).'}
                    </div>
                  </div>
                  
                  {/* 文字系统部分 */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">
                      {language === 'zh' ? '文字系统 • लिपिः' : 'Writing System • लिपिः'}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-xs font-medium text-gray-700 mb-1">
                          {language === 'zh' ? '1. 天城文 Devanāgarī' : '1. Devanāgarī Script'}
                        </h5>
                        <p className="text-xs text-gray-700">
                          {language === 'zh'
                            ? 'देवनागरी devanāgarī 是书写梵语最常用的文字系统，亦用于书写印地语（हिन्दी hindī）、马拉地语（मराठी marāṭhī）、尼泊尔语（नेपाली nepālī）等多种现代印度语言。天城文为音节文字，每个字符代表一个音节，辅音字母默认包含短元音 अ（a）。'
                            : 'देवनागरी devanāgarī is the most commonly used writing system for Sanskrit, also used for modern Indian languages such as Hindi (हिन्दी hindī), Marathi (मराठी marāṭhī), and Nepali (नेपाली nepālī). Devanāgarī is a syllabic script where each character represents a syllable, and consonants inherently include the short vowel अ (a).'}
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="text-xs font-medium text-gray-700 mb-1">
                          {language === 'zh' ? '2. 国际梵文转写标准' : '2. International Transliteration Standards'}
                        </h5>
                        <ul className="text-xs text-gray-700 space-y-1.5 ml-0.5">
                          <li className="flex items-start">
                            <span className="mr-1.5 mt-0.5">•</span>
                            <span>
                              {language === 'zh'
                                ? 'IAST（International Alphabet of Sanskrit Transliteration）是学术领域最广泛采用的梵文拉丁转写方案，严格遵循"一音一符"原则，完整保留梵语音系特征。'
                                : 'IAST (International Alphabet of Sanskrit Transliteration) is the most widely adopted Latin transliteration scheme for Sanskrit in academic fields, strictly following the "one sound, one symbol" principle and preserving complete Sanskrit phonological features.'}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-1.5 mt-0.5">•</span>
                            <span>
                              {language === 'zh'
                                ? 'ISO-15919 为国际标准化组织制定的转写规范，与IAST的主要区别包括：ṛ → r̥，ṝ → r̥̄，ḷ → l̥，ḹ → l̥̄，e → ē，o → ō，aṃ → aṁ'
                                : 'ISO-15919 is an international standardization organization transliteration standard. Main differences from IAST include: ṛ → r̥, ṝ → r̥̄, ḷ → l̥, ḹ → l̥̄, e → ē, o → ō, aṃ → aṁ'}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 字母表格部分 */}
              <div className="space-y-6">
                {/* 元音卡片 - 7列布局 */}
                <div>
                  <div className="grid grid-cols-7 gap-2">
                    {/* 第一行：5个短元音 + 2个空位 */}
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">अ</div>
                      <div className="text-xs italic text-gray-600">a</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">इ</div>
                      <div className="text-xs italic text-gray-600">i</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">उ</div>
                      <div className="text-xs italic text-gray-600">u</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ऋ</div>
                      <div className="text-xs italic text-gray-600">ṛ</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ऌ</div>
                      <div className="text-xs italic text-gray-600">ḷ</div>
                    </div>
                    <div className="p-2"></div>
                    <div className="p-2"></div>
                    
                    {/* 第二行：5个长元音 + 2个空位 */}
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">आ</div>
                      <div className="text-xs italic text-gray-600">ā</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ई</div>
                      <div className="text-xs italic text-gray-600">ī</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ऊ</div>
                      <div className="text-xs italic text-gray-600">ū</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ॠ</div>
                      <div className="text-xs italic text-gray-600">ṝ</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ॡ</div>
                      <div className="text-xs italic text-gray-600">ḹ</div>
                    </div>
                    <div className="p-2"></div>
                    <div className="p-2"></div>
                    
                    {/* 第三行：4个复合元音 + 空位 + 2个辅助元音 */}
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ए</div>
                      <div className="text-xs italic text-gray-600">e</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ऐ</div>
                      <div className="text-xs italic text-gray-600">ai</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ओ</div>
                      <div className="text-xs italic text-gray-600">o</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">औ</div>
                      <div className="text-xs italic text-gray-600">au</div>
                    </div>
                    <div className="p-2"></div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">अं</div>
                      <div className="text-xs italic text-gray-600">aṃ</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">अः</div>
                      <div className="text-xs italic text-gray-600">aḥ</div>
                    </div>
                  </div>
                </div>
                
                {/* 空行分隔 */}
                <div className="py-4">
                  <div className="border-t border-gray-300"></div>
                </div>
                
                {/* 辅音卡片 */}
                <div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                    {/* 喉音 */}
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">क्</div>
                      <div className="text-xs italic text-gray-600">k</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ख्</div>
                      <div className="text-xs italic text-gray-600">kh</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ग्</div>
                      <div className="text-xs italic text-gray-600">g</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">घ्</div>
                      <div className="text-xs italic text-gray-600">gh</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ङ्</div>
                      <div className="text-xs italic text-gray-600">ṅ</div>
                    </div>
                    <div className="p-2"></div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ह्</div>
                      <div className="text-xs italic text-gray-600">h</div>
                    </div>
                    
                    {/* 颚音 */}
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">च्</div>
                      <div className="text-xs italic text-gray-600">c</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">छ्</div>
                      <div className="text-xs italic text-gray-600">ch</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ज्</div>
                      <div className="text-xs italic text-gray-600">j</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">झ्</div>
                      <div className="text-xs italic text-gray-600">jh</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ञ्</div>
                      <div className="text-xs italic text-gray-600">ñ</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">य्</div>
                      <div className="text-xs italic text-gray-600">y</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">श्</div>
                      <div className="text-xs italic text-gray-600">ś</div>
                    </div>
                    
                    {/* 卷舌音 */}
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ट्</div>
                      <div className="text-xs italic text-gray-600">ṭ</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ठ्</div>
                      <div className="text-xs italic text-gray-600">ṭh</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ड्</div>
                      <div className="text-xs italic text-gray-600">ḍ</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ढ्</div>
                      <div className="text-xs italic text-gray-600">ḍh</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ण्</div>
                      <div className="text-xs italic text-gray-600">ṇ</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">र्</div>
                      <div className="text-xs italic text-gray-600">r</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ष्</div>
                      <div className="text-xs italic text-gray-600">ṣ</div>
                    </div>
                    
                    {/* 齿音 */}
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">त्</div>
                      <div className="text-xs italic text-gray-600">t</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">थ्</div>
                      <div className="text-xs italic text-gray-600">th</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">द्</div>
                      <div className="text-xs italic text-gray-600">d</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ध्</div>
                      <div className="text-xs italic text-gray-600">dh</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">न्</div>
                      <div className="text-xs italic text-gray-600">n</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ल्</div>
                      <div className="text-xs italic text-gray-600">l</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">स्</div>
                      <div className="text-xs italic text-gray-600">s</div>
                    </div>
                    
                    {/* 唇音 */}
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">प्</div>
                      <div className="text-xs italic text-gray-600">p</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">फ्</div>
                      <div className="text-xs italic text-gray-600">ph</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">ब्</div>
                      <div className="text-xs italic text-gray-600">b</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">भ्</div>
                      <div className="text-xs italic text-gray-600">bh</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">म्</div>
                      <div className="text-xs italic text-gray-600">m</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center hover:bg-gray-50/30 min-h-[80px]">
                      <div className="font-sans text-lg mb-1">व्</div>
                      <div className="text-xs italic text-gray-600">v</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 音系特征部分 */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-800 mb-6">
                  {language === 'zh' ? '音系特征' : 'Phonological Features'}
                </h3>
                
                <div className="space-y-6">
                  {/* 音长系统 */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-medium text-gray-700">
                      {language === 'zh' ? '一、音长系统 • काल kāla' : 'I. Length System • काल kāla'}
                    </h4>
                    <p className="text-xs text-gray-700">
                      {language === 'zh'
                        ? '梵语元音按音长分为三类：'
                        : 'Sanskrit vowels are classified into three categories by length:'}
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1.5 ml-0.5">
                      <li className="flex items-start">
                        <span className="mr-1.5 mt-0.5">1.</span>
                        <span>
                          {language === 'zh'
                            ? '短元音 ह्रस्व hrasva • 1音节单位（मात्रा mātrā） • 如：अ a、इ i、उ u'
                            : 'Short vowels ह्रस्व hrasva • 1 syllable unit (मात्रा mātrā) • e.g.: अ a, इ i, उ u'}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-1.5 mt-0.5">2.</span>
                        <span>
                          {language === 'zh'
                            ? '长元音 दीर्घ dīrgha • 2音节单位 • 如：आ ā、ई ī、ऊ ū'
                            : 'Long vowels दीर्घ dīrgha • 2 syllable units • e.g.: आ ā, ई ī, ऊ ū'}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-1.5 mt-0.5">3.</span>
                        <span>
                          {language === 'zh'
                            ? '延长元音 प्लुत pluta • 3音节单位（主要用于吠陀文献） • 如：आ३ ā³'
                            : 'Prolonged vowels प्लुत pluta • 3 syllable units (mainly used in Vedic texts) • e.g.: आ३ ā³'}
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* 音调系统 */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-medium text-gray-700">
                      {language === 'zh' ? '二、音调系统 • स्वराः svarāḥ' : 'II. Tone System • स्वराः svarāḥ'}
                    </h4>
                    <div className="text-xs text-gray-700 bg-gray-50 p-2 rounded mb-2">
                      {language === 'zh'
                        ? '注：古典梵语通常不标记音调，音调系统主要用于吠陀梵语（वैदिकसंस्कृतम्）。'
                        : 'Note: Classical Sanskrit usually does not mark tones; the tone system is primarily used in Vedic Sanskrit (वैदिकसंस्कृतम्).'}
                    </div>
                    <p className="text-xs text-gray-700">
                      {language === 'zh'
                        ? '吠陀梵语的三种基本音调：'
                        : 'Three basic tones in Vedic Sanskrit:'}
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1.5 ml-0.5">
                      <li className="flex items-start">
                        <span className="mr-1.5 mt-0.5">1.</span>
                        <span>
                          {language === 'zh'
                            ? '高调 उदात्त udātta • 标记：॑（如：अ॑ a̍）'
                            : 'High tone उदात्त udātta • Mark: ॑ (e.g.: अ॑ a̍)'}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-1.5 mt-0.5">2.</span>
                        <span>
                          {language === 'zh'
                            ? '低调 अनुदात्त anudātta • 标记：॒（如：अ॒ a̱）'
                            : 'Low tone अनुदात्त anudātta • Mark: ॒ (e.g.: अ॒ a̱)'}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-1.5 mt-0.5">3.</span>
                        <span>
                          {language === 'zh'
                            ? '降调/复合调 स्वरित svarita • 无独立符号，由高调后自然降调形成'
                            : 'Falling/compound tone स्वरित svarita • No independent symbol, formed by natural falling after high tone'}
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* 鼻音化 */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-medium text-gray-700">
                      {language === 'zh' ? '三、鼻音化 • आनुनासिक्यम् ānunāsikyam' : 'III. Nasalization • आनुनासिक्यम् ānunāsikyam'}
                    </h4>
                    <p className="text-xs text-gray-700">
                      {language === 'zh'
                        ? '所有梵语音素均可鼻音化，标记为 ँ（चन्द्रबिन्दु candra-bindu）。鼻音化可与其他语音特征（音长、音调）组合。'
                        : 'All Sanskrit phonemes can be nasalized, marked with ँ (चन्द्रबिन्दु candra-bindu). Nasalization can combine with other phonetic features (length, tone).'}
                    </p>
                  </div>
                  
                  {/* 音素组合示例 */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-medium text-gray-700">
                      {language === 'zh' ? '音素组合示例' : 'Phoneme Combination Examples'}
                    </h4>
                    
                    <p className="text-xs text-gray-700">
                      {language === 'zh'
                        ? '基于3种音长（短、长、延长）× 3种音调（高调、低调、降调/中性）× 2种鼻音状态（鼻音化/非鼻音化），每个音素理论上存在多种变体形式。'
                        : 'Based on 3 lengths (short, long, prolonged) × 3 tones (high, low, falling/neutral) × 2 nasal states (nasalized/non-nasalized), each phoneme theoretically has multiple variant forms.'}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-xs font-medium text-gray-700 mb-2">
                          {language === 'zh' ? '示例：以元音 अ a 为基础的音素组合' : 'Example: Phoneme combinations based on vowel अ a'}
                        </h5>
                        
                        <div className="space-y-3">
                          {/* 高调系列 */}
                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-1">
                              {language === 'zh' ? '高调系列（उदात्त udātta）' : 'High tone series (उदात्त udātta)'}
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs">
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">अ॑</div>
                                <div className="italic">a̍</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आ॑</div>
                                <div className="italic">ā̍</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आ॑३</div>
                                <div className="italic">ā̍³</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">अँ॑</div>
                                <div className="italic">ã̍</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आँ॑</div>
                                <div className="italic">ā̃̍</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आँ॑३</div>
                                <div className="italic">ā̃̍³</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* 低调系列 */}
                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-1">
                              {language === 'zh' ? '低调系列（अनुदात्त anudātta）' : 'Low tone series (अनुदात्त anudātta)'}
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs">
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">अ॒</div>
                                <div className="italic">a̱</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आ॒</div>
                                <div className="italic">ā̱</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आ॒३</div>
                                <div className="italic">ā̱³</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">अँ॒</div>
                                <div className="italic">ã̱</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आँ॒</div>
                                <div className="italic">ā̱̃</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आँ॒३</div>
                                <div className="italic">ā̱̃³</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* 中性系列 */}
                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-1">
                              {language === 'zh' ? '中性系列（古典梵语常规）' : 'Neutral series (Classical Sanskrit standard)'}
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs">
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">अ</div>
                                <div className="italic">a</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आ</div>
                                <div className="italic">ā</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आ३</div>
                                <div className="italic">ā³</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">अँ</div>
                                <div className="italic">ã</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आँ</div>
                                <div className="italic">ā̃</div>
                              </div>
                              <div className="border border-gray-200 rounded p-2 text-center">
                                <div className="font-sans">आँ३</div>
                                <div className="italic">ā̃³</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* 标记符号说明 */}
                      <div className="pt-4 border-t border-gray-200">
                        <h5 className="text-xs font-medium text-gray-700 mb-2">
                          {language === 'zh' ? '标记符号说明' : 'Symbol Explanation'}
                        </h5>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs border border-gray-300">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="border border-gray-300 p-2 text-left">{language === 'zh' ? '符号' : 'Symbol'}</th>
                                <th className="border border-gray-300 p-2 text-left">{language === 'zh' ? '名称' : 'Name'}</th>
                                <th className="border border-gray-300 p-2 text-left">{language === 'zh' ? '功能' : 'Function'}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-2 font-sans">ँ</td>
                                <td className="border border-gray-300 p-2">चन्द्रबिन्दु candra-bindu</td>
                                <td className="border border-gray-300 p-2">{language === 'zh' ? '鼻音化标记' : 'Nasalization mark'}</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-2 font-sans">॑</td>
                                <td className="border border-gray-300 p-2">उदात्त udātta</td>
                                <td className="border border-gray-300 p-2">{language === 'zh' ? '高调标记' : 'High tone mark'}</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-2 font-sans">॒</td>
                                <td className="border border-gray-300 p-2">अनुदात्त anudātta</td>
                                <td className="border border-gray-300 p-2">{language === 'zh' ? '低调标记' : 'Low tone mark'}</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-2 font-sans">३</td>
                                <td className="border border-gray-300 p-2">प्लुत pluta</td>
                                <td className="border border-gray-300 p-2">{language === 'zh' ? '延长音标记' : 'Prolongation mark'}</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-2 italic">̍</td>
                                <td className="border border-gray-300 p-2">IPA高调符号</td>
                                <td className="border border-gray-300 p-2">{language === 'zh' ? '国际音标高调标记' : 'IPA high tone symbol'}</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 p-2 italic">̱</td>
                                <td className="border border-gray-300 p-2">IPA低调符号</td>
                                <td className="border border-gray-300 p-2">{language === 'zh' ? '国际音标低调标记' : 'IPA low tone symbol'}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 脉轮对应关系 */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-800 mb-6">
                  {language === 'zh' ? '脉轮对应关系' : 'Chakra Correspondence'}
                </h3>
                
                <div className="space-y-4">
                  {/* 顶轮 */}
                  <div className="border border-gray-200 rounded p-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">
                      {language === 'zh' ? '顶轮 (सहस्रार, ॐ, 千瓣)' : 'Crown Chakra (सहस्रार, ॐ, Thousand petals)'}
                    </h4>
                    <div className="mb-2">
                      <div className="text-xs text-gray-600 mb-1">
                        {language === 'zh' ? '对应字母：' : 'Corresponding letter：'}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="font-sans text-xs bg-gray-100 px-1.5 py-0.5 rounded">ॐ</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'zh'
                        ? '神圣音节，代表宇宙的原始振动和意识的最高状态'
                        : 'Sacred syllable, representing the primordial vibration of the universe and the highest state of consciousness'}
                    </div>
                  </div>
                  
                  {/* 额轮 */}
                  <div className="border border-gray-200 rounded p-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">
                      {language === 'zh' ? '额轮 (उँ, 2 花瓣)' : 'Brow Chakra (उँ, 2 petals)'}
                    </h4>
                    <div className="mb-2">
                      <div className="text-xs text-gray-600 mb-1">
                        {language === 'zh' ? '对应字母：' : 'Corresponding letters：'}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {['ह्', 'क्ष'].map((letter, letterIdx) => (
                          <span key={letterIdx} className="font-sans text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                            {letter}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'zh' ? '喉擦音和特殊复合辅音' : 'Glottal fricative and special conjunct consonant'}
                    </div>
                  </div>
                  
                  {/* 喉轮 */}
                  <div className="border border-gray-200 rounded p-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">
                      {language === 'zh' ? '喉轮 (हं, 16 花瓣)' : 'Throat Chakra (हं, 16 petals)'}
                    </h4>
                    <div className="mb-2">
                      <div className="text-xs text-gray-600 mb-1">
                        {language === 'zh' ? '对应字母：' : 'Corresponding vowels：'}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {['अ', 'इ', 'उ', 'ऋ', 'ऌ', 'आ', 'ई', 'ऊ', 'ॠ', 'ॡ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'].map((letter, letterIdx) => (
                          <span key={letterIdx} className="font-sans text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                            {letter}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'zh' ? '梵语十六个元音' : 'Sanskrit sixteen vowels'}
                    </div>
                  </div>
                  
                  {/* 心轮 */}
                  <div className="border border-gray-200 rounded p-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">
                      {language === 'zh' ? '心轮 (यं, 12 花瓣)' : 'Heart Chakra (यं, 12 petals)'}
                    </h4>
                    <div className="mb-2">
                      <div className="text-xs text-gray-600 mb-1">
                        {language === 'zh' ? '对应字母：' : 'Corresponding letters：'}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {['क्', 'ख्', 'ग्', 'घ्', 'ङ्', 'च्', 'छ्', 'ज्', 'झ्', 'ञ्', 'ट्', 'ठ्'].map((letter, letterIdx) => (
                          <span key={letterIdx} className="font-sans text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                            {letter}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'zh' ? '喉音和颚音辅音' : 'Guttural and palatal consonants'}
                    </div>
                  </div>
                  
                  {/* 脐轮 */}
                  <div className="border border-gray-200 rounded p-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">
                      {language === 'zh' ? '脐轮 (रं, 10 花瓣)' : 'Navel Chakra (रं, 10 petals)'}
                    </h4>
                    <div className="mb-2">
                      <div className="text-xs text-gray-600 mb-1">
                        {language === 'zh' ? '对应字母：' : 'Corresponding letters：'}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {['ड्', 'ढ्', 'ण्', 'त्', 'थ्', 'द्', 'ध्', 'न्', 'प्', 'फ्'].map((letter, letterIdx) => (
                          <span key={letterIdx} className="font-sans text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                            {letter}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'zh' ? '卷舌音、齿音和部分唇音' : 'Retroflex, dental and some labial consonants'}
                    </div>
                  </div>
                  
                  {/* 腹轮 */}
                  <div className="border border-gray-200 rounded p-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">
                      {language === 'zh' ? '腹轮 (वं, 6 花瓣)' : 'Sacral Chakra (वं, 6 petals)'}
                    </h4>
                    <div className="mb-2">
                      <div className="text-xs text-gray-600 mb-1">
                        {language === 'zh' ? '对应字母：' : 'Corresponding letters：'}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {['ब्', 'भ्', 'म्', 'य्', 'र्', 'ल्'].map((letter, letterIdx) => (
                          <span key={letterIdx} className="font-sans text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                            {letter}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'zh' ? '浊唇音和半元音' : 'Voiced labial consonants and semivowels'}
                    </div>
                  </div>
                  
                  {/* 根轮 */}
                  <div className="border border-gray-200 rounded p-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">
                      {language === 'zh' ? '根轮 (लं, 4 花瓣)' : 'Root Chakra (लं, 4 petals)'}
                    </h4>
                    <div className="mb-2">
                      <div className="text-xs text-gray-600 mb-1">
                        {language === 'zh' ? '对应字母：' : 'Corresponding letters：'}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {['व्', 'श्', 'ष्', 'स्'].map((letter, letterIdx) => (
                          <span key={letterIdx} className="font-sans text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                            {letter}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'zh' ? '擦音' : 'Sibilants'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 其他标签页暂时留空 */}
          {activeSection === 'vowels' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sanskritContent.sections.vowels.content}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '元音内容待添加...' : 'Vowels content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'consonants' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sanskritContent.sections.consonants.content}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '辅音内容待添加...' : 'Consonants content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'conjuncts' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sanskritContent.sections.conjuncts.content}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '复合字母内容待添加...' : 'Compound letters content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'syllables' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sanskritContent.sections.syllables.content}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '音节结构内容待添加...' : 'Syllable structure content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'sandhi' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sanskritContent.sections.sandhi.content}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '连音规则内容待添加...' : 'Sandhi rules content pending...'}
              </p>
            </div>
          )}
          
          {/* 返回按钮 */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <a
              href="/knowledge"
              className="inline-flex items-center text-red-800 hover:text-red-900 font-medium text-xs"
            >
              <svg className="w-2.5 h-2.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {language === 'zh' ? '返回知识库' : 'Back to Knowledge Base'}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
