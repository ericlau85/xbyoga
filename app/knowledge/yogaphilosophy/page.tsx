'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function YogaPhilosophyPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'essence' | 'consciousness' | 'suffering' | 'cosmology' | 'practice' | 'energy'>('essence');

  // ============================================
  // 数据定义 - 按瑜伽哲学理论体系分类
  // ============================================
  
  const philosophyData = {
    en: {
      // 页面基本信息
      meta: {
        title: "Yoga Philosophy: Classical Spiritual System and Modern Practice",
        subtitle: "योगदर्शनं",
        intro: "A systematic exploration of classical yoga philosophy, from its metaphysical foundations to its practical application in modern Ashtanga Yoga practice.",
        backButton: "Back to Practice Guide Base"
      },

      // 标签页配置 - 按理论体系分类
      sections: {
        essence: {
          tabTitle: "Essence & Purpose",
          pageTitle: "THE DEFINITION AND GOAL OF YOGA",
          description: "The fundamental definition of yoga and its ultimate purpose as stated in classical texts."
        },
        consciousness: {
          tabTitle: "Consciousness",
          pageTitle: "THE FOUR-LAYER MIND MODEL",
          description: "The structure and functioning of consciousness according to yoga psychology."
        },
        suffering: {
          tabTitle: "Root of Suffering",
          pageTitle: "THE FIVE CAUSES OF SUFFERING",
          description: "Patañjali's analysis of the fundamental causes of human suffering."
        },
        cosmology: {
          tabTitle: "Cosmology & Being",
          pageTitle: "COSMOLOGICAL MODELS OF EXISTENCE",
          description: "The three gunas theory and models of individual existence (three bodies & five sheaths)."
        },
        energy: {
          tabTitle: "Energy Systems",
          pageTitle: "SUBTLE ENERGY ANATOMY",
          description: "The pranic channels, chakras, and the awakening of Kuṇḍalinī."
        },
        practice: {
          tabTitle: "Eightfold Path",
          pageTitle: "PATAÑJALI'S AṢṬĀṄGA YOGA",
          description: "The practical eightfold path for spiritual realization."
        }
      },

      // 哲学内容
      concepts: {
        essence: [
          {
            title: "The Core Definition",
            devanagari: "योगश्चित्तवृत्तिनिरोधः",
            sanskrit: "yogaś citta-vṛtti-nirodhaḥ",
            translation: "Yoga is the cessation of the fluctuations of the mind.",
            explanation: "The foundational definition from Patañjali's Yoga Sūtra (1.2). It establishes that the primary aim of yoga is not physical flexibility, but mastery over the mind's incessant activity, leading to a state of pure awareness."
          },
          {
            title: "The Means of Attainment",
            devanagari: "अभ्यासवैराग्याभ्यां तन्निरोधः",
            sanskrit: "abhyāsa-vairāgyābhyāṁ tan-nirodhaḥ",
            translation: "Through practice and non-attachment, these fluctuations are stilled.",
            explanation: "Yoga Sūtra 1.12 reveals the two essential methods: abhyāsa (persistent, disciplined practice) and vairāgya (non-attachment, dispassion). This combination is the key to progressing on the yogic path."
          },
          {
              title: "The State of Mastery",
              devanagari: "तदा द्रष्टुः स्वरूपेऽवस्थानम्",
              sanskrit: "tadā draṣṭuḥ svarūpe'vasthānam",
              translation: "Then the seer abides in its own true nature.",
              explanation: "When the mind's fluctuations cease (Yoga Sūtra 1.3), the true Self (puruṣa) is revealed in its pristine state, free from identification with the changing phenomena of nature."
            },
            {
              title: "The Definition of Ignorance",
              devanagari: "अविद्या क्षेत्रमुत्तरेषां प्रसुप्ततनुविच्छिन्नोदाराणाम्",
              sanskrit: "avidyā kṣetram uttareṣāṁ prasupta-tanu-vicchinnodārāṇām",
              translation: "Ignorance is the breeding ground for the other afflictions, whether dormant, attenuated, interrupted, or fully active.",
              explanation: "Avidyā is not merely lack of information but a fundamental misapprehension of reality. It provides the soil in which all other kleśas (afflictions) grow and flourish (Yoga Sūtra 2.4)."
            }
        ],
        consciousness: [
          {
            title: "The Thinking Mind",
            devanagari: "मनस्",
            sanskrit: "manas",
            translation: "The mind-stuff; the sensory and thinking faculty.",
            explanation: "The first layer of citta (consciousness). Manas processes sensory input, generates thoughts and emotions, and is characterized by doubt and oscillation. It is the 'lake' where sensory streams converge."
          },
          {
            title: "The Faculty of Discernment",
            devanagari: "बुद्धि",
            sanskrit: "buddhi",
            translation: "Intellect; the discerning intelligence.",
            explanation: "The second layer. Buddhi possesses clarity, discrimination (viveka), and the capacity for decisive judgment. It is the 'light of wisdom' that must be cultivated to govern the other aspects of mind."
          },
          {
            title: "The Ego-Principle",
            devanagari: "अहंकार",
            sanskrit: "ahaṃkāra",
            translation: "The I-maker; ego-sense.",
            explanation: "The third layer. Ahaṃkāra creates the sense of 'I' and 'mine,' constructing individual identity by falsely identifying pure consciousness (puruṣa) with the body-mind complex. It is the 'shell of I-ness.'"
          },
          {
            title: "The Storehouse of Impressions",
            devanagari: "चित्त",
            sanskrit: "citta",
            translation: "Consciousness in its totality; the mind-field.",
            explanation: "The deepest layer, encompassing all the above. Citta stores all past impressions (saṃskāras) and latent tendencies (vāsanās). It is the 'deep ocean of consciousness' from which all mental waves arise."
          },
          {
              title: "The Transformation of Consciousness",
              devanagari: "तदा द्रष्टुः स्वरूपेऽवस्थानम्",
              sanskrit: "tadā draṣṭuḥ svarūpe'vasthānam",
              translation: "Then the seer abides in its own true nature.",
              explanation: "The culmination of yogic practice: when citta-vṛtti-nirodhaḥ is achieved, the modifications cease and pure consciousness rests in its own nature, no longer distorted by the mind's projections."
            }
        ],
        suffering: [
          {
            title: "The Fundamental Ignorance",
            devanagari: "अविद्या",
            sanskrit: "avidyā",
            translation: "Ignorance; not seeing things as they are.",
            explanation: "The root of all suffering (Yoga Sūtra 2.3-4). Avidyā is mistaking the impermanent for the permanent, the impure for the pure, pain for pleasure, and the non-Self for the Self."
          },
          {
            title: "The Sense of I-ness",
            devanagari: "अस्मिता",
            sanskrit: "asmitā",
            translation: "Egoism; I-am-ness.",
            explanation: "The false identification of the power of pure awareness (puruṣa) with the power of perception (buddhi). It is the glue that binds consciousness to its perceived limitations."
          },
          {
            title: "The Clinging to Pleasure",
            devanagari: "राग",
            sanskrit: "rāga",
            translation: "Attachment; craving for pleasurable experiences.",
            explanation: "Attachment arises from the memory of past pleasure. It creates dependency and binds consciousness to the endless cycle of seeking gratification."
          },
          {
            title: "The Aversion to Pain",
            devanagari: "द्वेष",
            sanskrit: "dveṣa",
            translation: "Aversion; hatred toward painful experiences.",
            explanation: "Aversion arises from the memory of past pain. It creates division, resistance, and strengthens the ego's sense of separation."
          },
          {
            title: "The Fear of Death",
            devanagari: "अभिनिवेश",
            sanskrit: "abhiniveśa",
            translation: "Clinging to life; fear of annihilation.",
            explanation: "The instinctual, even in the wise, to cling to bodily life and fear its end. It is the most subtle and tenacious of the afflictions, rooted in the primal survival instinct."
          },
          {
              title: "The Method of Elimination",
              devanagari: "ते प्रतिप्रसवहेयाः सूक्ष्माः",
              sanskrit: "te pratiprasava-heyāḥ sūkṣmāḥ",
              translation: "These subtle afflictions are to be eliminated by tracing them back to their origin.",
              explanation: "The remedy for the kleśas is pratiprasava - the process of involution or reverse manifestation. By understanding the origin of these tendencies, they can be dissolved at their source (Yoga Sūtra 2.10)."
            }
        ],
        cosmology: [
          {
            title: "The Three Qualities of Nature",
            devanagari: "सत्त्वरजस्तमसां गुणाः",
            sanskrit: "sattva-rajas-tamasāṁ guṇāḥ",
            translation: "The three qualities: purity, activity, and inertia.",
            explanation: "According to Sāṅkhya philosophy, all of material nature (prakṛti) is woven from three strands: sattva (clarity, harmony), rajas (movement, passion), and tamas (inertia, darkness). They are in constant flux."
          },
          {
              title: "The Nature of Puruṣa",
              devanagari: "द्रष्टा दृशिमात्रः शुद्धोऽपि प्रत्ययानुपश्यः",
              sanskrit: "draṣṭā dṛśi-mātraḥ śuddho'pi pratyayānupaśyaḥ",
              translation: "The seer is nothing but the power of seeing, pure consciousness, yet it appears to see through the mind.",
              explanation: "Puruṣa is pure consciousness, unchanging and eternal. Though it is separate from prakṛti, through ignorance it appears to be identified with the mind's activities (Yoga Sūtra 2.20)."
            },
          {
            title: "The Three Bodies",
            devanagari: "शरीरत्रयम्",
            sanskrit: "śarīra-trayam",
            translation: "The threefold body.",
            explanation: "1. Sthūla-śarīra: The gross physical body. 2. Sūkṣma-śarīra: The subtle body (prāṇa, mind, ego). 3. Kāraṇa-śarīra: The causal body (the seed of ignorance). Liberation is transcending all three."
          },
          {
            title: "The Five Sheaths",
            devanagari: "पञ्चकोशाः",
            sanskrit: "pañca-kośāḥ",
            translation: "The five sheaths.",
            explanation: "The layers enveloping the true Self (Ātman): 1. Annamaya-kośa (food sheath, physical body), 2. Prāṇamaya-kośa (energy sheath), 3. Manomaya-kośa (mental sheath), 4. Vijñānamaya-kośa (wisdom sheath), 5. Ānandamaya-kośa (bliss sheath). Yoga is peeling away these layers."
          },
          {
              title: "The Union of Seer and Seen",
              devanagari: "सत्त्वपुरुषयोरत्यन्तासङ्कीर्णयोः प्रत्ययाविशेषो भोगः",
              sanskrit: "sattva-puruṣayor atyantāsaṅkīrṇayoḥ pratyayāviśeṣo bhogah",
              translation: "When pure awareness rests in its own nature, there is the cessation of all experiences.",
              explanation: "In the highest state of yoga, the distinction between the seer (puruṣa) and the seen (prakṛti) dissolves. All experiences cease as consciousness returns to its source (Yoga Sūtra 4.34)."
            }
        ],
        energy: [
          {
            title: "The Central Channel",
            devanagari: "सुषुम्ना नाडी",
            sanskrit: "suṣumṇā nāḍī",
            translation: "The central channel.",
            explanation: "The most important energy channel, running along the spinal column. When prāṇa flows through suṣumṇā, it leads to higher states of consciousness and liberation. 'suṣumṇāṃ praviśedyogī muktīmārgaṃ samāśritaḥ' - The yogi whose energy enters suṣumṇā is established on the path to liberation (Śiva Saṁhitā 5.141)."
          },
          {
            title: "The Solar and Lunar Channels",
            devanagari: "पिङ्गला च इडा च",
            sanskrit: "piṅgalā ca iḍā ca",
            translation: "The solar (right) and lunar (left) channels.",
            explanation: "Piṅgalā (solar, heating, active) and Iḍā (lunar, cooling, receptive) intertwine around suṣumṇā. Their balance is essential for physical health and mental equilibrium, preparing for the awakening of suṣumṇā."
          },
          {
            title: "The Wheel of Energy",
            devanagari: "चक्रम्",
            sanskrit: "cakram",
            translation: "Wheel; energy center.",
            explanation: "Major energy plexuses located along suṣumṇā. From base to crown: Mūlādhāra (root), Svādhiṣṭhāna (sacral), Maṇipūra (navel), Anāhata (heart), Viśuddha (throat), Ājñā (third eye), Sahasrāra (crown). They represent stages of consciousness evolution."
          },
          {
            title: "The Coiled Serpent Power",
            devanagari: "कुण्डलिनी शक्तिः",
            sanskrit: "kuṇḍalinī śaktiḥ",
            translation: "The coiled serpent energy.",
            explanation: "The dormant spiritual potential, visualized as a coiled serpent at the base of the spine. Through yogic practice, it is awakened, rises through suṣumṇā, pierces the chakras, and unites with consciousness at the crown, leading to enlightenment. 'kuṇḍalinī śaktiḥ suptā mūlādhāre' - The Kuṇḍalinī energy sleeps in the mūlādhāra (Haṭha Yoga Pradīpikā 3.2-3)."
          },
          {
              title: "The Five Vital Winds",
              devanagari: "पञ्चप्राणाः",
              sanskrit: "pañca-prāṇāḥ",
              translation: "The five vital breaths.",
              explanation: "The five primary movements of life force: 1. Prāṇa (inward moving, chest), 2. Apāna (downward moving, pelvis), 3. Samāna (balancing, navel), 4. Udāna (upward moving, throat), 5. Vyāna (pervading, entire body). Their balance is crucial for health and meditation."
            }
        ],
        practice: [
          {
            title: "The Eight Limbs",
            devanagari: "यमनियमासनप्राणायामप्रत्याहारधारणाध्यानसमाधयोऽष्टावङ्गानि",
            sanskrit: "yama-niyama-āsana-prāṇāyāma-pratyāhāra-dhāraṇā-dhyāna-samādhayaḥ aṣṭāv aṅgāni",
            translation: "Restraints, observances, posture, breath control, sense withdrawal, concentration, meditation, and samādhi are the eight limbs.",
            explanation: "The complete framework of Patañjali's Aṣṭāṅga Yoga (Yoga Sūtra 2.29). It provides a step-by-step path from ethical preparation (yama/niyama) through physical and mental disciplines, culminating in the highest states of consciousness (samādhi)."
          },
          {
            title: "The First Limb: Universal Morality",
            devanagari: "अहिंसासत्यास्तेयब्रह्मचर्यापरिग्रहा यमाः",
            sanskrit: "ahiṃsā-satyā-asteya-brahmacarya-aparigrahāḥ yamāḥ",
            translation: "Non-violence, truthfulness, non-stealing, celibacy, and non-possessiveness are the restraints.",
            explanation: "Yama forms the ethical foundation for interaction with the world. Ahiṃsā (non-harming) is the cornerstone. These are universal vows, not limited by time, place, or circumstance (Yoga Sūtra 2.31)."
          },
          {
              title: "The Second Limb: Personal Observances",
              devanagari: "शौचसन्तोषतपःस्वाध्यायेश्वरप्रणिधानानि नियमाः",
              sanskrit: "śauca-santoṣa-tapaḥ-svādhyāya-īśvarapraṇidhānāni niyamāḥ",
              translation: "Purity, contentment, austerity, self-study, and surrender to the Lord are the observances.",
              explanation: "Niyama cultivates inner discipline and personal refinement. Īśvarapraṇidhāna (surrender to the Divine) is the culmination, leading to samādhi (Yoga Sūtra 2.45)."
            },
          {
            title: "The Foundation of Posture",
            devanagari: "स्थिरसुखमासनम्",
            sanskrit: "sthira sukham āsanam",
            translation: "Posture is that which is steady and comfortable.",
            explanation: "The classic definition of āsana (Yoga Sūtra 2.46). Stability (sthira) and ease (sukha) eliminate the disturbance of duality ('tato dvandvānabhighātaḥ' - thence, freedom from the assault of the pairs of opposites, 2.48), making the body a fit vehicle for meditation."
          },
          {
              title: "The Control of Life Force",
              devanagari: "तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः",
              sanskrit: "tasmin sati śvāsa-praśvāsayoḥ gati-vicchedaḥ prāṇāyāmaḥ",
              translation: "That being established, the regulation of the movement of inhalation and exhalation is prāṇāyāma.",
              explanation: "Prāṇāyāma follows stable āsana. By controlling the breath, one gains mastery over prāṇa (vital energy), which leads to mental clarity and prepares for meditation (Yoga Sūtra 2.49-53)."
            }
        ]
      }
    },

    zh: {
      // 页面基本信息
      meta: {
        title: "瑜伽哲学：古典灵性体系的理论架构与现代实践转化",
        subtitle: "योगदर्शनं",
        intro: "系统梳理古典瑜伽哲学的核心理论体系，从形而上学基础到在现代阿斯汤加瑜伽中的实践应用路径。",
        backButton: "返回练习指南"
      },

      // 标签页配置 - 按理论体系分类
      sections: {
        essence: {
          tabTitle: "本质与目的",
          pageTitle: "瑜伽的定义与终极目标",
          description: "古典文献中阐明的瑜伽根本定义及其终极目的。"
        },
        consciousness: {
          tabTitle: "心识结构",
          pageTitle: "四重心念结构模型",
          description: "瑜伽心理学视角下的意识结构与功能层次。"
        },
        suffering: {
          tabTitle: "痛苦根源",
          pageTitle: "五苦因论",
          description: "帕坦伽利对人类痛苦根本原因的精微剖析。"
        },
        cosmology: {
          tabTitle: "宇宙与存在",
          pageTitle: "存在的宇宙论模型",
          description: "三德理论与个体存在模型（三身与五鞘）。"
        },
        energy: {
          tabTitle: "能量系统",
          pageTitle: "精微能量解剖学",
          description: "生命能量通道、脉轮与昆达里尼的觉醒。"
        },
        practice: {
          tabTitle: "八支之道",
          pageTitle: "帕坦伽利的八支瑜伽",
          description: "通向灵性觉悟的八支实践路径。"
        }
      },

      // 哲学内容
      concepts: {
        essence: [
          {
            title: "核心定义",
            devanagari: "योगश्चित्तवृत्तिनिरोधः",
            sanskrit: "yogaś citta-vṛtti-nirodhaḥ",
            translation: "瑜伽即对心念波动的止息。",
            explanation: "出自帕坦伽利《瑜伽经》（1.2）的根本定义。确立了瑜伽的首要目标并非身体柔韧，而是掌控心念的无休止活动，导向纯粹觉知的状态。"
          },
          {
            title: "达成方法",
            devanagari: "अभ्यासवैराग्याभ्यां तन्निरोधः",
            sanskrit: "abhyāsa-vairāgyābhyāṁ tan-nirodhaḥ",
            translation: "通过持续的练习与不执着，心念得以止息。",
            explanation: "《瑜伽经》1.12揭示了两种根本方法：abhyāsa（持久、自律的练习）和 vairāgya（不执着、超然）。这一组合是在瑜伽之路上进步的关键。"
          },
          {
              title: "安住自性",
              devanagari: "तदा द्रष्टुः स्वरूपेऽवस्थानम्",
              sanskrit: "tadā draṣṭuḥ svarūpe'vasthānam",
              translation: "于是，见者安住于其自身本性。",
              explanation: "当心念波动止息时（《瑜伽经》1.3），真我（puruṣa）在其原始状态中被揭示，不再与自然界的变幻现象认同。"
            },
            {
              title: "无明之定义",
              devanagari: "अविद्या क्षेत्रमुत्तरेषां प्रसुप्ततनुविच्छिन्नोदाराणाम्",
              sanskrit: "avidyā kṣetram uttareṣāṁ prasupta-tanu-vicchinnodārāṇām",
              translation: "无明是其余苦因的滋生地，无论其处于潜伏、微弱、中断或完全活跃的状态。",
              explanation: "无明不仅仅是信息的缺乏，更是对实相的根本误解。它为所有其他苦因（kleśas）的生长和繁衍提供了土壤（《瑜伽经》2.4）。"
            }
        ],
        consciousness: [
          {
            title: "思维心意",
            devanagari: "मनस्",
            sanskrit: "manas",
            translation: "心意层；感官与思维官能。",
            explanation: "心识（citta）的第一层。Manas 处理感官输入，产生思维情绪，以怀疑和摇摆为特征。它是感官洪流交汇的'湖泊'。"
          },
          {
            title: "辨别智慧",
            devanagari: "बुद्धि",
            sanskrit: "buddhi",
            translation: "理智；辨别性的智慧。",
            explanation: "第二层。Buddhi 具备清晰性、分辨力（viveka）和决断能力。它是必须被培养以统摄心识其他层面的'智慧之光'。"
          },
          {
            title: "我执之壳",
            devanagari: "अहंकार",
            sanskrit: "ahaṃkāra",
            translation: "我之制造者；自我感。",
            explanation: "第三层。Ahaṃkāra 创造'我'与'我所'的感觉，通过将纯粹意识错误认同于身心复合体而构建个体身份。它是'我执之壳'。"
          },
          {
            title: "印象藏识",
            devanagari: "चित्त",
            sanskrit: "citta",
            translation: "整体性的意识；心田。",
            explanation: "最深层，包含以上所有层面。Citta 储存所有过往印记（saṃskāras）和潜在习气（vāsanās）。它是所有心念波动起源的'意识深海'。"
          },
          {
              title: "意识之转化",
              devanagari: "तदा द्रष्टुः स्वरूपेऽवस्थानम्",
              sanskrit: "tadā draṣṭuḥ svarūpe'vasthānam",
              translation: "于是，见者安住于其自身本性。",
              explanation: "瑜伽修行的顶点：当心念波动止息时，心念的变化停止，纯粹意识安住于其自身本性，不再被心意的投射所扭曲。"
            }
        ],
        suffering: [
          {
            title: "根本无明",
            devanagari: "अविद्या",
            sanskrit: "avidyā",
            translation: "无知；不能如实地看待事物。",
            explanation: "一切痛苦之根（《瑜伽经》2.3-4）。Avidyā 是将无常误认为恒常，不净误认为纯净，痛苦误认为快乐，非我误认为我。"
          },
          {
            title: "我执之根",
            devanagari: "अस्मिता",
            sanskrit: "asmitā",
            translation: "我慢；我之存在感。",
            explanation: "将纯粹觉知的力量错误认同于感知官能的力量。它是将意识束缚于其感知限制的粘合剂。"
          },
          {
            title: "贪着乐受",
            devanagari: "राग",
            sanskrit: "rāga",
            translation: "贪爱；对愉悦体验的渴求。",
            explanation: "贪着源于对过去快乐的记忆。它制造依赖，将意识束缚于无尽追逐满足的循环。"
          },
          {
            title: "嗔厌苦受",
            devanagari: "द्वेष",
            sanskrit: "dveṣa",
            translation: "嗔恨；对痛苦体验的厌恶。",
            explanation: "嗔恨源于对过去痛苦的记忆。它制造分裂、抗拒，并强化自我感的分离。"
          },
          {
            title: "惧死本能",
            devanagari: "अभिनिवेश",
            sanskrit: "abhiniveśa",
            translation: "执着于生命；对消亡的恐惧。",
            explanation: "即使是智者也会本能地执着于身体生命并恐惧其终结。它是最微妙、最顽固的苦因，根植于原始的生存本能。"
          },
          {
              title: "消除方法",
              devanagari: "ते प्रतिप्रसवहेयाः सूक्ष्माः",
              sanskrit: "te pratiprasava-heyāḥ sūkṣmāḥ",
              translation: "这些微细苦因，可经由返溯其源而消除。",
              explanation: "对治苦因的方法是 pratiprasava——逆反或反向显现的过程。通过理解这些习气的起源，可以在其源头处将其消解（《瑜伽经》2.10）。"
            }
        ],
        cosmology: [
          {
            title: "自然三德",
            devanagari: "सत्त्वरजस्तमसां गुणाः",
            sanskrit: "sattva-rajas-tamasāṁ guṇāḥ",
            translation: "三属性：悦性、激性、惰性。",
            explanation: "依据数论哲学，整个物质自然（prakṛti）由三股属性交织而成：sattva（清明、和谐）、rajas（运动、激情）、tamas（惰性、黑暗）。它们处于永恒的动态变化中。"
          },
          {
              title: "纯粹意识之性",
              devanagari: "द्रष्टा दृशिमात्रः शुद्धोऽपि प्रत्ययानुपश्यः",
              sanskrit: "draṣṭā dṛśi-mātraḥ śuddho'pi pratyayānupaśyaḥ",
              translation: "见者只是见的能力，纯粹的觉知，却看似通过心意在观看。",
              explanation: "纯粹意识（puruṣa）是永恒不变、纯粹的意识。虽然它独立于自然，但通过无明，它似乎与心意的活动认同了（《瑜伽经》2.20）。"
            },
          {
            title: "三重身体",
            devanagari: "शरीरत्रयम्",
            sanskrit: "śarīra-trayam",
            translation: "三重身体。",
            explanation: "1. 粗重身（物质身体）。2. 精微身（生命能量、心意、我执）。3. 因果身（无明之种）。解脱即是超越此三身。"
          },
          {
            title: "五重鞘层",
            devanagari: "पञ्चकोशाः",
            sanskrit: "pañca-kośāḥ",
            translation: "五鞘。",
            explanation: "覆盖真我（Ātman）的层次：1. 食物鞘（物质身），2. 能量鞘，3. 心意鞘，4. 智慧鞘，5. 喜乐鞘。瑜伽即是层层剥除这些覆盖。"
          },
          {
              title: "能见与所见之合一",
              devanagari: "सत्त्वपुरुषयोरत्यन्तासङ्कीर्णयोः प्रत्ययाविशेषो भोगः",
              sanskrit: "sattva-puruṣayor atyantāsaṅkīrṇayoḥ pratyayāviśeṣo bhogah",
              translation: "当纯净的觉知安住于其本然自性，一切经验的漩涡便告止息。",
              explanation: "在瑜伽的最高状态中，能见者（纯粹意识）与所见者（自然）之间的分别消融。所有经验止息，意识回归其源头（《瑜伽经》4.34）。"
            }
        ],
        energy: [
          {
            title: "中脉圣殿",
            devanagari: "सुषुम्ना नाडी",
            sanskrit: "suṣumṇā nāḍī",
            translation: "中枢通道。",
            explanation: "最重要的能量通道，沿脊柱中轴运行。当生命能量流经中脉，将导向更高的意识状态与解脱。'瑜伽士的能量入于中脉，即踏上解脱之途'（《湿婆本集》5.141）。"
          },
          {
            title: "日月双脉",
            devanagari: "पिङ्गला च इडा च",
            sanskrit: "piṅgalā ca iḍā ca",
            translation: "右脉（日）与左脉（月）。",
            explanation: "右脉（日，热性，主动）与左脉（月，凉性，接纳）环绕中脉交织。它们的平衡对身体健康与心念平衡至关重要，为开启中脉做好准备。"
          },
          {
            title: "能量之轮",
            devanagari: "चक्रम्",
            sanskrit: "cakram",
            translation: "轮；能量中心。",
            explanation: "沿中脉分布的主要能量丛集。从下至上：根轮、腹轮、脐轮、心轮、喉轮、眉间轮、顶轮。它们代表着意识进化的各个阶段。"
          },
          {
            title: "灵蛇之力",
            devanagari: "कुण्डलिनी शक्तिः",
            sanskrit: "kuṇḍalinī śaktiḥ",
            translation: "盘卷的灵蛇能量。",
            explanation: "蛰伏的灵性潜能，被观想为盘踞于脊柱底部的灵蛇。通过瑜伽修习，它被唤醒，沿中脉上升，穿透诸脉轮，在顶轮与意识合一，导向觉悟。'昆达里尼能量沉睡于根轮'（《哈他之光》3.2-3）。"
          },
          {
              title: "五大气",
              devanagari: "पञ्चप्राणाः",
              sanskrit: "pañca-prāṇāḥ",
              translation: "五种生命之气。",
              explanation: "生命能量的五种主要运动：1. 命气（向内移动，胸部），2. 下行气（向下移动，骨盆），3. 平行气（平衡，脐部），4. 上行气（向上移动，喉部），5. 遍行气（遍布，全身）。它们的平衡对健康和禅修至关重要。"
            }
        ],
        practice: [
          {
            title: "八支之架",
            devanagari: "यमनियमासनप्राणायामप्रत्याहारधारणाध्यानसमाधयोऽष्टावङ्गानि",
            sanskrit: "yama-niyama-āsana-prāṇāyāma-pratyāhāra-dhāraṇā-dhyāna-samādhayaḥ aṣṭāv aṅgāni",
            translation: "禁制、劝制、坐法、调息、制感、专注、禅定、三昧，是为八支。",
            explanation: "帕坦伽利八支瑜伽的完整框架（《瑜伽经》2.29）。它提供了从道德准备到身心训练，最终达至最高意识状态的循序渐进之道。"
          },
          {
            title: "第一支：根本戒律",
            devanagari: "अहिंसासत्यास्तेयब्रह्मचर्यापरिग्रहा यमाः",
            sanskrit: "ahiṃsā-satyā-asteya-brahmacarya-aparigrahāḥ yamāḥ",
            translation: "不害、真实、不盗、梵行、无著，是为五戒。",
            explanation: "禁制是与世界互动的伦理基础。不害（ahiṃsā）是基石。这些是普遍的誓约，不受时间、地点或环境所限（《瑜伽经》2.31）。"
          },
          {
              title: "第二支：个人修持",
              devanagari: "शौचसन्तोषतपःस्वाध्यायेश्वरप्रणिधानानि नियमाः",
              sanskrit: "śauca-santoṣa-tapaḥ-svādhyāya-īśvarapraṇidhānāni niyamāḥ",
              translation: "清净、知足、苦行、诵习、敬神，是为五劝。",
              explanation: "劝制培养内在的戒律和个人精炼。敬神（īśvarapraṇidhāna）是顶点，导向三昧（《瑜伽经》2.45）。"
            },
          {
            title: "坐法之基",
            devanagari: "स्थिरसुखमासनम्",
            sanskrit: "sthira sukham āsanam",
            translation: "坐法即稳定且舒适的姿势。",
            explanation: "对体式的经典定义（《瑜伽经》2.46）。稳定（sthira）与舒适（sukha）消除了二元对立的侵扰（'由此，不再受二元对立的侵扰'，2.48），使身体成为适合禅修的载体。"
          },
          {
              title: "生命能量之调控",
              devanagari: "तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः",
              sanskrit: "tasmin sati śvāsa-praśvāsayoḥ gati-vicchedaḥ prāṇāyāmaḥ",
              translation: "在坐法稳固的基础上，呼吸的出入停顿即是调息。",
              explanation: "调息紧随稳定的坐法之后。通过控制呼吸，人们获得对生命能量的掌控，这导向心念的清明并为禅修做好准备（《瑜伽经》2.49-53）。"
            }
        ]
      }
    }
  };

  // ============================================
  // 获取当前语言的内容
  // ============================================
  
  const content = philosophyData[language as keyof typeof philosophyData];
  const meta = content.meta;
  const sections = content.sections;
  const concepts = content.concepts;

  // ============================================
  // 标签页配置
  // ============================================
  
  const sectionTabs = {
    essence: sections.essence.tabTitle,
    consciousness: sections.consciousness.tabTitle,
    suffering: sections.suffering.tabTitle,
    cosmology: sections.cosmology.tabTitle,
    energy: sections.energy.tabTitle,
    practice: sections.practice.tabTitle
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
                
                {/* 哲学概念列表 */}
                <div className="space-y-0">
                  {concepts[sectionKey as keyof typeof concepts].map((concept, index) => (
                    <div key={index} className="py-3 md:py-3.5 border-b border-gray-100">
                      <div className="space-y-1.5">
                        {/* 第1行：概念标题 */}
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
