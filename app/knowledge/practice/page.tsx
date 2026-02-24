'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

const practiceData = {
  en: {
    title: "Methods of āsana Practice",
    subtitle: "体式练习方法",
    intro: "A comprehensive guide to Ashtanga Yoga asana practice methods, covering philosophical foundations, practice principles, and progression through series.",
    sections: {
      essence: {
        title: "Essence of āsana",
        content: "The Classical View of Postures"
      },
      principles: {
        title: "Practice Principles",
        content: "Key Guidelines for Effective Practice"
      },
      primary: {
        title: "Primary Series",
        content: "yoga chikitsā - Yoga Therapy"
      },
      intermediate: {
        title: "Intermediate Series",
        content: "nāḍī śodhana - Nerve Purification"
      },
      advanced: {
        title: "Advanced Series",
        content: "sthira bhāga - Divine Stability"
      }
    },
    essence: {
      sutras: [
        {
          devanagari: "स्थिरसुखमासनम्",
          sanskrit: "sthira-sukham āsanam",
          meaning: "āsana should be steady and comfortable",
          source: "yoga sūtra 2.46"
        },
        {
          devanagari: "हठस्य प्रथमाङ्गत्वाद् आसनं पूर्वम् उच्यते।कुर्यात् तद् आसनं स्थैर्यम् आरोग्यं चाङ्गलाघवम्॥",
          sanskrit: "haṭhasya prathama-aṅgatvād-āsanaṁ pūrvam-ucyate。kuryāt-tad-āsanaṃ sthairyam-ārogyaṃ ca-aṅga-lāghvam॥",
          meaning: "āsana is said to be the first limb of Hatha Yoga; practice of āsana brings steadiness, health and lightness of body",
          source: "haṭha pradīpikā 1.17"
        },
        {
          devanagari: "आसने स्थिरतां प्राप्य प्राणायामं समभ्यसेत्",
          sanskrit: "āsane sthiratāṃ prāpya prāṇāyāmaṃ samabhyaset",
          meaning: "After attaining stability in āsana, one should practice prāṇāyāma",
          source: "haṭha pradīpikā 2.1"
        }
      ],
      content: [
        "āsana should be maintained with 'steadiness (sthira) and comfort (sukha)' — this is the fundamental principle from patañjali's yoga sūtra.",
        "Through relaxation of effort (prayatna-śaithilya), this state is achieved, reducing disturbances from external dualities.",
        "In classical yoga, discussions about āsana primarily refer to seated postures. The main purpose is to enable the body to remain still for extended periods, preparing for prāṇāyāma and dhyāna.",
        "Modern yoga's various complex postures are largely later developments. The essence of āsana practice lies not in external difficulty but in cultivating bodily stability and endurance."
      ],
      explanation: {
        title: "From Classical to Modern Practice",
        points: [
          "While classical yoga emphasizes static seated postures, modern Ashtanga Yoga has developed a complete system of dynamic āsana sequences.",
          "This is not a departure from tradition but an expansion of āsana's functions:",
          "1. Body preparation → Body purification",
          "2. Single posture → Progressive sequences",
          "3. External form → Internal process",
          "Seemingly contradictory, yet unified: whether static or dynamic, the ultimate goal remains 'steadiness and focus of body and mind'."
        ]
      }
    },
    principles: {
      sutras: [
        {
          devanagari: "तत्र स्थितौ यत्नः अभ्यासः",
          sanskrit: "tatra sthitau yatnaḥ abhyāsaḥ",
          meaning: "Practice is the sustained effort to maintain steadines",
          source: "yoga sūtra 1.13"
        }
      ],
      content: [
        "In the practice of Ashtanga Yoga, the integration of movement and breath is foundational, though not mechanically fixed to a one-to-one correspondence. Rather, each āsana incorporates specific breathing patterns: some movements align with inhalation, others with exhalation, creating a dynamic interplay that cultivates both physical and energetic balance. This deliberate coordination engages the body's internal mechanisms, generating therapeutic heat that facilitates purification processes.",
        
        "The methodology emphasizes a graduated approach, wherein practitioners work through groups of postures rather than perfecting individual āsanas in isolation. This sequential progression allows the body to open gradually, reducing the risk of injury while building the necessary strength and flexibility for more advanced practice. Each series is designed as an integrated whole, with postures complementing and preparing the body for subsequent ones.",
        
        "Central to the practice is the concept of tristhāna, which encompasses posture, breathing, and focused attention. Nasal breathing is maintained throughout, with both inhalation and exhalation conducted through the nose to regulate internal heat and energy flow. The auditory quality of the breath naturally engages subtle energetic locks, integrating rather than isolating these mechanisms. Visual focus points, including the nose tip (nāsāgra), eyebrow center (bhrūmadhya), navel (nābhicakra), fingertips (hastāgra), thumb tips (aṅguṣṭhāgra), toe tips (pādāgra), sides (pārśva), upward (ūrdhva), inward (antara), and downward (adhaḥ), serve to stabilize attention and direct awareness inward. These ten dr̥ṣṭis are employed according to the specific requirements of each posture.",
        
        "Practice follows a structured sequence beginning with Sūrya Namaskāra, progressing through standing postures, seated postures, inversions, and concluding with restorative positions. This systematic approach ensures comprehensive engagement of all bodily systems. Traditional practice schedules typically involve six days of practice with one rest day, with additional consideration given to natural cycles that may warrant modified practice intensity.",
        
        "The therapeutic effects unfold progressively, beginning with physical purification over months of consistent practice, gradually extending to energetic and mental refinement over years of dedicated engagement. The practice serves not only as physical preparation but as a foundation for states of absorption.",
        
        "Guidance from experienced practitioners is essential for navigating this complex system, particularly in understanding alignment principles and making appropriate modifications. While textual resources provide valuable context, direct experiential transmission remains central to the tradition's pedagogical approach. Practitioners are encouraged to cultivate sensitivity to their body's responses, adjusting intensity and duration according to individual capacity and changing circumstances."
      ]
    },
      primary: {
        sutras: [],
        content: []
      },
    intermediate: {
      sutras: [],
      content: []
    },
    advanced: {
      sutras: [],
      content: []
    }
  },
  zh: {
    title: "体式练习方法",
    subtitle: "Methods of āsana Practice",
    intro: "阿斯汤加瑜伽体式练习方法综合指南，涵盖哲学基础、练习原则及系列进阶。",
    sections: {
      essence: {
        title: "体式本质",
        content: "古典瑜伽的体式观"
      },
      principles: {
        title: "练习原则",
        content: "有效练习的关键指导"
      },
      primary: {
        title: "初级系列",
        content: "瑜伽理疗"
      },
      intermediate: {
        title: "中级系列",
        content: "气脉净化"
      },
      advanced: {
        title: "高级系列",
        content: "神圣稳定"
      }
    },
    essence: {
      sutras: [
        {
          devanagari: "स्थिरसुखमासनम्",
          sanskrit: "sthira-sukham āsanam",
          meaning: "体式需稳定与舒适",
          source: "《瑜伽经》2.46"
        },
        {
          devanagari: "हठस्य प्रथमाङ्गत्वाद् आसनं पूर्वम् उच्यते।कुर्यात् तद् आसनं स्थैर्यम् आरोग्यं चाङ्गलाघवम्॥",
          sanskrit: "haṭhasya prathama-aṅgatvād-āsanaṁ pūrvam-ucyate。kuryāt-tad-āsanaṃ sthairyam-ārogyaṃ ca-aṅga-lāghvam॥",
          meaning: "体式是基础，练习体式可使姿势安稳，身轻体健",
          source: "《哈他之光》1.17"
        },
        {
          devanagari: "आसने स्थिरतां प्राप्य प्राणायामं समभ्यसेत्",
          sanskrit: "āsane sthiratāṃ prāpya prāṇāyāmaṃ samabhyaset",
          meaning: "体式稳定后，方可修习调息",
          source: "《哈他之光》2.1"
        }
      ],
      content: [
        "体式应保持'稳定（sthira）而舒适（sukha）'——这是帕坦伽利《瑜伽经》的基本原则。",
        "通过放松身体（prayatna-śaithilya）达到这种状态，减少外界干扰。",
        "在古典瑜伽中，体式主要针对坐姿。主要目的是让身体能够长时间保持静止，为调息和禅定做准备。",
        "现代瑜伽的各种复杂体式大多是后来发展的。体式修习的核心不在于外在难度，而在培养身体的稳定性和耐力。"
      ],
      explanation: {
        title: "从古典到现代的转化",
        points: [
          "虽然古典瑜伽强调静态坐姿，但现代阿斯汤加瑜伽发展出了一套完整的动态体式系统。",
          "这并非背离传统，而是体式功能的扩展：",
          "1. 身体准备 → 身体净化",
          "2. 单一姿势 → 渐进序列",
          "3. 外在形式 → 内在过程",
          "看似矛盾，实则统一：无论静态还是动态，最终目标都是'身心的稳定与专注'。"
        ]
      }
    },
    principles: {
      sutras: [
        {
          devanagari: "तत्र स्थितौ यत्नः अभ्यासः",
          sanskrit: "tatra sthitau yatnaḥ abhyāsaḥ",
          meaning: "修行为保持身心稳定所付出的持续努力",
          source: "《瑜伽经》1.13"
        }
      ],
      content: [
        "在阿斯汤加瑜伽的实践中，动作与呼吸的整合具有根本性意义，但这种整合并非机械的一对一对应关系。每个体式都包含特定的呼吸模式：某些动作与吸气协调，另一些则与呼气配合，形成动态的相互作用，培养身体与能量的平衡。这种有意识的协调调动身体的内在机制，产生具有治疗作用的内在热量，促进净化过程。",
        
        "该方法论强调渐进式的练习方式，练习者以体式组为单位逐步推进，而非孤立地完善单个体式。这种序列式的进展使身体能够逐步打开，在减少受伤风险的同时，为更高级的练习建立必要的力量和柔韧性。每个系列都被设计为一个有机整体，体式之间相互补充，为后续练习做好准备。",
        
        "实践的核心是tristhāna（三处专注）概念，涵盖体式、呼吸和专注力。全程保持鼻呼吸，吸气和呼气均通过鼻子进行，以调节内在热量和能量流动。呼吸的声音品质自然地调动精微的能量锁，将这些机制整合而非孤立运用。视觉焦点，包括鼻尖（nāsāgra）、眉心（bhrūmadhya）、肚脐（nābhicakra）、手指尖（hastāgra）、拇指尖（aṅguṣṭhāgra）、脚趾尖（pādāgra）、侧边（pārśva）、向上（ūrdhva）、内在（antara）和向下（adhaḥ），用以稳定注意力并将觉知导向内在。这十种凝视点根据每个体式的具体要求而运用。",
        
        "练习遵循结构化的序列，从拜日式开始，逐步进行站立体式、坐立体式、倒立体式，最后以恢复性姿势结束。这种系统化的方法确保全面调动所有身体系统。传统的练习安排通常是六天练习配合一天休息，同时考虑自然周期可能需要的练习强度调整。",
        
        "治疗效果随着时间逐步显现：持续的练习在数月内带来身体层面的净化，数年的精进修行则逐渐扩展至能量和心理层面的精炼。这种练习不仅作为身体准备，更是禅定状态的基础。",
        
        "有经验的练习者指导对于驾驭这一复杂系统至关重要，特别是在理解对齐原则和进行适当调整方面。虽然文本资源提供了有价值的背景信息，但直接的体验性传授仍然是传统教学法的核心。鼓励练习者培养对身体反应的敏感性，根据个人能力和变化的环境调整练习强度和时长。"
      ]
    },
      primary: {
        sutras: [],
        content: []
      },
    intermediate: {
      sutras: [],
      content: []
    },
    advanced: {
      sutras: [],
      content: []
    }
  }
};

export default function PracticeMethodsPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'essence' | 'principles' | 'primary' | 'intermediate' | 'advanced'>('essence');

  const practiceContent = practiceData[language as keyof typeof practiceData];

  const sectionTabs = {
    essence: practiceContent.sections.essence.title,
    principles: practiceContent.sections.principles.title,
    primary: practiceContent.sections.primary.title,
    intermediate: practiceContent.sections.intermediate.title,
    advanced: practiceContent.sections.advanced.title
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-12">
        {/* 文章标题部分 */}
        <div className="max-w-4xl mx-auto px-4 pt-4 pb-2 md:pt-6 md:pb-3">
          <h1 className="text-base md:text-lg font-medium text-gray-900 mb-1 tracking-tight">
            {practiceContent.title}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-1.5">
            {practiceContent.subtitle}
          </p>
          <p className="text-xs md:text-sm text-gray-700 mb-3 leading-snug">
            {practiceContent.intro}
          </p>
        </div>

        {/* SectionTabs 组件 */}
        <SectionTabs
          sections={sectionTabs}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* 内容区域 */}
        <div className="max-w-4xl mx-auto px-4 pb-6 md:pb-8">
          {activeSection === 'essence' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-3">
                {practiceContent.sections.essence.content}
              </h2>
              
              {/* 文本内容部分 */}
              <div className="space-y-3 mb-4">
                {practiceContent.essence.content.map((paragraph, index) => (
                  <p key={index} className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* 矛盾解释部分 */}
              <div className="mt-6 p-2">
                <h3 className="text-sm font-medium text-gray-800 mb-3">
                  {practiceContent.essence.explanation.title}
                </h3>
                <div className="space-y-2">
                  {practiceContent.essence.explanation.points.map((point, index) => (
                    <p key={index} className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* 经文引用部分 */}
              <div className="space-y-2 mt-6 pt-6 border-t border-gray-100">
                {practiceContent.essence.sutras.map((sutra, index) => (
                  <div key={index} className="text-xs text-gray-600 leading-tight py-1.5">
                    <div className="font-sans mb-0.5">{sutra.devanagari}</div>
                    <div className="italic mb-0.5">{sutra.sanskrit}</div>
                    <div className="text-gray-700 mb-0.5">{sutra.meaning}</div>
                    <div className="text-gray-500 text-[10px]">{sutra.source}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'principles' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-3">
                {practiceContent.sections.principles.content}
              </h2>
              
              {/* 经文引用 */}
              {practiceContent.principles.sutras.length > 0 && (
                <div className="mb-6">
                  {practiceContent.principles.sutras.map((sutra, index) => (
                    <div key={index} className="text-xs text-gray-600 leading-tight">
                      <div className="font-sans mb-1">{sutra.devanagari}</div>
                      <div className="italic mb-1">{sutra.sanskrit}</div>
                      <div className="text-gray-700 mb-1">{sutra.meaning}</div>
                      <div className="text-gray-500 text-[10px]">{sutra.source}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* 完整的学术性段落 */}
              <div className="space-y-4">
                {practiceContent.principles.content.map((paragraph, index) => (
                  <p key={index} className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'primary' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-3">
                {practiceContent.sections.primary.content}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '初级系列内容待添加...' : 'Primary series content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'intermediate' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {practiceContent.sections.intermediate.content}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '中级系列内容待添加...' : 'Intermediate series content pending...'}
              </p>
            </div>
          )}

          {activeSection === 'advanced' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                {practiceContent.sections.advanced.content}
              </h2>
              <p className="text-xs text-gray-500">
                {language === 'zh' ? '高级系列内容待添加...' : 'Advanced series content pending...'}
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
