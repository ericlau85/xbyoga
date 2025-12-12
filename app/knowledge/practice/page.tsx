'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function PracticeMethodsPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'essence' | 'principles' | 'primary' | 'intermediate' | 'advanced'>('essence');

  const practiceData = {
    en: {
      title: "Methods of Āsana Practice",
      subtitle: "体式练习方法",
      intro: "A comprehensive guide to Ashtanga Yoga asana practice methods, covering philosophical foundations, practice principles, and progression through series. Based on classical yoga texts and traditional teachings.",
      sections: {
        essence: {
          title: "Essence of Āsana",
          content: "The nature and purpose of asana practice"
        },
        principles: {
          title: "Practice Principles",
          content: "Fundamental guidelines for asana practice"
        },
        primary: {
          title: "Primary Series",
          content: "Yoga Chikitsā - Yoga Therapy"
        },
        intermediate: {
          title: "Intermediate Series",
          content: "Nāḍī Śodhana - Nerve Purification"
        },
        advanced: {
          title: "Advanced Series",
          content: "Sthira Bhāga - Divine Stability"
        }
      },
      essence: {
        sutras: [
          {
            devanagari: "स्थिरसुखमासनम्",
            sanskrit: "sthira-sukham āsanam",
            meaning: "Āsana should be steady and comfortable",
            source: "Yoga Sūtra 2.46"
          },
          {
            devanagari: "प्रयत्नशैथिल्यानन्तसमापत्तिभ्याम्",
            sanskrit: "prayatna-śaithilya-ananta-samāpattibhyām",
            meaning: "Through relaxation of effort and meditation on the infinite",
            source: "Yoga Sūtra 2.47"
          },
          {
            devanagari: "ततो द्वन्द्वानभिघातः",
            sanskrit: "tato dvandvānabhighātaḥ",
            meaning: "Then there is no disturbance from dualities",
            source: "Yoga Sūtra 2.48"
          },
          {
            devanagari: "हठस्य प्रथमाङ्गत्वाद् आसनं पूर्वम् उच्यते।कुर्यात् तद् आसनं स्थैर्यम् आरोग्यं चाङ्गलाघवम्॥",
            sanskrit: "haṭhasya prathama-aṅgatvād-āsanaṁ pūrvam-ucyate।kuryāt-tad-āsanaṃ sthairyam-ārogyaṃ ca-aṅga-lāghvam॥",
            meaning: "Āsana is said to be the first limb of Hatha Yoga; practice of āsana brings steadiness, health and lightness of body",
            source: "Haṭha Pradīpikā 1.17"
          },
          {
            devanagari: "आसने स्थिरतां प्राप्य प्राणायामं समभ्यसेत्",
            sanskrit: "āsane sthiratāṃ prāpya prāṇāyāmaṃ samabhyaset",
            meaning: "After attaining stability in āsana, one should practice prāṇāyāma",
            source: "Haṭha Pradīpikā 2.1"
          },
          {
            devanagari: "समं कायशिरोग्रीवं धारयन्नचलं स्थिरः।संप्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन्॥",
            sanskrit: "samaṃ kāya-śiro-grīvaṃ dhārayann acalaṃ sthiraḥ।samprēkṣya nāsikāgraṃ svaṃ diśaś cānavalōkayan॥",
            meaning: "Keeping the body, head, and neck erect, still and steady, gazing at the tip of the nose",
            source: "Bhagavad Gītā 6.13"
          },
          {
            devanagari: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
            sanskrit: "yogasthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya。siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate॥",
            meaning: "Established in yoga, perform actions abandoning attachment, remaining equipoise in success and failure",
            source: "Bhagavad Gītā 2.48"
          }
        ],
        content: [
          "Āsana (posture) is the fundamental component of yoga practice. Patañjali's exposition in the Yoga Sūtra is remarkably clear: āsana should be maintained with 'steadiness (sthira) and comfort (sukha)'. Though succinct, this encapsulates the essential meaning of asana practice, providing direction for future practice.",
          "The text further explains that this state is achieved by relaxing the effort (prayatna-śaithilya), thereby minimizing disturbances from dualities such as heat and cold, pleasure and pain. In the classical context, discussions about āsana primarily refer to seated postures. Patañjali emphasizes finding a seated posture that can be maintained comfortably for extended periods, ensuring that physical discomfort does not distract from deeper practice.",
          "The Haṭha Pradīpikā provides more detailed exposition on āsana. Yogī Svātmārāma states that āsana is the first step in Haṭha Yoga, and practicing āsana brings stability, health, and lightness to the body. The text specifically recommends postures beneficial for further practice, such as Padmāsana, Siddhāsana, Vīrāsana, etc., believing these postures help stabilize the body, purify the energy channels (nāḍīs), and establish a foundation for prāṇāyāma and advanced practice.",
          "The Bhagavad Gītā similarly refers primarily to seated postures: 'Keeping the body, head, and neck erect, still and steady.' This advice again aims at maintaining stability for prolonged periods. From these classical texts, we can discern that āsana in traditional yoga primarily serves sādhana (spiritual practice). The main purpose of āsana practice is to enable the body to remain still for extended periods, with comfort and stability being the paramount criteria.",
          "Modern yoga's various complex postures are largely later developments. Therefore, the essence of āsana practice lies not in the external difficulty of movements but in cultivating bodily stability and endurance, finding comfortable postures suitable for oneself, and preparing for deeper practice. This represents the most authentic, fundamental teaching about āsana in classical yoga texts."
        ]
      },
      principles: {
        sutras: [
          {
            devanagari: "नाडीशुद्धिं च कुर्वीत मुद्राभ्यासेन युक्तितः।आसनैः कुम्भकैश्चित्रैर्मुद्राभिर्नादधारणात्॥५६॥",
            sanskrit: "nāḍī-śuddhiṃ ca kurvīta mudrābhyāsena yuktitaḥ。āsanaiḥ kumbhakaiś citrair mudrābhir nāda-dhāraṇāt॥",
            meaning: "Purification of the nāḍīs is achieved through systematic practice of āsanas, various kumbhakas, mudrās, and nāda anusandhāna",
            source: "Haṭha Pradīpikā 1.56"
          },
          {
            devanagari: "आसनं प्राणसंरोधः प्रत्याहारश्च धारणा।ध्यानं समाधिरेतानि योगाङ्गानि न चान्यथा॥",
            sanskrit: "āsanaṃ prāṇa-saṃrodhaḥ pratyāhāraś ca dhāraṇā。dhyānaṃ samādhir etāni yogāṅgāni na cānyathā॥",
            meaning: "Āsana, prāṇāyāma, pratyāhāra, dhāraṇā, dhyāna, and samādhi are the six limbs of yoga",
            source: "Haṭha Pradīpikā 1.67"
          },
          {
            devanagari: "युवा वृद्धोऽतिवृद्धो वा व्याधितो दुर्बलोऽपि वा।अभ्यासात्सिद्धिमाप्नोति सर्वयोगेष्वतन्द्रितः॥",
            sanskrit: "yuvā vṛddho'tivṛddho vā vyādhito durbalo'pi vā。abhyāsāt siddhim āpnoti sarvayogeṣv atandritaḥ॥",
            meaning: "Whether young, old, sick, or weak—all can attain perfection through diligent practice",
            source: "Haṭha Pradīpikā 1.64"
          },
          {
            devanagari: "सिद्धिरभ्यासतो भवति नास्ति सिद्धिः कथञ्चन।योगशास्त्रं शतं पठ्यं मन्त्रं कोटिं जपेदपि ॥",
            sanskrit: "siddhir abhyāsato bhavati nāsti siddhiḥ kathañcana । yogaśāstraṃ śataṃ paṭhyaṃ mantraṃ koṭiṃ japed api ॥",
            meaning: "Perfection comes only through practice, not otherwise; neither by reading hundreds of scriptures nor by reciting millions of mantras",
            source: "Haṭha Pradīpikā 1.65"
          },
          {
            devanagari: "अभ्यासेन विना देवि सिद्धिर्नैवोपजायते।अतः कुरु प्रयत्नेन सिद्ध्यर्थमतुलं बलम् ॥",
            sanskrit: "abhyāsena vinā devi siddhir naivopajāyate 。 ataḥ kuru prayatnena siddhyartham atulaṃ balam ॥",
            meaning: "O Goddess! Without practice, perfection never manifests. Therefore, exert utmost effort in practice",
            source: "Haṭha Pradīpikā 1.66"
          },
          {
            devanagari: "द्रष्टुः स्वरूपेऽवस्थानम्",
            sanskrit: "draṣṭuḥ svarūpe'vasthānam",
            meaning: "The seer abides in its own nature",
            source: "Yoga Sūtra 1.3"
          },
          {
            devanagari: "तत्र स्थितौ यत्नः अभ्यासः",
            sanskrit: "tatra sthitau yatnaḥ abhyāsaḥ",
            meaning: "Practice is the effort to attain steadiness",
            source: "Yoga Sūtra 1.13"
          },
          {
            devanagari: "दीर्घकालनैरन्तर्यसत्कारासेवितो दृढभूमिः",
            sanskrit: "dīrgha-kāla-nairantarya-satkārāsevito dṛḍha-bhūmiḥ",
            meaning: "Practice becomes firmly grounded when attended to for a long time, without interruption, and with earnest devotion",
            source: "Yoga Sūtra 1.14"
          }
        ],
        content: [
          "Vinyāsa (Flow Practice): During dynamic practice, synchronisation of breath and movement is crucial. Each movement corresponds to a specific breath phase (e.g., inhalation for extension, exhalation for contraction). This coordination promotes circulation of vital energies, generating internal heat (tapas) that purifies body and mind. Sweat produced during practice expels impurities, and combined with wiping (mardana), promotes toxin elimination, making muscles and joints supple, ultimately achieving bodily purification (śarīra śuddhi).",
          "Tristhāna (Three Points of Focus): Āsana, prāṇāyāma, and dṛṣṭi constitute the three essential elements of practice, referring to the trinity of body, breath, and mind. This synchronisation aligns with the progressive stages of yoga sādhana: āsana establishes physical stability (sthira); prāṇāyāma achieves energetic balance (prāṇa-samyaṃ); visual anchor points ensure mental focus (ekāgratā).",
          "In āsana practice, there are multiple gazing points (dṛṣṭi): upward (ūrdhve dṛṣṭi), third eye (bhrūmadhye dṛṣṭi), nose tip (nāsāgre dṛṣṭi), side (pārśvayoh dṛṣṭi), navel (nābhou dṛṣṭi), fingertip (hastāgre dṛṣṭi), thumb tip (aṅguṣṭhāgre dṛṣṭi), toe tip (pādāgre dṛṣṭi), inward (antara dṛṣṭi), downward (adho mukha dṛṣṭi), etc. The purpose is to guide energy flow and prevent mental distraction—where breath moves, mind follows; where breath scatters, mind scatters. This is the essence of āsana practice—through external coordination (bahiraṅga-sāmya), ultimately leading to internal unity (antaraṅga-ekatva).",
          "Progressive Principle (Vinyāsa-krama): Āsana practice follows a systematic, sequential order: 1. Sun Salutations (sūrya namaskāra) initiate series practice through breath-movement synchronization, serving both as reverence to solar energy (āditya-vandanam) and as crucial physical-mental warm-up, activating the body while purifying consciousness. 2. Standing postures (sthiti-krama) cultivate foundational strength and spatial awareness, emphasizing lower-body stability and spinal extension, establishing basis for subsequent āsana practice (including basic postures, balancing poses, and seated transitions). 3. Seated postures (upaviṣṭa-krama) form the core practice of each series, adjusted according to stage-specific objectives; each group requires counter-poses to avoid imbalances (multi-series deepen inner focus, promoting spiritual stability). 4. Backbending sequence (praty-ākūñcana) achieves energetic balance within the series (standing dropbacks, wheel variations, jump-backs, dropovers). 5. Closing sequence (saṃhāra-krama) harmonizes dynamic-static energies and integrates body-mind, completing the cycle from movement to stillness (saṃhāra-saṃgraha) for holistic practice experience (includes sequential restorative poses, full prāṇāyāma, and final deep relaxation).",
          "The Haṭha Pradīpikā emphasizes that true progress in āsana manifests through progressively lengthened and subtle breath (dīrgha-sūkṣma), natural energy flow (svabhāvika-prāṇa), and sustained mental absorption (nirantara-samādhi)—all requiring gradual cultivation (krameṇa). The core value of āsana practice lies in bodily healing (yoga cikitsā), nerve purification (nāḍī śodhana), and inner stability (sthira bhāva).",
          "Yoga is a complete science of life (pūrṇa-yoga-vijñāna), with āsana being merely the first step. Focus on specific benefits reflects individual differences (vyakti-bheda), not hierarchical attainment. Svātmārāma warns in the Haṭha Pradīpikā: 'Yoga practice should be rooted in actual practice, not in seeking popularity.' Pursuing advanced postures without bodily purification (śuddhi) and nerve cleansing (nāḍī-śodhana) while neglecting inner awakening is like a tree without roots, destined to collapse.",
          "When practice matures, one naturally realizes the state described in Yoga Sūtra 1.3: 'The seer abides in its own nature.' At this stage, all āsanas return to their essence of 'steadiness and comfort' (sthira-sukham), distinctions between 'primary' and 'advanced' dissolve (bheda-nivṛtti), and external difficulty becomes mere conceptualization (prapañca)."
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
      subtitle: "Methods of Āsana Practice",
      intro: "阿斯汤加瑜伽体式练习方法综合指南，涵盖哲学基础、练习原则及系列进阶。基于古典瑜伽经典与传统教导。",
      sections: {
        essence: {
          title: "体式本质",
          content: "体式练习的本质与目的"
        },
        principles: {
          title: "练习原则",
          content: "体式练习的基本原则"
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
            devanagari: "प्रयत्नशैथिल्यानन्तसमापत्तिभ्याम्",
            sanskrit: "prayatna-śaithilya-ananta-samāpattibhyām",
            meaning: "此需放松身心（prayatna-śaithilya特指在保持体式时的精微放松状态）与融入无限（ananta-samāpatti），勤习方得",
            source: "《瑜伽经》2.47"
          },
          {
            devanagari: "ततो द्वन्द्वानभिघातः",
            sanskrit: "tato dvandvānabhighātaḥ",
            meaning: "这样，二元性（dvandva 如：冷热、苦乐）的干扰将停止",
            source: "《瑜伽经》2.48"
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
            meaning: "体式（āsana）稳定后，方可修习调息（prāṇāyāma）",
            source: "《哈他之光》2.1"
          },
          {
            devanagari: "समं कायशिरोग्रीवं धारयन्नचलं स्थिरः।संप्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन्॥",
            sanskrit: "samaṃ kāya-śiro-grīvaṃ dhārayann acalaṃ sthiraḥ。samprēkṣya nāsikāgraṃ svaṃ diśaś cānavalōkayan॥",
            meaning: "保持身体、头和颈项挺直，静止而稳定，凝视鼻尖，专注于内在",
            source: "《薄伽梵歌》6.13"
          },
          {
            devanagari: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
            sanskrit: "yogasthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya。siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate॥",
            meaning: "安住于瑜伽中，放下执着，履行你的职责，对成败一视同仁，这种心意平和即是瑜伽",
            source: "《薄伽梵歌》2.48"
          }
        ],
        content: [
          "体式（āsana）是瑜伽修习的基础环节，帕坦伽利在《瑜伽经》中的阐述非常明确：体式应该保持'稳定（sthira）而舒适（sukha）'，虽然简单，却道出了体式练习的核心要义，为以后的体式练习指明了方向。",
          "经文接着指出通过放松身体（prayatna-śaithilya）来达成这个状态，这样就能减少外界干扰（如冷热、苦乐等对立感受）。经典中关于体式的讨论主要是针对坐姿而言。帕坦伽利强调的是：找到一个能让你长时间保持不动且舒适的坐姿，这样才不会在进一步的练习中被身体的不适分散注意力。",
          "《哈他之光》对体式的阐述更为具体一些，瑜伽士斯瓦特玛拉摩（yogī·svātmārāma）指出：体式是哈他瑜伽的第一步，练习体式可以带来身体的稳定、健康和轻盈，经典中特别推荐了一些有助于进一步练习的姿势，如莲花坐（padmāsana）、至善坐（siddhāsana）、英雄坐（vīrāsana）等，认为这些体式能助于稳定身体，为调息（prāṇāyāma）净化气脉（nāḍī）和精进练习奠定基础。",
          "《薄伽梵歌》中提到的体式也主要是针对坐立姿势：'保持身体、头和颈项挺直，静止而稳定'。这同样是为了长时间保持稳定状态而给出的建议。从这些经典中我们可以看出：传统瑜伽中的体式首先是为了精进服务的，体式练习的主要目的是让身体能够长时间保持静止，舒适和稳定是最重要的标准。",
          "现代瑜伽中各种复杂的体式大多是后来发展出来的，因此，体式修习的核心不在于外在动作的难度，而在于：培养身体的稳定性和耐力，找到适合自己的舒适姿势，为更深层的练习做好准备。这才是古典瑜伽经典中关于体式最真实、最本原的教导。"
        ]
      },
      principles: {
        sutras: [
          {
            devanagari: "नाडीशुद्धिं च कुर्वीत मुद्राभ्यासेन युक्तितः।आसनैः कुम्भकैश्चित्रैर्मुद्राभिर्नादधारणात्॥५६॥",
            sanskrit: "nāḍī-śuddhiṃ ca kurvīta mudrābhyāsena yuktitaḥ。āsanaiḥ kumbhakaiś citrair mudrābhir nāda-dhāraṇāt॥",
            meaning: "依次通过体式、调息、各种身印以及谛听秘音等练习，气脉得净除其杂染",
            source: "《哈他之光》1.56"
          },
          {
            devanagari: "आसनं प्राणसंरोधः प्रत्याहारश्च धारणा।ध्यानं समाधिरेतानि योगाङ्गानि न चान्यथा॥",
            sanskrit: "āsanaṃ prāṇa-saṃrodhaḥ pratyāhāraś ca dhāraṇā。dhyānaṃ samādhir etāni yogāṅgāni na cānyathā॥",
            meaning: "各种体式、调息及其他殊妙功法，在未证悟之前，皆须持续练习",
            source: "《哈他之光》1.67"
          },
          {
            devanagari: "युवा वृद्धोऽतिवृद्धो वा व्याधितो दुर्बलोऽपि वा।अभ्यासात्सिद्धिमाप्नोति सर्वयोगेष्वतन्द्रितः॥",
            sanskrit: "yuvā vṛddho'tivṛddho vā vyādhito durbalo'pi vā。abhyāsāt siddhim āpnoti sarvayogeṣv atandritaḥ॥",
            meaning: "无论老、幼、病、弱，只要不懈修习，皆能成就",
            source: "《哈他之光》1.64"
          },
          {
            devanagari: "सिद्धिरभ्यासतो भवति नास्ति सिद्धिः कथञ्चन。योगशास्त्रं शतं पठ्यं मन्त्रं कोटिं जपेदपि ॥",
            sanskrit: "siddhir abhyāsato bhavati nāsti siddhiḥ kathañcana । yogaśāstraṃ śataṃ paṭhyaṃ mantraṃ koṭiṃ japed api ॥",
            meaning: "成就仅来自实践，绝无他途；即使研读百部瑜伽经典或持诵千万遍真言，亦无用处",
            source: "《哈他之光》1.65"
          },
          {
            devanagari: "अभ्यासेन विना देवि सिद्धिर्नैवोपजायते।अतः कुरु प्रयत्नेन सिद्ध्यर्थमतुलं बलम् ॥",
            sanskrit: "abhyāsena vinā devi siddhir naivopajāyate 。 ataḥ kuru prayatnena siddhyartham atulaṃ balam ॥",
            meaning: "女神啊！若无实践，成就永不显现。故应竭尽全力精进修习",
            source: "《哈他之光》1.66"
          },
          {
            devanagari: "द्रष्टुः स्वरूपेऽवस्थानम्",
            sanskrit: "draṣṭuḥ svarūpe'vasthānam",
            meaning: "观照者安住本然",
            source: "《瑜伽经》1.3"
          },
          {
            devanagari: "तत्र स्थितौ यत्नः अभ्यासः",
            sanskrit: "tatra sthitau yatnaḥ abhyāsaḥ",
            meaning: "修行为保持身心稳定所付出的持续努力",
            source: "《瑜伽经》1.13"
          },
          {
            devanagari: "दीर्घकालनैरन्तर्यसत्कारासेवितो दृढभूमिः",
            sanskrit: "dīrgha-kāla-nairantarya-satkārāsevito dṛḍha-bhūmiḥ",
            meaning: "长期、持续、虔诚的修习，将奠定稳固的修行根基",
            source: "《瑜伽经》1.14"
          }
        ],
        content: [
          "流动练习（vinyāsa）：在动态练习时，呼吸与动作的同步至关重要：每个动作对应特定呼吸相位（如吸气延伸、呼气内收），这种配合能能促进气血循环，产生净化身心的内在热量（tapas），练习中产生的汗水可排出杂质，配合擦拭（mardana）能促进毒素代谢，使肌肉与关节柔韧，最终实现身体的净化（śarīra śuddhi）。",
          "三处专注（tristhāna）：体式、调息与凝视构成修习的三大要素，指身、息、意的三位协同，同步契合瑜伽修习的精进次第，体式建立身体稳定（sthira）；调息实现能量平衡（prāṇa-samyaṃ）；视觉锚点确保意识专注（ekāgratā）。",
          "在体式练习中有多个凝视点（dṛṣṭi）：上方（ūrdhve dṛṣṭi）第三眼（bhrūmadhye dṛṣṭi）鼻尖（nāsāgre dṛṣṭi）侧边（pārśvayoh dṛṣṭi）肚脐（nābhou dṛṣṭi）手指尖（hastāgre dṛṣṭi）拇指尖（aṅguṣṭhāgre dṛṣṭi）脚趾尖（pādāgre dṛṣṭi）向内（antara dṛṣṭi）向下（adho mukha dṛṣṭi）等，目的是引导能量流动，避免心意散乱——气动意动，气散心散。正是体式练习的精髓——通过外在协调（bahiraṅga-sāmya），最终导向内在统一（antaraṅga-ekatva）。",
          "渐进原则（vinyāsa-krama）：体式练习遵循系统化、循序渐进的次第：1. 拜日（sūrya namaskāra）是系列练习的开端，通过呼吸与动作的同步，既是对太阳能量的礼敬（āditya-vandanam），也是身心预热的关键，兼具激活身体与净化心意的双重作用。2. 站立体式（sthiti-krama）培养根基力量与空间觉知，强调下肢稳定与脊柱延展，为后续体式练习奠定基础。（包含基本体式、平衡体式及坐立过渡体式）3. 坐立体式（upaviṣṭa-krama）为系列的核心修持部分，依据不同阶段目标调整，每组体式要有反向练习以避免失衡（多系列深化内在专注，促进灵性层面稳定）4. 后弯序列（praty-ākūñcana）实现系列能量平衡（站下轮、翻轮、反跳、后仰抓腿等）5. 结束序列（saṃhāra-krama）平衡动静能量并整合身心，完成动态回归静止的完整闭环（saṃhāra-saṃgraha）实现完整的修习体验（含一组连续的恢复体式、完全调息及最后的深度休息）。",
          "《哈他之光》明确指示：真正的体式进阶体现为呼吸深长细微（dīrgha-sūkṣma）、能量自然流动（svabhāvika-prāṇa）与心念持续专注（nirantara-samādhi），这些皆需循序渐进（krameṇa）的沉淀。体式练习的核心价值在于身心疗愈（yoga cikitsā）、气脉净化（nāḍī śodhana）与内在安定（sthira bhāva）。",
          "瑜伽是完整的生命科学（pūrṇa-yoga-vijñāna），体式仅为修行第一步。功效侧重仅反映个体差异（vyakti-bheda），绝非境界高低之判准。斯瓦特玛拉摩在《哈他之光》中警示'瑜伽练习，当以实修为本，且莫取众华宠'，若缺乏身体的净化（śuddhi）与气脉的清洁（nāḍī-śodhana）却执着于高难度体式而忽视内在觉醒的功效，瑜伽练习犹如无根之木，终将倾覆。",
          "当修持渐趋成熟时，自然证得《瑜伽经》1.3'观照者安住本然'，此时所有体式回归'稳定舒适（sthira-sukham）'本质，'初级/高级'分别消融（bheda-nivṛtti），外相难度终成戏论（prapañca）。"
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

  const practiceContent = practiceData[language as keyof typeof practiceData];

  // 定义标签配置
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
        <div className="max-w-6xl mx-auto px-4 pt-4 pb-2 md:pt-6 md:pb-3">
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
        <div className="max-w-6xl mx-auto px-4 pb-6 md:pb-8">
          {activeSection === 'essence' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-3">
                {practiceContent.sections.essence.content}
              </h2>
              
              {/* 文本内容部分 */}
              <div className="space-y-4 mb-6">
                {practiceContent.essence.content.map((paragraph, index) => (
                  <p key={index} className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* 经文引用部分 - 在正文后面 */}
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
              
              {/* 文本内容部分 */}
              <div className="space-y-4 mb-6">
                {practiceContent.principles.content.map((paragraph, index) => (
                  <p key={index} className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* 经文引用部分 - 在正文后面 */}
              <div className="space-y-2 mt-6 pt-6 border-t border-gray-100">
                {practiceContent.principles.sutras.map((sutra, index) => (
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

          {/* 其他标签页暂时留空 */}
          {activeSection === 'primary' && (
            <div>
              <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
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
