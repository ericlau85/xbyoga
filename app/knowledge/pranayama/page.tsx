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
      },

      // 标签页配置
      sections: {
        essence: {
          tabTitle: "Definition & Principles",
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
          tabTitle: "Practice Methods",
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
            explanation: "prāṇa (life force) + āyāma (extension, control). The conscious regulation of breath through interruption (vicchedaḥ), prolongation (dīrgha), and refinement (sūkṣma) of breathing patterns."
          },
          {
            title: "Patañjali's Definition",
            devanagari: "तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः",
            sanskrit: "tasmin sati śvāsa-praśvāsyor gati-vicchedaḥ prāṇāyāmaḥ",
            translation: "When posture is steady, the conscious interruption of the natural flow of inhalation and exhalation is prāṇāyāma.",
            explanation: "yoga sūtra 2.49. Prāṇāyāma begins only after āsana is stabilized. It involves conscious intervention in the automatic breathing process."
          },
          {
            title: "The Three Modulations",
            devanagari: "बाह्याभ्यन्तरस्तम्भवृत्तिः देशकालसंख्याभिः परिदृष्टो दीर्घसूक्ष्मः",
            sanskrit: "bāhyābhyantarastambhavṛttiḥ deśakālasaṃkhyābhiḥ paridṛṣṭo dīrghasūkṣmaḥ",
            translation: "Prāṇāyāma has external (exhalation), internal (inhalation), and suspended (retention) movements. Regulated by place, time, and count, they become prolonged and subtle.",
            explanation: "yoga sūtra 2.50. The three components are regulated progressively through spatial awareness (deśa), timing (kāla), and numerical count (saṃkhyā)."
          },
          {
            title: "The Four Components",
            devanagari: "छेदनं पूरकं कुम्भकं रेचकं प्राणायामः",
            sanskrit: "chhedanaṃ pūrakaṃ kumbhakaṃ recakaṃ prāṇāyāmaḥ",
            translation: "Purification, inhalation, retention, and exhalation constitute prāṇāyāma.",
            explanation: "haṭha pradīpikā 2.1. The complete process includes preparatory cleansing, followed by the three main phases of breath control."
          }
        ],
        energy: [
          {
            title: "The Universal Life Force",
            devanagari: "प्राण",
            sanskrit: "prāṇa",
            translation: "The cosmic and individual life energy.",
            explanation: "prāṇa exists at cosmic level (mahā-prāṇa) and individual level (prāṇa-vāyu). Its movement forms are called vāyu. 'prāṇo hi bhūtānām āyuḥ' - prāṇa is the life span of all beings (taittirīya upaniṣad 2.1)."
          },
          {
            title: "prāṇa in the Body",
            devanagari: "प्राणः कण्ठे तिष्ठति",
            sanskrit: "prāṇaḥ kaṇṭhe tiṣṭhati",
            translation: "prāṇa resides in the throat, governing the respiratory cycle.",
            explanation: "haṭha pradīpikā 2.4. This indicates the throat as the primary seat of prāṇa in the physical body, from where it governs all respiratory functions."
          },
          {
            title: "The Five Vital Winds",
            devanagari: "पञ्च वायु",
            sanskrit: "pañca vāyu",
            translation: "The five primary movements of prāṇa.",
            explanation: "prāṇa-vāyu (inward), apāna-vāyu (downward), samāna-vāyu (balancing), udāna-vāyu (upward), vyāna-vāyu (pervasive). These operate through five neural centers in the subtle body: medulla, cervical, thoracic, lumbar, and sacral plexuses."
          },
          {
            title: "prāṇa and apāna",
            devanagari: "प्राणोऽपानसमानश्च उदानव्यान एव च।नागः कूर्मश्च कृकरो देवदत्तो धनञ्जयः॥",
            sanskrit: "prāṇo'pāna-samānaśca udāna-vyāna eva ca।nāgaḥ kūrmaśca kṛkaro devadatto dhanañjayaḥ॥",
            translation: "prāṇa, apāna, samāna, udāna, vyāna, and nāga, kūrma, kṛkara, devadatta, dhanañjaya—these ten winds are the foundation of life's functions.",
            explanation: "haṭha pradīpikā 2.4-5. The five main vāyus and five upa-vāyus (subsidiary winds) constitute the complete system of vital energy movement in the body."
          },
          {
            title: "The Subtle Nervous System",
            devanagari: "नाडीचक्रे",
            sanskrit: "nāḍīcakre",
            translation: "The network of energy channels.",
            explanation: "prāṇa flows through 72,000 nāḍīs (energy channels). The three main channels are: iḍā (left/lunar), piṅgalā (right/solar), and suṣumṇā (central). Purification of these channels is prerequisite for prāṇāyāma."
          },
          {
            title: "Breath and Mind Relationship",
            devanagari: "चले वायौ चलं चित्तं निश्चले निश्चलं भवेत्।",
            sanskrit: "cale vāte calaṃ cittaṃ niścale niścalaṃ bhavet",
            translation: "When the breath moves, the mind moves; when the breath is still, the mind becomes still.",
            explanation: "haṭha pradīpikā 2.2. This establishes the fundamental principle of prāṇāyāma: by controlling breath (vāyu), one can control the mind (citta). The yogi attains stability by restraining the breath."
          },
          {
            title: "Life and Death",
            devanagari: "शरीरे यावान् प्राणो वायुस्तावज्जीवितमुच्यते।",
            sanskrit: "śarīre yāvān prāṇo vāyus tāvaj jīvitam ucyate",
            translation: "As long as prāṇa as breath exists in the body, it is called life.",
            explanation: "haṭha pradīpikā 2:3. The presence of prāṇa equals life; its departure equals death. Therefore, one should practice prāṇāyāma to master this vital energy."
          }
        ],
        techniques: [
          {
            title: "The Three Breath Components",
            devanagari: "बाह्याभ्यन्तरस्तम्भवृत्तिः",
            sanskrit: "bāhyābhyantara-stambha-vṛttiḥ",
            translation: "External, internal, and suspended movements.",
            explanation: "yoga sūtra 2.50. These three states of breath—exhalation (bāhya), inhalation (ābhyantara), and retention (stambha)—are regulated through place (deśa), time (kāla), and count (saṃkhyā), becoming prolonged and subtle."
          },
          {
            title: "Complete Yogic Breath",
            devanagari: "पूर्णश्वासः समस्ताङ्गैः",
            sanskrit: "pūrṇa-śvāsaḥ samastāṅgaiḥ",
            translation: "Full breath with all limbs.",
            explanation: "śiva saṃhitā 3.92. Three-part breathing engaging clavicular (jāṭhara-ucchvāsa), thoracic (uras-śvāsa), and abdominal (udara-śvāsa) regions. The foundation for all prāṇāyāma, activating prāṇa, balancing samāna, and guiding apāna."
          },
          {
            title: "Internal Retention",
            devanagari: "आभ्यन्तर कुम्भक",
            sanskrit: "ābhyantara kumbhaka",
            translation: "Retention after inhalation.",
            explanation: "Lungs full, energy ascending. Accompanied by jālandhara bandha. 'sarpavat sthitiḥ' - like a snake remaining still (HP 2.44). Builds vital capacity and mental focus. For experienced practitioners only."
          },
          {
            title: "External Retention",
            devanagari: "बाह्य कुम्भक",
            sanskrit: "bāhya kumbhaka",
            translation: "Retention after exhalation.",
            explanation: "Lungs empty, energy descending. Accompanied by uḍḍīyana and mūla bandhas. 'bāhye vāyuṃ rodhayet kūrmavat saṃkocaḥ' - like a turtle withdrawing into its shell (HP 2.45). Purifies nāḍīs and calms nervous system."
          },
          {
            title: "Spontaneous Retention",
            devanagari: "केवलं कुम्भकं",
            sanskrit: "kevalaṃ kumbhakaṃ",
            translation: "Automatic breath cessation.",
            explanation: "Not a technique but a state achieved through mastery. 'kevalaṃ kumbhakaṃ yogī sahajāvasthāṃ labhate' - The yogi attains the natural state through spontaneous retention (gheraṇḍa saṃhitā 5.46). Beyond time, space, and count."
          },
          {
            title: "Throat Lock",
            devanagari: "जालन्धर बन्ध",
            sanskrit: "jālandhara bandha",
            translation: "Chin lock.",
            explanation: "'kaṇṭhaṃ ākuñcya hṛdi cibukaṃ nidhāya' - Contract the throat and place the chin on the chest (HP 3.70). Prevents energy leakage during retention, regulates blood pressure, stabilizes neck energy. Essential for internal retention."
          },
          {
            title: "Abdominal Lock",
            devanagari: "उड्डीयन बन्ध",
            sanskrit: "uḍḍīyana bandha",
            translation: "Flying upward lock.",
            explanation: "'uḍḍīyanaṃ nāma madhyaṃ ākṛṣya uraḥ prati' - Drawing the middle (abdomen) upward toward the chest (HP 3.57). Performed after exhalation. Forces prāṇa upward, stimulates digestive fire. 'vayo'tivṛddho'pi taruṇāyate' - Even the aged become youthful through its practice (HP 3.58)."
          },
          {
            title: "Root Lock",
            devanagari: "मूल बन्ध",
            sanskrit: "mūla bandha",
            translation: "Root lock.",
            explanation: "'mūla-bandhaḥ apānaṃ ūrdhvaṃ nayati' - Root lock makes apāna move upward. 'yoni-sthānaṃ saṃkocya mūla-bandhaḥ prakīrtitaḥ' - Contracting the perineal area is called root lock (HP 3.62-63). Seals apāna vāyu, reverses downward flow, unites with prāṇa. Foundation for kuṇḍalinī awakening."
          },
          {
            title: "The Three Locks Combined",
            devanagari: "जालन्धरं उड्डियानं मूलबन्धं च तिष्ठति",
            sanskrit: "jālandharaṃ uḍḍīyānaṃ mūla-bandhaṃ ca kārayet",
            translation: "One should practice throat lock, abdominal lock, and root lock.",
            explanation: "haṭha pradīpikā 3.6. The combined practice of traya-bandha (three locks) during retention creates internal pressure balance, prevents energy dissipation, and directs prāṇa into suṣumṇā. Each lock corresponds to a major energy gateway in the body."
          }
        ],
        practices: [
          {
            title: "Essential Prerequisite",
            devanagari: "नाडी शोधन",
            sanskrit: "nāḍī śodhana",
            translation: "Channel purification.",
            explanation: "THE FOUNDATIONAL PRACTICE. Must precede all other prāṇāyāma. 'na śuddhe nāḍīcakre prāṇaḥ kṣetraṃ praviśati' - If channels are not purified, prāṇa cannot enter the central channel (HP 2.4-5). Purifies 72,000 energy channels. Practice for 3 months minimum.\n\nMethod 1 (Basic):\n1. Siddhāsana, spine straight\n2. 3 breaths through both nostrils\n3. Close right nostril, breathe through left 10 times\n4. Close left nostril, breathe through right 10 times\n5. 3 breaths through both nostrils\nRatio progression: 1:1 (7 days) → 1:2 (14 days) → 1:2:2 (21 days) → 1:4:2 (49 days)\n\nNote: Additional methods (Alternate Nostril, Central Channel Activation) are taught in class with personal guidance."
          },
          {
            title: "Skull Shining Breath",
            devanagari: "कपालभाति",
            sanskrit: "kapālabhāti",
            translation: "Skull illuminating.",
            explanation: "Active purification technique. Short, forceful exhalations with passive inhalations. Cleanses frontal sinuses, energizes brain, removes excess kapha.\n\nBasic Method:\n1. siddhāsana or padmāsana\n2. Deep inhale, then begin rapid, forceful exhalations through both nostrils (15-20 times)\n3. Exhalation: active abdominal contraction toward spine\n4. Inhalation: passive, natural rebound\n5. After one round: deep inhale, slow exhale, rest 1-2 minutes\nBegin with 3 rounds of 15-20 breaths\n\nContraindications: Hypertension, heart conditions, hernia, glaucoma, epilepsy, pregnancy.\nNote: Advanced variations (with retention, alternate nostril) taught in class."
          },
          {
            title: "Victorious Breath",
            devanagari: "उज्जायी",
            sanskrit: "ujjāyī",
            translation: "The conquering breath.",
            explanation: "Characterized by gentle glottal constriction producing ocean-like sound. 'nāḍīmukhaṃ saṃyamya kaṇṭhādurasparśī saghoṣaṃ ca pavanaṃ ākṛṣya' - Slightly closing the glottis, draw breath touching throat and chest, with sound (HP 2.51).\n\nStage 1 (Foundation):\n1. Comfortable seated position\n2. Slight constriction in throat\n3. Inhale with 'sooo' sound, exhale with 'haaammm' sound\n4. Focus on steady, audible breath\n5. No retention initially\n\nBenefits: Balances nervous system, calms mind, increases oxygen absorption, removes throat phlegm, enhances digestive fire.\nNote: Four progressive stages (including retention and nostril guidance) are systematically taught in class sessions."
          },
          {
            title: "Cooling Breath",
            devanagari: "शीतली",
            sanskrit: "śītalī",
            translation: "Cooling breath.",
            explanation: "Inhale through rolled tongue, exhale through nose. Strong cooling effect, reduces pitta, alleviates heat-related conditions.\n\nMethod:\n1. Comfortable seated posture\n2. Protrude tongue, roll sides upward to form tube\n3. Inhale slowly through tongue tube (feel cooling sensation)\n4. Withdraw tongue, close mouth\n5. Optional: natural external retention\n6. Exhale slowly through nostrils\nBegin with 10 rounds, increase to 30 gradually\n\nBest practiced in morning or after āsana, in cool environment. Contraindicated: cold conditions, respiratory issues, excessive kapha.\nNote: sītkārī (hissing breath) is a variation taught as complementary practice in class."
          },
          {
            title: "Bee Breath",
            devanagari: "भ्रामरी",
            sanskrit: "bhrāmarī",
            translation: "Humming bee breath.",
            explanation: "Exhale with humming sound resembling bee. Rapidly calms nervous system, relieves anxiety, insomnia, and hypertension.\n\nMethod:\n1. Comfortable seated pose, spine erect\n2. Close eyes, place thumbs on ear tragus to enhance internal sound\n3. Inhale deeply through both nostrils\n4. Exhale slowly while producing steady, low-pitched 'mmmm' hum\n5. Feel vibrations in skull, face, and chest\n6. Complete exhalation naturally\nPractice 5-10 rounds\n\nSpecial Note: The vibrations stimulate pineal gland, calm amygdala, and create immediate parasympathetic response. Particularly effective before meditation.\nVariations with different pitch and duration taught in class."
          },
          {
            title: "Bellows Breath",
            devanagari: "भस्त्रिका",
            sanskrit: "bhastrikā",
            translation: "Bellows breath.",
            explanation: "Rapid, forceful inhalation and exhalation like blacksmith's bellows. 'sūryabhedanaṃ candrabhedanaṃ nāḍīśodhanaṃ bhastrikā catuṣṭayam' - Among the four main practices: sun-piercing, moon-piercing, channel purification, and bellows (HP 2.7).\n\nBasic Method 1:\n1. Siddhāsana or Padmāsana\n2. Rapid, equal inhalation and exhalation through both nostrils\n3. Focus on abdominal/diaphragmatic movement\n4. Start with 20-30 breaths per round\n5. After final exhalation: deep inhale, internal retention with bandhas\n6. Slow exhale, rest\nBegin with 3 rounds\n\nWARNING: High-intensity practice. Contraindicated for: hypertension, heart disease, stroke history, hernia, ulcers, epilepsy, pregnancy.\nNote: Three additional methods (with alternate nostrils, specific ratios) are carefully taught with personal supervision in class."
          },
          {
            title: "Spontaneous Cessation",
            devanagari: "केवल कुम्भक",
            sanskrit: "kevala kumbhaka",
            translation: "Automatic breath suspension.",
            explanation: "Not a practice but a state of accomplishment. 'bāhyābhyantara-viṣayākṣepī caturthaḥ' - The fourth (state) transcends external and internal perceptions (yoga sūtra 2.51).\n\nCharacteristics:\n1. Breath stops spontaneously without effort\n2. No distinction between inhalation and exhalation\n3. Beyond time, space, and count regulation\n4. Accompanies deep samādhi states\n5. prāṇa flows freely in suṣumṇā\n\n'kevalaṃ kumbhakaṃ yogī sahajāvasthāṃ labhate' - Through spontaneous retention, the yogi attains the natural state (GS 5.46).\n\nImportant: This cannot be practiced or forced. It emerges naturally after mastering all previous techniques under proper guidance. Classroom instruction focuses on the preparatory stages leading to this state."
          }
        ],
        safety: [
          {
            title: "Primary Warning",
            devanagari: "न शुद्धे नाडीचक्रे प्राणः क्षेत्रं प्रविशति",
            sanskrit: "na śuddhe nāḍīcakre prāṇaḥ kṣetraṃ praviśati",
            translation: "If channels are not purified, prāṇa cannot enter.",
            explanation: "haṭha pradīpikā 2.4-5: 'If the channels are not purified, prāṇa cannot enter the central channel, there is no accomplishment, nor connection with suṣumṇā. Without nāḍī purification, all Haṭha accomplishments fail to manifest.' THREE MONTHS of nāḍī śodhana is mandatory before advanced practices."
          },
          {
            title: "Progressive Ratio System",
            devanagari: "मात्रया सम्यगाढ्यश्च",
            sanskrit: "mātrayā samyag āḍhyaś ca",
            translation: "First master with standard measure.",
            explanation: "haṭha pradīpikā 2.11: 'prāṇāyāma should first be thoroughly practiced with standard units (mātrā), then progressed. One who practices with proper units surely attains accomplishment.'\n\nProgression Sequence:\n1. 1:1 inhalation:exhalation (master completely)\n2. 1:1:1 inhalation:retention:exhalation (beginner retention)\n3. 1:2:1 advanced ratio\n4. 1:4:2 highest ratio (for experienced only)\n\nNEVER skip steps. Each stage requires weeks or months of stable practice."
          },
          {
            title: "Optimal Practice Conditions",
            devanagari: "प्राणायामं तु कर्तव्यं प्रातःकाले विशेषतः",
            sanskrit: "prāṇāyāmaṃ tu kartavyaṃ prātaḥ-kāle viśeṣataḥ",
            translation: "prāṇāyāma should be practiced especially at dawn.",
            explanation: "gheraṇḍa saṃhitā 5.8. Best time: brahma-muhūrta (1.5 hours before sunrise). Atmospheric prāṇa is purest, mind is calm, stomach is empty. Secondary: midnight or sunset. Avoid: midday, immediately after meals, when tired or emotionally disturbed."
          },
          {
            title: "Postural Foundation",
            devanagari: "आसनं प्राणसंरोधः",
            sanskrit: "āsanaṃ prāṇa-saṃrodhaḥ",
            translation: "Posture is for controlling prāṇa.",
            explanation: "haṭha pradīpikā 1.56. Master Siddhāsana first: 'siddhāsanaṃ bhaved yasya siddhiḥ siddhāsanasyaca' - For one who has mastered siddhāsana, accomplishment comes from the posture itself (HP 1.35).\n\nRequirements:\n1. Pelvic neutral (pubis-ischial tuberosity three-point balance)\n2. Spine extended (C7-S1 physiological curves)\n3. Shoulders relaxed\n4. Chin parallel to floor\nWithout proper posture, energy cannot flow correctly."
          },
          {
            title: "Energy Imbalance Warning",
            devanagari: "प्राणापानयोर्युद्धं वैघ्नं",
            sanskrit: "prāṇāpānayor yuddhaṃ vaighnaṃ",
            translation: "Conflict of prāṇa and apāna causes obstruction.",
            explanation: "śiva saṃhitā 2.13: 'The conflict between prāṇa and apāna is considered an obstruction by yoga knowers; this disturbs samāna and destroys the order of the five vāyus.'\n\nSymptoms of Imbalance:\n1. Irregular breathing patterns\n2. Anxiety or agitation during practice\n3. Physical discomfort or pain\n4. Energy 'leakage' sensations\n5. Emotional instability\n\nSolution: Return to nāḍī śodhana, reduce intensity, seek guidance."
          },
          {
            title: "Forced Practice Danger",
            devanagari: "यदि चित्तं न शाम्येत प्राणायामात् प्रयत्नतः",
            sanskrit: "yadi cittaṃ na śāmyet prāṇāyāmāt prayatnataḥ",
            translation: "If mind is not calmed by forced prāṇāyāma.",
            explanation: "haṭha pradīpikā 2.15-16: 'If the mind is not calmed by strenuous prāṇāyāma practice, it will cause obstruction in the channels. Therefore, one should practice with careful attention. Just as lions, elephants, and tigers are gradually tamed with patience, so should breath be controlled with caution; otherwise it destroys the practitioner.'\n\nKEY PRINCIPLE: Force creates resistance. Gentle persistence yields results."
          },
          {
            title: "Major Contraindications",
            devanagari: "वर्ज्य अवस्थाः",
            sanskrit: "varjya avasthāḥ",
            translation: "Conditions requiring avoidance.",
            explanation: "ABSOLUTE CONTRAINDICATIONS:\n1. Uncontrolled hypertension/heart disease\n2. Recent abdominal/thoracic surgery\n3. Glaucoma, retinal detachment\n4. Active epilepsy\n5. Pregnancy (retentions and forceful practices)\n6. Severe mental disorders\n\nRELATIVE CONTRAINDICATIONS (require modification):\n1. Menstruation (avoid retentions and inversions)\n2. Chronic fatigue\n3. Respiratory infections\n4. High stress/anxiety states\n\nAlways consult with a qualified teacher for personal guidance."
          },
          {
            title: "Dietary Guidelines",
            devanagari: "लघु आहार",
            sanskrit: "laghu āhāra",
            translation: "Light nourishment.",
            explanation: "Practice on empty stomach: minimum 3-4 hours after meal, 1 hour after light snack. Sattvic diet enhances practice: fresh fruits, vegetables, whole grains, nuts, dairy. Avoid: heavy, oily, spicy, processed foods, meat, alcohol.\n\nImportant: 'prāṇo vai annam' - prāṇa is indeed the essence of food (Taittirīya Upaniṣad 2.2). The quality of food directly affects the quality of prāṇa available for practice."
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
      },

      // 标签页配置
      sections: {
        essence: {
          tabTitle: "定义与原理",
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
          description: "包括三锁与呼吸要素在内的关键技术组件。"
        },
        practices: {
          tabTitle: "实践方法",
          pageTitle: "调息练习与方法",
          description: "系统性的呼吸练习：净化类、平衡类与高阶类。"
        },
        safety: {
          tabTitle: "安全与警示",
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
            explanation: "prāṇa（生命能量）+ āyāma（扩展、控制）。通过有意识地中断（vicchedaḥ）、延长（dīrgha）与精微化（sūkṣma）呼吸模式来调控呼吸的技术。"
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
            translation: "调息有外在（呼气）、内在（吸气）与悬停（屏息）三种运动。通过空间、时间与次数的调节，它们变得延长且精微。",
            explanation: "《瑜伽经》2.50。这三个组成部分通过空间意识（deśa）、时间控制（kāla）和次数计量（saṃkhyā）逐步调节。"
          },
          {
            title: "四个组成部分",
            devanagari: "छेदनं पूरकं कुम्भकं रेचकं प्राणायामः",
            sanskrit: "chhedanaṃ pūrakaṃ kumbhakaṃ recakaṃ prāṇāyāmaḥ",
            translation: "净化、吸气、屏息和呼气构成调息。",
            explanation: "《哈他之光》2.1。完整过程包括预备净化（chhedanam），然后是呼吸控制的三个主要阶段：吸气（pūraka）、屏息（kumbhaka）、呼气（recaka）。"
          }
        ],
        energy: [
          {
            title: "宇宙生命能量",
            devanagari: "प्राण",
            sanskrit: "prāṇa",
            translation: "宇宙与个体的生命能量。",
            explanation: "普拉纳存在于宇宙层面（大普拉纳）和个体层面（生命气）。其运动形式称为风息。'prāṇo hi bhūtānām āyuḥ' - 普拉纳是众生的生命源泉（《泰帝利奥义书》2.1）。"
          },
          {
            title: "生命气在体内",
            devanagari: "प्राणः कण्ठे तिष्ठति",
            sanskrit: "prāṇaḥ kaṇṭhe tiṣṭhati",
            translation: "命气驻于喉部。",
            explanation: "《哈他之光》2.4。命气驻于喉部，主宰呼吸循环。这表明喉部是肉体中普拉纳的主要居所，从这里统管所有呼吸功能。"
          },
          {
            title: "五大气",
            devanagari: "पञ्च वायु",
            sanskrit: "pañca vāyu",
            translation: "五种主要能量运动。",
            explanation: "命气（向内）、下行气（向下）、平行气（平衡）、上行气（向上）、遍行气（遍及）。这些通过精微身中的五个神经中枢运作：延髓、颈髓、胸髓、腰髓、骶髓。"
          },
          {
            title: "五主气",
            devanagari: "प्राणोऽपानसमानश्च उदानव्यान एव च।नागः कूर्मश्च कृकरो देवदत्तो धनञ्जयः॥",
            sanskrit: "prāṇo'pāna-samānaśca udāna-vyāna eva ca।nāgaḥ kūrmaśca kṛkaro devadatto dhanañjayaḥ॥",
            translation: "命气、下气、均气、上气与遍气，以及龙气、龟气、咳气、天授气与胜军气——此十气乃生命运作之本。",
            explanation: "《哈他之光》2.4-5。五大气和五次气（辅助风息）构成了身体中生命能量运动的完整系统。"
          },
          {
            title: "精微能量通道",
            devanagari: "नाडीचक्रे",
            sanskrit: "nāḍīcakre",
            translation: "能量通道网络。",
            explanation: "普拉纳流经72,000条气脉（能量通道）。三条主要脉道是：左脉（阴/月）、右脉（阳/日）、中脉（中央）。净化这些通道是调息法的先决条件。"
          },
          {
            title: "呼吸与心念关系",
            devanagari: "चले वायौ चलं चित्तं निश्चले निश्चलं भवेत्।",
            sanskrit: "cale vāte calaṃ cittaṃ niścale niścalaṃ bhavet",
            translation: "气动则心动，气静则心寂。",
            explanation: "《哈他之光》2.2。这确立了调息法的基本原则：通过控制呼吸（vāyu），可以控制心念（citta）。瑜伽士通过调控呼吸证得不动之境。"
          },
          {
            title: "生与死",
            devanagari: "शरीरे यावान् प्राणो वायुस्तावज्जीवितमुच्यते।",
            sanskrit: "śarīre yāvān prāṇo vāyus tāvaj jīvitam ucyate",
            translation: "气存于身即为生。",
            explanation: "《哈他之光》2:3。普拉纳作为呼吸存在于身体中，即称为生命；其离体即为死。因此应修习调息法以掌握这一生命能量。"
          }
        ],
        techniques: [
          {
            title: "呼吸三要素",
            devanagari: "बाह्याभ्यन्तरस्तम्भवृत्तिः",
            sanskrit: "bāhyābhyantara-stambha-vṛttiḥ",
            translation: "外在、内在与悬停运动。",
            explanation: "《瑜伽经》2.50。呼吸的三种状态——呼气（bāhya）、吸气（ābhyantara）、屏息（stambha）——通过位置（deśa）、时间（kāla）和计数（saṃkhyā）来调控，变得延长且精微。"
          },
          {
            title: "完全瑜伽呼吸",
            devanagari: "पूर्णश्वासः समस्ताङ्गैः",
            sanskrit: "pūrṇa-śvāsaḥ samastāṅgaiḥ",
            translation: "全身协调的完全呼吸。",
            explanation: "《湿婆本集》3.92。三腔协同呼吸：锁骨区呼吸（jāṭhara-ucchvāsa）、胸腔呼吸（uras-śvāsa）、腹腔呼吸（udara-śvāsa）。所有调息法的基础，激活命气、平衡均气、引导下行气。"
          },
          {
            title: "内屏息",
            devanagari: "आभ्यन्तर कुम्भक",
            sanskrit: "ābhyantara kumbhaka",
            translation: "吸气后屏息。",
            explanation: "肺部充盈，能量上升。配合喉锁。'sarpavat sthitiḥ' - 如蛇静止（《哈他之光》2.44）。培养生命容量与心念专注。仅适用于有经验者。"
          },
          {
            title: "外屏息",
            devanagari: "बाह्य कुम्भक",
            sanskrit: "bāhya kumbhaka",
            translation: "呼气后屏息。",
            explanation: "肺部排空，能量下降。配合腹锁和根锁。'bāhye vāyuṃ rodhayet kūrmavat saṃkocaḥ' - 如龟缩入壳（《哈他之光》2.45）。净化气脉，平静神经系统。"
          },
          {
            title: "自发屏息",
            devanagari: "केवलं कुम्भकं",
            sanskrit: "kevalaṃ kumbhakaṃ",
            translation: "呼吸自然中止。",
            explanation: "非技术而是一种成就状态。'kevalaṃ kumbhakaṃ yogī sahajāvasthāṃ labhate' - 瑜伽士通过自发屏息达至自然三摩地（《格兰达本集》5.46）。超越时间、空间与计数。"
          },
          {
            title: "喉锁",
            devanagari: "जालन्धर बन्ध",
            sanskrit: "jālandhara bandha",
            translation: "收颔锁。",
            explanation: "'kaṇṭhaṃ ākuñcya hṛdi cibukaṃ nidhāya' - 收缩喉咙，下颌抵住胸口（《哈他之光》3.70）。防止屏息时能量泄漏，调节血压，稳定颈部能量。内屏息时必需。"
          },
          {
            title: "腹锁",
            devanagari: "उड्डीयन बन्ध",
            sanskrit: "uḍḍīyana bandha",
            translation: "飞翔上行锁。",
            explanation: "'uḍḍīyanaṃ nāma madhyaṃ ākṛṣya uraḥ prati' - 将腹部中部向后背脊柱上提（《哈他之光》3.57）。呼气后进行。迫使命气上行，刺激消化之火。'vayo'tivṛddho'pi taruṇāyate' - 即使年迈者持续练习亦能重返青春（《哈他之光》3.58）。"
          },
          {
            title: "根锁",
            devanagari: "मूल बन्ध",
            sanskrit: "mūla bandha",
            translation: "根锁。",
            explanation: "'mūla-bandhaḥ apānaṃ ūrdhvaṃ nayati' - 根锁使下行气向上逆转。'yoni-sthānaṃ saṃkocya mūla-bandhaḥ prakīrtitaḥ' - 收缩会阴区域即为根锁（《哈他之光》3.62-63）。封存下行气，逆转下行趋势，与命气结合。昆达里尼觉醒的基础。"
          },
          {
            title: "三锁结合",
            devanagari: "जालन्धरं उड्डियानं मूलबन्धं च तिष्ठति",
            sanskrit: "jālandharaṃ uḍḍīyānaṃ mūla-bandhaṃ ca kārayet",
            translation: "应练习喉锁、腹锁与根锁。",
            explanation: "《哈他之光》3.6。三锁（traya-bandha）在屏息期间结合练习，创造内部压力平衡，防止能量消散，引导普拉纳进入中脉。每锁对应身体的主要能量门户。"
          }
        ],
        practices: [
          {
            title: "根本前提",
            devanagari: "नाडी शोधन",
            sanskrit: "nāḍī śodhana",
            translation: "经脉净化。",
            explanation: "基础练习。必须在所有其他调息法之前进行。'na śuddhe nāḍīcakre prāṇaḥ kṣetraṃ praviśati' - 若经脉未净，生命气不得入中脉（《哈他之光》2.4-5）。净化72,000条能量通道。至少练习3个月。\n\n方法1（基础涤脉法）：\n1. 至善坐，脊柱正直\n2. 双鼻吸-呼各3次\n3. 拇指封右鼻孔，独启左鼻孔呼吸10次\n4. 无名指封左鼻孔，独启右鼻孔呼吸10次\n5. 双鼻呼吸3次\n比例进阶：1:1（七日）→ 1:2（二七）→ 1:2:2（三七）→ 1:4:2（四九日）\n\n注：更多方法（交替鼻孔法、中脉启钥法）在课堂中结合个人指导进行教学。"
          },
          {
            title: "净脑法",
            devanagari: "कपालभाति",
            sanskrit: "kapālabhāti",
            translation: "圣光调息。",
            explanation: "主动清洁法。短促有力的主动呼气配合被动吸气。净化额窦，激活大脑，排出多余黏液（kapha）。\n\n基本方法：\n1. 至善坐或莲花坐\n2. 深吸气后开始通过双鼻孔快速有力的呼气（15-20次）\n3. 呼气：腹部主动向脊柱收缩\n4. 吸气：被动自然反弹\n5. 一轮后：深吸气，缓慢呼气，休息1-2分钟\n从3轮、每轮15-20次开始\n\n禁忌：高血压、心脏病、疝气、青光眼、癫痫、孕期。\n注：进阶变化（结合屏息、交替鼻孔）在课堂中教学。"
          },
          {
            title: "胜利调息",
            devanagari: "उज्जायी",
            sanskrit: "ujjāyī",
            translation: "征服的呼吸。",
            explanation: "喉部轻微收缩产生海浪声的呼吸法。'nāḍīmukhaṃ saṃyamya kaṇṭhādurasparśī saghoṣaṃ ca pavanaṃ ākṛṣya' - 微闭喉门，吸气使气触喉胸，发声如潮（《哈他之光》2.51）。\n\n第一阶段（基础）：\n1. 舒适坐姿\n2. 喉部轻微收缩\n3. 吸气发'sooo'声，呼气发'haaammm'声\n4. 专注于稳定、可闻的呼吸\n5. 初期不加屏息\n\n功效：平衡神经系统，平静心绪，增加血氧吸收，清除喉痰，增强消化之火。\n注：四个渐进阶段（包括屏息与鼻孔引导）在课堂中有系统地进行教学。"
          },
          {
            title: "清凉调息",
            devanagari: "शीतली",
            sanskrit: "śītalī",
            translation: "冷却呼吸。",
            explanation: "通过卷舌吸气，鼻腔呼气。强力冷却效果，减少火性能量（pitta），缓解热相关症状。\n\n方法：\n1. 舒适坐姿\n2. 伸出舌头，两侧向上卷曲形成管状\n3. 通过舌管缓慢吸气（感受清凉）\n4. 收回舌头，闭上双唇\n5. 可选：自然外屏息\n6. 通过鼻腔缓慢呼气\n从10轮开始，逐渐增加至30轮\n\n最佳练习时间：清晨或体式后，环境清凉时。禁忌：寒冷条件、呼吸道问题、痰湿过重。\n注：嘶声调息（sītkārī）作为补充变化在课堂中教学。"
          },
          {
            title: "蜂鸣调息",
            devanagari: "भ्रामरी",
            sanskrit: "bhrāmarī",
            translation: "蜜蜂式呼吸。",
            explanation: "呼气时发出如蜜蜂的嗡嗡声。快速镇静神经系统，缓解焦虑、失眠和高血压。\n\n方法：\n1. 舒适坐姿，脊柱挺直\n2. 闭眼，拇指轻按耳屏以增强内在听觉\n3. 通过双鼻孔深吸气\n4. 缓慢呼气同时发出平稳低沉的'mmmm'哼鸣\n5. 感受颅腔、面部和胸部的震动\n6. 自然完成呼气\n练习5-10轮\n\n特别说明：震动刺激松果体，平静杏仁核，产生立即的副交感神经反应。冥想前尤其有效。\n不同音高和时长的变化在课堂中教学。"
          },
          {
            title: "风箱调息",
            devanagari: "भस्त्रिका",
            sanskrit: "bhastrikā",
            translation: "风箱式呼吸。",
            explanation: "快速、有力、连续的吸气和呼气模拟铁匠风箱。'sūryabhedanaṃ candrabhedanaṃ nāḍīśodhanaṃ bhastrikā catuṣṭayam' - 太阳调息、月亮调息、经络清洁与风箱调息——此四法为根本（《哈他之光》2.7）。\n\n基本方法1：\n1. 至善坐或莲花坐\n2. 通过双鼻孔快速、等长的吸气和呼气\n3. 专注于腹部/横膈膜运动\n4. 从每轮20-30次呼吸开始\n5. 最后一次呼气后：深吸气，结合锁印内屏息\n6. 缓慢呼气，休息\n从3轮开始\n\n警告：高强度练习。禁忌：高血压、心脏病、中风史、疝气、溃疡、癫痫、孕期。\n注：另外三种方法（结合交替鼻孔、特定比例）在课堂中结合个人监督仔细教学。"
          },
          {
            title: "自发屏息",
            devanagari: "केवल कुम्भक",
            sanskrit: "kevala kumbhaka",
            translation: "自然呼吸中止。",
            explanation: "非练习而是一种成就状态。'bāhyābhyantara-viṣayākṣepī caturthaḥ' - 超越外在（呼气）与内在（吸气）的感知干扰，进入第四种状态（《瑜伽经》2.51）。\n\n特征：\n1. 呼吸无需努力而自发停止\n2. 无吸气与呼气之别\n3. 超越时间、空间与计数调控\n4. 伴随深度三摩地状态\n5. 普拉纳在中脉内自在周流\n\n'kevalaṃ kumbhakaṃ yogī sahajāvasthāṃ labhate' - 瑜伽士通过纯粹屏息，证得自然境界（《格兰达本集》5.46）。\n\n重要提示：此法无法练习或强迫。它是在正确指导下掌握所有先前技术后自然显现。课堂教学专注于达成此状态的预备阶段。"
          }
        ],
        safety: [
          {
            title: "首要警告",
            devanagari: "न शुद्धे नाडीचक्रे प्राणः क्षेत्रं प्रविशति",
            sanskrit: "na śuddhe nāḍīcakre prāṇaḥ kṣetraṃ praviśati",
            translation: "若经脉未净，普拉纳不能进入。",
            explanation: "《哈他之光》2.4-5：'若经脉未净，生命气不得入中脉，无有成就，亦难心定。气脉未净者，哈他瑜伽一切功德终不成办。' 高级调息前必须进行三个月的经脉净化。"
          },
          {
            title: "渐进比例系统",
            devanagari: "मात्रया सम्यगाढ्यश्च",
            sanskrit: "mātrayā samyag āḍhyaś ca",
            translation: "先以标准单位充分掌握。",
            explanation: "《哈他之光》2.11：'调息应先通过标准单位充分练习，之后方可进阶。坚定地以标准单位修习者，必得成就，此无疑问。'\n\n进阶序列：\n1. 1:1 吸:呼（完全掌握）\n2. 1:1:1 吸:屏:呼（初级屏息）\n3. 1:2:1 高级比例\n4. 1:4:2 最高比例（仅限有经验者）\n\n切勿跳级。每个阶段需要数周或数月的稳定练习。"
          },
          {
            title: "最佳练习条件",
            devanagari: "प्राणायामं तु कर्तव्यं प्रातःकाले विशेषतः",
            sanskrit: "prāṇāyāmaṃ tu kartavyaṃ prātaḥ-kāle viśeṣataḥ",
            translation: "调息应在清晨特别修习。",
            explanation: "《格兰达本集》5.8。最佳时间：梵时（日出前1.5小时）。大气中普拉纳最纯净，心念平静，胃部空置。次佳：夜半或日落。避免：正午、饭后立即、疲劳或情绪波动时。"
          },
          {
            title: "体位基础",
            devanagari: "आसनं प्राणसंरोधः",
            sanskrit: "āsanaṃ prāṇa-saṃrodhaḥ",
            translation: "体式的目的是为制气。",
            explanation: "《哈他之光》1.56。先掌握至善坐：'siddhāsanaṃ bhaved yasya siddhiḥ siddhāsanasyaca' - 掌握至善坐者即得成就，因该体式本身即具足圆满性（《哈他之光》1.35）。\n\n要求：\n1. 骨盆中立（耻骨-坐骨结节三点平衡）\n2. 脊柱延展（C7-S1生理曲线）\n3. 双肩放松\n4. 下颌平行地面\n没有正确的体位，能量无法正确流动。"
          },
          {
            title: "能量失衡警告",
            devanagari: "प्राणापानयोर्युद्धं वैघ्नं",
            sanskrit: "prāṇāpānayor yuddhaṃ vaighnaṃ",
            translation: "命气与下行气冲突造成梗阻。",
            explanation: "《湿婆本集》2.13：'瑜伽智者知当命气与下行气冲突，将形成能量梗阻；此状态会扰动均气，破坏五气循环秩序。'\n\n失衡症状：\n1. 呼吸模式不规则\n2. 练习中焦虑或不安\n3. 身体不适或疼痛\n4. 能量'泄漏'感\n5. 情绪不稳定\n\n解决方案：返回经脉净化，降低强度，寻求指导。"
          },
          {
            title: "强迫练习的危险",
            devanagari: "यदि चित्तं न शाम्येत प्राणायामात् प्रयत्नतः",
            sanskrit: "yadi cittaṃ na śāmyet prāṇāyāmāt prayatnataḥ",
            translation: "若强行调息未能平静心意。",
            explanation: "《哈他之光》2.15-16：'若强行调息未能平静心意，将导致经脉紊乱，故应谨慎修习。正如驯狮、驯象、驯虎需循序渐进、充满耐心，调息亦应如此谨慎修习，否则将反伤修行者。'\n\n关键原则：强迫产生抗拒。温和的坚持才能取得成果。"
          },
          {
            title: "主要禁忌",
            devanagari: "वर्ज्य अवस्थाः",
            sanskrit: "varjya avasthāḥ",
            translation: "需要避免的状况。",
            explanation: "绝对禁忌：\n1. 未控制的高血压/心脏病\n2. 近期腹部/胸部手术\n3. 青光眼、视网膜脱落\n4. 活动性癫痫\n5. 孕期（屏息和强力练习）\n6. 严重精神障碍\n\n相对禁忌（需要调整）：\n1. 月经期（避免屏息和倒立）\n2. 慢性疲劳\n3. 呼吸道感染\n4. 高压力/焦虑状态\n\n始终咨询合格教师以获得个人指导。"
          },
          {
            title: "饮食指导",
            devanagari: "लघु आहार",
            sanskrit: "laghu āhāra",
            translation: "清淡饮食。",
            explanation: "空腹练习：饭后至少3-4小时，轻食后1小时。悦性饮食增强练习效果：新鲜水果、蔬菜、全谷物、坚果、乳制品。避免：沉重、油腻、辛辣、加工食品、肉类、酒精。\n\n重要：'prāṇo vai annam' - 生命气实为食物精华（《泰帝利奥义书》2.2）。食物质量直接影响可用于练习的普拉纳质量。"
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
                        
                        {/* 第5行：释义 - 现在包含更多详细内容 */}
                        <div className="text-[11px] md:text-xs text-gray-600 leading-relaxed pt-0.5 whitespace-pre-line">
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
