'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function PranayamaPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'essence' | 'energy' | 'techniques' | 'practices' | 'safety'>('essence');

  // ============================================
  // 数据定义 - 按调息法体系分类
  // ============================================
  
  const pranayamaData = {
    en: {
      // 页面基本信息
      meta: {
        title: "Pranayama: The Science of Breath Control",
        subtitle: "प्राणायाम प्राणायामः",
        intro: "The systematic practice of regulating life energy through conscious control of breath, forming the bridge between physical postures and meditative states in classical yoga.",
        backButton: "Back to Knowledge Base"
      },

      // 标签页配置
      sections: {
        essence: {
          tabTitle: "Essence",
          pageTitle: "THE DEFINITION AND PRINCIPLES OF PRANAYAMA",
          description: "Classical definitions and fundamental theories of breath control."
        },
        energy: {
          tabTitle: "Energy Systems",
          pageTitle: "PRĀṆA AND THE VITAL WINDS",
          description: "Understanding the subtle energy systems that pranayama works with."
        },
        techniques: {
          tabTitle: "Core Techniques",
          pageTitle: "FUNDAMENTAL METHODS AND BANDHAS",
          description: "Essential techniques including the three locks and breath components."
        },
        practices: {
          tabTitle: "Practice Systems",
          pageTitle: "PRANAYAMA PRACTICES AND METHODS",
          description: "Systematic breathing practices for purification and energy cultivation."
        },
        safety: {
          tabTitle: "Safety Guidelines",
          pageTitle: "SAFETY PRINCIPLES AND CONTRAINDICATIONS",
          description: "Essential precautions and practice guidelines for safe pranayama."
        }
      },

      // 内容数据
      content: {
        essence: [
          {
            title: "Classical Definition",
            devanagari: "प्राणायाम",
            sanskrit: "prāṇāyāma",
            translation: "Extension and control of life energy.",
            explanation: "Prāṇa (life force) + āyāma (extension, control). The conscious regulation of breath through interruption (vicchedaḥ), prolongation (dīrgha), and refinement (sūkṣma) of breathing patterns."
          },
          {
            title: "Patañjali's Definition",
            devanagari: "तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः",
            sanskrit: "tasmin sati śvāsa-praśvāsyor gati-vicchedaḥ prāṇāyāmaḥ",
            translation: "When posture is steady, the conscious interruption of the natural flow of inhalation and exhalation is prāṇāyāma.",
            explanation: "Yoga Sūtra 2.49. Prāṇāyāma begins only after āsana is stabilized. It involves conscious intervention in the automatic breathing process."
          },
          {
            title: "The Three Modulations",
            devanagari: "बाह्याभ्यन्तरस्तम्भवृत्तिः देशकालसंख्याभिः परिदृष्टो दीर्घसूक्ष्मः",
            sanskrit: "bāhyābhyantarastambhavṛttiḥ deśakālasaṃkhyābhiḥ paridṛṣṭo dīrghasūkṣmaḥ",
            translation: "Prāṇāyāma has external (exhalation), internal (inhalation), and suspended (retention) movements. Regulated by place, time, and count, they become prolonged and subtle.",
            explanation: "Yoga Sūtra 2.50. The three components are regulated progressively through spatial awareness (deśa), timing (kāla), and numerical count (saṃkhyā)."
          },
          {
            title: "The Four Components",
            devanagari: "छेदनं पूरकं कुम्भकं रेचकं प्राणायामः",
            sanskrit: "chhedanaṃ pūrakaṃ kumbhakaṃ recakaṃ prāṇāyāmaḥ",
            translation: "Purification, inhalation, retention, and exhalation constitute prāṇāyāma.",
            explanation: "Haṭha Yoga Pradīpikā 2.1. The complete process includes preparatory cleansing, followed by the three main phases of breath control."
          }
        ],
        energy: [
          {
            title: "The Universal Life Force",
            devanagari: "प्राण",
            sanskrit: "prāṇa",
            translation: "The cosmic and individual life energy.",
            explanation: "Prāṇa exists at cosmic level (mahā-prāṇa) and individual level (prāṇa-vāyu). Its movement forms are called vāyu. 'prāṇo hi bhūtānām āyuḥ' - Prāṇa is the life span of all beings (Taittirīya Upaniṣad 2.1)."
          },
          {
            title: "The Five Vital Winds",
            devanagari: "पञ्च वायु",
            sanskrit: "pañca vāyu",
            translation: "The five primary movements of prāṇa.",
            explanation: "The subtle energy currents operating through the nervous system in the subtle body."
          },
          {
            title: "Inward Moving Energy",
            devanagari: "प्राण-वायु",
            sanskrit: "prāṇa-vāyu",
            translation: "Upward moving energy, throat to heart.",
            explanation: "Governs respiration, circulation, swallowing. Activated by jālandhara bandha (throat lock). Moves upward from navel to throat."
          },
          {
            title: "Downward Moving Energy",
            devanagari: "अपान-वायु",
            sanskrit: "apāna-vāyu",
            translation: "Downward moving energy, navel to feet.",
            explanation: "Governs elimination, reproduction, menstruation. Activated by mūla bandha (root lock). Moves downward from navel to anus."
          },
          {
            title: "Balancing Energy",
            devanagari: "समान-वायु",
            sanskrit: "samāna-vāyu",
            translation: "Equalizing energy, heart to navel.",
            explanation: "Governs digestion, metabolism, assimilation. Activated by uḍḍīyana bandha (abdominal lock). Resides at navel center."
          },
          {
            title: "Ascending Energy",
            devanagari: "उदान-वायु",
            sanskrit: "udāna-vāyu",
            translation: "Upward energy, throat to crown.",
            explanation: "Governs speech, expression, consciousness elevation. Activated in meditation (dhyāna). Responsible for leaving body at death."
          },
          {
            title: "Pervasive Energy",
            devanagari: "व्यान-वायु",
            sanskrit: "vyāna-vāyu",
            translation: "Circulatory energy throughout body.",
            explanation: "Governs circulation, nerve impulses, muscle movements. Activated by āsana practice. Creates aura around body."
          }
        ],
        techniques: [
          {
            title: "The Three Breath Components",
            devanagari: "पूरक-कुम्भक-रेचक",
            sanskrit: "pūraka-kumbhaka-recaka",
            translation: "Inhalation, retention, exhalation.",
            explanation: "The fundamental triad of prāṇāyāma practice, regulated by time, place, and count."
          },
          {
            title: "Throat Lock",
            devanagari: "जालन्धर बन्ध",
            sanskrit: "jālandhara bandha",
            translation: "Contract throat, chin to chest.",
            explanation: "Prevents energy leakage, stabilizes neck energy flow, regulates blood pressure during retention. Essential during internal retention."
          },
          {
            title: "Abdominal Lock",
            devanagari: "उड्डीयन बन्ध",
            sanskrit: "uḍḍīyana bandha",
            translation: "Draw abdomen up toward spine.",
            explanation: "Performed after exhalation. Forces prāṇa upward, stimulates digestive fire, guides energy into suṣumṇā. The 'flying up' lock."
          },
          {
            title: "Root Lock",
            devanagari: "मूल बन्ध",
            sanskrit: "mūla bandha",
            translation: "Contract perineum, draw upward.",
            explanation: "Seals apāna vāyu, reverses its downward flow to unite with prāṇa vāyu. Foundation for kuṇḍalinī awakening. 'mūla-bandhaḥ apānaṃ ūrdhvaṃ nayati' - Root lock makes apāna move upward."
          },
          {
            title: "Internal Retention",
            devanagari: "आभ्यन्तर कुम्भक",
            sanskrit: "ābhyantara kumbhaka",
            translation: "Retention after inhalation.",
            explanation: "Lungs full, energy ascending. Accompanied by jālandhara bandha. Builds vital capacity and mental focus."
          },
          {
            title: "External Retention",
            devanagari: "बाह्य कुम्भक",
            sanskrit: "bāhya kumbhaka",
            translation: "Retention after exhalation.",
            explanation: "Lungs empty, energy descending. Accompanied by uḍḍīyana and mūla bandhas. Purifies nadis and calms nervous system."
          }
        ],
        practices: [
          {
            title: "Essential Prerequisite",
            devanagari: "नाडी शोधन",
            sanskrit: "nāḍī śodhana",
            translation: "Channel purification.",
            explanation: "The foundational practice that must precede all other prāṇāyāma. Purifies 72,000 energy channels, balances idā and piṅgalā, prepares suṣumṇā for energy flow."
          },
          {
            title: "Method 1: Basic Purification",
            devanagari: "मूल शोधन क्रिया",
            sanskrit: "mūla śodhana kriyā",
            translation: "Fundamental cleansing practice.",
            explanation: "1. Begin with 3 breaths through both nostrils. 2. Close right nostril, breathe through left 10 times. 3. Close left nostril, breathe through right 10 times. 4. Finish with 3 breaths through both nostrils. Ratio progression: 1:1 → 1:2 → 1:2:2 → 1:4:2."
          },
          {
            title: "Method 2: Alternate Nostril",
            devanagari: "अनुलोम-विलोम",
            sanskrit: "anuloma-viloma",
            translation: "With and against the grain.",
            explanation: "1. Inhale left → exhale right (10 rounds). 2. Inhale right → exhale left (10 rounds). 3. Both nostrils breathing (3 rounds). Advanced: Add retention after mastering equal flow through both nostrils."
          },
          {
            title: "Method 3: Central Channel Activation",
            devanagari: "सुषुम्ना प्रवेश",
            sanskrit: "suṣumṇā praveśa",
            translation: "Entering the central channel.",
            explanation: "Left inhale → right exhale → right inhale → left exhale = 1 cycle. Begin with 10 cycles, add 1 per week. After 3 months, add retention: 1:2:2 progressing to 1:4:2. Only for those with balanced nasal flow."
          },
          {
            title: "Skull Shining Breath",
            devanagari: "कपालभाति",
            sanskrit: "kapālabhāti",
            translation: "Skull illuminating.",
            explanation: "Active exhalation technique. Short, forceful exhalations through both nostrils with passive inhalations. Cleanses frontal sinuses, energizes brain. Begin with 15-20 repetitions for 3 rounds. Contraindicated for hypertension, heart conditions."
          },
          {
            title: "The Ultimate Goal",
            devanagari: "प्राणः स्वयं प्रवहति",
            sanskrit: "prāṇaḥ svayaṃ pravahati",
            translation: "The prāṇa flows by itself.",
            explanation: "The final stage where breath regulation becomes spontaneous and natural. The practitioner achieves kevala kumbhaka (automatic retention) where breathing stops voluntarily, leading to deep meditation states."
          }
        ],
        safety: [
          {
            title: "The Primary Warning",
            devanagari: "न शुद्धे नाडीचक्रे प्राणः क्षेत्रं प्रविशति",
            sanskrit: "na śuddhe nāḍīcakre prāṇaḥ kṣetraṃ praviśati",
            translation: "If the channels are not purified, prāṇa cannot enter the central channel.",
            explanation: "Haṭha Yoga Pradīpikā 2.4-5. Without nāḍī śodhana, all prāṇāyāma practice is in vain. Purification must precede all advanced practices."
          },
          {
            title: "Progression Principle",
            devanagari: "क्रमेण अभ्यासः",
            sanskrit: "krameṇa abhyāsaḥ",
            translation: "Practice in gradual progression.",
            explanation: "Begin with 1:1 inhalation:exhalation ratio. Master this before adding retention (1:1:1). Progress to 1:2:1 (inhale:retain:exhale). Never force or rush progression."
          },
          {
            title: "Optimal Practice Time",
            devanagari: "ब्रह्ममुहूर्त",
            sanskrit: "brahma-muhūrta",
            translation: "The divine hour before sunrise.",
            explanation: "1.5 hours before sunrise is ideal for prāṇāyāma. Atmospheric prāṇa is purest, mind is calm, stomach is empty. Second best time is sunset."
          },
          {
            title: "Dietary Considerations",
            devanagari: "लघु आहार",
            sanskrit: "laghu āhāra",
            translation: "Light food.",
            explanation: "Practice on empty stomach or 3-4 hours after meal. Avoid heavy, spicy, or processed foods. Sattvic diet enhances prāṇāyāma benefits."
          },
          {
            title: "Postural Foundation",
            devanagari: "आसनं प्राणसंरोधः",
            sanskrit: "āsanaṃ prāṇa-saṃrodhaḥ",
            translation: "Posture is for controlling prāṇa.",
            explanation: "Haṭha Pradīpikā 1.56. The essential aim of āsana practice is to prepare the body for the mastery of prāṇa. One may only embark upon profound breath control after establishing stability in seated postures (such as siddhāsana or padmāsana) and maintaining spinal alignment."
          },
          {
            title: "Key Contraindications",
            devanagari: "वर्ज्य अवस्थाः",
            sanskrit: "varjya avasthāḥ",
            translation: "Conditions to avoid practice.",
            explanation: "1. Hypertension, heart conditions. 2. Recent abdominal surgery. 3. Glaucoma, retinal detachment. 4. Pregnancy (certain techniques). 5. During menstruation (retentions). 6. Extreme fatigue or illness."
          }
        ]
      }
    },

    zh: {
      // 页面基本信息
      meta: {
        title: "调息法：生命能量调控的科学",
        subtitle: "प्राणायाम प्राणायामः",
        intro: "通过有意识地调控呼吸来调节生命能量的系统练习，在古典瑜伽中构成连接体位法与冥想状态的桥梁。",
        backButton: "返回知识库"
      },

      // 标签页配置
      sections: {
        essence: {
          tabTitle: "本质定义",
          pageTitle: "调息法的定义与基本原理",
          description: "古典文献中调息法的定义与根本理论。"
        },
        energy: {
          tabTitle: "能量系统",
          pageTitle: "生命气与五大气",
          description: "调息法所作用的精微能量系统。"
        },
        techniques: {
          tabTitle: "核心技术",
          pageTitle: "基本方法与锁印",
          description: "包括三锁与呼吸三要素在内的关键技术。"
        },
        practices: {
          tabTitle: "实践体系",
          pageTitle: "调息练习与方法",
          description: "用于净化和能量培养的系统性呼吸练习。"
        },
        safety: {
          tabTitle: "安全准则",
          pageTitle: "安全原则与禁忌",
          description: "安全练习调息法的重要注意事项与指导原则。"
        }
      },

      // 内容数据
      content: {
        essence: [
          {
            title: "古典定义",
            devanagari: "प्राणायाम",
            sanskrit: "prāṇāyāma",
            translation: "生命能量的扩展与控制。",
            explanation: "Prāṇa（生命能量）+ āyāma（扩展、控制）。通过有意识地中断、延长与精微化呼吸模式来调控呼吸的技术。"
          },
          {
            title: "帕坦伽利定义",
            devanagari: "तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः",
            sanskrit: "tasmin sati śvāsa-praśvāsyor gati-vicchedaḥ prāṇāyāmaḥ",
            translation: "稳固体式后，吸息、呼息的流有意识中断，即为调息。",
            explanation: "《瑜伽经》2.49。调息法仅在体式稳定之后开始。它涉及对自动呼吸过程的有意识干预。"
          },
          {
            title: "三种调控",
            devanagari: "बाह्याभ्यन्तरस्तम्भवृत्तिः देशकालसंख्याभिः परिदृष्टो दीर्घसूक्ष्मः",
            sanskrit: "bāhyābhyantarastambhavṛttiḥ deśakālasaṃkhyābhiḥ paridṛṣṭo dīrghasūkṣmaḥ",
            translation: "调息有外在、内在与悬停三种运动。通过空间、时间与次数的调节，它们变得延长且精微。",
            explanation: "《瑜伽经》2.50。这三个组成部分通过空间意识、时间控制和次数计量逐步调节。"
          },
          {
            title: "四个组成部分",
            devanagari: "छेदनं पूरकं कुम्भकं रेचकं प्राणायामः",
            sanskrit: "chhedanaṃ pūrakaṃ kumbhakaṃ recakaṃ prāṇāyāmaḥ",
            translation: "净化、吸气、屏息和呼气构成调息。",
            explanation: "《哈他之光》2.1。完整过程包括预备净化，然后是呼吸控制的三个主要阶段。"
          }
        ],
        energy: [
          {
            title: "宇宙生命能量",
            devanagari: "प्राण",
            sanskrit: "prāṇa",
            translation: "宇宙与个体的生命能量。",
            explanation: "普拉纳存在于宇宙层面（大普拉纳）和个体层面（生命气）。其运动形式称为风息。'普拉纳是众生的生命源泉'（《泰帝利奥义书》2.1）。"
          },
          {
            title: "五大气",
            devanagari: "पञ्च वायु",
            sanskrit: "pañca vāyu",
            translation: "普拉纳的五种主要运动。",
            explanation: "在精微身中通过神经系统运作的精微能量流。"
          },
          {
            title: "命气",
            devanagari: "प्राण-वायु",
            sanskrit: "prāṇa-vāyu",
            translation: "上行之气，喉至心。",
            explanation: "掌管呼吸、循环、吞咽。由喉锁激活。从脐部向上移动至喉部。"
          },
          {
            title: "下行气",
            devanagari: "अपान-वायु",
            sanskrit: "apāna-vāyu",
            translation: "下行之气，脐至足。",
            explanation: "掌管排泄、生殖、月经。由根锁激活。从脐部向下移动至肛门。"
          },
          {
            title: "平行气",
            devanagari: "समान-वायु",
            sanskrit: "samāna-vāyu",
            translation: "平衡之气，心至脐。",
            explanation: "掌管消化、代谢、吸收。由腹锁激活。位于脐轮中心。"
          },
          {
            title: "上行气",
            devanagari: "उदान-वायु",
            sanskrit: "udāna-vāyu",
            translation: "上升之气，喉至顶。",
            explanation: "掌管语言、表达、意识提升。在冥想中激活。负责离体时的能量上升。"
          },
          {
            title: "遍行气",
            devanagari: "व्यान-वायु",
            sanskrit: "vyāna-vāyu",
            translation: "遍及全身之气。",
            explanation: "掌管循环、神经脉冲、肌肉运动。通过体式练习激活。在身体周围创造辉光。"
          }
        ],
        techniques: [
          {
            title: "呼吸三要素",
            devanagari: "पूरक-कुम्भक-रेचक",
            sanskrit: "pūraka-kumbhaka-recaka",
            translation: "吸气、屏息、呼气。",
            explanation: "调息练习的基本三要素，通过时间、位置和次数来调控。"
          },
          {
            title: "喉锁",
            devanagari: "जालन्धर बन्ध",
            sanskrit: "jālandhara bandha",
            translation: "收缩喉咙，下颌抵胸口。",
            explanation: "防止能量泄漏，稳定颈部能量流动，调节屏息时的血压。在内屏息期间尤为重要。"
          },
          {
            title: "腹锁",
            devanagari: "उड्डीयन बन्ध",
            sanskrit: "uḍḍīyana bandha",
            translation: "腹部向后背上提。",
            explanation: "在呼气后进行。迫使命气上行，刺激消化之火，引导能量进入中脉。'飞翔之锁'。"
          },
          {
            title: "根锁",
            devanagari: "मूल बन्ध",
            sanskrit: "mūla bandha",
            translation: "收缩会阴，向上提。",
            explanation: "封存下行气，逆转其下行趋势与命气结合。昆达里尼觉醒的基础。'根锁使下行气向上逆转'。"
          },
          {
            title: "内屏息",
            devanagari: "आभ्यन्तर कुम्भक",
            sanskrit: "ābhyantara kumbhaka",
            translation: "吸气后屏息。",
            explanation: "肺部充盈，能量上升。配合喉锁。培养生命容量与心念专注。"
          },
          {
            title: "外屏息",
            devanagari: "बाह्य कुम्भक",
            sanskrit: "bāhya kumbhaka",
            translation: "呼气后屏息。",
            explanation: "肺部排空，能量下降。配合腹锁和根锁。净化气脉，平静神经系统。"
          }
        ],
        practices: [
          {
            title: "根本前提",
            devanagari: "नाडी शोधन",
            sanskrit: "nāḍī śodhana",
            translation: "经脉净化。",
            explanation: "必须在所有其他调息法之前进行的基础练习。净化72,000条能量通道，平衡左右脉，为中脉能量流动做好准备。"
          },
          {
            title: "方法一：基础净化",
            devanagari: "मूल शोधन क्रिया",
            sanskrit: "mūla śodhana kriyā",
            translation: "根本净化法。",
            explanation: "1. 从双鼻三次呼吸开始。2. 关闭右鼻孔，通过左鼻孔呼吸10次。3. 关闭左鼻孔，通过右鼻孔呼吸10次。4. 以双鼻三次呼吸结束。比例进阶：1:1 → 1:2 → 1:2:2 → 1:4:2。"
          },
          {
            title: "方法二：交替鼻孔",
            devanagari: "अनुलोम-विलोम",
            sanskrit: "anuloma-viloma",
            translation: "顺逆交替。",
            explanation: "1. 左吸→右呼（10轮）。2. 右吸→左呼（10轮）。3. 双鼻呼吸（3轮）。进阶：在掌握双鼻孔气流平衡后加入屏息。"
          },
          {
            title: "方法三：中脉启动",
            devanagari: "सुषुम्ना प्रवेश",
            sanskrit: "suṣumṇā praveśa",
            translation: "进入中脉。",
            explanation: "左吸→右呼→右吸→左呼 = 1个循环。从10个循环开始，每周增加1个。3个月后，加入屏息：1:2:2进阶至1:4:2。仅适用于鼻腔气流平衡者。"
          },
          {
            title: "圣光调息",
            devanagari: "कपालभाति",
            sanskrit: "kapālabhāti",
            translation: "头颅闪亮。",
            explanation: "主动呼气技术。通过双鼻孔进行短促有力的呼气，被动吸气。净化额窦，激活大脑。从15-20次重复开始，做3轮。高血压、心脏病患者禁忌。"
          },
          {
            title: "终极目标",
            devanagari: "प्राणः स्वयं प्रवहति",
            sanskrit: "prāṇaḥ svayaṃ pravahati",
            translation: "生命能量自然流动。",
            explanation: "呼吸调控变得自发自然的最后阶段。练习者达到自发屏息，呼吸自主停止，导向深度冥想状态。"
          }
        ],
        safety: [
          {
            title: "首要警告",
            devanagari: "न शुद्धे नाडीचक्रे प्राणः क्षेत्रं प्रविशति",
            sanskrit: "na śuddhe nāḍīcakre prāṇaḥ kṣetraṃ praviśati",
            translation: "若经脉未净，普拉纳不能进入中脉。",
            explanation: "《哈他之光》2.4-5。没有经脉净化，所有调息练习都徒劳无功。净化必须先于所有高级练习。"
          },
          {
            title: "循序渐进原则",
            devanagari: "क्रमेण अभ्यासः",
            sanskrit: "krameṇa abhyāsaḥ",
            translation: "循序渐进地练习。",
            explanation: "从1:1吸呼比例开始。掌握此后再加入屏息（1:1:1）。进阶至1:2:1（吸:屏:呼）。切勿强迫或急于进阶。"
          },
          {
            title: "最佳练习时间",
            devanagari: "ब्रह्ममुहूर्त",
            sanskrit: "brahma-muhūrta",
            translation: "日出前的神圣时刻。",
            explanation: "日出前1.5小时是调息法的理想时间。大气普拉纳最纯净，心念平静，胃部空置。次佳时间为日落。"
          },
          {
            title: "饮食注意事项",
            devanagari: "लघु आहार",
            sanskrit: "laghu āhāra",
            translation: "清淡饮食。",
            explanation: "空腹或饭后3-4小时练习。避免沉重、辛辣或加工食品。悦性饮食增强调息效果。"
          },
          {
            title: "体位基础",
            devanagari: "आसनं प्राणसंरोधः",
            sanskrit: "āsanaṃ prāṇa-saṃrodhaḥ",
            translation: "体式是为制气。",
            explanation: "《哈他之光》1.56。体式的根本目的在于为生命能量（prāṇa）的调控做好准备。只有在掌握稳定坐姿（如至善坐、莲花坐）并保持脊柱正直之后，方能进行深入的调息练习。"
          },
          {
            title: "主要禁忌",
            devanagari: "वर्ज्य अवस्थाः",
            sanskrit: "varjya avasthāḥ",
            translation: "应避免练习的状况。",
            explanation: "1. 高血压、心脏病。2. 近期腹部手术。3. 青光眼、视网膜脱落。4. 孕期（某些技术）。5. 月经期间（屏息）。6. 极度疲劳或疾病。"
          }
        ]
      }
    }
  };

  // ============================================
  // 获取当前语言的内容
  // ============================================
  
  const content = pranayamaData[language as keyof typeof pranayamaData];
  const meta = content.meta;
  const sections = content.sections;
  const concepts = content.content;

  // ============================================
  // 标签页配置
  // ============================================
  
  const sectionTabs = {
    essence: sections.essence.tabTitle,
    energy: sections.energy.tabTitle,
    techniques: sections.techniques.tabTitle,
    practices: sections.practices.tabTitle,
    safety: sections.safety.tabTitle
  };

  // ============================================
  // 渲染函数
  // ============================================
  
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-white pt-12">
        {/* 页面头部 */}
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
          {/* 当前激活的分类页面 */}
          {Object.keys(sections).map((sectionKey) => (
            activeSection === sectionKey && (
              <div key={sectionKey}>
                <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1">
                  {sections[sectionKey as keyof typeof sections].pageTitle}
                </h2>
                <p className="text-xs text-gray-600 mb-4">
                  {sections[sectionKey as keyof typeof sections].description}
                </p>
                
                {/* 内容列表 */}
                <div className="space-y-0">
                  {concepts[sectionKey as keyof typeof concepts].map((concept, index) => (
                    <div key={index} className="py-3 md:py-3.5 border-b border-gray-100">
                      <div className="space-y-1.5">
                        {/* 第1行：标题 */}
                        <div className="text-xs font-medium text-gray-800">
                          {concept.title}
                        </div>
                        
                        {/* 第2行：天城体 */}
                        <div className="font-sans text-sm md:text-base leading-tight tracking-tight">
                          {concept.devanagari}
                        </div>
                        
                        {/* 第3行：梵文转写 */}
                        <div className="text-xs italic text-gray-600 font-mono leading-tight">
                          {concept.sanskrit}
                        </div>
                        
                        {/* 第4行：翻译 */}
                        <div className="text-xs text-gray-800 leading-tight pt-0.5">
                          {concept.translation}
                        </div>
                        
                        {/* 第5行：释义 */}
                        <div className="text-[11px] md:text-xs text-gray-600 leading-relaxed pt-0.5">
                          {concept.explanation}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
