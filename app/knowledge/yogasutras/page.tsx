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
      },

      // 标签页配置
      sections: {
        introduction: {
          tabTitle: "Introduction",
          pageTitle: "Overview and Historical Context"
        },
        samadhi: {
          tabTitle: "Samadhi Pada",
          pageTitle: "CHAPTER FIRST: THE BOOK OF SPIRITUAL UNION",
        },
        sadhana: {
          tabTitle: "Sadhana Pada",
          pageTitle: "CHAPTER SECOND: THE BOOK OF PRACTICE",
        },
        vibhuti: {
          tabTitle: "Vibhuti Pada",
          pageTitle: "CHAPTER THIRD: THE BOOK OF POWERS",
        },
        kaivalya: {
          tabTitle: "Kaivalya Pada",
          pageTitle: "CHAPTER FOURTH: THE BOOK OF LIBERATION",
        }
      },

      // 经文内容 - 使用 \n 处理换行
      verses: {
        introduction: [
            {
              verse: "",
              devanagari: "श्री पतञ्जलि ध्यानं श्लोकम्",
              sanskrit: "śrī Patañjali dhyānaṃ ślokam",
              translation: "The Contemplative Verses on Śrī Patañjali",
              meaning: ""
            },
            {
              verse: "📃",
              devanagari: "ॐ श्रीमत् पतञ्जलि महामुनये नमः ॥",
              sanskrit: "om śrīmat patañjali mahāmunaye namah ॥",
              translation: "Om. Salutations to the most venerable great sage, Patañjali.",
              meaning: "An initial invocation, using the primordial sound 'Om' to offer reverent homage to Patañjali, establishing a sacred connection."
            },
            {
              verse: "📃",
              devanagari: "यस्त्यक्त्वा रूपमाद्यं प्रभवति जगतोऽनेकधानुग्रहाय ।\nप्रक्षीणक्लेशराशिर्विषमविषधरोऽनेकवक्त्रः सुभोगी ।\nसर्वज्ञानप्रसूतिर्भुजगपरिकरः प्रीतये यस्य नित्यं ।\nदेवोऽहीशः स वोऽव्यात्सितविमलतनुर्योगदो योगयुक्तः ॥",
              sanskrit: "yastyaktvā rūpamādyaṃ prabhavati jagato'nekadhānugrahāya ।\nprakṣīṇakleśarāśirviṣamaviṣadharo'nekavaktraḥ subhogī ।\nsarvajñānaprasūtirbhujagaparikaraḥ prītaye yasya nityaṃ ।\ndevo'hīśaḥ sa vo'vyātsitavimalatanuryogado yogayuktaḥ ॥",
              translation: "He who, abandoning his primal form, manifests in manifold ways for the grace of the world; whose mass of afflictions is destroyed, who bears the uneven venom (of worldly existence), is multi-faced and of sublime enjoyments; from whom all knowledge proceeds, who is surrounded by serpent hosts and for whose pleasure they ever exist; that divine Lord of Serpents, of impeccably pure and white form, the giver of Yoga and the one united in Yoga—to Him I bow.",
              meaning: "This verse glorifies Patañjali's divine origin as an incarnation of Ādiśeṣa, the cosmic serpent. It describes him as having assumed a form to bless the world, free from all suffering, omnipotent, the source of all wisdom, and the perfect master who both bestows and embodies the state of Yoga."
            },
          {
            verse: "📃",
            devanagari: "योगेन चित्तस्य पदेन वाचां ।\nमलं शरीरस्य च वैद्यकेन ॥\nयोऽपाकरोत्तमं प्रवरं मुनीनां ।\nपतञ्जलिं प्राञ्जलिरानतोऽस्मि ॥",
            sanskrit: "yogena cittasya padena vācāṁ ।\nmalaṁ śarīrasya ca vaidyakena ॥\nyo'pākarottamaṁ pravaraṁ munīnāṁ ।\npatañjaliṁ prāñjalirānato'smi ॥",
            translation: "To Patañjali, the supreme and most excellent of sages, who removed the impurities of the mind through Yoga, of speech through Grammar, and of the body through Medicine—to him I bow with folded hands.",
            meaning: "This invocation honours Patañjali as the master of three sacred sciences (Śāstras): Yoga for mental purification, Grammar (Vyākaraṇa) for linguistic clarity, and Medicine (Āyurveda) for physical health. He is revered as the foremost among sages for bestowing these gifts."
          },
          {
            verse: "📃",
            devanagari: "आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् ।\nसहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥",
            sanskrit: "ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam ।\nsahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥",
            translation: "I bow to Patañjali, who has a human form down to the shoulders, who holds a conch, a discus, and a sword, who has a thousand white-hooded heads.",
            meaning: "A visual description for meditation. Patañjali is depicted with a divine, half-human, half-serpent form. The conch (śaṅkha) symbolises the sacred sound Om, the discus (cakra) cosmic law and time, and the sword (asi) the discriminating power of wisdom to cut through ignorance."
          },
          {
            verse: "📃",
            devanagari: "श्रीमते अनन्ताय नागराजाय नमो नमः ॥",
            sanskrit: "śrīmate anantāya nāgarājāya namo namaḥ ॥",
            translation: "Salutations again and again to the glorious Ananta, the King of Serpents.",
            meaning: "The final salutation returns to the worship of Patañjali's ultimate source—Ananta (the Infinite), the cosmic serpent upon whom Viṣṇu rests. It concludes the hymn by acknowledging the eternal, limitless ground of all manifestation."
          }
        ],
        samadhi: [
            {
              verse: "1.1 • The Opening",
              devanagari: "अथ योगानुशासनम् ॥",
              sanskrit: "atha yogānuśāsanam ॥",
              translation: "Here beginneth the instruction in Yoga.",
              meaning: "The sacred word 'atha' signifies auspicious beginnings, indicating this teaching comes from an authentic lineage with the student's readiness."
            },
            {
              verse: "1.2 • Yoga Defined",
              devanagari: "योगश्चित्तवृत्तिनिरोधः ॥",
              sanskrit: "yogaś citta vṛtti nirodhaḥ ॥",
              translation: "Yoga is the restraint of the modifications of the mind.",
              meaning: "The fundamental definition of Yoga - mastering the fluctuations of consciousness to realize one's true nature."
            },
            {
              verse: "1.3 • The Seer Established",
              devanagari: "तदा द्रष्टुः स्वरूपेऽवस्थानम् ॥",
              sanskrit: "tadā draṣṭuḥ svarūpe'vasthānam ॥",
              translation: "Then the Seer abideth in His own nature.",
              meaning: "When mental modifications cease, pure consciousness shines forth in its essential nature, free from identification with phenomena."
            },
            {
              verse: "1.4 • Otherwise Identified",
              devanagari: "वृत्तिसारूप्यमितरत्र ॥",
              sanskrit: "vṛtti sārūpyam itaratra ॥",
              translation: "At other times, assimilation with the modifications.",
              meaning: "In the ordinary state, identification with mental fluctuations occurs."
            },
            {
              verse: "1.5 • Fivefold Modifications",
              devanagari: "वृत्तयः पञ्चतय्यः क्लिष्टाऽक्लिष्टाः ॥",
              sanskrit: "vṛttayaḥ pañcatayyaḥ kliṣṭā'kliṣṭāḥ ॥",
              translation: "The modifications are fivefold, painful and non-painful.",
              meaning: "Mental modifications are of five types, both painful and non-painful."
            },
            {
              verse: "1.6 • The Five Named",
              devanagari: "प्रमाणविपर्ययविकल्पनिद्रास्मृतयः ॥",
              sanskrit: "pramāṇa viparyaya vikalpa nidrā smṛtayaḥ ॥",
              translation: "Right Practice Guide, error, imagination, sleep, and memory.",
              meaning: "Valid cognition, misconception, conceptualization, sleep, and memory."
            },
            {
              verse: "1.7 • Sources of Right Practice Guide",
              devanagari: "प्रत्यक्षानुमानागमाः प्रमाणानि ॥",
              sanskrit: "pratyakṣānumānāgamāḥ pramāṇāni ॥",
              translation: "Direct perception, inference, and testimony are the sources of right Practice Guide.",
              meaning: "Three valid means of acquiring correct Practice Guide."
            },
            {
              verse: "1.8 • Error Defined",
              devanagari: "विपर्ययो मिथ्याज्ञानमतद्रूपप्रतिष्ठम् ॥",
              sanskrit: "viparyayo mithyājñānam atadrūpa pratiṣṭham ॥",
              translation: "Error is false Practice Guide, not founded on the thing's true nature.",
              meaning: "Misconception arises from incorrect understanding of reality."
            },
            {
              verse: "1.9 • Imagination's Nature",
              devanagari: "शब्दज्ञानानुपाती वस्तुशून्यो विकल्पः ॥",
              sanskrit: "śabdajñānānupātī vastu śūnyo vikalpaḥ ॥",
              translation: "Imagination, following verbal Practice Guide, is devoid of substance.",
              meaning: "Conceptual thought based on words without actual substance."
            },
            {
              verse: "1.10 • Sleep's Support",
              devanagari: "अभावप्रत्ययालम्बना वृत्तिर्निद्रा ॥",
              sanskrit: "abhāva pratyayālambanā vṛttir nidrā ॥",
              translation: "Sleep is a modification supported by the idea of absence.",
              meaning: "The sleep state is characterized by non-cognition."
            }
        ],
        sadhana: [
            {
              verse: "2.1 • The Yoga of Action",
              devanagari: "तपः स्वाध्यायेश्वरप्रणिधानानि क्रियायोगः ॥",
              sanskrit: "tapaḥ svādhyāyēśvarapraṇidhānāni kriyā yōgaḥ ॥",
              translation: "Austerity, self-study, and surrender to the Lord constitute the yoga of action.",
              meaning: "Kriya Yoga - the yoga of practical action for purification."
            },
            {
              verse: "2.2 • The Dual Purpose",
              devanagari: "समाधिभावनार्थः क्लेशतनूकरणार्थश्च ॥",
              sanskrit: "samādhi bhāvanārthaḥ klēśa tanūkaraṇārthaś ca ॥",
              translation: "They are for cultivating meditation and for attenuating the afflictions.",
              meaning: "Dual purpose: developing samadhi and reducing obstacles."
            },
            {
              verse: "2.3 • The Five Afflictions",
              devanagari: "अविद्यास्मितारागद्वेषाभिनिवेशाः क्लेशाः ॥",
              sanskrit: "avidyāsmitā rāga dvēṣābhinivēśāḥ klēśāḥ ॥",
              translation: "The afflictions are ignorance, egoism, attachment, aversion, and clinging to life.",
              meaning: "Five fundamental causes of suffering."
            },
            {
              verse: "2.4 • Ignorance as Field",
              devanagari: "अविद्या क्षेत्रमुत्तरेषां प्रसुप्ततनुविच्छिन्नोदाराणाम् ॥",
              sanskrit: "avidyā kṣētram uttarēṣāṃ prasupta tanu vicchinnōdārāṇām ॥",
              translation: "Ignorance is the field for the others, whether they be dormant, attenuated, interrupted, or active.",
              meaning: "Ignorance as the root cause and breeding ground."
            },
            {
              verse: "2.5 • Ignorance Defined",
              devanagari: "अनित्याशुचिदुःखानात्मसु नित्यशुचिसुखात्मख्यातिरविद्या ॥",
              sanskrit: "anityāśuci duḥkhānātmasu nitya śuci sukhātmakhyātir avidyā ॥",
              translation: "Ignorance is seeing the eternal in the ephemeral, the pure in the impure, bliss in suffering, and the self in the non-self.",
              meaning: "Four types of mistaken perception that constitute ignorance."
            },
            {
              verse: "2.6 • Egoism Explained",
              devanagari: "दृग्दर्शनशक्त्योरेकात्मतेवास्मिता ॥",
              sanskrit: "dṛg darśana śaktyōr ēkātmatēvāsmitā ॥",
              translation: "Egoism is the identification of the seer with the instrument of seeing.",
              meaning: "Mistaking the Self for the mind-body complex."
            },
            {
              verse: "2.7 • Attachment's Nature",
              devanagari: "सुखानुशयी रागः ॥",
              sanskrit: "sukhānuśayī rāgaḥ ॥",
              translation: "Attachment is that which dwells on pleasure.",
              meaning: "Craving for pleasurable experiences."
            },
            {
              verse: "2.8 • Aversion's Nature",
              devanagari: "दुःखानुशयी द्वेषः ॥",
              sanskrit: "duḥkhānuśayī dvēṣaḥ ॥",
              translation: "Aversion is that which dwells on pain.",
              meaning: "Rejection of painful experiences."
            },
            {
              verse: "2.9 • Clinging to Life",
              devanagari: "स्वरसवाही विदुषोऽपि तथारूढोऽभिनिवेशः ॥",
              sanskrit: "svarasavāhī viduṣō'pi tathā rūḍhō'bhinivēśaḥ ॥",
              translation: "Flowing by its own energy, established even in the wise, is the clinging to life.",
              meaning: "Instinctive fear of death and desire for survival."
            },
            {
              verse: "2.10 • The Subtle Afflictions",
              devanagari: "ते प्रतिप्रसवहेयाः सूक्ष्माः ॥",
              sanskrit: "tē pratiprasavahēyāḥ sūkṣmāḥ ॥",
              translation: "The subtle afflictions are to be abandoned by resolution into their origin.",
              meaning: "Overcoming afflictions by tracing them to their source."
            }
        ],
        vibhuti: [
            {
              verse: "3.1 • Concentration Defined",
              devanagari: "देशबन्धश्चित्तस्य धारणा ॥",
              sanskrit: "dēśabandhaścittasya dhāraṇā ॥",
              translation: "Concentration is the binding of the mind to one place.",
              meaning: "Definition of Dharana - fixing attention on one point."
            },
            {
              verse: "3.2 • Meditation Defined",
              devanagari: "तत्र प्रत्ययैकतानता ध्यानम् ॥",
              sanskrit: "tatra pratyayaikatānatā dhyānam ॥",
              translation: "Meditation is the uninterrupted flow of cognition toward that object.",
              meaning: "Definition of Dhyana - continuous flow of awareness."
            },
            {
              verse: "3.3 • Samādhi Defined",
              devanagari: "तदेवार्थमात्रनिर्भासं स्वरूपशून्यमिव समाधिः ॥",
              sanskrit: "tadēvārthamātranirbhāsaṃ svarūpaśūnyamiva samādhiḥ ॥",
              translation: "When the object alone shines forth, as if devoid of its own form, that is samādhi.",
              meaning: "Definition of Samadhi - absorption in the object."
            },
            {
              verse: "3.4 • The Three Together",
              devanagari: "त्रयमेकत्र संयमः ॥",
              sanskrit: "trayamēkatra saṃyamaḥ ॥",
              translation: "These three together constitute constraint.",
              meaning: "Dharana, Dhyana, and Samadhi together are Samyama."
            },
            {
              verse: "3.5 • Mastery Through Constraint",
              devanagari: "तज्जयात् प्रज्ञालोकः ॥",
              sanskrit: "tajjayāt prajñālōkaḥ ॥",
              translation: "From mastery of that comes the light of wisdom.",
              meaning: "Mastery of Samyama brings intuitive Practice Guide."
            },
            {
              verse: "3.6 • Application by Stages",
              devanagari: "तस्य भूमिषु विनियोगः ॥",
              sanskrit: "tasya bhūmiṣu viniyōgaḥ ॥",
              translation: "Its application is by stages.",
              meaning: "Samyama is applied progressively to different levels."
            },
            {
              verse: "3.7 • The Three Internal",
              devanagari: "त्रयमन्तरङ्गं पूर्वेभ्यः ॥",
              sanskrit: "trayamantaraṅgaṃ pūrvēbhyaḥ ॥",
              translation: "These three are more internal than the preceding.",
              meaning: "Dharana, Dhyana, Samadhi are more internal than previous limbs."
            },
            {
              verse: "3.8 • External to Seedless",
              devanagari: "तदपि बहिरङ्गं निर्बीजस्य ॥",
              sanskrit: "tadapi bahiraṅgaṃ nirbījasya ॥",
              translation: "But even these are external to the seedless samādhi.",
              meaning: "Even these are external compared to seedless Samadhi."
            },
            {
              verse: "3.9 • Transformation of Restraint",
              devanagari: "व्युत्थाननिरोधसंस्कारयोरभिभवप्रादुर्भावौ निरोधक्षणचित्तान्वयो निरोधपरिणामः ॥",
              sanskrit: "vyutthānanirōdhasaṃskārayōrabhibhavaprādurbhāvau nirōdhakṣaṇacittānvayō nirōdhapariṇāmaḥ ॥",
              translation: "The transformation of restraint is the connection of the mind with the moment of restraint when impressions of emergence and restraint arise and subside.",
              meaning: "Definition of Nirodha Parinama - transformation of restraint."
            },
            {
              verse: "3.10 • Peaceful Flow",
              devanagari: "तस्य प्रशान्तवाहिता संस्कारात् ॥",
              sanskrit: "tasya praśāntavāhitā saṃskārāt ॥",
              translation: "Its peaceful flow comes from impressions.",
              meaning: "Steady flow of restraint comes from latent impressions."
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
            },
            {
              verse: "4.3 • Incidental Cause",
              devanagari: "निमित्तमप्रयोजकं प्रकृतीनां वरणभेदस्तु ततः क्षेत्रिकवत् ॥",
              sanskrit: "nimittamaprayojakaṃ prakṛtīnāṃ varaṇabhedastu tataḥ kṣetrikavat ॥",
              translation: "The incidental cause does not initiate the transformations of nature, but removes obstacles as a farmer removes obstructions to water.",
              meaning: "External causes are only removing obstacles, not creating change."
            },
            {
              verse: "4.4 • Created Minds",
              devanagari: "निर्माणचित्तान्यस्मितामात्रात् ॥",
              sanskrit: "nirmāṇacittānyasmitāmātrāt ॥",
              translation: "Created minds arise from the sense of I-am-ness alone.",
              meaning: "Individual minds arise from ego-sense."
            },
            {
              verse: "4.5 • One Mind Directing Many",
              devanagari: "प्रवृत्तिभेदे प्रयोजकं चित्तमेकमनेकेषाम् ॥",
              sanskrit: "pravṛttibhede prayojakaṃ cittamekamanekeṣām ॥",
              translation: "Though the activities differ, the one mind is the director of many minds.",
              meaning: "One cosmic mind directs many individual minds."
            },
            {
              verse: "4.6 • Meditation-born Minds",
              devanagari: "तत्र ध्यानजमनाशयम् ॥",
              sanskrit: "tatra dhyānajamanāśayam ॥",
              translation: "Among these, the meditation-born mind is without impressions.",
              meaning: "Mind born of meditation is free from karmic impressions."
            },
            {
              verse: "4.7 • Karma of Yogis",
              devanagari: "कर्माशुक्लाकृष्णं योगिनः त्रिविधमितरेषाम् ॥",
              sanskrit: "karmāśuklākṛṣṇaṃ yoginaḥ trividhamitareṣām ॥",
              translation: "The karma of yogis is neither black nor white; for others, it is of three kinds.",
              meaning: "Yogis' actions are non-binding; others' actions bind."
            },
            {
              verse: "4.8 • Manifestation of Latent Impressions",
              devanagari: "ततस्तद्विपाकानुगुणानामेवाभिव्यक्तिर्वासनानाम् ॥",
              sanskrit: "tatastadvipākānuguṇānāmēvābhivyaktirvāsanānām ॥",
              translation: "From these, only those latent impressions manifest which are in conformity with the fruition of karma.",
              meaning: "Only impressions aligned with karma ripen."
            },
            {
              verse: "4.9 • Continuity of Memory and Impressions",
              devanagari: "जाति देश काल व्यवहितानामप्यानन्तर्यं स्मृतिसंस्कारयोः एकरूपत्वात् ॥",
              sanskrit: "jāti dēśa kāla vyavhānām apyānantaryaṃ smṛti saṃskārayōḥ ēkarūpatvāt ॥",
              translation: "There is a continuity of memory and impressions even when separated by birth, place, and time, due to their similarity.",
              meaning: "Continuity of samskaras across lifetimes."
            },
            {
              verse: "4.10 • Beginninglessness of Desire to Live",
              devanagari: "तासामनादित्वं चाशिषो नित्यत्वात् ॥",
              sanskrit: "tāsāmanāditvaṃ cāśiṣo nityatvāt ॥",
              translation: "They are beginningless because the desire to live is eternal.",
              meaning: "Samskaras are beginningless due to eternal desire for existence."
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
      },

      // 标签页配置
      sections: {
        introduction: {
          tabTitle: "简介",
          pageTitle: "概述与历史背景"
        },
        samadhi: {
          tabTitle: "三昧品",
          pageTitle: "【章】三昧品第一",
        },
        sadhana: {
          tabTitle: "修行品",
          pageTitle: "【章】修行品第二",
        },
        vibhuti: {
          tabTitle: "神通品",
          pageTitle: "【章】神通品第三",
        },
        kaivalya: {
          tabTitle: "独存品",
          pageTitle: "【章】独存品第四",
        }
      },

      // 经文内容 - 使用 \n 处理换行
      verses: {
        introduction: [
            {
              verse: "",
              devanagari: "श्री पतञ्जलि ध्यानं श्लोकम्",
              sanskrit: "śrī Patañjali dhyānaṃ ślokam",
              translation: "帕坦伽利禅定颂",
              meaning: ""
            },
            {
              verse: "📃",
              devanagari: "ॐ श्रीमत् पतञ्जलि महामुनये नमः ॥",
              sanskrit: "om śrīmat patañjali mahāmunaye namah ॥",
              translation: "嗡声礼敬尊贵帕坦伽利圣哲前",
              meaning: "以宇宙元音“ॐ”及敬语祈请，确立礼拜的虔敬与神圣联结。"
            },
            {
              verse: "📃",
              devanagari: "यस्त्यक्त्वा रूपमाद्यं प्रभवति जगतोऽनेकधानुग्रहाय ।\nप्रक्षीणक्लेशराशिर्विषमविषधरोऽनेकवक्त्रः सुभोगी ।\nसर्वज्ञानप्रसूतिर्भुजगपरिकरः प्रीतये यस्य नित्यं ।\nदेवोऽहीशः स वोऽव्यात्सितविमलतनुर्योगदो योगयुक्तः ॥",
              sanskrit: "yastyaktvā rūpamādyaṃ prabhavati jagato'nekadhānugrahāya ।\nprakṣīṇakleśarāśirviṣamaviṣadharo'nekavaktraḥ subhogī ।\nsarvajñānaprasūtirbhujagaparikaraḥ prītaye yasya nityaṃ ।\ndevo'hīśaḥ sa vo'vyātsitavimalatanuryogado yogayuktaḥ ॥",
              translation: "舍初形为化现世间，慈悲济众方便多门；\n众苦永尽毒龙尊者，千首庄严妙乐深臻。\n全知智慧本源流注，蛇众围绕恒常欢欣；\n天神龙主洁白无垢，赐予瑜伽圆成自身。",
              meaning: "此颂揭示帕坦伽利非凡本源：为利益众生，舍离原初形相，化现为支撑宇宙的千首蛇王（阿南塔），已断尽烦恼，是全知与瑜伽的源头与化身"
            },
          {
            verse: "📃",
            devanagari: "योगेन चित्तस्य पदेन वाचां ।\nमलं शरीरस्य च वैद्यकेन ॥\nयोऽपाकरोत्तमं प्रवरं मुनीनां ।\nपतञ्जलिं प्राञ्जलिरानतोऽस्मि ॥",
            sanskrit: "yogena cittasya padena vācāṁ ।\nmalaṁ śarīrasya ca vaidyakena ॥\nyo'pākarottamaṁ pravaraṁ munīnāṁ ।\npatañjaliṁ prāñjalirānato'smi ॥",
            translation: "瑜伽涤心，文法正言，\n医方洁身，三学乃全。\n至圣至尊，帕坦伽利，\n我今稽首，恭行大礼。",
            meaning: "此颂赞颂帕坦伽利为三明圣学之主：瑜伽净化心灵，文法纯净语言，阿育吠陀健康身体。圣贤之中最为尊胜，故以至诚顶礼。"
          },
          {
            verse: "📃",
            devanagari: "आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् ।\nसहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥",
            sanskrit: "ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam ।\nsahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥",
            translation: "上身人形，持法器明，\n螺轮剑戟，威德自生。\n首戴千蛇，皎若水晶，\n敬礼圣哲，帕坦伽利。",
            meaning: "虔敬顶礼，表达对圣哲帕坦伽利及其圆满智慧的深切敬意。海螺（Śaṅkha）象征唤醒无明的神圣之音“ॐ”；轮盘（Cakra）象征宇宙正法与时间循环；宝剑（Asi）象征斩断无明的智慧。"
          },
          {
            verse: "📃",
            devanagari: "श्रीमते अनन्ताय नागराजाय नमो नमः ॥",
            sanskrit: "śrīmate anantāya nāgarājāya namo namaḥ ॥",
            translation: "礼敬荣耀无限者，蛇族之王赐吉祥！",
            meaning: "礼敬帕坦伽利的神圣本源——荣耀的“无限者”（阿南塔），亦即支撑宇宙的蛇王。将一切礼敬最终归于这永恒、无限的终极实相。"
          }
        ],
        samadhi: [
            {
              verse: "1.1 • 瑜伽启明",
              devanagari: "अथ योगानुशासनम् ॥",
              sanskrit: "atha yōgānuśāsanam ॥",
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
            },
            {
              verse: "1.4 • 余时染着",
              devanagari: "वृत्तिसारूप्यमितरत्र ॥",
              sanskrit: "vṛtti sārūpyam itaratra ॥",
              translation: "余时，染着于诸行。",
              meaning: "平常状态下，我们认同心意波动。"
            },
            {
              verse: "1.5 • 波动有五",
              devanagari: "वृत्तयः पञ्चतय्यः क्लिष्टाऽक्लिष्टाः ॥",
              sanskrit: "vṛttayaḥ pañcatayyaḥ kliṣṭā'kliṣṭāḥ ॥",
              translation: "心波有五，可苦可非苦。",
              meaning: "心意波动分五种，有的痛苦有的不痛苦。"
            },
            {
              verse: "1.6 • 五波列举",
              devanagari: "प्रमाणविपर्ययविकल्पनिद्रास्मृतयः ॥",
              sanskrit: "pramāṇa viparyaya vikalpa nidrā smṛtayaḥ ॥",
              translation: "正知、谬误、分别、睡眠、记忆。",
              meaning: "五种心意波动的具体类型。"
            },
            {
              verse: "1.7 • 正知三源",
              devanagari: "प्रत्यक्षानुमानागमाः प्रमाणानि ॥",
              sanskrit: "pratyakṣānumānāgamāḥ pramāṇāni ॥",
              translation: "现量、比量、圣言，是为正知。",
              meaning: "三种获得正知的方法。"
            },
            {
              verse: "1.8 • 谬误妄执",
              devanagari: "विपर्ययो मिथ्याज्ञानमतद्रूपप्रतिष्ठम् ॥",
              sanskrit: "viparyayo mithyājñānam atadrūpa pratiṣṭham ॥",
              translation: "谬误者，虚妄分别，不契实相。",
              meaning: "错误的认知源于不契合事物真相。"
            },
            {
              verse: "1.9 • 名相分别",
              devanagari: "शब्दज्ञानानुपाती वस्तुशून्यो विकल्पः ॥",
              sanskrit: "śabdajñānānupātī vastu śūnyo vikalpaḥ ॥",
              translation: "分别随名相转，离于实义。",
              meaning: "概念性思维往往脱离实际。"
            },
            {
              verse: "1.10 • 睡眠心行",
              devanagari: "अभावप्रत्ययालम्बना वृत्तिर्निद्रा ॥",
              sanskrit: "abhāva pratyayālambanā vṛttir nidrā ॥",
              translation: "睡眠心行，缘于无有。",
              meaning: "睡眠状态基于无知的支撑。"
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
            },
            {
              verse: "2.3 • 五恼根本",
              devanagari: "अविद्यास्मितारागद्वेषाभिनिवेशाः क्लेशाः ॥",
              sanskrit: "avidyāsmitā rāga dvēṣābhinivēśāḥ klēśāḥ ॥",
              translation: "无明、我执、贪着、嗔恨、耽恋，是谓诸恼。",
              meaning: "五种根本痛苦之因。"
            },
            {
              verse: "2.4 • 无明为根",
              devanagari: "अविद्या क्षेत्रमुत्तरेषां प्रसुप्ततनुविच्छिन्नोदाराणाम् ॥",
              sanskrit: "avidyā kṣētram uttarēṣāṃ prasupta tanu vicchinnōdārāṇām ॥",
              translation: "无明者，余恼生地，或伏或微或断或显。",
              meaning: "无明作为根本原因和滋生地。"
            },
            {
              verse: "2.5 • 真妄倒置",
              devanagari: "अनित्याशुचिदुःखानात्मसु नित्यशुचिसुखात्मख्यातिरविद्या ॥",
              sanskrit: "anityāśuci duḥkhānātmasu nitya śuci sukhātmakhyātir avidyā ॥",
              translation: "谓无常为常，不净为净，苦为乐，无我为我，是曰无明。",
              meaning: "构成无明的四种错误认知。"
            },
            {
              verse: "2.6 • 我执生起",
              devanagari: "दृग्दर्शनशक्त्योरेकात्मतेवास्मिता ॥",
              sanskrit: "dṛg darśana śaktyōr ēkātmatēvāsmitā ॥",
              translation: "能见（真我）与所见（心识）之力，混然为一，我执生焉。",
              meaning: "将真我误认为身心复合体。"
            },
            {
              verse: "2.7 • 贪着流转",
              devanagari: "सुखानुशयी रागः ॥",
              sanskrit: "sukhānuśayī rāgaḥ ॥",
              translation: "贪着者，系念于乐，随境流转。",
              meaning: "对愉悦体验的渴望。"
            },
            {
              verse: "2.8 • 嗔恚系缚",
              devanagari: "दुःखानुशयी द्वेषः ॥",
              sanskrit: "duḥkhānuśayī dvēṣaḥ ॥",
              translation: "嗔恚者，系念于苦，不得解脱。",
              meaning: "对痛苦体验的排斥。"
            },
            {
              verse: "2.9 • 求生本能",
              devanagari: "स्वरसवाही विदुषोऽपि तथारूढोऽभिनिवेशः ॥",
              sanskrit: "svarasavāhī viduṣō'pi tathā rūḍhō'bhinivēśaḥ ॥",
              translation: "贪生之流，自然而发，智者亦难自免。",
              meaning: "对死亡的恐惧和生存欲望。"
            },
            {
              verse: "2.10 • 细惑归真",
              devanagari: "ते प्रतिप्रसवहेयाः सूक्ष्माः ॥",
              sanskrit: "tē pratiprasavahēyāḥ sūkṣmāḥ ॥",
              translation: "此诸细微烦恼，当逆溯其源，方可断除。",
              meaning: "通过追溯源头来克服烦恼。"
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
            },
            {
              verse: "3.3 • 能所双泯",
              devanagari: "तदेवार्थमात्रनिर्भासं स्वरूपशून्यमिव समाधिः ॥",
              sanskrit: "tadēvārthamātranirbhāsaṃ svarūpaśūnyamiva samādhiḥ ॥",
              translation: "唯境独耀，自性空寂，是谓三昧。",
              meaning: "三昧的定义 - 融入对象之中。"
            },
            {
              verse: "3.4 • 三支为一",
              devanagari: "त्रयमेकत्र संयमः ॥",
              sanskrit: "trayamēkatra saṃyamaḥ ॥",
              translation: "三支和合，是谓总持。",
              meaning: "执持、禅定、三昧合为总持。"
            },
            {
              verse: "3.5 • 慧光显发",
              devanagari: "तज्जयात् प्रज्ञालोकः ॥",
              sanskrit: "tajjayāt prajñālōkaḥ ॥",
              translation: "总持成就，慧光显发。",
              meaning: "掌握总持带来直觉智慧。"
            },
            {
              verse: "3.6 • 次第应用",
              devanagari: "तस्य भूमिषु विनियोगः ॥",
              sanskrit: "tasya bhūmiṣu viniyōgaḥ ॥",
              translation: "其用有次第。",
              meaning: "总持依次应用于不同层次。"
            },
            {
              verse: "3.7 • 内修三支",
              devanagari: "त्रयमन्तरङ्गं पूर्वेभ्यः ॥",
              sanskrit: "trayamantaraṅgaṃ pūrvēbhyaḥ ॥",
              translation: "三支较前更为内在。",
              meaning: "执持、禅定、三昧比前几支更内在。"
            },
            {
              verse: "3.8 • 外修有对",
              devanagari: "तदपि बहिरङ्गं निर्बीजस्य ॥",
              sanskrit: "tadapi bahiraṅgaṃ nirbījasya ॥",
              translation: "然较无种三昧，犹为外在。",
              meaning: "即使这些相比无种三昧仍是外在的。"
            },
            {
              verse: "3.9 • 伏现心转",
              devanagari: "व्युत्थाननिरोधसंस्कारयोरभिभवप्रादुर्भावौ निरोधक्षणचित्तान्वयो निरोधपरिणामः ॥",
              sanskrit: "vyutthānanirōdhasaṃskārayōrabhibhavaprādurbhāvau nirōdhakṣaṇacittānvayō nirōdhapariṇāmaḥ ॥",
              translation: "散乱与寂止印象伏现时，心与寂止相应，是谓心转。",
              meaning: "寂止转化的定义。"
            },
            {
              verse: "3.10 • 心流平静",
              devanagari: "तस्य प्रशान्तवाहिता संस्कारात् ॥",
              sanskrit: "tasya praśāntavāhitā saṃskārāt ॥",
              translation: "其心流平静，源于印象。",
              meaning: "寂止的稳定流来自潜在印象。"
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
            },
            {
              verse: "4.3 • 缘起非因",
              devanagari: "निमित्तमप्रयोजकं प्रकृतीनां वरणभेदस्तु ततः क्षेत्रिकवत् ॥",
              sanskrit: "nimittamaprayojakaṃ prakṛtīnāṃ varaṇabhedastu tataḥ kṣetrikavat ॥",
              translation: "外缘非动力因，但破障碍，如农夫理渠。",
              meaning: "外缘只是移除障碍，不创造变化。"
            },
            {
              verse: "4.4 • 心源别起",
              devanagari: "निर्माणचित्तान्यस्मितामात्रात् ॥",
              sanskrit: "nirmāṇacittānyasmitāmātrāt ॥",
              translation: "造作心识，唯从我执生。",
              meaning: "个体心意从自我感生起。"
            },
            {
              verse: "4.5 • 心殊用一",
              devanagari: "प्रवृत्तिभेदे प्रयोजकं चित्तमेकमनेकेषाम् ॥",
              sanskrit: "pravṛttibhede prayojakaṃ cittamekamanekeṣām ॥",
              translation: "虽业用有别，唯一心识，驱动众生。",
              meaning: "一个宇宙心意指导多个个体心意。"
            },
            {
              verse: "4.6 • 离寝无梦",
              devanagari: "तत्र ध्यानजमनाशयम् ॥",
              sanskrit: "tatra dhyānajamanāśayam ॥",
              translation: "其中，由禅定所生者，无有潜印象。",
              meaning: "禅定所生的心意没有业力印象。"
            },
            {
              verse: "4.7 • 行者无业",
              devanagari: "कर्माशुक्लाकृष्णं योगिनः त्रिविधमितरेषाम् ॥",
              sanskrit: "karmāśuklākṛṣṇaṃ yoginaḥ trividhamitareṣām ॥",
              translation: "瑜伽行者之业，非黑非白；他人之业，则有三种。",
              meaning: "瑜伽士的行为不束缚，他人的行为束缚。"
            },
            {
              verse: "4.8 • 业种现行",
              devanagari: "ततस्तद्विपाकानुगुणानामेवाभिव्यक्तिर्वासनानाम् ॥",
              sanskrit: "tatastadvipākānuguṇānāmēvābhivyaktirvāsanānām ॥",
              translation: "由是，与彼果报相应之潜印象，乃得显现。",
              meaning: "只有与业果相应的印象才会成熟。"
            },
            {
              verse: "4.9 • 忆念相续",
              devanagari: "जाति देश काल व्यवहितानामप्यानन्तर्यं स्मृतिसंस्कारयोः एकरूपत्वात् ॥",
              sanskrit: "jāti dēśa kāla vyavahitānāmapyānantaryaṃ smṛtisaṃskārayōḥ ēkarūpatvāt ॥",
              translation: "纵隔种姓、地域、时空，记忆与印象相续不断，以其本质同一故。",
              meaning: "印象跨越多世持续存在。"
            },
            {
              verse: "4.10 • 无始相续",
              devanagari: "तासामनादित्वं चाशिषो नित्यत्वात् ॥",
              sanskrit: "tāsāmanāditvaṃ cāśiṣo nityatvāt ॥",
              translation: "彼等无始，以生存之欲恒在故。",
              meaning: "印象无始，因为生存欲望永恒。"
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
        </div>
      </div>

      <Footer />
    </>
  );
}
