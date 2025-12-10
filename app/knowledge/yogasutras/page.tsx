'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function YogaSutrasPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'introduction' | 'samadhi' | 'sadhana' | 'vibhuti' | 'kaivalya'>('introduction');

  // ============================================
  // 1. 数据定义 - 完全分离，清晰易懂
  // ============================================
  
  const yogaSutraData = {
    en: {
      // 页面基本信息
      meta: {
        title: "Patanjali's Yoga Sutras",
        subtitle: "पतञ्जलि योग सूत्राणि",
        intro: "The Yoga Sutras are Patanjali's collection of 196 Sanskrit aphorisms on yoga theory and practice. Composed in the 2nd century BCE, they form the philosophical foundation of classical yoga.",
        backButton: "Back to Knowledge Base"
      },

      // 标签页配置
      sections: {
        introduction: {
          tabTitle: "Introduction",
          pageTitle: "Overview and Historical Context"
        },
        samadhi: {
          tabTitle: "Samadhi Pada",
          pageTitle: "Chapter 1: On Contemplation",
            chapterHeader: {
                      sanskrit: "समाधिपादः · samādhi pādaḥ"
                    }
        },
        sadhana: {
          tabTitle: "Sadhana Pada",
          pageTitle: "Chapter 2: On Practice",
            chapterHeader: {
                      sanskrit: "साधनपादः · sādhana pādaḥ"
                    }
        },
        vibhuti: {
          tabTitle: "Vibhuti Pada",
          pageTitle: "Chapter 3: On Accomplishments",
            chapterHeader: {
                      sanskrit: "विभूतिपादः · vibhūti pādaḥ"
                    }
        },
        kaivalya: {
          tabTitle: "Kaivalya Pada",
          pageTitle: "Chapter 4: On Liberation",
            chapterHeader: {
                      sanskrit: "कैवल्यपादः · kaivalya pādaḥ"
                    }
        }
      },

      // 经文内容 - 使用 \n 处理换行
      verses: {
        introduction: [
          {
            verse: "📃",
            devanagari: "योगेन चित्तस्य पदेन वाचां ।\nमलं शरीरस्य च वैद्यकेन ॥\nयोऽपाकरोत्तमं प्रवरं मुनीनां ।\nपतञ्जलिं प्राञ्जलिरानतोऽस्मि ॥",
            sanskrit: "yogena cittasya padena vācāṁ ।\nmalaṁ śarīrasya ca vaidyakena ॥\nyo'pākarottamaṁ pravaraṁ munīnāṁ ।\npatañjaliṁ prāñjalirānato'smi ॥",
            translation: "I bow with folded hands unto Patanjali,\nMost excellent of sages, who bestowed\nThrough Yoga, purity of mind;\nThrough Grammar, purity of speech; Through Medicine, purity of body.",
            meaning: "This invocation honors Patanjali as the master of three sacred sciences: Yoga for mental purification, Grammar for linguistic purity, and Ayurveda for physical health."
          },
          {
            verse: "📃",
            devanagari: "आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् ।\nसहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥",
            sanskrit: "ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam ।\nsahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥",
            translation: "I prostrate before Patanjali,\nWhite-complexioned, with thousand radiant heads,\nIn human form above the shoulders,\nBearing the conch, discus, and sword.",
            meaning: "A visual description of Patanjali as a divine being with multiple heads, holding sacred weapons and symbols."
          }
        ],
        samadhi: [
          {
            verse: "1.1 • The Teaching of Yoga",
            devanagari: "अथ योगानुशासनम् ॥",
            sanskrit: "atha yogānuśāsanam ॥",
            translation: "Now begins the instruction in Yoga.",
            meaning: "The sacred word 'atha' signifies auspicious beginnings, indicating this teaching comes from an authentic lineage with the student's readiness."
          },
          {
            verse: "1.2 • Definition of Yoga",
            devanagari: "योगश्चित्तवृत्तिनिरोधः ॥",
            sanskrit: "yogaś citta vṛtti nirodhaḥ ॥",
            translation: "Yoga is the restraint of the modifications of the mind.",
            meaning: "The fundamental definition of Yoga - mastering the fluctuations of consciousness to realize one's true nature."
          },
          {
            verse: "1.3 • The Seer Established",
            devanagari: "तदा द्रष्टुः स्वरूपेऽवस्थानम् ॥",
            sanskrit: "tadā draṣṭuḥ svarūpe'vasthānam ॥",
            translation: "Then the Seer abides in His own nature.",
            meaning: "When mental modifications cease, pure consciousness shines forth in its essential nature, free from identification with phenomena."
          }
        ],
        sadhana: [
          {
            verse: "2.1 • Kriya Yoga",
            devanagari: "तपः स्वाध्यायेश्वरप्रणिधानानि क्रियायोगः ॥",
            sanskrit: "tapaḥ svādhyāyēśvarapraṇidhānāni kriyā yōgaḥ ॥",
            translation: "Austerity, self-study, and surrender to the Lord constitute the yoga of action.",
            meaning: "Kriya Yoga - the yoga of practical action for purification."
          },
          {
            verse: "2.2 • Purpose of Kriya Yoga",
            devanagari: "समाधिभावनार्थः क्लेशतनूकरणार्थश्च ॥",
            sanskrit: "samādhi bhāvanārthaḥ klēśa tanūkaraṇārthaś ca ॥",
            translation: "They are for cultivating meditation and for attenuating the afflictions.",
            meaning: "Dual purpose: developing samadhi and reducing obstacles."
          }
        ],
        vibhuti: [
          {
            verse: "3.1 • Dharana",
            devanagari: "देशबन्धश्चित्तस्य धारणा ॥",
            sanskrit: "dēśabandhaścittasya dhāraṇā ॥",
            translation: "Concentration is the binding of the mind to one place.",
            meaning: "Definition of Dharana - fixing attention on one point."
          },
          {
            verse: "3.2 • Dhyana",
            devanagari: "तत्र प्रत्ययैकतानता ध्यानम् ॥",
            sanskrit: "tatra pratyayaikatānatā dhyānam ॥",
            translation: "Meditation is the uninterrupted flow of cognition toward that object.",
            meaning: "Definition of Dhyana - continuous flow of awareness."
          }
        ],
        kaivalya: [
          {
            verse: "4.1 • Sources of Accomplishments",
            devanagari: "जन्मौषधिमन्त्रतपःसमाधिजाः सिद्धयः ॥",
            sanskrit: "janmauṣadhimantratapaḥsamādhijāḥ siddhayaḥ ॥",
            translation: "Perfections are born of birth, herbs, mantras, austerity, and samadhi.",
            meaning: "Various means to attain supernatural powers."
          },
          {
            verse: "4.2 • Transformation of Species",
            devanagari: "जात्यन्तरपरिणामः प्रकृत्यापूरात् ॥",
            sanskrit: "jātyantarapariṇāmaḥ prakṛtyāpūrāt ॥",
            translation: "Transformation into another species occurs through the inflow of nature.",
            meaning: "Evolution and transformation according to natural law."
          }
        ]
      },

      // 额外内容（如作者介绍）
      additionalContent: {
        author: {
          title: "Author • पतञ्जलिः",
          description: "Patanjali (पतञ्जलिः，c. 2nd century BCE) is a revered sage in Indian tradition, traditionally considered the compiler of three major disciplines:",
          points: [
            "Yoga Sutras (योगसूत्राणि) - Systematic exposition of yoga philosophy",
            "Mahābhāṣya (महाभाष्य) - Authoritative commentary on Pāṇini's grammar",
            "Caraka Saṃhitā (चरकसंहिता) - Important Ayurvedic medical text (disputed)"
          ]
        },
        structure: {
          title: "Text Structure",
          literaryForm: {
            title: "Literary Form • सूत्र",
            description: "The Yoga Sutras are written in the 'aphoristic style' (सूत्र sūtra), known for extreme conciseness. Each sutra contains profound philosophical meaning, requiring commentary (भाष्य bhāṣya) for proper interpretation."
          },
          chapters: {
            title: "Chapter Division • पाद",
            description: "The text consists of 196 sutras divided into four chapters (पाद pāda): 1. Samādhi Pāda, 2. Sādhana Pāda, 3. Vibhūti Pāda, 4. Kaivalya Pāda."
          }
        }
      }
    },

    zh: {
      // 页面基本信息
      meta: {
        title: "帕坦伽利《瑜伽经》",
        subtitle: "पतञ्जलि योग सूत्राणि",
        intro: "《瑜伽经》是帕坦伽利关于瑜伽理论和实践的196条梵文箴言集。成书于公元前2世纪，构成了古典瑜伽的哲学基础，并为灵性实践和自我实现提供了系统指导。",
        backButton: "返回知识库"
      },

      // 标签页配置
      sections: {
        introduction: {
          tabTitle: "简介",
          pageTitle: "概述与历史背景"
        },
        samadhi: {
          tabTitle: "三昧品",
          pageTitle: "【章】三昧品第一 · 关于禅定",
            chapterHeader: {
                      sanskrit: "समाधिपादः · samādhi pādaḥ"
                    }
        },
        sadhana: {
          tabTitle: "修行品",
          pageTitle: "【章】修行品第二 · 关于修行",
            chapterHeader: {
                      sanskrit: "साधनपादः · sādhana pādaḥ"
                    }
        },
        vibhuti: {
          tabTitle: "神通品",
          pageTitle: "【章】神通品第三 · 关于神通",
            chapterHeader: {
                      sanskrit: "विभूतिपादः · vibhūti pādaḥ"
                    }
        },
        kaivalya: {
          tabTitle: "独存品",
          pageTitle: "【章】独存品第四 · 关于解脱",
            chapterHeader: {
                      sanskrit: "कैवल्यपादः · kaivalya pādaḥ"
                    }
        }
      },

      // 经文内容 - 使用 \n 处理换行
      verses: {
        introduction: [
          {
            verse: "📃",
            devanagari: "योगेन चित्तस्य पदेन वाचां ।\nमलं शरीरस्य च वैद्यकेन ॥\nयोऽपाकरोत्तमं प्रवरं मुनीनां ।\nपतञ्जलिं प्राञ्जलिरानतोऽस्मि ॥",
            sanskrit: "yogena cittasya padena vācāṁ ।\nmalaṁ śarīrasya ca vaidyakena ॥\nyo'pākarottamaṁ pravaraṁ munīnāṁ ।\npatañjaliṁ prāñjalirānato'smi ॥",
            translation: "瑜伽涤心，文法正言，\n医方洁身，三学乃全。\n至圣至尊，帕坦伽利，\n我今稽首，恭行大礼。",
            meaning: "此颂赞颂帕坦伽利为三明圣学之主：瑜伽净化心灵，文法纯净语言，阿育吠陀健康身体。"
          },
          {
            verse: "📃",
            devanagari: "आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् ।\nसहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥",
            sanskrit: "ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam ।\nsahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥",
            translation: "上身人形，持法器明，\n螺轮剑戟，威德自生。\n首戴千蛇，皎若水晶，\n敬礼圣哲，帕坦伽利。",
            meaning: "虔敬顶礼，表达对圣哲帕坦伽利及其圆满智慧的深切敬意。"
          }
        ],
        samadhi: [
          {
            verse: "1.1 • 瑜伽启明",
            devanagari: "अथ योगानुशासनम् ॥",
            sanskrit: "atha yogānuśāsanam ॥",
            translation: "今说瑜伽。",
            meaning: "圣音'atha'表吉祥开端，示此法教源自清净传承，学者根器已熟。"
          },
          {
            verse: "1.2 • 摄心止波",
            devanagari: "योगश्चित्तवृत्तिनिरोधः ॥",
            sanskrit: "yogaś citta vṛtti nirodhaḥ ॥",
            translation: "瑜伽者，伏心波之迁流。",
            meaning: "瑜伽根本定义——掌控意识波动，以证悟自性本来面目。"
          },
          {
            verse: "1.3 • 观者住本",
            devanagari: "तदा द्रष्टुः स्वरूपेऽवस्थानम् ॥",
            sanskrit: "tadā draṣṭuḥ svarūpe'vasthānam ॥",
            translation: "如是，观者安住自性。",
            meaning: "心波止息时，纯粹意识在其本然性中朗然显现，离于诸相执着。"
          }
        ],
        sadhana: [
          {
            verse: "2.1 • 苦行明辨",
            devanagari: "तपः स्वाध्यायेश्वरप्रणिधानानि क्रियायोगः ॥",
            sanskrit: "tapaḥ svādhyāyēśvarapraṇidhānāni kriyā yōgaḥ ॥",
            translation: "苦行、诵习、敬自在天，是为瑜伽行。",
            meaning: "行动瑜伽 - 净化的实践瑜伽。"
          },
          {
            verse: "2.2 • 灭苦之本",
            devanagari: "समाधिभावनार्थः क्लेशतनूकरणार्थश्च ॥",
            sanskrit: "samādhi bhāvanārthaḥ klēśa tanūkaraṇārthaś ca ॥",
            translation: "为成就三昧，为淡薄诸恼。",
            meaning: "双重目的：培养三昧和减少烦恼。"
          }
        ],
        vibhuti: [
          {
            verse: "3.1 • 凝神定境",
            devanagari: "देशबन्धश्चित्तस्य धारणा ॥",
            sanskrit: "dēśabandhaścittasya dhāraṇā ॥",
            translation: "系心一处，是谓执持。",
            meaning: "执持的定义 - 将注意力固定于一点。"
          },
          {
            verse: "3.2 • 念流不断",
            devanagari: "तत्र प्रत्ययैकतानता ध्यानम् ॥",
            sanskrit: "tatra pratyayaikatānatā dhyānam ॥",
            translation: "彼处心念相续，是谓禅定。",
            meaning: "禅定的定义 - 持续的觉知流。"
          }
        ],
        kaivalya: [
          {
            verse: "4.1 • 神通缘生",
            devanagari: "जन्मौषधिमन्त्रतपःसमाधिजाः सिद्धयः ॥",
            sanskrit: "janmauṣadhimantratapaḥsamādhijāḥ siddhayaḥ ॥",
            translation: "神通生于宿命、药草、咒语、苦行、三昧。",
            meaning: "获得超自然力量的各种途径。"
          },
          {
            verse: "4.2 • 种性转化",
            devanagari: "जात्यन्तरपरिणामः प्रकृत्यापूरात् ॥",
            sanskrit: "jātyantarapariṇāmaḥ prakṛtyāpūrāt ॥",
            translation: "种性转化，源于自然力之充盈。",
            meaning: "按照自然法则的进化和转化。"
          }
        ]
      },

      // 额外内容（如作者介绍）
      additionalContent: {
        author: {
          title: "作者 • पतञ्जलिः",
          description: "帕坦伽利（पतञ्जलिः，约公元前2世纪）是印度古代著名的圣哲，传统上被认为是三大学问的整理者：",
          points: [
            "《瑜伽经》（योगसूत्राणि）- 瑜伽哲学的系统化阐述",
            "《大疏》（महाभाष्य）- 对波你尼文法的权威注释",
            "《医典》（चरकसंहिता）- 阿育吠陀医学的重要文献（存在争议）"
          ]
        },
        structure: {
          title: "经文结构",
          literaryForm: {
            title: "经文体裁 • सूत्र",
            description: "《瑜伽经》采用'箴言体'（सूत्र sūtra）写成，这种文体以极度精炼著称，每个经句都包含深奥的哲学含义，需要注释（भाष्य bhāṣya）加以阐释。"
          },
          chapters: {
            title: "章节划分 • पाद",
            description: "全书共196条经文，分为四品（पाद pāda）：1. 三昧品（समाधिपाद），2. 修行品（साधनपाद），3. 神通品（विभूतिपाद），4. 独存品（कैवल्यपाद）。"
          }
        }
      }
    }
  };

  // ============================================
  // 2. 获取当前语言的内容
  // ============================================
  
  const content = yogaSutraData[language as keyof typeof yogaSutraData];
  const meta = content.meta;
  const sections = content.sections;
  const verses = content.verses;
  const additional = content.additionalContent;

  // ============================================
  // 3. 标签页配置
  // ============================================
  
  const sectionTabs = {
    introduction: sections.introduction.tabTitle,
    samadhi: sections.samadhi.tabTitle,
    sadhana: sections.sadhana.tabTitle,
    vibhuti: sections.vibhuti.tabTitle,
    kaivalya: sections.kaivalya.tabTitle
  };

  // ============================================
  // 4. 渲染函数 - 保持干净，只负责显示逻辑
  // ============================================
  
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-white pt-12">
        {/* 页面头部 - 从meta获取 */}
        <div className="max-w-6xl mx-auto px-4 pt-4 pb-2 md:pt-6 md:pb-3">
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
        <div className="max-w-6xl mx-auto px-4 pb-6 md:pb-8">
          {/* 简介页面 */}
          {activeSection === 'introduction' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-4">
                {sections.introduction.pageTitle}
              </h2>
              
              {/* 开篇颂 */}
              <div className="space-y-6">
                <h3 className="text-sm font-medium text-gray-800 mb-3">
                  {language === 'zh' ? '开篇颂' : 'Opening Invocation'}
                </h3>
                
                {/* 经文列表 - 从数据循环渲染 */}
                {verses.introduction.map((verse, index) => (
                  <div key={index} className="pb-3 mb-3 border-b border-gray-200">
                    <div className="text-xs font-medium text-gray-800 mb-1.5">
                      {verse.verse}
                    </div>
                    <div className="font-sans text-sm md:text-base leading-relaxed mb-1.5 whitespace-pre-line">
                      {verse.devanagari}
                    </div>
                    <div className="text-xs italic text-gray-600 leading-relaxed mb-1.5 whitespace-pre-line">
                      {verse.sanskrit}
                    </div>
                    <div className="text-xs md:text-sm text-gray-800 leading-relaxed mb-1.5 whitespace-pre-line">
                      {verse.translation}
                    </div>
                    <div className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                      {verse.meaning}
                    </div>
                  </div>
                ))}
              </div>

              {/* 作者介绍 */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-xs font-medium text-gray-700 mb-2">
                  {additional.author.title}
                </h4>
                <p className="text-xs text-gray-700 mb-2 leading-relaxed">
                  {additional.author.description}
                </p>
                <ul className="text-xs text-gray-700 space-y-1 ml-0.5">
                  {additional.author.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-1.5 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 经文结构 */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-xs font-medium text-gray-700 mb-3">
                  {additional.structure.title}
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-xs font-medium text-gray-700 mb-1.5">
                      {additional.structure.literaryForm.title}
                    </h5>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {additional.structure.literaryForm.description}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs font-medium text-gray-700 mb-1.5">
                      {additional.structure.chapters.title}
                    </h5>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {additional.structure.chapters.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 经文章节页面 */}
          {['samadhi', 'sadhana', 'vibhuti', 'kaivalya'].includes(activeSection) && (
            <div>
              {/* 页面标题 - 从sections中获取 */}
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1">
                {sections[activeSection].pageTitle}
              </h2>
              
              {/* 章节标题 - 从sections.chapterHeader获取 */}
              {'chapterHeader' in sections[activeSection] && (
                <div className="mb-3 md:mb-3.5">
                  {/* 中文部分 */}
                  <div className="text-xs text-gray-800 mb-0.5">
                    {sections[activeSection].chapterHeader.chapter}
                  </div>
                  {/* 梵语部分 - 深红色 */}
                  <div className="text-xs font-medium text-red-700 font-mono tracking-tight">
                    {sections[activeSection].chapterHeader.sanskrit}
                  </div>
                </div>
              )}
              
              {/* 经文列表 */}
              <div className="space-y-0">
                {verses[activeSection].map((verse, index) => (
                  <div key={index} className="py-3 md:py-3.5 border-b border-gray-100">
                    {/* 经文内容 - 5行格式 */}
                    <div className="space-y-1.5">
                      {/* 第1行：经文编号 */}
                      <div className="text-xs font-medium text-gray-800">
                        {verse.verse}
                      </div>
                      
                      {/* 第2行：天城体 */}
                      <div className="font-sans text-sm md:text-base leading-tight tracking-tight whitespace-pre-line">
                        {verse.devanagari}
                      </div>
                      
                      {/* 第3行：梵文转写 */}
                      <div className="text-xs italic text-gray-600 font-mono leading-tight whitespace-pre-line">
                        {verse.sanskrit}
                      </div>
                      
                      {/* 第4行：翻译 */}
                      <div className="text-xs text-gray-800 leading-tight pt-0.5 whitespace-pre-line">
                        {verse.translation}
                      </div>
                      
                      {/* 第5行：释义 */}
                      <div className="text-[11px] md:text-xs text-gray-600 leading-relaxed pt-0.5">
                        {verse.meaning}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
              {meta.backButton}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
