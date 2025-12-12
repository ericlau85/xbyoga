'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function SanskritMantrasPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'daily' | 'foundation' | 'meditation' | 'philosophy' | 'lineage'>('daily');

  // ============================================
  // 数据定义 - 按阿斯汤加瑜伽体系分类
  // ============================================
  
  const mantrasData = {
    en: {
      // 页面基本信息
      meta: {
        title: "Sanskrit Mantras in Ashtanga Yoga",
        subtitle: "अष्टाङ्गयोगे मन्त्राः",
        intro: "Sacred sounds in the Ashtanga Yoga tradition range from essential daily recitations to profound philosophical mantras that form the spiritual foundation of the practice.",
        backButton: "Back to Practice Guide Base"
      },

      // 标签页配置 - 按实践层级分类
      sections: {
        daily: {
          tabTitle: "Daily Practice",
          pageTitle: "ESSENTIAL RECITATIONS FOR MAT PRACTICE",
          description: "The only mantras chanted aloud in traditional Mysore-style Ashtanga practice."
        },
        foundation: {
          tabTitle: "Energetic Foundation",
          pageTitle: "ENERGETIC SUPPORT FOR ĀSANA & PRĀṆĀYĀMA",
          description: "Seed syllables and elemental mantras that stabilize the subtle body and synchronize with breath."
        },
        meditation: {
          tabTitle: "Meditation Support",
          pageTitle: "MANTRA FOR DHĀRAṆĀ & DHYĀNA",
          description: "Sacred formulas used for deepening concentration and meditation, supporting the later limbs of Ashtanga."
        },
        philosophy: {
          tabTitle: "Philosophical Core",
          pageTitle: "MAHĀVĀKYA & PHILOSOPHICAL MANTRA",
          description: "Great sayings and philosophical mantras that illuminate the ultimate goal of yoga practice."
        },
        lineage: {
          tabTitle: "Lineage & Tradition",
          pageTitle: "GURU STOTRA & TRADITIONAL RECITATIONS",
          description: "Homages to teachers and traditional Vedic chants that connect the practitioner to the living transmission."
        }
      },

      // 咒语内容 - 每个分类先放1-2个示例
      mantras: {
        daily: [
          {
            title: "Opening Invocation",
            devanagari: "वन्दे गुरूणां चरणारविन्दे संदर्शितस्वात्मसुखावबोधे ।\nनिःश्रेयसे जाङ्गलिकायमाने संसारहालाहलमोहशान्त्यै ॥",
            sanskrit: "vande gurūṇāṃ caraṇāravinde saṃdarśitasvātmasukhāvabodhe ।\nniḥśreyase jāṅgalikāyamāne saṃsārahālāhalamohaśāntyai ॥",
            translation: "I bow to the lotus feet of the Guru, who reveals the Practice Guide of Self-bliss.\nWho acts as the jungle physician to eradicate the delusion poisoned by the worldly life.",
            explanation: "The mandatory opening mantra for Ashtanga practice. It establishes the student-teacher relationship (guru-śiṣya paramparā) and sets the intention of practice as a means to eradicate spiritual ignorance (avidyā)."
          },
          {
            title: "Closing Mantra",
            devanagari: "स्वस्तिप्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः ।\nगोब्राह्मणेभ्यः शुभमस्तु नित्यं लोकाः समस्ताः सुखिनो भवन्तु ॥",
            sanskrit: "svasti prajābhyaḥ paripālayantāṃ nyāyena mārgeṇa mahīṃ mahīśāḥ ।\ngo brāhmaṇebhyaḥ śubhamastu nityaṃ lokāḥ samastāḥ sukhino bhavantu ॥",
            translation: "May the rulers protect the welfare of the people with justice and righteousness.\nMay there always be good fortune for cows and learned beings; may all beings in all worlds be happy.",
            explanation: "The closing mantra dedicates the merit of practice to all beings. It reflects the yama of ahiṃsā (non-harming) and embodies the practitioner's expanded consciousness beyond individual accomplishment."
          }
        ],
        foundation: [
          {
            title: "The Primordial Sound",
            devanagari: "ॐ",
            sanskrit: "oṃ / auṃ",
            translation: "The primordial syllable encompassing all existence.",
            explanation: "Considered the sound of the universe itself, OṂ contains A-U-M and silence. In practice, it is the foundation of all mantras and represents the three states of consciousness (waking, dreaming, deep sleep) plus the fourth state (turīya)."
          },
          {
            title: "Breath as Mantra",
            devanagari: "सो ऽहम्",
            sanskrit: "so'ham",
            translation: "He am I / I am That.",
            explanation: "The natural sound of inhalation (so) and exhalation (ham). In Ashtanga, this mantra is not chanted but embodied through ujjāyī breath, transforming prāṇāyāma into a continuous, moving meditation on identity with the Supreme."
          }
        ],
        meditation: [
          {
            title: "Five-Syllable Śiva Mantra",
            devanagari: "ॐ नमः शिवाय",
            sanskrit: "oṃ namaḥ śivāya",
            translation: "OṂ, salutations to Śiva.",
            explanation: "The pañcākṣara (five-syllable) mantra. 'Śiva' represents consciousness that is eternally pure, auspicious, and beyond limitations. This mantra is used in japa (repetition) to cultivate the quality of viśuddha (purity) and transcend ego-identification."
          },
          {
            title: "Goddess Triad Mantra",
            devanagari: "ॐ ह्रीं श्रीं क्लीं",
            sanskrit: "oṃ hrīṃ śrīṃ klīṃ",
            translation: "OṂ, HRĪṂ, ŚRĪṂ, KLĪṂ.",
            explanation: "A composite bīja mantra invoking three aspects of the Divine Mother: HRĪṂ (creative power, Mahāsarasvatī), ŚRĪṂ (sustaining abundance, Mahālakṣmī), and KLĪṂ (transforming fire, Mahākālī). Used for deep meditation to integrate these energies."
          }
        ],
        philosophy: [
          {
            title: "From Unreal to Real",
            devanagari: "असतो मा सद्गमय ।\nतमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ॥",
            sanskrit: "asato mā sadgamaya ।\ntamaso mā jyotirgamaya ।\nmṛtyormā amṛtaṃ gamaya ॥",
            translation: "Lead me from the unreal to the real.\nLead me from darkness to light.\nLead me from death to immortality.",
            explanation: "A mahāvākya from the Bṛhadāraṇyaka Upaniṣad. It encapsulates the entire journey of yoga: from ignorance (avidyā) to wisdom (jñāna), from bondage to liberation (mokṣa). Represents the ultimate goal of Ashtanga practice."
          },
          {
            title: "That Is Truth",
            devanagari: "ॐ तत् सत्",
            sanskrit: "oṃ tat sat",
            translation: "OṂ, That is Truth / The Absolute Reality.",
            explanation: "A concise philosophical declaration from the Bhagavad Gītā (17.23). 'Tat' refers to the ultimate impersonal reality; 'Sat' means truth, existence, goodness. Together, they affirm that the highest reality is pure existence-consciousness-bliss (sac-cid-ānanda)."
          }
        ],
        lineage: [
          {
            title: "Guru as the Trimūrti",
            devanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः ।\nगुरुः साक्षात्परं ब्रह्म तस्मै श्रीगुरवे नमः ॥",
            sanskrit: "gurur-brahmā gurur-viṣṇur gurur-devo maheśvaraḥ ।\nguruḥ sākṣāt paraṃ brahma tasmai śrī-gurave namaḥ ॥",
            translation: "The Guru is Brahmā, the Guru is Viṣṇu, the Guru is Śiva.\nThe Guru is verily the Supreme Brahman; to that auspicious Guru, salutations.",
            explanation: "Establishes the guru as the embodiment of the entire cosmic principle—creator (Brahmā), sustainer (Viṣṇu), and destroyer (Śiva). In Ashtanga, this mantra reinforces the importance of paramparā (lineage) as the living conduit of Practice Guide."
          },
          {
            title: "Homage to Patañjali",
            devanagari: "आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् ।\nसहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥",
            sanskrit: "ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam ।\nsahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥",
            translation: "I bow to Patañjali, white in complexion, with a thousand radiant heads,\nIn human form above the shoulders, bearing a conch, discus, and sword.",
            explanation: "A visual depiction of the sage Patañjali, compiler of the Yoga Sūtras. The conch (śaṅkha) represents sacred sound (nāda), discus (cakra) represents the wheel of time/dharma, sword (asi) represents discernment (viveka)—the tools for mastering yoga."
          }
        ]
      }
    },

    zh: {
      // 页面基本信息
      meta: {
        title: "阿斯汤加瑜伽中的梵语圣音",
        subtitle: "अष्टाङ्गयोगे मन्त्राः",
        intro: "始于垫上必修的念诵，终至作为灵性基石的哲学真言，贯穿着从身体实践到意识升华的完整次第。",
        backButton: "返回练习指南"
      },

      // 标签页配置 - 按实践层级分类
      sections: {
        daily: {
          tabTitle: "日常练习",
          pageTitle: "垫上练习必修咒",
          description: "传统迈索尔练习中，唯此需于垫上出声唱诵的咒语。"
        },
        foundation: {
          tabTitle: "能量根基",
          pageTitle: "体式与呼吸的能量支持",
          description: "稳定精微身、与呼吸同步的种子音与元素咒。"
        },
        meditation: {
          tabTitle: "禅定支持",
          pageTitle: "专注与禅定的真言",
          description: "用于深化执持（Dhāraṇā）与禅定（Dhyāna）的真言。"
        },
        philosophy: {
          tabTitle: "哲学核心",
          pageTitle: "哲学圣言与核心真言",
          description: "阐明瑜伽修行终极目标的大话与哲学性咒语。"
        },
        lineage: {
          tabTitle: "传承谱系",
          pageTitle: "敬师颂与传统念诵",
          description: "向传承上师致敬及连接古老吠陀传统的念诵文。"
        }
      },

      // 咒语内容 - 每个分类先放1-2个示例
        mantras: {
          daily: [
            {
              title: "礼敬上师颂",
              devanagari: "वन्दे गुरूणां चरणारविन्दे संदर्शितस्वात्मसुखावबोधे ।\nनिःश्रेयसे जाङ्गलिकायमाने संसारहालाहलमोहशान्त्यै ॥",
              sanskrit: "vande gurūṇāṃ caraṇāravinde saṃdarśitasvātmasukhāvabodhe ।\nniḥśreyase jāṅgalikāyamāne saṃsārahālāhalamohaśāntyai ॥",
              translation: "敬礼师尊莲足前，开示真我安乐禅；\n为求解脱施良药，灭尽痴毒醒迷眠。",
              explanation: "开篇颂的第一部分。礼敬传承上师，确立师徒法脉（guru-śiṣya paramparā），感念上师如林间良医，以智慧疗愈众生因世俗生活而中的痴毒。"
            },
            {
              title: "礼敬帕坦伽利颂",
              devanagari: "आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् ।\nसहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥",
              sanskrit: "ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam 。\nsahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥",
              translation: "上身人形持法器，螺轮剑戟威德全；\n头顶皎洁千蛇冠，敬礼帕坦伽利前。",
              explanation: "开篇颂的第二部分。礼敬瑜伽祖师帕坦伽利，感恩其编纂《瑜伽经》的智慧。其形象所持法器象征掌握瑜伽所需的工具：海螺（śaṅkha）代表神圣音声（nāda），轮盘（cakra）代表时间与正法，宝剑（asi）代表分辨力（viveka）。此二联颂共同为练习设定灵性方向，旨在根除无明（avidyā）。"  // 微调：将“此二联颂”的说明放在这里，与第一部分呼应
            },
            {
              title: "结束平安咒",
              devanagari: "स्वस्तिप्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः ।\nगोब्राह्मणेभ्यः शुभमस्तु नितtyं लोकाः समस्ताः सुखिनो भवन्तु ॥",
              sanskrit: "svasti prajābhyaḥ paripālayantāṃ nyāyena mārgeṇa mahīṃ mahīśāḥ ।\ngo brāhmaṇebhyaḥ śubhamastu nityaṃ lokāḥ samastāḥ sukhino bhavantu ॥",
              translation: "愿王正法护苍生，公正治国天下平；\n牛智恒昌得吉祥，众生安乐离苦情。",
              explanation: "结束咒以‘回向’（parīṇāma）的修持，将练习的功德普施一切众生。此咒圆满实践了‘不害’（ahiṃsā）的戒律，并标志着修行者意识从个体成就到普世福祉的扩展。"
            }
          ],
        foundation: [
          {
            title: "宇宙元音",
            devanagari: "ॐ",
            sanskrit: "oṃ / auṃ",
            translation: "蕴含一切存在的原初音节。",
            explanation: "宇宙本身的音声，OM 包含 A-U-M 及寂静。在修行中，是一切咒语的根基，代表意识的三种状态（醒、梦、眠）及第四状态。"
          },
          {
            title: "呼吸即真言",
            devanagari: "सो ऽहम्",
            sanskrit: "so'ham",
            translation: "我即真如，呼吸自成。",
            explanation: "吸气（so）与呼气（ham）的自然音声。在练习中，此咒不被唱诵，而是通过喉呼吸（ujjāyī）来体现，将调息转化为与至上合一、与呼吸同步的移动禅定。"
          }
        ],
        meditation: [
          {
            title: "湿婆五字咒",
            devanagari: "ॐ नमः शिवाय",
            sanskrit: "oṃ namaḥ śivāya",
            translation: "敬礼湿婆尊，五字真言诵。",
            explanation: "五音节咒（pañcākṣara）。'Śiva'象征永恒纯净、吉祥、超越限制的意识。此咒用于持诵（japa）以培养纯净（viśuddha）的品质并超越自我认同，契合‘制感’（Pratyāhāra）与‘执持’（Dhāraṇā）的修习目标。"
          },
          {
            title: "女神三音咒",
            devanagari: "ॐ ह्रीं श्रीं क्लीं",
            sanskrit: "oṃ hrīṃ śrīṃ klīṃ",
            translation: "三音和合诵，女神妙德彰。",
            explanation: "复合种子咒，呼唤神圣母亲的三种面向：HRĪṂ（创造力，大妙音天女），ŚRĪṂ（维持的丰盛，大吉祥天女），KLĪṂ（转化的火焰，大时母）。用于深度冥想来整合这些能量。"
          }
        ],
        philosophy: [
          {
            title: "引我出虚幻",
            devanagari: "असतो मा सद्गमय ।\nतमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ॥",
            sanskrit: "asato mā sadgamaya ।\ntamaso mā jyotirgamaya ।\nmṛtyormā amṛtaṃ gamaya ॥",
            translation: "引我出虚幻，入真实境；\n引我离黑暗，向光明径；\n引我超生死，达永生城。",
            explanation: "出自《广林奥义书》的大话（mahāvākya）。它概括了瑜伽的全部旅程：从无明（avidyā）到智慧（jñāna），从束缚到解脱（mokṣa）。代表了阿斯汤加练习的终极目标。"
          },
          {
            title: "真理即实在",
            devanagari: "ॐ तत् सत्",
            sanskrit: "oṃ tat sat",
            translation: "真理即实在，至高无上名。",
            explanation: "出自《薄伽梵歌》（17.23）的简洁哲学宣言。'Tat'指终极的非人格实相；'Sat'意为真理、存在、良善。二者共同肯定最高实相是纯粹的存在-意识-喜乐（sac-cid-ānanda）。"
          }
        ],
        lineage: [
          {
            title: "师即三相神",
            devanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः ।\nगुरुः साक्षात्परं ब्रह्म तस्मै श्रीगुरवे नमः ॥",
            sanskrit: "gurur-brahmā gurur-viṣṇur gurur-devo maheśvaraḥ ।\nguruḥ sākṣāt paraṃ brahma tasmai śrī-gurave namaḥ ॥",
            translation: "师是创造梵天身，师是护持毗湿奴；\n师即毁灭大自在，现前绝对梵体真。",
            explanation: "确立上师为整个宇宙法则的化身——创造（梵天）、维持（毗湿奴）、毁灭（湿婆）。在阿斯汤加中，此咒强调了传承作为知识鲜活管道的重要性。"
          },
          {
            title: "传承系谱颂",
            devanagari: "नारायणं पद्मभवं वशिष्ठं शक्तिं च तत्पुत्रपराशरं च ।\nव्यासं शुकं गौडपदं महान्तं गोविन्दयोगीन्द्रमथास्य शिष्यम् ॥",
            sanskrit: "nārāyaṇaṁ padmabhavaṁ vaśiṣṭhaṁ śaktiṁ ca tatputraparāśaraṁ ca ।\nvyāsaṁ śukaṁ gauḍapadaṁ mahāntaṁ govindayogīndramathāsya śiṣyam ॥",
            translation: "那罗衍化莲生尊，霞光一脉薪火延；\n广博通玄妙语真，乔荼圣道牧者深。",
            explanation: "追溯从毗湿奴（Nārāyaṇa）至商羯罗（Śaṅkarācārya）之师乔荼波陀（Gauḍapāda）的智慧传承系谱，展现吠檀多哲学法脉的清净源流与历代圣哲的接力传递。"
          }
        ]
      }
    }
  };

  // ============================================
  // 获取当前语言的内容
  // ============================================
  
  const content = mantrasData[language as keyof typeof mantrasData];
  const meta = content.meta;
  const sections = content.sections;
  const mantras = content.mantras;

  // ============================================
  // 标签页配置
  // ============================================
  
  const sectionTabs = {
    daily: sections.daily.tabTitle,
    foundation: sections.foundation.tabTitle,
    meditation: sections.meditation.tabTitle,
    philosophy: sections.philosophy.tabTitle,
    lineage: sections.lineage.tabTitle
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
                
                {/* 咒语列表 */}
                <div className="space-y-0">
                  {mantras[sectionKey as keyof typeof mantras].map((mantra, index) => (
                    <div key={index} className="py-3 md:py-3.5 border-b border-gray-100">
                      <div className="space-y-1.5">
                        {/* 第1行：咒语标题 */}
                        <div className="text-xs font-medium text-gray-800">
                          {mantra.title}
                        </div>
                        
                        {/* 第2行：天城体 */}
                        <div className="font-sans text-sm md:text-base leading-tight tracking-tight whitespace-pre-line">
                          {mantra.devanagari}
                        </div>
                        
                        {/* 第3行：梵文转写 */}
                        <div className="text-xs italic text-gray-600 font-mono leading-tight whitespace-pre-line">
                          {mantra.sanskrit}
                        </div>
                        
                        {/* 第4行：翻译 */}
                        <div className="text-xs text-gray-800 leading-tight pt-0.5 whitespace-pre-line">
                          {mantra.translation}
                        </div>
                        
                        {/* 第5行：释义 */}
                        <div className="text-[11px] md:text-xs text-gray-600 leading-relaxed pt-0.5">
                          {mantra.explanation}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}

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
