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
            },
            {
              verse: "1.11 • Memory's Nature",
              devanagari: "अनुभूतविषयासम्प्रमोषः स्मृतिः ॥",
              sanskrit: "anubhūta viṣayāsampramoṣaḥ smṛtiḥ ॥",
              translation: "Memory is the not letting slip away of experienced objects.",
              meaning: "Retention of past experiences in consciousness."
            },
            {
              verse: "1.12 • The Twofold Path",
              devanagari: "अभ्यासवैराग्याभ्यां तन्निरोधः ॥",
              sanskrit: "abhyāsa vairāgyābhyāṃ tannirodhaḥ ॥",
              translation: "Their restraint is by practice and non-attachment.",
              meaning: "Two methods to control mental modifications."
            },
            {
              verse: "1.13 • Practice Explained",
              devanagari: "तत्र स्थितौ यत्नोऽभ्यासः ॥",
              sanskrit: "tatra sthitau yatno'bhyāsaḥ ॥",
              translation: "Practice is the effort to be firm in that state.",
              meaning: "Continuous effort to maintain steadiness in meditation."
            },
            {
              verse: "1.14 • Long Practice",
              devanagari: "स तु दीर्घकालनैरन्तर्यसत्कारासेवितो दृढभूमिः ॥",
              sanskrit: "sa tu dīrgha kāla nairantarya satkārāsevito dṛḍhabhūmiḥ ॥",
              translation: "And that becomes firmly grounded when attended to for a long time, without interruption, with devotion.",
              meaning: "Three qualities for establishing firm practice: duration, continuity, and reverence."
            },
            {
              verse: "1.15 • Non-Attachment",
              devanagari: "दृष्टानुश्रविकविषयवितृष्णस्य वशीकारसञ्ज्ञा वैराग्यम् ॥",
              sanskrit: "dṛṣṭānuśravika viṣaya vitṛṣṇasya vaśīkārasañjñā vairāgyam ॥",
              translation: "Non-attachment is the consciousness of self-mastery in him who is free from craving for seen or heard objects.",
              meaning: "Freedom from desire for worldly experiences and spiritual pleasures."
            },
            {
              verse: "1.16 • Highest Non-Attachment",
              devanagari: "तत्परं पुरुषख्यातेर्गुणवैतृष्ण्यम् ॥",
              sanskrit: "tatparaṃ puruṣa khyāter guṇavaitṛṣṇyam ॥",
              translation: "That is the highest wherein from knowledge of the Spirit there cometh cessation of all desire for the qualities.",
              meaning: "Supreme detachment arising from Self-knowledge and transcendence of the three gunas."
            },
            {
              verse: "1.17 • Union with Reasoning",
              devanagari: "वितर्क विचारानन्दास्मितारूपानुगमात् संप्रज्ञातः ॥",
              sanskrit: "vitarka vicārānandāsmitārūpānugamāt saṃprajñātaḥ ॥",
              translation: "The cognitive union is accompanied by reasoning, reflection, bliss, and I-am-ness.",
              meaning: "Four stages of samprajñata samadhi: with reasoning, reflection, bliss, and pure I-sense."
            },
            {
              verse: "1.18 • Union Beyond Cognition",
              devanagari: "विरामप्रत्ययाभ्यासपूर्वः संस्कारशेषोऽन्यः ॥",
              sanskrit: "virāma pratyayābhyāsa pūrvaḥ saṃskāraśeṣo'nyaḥ ॥",
              translation: "The other union hath practice of cessation as its prerequisite; only latent impressions remain.",
              meaning: "Asamprajñata samadhi where only subtle impressions remain, transcending all cognitive states."
            },
            {
              verse: "1.19 • The Disembodied and Merged",
              devanagari: "भवप्रत्ययो विदेहप्रकृतिलयानाम् ॥",
              sanskrit: "bhavapratyayo videha prakṛtilayānām ॥",
              translation: "The disembodied and the merged in nature have existence as their support.",
              meaning: "States of consciousness for those beyond physical identification, either discarnate or absorbed in nature."
            },
            {
              verse: "1.20 • The Path of Others",
              devanagari: "श्रद्धावीर्यस्मृतिसमाधिप्रज्ञापूर्वक इतरेषाम् ॥",
              sanskrit: "śraddhā vīrya smṛti samādhiprajñā pūrvaka itareṣām ॥",
              translation: "For others, it is preceded by faith, energy, mindfulness, union, and discernment.",
              meaning: "Five qualities leading to samadhi for ordinary practitioners: faith, vigor, memory, meditation, and wisdom."
            },
            {
              verse: "1.21 • For the Zealous",
              devanagari: "तीव्रसंवेगानामासन्नः ॥",
              sanskrit: "tīvrasaṃvegānāmāsannaḥ ॥",
              translation: "For those of intense ardour, the goal is near.",
              meaning: "Intensity of practice accelerates spiritual progress."
            },
            {
              verse: "1.22 • Degrees of Zeal",
              devanagari: "मृदुमध्याधिमात्रत्वात्ततोऽपि विशेषः ॥",
              sanskrit: "mṛdu madhyādhimātratvāttato'pi viśeṣaḥ ॥",
              translation: "There is distinction according to mild, moderate, and intense practice.",
              meaning: "Different levels of practice yield different results and progress rates."
            },
            {
              verse: "1.23 • Through Surrender",
              devanagari: "ईश्वरप्रणिधानाद्वा ॥",
              sanskrit: "īśvarapraṇidhānādvā ॥",
              translation: "Or by surrender to the Lord.",
              meaning: "Another path through devotion and surrender to the Divine (Ishvara)."
            },
            {
              verse: "1.24 • The Lord's Nature",
              devanagari: "क्लेशकर्मविपाकाशयैरपरामृष्टः पुरुषविशेष ईश्वरः ॥",
              sanskrit: "kleśa karma vipākāśayairaparāmṛṣṭaḥ puruṣaviśeṣa īśvaraḥ ॥",
              translation: "The Lord is a distinct Spirit, untouched by afflictions, actions, fruits, or impressions.",
              meaning: "Definition of Ishvara (the Divine principle) - a special Purusha free from karmic bondage."
            },
            {
              verse: "1.25 • Infinite Knowledge",
              devanagari: "तत्र निरतिशयं सर्वज्ञबीजम् ॥",
              sanskrit: "tatra niratiśayaṃ sarvajñabījam ॥",
              translation: "In Him is the unsurpassed seed of omniscience.",
              meaning: "Ishvara contains infinite knowledge potential, being the source of all wisdom."
            },
            {
              verse: "1.26 • The First Teacher",
              devanagari: "स पूर्वेषामपि गुरुः कालेनानवच्छेदात् ॥",
              sanskrit: "sa pūrveṣām api guruḥ kālenānavacchedāt ॥",
              translation: "He is the teacher of even the ancients, being untouched by time.",
              meaning: "Ishvara as the eternal teacher beyond time limitations."
            },
            {
              verse: "1.27 • His Sacred Word",
              devanagari: "तस्य वाचकः प्रणवः ॥",
              sanskrit: "tasya vācakaḥ praṇavaḥ ॥",
              translation: "His word is the sacred syllable OM.",
              meaning: "OM as the manifesting sound and symbolic representation of the Divine."
            },
            {
              verse: "1.28 • Its Constant Repetition",
              devanagari: "तज्जपस्तदर्थभावनम् ॥",
              sanskrit: "tajjapas tadartha bhāvanam ॥",
              translation: "Its repetition and meditation on its meaning should be done.",
              meaning: "Practice of OM chanting (japa) and contemplation on its significance."
            },
            {
              verse: "1.29 • Inner Awareness",
              devanagari: "ततः प्रत्यक्चेतनाधिगमोऽप्यन्तरायाभावश्च ॥",
              sanskrit: "tataḥ pratyak cetanādhigamo'pyantarāyābhāvaśca ॥",
              translation: "Thence comes the realization of the inner consciousness and the disappearance of obstacles.",
              meaning: "Benefits of OM practice: self-realization and removal of obstacles."
            },
            {
              verse: "1.30 • The Nine Obstacles",
              devanagari: "व्याधि स्त्यान संशय प्रमादालस्याविरति भ्रान्ति दर्शनालब्धभूमिकत्वानवस्थितत्वानि चित्तविक्षेपास्तेंऽतरायाः ॥",
              sanskrit: "vyādhi styāna saṃśaya pramādālasyāvirati bhrānti darśanālabdhabhūmikatvānavasthitatvāni cittavikṣepāsteṃ'tarāyāḥ ॥",
              translation: "Disease, languor, doubt, carelessness, laziness, sensuality, delusion, non-attainment of stages, and instability are the distractions of the mind, which are the obstacles.",
              meaning: "Nine obstacles that distract the mind from its focus in meditation."
            },
            {
              verse: "1.31 • Accompanying Sufferings",
              devanagari: "दुःख दौर्मनस्याङ्गमेजयत्व श्वासप्रश्वासा विक्षेपसहभुवः ॥",
              sanskrit: "duḥkha daurmanasyāṅgamejayatva śvāsapraśvāsā vikṣepa sahabhuvaḥ ॥",
              translation: "Pain, despair, nervousness, and irregular breathing accompany the distractions.",
              meaning: "Physical and mental symptoms that accompany the obstacles in meditation."
            },
            {
              verse: "1.32 • The Single Truth",
              devanagari: "तत्प्रतिषेधार्थमेकतत्त्वाभ्यासः ॥",
              sanskrit: "tat pratiṣedhārtham ekatattvābhyāsaḥ ॥",
              translation: "To prevent these, practice should be done on one truth.",
              meaning: "To overcome obstacles, focus on a single principle or reality."
            },
            {
              verse: "1.33 • Purifying the Heart",
              devanagari: "मैत्रीकरुणामुदितोपेक्षाणां सुखदुःखपुण्यापुण्य विषयाणाम् भावनातश्चित्तप्रसादनम् ॥",
              sanskrit: "maitrī karuṇā muditopekṣāṇāṃ sukha duḥkha puṇyāpuṇya viṣayāṇām bhāvanātaś citta prasādanam ॥",
              translation: "The mind becomes purified by cultivating friendliness towards the happy, compassion for the unhappy, delight in the virtuous, and indifference towards the wicked.",
              meaning: "Four attitudes that purify the mind and heart: friendliness, compassion, joy, and equanimity."
            },
            {
              verse: "1.34 • By Breath Mastery",
              devanagari: "प्रच्छर्दनविधारणाभ्यां वा प्राणस्य ॥",
              sanskrit: "pracchardana vidhāraṇābhyāṃ vā prāṇasya ॥",
              translation: "Or by the expiration and retention of breath.",
              meaning: "Breath control is another method to steady the mind."
            },
            {
              verse: "1.35 • Higher Perception",
              devanagari: "विषयवती वा प्रवृत्तिरुत्पन्ना मनसः स्थिति निबन्धिनी ॥",
              sanskrit: "viṣayavatī vā pravṛttirutpannā manasaḥ sthiti nibandhinī ॥",
              translation: "Or an objective mental activity which arises and steadies the mind.",
              meaning: "Focusing on a subtle object or experience can stabilize consciousness."
            },
            {
              verse: "1.36 • The Sorrowless Light",
              devanagari: "विशोका वा ज्योतिष्मती ॥",
              sanskrit: "viśokā vā jyotiṣmatī ॥",
              translation: "Or the state of sorrowlessness and illumination.",
              meaning: "Meditating on the inner light free from sorrow."
            },
            {
              verse: "1.37 • The Detached Mind",
              devanagari: "वीतरागविषयं वा चित्तम् ॥",
              sanskrit: "vītarāga viṣayaṃ vā cittam ॥",
              translation: "Or by meditating on the mind which is free from desires.",
              meaning: "Contemplating a mind free from attachment."
            },
            {
              verse: "1.38 • Dream Knowledge",
              devanagari: "स्वप्ननिद्राज्ञानालम्बनं वा ॥",
              sanskrit: "svapna nidrā jñānālambanaṃ vā ॥",
              translation: "Or by taking as the object the knowledge in dreams and sleep.",
              meaning: "Using dream and sleep states as objects of meditation."
            },
            {
              verse: "1.39 • On Any Chosen Object",
              devanagari: "यथाभिमतध्यानाद्वा ॥",
              sanskrit: "yathābhimata dhyānād vā ॥",
              translation: "Or by meditation on anything one chooses that is elevating.",
              meaning: "Any elevating object can serve as a focus for meditation."
            },
            {
              verse: "1.40 • Mastery Over All",
              devanagari: "परमाणुपरममहत्त्वान्तोऽस्य वशीकारः ॥",
              sanskrit: "paramāṇu parama mahattvānto'sya vaśīkāraḥ ॥",
              translation: "His mastery extends from the finest atom to the greatest magnitude.",
              meaning: "The yogi gains mastery over all scales of existence through concentration."
            },
            {
              verse: "1.41 • Crystal-like Mind",
              devanagari: "क्षीणवृत्तेरभिजातस्येव मणेर्ग्रहीतृग्रहणग्राह्येषु तत्स्थतदञ्जनता समापत्तिः ॥",
              sanskrit: "kṣīṇa vṛtter abhijātasyēva maṇer grahītṛ grahaṇa grāhyeṣu tatstha tadañjanatā samāpattiḥ ॥",
              translation: "When the modifications have been weakened, the mind becomes like a transparent crystal, taking the form of whatever object is placed before it.",
              meaning: "The purified mind reflects objects clearly without distortion, like a clean crystal."
            },
            {
              verse: "1.42 • Union with Reasoning",
              devanagari: "तत्र शब्दार्थज्ञानविकल्पैः सङ्कीर्णा सवितर्का समापत्तिः ॥",
              sanskrit: "tatra śabdārtha jñāna vikalpaiḥ saṅkīrṇā savitarkā samāpattiḥ ॥",
              translation: "The union with reasoning is that which is mixed with word, meaning, and knowledge.",
              meaning: "Samapatti with reasoning involves gross objects and conceptual understanding."
            },
            {
              verse: "1.43 • Union Beyond Reasoning",
              devanagari: "स्मृतिपरिशुद्धौ स्वरूपशून्येवार्थमात्रनिर्भासा निर्वितर्का ॥",
              sanskrit: "smṛti pariśuddhau svarūpa śūnyevārtha mātranirbhāsā nirvitarkā ॥",
              translation: "When the memory is purified, the union beyond reasoning shines forth as the object alone.",
              meaning: "Samapatti without reasoning reveals the object in its essence, free from memory associations."
            },
            {
              verse: "1.44 • Subtle Unions",
              devanagari: "एतयैव सविचारा निर्विचारा च सूक्ष्मविषया व्याख्याता ॥",
              sanskrit: "ētayaiva savicārā nirvicārā ca sūkṣmaviṣayā vyākhyātā ॥",
              translation: "By this process, the unions with reflection and without reflection, whose objects are subtle, are explained.",
              meaning: "Similar processes apply to subtle objects with and without analytical reflection."
            },
            {
              verse: "1.45 • The Subtle Realm",
              devanagari: "सूक्ष्मविषयत्वं चालिङ्गपर्यवसानम् ॥",
              sanskrit: "sūkṣma viṣayatvaṃ cāliṅga paryavasānam ॥",
              translation: "The subtle objects end with nature's undifferentiated ground.",
              meaning: "Subtle objects culminate in the unmanifest nature (alinga prakriti)."
            },
            {
              verse: "1.46 • Union with Seed",
              devanagari: "ता एव सबीजः समाधिः ॥",
              sanskrit: "tā ēva sabījaḥ samādhiḥ ॥",
              translation: "These are the only kinds of union with seed.",
              meaning: "All these states are Samadhi with seed (support) - sabija samadhi."
            },
            {
              verse: "1.47 • Supreme Clarity",
              devanagari: "निर्विचारवैशाराद्येऽध्यात्मप्रसादः ॥",
              sanskrit: "nirvicāra vaiśārādye'dhyātma prasādaḥ ॥",
              translation: "On attaining the utmost purity of the union beyond reflection, there is the dawning of spiritual light.",
              meaning: "Supreme clarity and inner peace arise in seedless absorption."
            },
            {
              verse: "1.48 • Truth-bearing Wisdom",
              devanagari: "ऋतम्भरा तत्र प्रज्ञा ॥",
              sanskrit: "ṛtambharā tatra prajñā ॥",
              translation: "Therein is wisdom that carries the seal of truth.",
              meaning: "In that state, truth-bearing wisdom (ritambhara prajna) emerges."
            },
            {
              verse: "1.49 • Special Knowledge",
              devanagari: "श्रुतानुमान प्रज्ञाभ्यामन्यविषया विशेषार्थत्वात् ॥",
              sanskrit: "śrutānumāna prajñābhyām anya viṣayā viśeṣārthatvāt ॥",
              translation: "That wisdom is different from that obtained by testimony or inference.",
              meaning: "This direct wisdom differs from intellectual knowledge gained through study or reasoning."
            },
            {
              verse: "1.50 • The Dominant Impression",
              devanagari: "तज्जः संस्कारोऽन्यसंस्कार प्रतिबन्धी ॥",
              sanskrit: "tajjaḥ saṃskāro'nyasaṃskāra pratibandhī ॥",
              translation: "The latent impression born of that wisdom opposes all other impressions.",
              meaning: "Truth-bearing impressions neutralize all other mental impressions."
            },
            {
              verse: "1.51 • Seedless Union",
              devanagari: "तस्यापि निरोधे सर्वनिरोधान्निर्बीजः समाधिः ॥",
              sanskrit: "tasyāpi nirodhe sarva nirodhān nirbījaḥ samādhiḥ ॥",
              translation: "Upon the cessation of that also, through the restraint of all, cometh the Seedless Union.",
              meaning: "The ultimate state beyond all supports and seeds - Nirbija Samadhi."
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
            },
            {
              verse: "2.11 • Meditation's Power",
              devanagari: "ध्यानहेयास्तद्वृत्तयः ॥",
              sanskrit: "dhyānahēyāstadvṛttayaḥ ॥",
              translation: "Their modifications are to be rejected by meditation.",
              meaning: "Meditation dissolves the manifestations of afflictions."
            },
            {
              verse: "2.12 • The Store of Karma",
              devanagari: "क्लेशमूलः कर्माशयो दृष्टादृष्टजन्मवेदनीयः ॥",
              sanskrit: "klēśa mūlaḥ karmāśayō dṛṣṭādṛṣṭa janma vēdanīyaḥ ॥",
              translation: "The store of karma has its root in the afflictions and is experienced in seen and unseen births.",
              meaning: "Karma accumulation and its consequences across lifetimes."
            },
            {
              verse: "2.13 • Karma's Fruition",
              devanagari: "सति मूले तद् विपाकोजात्यायुर्भोगाः ॥",
              sanskrit: "sati mūlē tad vipākōjātyāyur bhōgāḥ ॥",
              translation: "So long as the root exists, there will be fruition in the form of species, life, and experience.",
              meaning: "Karma manifests as type of birth, lifespan, and experiences."
            },
            {
              verse: "2.14 • Pleasure and Pain",
              devanagari: "ते ह्लादपरितापफलाः पुण्यापुण्यहेतुत्वात् ॥",
              sanskrit: "tē hlāda paritāpa phalāḥ puṇyāpuṇya hētutvāt ॥",
              translation: "They bear the fruits of pleasure and pain, caused by merit and demerit.",
              meaning: "Meritorious actions bring pleasure, demeritorious bring pain."
            },
            {
              verse: "2.15 • All is Suffering",
              devanagari: "परिणामतापसंस्कारदुःखैर्गुणवृत्ति विरोधाच्च दुःखमेव सर्वं विवेकिनः ॥",
              sanskrit: "pariṇāma tāpa saṃskāra duḥkhair guṇa vṛttivirōdhāc ca duḥkham ēva sarvaṃ vivēkinaḥ ॥",
              translation: "To the discerning, all is suffering, due to the pains of change, anxiety, and impressions, and because of the conflict between the gunas.",
              meaning: "The wise see suffering in all worldly experiences due to impermanence and inner conflict."
            },
            {
              verse: "2.16 • Future Suffering",
              devanagari: "हेयं दुःखमनागतम् ॥",
              sanskrit: "hēyaṃ duḥkham anāgatam ॥",
              translation: "The suffering which is yet to come may be avoided.",
              meaning: "Future suffering can be prevented through spiritual practice."
            },
            {
              verse: "2.17 • The Cause of Suffering",
              devanagari: "द्रष्टृदृश्ययोः संयोगो हेयहेतुः॥",
              sanskrit: "draṣṭṛ dṛśyayōḥ saṃyōgō hēya hētuḥ॥",
              translation: "The cause of that which is to be avoided is the union of the seer and the seen.",
              meaning: "Root cause of suffering is false identification between consciousness and objects."
            },
            {
              verse: "2.18 • The Nature of the Seen",
              devanagari: "प्रकाश क्रिया स्थितिशीलं भूतेन्द्रियात्मकं भोगापवर्गार्थं दृश्यम् ॥",
              sanskrit: "prakāśa kriyā sthitiśīlaṃ bhūtēndriyātmakaṃ bhōgāpavargārthaṃ dṛśyam ॥",
              translation: "The seen is composed of the elements and the senses, has the nature of illumination, action, and inertia, and exists for the purpose of experience and liberation.",
              meaning: "Nature of the phenomenal world as composed of three gunas and existing for experience leading to liberation."
            },
            {
              verse: "2.19 • The Stages of Qualities",
              devanagari: "विशेषाविशेषलिङ्गमात्रालिङ्गानि गुणपर्वाणि ॥",
              sanskrit: "viśēṣāviśēṣa liṅgamātrāliṅgāni guṇa parvāṇi ॥",
              translation: "The stages of the qualities are the particular, the particularized, the indicated, and the unmanifest.",
              meaning: "Four levels of manifestation of the gunas: specific, generic, subtle, and unmanifest."
            },
            {
              verse: "2.20 • The Seer's Nature",
              devanagari: "द्रष्टा दृशिमात्रः शुद्धोऽपि प्रत्ययानुपश्यः ॥",
              sanskrit: "draṣṭā dṛśimātraḥ śuddhō'pi pratyayānupaśyaḥ ॥",
              translation: "The Seer is pure consciousness, yet he perceives through the mind.",
              meaning: "The Self is pure awareness that appears to perceive through the mind's modifications."
            },
            {
              verse: "2.21 • The Seen's Essence",
              devanagari: "तदर्थ एव दृश्यस्यात्मा ॥",
              sanskrit: "tadartha ēva dṛśyasyātmā ॥",
              translation: "The essence of the seen exists only for the sake of the Seer.",
              meaning: "The phenomenal world exists for the experience and liberation of consciousness."
            },
            {
              verse: "2.22 • Though Ceased",
              devanagari: "कृतार्थं प्रति नष्टमप्यनष्टं तदन्यसाधारणत्वात् ॥",
              sanskrit: "kṛtārthaṃ prati naṣṭam apyanaṣṭaṃ tad anya sādhāraṇatvāt ॥",
              translation: "Though ceasing to exist for him whose purpose is fulfilled, it has not ceased to exist for others.",
              meaning: "For the realized being, the world loses its reality, but persists for others still bound by ignorance."
            },
            {
              verse: "2.23 • Union's Purpose",
              devanagari: "स्व स्वामि शक्त्योः स्वरूपोपलब्धिहेतुः संयोगः ॥",
              sanskrit: "sva svāmi śaktyōḥ svarūpōpalabdhihētuḥ saṃyōgaḥ ॥",
              translation: "The union is for the purpose of realizing the true nature of both the possessor and the possessed.",
              meaning: "False identification serves the purpose of Self-realization by contrasting Seer and seen."
            },
            {
              verse: "2.24 • Ignorance as Cause",
              devanagari: "तस्य हेतुरविद्या ॥",
              sanskrit: "tasya hēturavidyā ॥",
              translation: "The cause of that union is ignorance.",
              meaning: "Ignorance (avidya) is the root cause of false identification."
            },
            {
              verse: "2.25 • Liberation's Path",
              devanagari: "तदभावात् संयोगाभावो हानं तद् दृशेः कैवल्यम् ॥",
              sanskrit: "tad abhāvāt saṃyōgābhāvō hānaṃ tad dṛśēḥ kaivalyam ॥",
              translation: "With the absence of ignorance, there is absence of union; this is the liberation of the Seer.",
              meaning: "Removal of ignorance leads to liberation (kaivalya) of the conscious principle."
            },
            {
              verse: "2.26 • Discriminative Knowledge",
              devanagari: "विवेकख्यातिरविप्लवा हानोपायः ॥",
              sanskrit: "vivēkakhyātiraviplavā hānōpāyaḥ ॥",
              translation: "The means of destruction is unfluctuating discriminative knowledge.",
              meaning: "Steady discrimination (viveka khyati) between Self and not-Self destroys ignorance."
            },
            {
              verse: "2.27 • Sevenfold Wisdom",
              devanagari: "तस्य सप्तधा प्रान्तभूमिः प्रज्ञा ॥",
              sanskrit: "tasya saptadhā prāntabhūmiḥ prajñā ॥",
              translation: "His wisdom is sevenfold, reaching to the summit.",
              meaning: "Seven stages of discriminative knowledge leading to complete enlightenment."
            },
            {
              verse: "2.28 • Through the Eight Limbs",
              devanagari: "योगाङ्गानुष्ठानादशुद्धिक्षये ज्ञानदीप्तिराविवेकख्यातेः ॥",
              sanskrit: "yōgāṅgānuṣṭhānād aśuddhi kṣayē jñānadīptir āvivēkakhyātēḥ ॥",
              translation: "From the practice of the limbs of yoga, impurities are destroyed and the light of wisdom leads to discriminative discernment.",
              meaning: "Yoga practices purify and lead to wisdom culminating in discriminative knowledge."
            },
            {
              verse: "2.29 • The Eight Limbs",
              devanagari: "यमनियमासनप्राणायामप्रत्याहारधारणाध्यानसमाधयोऽष्टावङ्गानि ॥",
              sanskrit: "yama niyamāsana prāṇāyāma pratyāhāra dhāraṇā dhyāna samādhayō'ṣṭāvaṅgāni ॥",
              translation: "The eight limbs are: restraints, observances, posture, breath control, withdrawal, concentration, meditation, and absorption.",
              meaning: "The famous Eight Limbs of Ashtanga Yoga: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi."
            },
            {
              verse: "2.30 • The Restraints",
              devanagari: "अहिंसासत्यास्तेयब्रह्मचर्यापरिग्रहा यमाः ॥",
              sanskrit: "ahiṃsā satyāstēya brahmacaryāparigrahā yamāḥ ॥",
              translation: "The restraints are: non-violence, truthfulness, non-stealing, continence, and non-possessiveness.",
              meaning: "Five ethical restraints (Yamas): Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha."
            },
            {
              verse: "2.31 • The Great Vow",
              devanagari: "जातिदेशकालसमयानवच्छिन्नाः सार्वभौमा महाव्रतम् ॥",
              sanskrit: "jāti dēśa kāla samayānavacchinnāḥ sārvabhaumā mahāvratam ॥",
              translation: "These, not conditioned by class, place, time, or circumstance, are the great vow.",
              meaning: "Yamas are universal principles without exceptions, applicable to all."
            },
            {
              verse: "2.32 • The Observances",
              devanagari: "शौचसन्तोषतपः स्वाध्यायेश्वरप्रणिधानानि नियमाः ॥",
              sanskrit: "śauca santōṣa tapaḥ svādhyāyēśvarapraṇidhānāni niyamāḥ ॥",
              translation: "The observances are: purity, contentment, austerity, self-study, and surrender to the Lord.",
              meaning: "Five personal observances (Niyamas): Saucha, Santosha, Tapas, Svadhyaya, Ishvara Pranidhana."
            },
            {
              verse: "2.33 • Counteracting Thoughts",
              devanagari: "वितर्कबाधने प्रतिपक्षभावनम् ॥",
              sanskrit: "vitarka bādhanē pratipakṣa bhāvanam ॥",
              translation: "When disturbed by negative thoughts, opposite ones should be cultivated.",
              meaning: "Counteract negative thoughts with positive ones (pratipaksha bhavana)."
            },
            {
              verse: "2.34 • Negative Thoughts",
              devanagari: "वितर्का हिंसादयः कृतकारितानुमोदिता लोभक्रोधमोहपूर्वका मृदुमध्याधिमात्रा दुःखाज्ञानानन्तफला इति प्रतिपक्षभावनम् ॥",
              sanskrit: "vitarkā hiṃsādayaḥ kṛta kāritānumōditā lōbha krōdha mōha pūrvakā mṛdu madhyādhimātrā duḥkhājñānānanta phalā iti pratipakṣa bhāvanam ॥",
              translation: "Negative thoughts of violence, whether done, caused, or approved, spring from greed, anger, or delusion, and may be mild, moderate, or intense.",
              meaning: "Detailed explanation of harmful thoughts and their antidotes based on intensity and origin."
            },
            {
              verse: "2.35 • Non-violence Established",
              devanagari: "अहिंसाप्रतिष्ठायां तत्सन्निधौ वैरत्यागः ॥",
              sanskrit: "ahiṃsā pratiṣṭhāyāṃ tat sannidhau vaira tyāgaḥ ॥",
              translation: "When non-violence is established, enmity is abandoned in his presence.",
              meaning: "Effect of perfect non-violence: all beings cease hostility in the yogi's presence."
            },
            {
              verse: "2.36 • Truthfulness Established",
              devanagari: "सत्यप्रतिष्ठायां क्रियाफलाश्रयत्वम् ॥",
              sanskrit: "satya pratiṣṭhāyāṃ kriyāphalāśrayatvam ॥",
              translation: "When truthfulness is established, the fruits of actions depend on him.",
              meaning: "Power of perfect truthfulness: the yogi's words become reality."
            },
            {
              verse: "2.37 • Non-stealing Established",
              devanagari: "अस्तेयप्रतिष्ठायां सर्वरत्नोपस्थानम् ॥",
              sanskrit: "astēyapratiṣṭhāyāṃ sarvaratnōpasthānam ॥",
              translation: "When non-stealing is established, all jewels present themselves.",
              meaning: "Effect of perfect non-stealing: all treasures become available to the yogi."
            },
            {
              verse: "2.38 • Continence Established",
              devanagari: "ब्रह्मचर्यप्रतिष्ठायां वीर्यलाभः ॥",
              sanskrit: "brahmacarya pratiṣṭhāyāṃ vīryalābhaḥ ॥",
              translation: "When continence is established, vigor is gained.",
              meaning: "Effect of perfect continence: conservation and increase of vital energy."
            },
            {
              verse: "2.39 • Non-possessiveness Established",
              devanagari: "अपरिग्रहस्थैर्ये जन्मकथन्तासम्बोधः ॥",
              sanskrit: "aparigraha sthairyē janmakathantā sambōdhaḥ ॥",
              translation: "When non-possessiveness is confirmed, knowledge of the how and why of existence arises.",
              meaning: "Effect of perfect non-possessiveness: understanding the nature of existence."
            },
            {
              verse: "2.40 • Purity's Effect",
              devanagari: "शौचात् स्वाङ्गजुगुप्सा परैरसंसर्गः ॥",
              sanskrit: "śaucāt svāṅgajugupsā parairasaṃsargaḥ ॥",
              translation: "From purity comes disgust for one's own body and non-contact with others.",
              meaning: "Effect of purity (Shaucha): detachment from the body and non-attachment to others."
            },
            {
              verse: "2.41 • Mind's Purification",
              devanagari: "सत्त्वशुद्धिसौमनस्यैकाग्य्रेन्द्रियजयात्मदर्शनयोग्यत्वानि च ॥",
              sanskrit: "sattvaśuddhi saumanasyaikāgyrēndriyajayātmadarśana yōgyatvāni ca ॥",
              translation: "Moreover, come purification of the mind, cheerfulness, concentration, mastery over the senses, and fitness for Self-realization.",
              meaning: "Further benefits of purity: mental clarity, joy, focus, sensory control, and readiness for enlightenment."
            },
            {
              verse: "2.42 • Contentment's Fruit",
              devanagari: "सन्तोषादनुत्तमःसुखलाभः ॥",
              sanskrit: "santōṣādanuttamaḥ sukhalābhaḥ ॥",
              translation: "From contentment comes supreme happiness.",
              meaning: "Effect of contentment (Santosha): attainment of the highest bliss."
            },
            {
              verse: "2.43 • Austerity's Effect",
              devanagari: "कायेन्द्रियसिद्धिरशुद्धिक्षयात् तपसः ॥",
              sanskrit: "kāyēndriya siddhiraśuddhikṣayāt tapasaḥ ॥",
              translation: "From austerity, through the destruction of impurities, comes perfection of the body and senses.",
              meaning: "Effect of austerity (Tapas): purification leading to perfection of physical and sensory capacities."
            },
            {
              verse: "2.44 • Self-study's Fruit",
              devanagari: "स्वाध्यायादिष्टदेवतासम्प्रयोगः ॥",
              sanskrit: "svādhyāyādiṣṭadēvatāsamprayōgaḥ ॥",
              translation: "From self-study comes communion with the chosen deity.",
              meaning: "Effect of self-study (Svadhyaya): connection with one's chosen form of divinity."
            },
            {
              verse: "2.45 • Surrender's Fruit",
              devanagari: "समाधिसिद्धिरीश्वरप्रणिधानात् ॥",
              sanskrit: "samādhisiddhir īśvarapraṇidhānāt ॥",
              translation: "From surrender to the Lord comes the attainment of samādhi.",
              meaning: "Effect of surrender to God (Ishvara Pranidhana): achievement of meditative absorption."
            },
            {
              verse: "2.46 • Posture Defined",
              devanagari: "स्थिरसुखमासनम् ॥",
              sanskrit: "sthira sukhamāsanam ॥",
              translation: "Posture should be steady and comfortable.",
              meaning: "Definition of Asana (posture): stable and pleasant position."
            },
            {
              verse: "2.47 • Posture Perfected",
              devanagari: "प्रयत्नशैथिल्यानन्तसमापत्तिभ्याम् ॥",
              sanskrit: "prayatna śaithilyānanta samāpattibhyām ॥",
              translation: "By relaxation of effort and meditation on the infinite, posture is perfected.",
              meaning: "Method to perfect asana: ease of effort and contemplation of the limitless."
            },
            {
              verse: "2.48 • Freedom from Dualities",
              devanagari: "ततो द्वन्द्वानभिघातः ॥",
              sanskrit: "tatō dvandvānabhighātaḥ ॥",
              translation: "Then one is not disturbed by the dualities.",
              meaning: "Result of perfected asana: transcendence of pain-pleasure, heat-cold, etc."
            },
            {
              verse: "2.49 • Breath Control",
              devanagari: "तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः ॥",
              sanskrit: "tasmin sati śvāsapraśvāsayōrgativicchēdaḥ prāṇāyāmaḥ ॥",
              translation: "That being acquired, the control of inhalation and exhalation follows.",
              meaning: "Definition of Pranayama (breath control) after mastering posture."
            },
            {
              verse: "2.50 • Types of Breath Control",
              devanagari: "बाह्याभ्यन्तरस्तम्भवृत्तिर्देशकालसंख्याभिः परिदृष्टो दीर्घसूक्ष्मः ॥",
              sanskrit: "bāhyābhyantara stambhavṛttirdēśakāla saṃkhyābhiḥ paridṛṣṭō dīrghasūkṣmaḥ ॥",
              translation: "Its modifications are external, internal, or stationary, regulated by place, time, and number, and become long and subtle.",
              meaning: "Three types of pranayama and their qualities: exhalation, inhalation, retention - regulated and refined."
            },
            {
              verse: "2.51 • The Fourth Type",
              devanagari: "बाह्याभ्यन्तरविषयाक्षेपी चतुर्थः ॥",
              sanskrit: "bāhyābhyantara viṣayākṣēpī caturthaḥ ॥",
              translation: "The fourth type transcends the external and internal spheres.",
              meaning: "The highest type of pranayama transcends both inhalation and exhalation."
            },
            {
              verse: "2.52 • The Veil Destroyed",
              devanagari: "ततः क्षीयते प्रकाशावरणम् ॥",
              sanskrit: "tataḥ kṣīyatē prakāśāvaraṇam ॥",
              translation: "Then the covering of the light is destroyed.",
              meaning: "Effect of perfected pranayama: removal of obscurations to inner illumination."
            },
            {
              verse: "2.53 • Mind Fit for Concentration",
              devanagari: "धारणासु च योग्यता मनसः ॥",
              sanskrit: "dhāraṇāsu ca yōgyatā manasaḥ ॥",
              translation: "And the mind becomes fit for concentration.",
              meaning: "Mind becomes ready for Dharana (concentration) after pranayama."
            },
            {
              verse: "2.54 • Withdrawal of Senses",
              devanagari: "स्वविषयासम्प्रयोगे चित्तस्वरूपानुकार इवेन्द्रियाणां प्रत्याहारः ॥",
              sanskrit: "svaviṣayāsamprayōgē cittasvarūpānukāra ivēndriyāṇāṃ pratyāhāraḥ ॥",
              translation: "Withdrawal is the imitation by the senses of the mind's nature, by disengaging from their objects.",
              meaning: "Definition of Pratyahara (sense withdrawal): senses withdraw from objects and follow the mind inward."
            },
            {
              verse: "2.55 • Supreme Mastery",
              devanagari: "ततः परमा वश्यतेन्द्रियाणाम् ॥",
              sanskrit: "tataḥ paramā vaśyatēndriyāṇām ॥",
              translation: "Then comes the supreme mastery over the senses.",
              meaning: "Result of perfect pratyahara: complete control over all sensory faculties."
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
            },
            {
              verse: "3.11 • Transformation of Samādhi",
              devanagari: "सर्वार्थतैकाग्रातयोः क्षयोदयौ चित्तस्य समाधिपरिणामः ॥",
              sanskrit: "sarvārthataikāgrātayōḥ kṣayōdayau cittasya samādhipariṇāmaḥ ॥",
              translation: "The transformation of samādhi is the dwindling of distraction and rise of one-pointedness.",
              meaning: "Definition of Samadhi Parinama - transformation in meditation from distraction to single-pointed focus."
            },
            {
              verse: "3.12 • Transformation of One-pointedness",
              devanagari: "ततः पुनः शान्तोदितौ तुल्यप्रत्ययौ चित्तस्यैकाग्रता परिणामः ॥",
              sanskrit: "tataḥ punaḥ śāntōditau tulyapratyayau cittasyaikāgratā pariṇāmaḥ ॥",
              translation: "Then again, when the subsiding and rising thought-waves are equal, there is the transformation of one-pointedness.",
              meaning: "Definition of Ekagrata Parinama - transformation of one-pointedness when mental fluctuations become balanced."
            },
            {
              verse: "3.13 • Transformation of Characteristics",
              devanagari: "एतेन भूतेन्द्रियेषु धर्मलक्षणावस्थापरिणामा व्याख्याताः ॥",
              sanskrit: "ētēna bhūtēndriyēṣu dharmalakṣaṇāvasthāpariṇāmā vyākhyātāḥ ॥",
              translation: "By this are explained the transformations of characteristics, properties, and conditions in the elements and senses.",
              meaning: "Samyama explains transformations in matter and senses at three levels: essence, properties, and states."
            },
            {
              verse: "3.14 • The Substratum",
              devanagari: "शान्तोदिताव्यपदेश्यधर्मानुपाती धर्मी ॥",
              sanskrit: "śāntōditāvyapadēśyadharmānupātī dharmī ॥",
              translation: "The substratum is that which follows the characteristics of the quiescent, the risen, and the unmanifest.",
              meaning: "The underlying substance that manifests through various states: past, present, and potential."
            },
            {
              verse: "3.15 • Sequence of Transformation",
              devanagari: "क्रमान्यत्वं परिणामान्यत्वे हेतुः ॥",
              sanskrit: "kramānyatvaṃ pariṇāmānyatvē hētuḥ ॥",
              translation: "The difference in sequence is the cause of the difference in transformation.",
              meaning: "Different sequences cause different transformations in the manifestation process."
            },
            {
              verse: "3.16 • Knowledge of Past and Future",
              devanagari: "परिणामत्रयसंयमादतीतानागतज्ञानम् ॥",
              sanskrit: "pariṇāmatrayasaṃyamādatītānāgatajñānam ॥",
              translation: "By constraint on the three transformations comes knowledge of the past and future.",
              meaning: "First siddhi (power) - knowledge of past and future through mastery of transformation sequences."
            },
            {
              verse: "3.17 • Knowledge of Sounds",
              devanagari: "शब्दार्थप्रत्ययानामितरेतराध्यासात् सङ्करस्तत्प्रविभागसंयमात् सर्वभूतरुतज्ञानम् ॥",
              sanskrit: "śabdārthapratyayānāmitarētarādhyāsāt saṅkarastatpravibhāgasaṃyamāt sarvabhūtarutajñānam ॥",
              translation: "By constraint on the distinction between word, meaning, and knowledge, comes knowledge of the sounds of all beings.",
              meaning: "Knowledge of all languages and sounds of creatures by discerning word-object-idea relationships."
            },
            {
              verse: "3.18 • Knowledge of Previous Births",
              devanagari: "संस्कारसाक्षात्करणात् पूर्वजातिज्ञानम् ॥",
              sanskrit: "saṃskārasākṣātkaraṇāt pūrvajātijñānam ॥",
              translation: "By direct perception of impressions comes knowledge of previous births.",
              meaning: "Knowledge of past lives through direct observation of latent impressions (samskaras)."
            },
            {
              verse: "3.19 • Knowledge of Others' Minds",
              devanagari: "प्रत्ययस्य परचित्तज्ञानम् ॥",
              sanskrit: "pratyayasya paracittajñānam ॥",
              translation: "By constraint on notions comes knowledge of others' minds.",
              meaning: "Telepathy - reading others' thoughts through mastery of mental modifications."
            },
            {
              verse: "3.20 • But Not Their Support",
              devanagari: "न च तत् सालम्बनं तस्याविषयीभूतत्वात् ॥",
              sanskrit: "na ca tat sālambanaṃ tasyāviṣayībhūtatvāt ॥",
              translation: "But not its support, that being not the object.",
              meaning: "Cannot know the object of others' thoughts, only the thoughts themselves, as objects are not directly perceived."
            },
            {
              verse: "3.21 • Disappearance of Body",
              devanagari: "कायरूपसंयमात् तद्ग्राह्यशक्तिस्तम्भे चक्षुः प्रकाशासम्प्रयोगेऽन्तर्धानम् ॥",
              sanskrit: "kāyarūpasaṃyamāt tadgrāhyaśaktistambhē cakṣuḥ prakāśāsamprayōgē'ntardhānam ॥",
              translation: "By constraint on the form of the body, its perceptibility being suspended and the contact between eye and light being broken, disappearance comes.",
              meaning: "Power of invisibility through control of bodily form and perception."
            },
            {
              verse: "3.22 • Knowledge of Death",
              devanagari: "सोपक्रमं निरुपक्रमं च कर्म तत्संयमादपरान्तज्ञानमरिष्टेभ्यो वा ॥",
              sanskrit: "sōpakramaṃ nirupakramaṃ ca karma tatsaṃyamādaparāntajñānamariṣṭēbhyō vā ॥",
              translation: "By constraint on karma, which is quick and slow in fruition, comes knowledge of death, or by portents.",
              meaning: "Knowledge of time of death through karma analysis or omens."
            },
            {
              verse: "3.23 • Friendliness and Other Powers",
              devanagari: "मैत्र्यादिषु बलानि ॥",
              sanskrit: "maitryādiṣu balāni ॥",
              translation: "By constraint on friendliness and other virtues come powers.",
              meaning: "Powers from cultivating positive qualities like friendliness, compassion, etc."
            },
            {
              verse: "3.24 • Powers Like an Elephant's",
              devanagari: "बलेषु हस्तिबलादीनी ॥",
              sanskrit: "balēṣu hastibalādīnī ॥",
              translation: "In the powers, such as the strength of an elephant.",
              meaning: "Physical strength like an elephant through samyama on strength."
            },
            {
              verse: "3.25 • Knowledge of the Subtle",
              devanagari: "प्रवृत्त्यालोकन्यासात् सूक्ष्मव्यवहितविप्रकृष्टज्ञानम् ॥",
              sanskrit: "pravṛttyālōkanyāsāt sūkṣmavyavahitaviprakṛṣṭajñānam ॥",
              translation: "By projecting the light of the senses comes knowledge of the subtle, hidden, and distant.",
              meaning: "Knowledge of subtle, concealed, and distant things through sensory mastery."
            },
            {
              verse: "3.26 • Knowledge of the Universe",
              devanagari: "भुवनज्ञानं सूर्ये संयमात् ॥",
              sanskrit: "bhuvanajñānaṃ sūryē saṃyamāt ॥",
              translation: "By constraint on the sun comes knowledge of the universe.",
              meaning: "Knowledge of cosmic systems and planetary realms through solar samyama."
            },
            {
              verse: "3.27 • Knowledge of the Stars",
              devanagari: "चन्द्रे ताराव्यूहज्ञानम् ॥",
              sanskrit: "candrē tārāvyūhajñānam ॥",
              translation: "By constraint on the moon comes knowledge of the stars' arrangement.",
              meaning: "Knowledge of stellar constellations and their patterns through lunar samyama."
            },
            {
              verse: "3.28 • Knowledge of Movement",
              devanagari: "ध्रुवे तद्गतिज्ञानम् ॥",
              sanskrit: "dhruvē tadgatijñānam ॥",
              translation: "By constraint on the pole-star comes knowledge of their movements.",
              meaning: "Knowledge of planetary motions and orbits through polar star samyama."
            },
            {
              verse: "3.29 • Knowledge of the Body",
              devanagari: "नाभिचक्रे कायव्यूहज्ञानम् ॥",
              sanskrit: "nābhicakrē kāyavyūhajñānam ॥",
              translation: "By constraint on the navel wheel comes knowledge of the body's system.",
              meaning: "Knowledge of bodily systems and energy centers through navel chakra samyama."
            },
            {
              verse: "3.30 • Cessation of Hunger and Thirst",
              devanagari: "कण्ठकूपे क्षुत्पिपासानिवृत्तिः ॥",
              sanskrit: "kaṇṭhakūpē kṣutpipāsānivṛttiḥ ॥",
              translation: "By constraint on the pit of the throat comes cessation of hunger and thirst.",
              meaning: "Freedom from hunger and thirst through throat center samyama."
            },
            {
              verse: "3.31 • Steadiness",
              devanagari: "कूर्मनाड्यां स्थैर्यम् ॥",
              sanskrit: "kūrmanāḍyāṃ sthairyam ॥",
              translation: "By constraint on the tortoise channel comes steadiness.",
              meaning: "Steadiness and stability of body and mind through energy channel control."
            },
            {
              verse: "3.32 • Vision of Siddhas",
              devanagari: "मूर्धज्योतिषि सिद्धदर्शनम् ॥",
              sanskrit: "mūrdhajyōtiṣi siddhadarśanam ॥",
              translation: "By constraint on the light in the head comes vision of the perfected ones.",
              meaning: "Vision of perfected beings and spiritual masters through crown chakra samyama."
            },
            {
              verse: "3.33 • Knowledge Through Prātibha",
              devanagari: "प्रातिभाद्वा सर्वम् ॥",
              sanskrit: "prātibhādvā sarvam ॥",
              translation: "Or through the light of intuition comes all knowledge.",
              meaning: "Spontaneous intuitive knowledge of everything through divine insight."
            },
            {
              verse: "3.34 • Knowledge of the Mind",
              devanagari: "हृदये चित्तसंवित् ॥",
              sanskrit: "hṛdayē cittasaṃvit ॥",
              translation: "By constraint on the heart comes knowledge of the mind.",
              meaning: "Knowledge of the nature of consciousness through heart center samyama."
            },
            {
              verse: "3.35 • Distinction Between Self and Not-Self",
              devanagari: "सत्त्वपुरुषयोरत्यन्तासङ्कीर्णयोः प्रत्ययाविशेषो भोगः परार्थत्वात् स्वार्थसंयमात् पुरुषज्ञानम् ॥",
              sanskrit: "sattvapuruṣayōratyantāsaṅkīrṇayōḥ pratyayāviśēṣō bhōgaḥ parārthatvāt svārthasaṃyamāt puruṣajñānam ॥",
              translation: "Experience results from the non-distinction between the pure intellect and the Self. By constraint on the Self comes knowledge of the Self.",
              meaning: "Distinction between Purusha (Self) and Prakriti (nature) through Self-focused samyama."
            },
            {
              verse: "3.36 • Supernormal Powers",
              devanagari: "ततः प्रातिभश्रावणवेदनादर्शास्वादवार्ता जायन्ते ॥",
              sanskrit: "tataḥ prātibhaśrāvaṇavēdanādarśāsvādavārtā jāyantē ॥",
              translation: "From that arise intuitional hearing, touch, vision, taste, and smell.",
              meaning: "Clairvoyance, clairaudience, and other supersensory perceptions arise."
            },
            {
              verse: "3.37 • Obstacles to Samādhi",
              devanagari: "ते समाधावुपसर्गाव्युत्थाने सिद्धयः ॥",
              sanskrit: "tē samādhāvupasargāvyutthānē siddhayaḥ ॥",
              translation: "These are obstacles to samādhi, but powers in the worldly state.",
              meaning: "Siddhis are obstacles to final liberation but useful in ordinary consciousness."
            },
            {
              verse: "3.38 • Mastery Over Elements",
              devanagari: "बन्धकारणशैथिल्यात् प्रचारसंवेदनाच्च चित्तस्य परशरीरावेशः ॥",
              sanskrit: "bandhakāraṇaśaithilyāt pracārasaṃvēdanāc ca cittasya paraśarīrāvēśaḥ ॥",
              translation: "By relaxation of the causes of bondage and by knowledge of the channels, the mind can enter another's body.",
              meaning: "Power of entering another's body through mastery of energy channels."
            },
            {
              verse: "3.39 • Mastery Over Udāna",
              devanagari: "उदानजयाज्जलपङ्ककण्टकादिष्वसङ्ग उत्क्रान्तिश्च ॥",
              sanskrit: "udānajayājjalapaṅkakaṇṭakādiṣvasaṅga utkrāntiśca ॥",
              translation: "By mastery over the udāna breath, one becomes light and can walk on water, swamps, thorns, etc., and can leave the body at will.",
              meaning: "Levitation, walking on water, and conscious death through udana vayu control."
            },
            {
              verse: "3.40 • Mastery Over Samāna",
              devanagari: "समानजयाज्ज्वलनम् ॥",
              sanskrit: "samānajayājjvalanam ॥",
              translation: "By mastery over the samāna breath comes radiance.",
              meaning: "Radiant aura and bodily effulgence through samana vayu control."
            },
            {
              verse: "3.41 • Divine Hearing",
              devanagari: "श्रोत्राकाशयोः सम्बन्धसंयमात् दिव्यं श्रोत्रम् ॥",
              sanskrit: "śrōtrākāśayōḥ sambandhasaṃyamāt divyaṃ śrōtram ॥",
              translation: "By constraint on the relation between ear and ether comes divine hearing.",
              meaning: "Divine hearing - hearing celestial sounds through ear-ether connection samyama."
            },
            {
              verse: "3.42 • Levitation",
              devanagari: "कायाकाशयोः सम्बन्धसंयमात् लघुतूलसमापत्तेश्च आकाशगमनम् ॥",
              sanskrit: "kāyākāśayōḥ sambandhasaṃyamāt laghutūlasamāpattēśca ākāśagamanam ॥",
              translation: "By constraint on the relation between body and ether, and by identification with light things like cotton, comes passage through space.",
              meaning: "Levitation and flying through space through body-ether connection samyama."
            },
            {
              verse: "3.43 • The Great Disincarnate",
              devanagari: "बहिरकल्पिता वृत्तिर्महाविदेहा ततः प्रकाशावरणक्षयः ॥",
              sanskrit: "bahirakalpitā vṛttirmahāvidēhā tataḥ prakāśāvaraṇakṣayaḥ ॥",
              translation: "The state of consciousness outside the body is the great disincarnate; from that, the covering of light is removed.",
              meaning: "Out-of-body experience and removal of veils through disembodied consciousness."
            },
            {
              verse: "3.44 • Mastery Over Elements",
              devanagari: "स्थूलस्वरूपसूक्ष्मान्वयार्थवत्त्वसंयमात् भूतजयः ॥",
              sanskrit: "sthūlasvarūpasūkṣmānvayārthavattvasaṃyamāt bhūtajayaḥ ॥",
              translation: "By constraint on the gross, the essential, the subtle, the connective, and the purposeful, comes mastery over the elements.",
              meaning: "Mastery over the five elements through comprehensive samyama on their aspects."
            },
            {
              verse: "3.45 • Siddhis and Perfection",
              devanagari: "ततोऽणिमादिप्रादुर्भावः कायसम्पत् तद्धर्मानभिघातश्च ॥",
              sanskrit: "tatō'ṇimādiprādurbhāvaḥ kāyasampat taddharmānabighātaśca ॥",
              translation: "From that comes the manifestation of the powers like miniaturization, and the perfection of the body, and the non-obstruction of its functions.",
              meaning: "Eight classical siddhis beginning with Anima (becoming minute) and bodily perfection."
            },
            {
              verse: "3.46 • Perfection of Body",
              devanagari: "रूपलावण्यबलवज्रसंहननत्वानि कायसम्पत् ॥",
              sanskrit: "rūpalāvaṇyabalavajrasaṃhananatvāni kāyasampat ॥",
              translation: "Beauty, grace, strength, and adamantine hardness constitute bodily perfection.",
              meaning: "Physical perfection and attractiveness through element mastery."
            },
            {
              verse: "3.47 • Mastery Over Senses",
              devanagari: "ग्रहणस्वरूपास्मितान्वयार्थवत्त्वसंयमादिन्द्रियजयः ॥",
              sanskrit: "grahaṇasvarūpāsmitānvayārthavattvasaṃyamādindriyajayaḥ ॥",
              translation: "By constraint on the grasping, the essential nature, the I-sense, the connectedness, and the purposefulness of the senses, comes mastery over them.",
              meaning: "Complete mastery over all senses through comprehensive samyama."
            },
            {
              verse: "3.48 • Swiftness of Mind",
              devanagari: "ततो मनोजवित्वं विकरणभावः प्रधानजयश्च ॥",
              sanskrit: "tatō manōjavitvaṃ vikaraṇabhāvaḥ pradhānajayaśca ॥",
              translation: "From that comes swiftness of mind, independence of instruments, and mastery over the primal cause.",
              meaning: "Swiftness of mind and mastery over Prakriti (primordial nature)."
            },
            {
              verse: "3.49 • Knowledge of Self",
              devanagari: "सत्त्वपुरुषान्यताख्यातिमात्रस्य सर्वभावाधिष्ठातृत्वं सर्वज्ञातृत्वञ्च ॥",
              sanskrit: "sattvapuruṣānyatākhyātimātrasya sarvabhāvādhiṣṭātṛtvaṃ sarvajñātṛtvañca ॥",
              translation: "For one who recognizes the distinction between the intellect and the Self, comes sovereignty over all states of being and omniscience.",
              meaning: "Omniscience and sovereignty over all states through Self-knowledge."
            },
            {
              verse: "3.50 • Non-attachment to Powers",
              devanagari: "तद्वैराग्यादपि दोषबीजक्षये कैवल्यम् ॥",
              sanskrit: "tadvairāgyādapi dōṣabījakṣayē kaivalyam ॥",
              translation: "By non-attachment even to that, the seeds of bondage are destroyed and isolation follows.",
              meaning: "Non-attachment to powers leads to liberation and destruction of karmic seeds."
            },
            {
              verse: "3.51 • Invitation from Celestials",
              devanagari: "स्थान्युपनिमन्त्रणे सङ्गस्मयाकरणं पुनरनिष्टप्रसङ्गात् ॥",
              sanskrit: "sthānyupanimantraṇē saṅgasmayākaraṇaṃ punaraniṣṭaprasaṅgāt ॥",
              translation: "When invited by celestial beings, there should be no attachment or pride, lest evil arise again.",
              meaning: "Warning against attachment to celestial invitations to avoid renewed bondage."
            },
            {
              verse: "3.52 • Knowledge of Moments",
              devanagari: "क्षणतत्क्रमयोः संयमाद्विवेकजं ज्ञानम् ॥",
              sanskrit: "kṣaṇatatkramayōḥ saṃyamādvivēkajaṃ jñānam ॥",
              translation: "By constraint on moments and their sequence comes discriminative knowledge.",
              meaning: "Knowledge that discriminates reality from illusion through time samyama."
            },
            {
              verse: "3.53 • Knowledge of Similar Things",
              devanagari: "जातिलक्षणदेशैरन्यतानवच्छेदात् तुल्ययोस्ततः प्रतिपत्तिः ॥",
              sanskrit: "jātilakṣaṇadēśairanyatānavacchēdāt tulyayōstataḥ pratipattiḥ ॥",
              translation: "From that comes the knowledge of two similar things which are not confused by difference of species, characteristics, or position.",
              meaning: "Clear discrimination between similar things regardless of external differences."
            },
            {
              verse: "3.54 • Transcendental Knowledge",
              devanagari: "तारकं सर्वविषयं सर्वथाविषयमक्रमं चेति विवेकजं ज्ञानम् ॥",
              sanskrit: "tārakaṃ sarvaviṣayaṃ sarvathāviṣayamakramaṃ cēti vivēkajaṃ jñānam ॥",
              translation: "The knowledge that is born of discrimination is transcendent, includes all objects, all conditions, and is beyond succession.",
              meaning: "Transcendental knowledge that liberates, encompassing all and beyond sequence."
            },
            {
              verse: "3.55 • Supreme Liberation",
              devanagari: "सत्त्वपुरुषयोः शुद्धिसाम्ये कैवल्यम् ॥",
              sanskrit: "sattvapuruṣayōḥ śuddhisāmyē kaivalyam ॥",
              translation: "When there is equality of purity between the intellect and the Self, isolation comes.",
              meaning: "Final liberation when intellect becomes as pure as Self, leading to complete isolation."
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
            },
            {
              verse: "4.11 • Dependence on Cause and Effect",
              devanagari: "हेतुफलाश्रयालम्बनैः सङ्गृहीतत्वातेषामभावेतदभावः ॥",
              sanskrit: "hētuphalāśrayālambanaiḥ saṅgṛhītatvātēṣāmabhāvētadabhāvaḥ ॥",
              translation: "Being held together by cause, effect, basis, and support, with the disappearance of these, they too disappear.",
              meaning: "Samskaras disappear when their supporting conditions (cause, effect, basis, and object) cease."
            },
            {
              verse: "4.12 • Reality of Past and Future",
              devanagari: "अतीतानागतं स्वरूपतोऽस्त्यध्वभेदाद्धर्माणाम् ॥",
              sanskrit: "atītānāgataṃ svarūpatō'styadhvabhēdāddharmāṇām ॥",
              translation: "Past and future exist in reality, the properties of objects being different in different time phases.",
              meaning: "Time is real, and objects have different properties in different times (past, present, future)."
            },
            {
              verse: "4.13 • Manifest and Subtle Properties",
              devanagari: "ते व्यक्तसूक्ष्मा गुणात्मानः ॥",
              sanskrit: "tē vyaktasūkṣmā guṇātmānaḥ ॥",
              translation: "Whether manifest or subtle, they are composed of the three gunas.",
              meaning: "All objects, manifest or unmanifest, consist of the three gunas (sattva, rajas, tamas)."
            },
            {
              verse: "4.14 • Reality of Objects",
              devanagari: "परिणामैकत्वाद्वस्तुतत्त्वम् ॥",
              sanskrit: "pariṇāmaikatvādvastutattvam ॥",
              translation: "The reality of the object is due to the uniformity of the transformation.",
              meaning: "The essence of an object is its consistent mode of transformation through the gunas."
            },
            {
              verse: "4.15 • Different Paths Due to Different Minds",
              devanagari: "वस्तुसाम्ये चित्तभेदात्तयोर्विभक्तः पन्थाः ॥",
              sanskrit: "vastusāmye cittabhedāttayōrvibhaktaḥ panthāḥ ॥",
              translation: "The object being the same, the difference in the minds perceiving it creates different paths.",
              meaning: "Different minds perceive the same object differently, leading to different experiences and paths."
            },
            {
              verse: "4.16 • Independence of Objects",
              devanagari: "न चैकचित्ततन्त्रं वस्तु तत्प्रमाणकं तदा किं स्यात् ॥",
              sanskrit: "na caikacittatantraṃ vastu tatpramāṇakaṃ tadā kiṃ syāt ॥",
              translation: "Nor does an object depend on a single mind, for if it did, what would become of it when not cognized by that mind?",
              meaning: "Objects exist independently of individual perception; they don't vanish when unperceived by a particular mind."
            },
            {
              verse: "4.17 • Known and Unknown Objects",
              devanagari: "तदुपरागापेक्षित्वाच्चित्तस्य वस्तु ज्ञाताज्ञातम् ॥",
              sanskrit: "taduparāgāpēkṣitvāccittasya vastu jñātājñātam ॥",
              translation: "An object is known or unknown according to the coloring of the mind that perceives it.",
              meaning: "Knowledge depends on the state of the perceiving mind; objects are known or unknown based on mental conditioning."
            },
            {
              verse: "4.18 • The Knower is Always Known",
              devanagari: "सदा ज्ञाताश्चित्तवृत्तयः तत्प्रभोः पुरुषस्यापरिणामित्वात् ॥",
              sanskrit: "sadā jñātāścittavṛttayaḥ tatprabhōḥ puruṣasyāpariṇāmitvāt ॥",
              translation: "The modifications of the mind are always known to its lord, due to the immutability of the Purusha.",
              meaning: "Purusha (consciousness) always witnesses the mind's activities, being unchanging and eternal."
            },
            {
              verse: "4.19 • The Mind is Not Self-luminous",
              devanagari: "न तत्स्वाभासं दृश्यत्वात् ॥",
              sanskrit: "na tatsvābhāsaṃ dṛśyatvāt ॥",
              translation: "The mind is not self-luminous, for it is perceptible.",
              meaning: "Mind is an object of perception, not self-illuminating; it requires consciousness to be known."
            },
            {
              verse: "4.20 • Cannot Perceive Both Simultaneously",
              devanagari: "एकसमये चोभयानवधारणम् ॥",
              sanskrit: "ēkasamayē cōbhayānavadhāraṇam ॥",
              translation: "It cannot perceive both itself and the object simultaneously.",
              meaning: "Mind cannot cognize itself and an object at the same time; it requires shifting focus."
            },
            {
              verse: "4.21 • Regressus ad Infinitum",
              devanagari: "चित्तान्तरदृश्ये बुद्धिबुद्धेरतिप्रसङ्गः स्मृतिसङ्करश्च ॥",
              sanskrit: "cittāntaradṛśyē buddhibuddhēratiprasaṅgaḥ smṛtisaṅkaraśca ॥",
              translation: "If one mind were perceived by another, there would be regressus ad infinitum and confusion of memory.",
              meaning: "Infinite regress and memory confusion would result if mind could perceive other minds."
            },
            {
              verse: "4.22 • Consciousness Reflects in Mind",
              devanagari: "चितेरप्रतिसंक्रमायास्तदाकारापत्तौ स्वबुद्धिसंवेदनम् ॥",
              sanskrit: "citērapratisaṃkramāyāstadākārāpattau svabuddhisaṃvedanam ॥",
              translation: "When the unchanging consciousness assumes the form of that mind, then the experience of one's own mind becomes possible.",
              meaning: "Consciousness reflected in mind enables self-awareness, though consciousness itself doesn't change."
            },
            {
              verse: "4.23 • Mind Colored by Seer and Seen",
              devanagari: "द्रष्टृदृश्योपरक्तं चित्तं सर्वार्थम् ॥",
              sanskrit: "draṣṭṛdṛśyoparaktaṃ cittaṃ sarvārtham ॥",
              translation: "The mind, colored by both seer and seen, understands everything.",
              meaning: "Mind reflects both subject (consciousness) and object (phenomena), enabling all cognition."
            },
            {
              verse: "4.24 • Mind with Numerous Impressions",
              devanagari: "तदसंख्येयवासनाभिश्चित्रमपि परार्थं संहत्यकारित्वात् ॥",
              sanskrit: "tadasaṃkhyeyavāsanābhiścitramapi parārthaṃ saṃhatyakāritvāt ॥",
              translation: "Though variegated by innumerable impressions, the mind exists for another, for it acts in association.",
              meaning: "Mind exists for the sake of Purusha (consciousness), though filled with countless impressions."
            },
            {
              verse: "4.25 • Cessation of False Identification",
              devanagari: "विशेषदर्शिन आत्मभावभावनानिवृत्तिः ॥",
              sanskrit: "viśeṣadarśina ātmabhāvabhāvanānivṛttiḥ ॥",
              translation: "For one who sees the distinction, the meditation on the separate self ceases.",
              meaning: "For the realized being, ego-based meditation stops upon recognizing Self-nature."
            },
            {
              verse: "4.26 • Mind Inclined Toward Discrimination",
              devanagari: "तदा विवेकनिम्नं कैवल्यप्राग्भारं चित्तम् ॥",
              sanskrit: "tadā vivēkanimnaṃ kaivalyaprāgbhāraṃ cittam ॥",
              translation: "Then the mind becomes inclined toward discrimination and gravitates toward liberation.",
              meaning: "Mind naturally flows toward liberation after discrimination arises."
            },
            {
              verse: "4.27 • Breaches in Discrimination",
              devanagari: "तच्छिद्रेषु प्रत्ययान्तराणि संस्कारेभ्यः ॥",
              sanskrit: "tacchidrēṣu pratyayāntarāṇi saṃskārēbhyaḥ ॥",
              translation: "In the breaches of discrimination, other thoughts arise from impressions.",
              meaning: "Old impressions may resurface during lapses in discrimination."
            },
            {
              verse: "4.28 • Removal Like Afflictions",
              devanagari: "हानमेषां क्लेशवदुक्तम् ॥",
              sanskrit: "hānamēṣāṃ klēśavaduktam ॥",
              translation: "Their removal is like that of the afflictions, as described before.",
              meaning: "Removing these thoughts is like removing afflictions (through practice and detachment)."
            },
            {
              verse: "4.29 • The Cloud of Dharma Samādhi",
              devanagari: "प्रसंख्यानेऽप्यकुसीदस्य सर्वथाविवेकख्यातेर्धर्ममेघः समाधिः ॥",
              sanskrit: "prasaṃkhyāne'pyakusīdasya sarvathāvivēkakhyāterdharmamēghaḥ samādhiḥ ॥",
              translation: "For one who remains undistracted even in the highest discrimination, comes the cloud of virtue samādhi.",
              meaning: "Dharma Megha Samadhi - the final samadhi that showers virtues like a cloud."
            },
            {
              verse: "4.30 • Cessation of Afflictions and Karma",
              devanagari: "ततः क्लेशकर्मनिवृत्तिः ॥",
              sanskrit: "tataḥ klēśakarmanivṛttiḥ ॥",
              translation: "From that comes the cessation of afflictions and karma.",
              meaning: "All suffering and karma cease in Dharma Megha Samadhi."
            },
            {
              verse: "4.31 • Infinite Knowledge",
              devanagari: "तदा सर्वावरणमलापेतस्य ज्ञानस्यानन्त्यात् ज्ञेयमल्पम् ॥",
              sanskrit: "tadā sarvāvaraṇamalāpētasya jñānasyānantyāt jñēyamalpam ॥",
              translation: "Then, all coverings and impurities being removed, knowledge becomes infinite, and what remains to be known is little.",
              meaning: "Knowledge becomes limitless, with little left unknown after all veils are removed."
            },
            {
              verse: "4.32 • Completion of the Gunas' Purpose",
              devanagari: "ततः कृतार्थानां परिणामक्रमसमाप्तिर्गुणानाम् ॥",
              sanskrit: "tataḥ kṛtārthānāṃ pariṇāmakramasamāptirguṇānām ॥",
              translation: "Then the gunas, having fulfilled their purpose, cease their sequential transformations.",
              meaning: "The gunas complete their work and stop their transformative activities."
            },
            {
              verse: "4.33 • Sequence Perceived at End of Transformation",
              devanagari: "क्षणप्रतियोगी परिणामापरान्तनिर्ग्राह्यः क्रमः ॥",
              sanskrit: "kṣaṇapratiyōgī pariṇāmāparāntanirgrāhyaḥ kramaḥ ॥",
              translation: "Sequence is the succession of moments perceived at the final end of transformation.",
              meaning: "Time as perceived at transformation's end - the cessation of sequential moments."
            },
            {
              verse: "4.34 • Liberation",
              devanagari: "पुरुषार्थशून्यानां गुणानां प्रतिप्रसवः कैवल्यं स्वरूपप्रतिष्ठा वा चितिशक्तिरिति ॥",
              sanskrit: "puruṣārthaśūnyānāṃ guṇānāṃ pratiprasavaḥ kaivalyaṃ svarūpapratiṣṭhā vā citiśaktiriti ॥",
              translation: "Liberation is the reversal of the gunas, now empty of purpose for the Purusha; it is the establishment of the power of consciousness in its own nature.",
              meaning: "Final liberation - consciousness established in itself, gunas withdrawn into their source."
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
            },
            {
              verse: "1.11 • 忆持不失",
              devanagari: "अनुभूतविषयासम्प्रमोषः स्मृतिः ॥",
              sanskrit: "anubhūta viṣayāsampramoṣaḥ smṛtiḥ ॥",
              translation: "曾所缘境，不失不昧，是谓记忆。",
              meaning: "记忆是对已经验事物的留存。"
            },
            {
              verse: "1.12 • 修离止波",
              devanagari: "अभ्यासवैराग्याभ्यां तन्निरोधः ॥",
              sanskrit: "abhyāsa vairāgyābhyāṃ tannirodhaḥ ॥",
              translation: "修习与离欲，可伏心波。",
              meaning: "实践与超脱是控制心念的关键。"
            },
            {
              verse: "1.13 • 勤修守意",
              devanagari: "तत्र स्थितौ यत्नोऽभ्यासः ॥",
              sanskrit: "tatra sthitau yatno'bhyāsaḥ ॥",
              translation: "于安住位，勤作不息，是名修习。",
              meaning: "持续努力保持稳定状态就是修习。"
            },
            {
              verse: "1.14 • 久修地基",
              devanagari: "स तु दीर्घकालनैरन्तर्यसत्कारासेवितो दृढभूमिः ॥",
              sanskrit: "sa tu dīrgha kāla nairantarya satkārāsevito dṛḍhabhūmiḥ ॥",
              translation: "然此修习，久长无间，虔心奉行，则地基坚固。",
              meaning: "长期不间断的虔敬修习奠定坚实基础。"
            },
            {
              verse: "1.15 • 离欲自在",
              devanagari: "दृष्टानुश्रविकविषयवितृष्णस्य वशीकारसञ्ज्ञा वैराग्यम् ॥",
              sanskrit: "dṛṣṭānuśravika viṣaya vitṛṣṇasya vaśīkārasañjñā vairāgyam ॥",
              translation: "于所见闻之境，心无渴求，得自在力，是谓离欲。",
              meaning: "对所见所闻事物无欲即是超脱。"
            },
            {
              verse: "1.16 • 至上离欲",
              devanagari: "तत्परं पुरुषख्यातेर्गुणवैतृष्ण्यम् ॥",
              sanskrit: "tatparaṃ puruṣa khyāter guṇavaitṛṣṇyam ॥",
              translation: "了知真我，于诸德无求，是为至上离欲。",
              meaning: "认识真我后对三德（悦性、变性、惰性）毫无渴求。"
            },
            {
              verse: "1.17 • 有想三昧",
              devanagari: "वितर्क विचारानन्दास्मितारूपानुगमात् संप्रज्ञातः ॥",
              sanskrit: "vitarka vicārānandāsmitārūpānugamāt saṃprajñātaḥ ॥",
              translation: "有想三昧，随行于粗、细、喜、我四相。",
              meaning: "有认知的三昧伴随四个阶段：粗想、细想、喜悦感、纯粹我感。"
            },
            {
              verse: "1.18 • 无想三昧",
              devanagari: "विरामप्रत्ययाभ्यासपूर्वः संस्कारशेषोऽन्यः ॥",
              sanskrit: "virāma pratyayābhyāsa pūrvaḥ saṃskāraśeṣo'nyaḥ ॥",
              translation: "无想三昧，止心念而修，唯余潜印象。",
              meaning: "超越思想的三昧只留下潜在印记，超越所有认知状态。"
            },
            {
              verse: "1.19 • 无身合道",
              devanagari: "भवप्रत्ययो विदेहप्रकृतिलयानाम् ॥",
              sanskrit: "bhavapratyayo videha prakṛtilayānām ॥",
              translation: "无身者，及合道者，依止于有。",
              meaning: "无形体存在与融合于自然者依赖存在。"
            },
            {
              verse: "1.20 • 信勤念定",
              devanagari: "श्रद्धावीर्यस्मृतिसमाधिप्रज्ञापूर्वक इतरेषाम् ॥",
              sanskrit: "śraddhā vīrya smṛti samādhiprajñā pūrvaka itareṣām ॥",
              translation: "余者依信、勤、念、定、慧而达。",
              meaning: "其他人通过信心、精进、正念、三昧、智慧达成目标。"
            },
            {
              verse: "1.21 • 精进近成",
              devanagari: "तीव्रसंवेगानामासन्नः ॥",
              sanskrit: "tīvrasaṃvegānāmāsannaḥ ॥",
              translation: "志意猛利者，速近于道。",
              meaning: "强烈渴望者快速接近目标。"
            },
            {
              verse: "1.22 • 功分三等",
              devanagari: "मृदुमध्याधिमात्रत्वात्ततोऽपि विशेषः ॥",
              sanskrit: "mṛdu madhyādhimātratvāttato'pi viśeṣaḥ ॥",
              translation: "复因勤修有上中下，成就亦有差殊。",
              meaning: "根据修习强度，成就有不同程度和进展速度。"
            },
            {
              verse: "1.23 • 敬神得道",
              devanagari: "ईश्वरप्रणिधानाद्वा ॥",
              sanskrit: "īśvarapraṇidhānādvā ॥",
              translation: "或由敬奉自在天而得。",
              meaning: "也可以通过虔诚奉献给神（自在天）而达成。"
            },
            {
              verse: "1.24 • 自在真我",
              devanagari: "क्लेशकर्मविपाकाशयैरपरामृष्टः पुरुषविशेष ईश्वरः ॥",
              sanskrit: "kleśa karma vipākāśayairaparāmṛṣṭaḥ puruṣaviśeṣa īśvaraḥ ॥",
              translation: "自在天者，殊胜真我，不染诸恼、业、果与潜印象。",
              meaning: "自在天（神）的定义 - 一种特殊的真我，远离业力束缚。"
            },
            {
              verse: "1.25 • 智种无极",
              devanagari: "तत्र निरतिशयं सर्वज्ञबीजम् ॥",
              sanskrit: "tatra niratiśayaṃ sarvajñabījam ॥",
              translation: "于彼之中，全知种子，无有极限。",
              meaning: "自在天包含无限的知识潜能，是一切智慧的源头。"
            },
            {
              verse: "1.26 • 无始师尊",
              devanagari: "स पूर्वेषामपि गुरुः कालेनानवच्छेदात् ॥",
              sanskrit: "sa pūrveṣām api guruḥ kālenānavacchedāt ॥",
              translation: "彼为太古之师，超越时间。",
              meaning: "自在天是古代圣人的导师，超越时间限制。"
            },
            {
              verse: "1.27 • 圣音为表",
              devanagari: "तस्य वाचकः प्रणवः ॥",
              sanskrit: "tasya vācakaḥ praṇavaḥ ॥",
              translation: "其表徵者，即是圣音“唵”。",
              meaning: "唵（OM）是神的表现形式和象征性声音。"
            },
            {
              verse: "1.28 • 持圣观义",
              devanagari: "तज्जपस्तदर्थभावनम् ॥",
              sanskrit: "tajjapas tadartha bhāvanam ॥",
              translation: "持诵圣音，观想其义。",
              meaning: "唵诵持（japa）实践和对其意义的沉思。"
            },
            {
              verse: "1.29 • 内觉障除",
              devanagari: "ततः प्रत्यक्चेतनाधिगमोऽप्यन्तरायाभावश्च ॥",
              sanskrit: "tataḥ pratyak cetanādhigamo'pyantarāyābhāvaśca ॥",
              translation: "由是得证内觉，诸障亦除。",
              meaning: "唵实践的益处：自我实现和障碍的消除。"
            },
            {
              verse: "1.30 • 九障蔽心",
              devanagari: "व्याधि स्त्यान संशय प्रमादालस्याविरति भ्रान्ति दर्शनालब्धभूमिकत्वानवस्थितत्वानि चित्तविक्षेपास्तेंऽतरायाः ॥",
              sanskrit: "vyādhi styāna saṃśaya pramādālasyāvirati bhrānti darśanālabdhabhūmikatvānavasthitatvāni cittavikṣepāsteṃ'tarāyāḥ ॥",
              translation: "病、昏、疑、放逸、懈怠、贪欲、邪见、不得地、不安住，此九者，乱心为障。",
              meaning: "九种障碍扰乱冥想中的心意专注。"
            },
            {
              verse: "1.31 • 障相俱生",
              devanagari: "दुःख दौर्मनस्याङ्गमेजयत्व श्वासप्रश्वासा विक्षेपसहभुवः ॥",
              sanskrit: "duḥkha daurmanasyāṅgamejayatva śvāsapraśvāsā vikṣepa sahabhuvaḥ ॥",
              translation: "苦、忧、身颤、息乱，与障俱生。",
              meaning: "伴随冥想障碍产生的身心症状。"
            },
            {
              verse: "1.32 • 守一除障",
              devanagari: "तत्प्रतिषेधार्थमेकतत्त्वाभ्यासः ॥",
              sanskrit: "tat pratiṣēdhārthamēkatattvābhyāsaḥ ॥",
              translation: "为防止之，当修一境。",
              meaning: "对治障碍的方法是专注单一真理或实相。"
            },
            {
              verse: "1.33 • 四梵净心",
              devanagari: "मैत्रीकरुणामुदितोपेक्षाणां सुखदुःखपुण्यापुण्य विषयाणाम् भावनातश्चित्तप्रसादनम् ॥",
              sanskrit: "maitrī karuṇā muditōpēkṣāṇāṃ sukha duḥkha puṇyāpuṇya viṣayāṇām bhāvanātaś citta prasādanam ॥",
              translation: "修习慈、悲、喜、舍，于乐苦善恶诸境，令心澄净。",
              meaning: "净化心灵的四种态度：对乐者慈、对苦者悲、对善者喜、对恶者舍。"
            },
            {
              verse: "1.34 • 调息安心",
              devanagari: "प्रच्छर्दनविधारणाभ्यां वा प्राणस्य ॥",
              sanskrit: "pracchardana vidhāraṇābhyāṃ vā prāṇasya ॥",
              translation: "或由出息与持息，调伏其气。",
              meaning: "呼吸控制是稳定心意的另一方法。"
            },
            {
              verse: "1.35 • 住境定心",
              devanagari: "विषयवती वा प्रवृत्तिरुत्पन्ना मनसः स्थिति निबन्धिनी ॥",
              sanskrit: "viṣayavatī vā pravṛttirutpannā manasaḥ sthiti nibandhinī ॥",
              translation: "或由殊妙境相，引心流注，系念安定。",
              meaning: "专注精微对象或体验也能稳定意识。"
            },
            {
              verse: "1.36 • 心光内照",
              devanagari: "विशोका वा ज्योतिष्मती ॥",
              sanskrit: "viśōkā vā jyōtiṣmatī ॥",
              translation: "或观无恼心光，明明不昧。",
              meaning: "观想无烦恼的内在光明。"
            },
            {
              verse: "1.37 • 离欲心住",
              devanagari: "वीतरागविषयं वा चित्तम् ॥",
              sanskrit: "vītarāga viṣayaṃ vā cittam ॥",
              translation: "或缘离欲者心，安住不动。",
              meaning: "观照无执著的心。"
            },
            {
              verse: "1.38 • 梦寐知境",
              devanagari: "स्वप्ननिद्राज्ञानालम्बनं वा ॥",
              sanskrit: "svapna nidrā jñānālambanaṃ vā ॥",
              translation: "或依梦寐睡知，以为所缘。",
              meaning: "以梦和睡眠状态为冥想对象。"
            },
            {
              verse: "1.39 • 随心定境",
              devanagari: "यथाभिमतध्यानाद्वा ॥",
              sanskrit: "yathābhimata dhyānād vā ॥",
              translation: "或随自意所乐，入诸三昧。",
              meaning: "任何能提升心智的对象都可作为专注点。"
            },
            {
              verse: "1.40 • 能摄微巨",
              devanagari: "परमाणुपरममहत्त्वान्तोऽस्य वशीकारः ॥",
              sanskrit: "paramāṇu parama mahattvānto'sya vaśīkāraḥ ॥",
              translation: "瑜伽行者，能摄微尘，亦能制巨物。",
              meaning: "瑜伽士通过专注掌握从极微到极巨的一切存在。"
            },
            {
              verse: "1.41 • 心镜现前",
              devanagari: "क्षीणवृत्तेरभिजातस्येव मणेर्ग्रहीतृग्रहणग्राह्येषु तत्स्थतदञ्जनता समापत्तिः ॥",
              sanskrit: "kṣīṇa vṛttēr abhijātasyēva maṇēr grahītṛ grahaṇa grāhyēṣu tatstha tadañjanatā samāpattiḥ ॥",
              translation: "心波既寂，如净水晶，映照能取、所取及取事，等至成就。",
              meaning: "净化的心像明镜般清晰映照对象，如洁净水晶。"
            },
            {
              verse: "1.42 • 有寻等至",
              devanagari: "तत्र शब्दार्थज्ञानविकल्पैः सङ्कीर्णा सवितर्का समापत्तिः ॥",
              sanskrit: "tatra śabdārtha jñāna vikalpaiḥ saṅkīrṇā savitarkā samāpattiḥ ॥",
              translation: "是时名、义、分别杂糅，名有寻等至。",
              meaning: "有寻等至涉及粗重对象和概念理解。"
            },
            {
              verse: "1.43 • 无寻等至",
              devanagari: "स्मृतिपरिशुद्धौ स्वरूपशून्येवार्थमात्रनिर्भासा निर्वितर्का ॥",
              sanskrit: "smṛti pariśuddhau svarūpa śūnyēvārtha mātranirbhāsā nirvitarkā ॥",
              translation: "忆念清净，唯境显现，离于自相，名无寻等至。",
              meaning: "无寻等至直接揭示对象本质，脱离记忆联想。"
            },
            {
              verse: "1.44 • 有伺无伺",
              devanagari: "एतयैव सविचारा निर्विचारा च सूक्ष्मविषया व्याख्याता ॥",
              sanskrit: "ētayaiva savicārā nirvicārā ca sūkṣmaviṣayā vyākhyātā ॥",
              translation: "如是，有伺、无伺二者，缘细微境，如前已说。",
              meaning: "类似过程适用于精微对象，有分析性反思和无分析性反思两种。"
            },
            {
              verse: "1.45 • 细境归本",
              devanagari: "सूक्ष्मविषयत्वं चालिङ्गपर्यवसानम् ॥",
              sanskrit: "sūkṣma viṣayatvaṃ cāliṅga paryavasānam ॥",
              translation: "细微之境，终至无相原质。",
              meaning: "精微对象最终指向未显化的自然（无相原质）。"
            },
            {
              verse: "1.46 • 有种子定",
              devanagari: "ता एव सबीजः समाधिः ॥",
              sanskrit: "tā ēva sabījaḥ samādhiḥ ॥",
              translation: "此等诸境，皆为有种子定。",
              meaning: "所有这些状态都是有支三昧（有种子三昧）。"
            },
            {
              verse: "1.47 • 无伺心光",
              devanagari: "निर्विचारवैशाराद्येऽध्यात्मप्रसादः ॥",
              sanskrit: "nirvicāra vaiśārādyē’dhyātma prasādaḥ ॥",
              translation: "无伺成就，心光湛然。",
              meaning: "无寻等至的极致产生灵性光明和内在平静。"
            },
            {
              verse: "1.48 • 真智现前",
              devanagari: "ऋतम्भरा तत्र प्रज्ञा ॥",
              sanskrit: "ṛtambharā tatra prajñā ॥",
              translation: "尔时智慧，唯是载道之真。",
              meaning: "在此状态中，生起如实智慧（真实智慧）。"
            },
            {
              verse: "1.49 • 殊胜智慧",
              devanagari: "श्रुतानुमान प्रज्ञाभ्यामन्यविषया विशेषार्थत्वात् ॥",
              sanskrit: "śrutānumāna prajñābhyām anya viṣayā viśeṣārthatvāt ॥",
              translation: "此智所缘，异于闻、思，以其缘殊胜义故。",
              meaning: "这种直接智慧不同于通过学习或推理获得的知识。"
            },
            {
              verse: "1.50 • 伏藏断流",
              devanagari: "तज्जः संस्कारोऽन्यसंस्कार प्रतिबन्धी ॥",
              sanskrit: "tajjaḥ saṃskārō’nya saṃskāra pratibandhī ॥",
              translation: "此智所生潜印象，能伏余诸印象。",
              meaning: "如实智慧产生的印象能抑制所有其他心理印象。"
            },
            {
              verse: "1.51 • 无种三昧",
              devanagari: "तस्यापि निरोधे सर्वनिरोधान्निर्बीजः समाधिः ॥",
              sanskrit: "tasyāpi nirōdhē sarva nirōdhān nirbījaḥ samādhiḥ ॥",
              translation: "若此亦寂，一切心行皆息，乃得无种三昧。",
              meaning: "超越一切支点和种子的终极状态 - 无支三昧（无种子三昧）。"
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
            },
            {
              verse: "2.11 • 静虑除障",
              devanagari: "ध्यानहेयास्तद्वृत्तयः ॥",
              sanskrit: "dhyānahēyāstadvṛttayaḥ ॥",
              translation: "修习静虑，可伏彼等心行。",
              meaning: "冥想消解烦恼的表现。"
            },
            {
              verse: "2.12 • 业种潜藏",
              devanagari: "क्लेशमूलः कर्माशयो दृष्टादृष्टजन्मवेदनीयः ॥",
              sanskrit: "klēśa mūlaḥ karmāśayō dṛṣṭādṛṣṭa janma vēdanīyaḥ ॥",
              translation: "烦恼为根，业种潜隐，或现世或来生，终须尝受。",
              meaning: "业力的积累及其多世后果。"
            },
            {
              verse: "2.13 • 业果相续",
              devanagari: "सति मूले तद् विपाकोजात्यायुर्भोगाः ॥",
              sanskrit: "sati mūlē tad vipākōjātyāyur bhōgāḥ ॥",
              translation: "根本若在，业果遂成，感召族类、寿量、境遇。",
              meaning: "业力显现为出生类型、寿命和体验。"
            },
            {
              verse: "2.14 • 业分善恶",
              devanagari: "ते ह्लादपरितापफलाः पुण्यापुण्यहेतुत्वात् ॥",
              sanskrit: "tē hlāda paritāpa phalāḥ puṇyāpuṇya hētutvāt ॥",
              translation: "业有善恶，故果有喜忧。",
              meaning: "善业带来快乐，恶业带来痛苦。"
            },
            {
              verse: "2.15 • 有智皆苦",
              devanagari: "परिणामतापसंस्कारदुःखैर्गुणवृत्ति विरोधाच्च दुःखमेव सर्वं विवेकिनः ॥",
              sanskrit: "pariṇāma tāpa saṃskāra duḥkhair guṇa vṛttivirōdhāc ca duḥkham ēva sarvaṃ vivēkinaḥ ॥",
              translation: "于明辨者，万物皆苦，缘于变易、焦灼、习气，及三德相争。",
              meaning: "智者看透世间一切皆为苦，皆因无常、焦虑、习气及三德相争。"
            },
            {
              verse: "2.16 • 预杜苦因",
              devanagari: "हेयं दुःखमनागतम् ॥",
              sanskrit: "hēyaṃ duḥkham anāgatam ॥",
              translation: "未来之苦，当预先杜其根源。",
              meaning: "未来的痛苦可以通过灵修实践来防止。"
            },
            {
              verse: "2.17 • 能所结合",
              devanagari: "द्रष्टृदृश्ययोः संयोगो हेयहेतुः॥",
              sanskrit: "draṣṭṛ dṛśyayōḥ saṃyōgō hēya hētuḥ॥",
              translation: "能见与所见结合，即是一切苦因。",
              meaning: "痛苦的根本原因是意识与对象的错误认同。"
            },
            {
              verse: "2.18 • 所见本质",
              devanagari: "प्रकाश क्रिया स्थितिशीलं भूतेन्द्रियात्मकं भोगापवर्गार्थं दृश्यम् ॥",
              sanskrit: "prakāśa kriyā sthitiśīlaṃ bhūtēndriyātmakaṃ bhōgāpavargārthaṃ dṛśyam ॥",
              translation: "所见之境，具光明、造作、持守之性，含元素、诸根，为经验与解脱而存。",
              meaning: "现象世界的本质包含三德，由元素和感官构成，为体验导向解脱而存在。"
            },
            {
              verse: "2.19 • 三德四阶",
              devanagari: "विशेषाविशेषलिङ्गमात्रालिङ्गानि गुणपर्वाणि ॥",
              sanskrit: "viśēṣāviśēṣa liṅgamātrāliṅgāni guṇa parvāṇi ॥",
              translation: "三德有四阶：具象、抽象、本因、绝对。",
              meaning: "三德的四个显现层次：具体、一般、微妙、未显化。"
            },
            {
              verse: "2.20 • 能见独存",
              devanagari: "द्रष्टा दृशिमात्रः शुद्धोऽपि प्रत्ययानुपश्यः ॥",
              sanskrit: "draṣṭā dṛśimātraḥ śuddhō'pi pratyayānupaśyaḥ ॥",
              translation: "能见者纯然观照，虽本清净，却借心识而显。",
              meaning: "真我是纯粹觉知，看似通过心意的波动来感知。"
            },
            {
              verse: "2.21 • 境为识用",
              devanagari: "तदर्थ एव दृश्यस्यात्मा ॥",
              sanskrit: "tadartha ēva dṛśyasyātmā ॥",
              translation: "所见万有，存在之意义，唯在服务于能见者。",
              meaning: "现象世界为意识的体验和导向解脱而存在。"
            },
            {
              verse: "2.22 • 对己已灭",
              devanagari: "कृतार्थं प्रति नष्टमप्यनष्टं तदन्यसाधारणत्वात् ॥",
              sanskrit: "kṛtārthaṃ prati naṣṭam apyanaṣṭaṃ tad anya sādhāraṇatvāt ॥",
              translation: "对已悟者，境相虽灭，然于他人仍在，以其为共业所现。",
              meaning: "对觉悟者世界失去真实性，但对无明者依然存在。"
            },
            {
              verse: "2.23 • 能所结合",
              devanagari: "स्व स्वामि शक्त्योः स्वरूपोपलब्धिहेतुः संयोगः ॥",
              sanskrit: "sva svāmi śaktyōḥ svarūpōpalabdhihētuḥ saṃyōgaḥ ॥",
              translation: "能所结合，旨在令拥有者（真我）与所有物（原质）认知各自本性。",
              meaning: "错误的认同服务于自我觉悟的目的，通过对比能见与所见。"
            },
            {
              verse: "2.24 • 无明为因",
              devanagari: "तस्य हेतुरविद्या ॥",
              sanskrit: "tasya hēturavidyā ॥",
              translation: "此结合之因，即是无明。",
              meaning: "无明是错误认同的根本原因。"
            },
            {
              verse: "2.25 • 无明既消",
              devanagari: "तदभावात् संयोगाभावो हानं तद् दृशेः कैवल्यम् ॥",
              sanskrit: "tad abhāvāt saṃyōgābhāvō hānaṃ tad dṛśēḥ kaivalyam ॥",
              translation: "无明既消，结合亦亡，此即解脱，能见者独存。",
              meaning: "消除无明即得解脱（独存），意识原理获得自由。"
            },
            {
              verse: "2.26 • 明辨不断",
              devanagari: "विवेकख्यातिरविप्लवा हानोपायः ॥",
              sanskrit: "vivēkakhyātiraviplavā hānōpāyaḥ ॥",
              translation: "无间之明辨智慧，乃断除之道。",
              meaning: "稳定区分真我与非真我的智慧（明辨智）能断无明。"
            },
            {
              verse: "2.27 • 七觉圆满",
              devanagari: "तस्य सप्तधा प्रान्तभूमिः प्रज्ञा ॥",
              sanskrit: "tasya saptadhā prāntabhūmiḥ prajñā ॥",
              translation: "彼之智慧，七重究竟。",
              meaning: "导致完全觉悟的明辨智慧的七个阶段。"
            },
            {
              verse: "2.28 • 修持八支",
              devanagari: "योगाङ्गानुष्ठानादशुद्धिक्षये ज्ञानदीप्तिराविवेकख्यातेः ॥",
              sanskrit: "yōgāṅgānuṣṭhānād aśuddhi kṣayē jñānadīptir āvivēkakhyātēḥ ॥",
              translation: "勤修八支，净业消泯，慧光显发，终至明辨。",
              meaning: "瑜伽修持净化身心，导向智慧，最终成就明辨智。"
            },
            {
              verse: "2.29 • 八支列举",
              devanagari: "यमनियमासनप्राणायामप्रत्याहारधारणाध्यानसमाधयोऽष्टावङ्गानि ॥",
              sanskrit: "yama niyamāsana prāṇāyāma pratyāhāra dhāraṇā dhyāna samādhayō'ṣṭāvaṅgāni ॥",
              translation: "禁制、劝制、坐法、调息、制感、执持、静虑、三昧，是谓八支。",
              meaning: "著名的八支瑜伽体系：禁制、劝制、坐法、调息、制感、执持、静虑、三昧。"
            },
            {
              verse: "2.30 • 五戒根本",
              devanagari: "अहिंसासत्यास्तेयब्रह्मचर्यापरिग्रहा यमाः ॥",
              sanskrit: "ahiṃsā satyāstēya brahmacaryāparigrahā yamāḥ ॥",
              translation: "不害、谛语、不盗、梵行、不贪，是为根本五戒。",
              meaning: "五项道德戒律（禁制）：不害、诚实、不偷盗、梵行、不贪。"
            },
            {
              verse: "2.31 • 普世大戒",
              devanagari: "जातिदेशकालसमयानवच्छिन्नाः सार्वभौमा महाव्रतम् ॥",
              sanskrit: "jāti dēśa kāla samayānavacchinnāḥ sārvabhaumā mahāvratam ॥",
              translation: "此大誓戒，普世恒常，不囿种姓、地域、时际、境缘。",
              meaning: "禁制是普遍的原则，没有例外，适用于一切情况。"
            },
            {
              verse: "2.32 • 五德内修",
              devanagari: "शौचसन्तोषतपः स्वाध्यायेश्वरप्रणिधानानि नियमाः ॥",
              sanskrit: "śauca santōṣa tapaḥ svādhyāyēśvarapraṇidhānāni niyamāḥ ॥",
              translation: "清净、知足、苦行、诵习、敬神，是为内修五德。",
              meaning: "五项个人修炼（劝制）：清净、知足、苦行、自我研习、敬奉神。"
            },
            {
              verse: "2.33 • 对治妄念",
              devanagari: "वितर्कबाधने प्रतिपक्षभावनम् ॥",
              sanskrit: "vitarka bādhanē pratipakṣa bhāvanam ॥",
              translation: "邪念侵扰时，当修对治观想。",
              meaning: "用积极思想对治消极念头（对治观想法）。"
            },
            {
              verse: "2.34 • 念起三端",
              devanagari: "वितर्का हिंसादयः कृतकारितानुमोदिता लोभक्रोधमोहपूर्वका मृदुमध्याधिमात्रा दुःखाज्ञानानन्तफला इति प्रतिपक्षभावनम् ॥",
              sanskrit: "vitarkā hiṃsādayaḥ kṛta kāritānumōditā lōbha krōdha mōha pūrvakā mṛdu madhyādhimātrā duḥkhājñānānanta phalā iti pratipakṣa bhāvanam ॥",
              translation: "害心等念，或自作、教他、随喜，贪嗔痴为因，分弱中强三品，招苦患无明，当修对治。",
              meaning: "有害思想及其对治的详细说明，基于强度和来源。"
            },
            {
              verse: "2.35 • 不害成就",
              devanagari: "अहिंसाप्रतिष्ठायां तत्सन्निधौ वैरत्यागः ॥",
              sanskrit: "ahiṃsā pratiṣṭhāyāṃ tat sannidhau vaira tyāgaḥ ॥",
              translation: "不害坚立，则周遭众生尽释仇怨。",
              meaning: "完美不害的效果：众生在瑜伽士面前停止敌意。"
            },
            {
              verse: "2.36 • 谛语成就",
              devanagari: "सत्यप्रतिष्ठायां क्रियाफलाश्रयत्वम् ॥",
              sanskrit: "satya pratiṣṭhāyāṃ kriyāphalāśrayatvam ॥",
              translation: "谛语坚立，则言行因果皆得成就。",
              meaning: "完美诚实的威力：瑜伽士的言语成为现实。"
            },
            {
              verse: "2.37 • 不盗致宝",
              devanagari: "अस्तेयप्रतिष्ठायां सर्वरत्नोपस्थानम् ॥",
              sanskrit: "astēyapratiṣṭhāyāṃ sarvaratnōpasthānam ॥",
              translation: "不盗坚立，则众宝自然云集。",
              meaning: "完美不偷盗的效果：一切珍宝自然呈现给瑜伽士。"
            },
            {
              verse: "2.38 • 梵行成就",
              devanagari: "ब्रह्मचर्यप्रतिष्ठायां वीर्यलाभः ॥",
              sanskrit: "brahmacarya pratiṣṭhāyāṃ vīryalābhaḥ ॥",
              translation: "梵行坚立，则精气充盈。",
              meaning: "完美梵行的效果：保存和增长生命力。"
            },
            {
              verse: "2.39 • 不贪知源",
              devanagari: "अपरिग्रहस्थैर्ये जन्मकथन्तासम्बोधः ॥",
              sanskrit: "aparigraha sthairyē janmakathantā sambōdhaḥ ॥",
              translation: "不贪稳固，则洞悉生命源流。",
              meaning: "完美不贪的效果：理解存在的本质。"
            },
            {
              verse: "2.40 • 清净成就",
              devanagari: "शौचात् स्वाङ्गजुगुप्सा परैरसंसर्गः ॥",
              sanskrit: "śaucāt svāṅgajugupsā parairasaṃsargaḥ ॥",
              translation: "由身清净，生厌离想，不染尘缘。",
              meaning: "清净（净化）的效果：对身体产生厌离，不执著他人。"
            },
            {
              verse: "2.41 • 心镜明澈",
              devanagari: "सत्त्वशुद्धिसौमनस्यैकाग्य्रेन्द्रियजयात्मदर्शनयोग्यत्वानि च ॥",
              sanskrit: "sattvaśuddhi saumanasyaikāgyrēndriyajayātmadarśana yōgyatvāni ca ॥",
              translation: "心质纯净、意悦专一、诸根调伏、堪见真我。",
              meaning: "清净的进一步益处：心质明净、喜悦、专注、感官控制、觉悟准备。"
            },
            {
              verse: "2.42 • 知足常乐",
              devanagari: "सन्तोषादनुत्तमःसुखलाभः ॥",
              sanskrit: "santōṣādanuttamaḥ sukhalābhaḥ ॥",
              translation: "安于知足，得至上的喜乐。",
              meaning: "知足的效果：获得至高喜乐。"
            },
            {
              verse: "2.43 • 苦行成德",
              devanagari: "कायेन्द्रियसिद्धिरशुद्धिक्षयात् तपसः ॥",
              sanskrit: "kāyēndriya siddhiraśuddhikṣayāt tapasaḥ ॥",
              translation: "苦行净垢，成就身心诸根圆满。",
              meaning: "苦行的效果：净化导致身心感官能力的完美。"
            },
            {
              verse: "2.44 • 诵习感通",
              devanagari: "स्वाध्यायादिष्टदेवतासम्प्रयोगः ॥",
              sanskrit: "svādhyāyādiṣṭadēvatāsamprayōgaḥ ॥",
              translation: "诵持圣典，感通所敬之神。",
              meaning: "自我研习的效果：与自己选择的神圣形式建立连接。"
            },
            {
              verse: "2.45 • 敬神得定",
              devanagari: "समाधिसिद्धिरीश्वरप्रणिधानात् ॥",
              sanskrit: "samādhisiddhir īśvarapraṇidhānāt ॥",
              translation: "虔信敬神，成就三昧。",
              meaning: "皈依神的效果：成就三昧状态。"
            },
            {
              verse: "2.46 • 坐法安稳",
              devanagari: "स्थिरसुखमासनम् ॥",
              sanskrit: "sthira sukhamāsanam ॥",
              translation: "坐法者，安稳自在。",
              meaning: "坐法的定义：稳定而舒适的姿势。"
            },
            {
              verse: "2.47 • 无勉融遍",
              devanagari: "प्रयत्नशैथिल्यानन्तसमापत्तिभ्याम् ॥",
              sanskrit: "prayatna śaithilyānanta samāpattibhyām ॥",
              translation: "放松造作，心合无限。",
              meaning: "完善坐法的方法：努力放松，沉思无限。"
            },
            {
              verse: "2.48 • 不堕二边",
              devanagari: "ततो द्वन्द्वानभिघातः ॥",
              sanskrit: "tatō dvandvānabhighātaḥ ॥",
              translation: "由是，不堕对立二边。",
              meaning: "完美坐法的结果：超越苦乐、冷热等对立。"
            },
            {
              verse: "2.49 • 调息摄气",
              devanagari: "तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः ॥",
              sanskrit: "tasmin sati śvāsapraśvāsayōrgativicchēdaḥ prāṇāyāmaḥ ॥",
              translation: "坐法既成，调节出入息，是谓调息。",
              meaning: "调息的定义：在掌握坐法后控制吸气和呼气。"
            },
            {
              verse: "2.50 • 气息三相",
              devanagari: "बाह्याभ्यन्तरस्तम्भवृत्तिर्देशकालसंख्याभिः परिदृष्टो दीर्घसूक्ष्मः ॥",
              sanskrit: "bāhyābhyantara stambhavṛttirdēśakāla saṃkhyābhiḥ paridṛṣṭō dīrghasūkṣmaḥ ॥",
              translation: "外息、内息、屏息三相，依处、时、数调节，转为深细。",
              meaning: "调息的三种类型及其特性：呼气、吸气、屏息 - 经过调节而精微。"
            },
            {
              verse: "2.51 • 息念双泯",
              devanagari: "बाह्याभ्यन्तरविषयाक्षेपी चतुर्थः ॥",
              sanskrit: "bāhyābhyantara viṣayākṣēpī caturthaḥ ॥",
              translation: "超越内外所缘，是为第四调息。",
              meaning: "最高类型的调息超越吸气和呼气。"
            },
            {
              verse: "2.52 • 光明显发",
              devanagari: "ततः क्षीयते प्रकाशावरणम् ॥",
              sanskrit: "tataḥ kṣīyatē prakāśāvaraṇam ॥",
              translation: "由此，心光障蔽消融。",
              meaning: "完美调息的效果：移除内在光明的遮蔽。"
            },
            {
              verse: "2.53 • 心堪执持",
              devanagari: "धारणासु च योग्यता मनसः ॥",
              sanskrit: "dhāraṇāsu ca yōgyatā manasaḥ ॥",
              translation: "意识堪任执持。",
              meaning: "调息后心意准备好进入执持（专注）。"
            },
            {
              verse: "2.54 • 诸根内摄",
              devanagari: "स्वविषयासम्प्रयोगे चित्तस्वरूपानुकार इवेन्द्रियाणां प्रत्याहारः ॥",
              sanskrit: "svaviṣayāsamprayōgē cittasvarūpānukāra ivēndriyāṇāṃ pratyāhāraḥ ॥",
              translation: "诸根离境，仿心本性，是谓制感。",
              meaning: "制感的定义：感官从对象撤回，随心意向内转。"
            },
            {
              verse: "2.55 • 究竟调伏",
              devanagari: "ततः परमा वश्यतेन्द्रियाणाम् ॥",
              sanskrit: "tataḥ paramā vaśyatēndriyāṇām ॥",
              translation: "由是，诸根究竟调伏。",
              meaning: "完美制感的结果：对所有感官功能的完全控制。"
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
            },
            {
              verse: "3.11 • 定心转相",
              devanagari: "सर्वार्थतैकाग्रातयोः क्षयोदयौ चित्तस्य समाधिपरिणामः ॥",
              sanskrit: "sarvārthataikāgrātayōḥ kṣayōdayau cittasya samādhipariṇāmaḥ ॥",
              translation: "万缘放下与一心不乱此消彼长，是谓定转。",
              meaning: "三昧转化的定义 - 从散乱到一心专注的转变。"
            },
            {
              verse: "3.12 • 等持心转",
              devanagari: "ततः पुनः शान्तोदितौ तुल्यप्रत्ययौ चित्तस्यैकाग्रता परिणामः ॥",
              sanskrit: "tataḥ punaḥ śāntōditau tulyapratyayau cittasyaikāgratā pariṇāmaḥ ॥",
              translation: "继而过去现在心念平等，是谓等持转。",
              meaning: "一心不乱转化的定义 - 当心的波动平息与生起达到平衡时的状态。"
            },
            {
              verse: "3.13 • 性相境转",
              devanagari: "एतेन भूतेन्द्रियेषु धर्मलक्षणावस्थापरिणामा व्याख्याताः ॥",
              sanskrit: "ētēna bhūtēndriyēṣu dharmalakṣaṇāvasthāpariṇāmā vyākhyātāḥ ॥",
              translation: "由此说诸大诸根性相境转。",
              meaning: "总持解释物质和感官在本质、特性、状态三个层面的转化。"
            },
            {
              verse: "3.14 • 基质恒存",
              devanagari: "शान्तोदिताव्यपदेश्यधर्मानुपाती धर्मी ॥",
              sanskrit: "śāntōditāvyapadēśyadharmānupātī dharmī ॥",
              translation: "基质恒存，涵摄过去现在未来诸性。",
              meaning: "底层实存通过过去、现在、潜在三种状态显现。"
            },
            {
              verse: "3.15 • 序异果别",
              devanagari: "क्रमान्यत्वं परिणामान्यत्वे हेतुः ॥",
              sanskrit: "kramānyatvaṃ pariṇāmānyatvē hētuḥ ॥",
              translation: "序列不同，故转化有别。",
              meaning: "不同序列导致显现过程中的不同转化。"
            },
            {
              verse: "3.16 • 通晓古今",
              devanagari: "परिणामत्रयसंयमादतीतानागतज्ञानम् ॥",
              sanskrit: "pariṇāmatrayasaṃyamādatītānāgatajñānam ॥",
              translation: "总持三转，能知过去未来。",
              meaning: "第一种神通 - 通过掌握转化序列知晓过去未来。"
            },
            {
              verse: "3.17 • 通晓众声",
              devanagari: "शब्दार्थप्रत्ययानामितरेतराध्यासात् सङ्करस्तत्प्रविभागसंयमात् सर्वभूतरुतज्ञानम् ॥",
              sanskrit: "śabdārthapratyayānāmitarētarādhyāsāt saṅkarastatpravibhāgasaṃyamāt sarvabhūtarutajñānam ॥",
              translation: "名、义、想互杂，总持其别，能解众生音声。",
              meaning: "通过辨别词-物-念的关系，知晓所有语言和生物声音。"
            },
            {
              verse: "3.18 • 照见前生",
              devanagari: "संस्कारसाक्षात्करणात् पूर्वजातिज्ञानम् ॥",
              sanskrit: "saṃskārasākṣātkaraṇāt pūrvajātijñānam ॥",
              translation: "直观潜印象，能知宿命。",
              meaning: "通过直接观察潜在印象（行）知晓过去世。"
            },
            {
              verse: "3.19 • 照见他心",
              devanagari: "प्रत्ययस्य परचित्तज्ञानम् ॥",
              sanskrit: "pratyayasya paracittajñānam ॥",
              translation: "总持心念，能知他心。",
              meaning: "他心通 - 通过掌握心念波动读取他人思想。"
            },
            {
              verse: "3.20 • 知心非境",
              devanagari: "न च तत् सालम्बनं तस्याविषयीभूतत्वात् ॥",
              sanskrit: "na ca tat sālambanaṃ tasyāviṣayībhūtatvāt ॥",
              translation: "然不知其境，以境非所知故。",
              meaning: "无法知道他人思想的对象，只能知道思想本身，因为对象没有被直接感知。"
            },
            {
              verse: "3.21 • 身形隐没",
              devanagari: "कायरूपसंयमात् तद्ग्राह्यशक्तिस्तम्भे चक्षुः प्रकाशासम्प्रयोगेऽन्तर्धानम् ॥",
              sanskrit: "kāyarūpasaṃyamāt tadgrāhyaśaktistambhē cakṣuḥ prakāśāsamprayōgē'ntardhānam ॥",
              translation: "总持身相，止其可被感知力，断眼与光接，身遂隐没。",
              meaning: "通过控制身体形态和感知实现隐身神通。"
            },
            {
              verse: "3.22 • 预知寿终",
              devanagari: "सोपक्रमं निरुपक्रमं च कर्म तत्संयमादपरान्तज्ञानमरिष्टेभ्यो वा ॥",
              sanskrit: "sōpakramaṃ nirupakramaṃ ca karma tatsaṃyamādaparāntajñānamariṣṭēbhyō vā ॥",
              translation: "总持业行（有始无始），或观凶兆，能知命终。",
              meaning: "通过业力分析或征兆知晓死亡时间。"
            },
            {
              verse: "3.23 • 慈力成就",
              devanagari: "मैत्र्यादिषु बलानि ॥",
              sanskrit: "maitryādiṣu balāni ॥",
              translation: "总持慈悲喜舍，得大力用。",
              meaning: "通过培养慈、悲、喜、舍等积极品质获得神通。"
            },
            {
              verse: "3.24 • 象力等持",
              devanagari: "बलेषु हस्तिबलादीनी ॥",
              sanskrit: "balēṣu hastibalādīnī ॥",
              translation: "于诸力中，得象力等。",
              meaning: "通过总持力量获得如大象般的体力。"
            },
            {
              verse: "3.25 • 照微知远",
              devanagari: "प्रवृत्त्यालोकन्यासात् सूक्ष्मव्यवहितविप्रकृष्टज्ञानम् ॥",
              sanskrit: "pravṛttyālōkanyāsāt sūkṣmavyavahitaviprakṛṣṭaj्ञानम् ॥",
              translation: "注心光于行，能知微细、隐蔽、遥远。",
              meaning: "通过感官精熟知晓微妙、隐藏和遥远的事物。"
            },
            {
              verse: "3.26 • 总持日轮",
              devanagari: "भुवनज्ञानं सूर्ये संयमात् ॥",
              sanskrit: "bhuvanaj्ञानं sūryē saṃyamāt ॥",
              translation: "总持日轮，能知诸界。",
              meaning: "通过太阳总持知晓宇宙系统和行星领域。"
            },
            {
              verse: "3.27 • 总持月轮",
              devanagari: "चन्द्रे ताराव्यूहज्ञानम् ॥",
              sanskrit: "candrē tārāvyūhaj्ञानम् ॥",
              translation: "总持月轮，能知星宿。",
              meaning: "通过月亮总持知晓星座及其排列模式。"
            },
            {
              verse: "3.28 • 总持极星",
              devanagari: "ध्रुवे तद्गतिज्ञानम् ॥",
              sanskrit: "dhruvē tadgatij्ञानम् ॥",
              translation: "总持极星，能知其行。",
              meaning: "通过北极星总持知晓行星运动和轨道。"
            },
            {
              verse: "3.29 • 总持脐轮",
              devanagari: "नाभिचक्रे कायव्यूहज्ञानम् ॥",
              sanskrit: "nābhicakrē kāyavyūhaj्ञानम् ॥",
              translation: "总持脐轮，能知身相。",
              meaning: "通过脐轮总持知晓身体系统和能量中心。"
            },
            {
              verse: "3.30 • 总持喉陷",
              devanagari: "कण्ठकूपे क्षुत्पिपासानिवृत्तिः ॥",
              sanskrit: "kaṇṭhakūpē kṣutpipāsānivṛttiḥ ॥",
              translation: "总持喉陷，能息饥渴。",
              meaning: "通过喉部中心总持免于饥渴。"
            },
            {
              verse: "3.31 • 总持龟脉",
              devanagari: "कूर्मनाड्यां स्थैर्यम् ॥",
              sanskrit: "kūrmanāḍyāṃ sthairyam ॥",
              translation: "总持龟脉，能得安稳。",
              meaning: "通过能量通道控制获得身心稳定。"
            },
            {
              verse: "3.32 • 总持顶光",
              devanagari: "मूर्धज्योतिषि सिद्धदर्शनम् ॥",
              sanskrit: "mūrdhajyōtiṣi siddhadarśanam ॥",
              translation: "总持顶光，能见成就。",
              meaning: "通过顶轮总持见到成就者和灵性导师。"
            },
            {
              verse: "3.33 • 直觉遍知",
              devanagari: "प्रातिभाद्वा सर्वम् ॥",
              sanskrit: "prātibhādvā sarvam ॥",
              translation: "或由直觉，能知一切。",
              meaning: "通过神圣直觉自发知晓一切。"
            },
            {
              verse: "3.34 • 照心了别",
              devanagari: "हृदये चित्तसंवित् ॥",
              sanskrit: "hṛdayē cittasaṃvit ॥",
              translation: "总持心源，能知心相。",
              meaning: "通过心轮总持知晓意识的本质。"
            },
            {
              verse: "3.35 • 证知真我",
              devanagari: "सत्त्वपुरुषयोरत्यन्तासङ्कीर्णयोः प्रत्ययाविशेषो भोगः परार्थत्वात् स्वार्थसंयमात् पुरुषज्ञानम् ॥",
              sanskrit: "sattvapuruṣayōratyantāsaṅkīrṇayōḥ pratyayāviśēṣō bhōgaḥ parārthatvāt svārthasaṃyamāt puruṣaj्ञानम् ॥",
              translation: "自性真我彻底分离时，心念无别，享境为他；总持自性，乃证真我。",
              meaning: "通过专注真我总持区分神我（自我）与原质（自然）。"
            },
            {
              verse: "3.36 • 六通显现",
              devanagari: "ततः प्रातिभश्रावणवेदनादर्शास्वादवार्ता जायन्ते ॥",
              sanskrit: "tataḥ prātibhaśrāvaṇavēdanādarśāsvādavārtā jāyantē ॥",
              translation: "由是得天眼、天耳、他心、宿命、神足、漏尽。",
              meaning: "天眼通、天耳通等超感官知觉自然生起。"
            },
            {
              verse: "3.37 • 神通二用",
              devanagari: "ते समाधावुपसर्गाव्युत्थाने सिद्धयः ॥",
              sanskrit: "tē samādhāvupasargāvyutthānē siddhayaḥ ॥",
              translation: "彼等于定中为障，出定为成就。",
              meaning: "神通是最终解脱的障碍，但在普通意识状态中有用。"
            },
            {
              verse: "3.38 • 心入他身",
              devanagari: "बन्धकारणशैथिल्यात् प्रचारसंवेदनाच्च चित्तस्य परशरीरावेशः ॥",
              sanskrit: "bandhakāraṇaśaithilyāt pracārasaṃvēdanāc ca cittasya paraśarīrāvēśaḥ ॥",
              translation: "束缚因松弛，觉知流注，心入他身。",
              meaning: "通过精微能量通道的掌握进入他人身体。"
            },
            {
              verse: "3.39 • 御气轻身",
              devanagari: "उदानजयाज्जलपङ्ककण्टकादिष्वसङ्ग उत्क्रान्तिश्च ॥",
              sanskrit: "udānajayājjalapaṅkakaṇṭakādiṣvasaṅga utkrāntiśca ॥",
              translation: "制御上行气，不染水泥荆棘，并能升腾。",
              meaning: "通过上行气控制实现悬浮、水上行走和意识离体。"
            },
            {
              verse: "3.40 • 调息发光",
              devanagari: "समानजयाज्ज्वलनम् ॥",
              sanskrit: "samānajayājjvalanam ॥",
              translation: "制御平行气，身发光明。",
              meaning: "通过平行气控制产生光环和身体发光。"
            },
            {
              verse: "3.41 • 天耳清净",
              devanagari: "श्रोत्राकाशयोः सम्बन्धसंयमात् दिव्यं श्रोत्रम् ॥",
              sanskrit: "śrōtrākāśayōḥ sambandhasaṃyamāt divyaṃ śrōtram ॥",
              translation: "总持耳空关系，得神圣闻。",
              meaning: "通过耳与空的关系总持获得天耳通。"
            },
            {
              verse: "3.42 • 凌虚御空",
              devanagari: "कायाकाशयोः सम्बन्धसंयमात् लघुतूलसमापत्तेश्च आकाशगमनम् ॥",
              sanskrit: "kāyākāśayōḥ sambandhasaṃyamāt laghutūlasamāpattēśca ākāśagamanam ॥",
              translation: "总持身空关系，等至轻棉，能行虚空。",
              meaning: "通过身与空的关系总持实现悬浮和空中飞行。"
            },
            {
              verse: "3.43 • 神游大离",
              devanagari: "बहिरकल्पिता वृत्तिर्महाविदेहा ततः प्रकाशावरणक्षयः ॥",
              sanskrit: "bahirakalpitā vṛttirmahāvidēhā tataḥ prakāśāvaraṇakṣayaḥ ॥",
              translation: "心行外无依，是大离身，由是光明障蔽消尽。",
              meaning: "通过无身意识实现出体体验和移除面纱。"
            },
            {
              verse: "3.44 • 制御五大",
              devanagari: "स्थूलस्वरूपसूक्ष्मान्वयार्थवत्त्वसंयमात् भूतजयः ॥",
              sanskrit: "sthūlasvarūpasūkṣmānvayārthavattvasaṃyamāt bhūtajayaḥ ॥",
              translation: "总持粗、细、关联、意义，能伏诸大。",
              meaning: "通过对元素各方面的全面总持掌控五大元素。"
            },
            {
              verse: "3.45 • 神通体固",
              devanagari: "ततोऽणिमादिप्रादुर्भावः कायसम्पत् तद्धर्मानभिघातश्च ॥",
              sanskrit: "tatō'ṇimādiprādurbhāvaḥ kāyasampat taddharmānabighātaśca ॥",
              translation: "由是现缩身等德，身得圆满，不染诸性。",
              meaning: "八大神通显现，从缩身神通开始，身体达到完美。"
            },
            {
              verse: "3.46 • 体德圆满",
              devanagari: "रूपलावण्यबलवज्रसंहननत्वानि कायसम्पत् ॥",
              sanskrit: "rūpalāvaṇyabalavajrasaṃhananatvāni kāyasampat ॥",
              translation: "身圆满者，形色端严，力坚如金刚。",
              meaning: "通过元素掌控获得身体完美和吸引力。"
            },
            {
              verse: "3.47 • 摄伏诸根",
              devanagari: "ग्रहणस्वरूपास्मितान्वयार्थवत्त्वसंयमादिन्द्रियजयः ॥",
              sanskrit: "grahaṇasvarūpāsmitānvayārthavattvasaṃyamādindriyajayaḥ ॥",
              translation: "总持执受、自性、我执、关联、意义，能伏诸根。",
              meaning: "通过全面总持完全掌控所有感官。"
            },
            {
              verse: "3.48 • 心速无碍",
              devanagari: "ततो मनोजवित्वं विकरणभावः प्रधानजयश्च ॥",
              sanskrit: "tatō manōjavitvaṃ vikaraṇabhāvaḥ pradhānajayaśca ॥",
              translation: "由是心速如意，离诸工具，能伏自性。",
              meaning: "心意敏捷和掌控原质（原始自然）。"
            },
            {
              verse: "3.49 • 全知全能",
              devanagari: "सत्त्वपुरुषान्यताख्यातिमात्रस्य सर्वभावाधिष्ठातृत्वं सर्वज्ञातृत्वञ्च ॥",
              sanskrit: "sattvapuruṣānyatākhyātimātrasya sarvabhāvādhiṣṭātṛtvaṃ sarvaj्ञातṛtvañca ॥",
              translation: "但能辨知自性真我之别，即得主宰万有、遍知一切。",
              meaning: "通过自我知识获得全知和对一切状态的主宰。"
            },
            {
              verse: "3.50 • 离染独存",
              devanagari: "तद्वैराग्यादपि दोषबीजक्षये कैवल्यम् ॥",
              sanskrit: "tadvairāgyādapi dōṣabījakṣayē kaivalyam ॥",
              translation: "乃至离此，染种尽时，即得独存。",
              meaning: "对神通不执着导向解脱和业力种子的摧毁。"
            },
            {
              verse: "3.51 • 辞召离慢",
              devanagari: "स्थान्युपनिमन्त्रणे सङ्गस्मयाकरणं पुनरनिष्टप्रसङ्गात् ॥",
              sanskrit: "sthānyupanimantraṇē saṅgasmayākaraṇaṃ punaraniṣṭaprasaṅgāt ॥",
              translation: "天神邀座，不应染着骄慢，免遭不净。",
              meaning: "警告不要执着天界邀请，以免重新陷入束缚。"
            },
            {
              verse: "3.52 • 辨时知真",
              devanagari: "क्षणतत्क्रमयोः संयमाद्विवेकजं ज्ञानम् ॥",
              sanskrit: "kṣaṇatatkramayōḥ saṃyamādvivēkajaṃ j्ञानम् ॥",
              translation: "总持刹那及其相续，生辨别智。",
              meaning: "通过时间总持获得区分实相与幻象的智慧。"
            },
            {
              verse: "3.53 • 超类知同",
              devanagari: "जातिलक्षणदेशैरन्यतानवच्छेदात् तुल्ययोस्ततः प्रतिपत्तिः ॥",
              sanskrit: "jātilakṣaṇadēśairanyatānavacchēdāt tulyayōstataḥ pratipattiḥ ॥",
              translation: "由是了知二物之同，超越种、相、处之别。",
              meaning: "清晰区分相似事物，不受外部差异影响。"
            },
            {
              verse: "3.54 • 真觉现前",
              devanagari: "तारकं सर्वविषयं सर्वथाविषयमक्रमं चेति विवेकजं ज्ञानम् ॥",
              sanskrit: "tārakaṃ sarvaviṣayaṃ sarvathāviṣayamakramaṃ cēti vivēkajaṃ j्ञानम् ॥",
              translation: "辨别智者，能度一切，遍知一切，超越次第。",
              meaning: "超越性的解脱知识，包含一切，超越序列。"
            },
            {
              verse: "3.55 • 独存成就",
              devanagari: "सत्त्वपुरुषयोः शुद्धिसाम्ये कैवल्यम् ॥",
              sanskrit: "sattvapuruṣayōḥ śuddhisāmyē kaivalyam ॥",
              translation: "自性真我同得清净，独存成就。",
              meaning: "当心意变得如真我般纯净时，最终解脱（独存）到来。"
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
            },
            {
              verse: "4.11 • 缘起俱寂",
              devanagari: "हेतुफलाश्रयालम्बनैः सङ्गृहीतत्वातेषामभावेतदभावः ॥",
              sanskrit: "hētuphalāśrayālambanaiḥ saṅgṛhītatvātēṣāmabhāvētadabhāvaḥ ॥",
              translation: "由因、果、所依、所缘系缚故，彼等灭时，此亦随灭。",
              meaning: "当支持条件（因、果、基础、对象）消失时，潜在印象也随之消失。"
            },
            {
              verse: "4.12 • 三世实有",
              devanagari: "अतीतानागतं स्वरूपतोऽस्त्यध्वभेदाद्धर्माणाम् ॥",
              sanskrit: "atītānāgataṃ svarūpatō'styadhvabhēdāddharmāṇām ॥",
              translation: "过去未来，自性实存，以诸法之时位有别故。",
              meaning: "时间是真实的，对象在过去、现在、未来具有不同的属性。"
            },
            {
              verse: "4.13 • 性相三态",
              devanagari: "ते व्यक्तसूक्ष्मा गुणात्मानः ॥",
              sanskrit: "tē vyaktasūkṣmā guṇātmānaḥ ॥",
              translation: "彼等或显或微，皆以三德为体。",
              meaning: "所有对象，显化或未显化，都由三德（悦性、变性、惰性）组成。"
            },
            {
              verse: "4.14 • 物性一如",
              devanagari: "परिणामैकत्वाद्वस्तुतत्त्वम् ॥",
              sanskrit: "pariṇāmaikatvādvastutattvam ॥",
              translation: "物性真实，缘于转化之统一。",
              meaning: "对象的本质是其在三德中一致的转化模式。"
            },
            {
              verse: "4.15 • 心境各别",
              devanagari: "वस्तुसाम्ये चित्तभेदात्तयोर्विभक्तः पन्थाः ॥",
              sanskrit: "vastusāmye cittabhedāttayōrvibhaktaḥ panthāḥ ॥",
              translation: "物境虽一，心识异故，所取之道遂分。",
              meaning: "不同的心意对同一对象有不同的感知，导致不同的体验和道路。"
            },
            {
              verse: "4.16 • 境不随心",
              devanagari: "न चैकचित्ततन्त्रं वस्तु तत्प्रमाणकं तदा किं स्यात् ॥",
              sanskrit: "na caikacittatantraṃ vastu tatpramāṇakaṃ tadā kiṃ syāt ॥",
              translation: "物不依一心识而存，若然，未认知时，彼为何物？",
              meaning: "对象独立于个体感知而存在；不会因某个心意未感知而消失。"
            },
            {
              verse: "4.17 • 心知由染",
              devanagari: "तदुपरागापेक्षित्वाच्चित्तस्य वस्तु ज्ञाताज्ञातम् ॥",
              sanskrit: "taduparāgāpēkṣitvāccittasya vastu jñātājñātam ॥",
              translation: "心识缘于染着，故物有知与不知。",
              meaning: "知识取决于感知心意的状态；对象基于心理条件而被认知或未知。"
            },
            {
              verse: "4.18 • 真常寂照",
              devanagari: "सदा ज्ञाताश्चित्तवृत्तयः तत्प्रभोः पुरुषस्यापरिणामित्वात् ॥",
              sanskrit: "sadā jñātāścittavṛttayaḥ tatprabhōḥ puruṣasyāpariṇāmitvāt ॥",
              translation: "心行恒为所知，以主宰真我，常住不变故。",
              meaning: "神我（意识）一直见证心意的活动，因其不变且永恒。"
            },
            {
              verse: "4.19 • 心不自鉴",
              devanagari: "न तत्स्वाभासं दृश्यत्वात् ॥",
              sanskrit: "na tatsvābhāsaṃ dṛśyatvāt ॥",
              translation: "心不能自照，以其为所观故。",
              meaning: "心意是感知对象，不自发光；需要意识才能被认知。"
            },
            {
              verse: "4.20 • 能所不俱",
              devanagari: "एकसमये चोभयानवधारणम् ॥",
              sanskrit: "ēkasamayē cōbhayānavadhāraṇam ॥",
              translation: "一时之中，不能并知能知与所知。",
              meaning: "心意不能同时认知自己和对象；需要转移注意焦点。"
            },
            {
              verse: "4.21 • 无穷过",
              devanagari: "चित्तान्तरदृश्ये बुद्धिबुद्धेरतिप्रसङ्गः स्मृतिसङ्करश्च ॥",
              sanskrit: "cittāntaradṛśyē buddhibuddhēratiprasaṅgaḥ smṛtisaṅkaraśca ॥",
              translation: "若心识能观他心，则有知者重叠之过，记忆亦混。",
              meaning: "如果心意能感知其他心意，会导致无限倒退和记忆混乱。"
            },
            {
              verse: "4.22 • 知性遍在",
              devanagari: "चितेरप्रतिसंक्रमायास्तदाकारापत्तौ स्वबुद्धिसंवेदनम् ॥",
              sanskrit: "citērapratisaṃkramāyāstadākārāpattau svabuddhisaṃvedanam ॥",
              translation: "纯知不动，借他心之形，乃知自心。",
              meaning: "意识反映在心意中使自我觉知成为可能，尽管意识本身不变。"
            },
            {
              verse: "4.23 • 心镜互照",
              devanagari: "द्रष्टृदृश्योपरक्तं चित्तं सर्वार्थम् ॥",
              sanskrit: "draṣṭṛdṛśyoparaktaṃ cittaṃ sarvārtham ॥",
              translation: "心识染能所之色，故能知一切。",
              meaning: "心意反映主体（意识）和客体（现象），使一切认知成为可能。"
            },
            {
              verse: "4.24 • 汇觉成识",
              devanagari: "तदसंख्येयवासनाभिश्चित्रमपि परार्थं संहत्यकारित्वात् ॥",
              sanskrit: "tadasaṃkhyeyavāsanābhiścitramapi parārthaṃ saṃhatyakāritvāt ॥",
              translation: "虽有无量印象，心识为他而作，以其为聚合故。",
              meaning: "心意为神我（意识）而存在，虽然充满无数印象。"
            },
            {
              verse: "4.25 • 息妄归真",
              devanagari: "विशेषदर्शिन आत्मभावभावनानिवृत्तिः ॥",
              sanskrit: "viśeṣadarśina ātmabhāvabhāvanānivṛttiḥ ॥",
              translation: "见差别者，修习自我认知之心，自然止息。",
              meaning: "对觉悟者，认识到自我本性后，基于自我的冥想停止。"
            },
            {
              verse: "4.26 • 心趋独存",
              devanagari: "तदा विवेकनिम्नं कैवल्यप्राग्भारं चित्तम् ॥",
              sanskrit: "tadā vivēkanimnaṃ kaivalyaprāgbhāraṃ cittam ॥",
              translation: "尔时心识，倾于明辨，直指独存。",
              meaning: "明辨生起后，心意自然流向解脱。"
            },
            {
              verse: "4.27 • 定中起念",
              devanagari: "तच्छिद्रेषु प्रत्ययान्तराणि संस्कारेभ्यः ॥",
              sanskrit: "tacchidrēṣu pratyayāntarāṇi saṃskārēbhyaḥ ॥",
              translation: "其间隙中，余念从潜印象生。",
              meaning: "旧印象可能在失念时重新浮现。"
            },
            {
              verse: "4.28 • 对治如惑",
              devanagari: "हानमेषां क्लेशवदुक्तम् ॥",
              sanskrit: "hānamēṣāṃ klēśavaduktam ॥",
              translation: "彼等之断，如除烦恼。",
              meaning: "消除这些念头如同消除烦恼（通过修习和离欲）。"
            },
            {
              verse: "4.29 • 无执定慧",
              devanagari: "प्रसंख्यानेऽप्यकुसीदस्य सर्वथाविवेकख्यातेर्धर्ममेघः समाधिः ॥",
              sanskrit: "prasaṃkhyāne'pyakusīdasya sarvathāvivēkakhyāterdharmamēghaḥ samādhiḥ ॥",
              translation: "虽达至境，心无所得，唯现明辨智，是谓法云三昧。",
              meaning: "法云三昧 - 最终的三昧，如云降下功德之雨。"
            },
            {
              verse: "4.30 • 惑业寂灭",
              devanagari: "ततः क्लेशकर्मनिवृत्तिः ॥",
              sanskrit: "tataḥ klēśakarmanivṛttiḥ ॥",
              translation: "由是，烦恼业行，寂然不起。",
              meaning: "在法云三昧中，一切痛苦和业力止息。"
            },
            {
              verse: "4.31 • 智广境微",
              devanagari: "तदा सर्वावरणमलापेतस्य ज्ञानस्यानन्त्यात् ज्ञेयमल्पम् ॥",
              sanskrit: "tadā sarvāvaraṇamalāpētasya jñānasyānantyāt jñēyamalpam ॥",
              translation: "尔时，知识障蔽尽除，智慧无边，所知甚微。",
              meaning: "所有遮蔽消除后，智慧变得无限，未知的事物极少。"
            },
            {
              verse: "4.32 • 三德功成",
              devanagari: "ततः कृतार्थानां परिणामक्रमसमाप्तिर्गुणानाम् ॥",
              sanskrit: "tataḥ kṛtārthānāṃ pariṇāmakramasamāptirguṇānām ॥",
              translation: "由是，三德功成，转化之序圆满。",
              meaning: "三德完成了它们的工作，停止了转化活动。"
            },
            {
              verse: "4.33 • 瞬刻成序",
              devanagari: "क्षणप्रतियोगी परिणामापरान्तनिर्ग्राह्यः क्रमः ॥",
              sanskrit: "kṣaṇapratiyōgī pariṇāmāparāntanirgrāhyaḥ kramaḥ ॥",
              translation: "序列者，刹那相续，于转化终极处可知。",
              meaning: "时间在转化终点处被感知 - 刹那序列的止息。"
            },
            {
              verse: "4.34 • 大般涅槃",
              devanagari: "पुरुषार्थशून्यानां गुणानां प्रतिप्रसवः कैवल्यं स्वरूपप्रतिष्ठा वा चितिशक्तिरिति ॥",
              sanskrit: "puruṣārthaśūnyānāṃ guṇānāṃ pratiprasavaḥ kaivalyaṃ svarūpapratiṣṭhā vā citiśaktiriti ॥",
              translation: "三德离于目的，归于本原，独存成就，觉力安住自性，是谓解脱。",
              meaning: "最终解脱 - 意识安住于自身，三德撤回其源头。"
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
