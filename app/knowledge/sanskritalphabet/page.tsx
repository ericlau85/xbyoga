'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function SanskritAlphabetPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'alphabet' | 'vowels' | 'consonants' | 'conjuncts' | 'syllables' | 'sandhi'>('alphabet');

  // ============================================
  // 1. 完整的数据定义（包含所有中文内容）
  // ============================================
  
  const sanskritData = {
    en: {
      meta: {
        title: "Sanskrit Alphabet System",
        subtitle: "संस्कृत अक्षर",
        intro: "A Sanskrit alphabet learning guide compiled for Ashtanga Yoga practitioners, covering pronunciation, writing, and basic grammar structure.",
      },
      sections: {
        alphabet: { tabTitle: "Alphabet", pageTitle: "Comprehensive Sanskrit alphabet system" },
        vowels: { tabTitle: "Vowels", pageTitle: "Sanskrit vowel system: स्वराः svarāḥ" },
        consonants: { tabTitle: "Consonants", pageTitle: "Sanskrit consonant system: व्यञ्जनानि vyañjanāni" },
        conjuncts: { tabTitle: "Compound Letters", pageTitle: "Compound consonants: संयुक्ताक्षराणि saṃyuktākṣarāṇi" },
        syllables: { tabTitle: "Syllable Structure", pageTitle: "Syllable formation and pronunciation rules" },
        sandhi: { tabTitle: "Sandhi Rules", pageTitle: "Euphonic combination rules in Sanskrit" }
      },
      // 其他内容暂时保持原有结构
    },
    zh: {
      meta: {
        title: "梵语字母系统",
        subtitle: "संस्कृत अक्षर",
        intro: "为阿斯汤加瑜伽练习者编撰的梵语字母学习指南，包含发音、书写及简单的语法结构。",
      },
      sections: {
        alphabet: { tabTitle: "字母表", pageTitle: "完整的梵语字母系统" },
        vowels: { tabTitle: "元音", pageTitle: "梵语元音系统：स्वराः svarāḥ" },
        consonants: { tabTitle: "辅音", pageTitle: "梵语辅音系统：व्यञ्जनानि vyañjanāni" },
        conjuncts: { tabTitle: "复合字母", pageTitle: "复合辅音：संयुक्ताक्षराणि saṃyuktākṣarāṇi" },
        syllables: { tabTitle: "音节结构", pageTitle: "音节构成与发音规则" },
        sandhi: { tabTitle: "连音规则", pageTitle: "梵语中的音变组合规则" }
      },
      // 其他内容暂时保持原有结构
    }
  };

  // ============================================
  // 2. 保持您原有的数据内容，只改变组织结构
  // ============================================

  // 元音数据
  const vowelsData = [
    { devanagari: "अ", transliteration: "a" },
    { devanagari: "इ", transliteration: "i" },
    { devanagari: "उ", transliteration: "u" },
    { devanagari: "ऋ", transliteration: "ṛ" },
    { devanagari: "ऌ", transliteration: "ḷ" },
    { devanagari: "आ", transliteration: "ā" },
    { devanagari: "ई", transliteration: "ī" },
    { devanagari: "ऊ", transliteration: "ū" },
    { devanagari: "ॠ", transliteration: "ṝ" },
    { devanagari: "ॡ", transliteration: "ḹ" },
    { devanagari: "ए", transliteration: "e" },
    { devanagari: "ऐ", transliteration: "ai" },
    { devanagari: "ओ", transliteration: "o" },
    { devanagari: "औ", transliteration: "au" },
    { devanagari: "अं", transliteration: "aṃ" },
    { devanagari: "अः", transliteration: "aḥ" }
  ];

  // 辅音数据
  const consonantsData = [
    { devanagari: "क्", transliteration: "k" },
    { devanagari: "ख्", transliteration: "kh" },
    { devanagari: "ग्", transliteration: "g" },
    { devanagari: "घ्", transliteration: "gh" },
    { devanagari: "ङ्", transliteration: "ṅ" },
    { devanagari: "ह्", transliteration: "h" },
    { devanagari: "च्", transliteration: "c" },
    { devanagari: "छ्", transliteration: "ch" },
    { devanagari: "ज्", transliteration: "j" },
    { devanagari: "झ्", transliteration: "jh" },
    { devanagari: "ञ्", transliteration: "ñ" },
    { devanagari: "य्", transliteration: "y" },
    { devanagari: "श्", transliteration: "ś" },
    { devanagari: "ट्", transliteration: "ṭ" },
    { devanagari: "ठ्", transliteration: "ṭh" },
    { devanagari: "ड्", transliteration: "ḍ" },
    { devanagari: "ढ्", transliteration: "ḍh" },
    { devanagari: "ण्", transliteration: "ṇ" },
    { devanagari: "र्", transliteration: "r" },
    { devanagari: "ष्", transliteration: "ṣ" },
    { devanagari: "त्", transliteration: "t" },
    { devanagari: "थ्", transliteration: "th" },
    { devanagari: "द्", transliteration: "d" },
    { devanagari: "ध्", transliteration: "dh" },
    { devanagari: "न्", transliteration: "n" },
    { devanagari: "ल्", transliteration: "l" },
    { devanagari: "स्", transliteration: "s" },
    { devanagari: "प्", transliteration: "p" },
    { devanagari: "फ्", transliteration: "ph" },
    { devanagari: "ब्", transliteration: "b" },
    { devanagari: "भ्", transliteration: "bh" },
    { devanagari: "म्", transliteration: "m" },
    { devanagari: "व्", transliteration: "v" }
  ];

  // 梵语简介文本
  const sanskritIntroText = {
    en: {
      sanskrit: 'The term संस्कृत (Sanskrit) means "refined, purified, perfected," and as such, it is revered in the Indian tradition as the "divine language" (देवभाषा devabhāṣā). As one of the oldest languages in the Indo-Iranian branch of the Indo-European family, Sanskrit served as the principal vehicle for ancient Indian religion, philosophy, literature, and science.',
      alphabet: 'The Sanskrit alphabet is called वर्णमाला varṇamālā (literally "garland of letters"). Traditional Sanskrit phonology contains 16 vowels (स्वराः svarāḥ) and 33 consonants (व्यञ्जनानि vyañjanāni).',
      devanagari: 'देवनागरी devanāgarī is the most commonly used writing system for Sanskrit, also used for modern Indian languages such as Hindi (हिन्दी hindī), Marathi (मराठी marāṭhī), and Nepali (नेपाली nepālī). Devanāgarī is a syllabic script where each character represents a syllable, and consonants inherently include the short vowel अ (a).',
      transliterationItems: [
        'IAST (International Alphabet of Sanskrit Transliteration) is the most widely adopted Latin transliteration scheme for Sanskrit in academic fields, strictly following the "one sound, one symbol" principle and preserving complete Sanskrit phonological features.',
        'ISO-15919 is an international standardization organization transliteration standard. Main differences from IAST include: ṛ，ṝ，ḷ，ḹ，e，o，aṃ → r̥，r̥̄，l̥，l̥̄，ē，ō，aṁ'
      ]
    },
    zh: {
      sanskrit: '梵语（संस्कृतम् saṃskṛtam，意为"精炼、净化、完善的语言"）在印度传统中被尊为"神圣的言语"（देवभाषा devabhāṣā）。作为印欧语系印度-伊朗语族中最古老的语言之一，梵语是古代印度宗教、哲学、文学与科学的主要载体。',
      alphabet: '梵语字母表被称为 वर्णमाला varṇamālā（字面义"字母花环"）。传统梵语音系包含16个元音（स्वराः svarāḥ）与33个辅音（व्यञ्जनानि vyañjanāni）。',
      devanagari: 'देवनागरी devanāgarī 是书写梵语最常用的文字系统，亦用于书写印地语（हिन्दी hindī）、马拉地语（मराठी marāṭhī）、尼泊尔语（नेपाली nepālī）等多种现代印度语言。天城文为音节文字，每个字符代表一个音节，辅音字母默认包含短元音 अ（a）。',
      transliterationItems: [
        'IAST（International Alphabet of Sanskrit Transliteration）是学术领域最广泛采用的梵文拉丁转写方案，严格遵循"一音一符"原则，完整保留梵语音系特征。',
        'ISO-15919 为国际标准化组织制定的转写规范，与IAST的主要区别包括：ṛ，ṝ，ḷ，ḹ，e，o，aṃ → r̥，r̥̄，l̥，l̥̄，ē，ō，aṁ'
      ]
    }
  };

  // 音系特征数据
  const phonologyData = {
    en: {
      lengthSystem: {
        title: "Length System • काल kāla",
        description: "Sanskrit vowels are classified into three categories by length:",
        items: [
          "Short vowels ह्रस्व hrasva • 1 syllable unit (मात्रा mātrā) • e.g.: अ a, इ i, उ u",
          "Long vowels दीर्घ dīrgha • 2 syllable units • e.g.: आ ā, ई ī, ऊ ū",
          "Prolonged vowels प्लुत pluta • 3 syllable units (mainly used in Vedic texts) • e.g.: आ३ ā³"
        ]
      },
      toneSystem: {
        title: "Tone System • स्वराः svarāḥ",
        note: "Note: Classical Sanskrit usually does not mark tones; the tone system is primarily used in Vedic Sanskrit (वैदिकसंस्कृतम्).",
        description: "Three basic tones in Vedic Sanskrit:",
        items: [
          "High tone उदात्त udātta • Mark: ॑ (e.g.: अ॑ a̍)",
          "Low tone अनुदात्त anudātta • Mark: ॒ (e.g.: अ॒ a̱)",
          "Falling/compound tone स्वरित svarita • No independent symbol, formed by natural falling after high tone"
        ]
      },
      nasalization: {
        title: "Nasalization • आनुनासिक्यम् ānunāsikyam",
        description: "All Sanskrit phonemes can be nasalized, marked with ँ (चन्द्रबिन्दु candra-bindu). Nasalization can combine with other phonetic features (length, tone)."
      },
      phonemeExamples: {
        title: "Phoneme Combination Examples",
        description: "Based on 3 lengths (short, long, prolonged) × 3 tones (high, low, falling/neutral) × 2 nasal states (nasalized/non-nasalized), each phoneme theoretically has multiple variant forms.",
        vowelExample: {
          title: "Example: Phoneme combinations based on vowel अ a",
          series: [
            {
              name: "High tone series (उदात्त udātta)",
              examples: ["अ॑ a̍", "आ॑ ā̍", "आ॑३ ā̍³", "अँ॑ ã̍", "आँ॑ ā̃̍", "आँ॑३ ā̃̍³"]
            },
            {
              name: "Low tone series (अनुदात्त anudātta)",
              examples: ["अ॒ a̱", "आ॒ ā̱", "आ॒३ ā̱³", "अँ॒ ã̱", "आँ॒ ā̱̃", "आँ॒३ ā̱̃³"]
            },
            {
              name: "Neutral series (Classical Sanskrit standard)",
              examples: ["अ a", "आ ā", "आ३ ā³", "अँ ã", "आँ ā̃", "आँ३ ā̃³"]
            }
          ]
        }
      }
    },
    zh: {
      lengthSystem: {
        title: "音长系统 • काल kāla",
        description: "梵语元音按音长分为三类：",
        items: [
          "短元音 ह्रस्व hrasva • 1音节单位（मात्रा mātrā） • 如：अ a、इ i、उ u",
          "长元音 दीर्घ dīrgha • 2音节单位 • 如：आ ā、ई ī、ऊ ū",
          "延长元音 प्लुत pluta • 3音节单位（主要用于吠陀文献） • 如：आ३ ā³"
        ]
      },
      toneSystem: {
        title: "音调系统 • स्वराः svarāḥ",
        note: "注：古典梵语通常不标记音调，音调系统主要用于吠陀梵语（वैदिकसंस्कृतम्）。",
        description: "吠陀梵语的三种基本音调：",
        items: [
          "高调 उदात्त udātta • 标记：॑（如：अ॑ a̍）",
          "低调 अनुदात्त anudātta • 标记：॒（如：अ॒ a̱）",
          "降调/复合调 स्वरित svarita • 无独立符号，由高调后自然降调形成"
        ]
      },
      nasalization: {
        title: "鼻音化 • आनुनासिक्यम् ānunāsikyam",
        description: "所有梵语音素均可鼻音化，标记为 ँ（चन्द्रबिन्दु candra-bindu）。鼻音化可与其他语音特征（音长、音调）组合。"
      },
      phonemeExamples: {
        title: "音素组合示例",
        description: "基于3种音长（短、长、延长）× 3种音调（高调、低调、降调/中性）× 2种鼻音状态（鼻音化/非鼻音化），每个音素理论上存在多种变体形式。",
        vowelExample: {
          title: "示例：以元音 अ a 为基础的音素组合",
          series: [
            {
              name: "高调系列（उदात्त udātta）",
              examples: ["अ॑ a̍", "आ॑ ā̍", "आ॑३ ā̍³", "अँ॑ ã̍", "आँ॑ ā̃̍", "आँ॑३ ā̃̍³"]
            },
            {
              name: "低调系列（अनुदात्त anudātta）",
              examples: ["अ॒ a̱", "आ॒ ā̱", "आ॒३ ā̱³", "अँ॒ ã̱", "आँ॒ ā̱̃", "आँ॒३ ā̱̃³"]
            },
            {
              name: "中性系列（古典梵语常规）",
              examples: ["अ a", "आ ā", "आ३ ā³", "अँ ã", "आँ ā̃", "आँ३ ā̃³"]
            }
          ]
        }
      }
    }
  };

  // 符号表数据
  const symbolTableData = [
    { symbol: "ँ", name: "चन्द्रबिन्दु candra-bindu", functionEn: "Nasalization mark", functionZh: "鼻音化标记" },
    { symbol: "॑", name: "उदात्त udātta", functionEn: "High tone mark", functionZh: "高调标记" },
    { symbol: "॒", name: "अनुदात्त anudātta", functionEn: "Low tone mark", functionZh: "低调标记" },
    { symbol: "३", name: "प्लुत pluta", functionEn: "Prolongation mark", functionZh: "延长音标记" },
    { symbol: "̍", name: "IPA high tone symbol", functionEn: "IPA high tone symbol", functionZh: "国际音标高调标记" },
    { symbol: "̱", name: "IPA low tone symbol", functionEn: "IPA low tone symbol", functionZh: "国际音标低调标记" }
  ];

  // 脉轮数据
  const chakrasData = {
    en: [
      {
        name: "Crown Chakra (सहस्रार, ॐ, Thousand petals)",
        letters: ["ॐ"],
        description: "Sacred syllable, representing the primordial vibration of the universe and the highest state of consciousness"
      },
      {
        name: "Brow Chakra (उँ, 2 petals)",
        letters: ["ह्", "क्ष"],
        description: "Glottal fricative and special conjunct consonant"
      },
      {
        name: "Throat Chakra (हं, 16 petals)",
        letters: ["अ", "इ", "उ", "ऋ", "ऌ", "आ", "ई", "ऊ", "ॠ", "ॡ", "ए", "ऐ", "ओ", "औ", "अं", "अः"],
        description: "Sanskrit sixteen vowels"
      },
      {
        name: "Heart Chakra (यं, 12 petals)",
        letters: ["क्", "ख्", "ग्", "घ्", "ङ्", "च्", "छ्", "ज्", "झ्", "ञ्", "ट्", "ठ्"],
        description: "Guttural and palatal consonants"
      },
      {
        name: "Navel Chakra (रं, 10 petals)",
        letters: ["ड्", "ढ्", "ण्", "त्", "थ्", "द्", "ध्", "न्", "प्", "फ्"],
        description: "Retroflex, dental and some labial consonants"
      },
      {
        name: "Sacral Chakra (वं, 6 petals)",
        letters: ["ब्", "भ्", "म्", "य्", "र्", "ल्"],
        description: "Voiced labial consonants and semivowels"
      },
      {
        name: "Root Chakra (लं, 4 petals)",
        letters: ["व्", "श्", "ष्", "स्"],
        description: "Sibilants"
      }
    ],
    zh: [
      {
        name: "顶轮 (सहस्रार, ॐ, 千瓣)",
        letters: ["ॐ"],
        description: "神圣音节，代表宇宙的原始振动和意识的最高状态"
      },
      {
        name: "额轮 (उँ, 2 花瓣)",
        letters: ["ह्", "क्ष"],
        description: "喉擦音和特殊复合辅音"
      },
      {
        name: "喉轮 (हं, 16 花瓣)",
        letters: ["अ", "इ", "उ", "ऋ", "ऌ", "आ", "ई", "ऊ", "ॠ", "ॡ", "ए", "ऐ", "ओ", "औ", "अं", "अः"],
        description: "梵语十六个元音"
      },
      {
        name: "心轮 (यं, 12 花瓣)",
        letters: ["क्", "ख्", "ग्", "घ्", "ङ्", "च्", "छ्", "ज्", "झ्", "ञ्", "ट्", "ठ्"],
        description: "喉音和颚音辅音"
      },
      {
        name: "脐轮 (रं, 10 花瓣)",
        letters: ["ड्", "ढ्", "ण्", "त्", "थ्", "द्", "ध्", "न्", "प्", "फ्"],
        description: "卷舌音、齿音和部分唇音"
      },
      {
        name: "腹轮 (वं, 6 花瓣)",
        letters: ["ब्", "भ्", "म्", "य्", "र्", "ल्"],
        description: "浊唇音和半元音"
      },
      {
        name: "根轮 (लं, 4 花瓣)",
        letters: ["व्", "श्", "ष्", "स्"],
        description: "擦音"
      }
    ]
  };

  // ============================================
  // 3. 获取当前语言的内容
  // ============================================
  
  const content = sanskritData[language as keyof typeof sanskritData];
  const meta = content.meta;
  const sections = content.sections;
  const introText = sanskritIntroText[language as keyof typeof sanskritIntroText];
  const phonology = phonologyData[language as keyof typeof phonologyData];
  const chakras = chakrasData[language as keyof typeof chakrasData];

  // ============================================
  // 4. 标签页配置
  // ============================================
  
  const sectionTabs = {
    alphabet: sections.alphabet.tabTitle,
    vowels: sections.vowels.tabTitle,
    consonants: sections.consonants.tabTitle,
    conjuncts: sections.conjuncts.tabTitle,
    syllables: sections.syllables.tabTitle,
    sandhi: sections.sandhi.tabTitle
  };

  // ============================================
  // 5. 辅助渲染组件
  // ============================================

  // 字母卡片组件
  const LetterCard = ({ devanagari, transliteration }: { devanagari: string, transliteration: string }) => (
    <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30 transition-colors">
      <div className="font-sans text-base sm:text-lg md:text-xl">{devanagari}</div>
      <div className="text-xs italic text-gray-600 mt-0.5">{transliteration}</div>
    </div>
  );

  // 音素示例卡片
  const PhonemeCard = ({ example }: { example: string }) => (
    <div className="border border-gray-200 rounded p-2 text-center">
      <div className="font-sans mb-1">{example.split(' ')[0]}</div>
      <div className="italic text-xs">{example.split(' ')[1]}</div>
    </div>
  );

  // 符号表组件
  const SymbolTable = () => (
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
          {symbolTableData.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2 font-sans">{row.symbol}</td>
              <td className="border border-gray-300 p-2">{row.name}</td>
              <td className="border border-gray-300 p-2">{language === 'zh' ? row.functionZh : row.functionEn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // ============================================
  // 6. 主渲染函数
  // ============================================
  
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-white pt-12">
        {/* 页面头部 */}
        <div className="max-w-4xl mx-auto px-4 pt-4 pb-2 md:pt-6 md:pb-3">
          <h1 className="text-base md:text-lg font-medium text-gray-900 mb-1 tracking-tight">
            {meta.title}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-1.5">
            {meta.subtitle}
          </p>
          <p className="text-xs md:text-sm text-gray-700 mb-3 leading-snug">
            {meta.intro}
          </p>
        </div>

        {/* 标签页导航 */}
        <SectionTabs
          sections={sectionTabs}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* 主内容区域 */}
        <div className="max-w-4xl mx-auto px-4 pb-6 md:pb-8">
          
          {/* 字母表标签页 */}
          {activeSection === 'alphabet' && (
            <div className="space-y-8">
              
              {/* 梵语简介部分 */}
              <div className="bg-gradient-to-r from-gray-50 to-white p-4 md:p-6 rounded-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    <div className="mb-2">
                      <div className="font-sans text-sm mb-1">
                        {language === 'zh' ? '梵语 Sanskrit' : 'Sanskrit'}
                      </div>
                    </div>
                    <p className="mb-2">
                      {introText.sanskrit}
                    </p>
                    <div className="mt-2">
                      {introText.alphabet}
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
                          {introText.devanagari}
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="text-xs font-medium text-gray-700 mb-1">
                          {language === 'zh' ? '2. 国际梵文转写标准' : '2. International Transliteration Standards'}
                        </h5>
                        <ul className="text-xs text-gray-700 space-y-1.5 ml-0.5">
                          {introText.transliterationItems.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-1.5 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                                            {/* 字母表格部分 - 完全恢复您原有的7列布局 */}
                                            <div className="space-y-6">
                                              {/* 元音卡片 - 严格保持7列正方形布局 */}
                                              <div>
                                                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                                                  {/* 第一行：5个短元音 + 2个空位 */}
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">अ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">a</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">इ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">i</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">उ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">u</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ऋ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ṛ</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ऌ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ḷ</div>
                                                  </div>
                                                  <div className="aspect-square"></div>
                                                  <div className="aspect-square"></div>
                                                  
                                                  {/* 第二行：5个长元音 + 2个空位 */}
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">आ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ā</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ई</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ī</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ऊ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ū</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ॠ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ṝ</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ॡ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ḹ</div>
                                                  </div>
                                                  <div className="aspect-square"></div>
                                                  <div className="aspect-square"></div>
                                                  
                                                  {/* 第三行：4个复合元音 + 空位 + 2个辅助元音 */}
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ए</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">e</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ऐ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ai</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ओ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">o</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">औ</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">au</div>
                                                  </div>
                                                  <div className="aspect-square"></div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">अं</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">aṃ</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">अः</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">aḥ</div>
                                                  </div>
                                                </div>
                                              </div>
                                              
                                              {/* 空行分隔 */}
                                              <div className="py-4">
                                                <div className="border-t border-gray-300"></div>
                                              </div>
                                              
                                              {/* 辅音卡片 - 严格保持7列正方形布局 */}
                                              <div>
                                                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                                                  {/* 喉音 */}
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">क्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">k</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ख्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">kh</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ग्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">g</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">घ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">gh</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ङ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ṅ</div>
                                                  </div>
                                                  <div className="aspect-square"></div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ह्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">h</div>
                                                  </div>
                                                  
                                                  {/* 颚音 */}
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">च्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">c</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">छ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ch</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ज्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">j</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">झ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">jh</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ञ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ñ</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">य्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">y</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">श्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ś</div>
                                                  </div>
                                                  
                                                  {/* 卷舌音 */}
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ट्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ṭ</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ठ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ṭh</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ड्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ḍ</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ढ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ḍh</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ण्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ṇ</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">र्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">r</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ष्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ṣ</div>
                                                  </div>
                                                  
                                                  {/* 齿音 */}
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">त्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">t</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">थ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">th</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">द्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">d</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ध्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">dh</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">न्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">n</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ल्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">l</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">स्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">s</div>
                                                  </div>
                                                  
                                                  {/* 唇音 */}
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">प्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">p</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">फ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">ph</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">ब्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">b</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">भ्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">bh</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">म्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">m</div>
                                                  </div>
                                                  <div className="aspect-square border border-gray-200 rounded flex flex-col items-center justify-center p-1 hover:bg-gray-50/30">
                                                    <div className="font-sans text-base sm:text-lg md:text-xl">व्</div>
                                                    <div className="text-xs italic text-gray-600 mt-0.5">v</div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

              {/* 音系特征部分 */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-800 mb-6">
                  {language === 'zh' ? '音系特征' : 'Phonological Features'}
                </h3>
                
                <div className="space-y-6">
                  
                  {/* 音长系统 */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-medium text-gray-700">
                      {phonology.lengthSystem.title}
                    </h4>
                    <p className="text-xs text-gray-700">
                      {phonology.lengthSystem.description}
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1.5 ml-0.5">
                      {phonology.lengthSystem.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-1.5 mt-0.5">{index + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* 音调系统 */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-medium text-gray-700">
                      {phonology.toneSystem.title}
                    </h4>
                    <div className="text-xs text-gray-700 bg-gray-50 p-2 rounded mb-2">
                      {phonology.toneSystem.note}
                    </div>
                    <p className="text-xs text-gray-700">
                      {phonology.toneSystem.description}
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1.5 ml-0.5">
                      {phonology.toneSystem.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-1.5 mt-0.5">{index + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* 鼻音化 */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-medium text-gray-700">
                      {phonology.nasalization.title}
                    </h4>
                    <p className="text-xs text-gray-700">
                      {phonology.nasalization.description}
                    </p>
                  </div>
                  
                  {/* 音素组合示例 */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-medium text-gray-700">
                      {phonology.phonemeExamples.title}
                    </h4>
                    
                    <p className="text-xs text-gray-700">
                      {phonology.phonemeExamples.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-xs font-medium text-gray-700 mb-2">
                          {phonology.phonemeExamples.vowelExample.title}
                        </h5>
                        
                        <div className="space-y-3">
                          {phonology.phonemeExamples.vowelExample.series.map((series, seriesIndex) => (
                            <div key={seriesIndex}>
                              <div className="text-xs font-medium text-gray-700 mb-1">
                                {series.name}
                              </div>
                              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs">
                                {series.examples.map((example, exampleIndex) => (
                                  <PhonemeCard key={exampleIndex} example={example} />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* 标记符号说明 */}
                      <div className="pt-4 border-t border-gray-200">
                        <h5 className="text-xs font-medium text-gray-700 mb-2">
                          {language === 'zh' ? '标记符号说明' : 'Symbol Explanation'}
                        </h5>
                        <SymbolTable />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 脉轮对应关系 */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-800 mb-6">
                  {language === 'zh' ? '脉轮对应关系' : 'Chakra Correspondence'}
                </h3>
                
                <div className="space-y-4">
                  {chakras.map((chakra, index) => (
                    <div key={index} className="border border-gray-200 rounded p-3">
                      <h4 className="text-xs font-medium text-gray-700 mb-2">
                        {chakra.name}
                      </h4>
                      <div className="mb-2">
                        <div className="text-xs text-gray-600 mb-1">
                          {language === 'zh' ? '对应字母：' : 'Corresponding letters：'}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {chakra.letters.map((letter, letterIdx) => (
                            <span key={letterIdx} className="font-sans text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                              {letter}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        {chakra.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 其他标签页内容 */}
          {activeSection === 'vowels' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sections.vowels.pageTitle}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '元音内容待添加...' : 'Vowels content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'consonants' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sections.consonants.pageTitle}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '辅音内容待添加...' : 'Consonants content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'conjuncts' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sections.conjuncts.pageTitle}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '复合字母内容待添加...' : 'Compound letters content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'syllables' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sections.syllables.pageTitle}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '音节结构内容待添加...' : 'Syllable structure content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'sandhi' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {sections.sandhi.pageTitle}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '连音规则内容待添加...' : 'Sandhi rules content pending...'}
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
