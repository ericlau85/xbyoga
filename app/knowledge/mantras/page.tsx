'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function SanskritMantrasPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'devotional' | 'practice' | 'wisdom' | 'ritual'>('devotional');

  // ============================================
  // 数据定义 - 按综合分类方案
  // ============================================
  
  const mantrasData = {
    en: {
      // 页面基本信息
      meta: {
        title: "Sanskrit Sacred Sounds Collection",
        subtitle: "संस्कृतशास्त्रसङ्ग्रहः",
        intro: "A systematic collation of the Sanskrit sacred sound tradition, categorised by literary genre and practical application, establishing a comprehensive knowledge framework ranging from elementary syllables to philosophical stanzas.",
      },

      // 标签页配置
      sections: {
        devotional: {
          tabTitle: "Devotional Hymns",
          pageTitle: "स्तोत्र · Devotional Hymns",
          subtitle: "Traditional reverence and praise hymns",
          literaryType: "Stotra",
          practiceType: "Āvāhanam / Pūjā",
          description: "Comprises literary forms such as opening invocations, guru reverence, and Vedic hymns, serving to establish practice orientation and lineage connection."
        },
          practice: {
            tabTitle: "Practice Mantras",
            pageTitle: "मन्त्र · Mantra for Practice",
            subtitle: "Seed syllables and short mantras for personal cultivation",
            literaryType: "Mantra",
            practiceType: "Japa Sādhana",
            description: "Encompasses categories including seed syllables (bīja), short mantras (laghu), and breath mantras, suitable for daily recitation, āsana practice, and breath-focused applications."
          },
        wisdom: {
          tabTitle: "Wisdom Verses",
          pageTitle: "श्लोक · Wisdom Verses",
          subtitle: "Philosophical wisdom and peace invocations",
          literaryType: "Śloka / Mahāvākya",
          practiceType: "Adhyayana",
          description: "Selected philosophical core expressions from Upaniṣads and classical literature, revealing the ultimate orientation of practice, including peace prayers and merit dedications."
        },
        ritual: {
          tabTitle: "Ritual Recitations",
          pageTitle: "ब्राह्मण · Ritual Recitations",
          subtitle: "Traditional ritual and classical recitations",
          literaryType: "Brāhmaṇa / Sūtra",
          practiceType: "Pūjā / Adhyayana",
          description: "Includes Vedic ritual recitations, classical aphorisms, and special ceremonial texts, presenting the complete system of Sanskrit traditional rituals."
        }
      },

      // 咒语内容
        mantras: {
            devotional: [
                  {
                    title: "Opening Invocation",
                    devanagari: "वन्दे गुरूणां चरणारविन्दे संदर्शितस्वात्मसुखावबोधे ।\nनिःश्रेयसे जाङ्गलिकायमाने संसारहालाहलमोहशान्त्यै ॥",
                    sanskrit: "vande gurūṇāṃ caraṇāravinde saṃdarśitasvātmasukhāvabodhe ।\nniḥśreyase jāṅgalikāyamāne saṃsārahālāhalamohaśāntyai ॥",
                    translation: "I bow to the lotus feet of the Guru, which reveal the blissful awakening of the Self.",
                    explanation: "This opening verse from the Ashtanga tradition establisheth the sacred student-teacher lineage and setteth forth the noble intention of rooting out spiritual ignorance.",
                    type: "Guru Prayer",
                    usage: "Recited at the very beginning of one's practice to connect with the lineage and clarify one's aim."
                  },
                  {
                    title: "Salutation to Patañjali",
                    devanagari: "आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् ।\nसहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥",
                    sanskrit: "ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam ।\nsahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥",
                    translation: "To Patañjali, who hath a human form above the waist, holdeth conch, discus, and sword, and whose thousand white-hooded heads I revere, I bow.",
                    explanation: "A visualization and homage to the sage Patañjali, compiler of the Yoga Sūtras. The conch signifieth the divine sound of teaching; the discus, the wheel of time and dharma; the sword, the discriminative intellect.",
                    type: "Sage Salutation",
                    usage: "Chanted to honor the founder of the Yoga darśana and invoke the qualities he embodies."
                  },
                  {
                    title: "Threefold Guru Salutation",
                    devanagari: "आखण्डमण्डलाकारं व्याप्तं येन चराचरम् ।\nतत्पदं दर्शितं येन तस्मै श्रीगुरवे नमः ॥१॥\n\nअज्ञानतिमिरान्धस्य ज्ञानाञ्जनशालाकया ।\nचक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः ॥२॥\n\nगुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः ।\nगुरुः साक्षात्परं ब्रह्म तस्मै श्रीगुरवे नमः ॥३॥",
                    sanskrit: "ākhaṇḍamaṇḍalākāraṃ vyāptaṃ yena carācaram ।\ntatpadaṃ darśitaṃ yena tasmai śrīgurave namaḥ ॥1॥\n\najñānatimirāndhasya jñānāñjanaśālākayā ।\n cakṣurunmīlitaṃ yena tasmai śrīgurave namaḥ ॥2॥\n\ngururbrahmā gururviṣṇur gururdevo maheśvaraḥ ।\nguruḥ sākṣāt paraṃ brahma tasmai śrīgurave namaḥ ॥ ॥3॥",
                    translation: "1. Salutations to that glorious Guru who revealeth the state which is indivisible, circular, and pervadeth all that moveth and moveth not. 2. Salutations to that glorious Guru who, with the collyrium-stick of knowledge, openeth the eyes of one blinded by the darkness of ignorance. 3. The Guru is Brahmā, the Guru is Viṣṇu, the Guru is Maheśvara; the Guru is verily the Supreme Brahman; salutations to that glorious Guru.",
                    explanation: "The classic threefold praise of the Guru. The first verse praiseth the Guru for revealing the Absolute (Brahman). The second praiseth the Guru for granting spiritual sight. The third identifieth the Guru with the Trimūrti and with Brahman itself, emphasizing the Guru's divine status.",
                    type: "Guru Salutation",
                    usage: "A profound meditation on the nature of the Guru, used in deep devotional practice and guru pūjā."
                  },
                  {
                    title: "Lineage Praise",
                    devanagari: "सदाशिवसमारम्भां शङ्कराचार्यमध्यमाम् ।\nअस्मदाचार्यपर्यन्तां वन्दे गुरुपरम्पराम् ॥",
                    sanskrit: "sadāśiva samārambhāṃ śaṅkarācārya madhyamām 。\nasmadācārya paryantāṃ vande guru paramparām ॥",
                    translation: "I salute the lineage of Gurus, beginning with Sadāśiva, having Śaṅkarācārya in the middle, and extending to my own teacher.",
                    explanation: "A verse that honoreth the unbroken chain of transmission (paramparā). It traceth the lineage from the primordial Śiva, through the great systematizer Ādi Śaṅkara, down to one's personal teacher, affirming the purity of the descent of wisdom.",
                    type: "Lineage Salutation",
                    usage: "Recited to consciously connect with and express gratitude for the entire spiritual lineage."
                  },
                  {
                    title: "Lineage Genealogy",
                    devanagari: "नारायणं पद्मभवं वशिष्ठं शक्तिं च तत्पुत्रपराशरं च ।\nव्यासं शुकं गौडपदं महान्तं गोविन्दयोगीन्द्रमथास्य शिष्यम् ॥",
                    sanskrit: "nārāyaṇaṁ padmabhavaṁ vaśiṣṭhaṁ śaktiṁ ca tatputraparāśaraṁ ca ।\nvyāsaṁ śukaṁ gauḍapadaṁ mahāntaṁ govindayogīndramathāsya śiṣyam ॥",
                    translation: "Nārāyaṇa, born from the lotus; Vasiṣṭha; Śakti and his son Parāśara; Vyāsa; Śuka; the great Gauḍapāda; and Govinda, the king of Yogis, his disciple.",
                    explanation: "A listing of key preceptors in the Advaita Vedānta lineage, from the divine Nārāyaṇa down to Gauḍapāda (the guru of Govinda, who was Śaṅkara's guru). It showeth the ancient and sacred pedigree of the teaching.",
                    type: "Lineage Salutation",
                    usage: "Chanted in traditional learning environments to remember and honor the chain of teachers."
                  },
                  {
                    title: "Śaṅkara's Lineage Genealogy",
                    devanagari: "श्रीशंकराचार्यमथास्य पद्मपादं च हस्तामलकं च शिष्यम् ।\nतं तोटकं वार्तिककारमन्यानस्मद् गुरून्संततमानतोऽस्मि ॥",
                    sanskrit: "śrī śaṁkarācārya mathāsya padmapādaṁ ca hastāmalakaṁ ca śiṣyam ।\ntaṁ toṭakaṁ vārtikakāra manyānasmad gurūn saṁtatamānato'smi ॥",
                    translation: "To Śrī Śaṅkarācārya and his disciples—Padmapāda, Hastāmalaka, Toṭaka, the author of the Vārtika, and others—my own teachers, I bow continually.",
                    explanation: "A salutation to Ādi Śaṅkara and his four famous direct disciples (Padmapāda, Hastāmalaka, Toṭaka, and Sureśvara, the 'Vārtikakāra'), who were instrumental in establishing and propagating his teachings.",
                    type: "Lineage Salutation",
                    usage: "Used by followers of the Śaṅkara tradition to pay homage to the founder and his immediate successors."
                  },
                  {
                    title: "Praise to the World-Benefactor",
                    devanagari: "श्रुतिस्मृतिपुराणानामालयं करुणालयम् ।\nनमामि भगवत्पादं शंकरं लोकशंकरम् ॥",
                    sanskrit: "śruti smṛti purāṇānāmālayaṁ karuṇālayam ।\nnamāmi bhagavatpādaṁ śaṁkaraṁ lokaśaṁkaram ॥",
                    translation: "The abode of the Vedas (Śruti), the traditional codes (Smṛti), and the ancient lore (Purāṇas), the abode of compassion; I bow to the venerable Śaṅkara, the benefactor of the world.",
                    explanation: "A tribute to Śaṅkarācārya as the living repository of all scriptural knowledge and as an ocean of compassion, whose sole purpose was the welfare (śaṁkara) of the world.",
                    type: "Sage Praise",
                    usage: "A verse of deep gratitude for Śaṅkara's life and work, often chanted in monasteries and study groups."
                  },
                  {
                    title: "Praise to the Holy Lion",
                    devanagari: "शंकरं शंकराचार्यं केशवं बादरायणम् ।\nसूत्रभाष्यकृतौ वन्दे भगवन्तौ पुनः पुनः ॥",
                    sanskrit: "śaṁkaraṁ śaṁkarācāryaṁ keśavaṁ bādarāyaṇam ।\nsūtrabhāṣyakṛtau vande bhagavantau punaḥ punaḥ ॥",
                    translation: "I salute again and again the two blessed ones: Śaṅkara (the commentator) and Bādarāyaṇa (the author), who created the Sūtra and its Bhāṣya.",
                    explanation: "Homage to the two pillars of Vedānta: Vyāsa (also called Bādarāyaṇa), who composed the Brahma Sūtras, and Śaṅkara, who wrote the definitive commentary (Bhāṣya) thereon. Together, they laid the unshakable foundation of Advaita philosophy.",
                    type: "Sage Praise",
                    usage: "Recited by students of Vedānta before engaging with the Brahma Sūtras and Śaṅkara's commentary."
                  },
                  {
                    title: "Salutation to Vyāsa",
                    devanagari: "नमोऽस्तु ते व्यास विशालबुद्धे फुल्लारविन्दायतपत्रनेत्र ।\nयेन त्वया भारततैलपूर्णः प्रज्वालितो ज्ञानमयः प्रदीपः ॥",
                    sanskrit: "namo'stu te vyāsa viśāla buddhe phullāravindāyata patra netra ।\nyena tvayā bhārata taila pūrṇaḥ prajvālito jñāna mayaḥ pradīpaḥ ॥",
                    translation: "Homage to thee, O Vyāsa, of vast intellect, whose eyes resemble the petals of a full-blown lotus; by thee the lamp of wisdom, filled with the oil of the Mahābhārata, was kindled.",
                    explanation: "A salutation to the sage Vyāsa, the compiler of the Mahābhārata, Purāṇas, and Vedānta Sūtras. It thanketh him for filling the lamp of scripture with the 'oil' of his epic, thereby lighting the lamp of liberating knowledge.",
                    type: "Sage Salutation",
                    usage: "Recited before studying the great epics or the Vedānta philosophy to honor the source of this wisdom."
                  },
                  {
                    title: "Reverence to the Guru",
                    devanagari: "श्री गुरुभ्यो नमः । हरिः ॐ",
                    sanskrit: "śrī gurubhyo namaḥ । hariḥ oṃ",
                    translation: "Salutations to all venerable Gurus. Hariḥ Om.",
                    explanation: "A humble obeisance to the lineage of teachers, combining the name of Viṣṇu (Hari) with the primordial sound (Om).",
                    type: "Short Mantra",
                    usage: "Often chanted at the beginning of practice to connect with the guru lineage and sanctify the session."
                  }
                ],
            practice: [
                {
                  title: "Prayer to the Elephant God",
                  devanagari: "वक्रतुण्ड महकाय सूर्य कोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्व कार्येषु सर्वदा ॥",
                  sanskrit: "vakratuṇḍa mahakāya sūrya kōṭi samaprabha ।\nnirvighnaṃ kuru mē dēva sarva kāryēṣu sarvadā ॥",
                  translation: "O one with the curved trunk and mighty body, whose splendor equaleth a million suns, O God, make all my works forever free from obstacles.",
                  explanation: "A direct and heartfelt petition to Gaṇeśa, describing his awe-inspiring form and beseeching him to clear the path for all one's endeavors.",
                  type: "Gaṇeśa Prayer",
                  usage: "A common daily prayer for success and the removal of hindrances in all undertakings."
                },
              {
                title: "Cosmic Syllable",
                devanagari: "ॐ",
                sanskrit: "oṃ / auṃ",
                translation: "The primal sound from which all existence springeth.",
                explanation: "OM containeth within it the elements A-U-M and silence; it correspondeth to various states of consciousness.",
                type: "Seed Mantra",
                usage: "Used at the commencement of practice for meditative focus."
              },
              {
                title: "Breath Mantra",
                devanagari: "सो ऽहम्",
                sanskrit: "so'ham",
                translation: "I am That; the very breath doth declare this truth.",
                explanation: "The natural sound of inhalation (so) and exhalation (ham) becometh, through ujjāyī breath, a moving meditation synchronized with respiration.",
                type: "Breath Mantra",
                usage: "Chanted to synchronize breath with bodily movements in postures."
              },
              {
                title: "Five Element Mantras",
                devanagari: "लं वं रं यं हं",
                sanskrit: "laṃ vaṃ raṃ yaṃ haṃ",
                translation: "Seed sounds for Earth, Water, Fire, Air, and Ether.",
                explanation: "Each syllable correspondeth to one of the five great elements and its associated energy center (chakra).",
                type: "Elemental Seed Mantras",
                usage: "Employed in chakra meditation and for balancing the subtle body's energies."
              },
              {
                title: "Divine Mother Seed",
                devanagari: "ह्रीं",
                sanskrit: "hrīṃ",
                translation: "The seed sound of the Divine Mother, source of all creation.",
                explanation: "This is the bīja mantra of Mahāsarasvatī, symbolizing the wellspring of creativity and wisdom.",
                type: "Seed Mantra",
                usage: "Recited to stimulate creativity and invoke the goddess's blessings."
              },
              {
                title: "Auspicious Seed",
                devanagari: "श्रीं",
                sanskrit: "śrīṃ",
                translation: "The auspicious sound that bestoweth both fortune and wisdom.",
                explanation: "As the bīja mantra of Mahālakṣmī, it representeth abundance, merit, and spiritual wealth.",
                type: "Seed Mantra",
                usage: "Chanted for the cultivation of material and spiritual prosperity."
              },
              {
                title: "Purifying Seed",
                devanagari: "क्लीं",
                sanskrit: "klīṃ",
                translation: "The purifying mantra that transformeth base consciousness into wisdom.",
                explanation: "This is the seed sound of Mahākālī, embodying the transformative fire that consumeth all impurities.",
                type: "Seed Mantra",
                usage: "Used for purification, inner alchemy, and radical transformation."
              },
              {
                title: "Śiva's Five-Syllable Mantra",
                devanagari: "ॐ नमः शिवाय",
                sanskrit: "oṃ namaḥ śivāya",
                translation: "Salutations unto Śiva, the auspicious one.",
                explanation: "The sacred pañcākṣara mantra; 'Śiva' here signifieth the eternal, pure consciousness that transcendeth all limitation.",
                type: "Five-Syllable Mantra",
                usage: "Repeated in japa (mantra repetition) to cultivate sattvic qualities and transcend egoic identification."
              },
              {
                title: "Nārāyaṇa Mantra",
                devanagari: "ॐ नमो नारायणाय",
                sanskrit: "oṃ namo nārāyaṇāya",
                translation: "Salutations to Nārāyaṇa, the all-pervading Lord.",
                explanation: "A mantra dedicated to Viṣṇu as Nārāyaṇa, contemplating his cosmic consciousness which permeateth all things.",
                type: "Short Mantra",
                usage: "Chanted in meditation upon the omnipresent nature of the divine."
              },
              {
                title: "All-Illuminating Light Mantra",
                devanagari: "ॐ नमो भगवते वासुदेवाय",
                sanskrit: "oṃ namo bhagavate vāsudevāya",
                translation: "Salutations to the blessed Lord Vāsudeva, the luminous one.",
                explanation: "A salutation to Kṛṣṇa as the supreme personification of divine light that illuminateth the entire cosmos.",
                type: "Short Mantra",
                usage: "Used in meditation upon divine illumination and inner light."
              },
              {
                title: "Goddess Lakṣmī Mantra",
                devanagari: "ॐ श्री महालक्ष्म्यै नमः",
                sanskrit: "oṃ śrī mahālakṣmyai namaḥ",
                translation: "Om. Salutations to the glorious Mahālakṣmī.",
                explanation: "An invocation of the great goddess of fortune, praying for an abundance of both worldly and spiritual merits.",
                type: "Short Mantra",
                usage: "Recited in devotional practices aimed at cultivating grace and prosperity."
              },
              {
                title: "Goddess Sarasvatī Mantra",
                devanagari: "ॐ ऐं सरस्वत्यै नमः",
                sanskrit: "oṃ aiṃ sarasvatyai namaḥ",
                translation: "Om. Salutations to Sarasvatī, the flowing one.",
                explanation: "An homage to the goddess of wisdom, speech, and learning, seeking the boon of profound knowledge and eloquence.",
                type: "Short Mantra",
                usage: "Chanted before study or any intellectual endeavor to invoke clarity and insight."
              },
              {
                title: "Gaṇeśa Mantra",
                devanagari: "ॐ गं गणपतये नमः",
                sanskrit: "oṃ gaṃ gaṇapataye namaḥ",
                translation: "Om. Salutations to Gaṇapati, lord of the hosts.",
                explanation: "An invocation to the elephant-headed deity, remover of obstacles and bestower of success at the outset of any venture.",
                type: "Short Mantra",
                usage: "Traditionally recited first in any ritual or new undertaking to ensure a smooth path."
              },
              {
                title: "Triple Goddess Seed Mantra",
                devanagari: "ॐ ह्रीं श्रीं क्लीं",
                sanskrit: "oṃ hrīṃ śrīṃ klīṃ",
                translation: "Om. The threefold seed sounds of the Divine Mother.",
                explanation: "A powerful compound mantra invoking the triune aspects of the Goddess: creativity (Sarasvatī), sustenance (Lakṣmī), and transformation (Kālī).",
                type: "Compound Mantra",
                usage: "Utilized in advanced sādhanā for deep meditation and integration of these potent energies."
              },
              {
                title: "That Is the Truth",
                devanagari: "ॐ तत् सत्",
                sanskrit: "oṃ tat sat",
                translation: "Om. That is the Truth.",
                explanation: "A supreme philosophical declaration. 'Tat' referreth to the ultimate, impersonal reality; 'Sat' meaneth truth, existence, and goodness. It affirmeth the highest principle.",
                type: "Philosophical Mantra",
                usage: "Contemplated to recognize and align with the fundamental reality of pure Being-Consciousness-Bliss (sac-cid-ānanda)."
              },
              {
                title: "May All Beings Be Happy",
                devanagari: "लोकाः समस्ताः सुखिनो भवन्तु",
                sanskrit: "lokāḥ samastāḥ sukhino bhavantu",
                translation: "May all beings in all worlds attain happiness.",
                explanation: "A quintessential universal prayer (mahā-maṅgala) that expandeth the practitioner's heart beyond the self towards the welfare of all creation.",
                type: "Peace Mantra",
                usage: "Frequently used as a closing dedication (pūrṇapūjā) to offer the merits of practice for universal benefit."
              },
              {
                title: "Auspicious Mind",
                devanagari: "भद्रं नो अपि वातय मनः",
                sanskrit: "bhadraṃ no api vātaya manaḥ",
                translation: "May an auspicious mind blow towards us.",
                explanation: "A prayer for wholesome, beneficial thoughts and intentions to be carried to us, as if by a favorable wind.",
                type: "Peace Mantra",
                usage: "Chanted for mental purification and to cultivate a positive, dharmic mindset."
              },
              {
                title: "Triple Peace",
                devanagari: "ॐ शान्तिः शान्तिः शान्तिः",
                sanskrit: "oṃ śāntiḥ śāntiḥ śāntiḥ",
                translation: "Om. Peace, peace, peace.",
                explanation: "A terse yet profound invocation of peace (śānti) in the three realms: the physical, the mental, and the spiritual or circumstantial.",
                type: "Peace Mantra",
                usage: "Typically recited three times at the end of rituals or practice sessions to seal in peace on all levels."
              },
        ],
                wisdom: [
                  {
                    title: "Lead Me from Unreal to Real",
                    devanagari: "असतो मा सद्गमय ।\nतमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ॥",
                    sanskrit: "asato mā sadgamaya ।\ntamaso mā jyotirgamaya ।\nmṛtyormā amṛtaṃ gamaya ॥",
                    translation: "From the unreal, lead me to the Real. From darkness, lead me to Light. From death, lead me to Immortality.",
                    explanation: "The great dictum (mahāvākya) from the Bṛhadāraṇyaka Upaniṣad. In three succinct pleas, it encapsulateth the entire spiritual quest: from ignorance (avidyā) to knowledge (vidyā), from bondage (saṃsāra) to liberation (mokṣa).",
                    type: "Great Saying",
                    usage: "Contemplated as the supreme prayer and the very definition of the goal of all spiritual practice."
                  },
                  {
                    title: "The Primordial Creator",
                    devanagari: "यो ब्रह्माणं विदधाति पूर्वं यो वै वेदांश्च प्रहिणोति तस्मै ।\nतं ह देवमात्म बुद्धिप्रकाशं मुमुक्षुर्वै शरणमहं प्रपद्ये ॥",
                    sanskrit: "yo brahmāṇaṃ vidadhāti pūrvaṃ yo vai vedāṃśca prahiṇoti tasmai ।\ntaṃ ha devamātma buddhiprakāśaṃ mumukṣurvai śaraṇamahaṃ prapadye ॥",
                    translation: "He who in the beginning created Brahmā, and who indeed bestowed the Vedas—unto that Deity, who is my own Self, the light of intelligence, I, a seeker of liberation, go for refuge.",
                    explanation: "A verse that synthesizeth the personal and impersonal aspects of the Divine. The ultimate cause of the universe and the revealer of scripture is none other than the innermost Self (ātmā), which is pure consciousness. The seeker surrenders to this truth.",
                    type: "Great Saying",
                    usage: "A mantra of total surrender (śaraṇāgati) for the aspirant seeking liberation, recognizing the Source within."
                  },
                  {
                    title: "Hymn of Fullness",
                    devanagari: "पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते ।\nपूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥",
                    sanskrit: "pūrṇamadaḥ pūrṇamidaṃ pūrṇāt pūrṇamudacyate ।\npūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate ॥",
                    translation: "That is Fullness; this is Fullness. From Fullness, Fullness proceedeth. Taking Fullness from Fullness, Fullness indeed remaineth.",
                    explanation: "A profound declaration of non-duality (advaita) from the Īśā Upaniṣad. It stateth that Brahman, the Absolute, is infinite completeness. The apparent universe, arising from It, is also complete. No 'subtraction' from the infinite can diminish it; it remaineth ever full.",
                    type: "Upaniṣadic Verse",
                    usage: "Meditated upon to grasp the nature of Brahman as limitless and non-dual, and to see the world as a manifestation of that perfection."
                  },
                  {
                    title: "May We Study Together",
                    devanagari: "सह नाववतु सह नौ भुनक्तु सह वीर्यं करवावहै ।\nतेजस्वि नावधीतमस्तु मा विद्विषावहै ॥",
                    sanskrit: "saha nāvavatu saha nau bhunaktu saha vīryaṃ karavāvahai ।\ntejasvi nāvadhītamastu mā vidviṣāvahai ॥",
                    translation: "May He protect us both together. May He nourish us both together. May we work together with great vigor. May our study be brilliant and effective. May we never quarrel with each other.",
                    explanation: "The traditional prayer before the study of sacred texts (svādhyāya). It emphasizeth the cooperative spirit of learning, seeking divine protection and nourishment, and praying for the study to be fruitful and free from discord between teacher and student or amongst fellow students.",
                    type: "Study Prayer",
                    usage: "Recited by teachers and students at the beginning of a class or personal study session to set a sacred, collaborative intention."
                  },
                  {
                    title: "Universal Peace Prayer",
                    devanagari: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥",
                    sanskrit: "sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ ।\nsarve bhadrāṇi paśyantu mā kaścit duḥkhabhāg bhavet ॥",
                    translation: "May all be happy. May all be free from disease. May all see what is auspicious. May none suffer sorrow.",
                    explanation: "Perhaps the most famous Sanskrit prayer for universal well-being. It embodyeth the highest ethic of yoga and sanātana dharma: the expansion of one's concern from the narrow self to the welfare of all beings (sarva bhūta hita).",
                    type: "Peace Verse",
                    usage: "Widely chanted at the end of prayers, meditation sessions, and gatherings to dedicate the merit and wish well for the entire world."
                  },
                  {
                    title: "Closing Peace Dedication",
                    devanagari: "स्वस्तिप्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः ।\nगोब्राह्मणेभ्यः शुभमस्तु नित्यं लोकाः समस्ताः सुखिनो भवन्तु ॥",
                    sanskrit: "svasti prajābhyaḥ paripālayantāṃ nyāyena mārgeṇa mahīṃ mahīśāḥ ।\ngo brāhmaṇebhyaḥ śubhamastu nityṃ lokāḥ samastāḥ sukhino bhavantu ॥",
                    translation: "May the rulers of the earth protect the people by the path of justice. May there ever be welfare for cows and brāhmaṇas (the wise). May all beings in all worlds be happy.",
                    explanation: "A traditional, comprehensive closing prayer (pūrṇāhuti). It encompasseth social order (righteous rulers), environmental and intellectual welfare (symbolized by cows and the learned), and culminates in the universal wish for happiness. It reflecteth the holistic vision of a harmonious cosmos.",
                    type: "Peace Prayer",
                    usage: "Used as a formal conclusion to Vedic rituals and extended spiritual practices to ground the benefits in worldly and cosmic harmony."
                  },
                  {
                    title: "Timely Rain",
                    devanagari: "काले वर्षतु पर्जन्यः पृथिवी सस्यशालिनी ॥\nदेशोऽयं क्षोभरहितः ब्राह्मणास्सन्तु निर्भयाः ॥",
                    sanskrit: "kāle varṣatu parjanyaḥ pṛthivī sasyaśālinī ॥\ndeśo'yaṃ kṣobharahitaḥ brāhmaṇāssantu nirbhayāḥ ॥",
                    translation: "May the rain-god shower rain in due season. May the earth be rich with grain. May this country be free from disturbance. May the brāhmaṇas (the protectors of wisdom) be free from fear.",
                    explanation: "A prayer for the foundational conditions of a prosperous and peaceful society: agricultural fertility, political stability, and the safety of the custodians of knowledge and morality. It acknowledgeth the interdependence of nature, governance, and culture.",
                    type: "Peace Prayer",
                    usage: "Chanted in rituals for the welfare of the nation, especially in agricultural communities, and for general peace and prosperity."
                  },
                  {
                    title: "Universal Perfection",
                    devanagari: "सर्वेशां स्वस्तिर्भवतु । सर्वेशां शान्तिर्भवतु ॥\nसर्वेशां पुर्णंभवतु । सर्वेशां मङ्गलंभवतु ॥",
                    sanskrit: "sarveśāṃ svastirbhavatu sarveśāṃ śāntirbhavatu ॥\nsarveśāṃ purṇaṃbhavatu sarveśāṃ maṅgalaṃbhavatu ॥",
                    translation: "May there be well-being for all. May there be peace for all. May there be fullness for all. May there be auspiciousness for all.",
                    explanation: "A succinct and all-encompassing fourfold blessing. It covereth physical health (svasti), mental and external peace (śānti), spiritual completeness (pūrṇam), and the flowering of all that is good and prosperous (maṅgalam).",
                    type: "Peace Prayer",
                    usage: "A versatile blessing that can be appended to any practice or used as a standalone prayer for universal good."
                  }
                ],
                ritual: [
                    {
                      title: "Gaṇapati Praises",
                      devanagari: "गणानां त्वा गणपतिंहवामहे कविं कवीनामुपमश्रवस्तमम् ।\nज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आनःशृण्वन्नूतिभिःसीदसादनम् ॥\nॐ श्री महागणपतये नमः ॥",
                      sanskrit: "gaṇānāṃ tvā gaṇapatiṃ havāmahe kaviṃ kavīnāmupamaśravastamam ।\njyeṣṭharājaṃ brahmaṇāṃ brahmaṇaspata ānaḥśṛṇvanūtibhiḥsīdasādanam ॥\noṃ śrī mahāgaṇapataye namaḥ ॥",
                      translation: "O Lord of hosts, Thee we invoke, the poet of poets, of unsurpassed renown, the supreme king, the lord of prayer; hear our invocation and be seated.",
                      explanation: "A venerable Vedic hymn inviting Gaṇeśa to preside over the ceremony. It extolleth his wisdom as the 'chief poet' and his sovereignty as the 'lord of hosts,' ensuring his benevolent presence.",
                      type: "Gaṇeśa Hymn",
                      usage: "Sung at the start of major rituals and ceremonies to invite Gaṇeśa's presence and remove obstacles."
                    },
                  {
                    title: "Vedic Sevenfold Invocation",
                    devanagari: "ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः । ॐ जनः । ॐ तपः । ॐ सत्यम् ।",
                    sanskrit: "oṃ bhūḥ । oṃ bhuvaḥ । oṃ suvaḥ । oṃ mahaḥ । oṃ janaḥ । oṃ tapaḥ । oṃ satyam ।",
                    translation: "Om. Bhūḥ (the physical plane). Om. Bhuvaḥ (the intermediate plane). Om. Suvaḥ (the celestial plane). Om. Mahaḥ (the plane of mahat). Om. Janaḥ (the plane of progenitors). Om. Tapaḥ (the plane of austerity). Om. Satyam (the plane of truth).",
                    explanation: "The seven great utterances (sapta vyāhṛtiḥ). They are the primordial vibrations that project and sustain the seven layers of manifested existence, from the gross earth to the subtle realm of absolute truth. Chanting them invoke the sacred presence throughout all dimensions.",
                    type: "Vedic Invocation",
                    usage: "Fundamental to almost all Vedic rituals. Chanted at the beginning to sanctify the space and invoke the divine presence across all planes of reality."
                  },
                  {
                    title: "Gāyatrī Mantra",
                    devanagari: "ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥",
                    sanskrit: "oṃ tat savitur vareṇyaṃ bhargo devasya dhīmahi ।\ndhiyo yo naḥ pracodayāt ॥",
                    translation: "Om. Let us meditate on the glorious effulgence of that divine Savitṛ (the Sun, the illuminator). May He inspire our intellect.",
                    explanation: "The supreme mantra from the Ṛg Veda, addressed to Savitṛ, the solar deity who representsthe life-giving, illuminating power of consciousness itself. It is a prayer for that divine light to dawn within and awaken the discriminative faculty (buddhi).",
                    type: "Vedic Mantra",
                    usage: "Traditionally chanted at sunrise, noon, and sunset. It is a core practice (sādhana) for purifying the mind, acquiring wisdom, and connecting with the solar spiritual energy."
                  },
                  {
                    title: "Waters, Light, Taste, Nectar, Brahman",
                    devanagari: "ॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥",
                    sanskrit: "oṃ āpo jyotī raso'mṛtaṃ brahma bhūr bhuvaḥ svar om ॥",
                    translation: "Om. Waters, light, essence, nectar, Brahman—Bhūr, Bhuvaḥ, Suvaḥ—Om.",
                    explanation: "A powerful condensation of cosmology. It linketh the fundamental principles of creation (the elements, light, subtle essence, immortality) with the supreme reality (Brahman) and the three primary worlds, all held within the sonic matrix of Om.",
                    type: "Vedic Mantra",
                    usage: "Used in contemplative rituals and offerings (homa) to acknowledge the divine presence in every aspect of creation and to unify the microcosm with the macrocosm."
                  },
                    {
                      title: "Praise to Sacred Speech",
                      devanagari: "नमो ब्रह्मणे नमो अस्त्वग्नये नमः पृथिव्यै नम ओषधीभ्यः ।\nनमो वाचे नमो वाचस्पतये नमो विष्णवे बृहते करोमि ॥",
                      sanskrit: "namo brahmaṇe namo astvagnaye namaḥ pṛthivyai nama oṣadhībhyaḥ ।\nnamo vāce namo vācaspataye namo viṣṇave bṛhate karomi ॥",
                      translation: "Homage to Brahmā. Homage to Agni. Homage to Pṛthivī (Earth). Homage to the herbs. Homage to Vāc (Speech). Homage to the Lord of Speech (Vācaspati). Homage to Viṣṇu the Vast. This I perform.",
                      explanation: "A concise yet comprehensive series of salutations (namaḥ). It acknowledgeth and payeth respect to the divine principle in every layer of existence: the creator god, the sacrificial fire, the earth, the plant kingdom, the faculty of speech, its divine ruler, and finally the all-pervading sustainer, Viṣṇu. It is an act of seeing the sacred in all.",
                      type: "Salutation Mantra",
                      usage: "Can be used as a short practice of reverence and connectedness before meals, before using herbs (medicine), before speaking or writing, or simply as a mindfulness exercise to honor the cosmos."
                    },
                    {
                      title: "Three-Eyed Śiva Mantra",
                      devanagari: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥",
                      sanskrit: "tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam ।\nurvārukamiva bandhanān mṛtyormukṣīya māmṛtāt ॥",
                      translation: "We worship the three-eyed One (Tryambaka), the fragrant one, the nourisher of all. May He liberate us from death for the sake of immortality, as a ripe cucumber is freed from its stem.",
                      explanation: "A majestic mantra from the Ṛg Veda, later associated with Śiva. It praiseth his three eyes (sun, moon, fire; or the three states of consciousness) and his life-sustaining nature. The core prayer is for liberation (mokṣa) from the cycle of death (saṃsāra), described with the beautiful simile of a ripe fruit naturally detaching from its vine—a effortless, ripe letting-go into immortality.",
                      type: "Vedic Mantra",
                      usage: "A powerful mantra for seeking liberation, overcoming fear of death, and invoking Śiva's protective and liberating grace. Often used in rituals for healing and overcoming difficulties."
                    },
                  {
                    title: "Harmony of Speech and Mind Prayer",
                    devanagari: "वाङ्मे मनसि प्रतिष्ठिता । मनो मे वाचि प्रतिष्ठितम् । आविराविर्म एधि ।\nवेदस्य म आणीस्थः । श्रुतं मे मा प्रहासीः । अनेनाधीतेना अहोरात्रान्सन्दधामि ।\nऋतं वदिष्यामि । सत्यं वदिष्यामि । तन्मामवतु । तद्वक्तारमवतु ।\nअवतु माम् । अवतु वक्तारमवतु वक्तारम् ॥",
                    sanskrit: "vāṅme manasi pratiṣṭhitā । mano me vāci pratiṣṭhitam । āvirāvirma edhi ।\nvedasya ma āṇīsthaḥ । śrutaṃ me mā prahāsīḥ । anenādhītenā । ahorātrānsandadhāmi ।\nṛtaṃ vadiṣyāmi । satyaṃ vadiṣyāmi । tanmāmavatu । tadvaktāramavatu ।\navatu mām । avatu vaktāramavatu vaktāram ॥",
                    translation: "May my speech be rooted in mind, mind rooted in speech. O Revealed One, reveal Thyself. May I grasp the Veda's essence. May what I have heard not depart from me. With this study, I join together day and night. I shall speak the Cosmic Order (Ṛta). I shall speak the Truth (Satya). May That protect me. May That protect the speaker. May It protect me. May It protect the speaker.",
                    explanation: "The extended version of the 'Harmony of Speech and Mind' prayer. It includeth a vow to study diligently, a commitment to speak only truth and cosmic law, and repeated prayers for protection for both the student and the teacher of this sacred knowledge.",
                    type: "Brāhmaṇa Recitation",
                    usage: "Used in formal initiation into Vedic study or at the beginning of a prolonged course of scriptural learning."
                  },
                    {
                      title: "Lord of Sacred Hymns",
                      devanagari: "यश्छन्दसामृषभो विश्वरूपः । छन्दोभ्योऽध्यमृताथ्संबभूव ।\nस मेन्द्रो मेधया स्पृणोतु । अमृतस्य देवधारणो भूयासम् ।\nशरीरं मे विचर्षणम् । जिह्वा मे मधुमत्तमा ।\nकर्णाभ्यां भूरिविश्रुवम् । ब्रह्मणः कोशोऽसि मेधया पिहितः ।\nश्रुतं मे गोपाय ॥",
                      sanskrit: "yaśchandasāmṛṣabho viśvarūpaḥ । chandobhyo'dhyamṛtāthsaṃbabhūva ।\nsa mendro medhayā spṛṇotu । amṛtasya devadhāraṇo bhūyāsam ।\nśarīraṃ me vicarṣaṇam । jihvā me madhumattamā ।\nkarṇābhyāṃ bhūriviśruvam । brahmaṇaḥ kośo'si medhayā pihitaḥ ।\nśrutaṃ me gopāya ॥",
                      translation: "He who is the bull (source) of the Vedic meters, of universal form, who arose as the supreme nectar from the meters—may that Indra fill me with intelligence. May I become a vessel holding the divine nectar. May my body be capable, my tongue most honeyed, my ears hear abundant fame. Thou art the sheath of Brahman, covered by intellect. Protect what I have heard.",
                      explanation: "A prayer to the divine principle that is the source of the Vedic hymns and their meter (chandas). The aspirant prayeth to be filled with the illuminating intelligence (medhā) that comprehends this source, to become a container for immortal wisdom (amṛta), and for physical and sensory faculties to be perfected in service of this knowledge. The final line is a direct address to the intellect itself as the 'sheath' of Brahman, asking it to guard the sacred knowledge once received.",
                      type: "Wisdom Mantra",
                      usage: "Used by scholars, poets, and seekers of wisdom to invoke the grace for deep understanding, retention, and eloquent expression of sacred knowledge."
                    },
                  {
                    title: "Nourishment of the Limbs",
                    devanagari: "आप्यायन्तु ममाङ्गानि वाक्प्राणश्चक्षुः श्रोत्रमथो बलमिन्द्रियाणि च सर्वाणि ।\nसर्वम् ब्रह्मोपनिषदम् । माऽहं ब्रह्म निराकुर्यां ।\nमा मा ब्रह्म निराकरोद निराकरणमस्त्व निराकरणम् मेऽस्तु ।\nतदात्मनि निरते य उपनिषत्सु धर्मास्ते मयि सन्तु ते मयि सन्तु ॥",
                    sanskrit: "āpyāyantu mamāṅgāni vākprāṇaścakṣuḥ śrotramatho balamindriyāṇi ca sarvāṇi ।\nsarvam brahmopaniṣadam । mā'haṃ brahma nirākuryāṃ ।\nmā mā brahma nirākaroda nirākaraṇamastva nirākaraṇam me'stu ।\ntadātmani nirate ya upaniṣatsu dharmāste mayi santu te mayi santu ॥",
                    translation: "May my limbs, speech, breath, eye, ear, strength, and all senses be nourished. All this is Brahman, as taught in the Upaniṣads. May I never deny Brahman. May Brahman never reject me. Let non-rejection be my state, let me be accepted. May those virtues which are described in the Upaniṣads for one devoted to the Self be in me, may they be in me.",
                    explanation: "A profound prayer for holistic nourishment—physical, vital, and sensory. It then boldly declar eth the Upaniṣadic teaching of 'All this is verily Brahman' (sarvam khalv idaṃ brahma). The practitioner voweth never to deny this truth and prayeth not to be rejected by Brahman, seeking instead total acceptance and the indwelling of all Upaniṣadic virtues.",
                    type: "Nourishment Mantra",
                    usage: "Chanted for health and vitality, but more importantly, as a daily reaffirmation of the supreme non-dual truth and a prayer for the grace to live according to that knowledge."
                  },
                    {
                      title: "Vedic Peace Invocation",
                      devanagari: "शं नो मित्रः शं वरुणः । शं नो भवत्वर्यमा ।\nशं नो इन्द्रो बृहस्पतिः । शं नो विष्णुरुरुक्रमः ।\nनमो ब्रह्मणे । नमस्ते वायो । त्वमेव प्रत्यक्षं ब्रह्मासि ।\nत्वामेव प्रत्यक्षं ब्रह्म वदिष्यामि । ॠतं वदिष्यामि ।\nसत्यं वदिष्यामि । तन्मामवतु । तद्वक्तारमवतु ।\nअवतु माम् । अवतु वक्तारम् ॥",
                      sanskrit: "śaṃ no mitraḥ śaṃ varuṇaḥ । śaṃ no bhavatvaryamā ।\nśaṃ no indro bṛhaspatiḥ । śaṃ no viṣṇururukramaḥ ।\nnamo brahmaṇe । namaste vāyo । tvameva pratyakṣaṃ brahmāsi ।\ntvāmeva pratyakṣaṃ brahma vadiṣyāmi । ṝtaṃ vadiṣyāmi ।\nsatyaṃ vadiṣyāmi । tanmāmavatu । tadvaktāramavatu ।\navatu mām । avatu vaktāram ॥",
                      translation: "Peace from Mitra, peace from Varuṇa. May Aryaman grant us peace. Peace from Indra and Bṛhaspati. Peace from Viṣṇu of the wide strides. Homage to Brahman. Homage to Vāyu (Wind). Thou art the directly perceptible Brahman. Thee, the directly perceptible Brahman, I shall proclaim. I shall proclaim Ṛta (Cosmic Order). I shall proclaim Satya (Truth). May That protect me. May That protect the speaker.",
                      explanation: "A comprehensive peace invocation. It first calls upon various Vedic deities (representing different cosmic forces and principles) to bestow peace. It then recognizeth the element of Wind (Vāyu) as the immediately evident manifestation of Brahman in the form of life breath (prāṇa). The speaker then vows to proclaim this Brahman, along with Truth and Order, and seeks protection for this act of sacred speech.",
                      type: "Vedic Peace Mantra",
                      usage: "Chanted at the beginning of important discourses or teachings to invoke peace from all quarters and to sanctify the act of speaking about Brahman."
                    },
                    {
                      title: "Auspiciousness from the Gods",
                      devanagari: "भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः ।\nस्थिरैरङ्गैः तुष्टुवाग्ं सस्तनूभिः । व्यशेम देवहितं यदायुः ॥\nस्वस्ति न इन्द्रो वृद्धश्रवाः । स्वस्ति नः पूषा विश्ववेदाः ।\nस्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः । स्वस्ति नो बृहस्पतिर्दधातु ॥",
                      sanskrit: "bhadraṃ karṇebhiḥ śṛṇuyāma devāḥ । bhadraṃ paśyemākṣabhiryajatrāḥ ।\nsthirairaṅgaiḥ tuṣṭuvāgṃ sastanūbhiḥ । vyaśema devahitaṃ yadāyuḥ ॥\nsvasti na indro vṛddhaśravāḥ । svasti naḥ pūṣā viśvavedāḥ ।\nsvasti nastārkṣyo ariṣṭanemiḥ । svasti no bṛhaspatirdadhātu ॥",
                      translation: "O Gods, may we hear what is auspicious with our ears. O Worshipful Ones, may we see what is auspicious with our eyes. With steady limbs and bodies, may we, praising Thee, enjoy the life span allotted by the Gods. May Indra of great fame grant us well-being. May Pūṣan, the all-knowing, grant us well-being. May Tārkṣya of the unbroken felly grant us well-being. May Bṛhaspati bestow well-being upon us.",
                      explanation: "A beautiful and sensory prayer for auspiciousness (bhadram, svasti). It asketh the deities to grant favorable experiences through the senses, physical health to offer praise, and a divinely ordained lifespan. It then specifically invokes several deities for overall welfare and protection.",
                      type: "Auspicious Mantra",
                      usage: "Chanted for general well-being, at the start of journeys, or during rites of passage to invoke divine grace for a favorable and protected life experience."
                    },
                  {
                    title: "Completion of the Sacrifice",
                    devanagari: "तच्छं योरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शन्नो अस्तु द्विपदे । शं चतुष्पदे ॥",
                    sanskrit: "tacchaṃ yorāvṛṇīmahe । gātuṃ yajñāya । gātuṃ yajñapataye ।\ndaivī svastirastu naḥ । svastirmānuṣebhyaḥ ।\nūrdhvaṃ jigātu bheṣajam । śanno astu dvipade । śaṃ catuṣpade ॥",
                    translation: "For this, we choose your protection—for the success of the sacrifice, for the peace of the sacrificer. May divine well-being be ours. May well-being be for humans. May the healing power go upward. May there be peace for the two-legged. May there be peace for the four-legged.",
                    explanation: "A concluding prayer for a Vedic sacrifice (yajña). It seeketh divine shelter for the ritual's success and the patron's peace. It then expandeth the blessing outward: to divine beings, to humanity, and even sends the healing energy of the ritual upwards for universal benefit. It culminates in a wish for peace for all creatures, biped and quadruped.",
                    type: "Vedic Ritual",
                    usage: "Recited at the very end (pūrṇāhuti) of a Vedic homa or yajña to complete the ritual, distribute its benefits universally, and restore peace and balance."
                  },
                  {
                    title: "Three-Spoked Sacred Declaration",
                    devanagari: "अहं वृक्षस्य रेरिवा । कीर्तिः पृष्ठं गिरेरिव ।\nऊर्ध्वपवित्रो वाजिनीव स्वमृतमस्मि ।\nद्रविणग्ं सवर्चसम् । सुमेध अमृतोक्षितः ।\nइति त्रिशङ्कोर्वेदानुवचनम् ॥",
                    sanskrit: "ahaṃ vṛkṣasya reriva । kīrtiḥ pṛṣṭhaṃ gireriva ।\nūrdhvapavitro vājinīva svamṛtamasmi ।\ndraviṇagṃ savarcasam । sumedhā amṛtokṣitaḥ ।\niti triśaṅkorvedānuvacanam ॥",
                    translation: "I move like a bird among the trees. My fame is like a mountain peak. My purity is upward, like a horse's mane. I am self-immortal. I am wealth and splendor. I am of good intelligence, anointed with immortality. Thus is the Vedic declaration of Triśaṅku.",
                    explanation: "The ecstatic declaration of the sage Triśaṅku. It is a series of powerful identifications: with freedom (the bird), with exalted status (mountain peak), with upward-moving purity, with intrinsic immortality, with abundant spiritual wealth, and with wisdom baptized in the nectar of immortality. It is a statement of realized identity with the supreme Self.",
                    type: "Vedic Declaration",
                    usage: "Contemplated or recited as an affirmation of one's true, divine nature—a powerful tool for self-empowerment and breaking limiting identifications."
                  },
                    {
                      title: "Honeyed Nectar Hymn",
                      devanagari: "मधु वाता ऋतायते मधु क्षरन्ति सिन्धवः ।\nमाध्वीर्नः सन्त्वोषधीः ॥\nमधु नक्तमुतोषसो मधुमत्पार्थिवं रजः ।\nमधु द्यौरस्तु नः पिता ॥\nमधुमान्नो वनस्पतिर्मधुमाँ अस्तु सूर्यः ।\nमाध्वीर्गावो भवन्तु नः ॥",
                      sanskrit: "madhu vātā ṛtāyate madhu kṣaranti sindhavaḥ ।\nmādhvīrnaḥ santvoṣadhīḥ ॥\nmadhu naktamutoṣaso madhumatpārthivaṃ rajaḥ ।\nmadhu dyaurastu naḥ pitā ॥\nmadhumān no vanaspatirmadhumām̐ astu sūryaḥ 。\nmādhvīrgāvo bhavantu naḥ ॥",
                      translation: "May the winds be honey for us, may the rivers flow with honey; may the herbs be honey-sweet. May the night and dawn be honeyed, may the dust of the earth be full of honey, may heaven our father be honey. May the trees be honey for us, may the sun be full of honey, may our cows yield honeyed milk.",
                      explanation: "The beautiful 'Madhu Sūkta' from the Ṛg Veda. It is a prayer for the essential sweetness (mādhu) and auspiciousness of all aspects of nature and existence, seeing the divine nectar in everything.",
                      type: "Vedic Hymn",
                      usage: "Chanted to cultivate gratitude for nature and to invoke universal sweetness, harmony, and abundance."
                    },
                    {
                      title: "Praise to Sweet Speech",
                      devanagari: "नमो वाचे या चोदिता या चानुदिता तस्यै वाचे नमो नमो वाचे नमो वाचस्पतये नम ऋषिभ्यो मन्त्रकृद्भ्यो मन्त्रपतिभ्यो मामामृषयो मन्त्रकृतो मन्त्रपतयः परादुर्माऽहमृषीन् मन्त्रकृतो मन्त्रपतीन् परादां वैश्वदेवीं वाचमुद्यासँ शिवामदस्तांजुष्टां देवेभ्यः शर्म मे द्यौः शर्म पृथिवी शर्म विश्वमिदं जगत् ।\nशर्म चन्द्रश्च सूर्यश्च शर्म ब्रह्मप्रजापती । भूतं वदिष्ये भुवनं वदिष्ये तेजो वदिष्ये यशो वदिष्ये तपो वदिष्ये ब्रह्म वदिष्ये सत्यं वदिष्ये तस्मा अहमिदमुपस्तरणमुपस्तृण उपस्तरणं मे प्रजायै पशूनां भुयादुपस्तरणमहं प्रजायै पशूनां भूयासं प्राणापानौ मृत्योर्मा पातं प्राणापानौ मा माहासिष्टं मधु मनिष्ये मधु जनिष्ये मधु वक्ष्यामि मधु वदिष्यामि मधुमतीं देवेभ्यो वाचमुद्यासँ शुश्रूषेण्यां मनुष्येभ्यस्तं मा देवा अवन्तु शोभायै पितरोऽनुमदन्तु ॥",
                      sanskrit: "namo vāce yā coditā yā cānuditā tasyai vāce namo namo vāce namo vācaspataye nama ṛṣibhyo mantrakṛdbhyo mantrapatibhyo māmāmṛṣayo mantrakṛto mantrapatayaḥ parādurmā'hamṛṣīn mantrakṛto mantrapatīn parādāṃ vaiśvadevīṃ vācamudyāsaṃ śivāmadastāṃjuṣṭāṃ devebhyaḥ śarma me dyauḥ śarma pṛthivī śarma viśvamidaṃ jagat ।\nśarma candraśca sūryaśca śarma brahmaprajāpatī । bhūtaṃ vadiṣye bhuvanaṃ vadiṣye tejo vadiṣye yaśo vadiṣye tapo vadiṣye brahma vadiṣye satyaṃ vadiṣye tasmā ahamidamupastaraṇamupastṛṇa upastaraṇaṃ me prajāyai paśūnāṃ bhuyādupastaraṇamahaṃ prajāyai paśūnāṃ bhūyāsaṃ prāṇāpānau mṛtyormā pātaṃ prāṇāpānau mā māhāsiṣṭaṃ madhu maniṣye madhu janiṣye madhu vakṣyāmi madhu vadiṣyāmi madhumatīṃ devebhyo vācamudyāsaṃ śuśrūṣeṇyāṃ manuṣyebhyastaṃ mā devā avantu śobhāyai pitaro'numadantu ॥",
                      translation: "Homage to Speech, whether impelled or unimpelled. Homage to Speech, homage to the Lord of Speech. Homage to the seers, the mantra-makers, the lords of mantras. O seers, mantra-makers, lords of mantras, forsake me not. May I never forsake the seers, mantra-makers, lords of mantras. I offer this pleasant, agreeable, universal divine Speech to the Gods. May there be shelter for me: shelter from heaven, shelter from earth, shelter from this whole universe. Shelter from the moon and the sun, shelter from Brahmā and Prajāpati. I shall speak of Being. I shall speak of the World. I shall speak of Splendor. I shall speak of Glory. I shall speak of Austerity. I shall speak of Brahman. I shall speak of Truth. For this, I spread this as my bedding. May this bedding cause increase of progeny and cattle for me. May I attain increase of progeny and cattle. May my in-breath and out-breath protect me from death. May they never desert me. I shall think honey. I shall generate honey. I shall speak honey. I shall utter honey. I offer honeyed speech to the Gods, attentive speech to men. May the Gods protect this for splendor. May the fathers rejoice.",
                      explanation: "An extraordinarily rich and complex ritual text. It is a comprehensive offering of the faculty of speech itself. It beginneth with homage to speech and its divine sources. It then maketh a series of vows to speak only of supreme, true, and auspicious things. It useth the metaphor of spreading a 'bedding' for prosperity. It prayeth for protection of the vital breaths and culminates in the offering of 'honeyed' (sweet, truthful, beneficial) speech to gods and men alike. It is a complete sanctification of one's capacity for communication.",
                      type: "Vedic Praise",
                      usage: "Used in the most solemn rituals and initiations where sacred speech is paramount—such as the initiation of a Vedic student (upanayana) or the consecration of a teacher. It is a blueprint for using speech as the highest form of yajña (sacrifice)."
            }
        ]
      }
    },

    zh: {
      // 页面基本信息
      meta: {
        title: "梵语圣音集",
        subtitle: "संस्कृतशास्त्रसङ्ग्रहः",
        intro: "梵语圣音传统的系统性文献整理，依据文学类型与修习应用分类，构建从基础音节到哲学诗节的完整知识体系。",
      },

      // 标签页配置
      sections: {
        devotional: {
          tabTitle: "礼敬颂赞",
          pageTitle: "स्तोत्र · 礼敬颂赞",
          subtitle: "传统礼敬与赞颂的颂文",
          literaryType: "Stotra",
          practiceType: "Āvāhanam / Pūjā",
          description: "包含开场礼敬、敬师礼拜及吠陀赞诗等文献形式，旨在确立修习方向与传承法脉的联结。"
        },
          practice: {
            tabTitle: "修持真言",
            pageTitle: "मन्त्र · 修持真言",
            subtitle: "用于个人修持的种子音与短咒",
            literaryType: "Mantra",
            practiceType: "Japa Sādhana",
            description: "涵盖种子音节(bīja)、短咒(laghu)及呼吸真言等类别，适用于日常持诵、体式修习与呼吸专注等实践场景。"
          },
        wisdom: {
          tabTitle: "智慧诗节",
          pageTitle: "श्लोक · 智慧诗节",
          subtitle: "哲学智慧与和平祷文",
          literaryType: "Śloka / Mahāvākya",
          practiceType: "Adhyayana",
          description: "选自奥义书及古典文献的哲学核心表述，揭示修行终极指向，涵盖和平祷文与功德回向等内容。"
        },
        ritual: {
          tabTitle: "仪式诵文",
          pageTitle: "ब्राह्मण · 仪式诵文",
          subtitle: "传统仪式与经典诵文",
          literaryType: "Brāhmaṇa / Sūtra",
          practiceType: "Pūjā / Adhyayana",
          description: "包含吠陀仪式诵文、经典箴言及特殊礼仪诵文，呈现梵语传统仪轨的完整体系。"
        }
      },

      // 咒语内容
      mantras: {
        devotional: [
          {
            title: "开场礼敬颂",
            devanagari: "वन्दे गुरूणां चरणारविन्दे संदर्शितस्वात्मसुखावबोधे ।\nनिःश्रेयसे जाङ्गलिकायमाने संसारहालाहलमोहशान्त्यै ॥",
            sanskrit: "vande gurūṇāṃ caraṇāravinde saṃdarśitasvātmasukhāvabodhe ।\nniḥśreyase jāṅgalikāyamāne saṃsārahālāhalamohaśāntyai ॥",
            translation: "敬礼师尊莲足前，开示真我安乐禅；\n为求解脱施良药，灭尽痴毒醒迷眠。",
            explanation: "阿斯汤加练习开场颂。确立师徒法脉关系，设定以根除灵性无明为目标的练习意向。",
            type: "上师颂",
            usage: "练习开场，法脉联结"
          },
          {
            title: "礼敬帕坦伽利",
            devanagari: "आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् ।\nसहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥",
            sanskrit: "ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam ।\nsahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥",
            translation: "上身人形持法器，螺轮剑戟威德全；\n头顶皎洁千蛇冠，敬礼帕坦伽利前。",
            explanation: "对圣哲帕坦伽利的形象描绘。海螺代表神圣音声，轮盘代表时间与正法，宝剑代表分辨力。",
            type: "圣哲颂",
            usage: "瑜伽传统礼敬"
          },
          {
            title: "上师礼赞三重颂",
            devanagari: "आखण्डमण्डलाकारं व्याप्तं येन चराचरम् ।\nतत्पदं दर्शितं येन तस्मै श्रीगुरवे नमः ॥१॥\n\nअज्ञानतिमिरान्धस्य ज्ञानाञ्जनशालाकया ।\nचक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः ॥२॥\n\nगुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः ।\nगुरुः साक्षात्परं ब्रह्म तस्मै श्रीगुरवे नमः ॥३॥",
            sanskrit: "ākhaṇḍamaṇḍalākāraṃ vyāptaṃ yena carācaram ।\ntatpadaṃ darśitaṃ yena tasmai śrīgurave namaḥ ॥1॥\n\najñānatimirāndhasya jñānāñjanaśālākayā ।\n cakṣurunmīlitaṃ yena tasmai śrīgurave namaḥ ॥2॥\n\ngururbrahmā gururviṣṇur gururdevo maheśvaraḥ ।\nguruḥ sākṣāt paraṃ brahma tasmai śrīgurave namaḥ ॥ ॥3॥",
            translation: "无分周圆遍法界，动静万有皆渗透；\n至上境界师指引，顶礼吉祥上师佑。\n\n愚痴暗障覆心灵，智光如篦刮目明；\n师尊启我真知见，顶礼吉祥上师名。\n\n师是创造梵天身，师是护持毗湿奴；\n师即毁灭大自在，现前绝对梵体真。",
            explanation: "经典上师礼赞三重颂：1) 赞师示现绝对实相；2) 赞师开启智慧之眼；3) 赞师即三相神、即绝对梵。",
            type: "敬师礼拜",
            usage: "上师深度礼赞"
          },
          {
            title: "法脉传承赞",
            devanagari: "सदाशिवसमारम्भां शङ्कराचार्यमध्यमाम् ।\nअस्मदाचार्यपर्यन्तां वन्दे गुरुपरम्पराम् ॥",
            sanskrit: "sadāśiva samārambhāṃ śaṅkarācārya madhyamām ।\nasmadācārya paryantāṃ vande guru paramparām ॥",
            translation: "敬礼上师传承系，萨埵希瓦初开启；\n商羯罗师为中继，直至我师法脉继。",
            explanation: "礼敬从永恒湿婆开始，经商羯罗大师，直至当代上师的完整法脉传承。",
            type: "法脉传承颂",
            usage: "传承礼敬，法脉追溯"
          },
          {
            title: "传承系谱颂",
            devanagari: "नारायणं पद्मभवं वशिष्ठं शक्तिं च तत्पुत्रपराशरं च ।\nव्यासं शुकं गौडपदं महान्तं गोविन्दयोगीन्द्रमथास्य शिष्यम् ॥",
            sanskrit: "nārāyaṇaṁ padmabhavaṁ vaśiṣṭhaṁ śaktiṁ ca tatputraparāśaraṁ ca ।\nvyāsaṁ śukaṁ gauḍapadaṁ mahāntaṁ govindayogīndramathāsya śiṣyam ॥",
            translation: "那罗莲生尊化形，霞光一脉法灯明；\n广博玄义妙音诠，乔荼圣道牧者承。",
            explanation: "追溯从那罗衍至乔荼波陀（商羯罗之师）的智慧传承系谱，展现吠檀多哲学法脉的清净源流与圣哲接力传递。",
            type: "法脉传承颂",
            usage: "法脉追忆，传统研习"
          },
          {
            title: "商羯罗传承系谱",
            devanagari: "श्रीशंकराचार्यमथास्य पद्मपादं च हस्तामलकं च शिष्यम् ।\nतं तोटकं वार्तिककारमन्यानस्मद् गुरून्संततमानतोऽस्मि ॥",
            sanskrit: "śrī śaṁkarācārya mathāsya padmapādaṁ ca hastāmalakaṁ ca śiṣyam ।\ntaṁ toṭakaṁ vārtikakāra manyānasmad gurūn saṁtatamānato'smi ॥",
            translation: "再传狮座继法灯，莲足清辉映禅门；\n托塔克等众贤哲，永沐恩波仰圣真。",
            explanation: "商羯罗大师传承系谱，包括四大弟子：莲足、手中庵摩罗果、托塔克等。",
            type: "法脉传承颂",
            usage: "商羯罗传承礼敬"
          },
          {
            title: "救世尊礼赞",
            devanagari: "श्रुतिस्मृतिपुराणानामालयं करुणालयम् ।\nनमामि भगवत्पादं शंकरं लोकशंकरम् ॥",
            sanskrit: "śruti smṛti purāṇānāmālayaṁ karuṇālayam ।\nnamāmi bhagavatpādaṁ śaṁkaraṁ lokaśaṁkaram ॥",
            translation: "圣典藏渊薮，悲智涌灵泉；\n顶礼救世尊，众生解脱船。",
            explanation: "礼敬商羯罗大师为圣典宝库、慈悲之源、世界救主。",
            type: "圣哲颂",
            usage: "商羯罗大师礼赞"
          },
          {
            title: "圣狮礼赞",
            devanagari: "शंकरं शंकराचार्यं केशवं बादरायणम् ।\nसूत्रभाष्यकृतौ वन्दे भगवन्तौ पुनः पुनः ॥",
            sanskrit: "śaṁkaraṁ śaṁkarācāryaṁ keśavaṁ bādarāyaṇam ।\nsūtrabhāṣyakṛtau vande bhagavantau punaḥ punaḥ ॥",
            translation: "圣狮振铎启玄关，吠檀奥义照大千；\n广博仙圣造经纶，韦陀纬书万古传。",
            explanation: "礼敬商羯罗大师与广博仙人，二者分别以注释和经文阐明吠檀多奥义。",
            type: "圣哲颂",
            usage: "经典注释大师礼赞"
          },
          {
            title: "广博仙人礼赞",
            devanagari: "नमोऽस्तु ते व्यास विशालबुद्धे फुल्लारविन्दायतपत्रनेत्र ।\nयेन त्वया भारततैलपूर्णः प्रज्वालितो ज्ञानमयः प्रदीपः ॥",
            sanskrit: "namo'stu te vyāsa viśāla buddhe phullāravindāyata patra netra ।\nyena tvayā bhārata taila pūrṇaḥ prajvālito jñāna mayaḥ pradīpaḥ ॥",
            translation: "敬礼广博智慧深，莲目清净如花开；\n汝以般若灯油满，点燃大智光明来。",
            explanation: "礼敬编撰《摩诃婆罗多》等经典的广博仙人（毗耶娑），感恩其点燃智慧明灯。",
            type: "圣哲颂",
            usage: "经典研习礼敬"
          },
          {
            title: "敬师礼拜",
            devanagari: "श्री गुरुभ्यो नमः । हरिः ॐ",
            sanskrit: "śrī gurubhyo namaḥ । hariḥ oṃ",
            translation: "敬礼诸师尊，哈里嗡声隆。",
            explanation: "向所有上师致敬，结合毗湿奴之名与宇宙元音的礼拜。",
            type: "短咒",
            usage: "修持起始，敬师礼拜"
          }
        ],
          practice: [
              {
                title: "象神祷文",
                devanagari: "वक्रतुण्ड महकाय सूर्य कोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्व कार्येषु सर्वदा ॥",
                sanskrit: "vakratuṇḍa mahakāya sūrya kōṭi samaprabha ।\nnirvighnaṃ kuru mē dēva sarva kāryēṣu sarvadā ॥",
                translation: "象鼻巨躯耀千阳，神威赫赫放光芒；\n荡除诸障佑万事，永世顺遂得安康。",
                explanation: "向伽内什祈愿，消除一切障碍，确保所有事业顺利成功。",
                type: "伽内什颂",
                usage: "日常祈祷，事业顺利"
              },
            {
              title: "宇宙元音",
              devanagari: "ॐ",
              sanskrit: "oṃ / auṃ",
              translation: "太初元音，万化始生。",
              explanation: "OM 作为基础音节的构成包含 A-U-M 三要素及静默成分，在咒语音声传统中被视为根本元素，其结构与传统意识状态分类形成对应关系。",
              type: "种子真言",
              usage: "修持起始，冥想专注"
            },
            {
              title: "呼吸真言",
              devanagari: "सो ऽहम्",
              sanskrit: "so'ham",
              translation: "我即真如，呼吸自成。",
              explanation: "吸气（so）与呼气（ham）的自然音声。通过喉呼吸体现，将调息转化为与呼吸同步的移动禅定。",
              type: "呼吸咒",
              usage: "体式中呼吸同步"
            },
            {
              title: "五大元素咒",
              devanagari: "लं वं रं यं हं",
              sanskrit: "laṃ vaṃ raṃ yaṃ haṃ",
              translation: "大地元音，安稳固本；水德清音，涤尘净垢；火德光音，破暗启明；风德动音，周流不息；空德遍音，含容太虚。",
              explanation: "对应五大元素与脉轮的种子音。地咒安稳固本，水咒涤尘净垢，火咒破暗启明，风咒周流不息，空咒含容太虚。",
              type: "元素种子咒",
              usage: "脉轮冥想，能量培养"
            },
            {
              title: "圣母真音",
              devanagari: "ह्रीं",
              sanskrit: "hrīṃ",
              translation: "圣母真音，造化本源。",
              explanation: "大妙音天女（Mahāsarasvatī）种子咒，象征创造力与智慧之源。",
              type: "种子真言",
              usage: "创造力激发"
            },
            {
              title: "吉祥妙音",
              devanagari: "श्रीं",
              sanskrit: "śrīṃ",
              translation: "吉祥妙音，福慧双全。",
              explanation: "大吉祥天女（Mahālakṣmī）种子咒，象征丰盛、福德与灵性财富。",
              type: "种子真言",
              usage: "福慧增长"
            },
            {
              title: "净化真言",
              devanagari: "क्लीं",
              sanskrit: "klīṃ",
              translation: "净化真言，转识成智。",
              explanation: "大时母（Mahākālī）种子咒，象征转化之火，净化一切染污。",
              type: "种子真言",
              usage: "净化转化"
            },
            {
              title: "湿婆五字咒",
              devanagari: "ॐ नमः शिवाय",
              sanskrit: "oṃ namaḥ śivāya",
              translation: "敬礼湿婆尊，五字真言诵。",
              explanation: "五音节咒。'Śiva'象征永恒纯净、超越限制的意识。用于持诵以培养纯净品质并超越自我认同。",
              type: "五音节咒",
              usage: "持咒重复，冥想专注"
            },
            {
              title: "那罗延咒",
              devanagari: "ॐ नमो नारायणाय",
              sanskrit: "oṃ namo nārāyaṇāya",
              translation: "敬礼那罗延，遍满一切处。",
              explanation: "那罗延（遍入天）咒语，冥思毗湿奴遍一切处的宇宙意识。",
              type: "短咒",
              usage: "遍在性冥想"
            },
            {
              title: "遍照光明咒",
              devanagari: "ॐ नमो भगवते वासुदेवाय",
              sanskrit: "oṃ namo bhagavate vāsudevāya",
              translation: "敬礼世尊主，遍照光明王。",
              explanation: "礼敬黑天（奎师那）为宇宙遍照光明，象征神圣光照的咒语。",
              type: "短咒",
              usage: "光明冥想"
            },
            {
              title: "吉祥天女咒",
              devanagari: "ॐ श्री महालक्ष्म्यै नमः",
              sanskrit: "oṃ śrī mahālakṣmyai namaḥ",
              translation: "敬礼吉祥天，福德自庄严。",
              explanation: "礼敬大吉祥天女，祈愿福德与灵性丰盛的咒语。",
              type: "短咒",
              usage: "福德修持"
            },
            {
              title: "妙音天女咒",
              devanagari: "ॐ ऐं सरस्वत्यै नमः",
              sanskrit: "oṃ aiṃ sarasvatyai namaḥ",
              translation: "敬礼妙音天，智慧如海深。",
              explanation: "礼敬辩才天女（妙音天女），祈愿智慧深广如海的咒语。",
              type: "短咒",
              usage: "智慧增长"
            },
            {
              title: "象头神咒",
              devanagari: "ॐ गं गणपतये नमः",
              sanskrit: "oṃ gaṃ gaṇapataye namaḥ",
              translation: "敬礼象头神，除障赐吉祥。",
              explanation: "礼敬象头神伽内什（群主），祈求消除障碍、赐予吉祥的咒语。",
              type: "短咒",
              usage: "除障起始"
            },
            {
              title: "女神三音咒",
              devanagari: "ॐ ह्रीं श्रीं क्लीं",
              sanskrit: "oṃ hrīṃ śrīṃ klīṃ",
              translation: "三音和合诵，女神妙德彰。",
              explanation: "复合种子咒，呼唤神圣母亲的三种面向：创造力（大妙音天女）、丰盛维持（大吉祥天女）、转化火焰（大时母）。",
              type: "复合真言",
              usage: "深度冥想，能量整合"
            },
            {
              title: "真理即实在",
              devanagari: "ॐ तत् सत्",
              sanskrit: "oṃ tat sat",
              translation: "真理即实在，至高无上名。",
              explanation: "'Tat'指终极非人格实相；'Sat'意为真理、存在、良善。肯定最高实相是纯粹存在-意识-喜乐。",
              type: "哲学真言",
              usage: "终极实相冥想"
            },
            {
              title: "众生安乐",
              devanagari: "लोकाः समस्ताः सुखिनो भवन्तु",
              sanskrit: "lokāḥ samastāḥ sukhino bhavantu",
              translation: "愿诸世界众，皆得安乐生。",
              explanation: "普世祈愿，祝福一切世界中的所有众生皆得安乐。",
              type: "和平咒",
              usage: "结束回向，普世祝福"
            },
            {
              title: "吉祥心意",
              devanagari: "भद्रं नो अपि वातय मनः",
              sanskrit: "bhadraṃ no api vātaya manaḥ",
              translation: "愿吉祥心意，吹拂向我们。",
              explanation: "祈愿吉祥之风，吹送善念与正向思维。",
              type: "和平咒",
              usage: "心意净化，正向思维"
            },
            {
              title: "三界清净",
              devanagari: "ॐ शान्तिः शान्तिः शान्तिः",
              sanskrit: "oṃ śāntiḥ śāntiḥ śāntiḥ",
              translation: "三界得清净，身心意安宁。",
              explanation: "呼唤三界（身、心、灵）的和平与清净。",
              type: "和平咒",
              usage: "和平呼唤，修持结束"
            },
          ],
        wisdom: [
          {
            title: "引我出虚幻",
            devanagari: "असतो मा सद्गमय ।\nतमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ॥",
            sanskrit: "asato mā sadgamaya ।\ntamaso mā jyotirgamaya ।\nmṛtyormā amṛtaṃ gamaya ॥",
            translation: "引我出虚幻，入真实境；\n引我离黑暗，向光明径；\n引我超生死，达永生城。",
            explanation: "出自《广林奥义书》的大话。概括瑜伽的全部旅程：从无明到智慧，从束缚到解脱。代表练习的终极目标。",
            type: "大话",
            usage: "哲学沉思，研习焦点"
          },
          {
            title: "太初造物主",
            devanagari: "यो ब्रह्माणं विदधाति पूर्वं यो वै वेदांश्च प्रहिणोति तस्मै ।\nतं ह देवमात्म बुद्धिप्रकाशं मुमुक्षुर्वै शरणमहं प्रपद्ये ॥",
            sanskrit: "yo brahmāṇaṃ vidadhāti pūrvaṃ yo vai vedāṃśca prahiṇoti tasmai ।\ntaṃ ha devamātma buddhiprakāśaṃ mumukṣurvai śaraṇamahaṃ prapadye ॥",
            translation: "太初造物梵天创，授予吠陀圣典彰；\n彼神即我真如性，求解脱者皈依王。",
            explanation: "表达终极实相既是宇宙创造者、吠陀授予者，也是个体内在真我，为求解脱者皈依处。",
            type: "大话",
            usage: "终极皈依，真我认知"
          },
          {
            title: "圆满颂",
            devanagari: "पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते 。\nपूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥",
            sanskrit: "pūrṇamadaḥ pūrṇamidaṃ pūrṇāt pūrṇamudacyate ।\npūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate ॥",
            translation: "彼满此亦满，满中生满全；\n取满满依旧，恒满自周圆。",
            explanation: "出自《广林奥义书》。表达不二实相，一切皆完整圆满；从无限中取走什么，留下的仍是无限。",
            type: "奥义书诗节",
            usage: "不二冥想，哲学研习"
          },
          {
            title: "共学共进",
            devanagari: "सह नाववतु सह नौ भुनक्तु सह वीर्यं करवावहै ।\nतेजस्वि नावधीतमस्तु मा विद्विषावहै ॥",
            sanskrit: "saha nāvavatu saha nau bhunaktu saha vīryaṃ karavāvahai ।\ntejasvi nāvadhītamastu mā vidviṣāvahai ॥",
            translation: "神佑共沐恩同享，勇毅齐心业共襄；\n智光永耀学无倦，怨憎不生睦久长。",
            explanation: "传统学习前祈愿文，强调合作共享、相互尊重、共同进步的学习精神。",
            type: "学习祈愿",
            usage: "学习起始，合作共修"
          },
          {
            title: "普世和平祷文",
            devanagari: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥",
            sanskrit: "sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ ।\nsarve bhadrāṇi paśyantu mā kaścit duḥkhabhāg bhavet ॥",
            translation: "普天万众尽欢康，遍界群生俱泰祥；\n俱见嘉祯充宇内，莫教愁苦罹苍黄。",
            explanation: "普世和平祈愿，表达瑜伽的普遍福祉理想。体现瑜伽将意识扩展超越个体成就的伦理。",
            type: "和平诗节",
            usage: "练习结束，普世祝福"
          },
          {
            title: "结束和平回向",
            devanagari: "स्वस्तिप्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः ।\nगोब्राह्मणेभ्यः शुभमस्तु नित्यं लोकाः समस्ताः सुखिनो भवन्तु ॥",
            sanskrit: "svasti prajābhyaḥ paripālayantāṃ nyāyena mārgeṇa mahīṃ mahīśāḥ ।\ngo brāhmaṇebhyaḥ śubhamastu nityaṃ lokāḥ samastāḥ sukhino bhavantu ॥",
            translation: "愿王正法护苍生，公正治国天下平；\n牛智恒昌得吉祥，众生安乐离苦情。",
            explanation: "传统结束回向。体现'不害'戒律，并体现修行者意识从个体成就到普世福祉的扩展。",
            type: "和平祷文",
            usage: "练习结束，功德回向"
          },
          {
            title: "时雨应期",
            devanagari: "काले वर्षतु पर्जन्यः पृथिवी सस्यशालिनी ॥\nदेशोऽयं क्षोभरहितः ब्राह्मणास्सन्तु निर्भयाः ॥",
            sanskrit: "kāle varṣatu parjanyaḥ pṛthivī sasyaśālinī ॥\ndeśo'yaṃ kṣobharahitaḥ brāhmaṇāssantu nirbhayāḥ ॥",
            translation: "时雨应期润八荒，沃畴嘉谷满盈仓；\n境无纷乱安黎庶，智者恬然释惕惶。",
            explanation: "祈愿风调雨顺、五谷丰登，国泰民安，智者无忧。",
            type: "和平祷文",
            usage: "农业祈愿，国泰民安"
          },
          {
            title: "普世圆满",
            devanagari: "सर्वेशां स्वस्तिर्भवतु । सर्वेशां शान्तिर्भवतु ॥\nसर्वेशां पुर्णंभवतु । सर्वेशां मङ्गलंभवतु ॥",
            sanskrit: "sarveśāṃ svastirbhavatu sarveśāṃ śāntirbhavatu ॥\nsarveśāṃ purṇaṃbhavatu sarveśāṃ maṅgalaṃbhavatu ॥",
            translation: "普世安康，万方宁祥；\n寰宇圆满，天地嘉祯。",
            explanation: "全面祈愿：健康、和平、圆满、吉祥遍及一切。",
            type: "和平祷文",
            usage: "全面祝福，世界和平"
          }
        ],
        ritual: [
            {
              title: "群主礼赞",
              devanagari: "गणानां त्वा गणपतिंहवामहे कविं कवीनामुपमश्रवस्तमम् ।\nज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आनःशृण्वन्नूतिभिःसीदसादनम् ॥\nॐ श्री महागणपतये नमः ॥",
              sanskrit: "gaṇānāṃ tvā gaṇapatiṃ havāmahe kaviṃ kavīnāmupamaśravastamam ।\njyeṣṭharājaṃ brahmaṇāṃ brahmaṇaspata ānaḥśṛṇvanūtibhiḥsīdasādanam ॥\noṃ śrī mahāgaṇapataye namaḥ ॥",
              translation: "群主威临我赞扬，诗魁智邃誉八荒；\n梵天至上尊神首，闻祈降座赐祯祥。\n嗡礼圣尊甘内沙，福慧广被德无量。",
              explanation: "传统伽内什赞歌，邀请象头神降临坐镇，赐福智慧与成功。",
              type: "伽内什颂",
              usage: "仪式起始，除障礼赞"
            },
          {
            title: "吠陀七重祈愿",
            devanagari: "ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः । ॐ जनः । ॐ तपः । ॐ सत्यम् ।",
            sanskrit: "oṃ bhūḥ । oṃ bhuvaḥ । oṃ suvaḥ । oṃ mahaḥ । oṃ janaḥ । oṃ tapaḥ । oṃ satyam ।",
            translation: "嗡大地界。嗡空界。嗡天界。嗡大梵界。嗡生主界。嗡苦行界。嗡真理界。",
            explanation: "吠陀七重祈愿，代表七重存在境界。传统仪式中用于召唤宇宙秩序，建立神圣空间。",
            type: "吠陀召唤",
            usage: "仪式开场，神圣空间建立"
          },
          {
            title: "伽耶特利咒",
            devanagari: "ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥",
            sanskrit: "oṃ tat savitur vareṇyaṃ bhargo devasya dhīmahi ।\ndhiyo yo naḥ pracodayāt ॥",
            translation: "嗡。我等冥思萨维特尔（太阳）的荣耀光辉。\n愿它照亮我们的智慧。",
            explanation: "最受尊崇的吠陀咒语，出自《梨俱吠陀》。召唤太阳意识以照亮智慧。传统上日出时唱诵以获得灵性觉醒。",
            type: "吠陀真言",
            usage: "清晨练习，智慧培养"
          },
          {
            title: "水火光味甘露梵",
            devanagari: "ॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥",
            sanskrit: "oṃ āpo jyotī raso'mṛtaṃ brahma bhūr bhuvaḥ svar om ॥",
            translation: "水火光味甘露梵，三界圆融嗡声尊。",
            explanation: "浓缩宇宙原理：水、火、光、味、甘露、梵，与三界融合于嗡声。",
            type: "吠陀真言",
            usage: "宇宙原理冥思"
          },
            {
              title: "妙语赞",
              devanagari: "नमो ब्रह्मणे नमो अस्त्वग्नये नमः पृथिव्यै नम ओषधीभ्यः ।\nनमो वाचे नमो वाचस्पतये नमो विष्णवे बृहते करोमि ॥",
              sanskrit: "namo brahmaṇe namo astvagnaye namaḥ pṛthivyai nama oṣadhībhyaḥ ।\nnamo vāce namo vācaspataye namo viṣṇave bṛhate karomi ॥",
              translation: "敬梵天，礼圣火，拜厚土，叩百草；\n敬妙音，尊语主，颂毗神，宏大千。",
              explanation: "简练的宇宙万有礼赞，涵盖从梵天到草木，从言语到遍入天的完整敬意。",
              type: "礼赞咒",
              usage: "万物礼赞，感恩修持"
            },
            {
              title: "三眼湿婆咒",
              devanagari: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥",
              sanskrit: "tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam ।\nurvārukamiva bandhanān mṛtyormukṣīya māmṛtāt ॥",
              translation: "顶礼三眼湿婆尊，芬芳滋养万物生；\n犹如熟瓜自然落，解脱死亡契永恒。",
              explanation: "《梨俱吠陀》重要咒语，礼敬湿婆三眼相，祈求解脱生死轮回，如熟瓜自然脱落。",
              type: "吠陀真言",
              usage: "解脱祈祷，湿婆礼拜"
            },
          {
            title: "言语心智和谐祷文",
            devanagari: "वाङ्मे मनसि प्रतिष्ठिता । मनो मे वाचि प्रतिष्ठितम् । आविराविर्म एधि ।\nवेदस्य म आणीस्थः । श्रुतं मे मा प्रहासीः । अनेनाधीतेना अहोरात्रान्सन्दधामि ।\nऋतं वदिष्यामि । सत्यं वदिष्यामि । तन्मामवतु । तद्वक्तारमवतु ।\nअवतु माम् । अवतु वक्तारमवतु वक्तारम् ॥",
            sanskrit: "vāṅme manasi pratiṣṭhitā । mano me vāci pratiṣṭhitam । āvirāvirma edhi ।\nvedasya ma āṇīsthaḥ । śrutaṃ me mā prahāsīḥ । anenādhītenā । ahorātrānsandadhāmi ।\nṛtaṃ vadiṣyāmi । satyaṃ vadiṣyāmi । tanmāmavatu । tadvaktāramavatu ।\navatu mām । avatu vaktāramavatu vaktāram ॥",
            translation: "吾心立言，吾言寓心，神明昭昭，显我智真；\n吠陀精微，入我深魂，所闻圣言，永莫失沦；\n以此勤修，昼夜不息，我言合天，我言守一；\n真理护我，护我声息，护我言者，永护无已。",
            explanation: "完整版言语心智和谐祷文，包含吠陀学习、真理宣说、保护祈愿等完整内容。",
            type: "梵书诵文",
            usage: "完整学习仪式，讲法保护"
          },
            {
              title: "颂诗尊主",
              devanagari: "यश्छन्दसामृषभो विश्वरूपः । छन्दोभ्योऽध्यमृताथ्संबभूव ।\nस मेन्द्रो मेधया स्पृणोतु । अमृतस्य देवधारणो भूयासम् ।\nशरीरं मे विचर्षणम् । जिह्वा मे मधुमत्तमा ।\nकर्णाभ्यां भूरिविश्रुवम् । ब्रह्मणः कोशोऽसि मेधया पिहितः ।\nश्रुतं मे गोपाय ॥",
              sanskrit: "yaśchandasāmṛṣabho viśvarūpaḥ । chandobhyo'dhyamṛtāthsaṃbabhūva ।\nsa mendro medhayā spṛṇotu । amṛtasya devadhāraṇo bhūyāsam ।\nśarīraṃ me vicarṣaṇam । jihvā me madhumattamā ।\nkarṇābhyāṃ bhūriviśruvam । brahmaṇaḥ kośo'si medhayā pihitaḥ ।\nśrutaṃ me gopāya ॥",
              translation: "颂诗尊主万象形，圣韵涌出甘露盈；\n神王智光启心明，永持天露恒常新；\n护我所闻永葆真。",
              explanation: "赞美颂诗之主，祈愿智慧开启，甘露常持，所闻真理永保不失。",
              type: "智慧咒",
              usage: "智慧开启，真理护持"
            },
          {
            title: "肢体滋养",
            devanagari: "आप्यायन्तु ममाङ्गानि वाक्प्राणश्चक्षुः श्रोत्रमथो बलमिन्द्रियाणि च सर्वाणि ।\nसर्वम् ब्रह्मोपनिषदम् । माऽहं ब्रह्म निराकुर्यां ।\nमा मा ब्रह्म निराकरोद निराकरणमस्त्व निराकरणम् मेऽस्तु ।\nतदात्मनि निरते य उपनिषत्सु धर्मास्ते मयि सन्तु ते मयि सन्तु ॥",
            sanskrit: "āpyāyantu mamāṅgāni vākprāṇaścakṣuḥ śrotramatho balamindriyāṇi ca sarvāṇi ।\nsarvam brahmopaniṣadam । mā'haṃ brahma nirākuryāṃ ।\nmā mā brahma nirākaroda nirākaraṇamastva nirākaraṇam me'stu ।\ntadātmani nirate ya upaniṣatsu dharmāste mayi santu te mayi santu ॥",
            translation: "愿我诸肢体言语气息，眼耳力量诸根皆滋养；\n一切皆梵知奥义所记，我绝不否认梵之实相；\n愿梵不弃我永被护持，无拒是我份接纳我得；\n专注至上者奥义法则，愿其在我心常住不逝。",
            explanation: "身心滋养祈愿，肯定一切皆梵，誓不否认梵的真实，祈愿奥义真理常住心中。",
            type: "滋养咒",
            usage: "身心滋养，真理确认"
          },
            {
              title: "吠陀和平召唤",
              devanagari: "शं नो मित्रः शं वरुणः । शं नो भवत्वर्यमा ।\nशं नो इन्द्रो बृहस्पतिः । शं नो विष्णुरुरुक्रमः ।\nनमो ब्रह्मणे । नमस्ते वायो । त्वमेव प्रत्यक्षं ब्रह्मासि ।\nत्वामेव प्रत्यक्षं ब्रह्म वदिष्यामि । ॠतं वदिष्यामि ।\nसत्यं वदिष्यामि । तन्मामवतु । तद्वक्तारमवतु ।\nअवतु माम् । अवतु वक्तारम् ॥",
              sanskrit: "śaṃ no mitraḥ śaṃ varuṇaḥ । śaṃ no bhavatvaryamā ।\nśaṃ no indro bṛhaspatiḥ । śaṃ no viṣṇururukramaḥ ।\nnamo brahmaṇe । namaste vāyo । tvameva pratyakṣaṃ brahmāsi ।\ntvāmeva pratyakṣaṃ brahma vadiṣyāmi । ṝtaṃ vadiṣyāmi ।\nsatyaṃ vadiṣyāmi । tanmāmavatu । tadvaktāramavatu ।\navatu mām । avatu vaktāram ॥",
              translation: "愿密特罗赐安宁，婆楼那神护无病；\n愿阿耆尼迎吉祥，阿里亚曼降平安；\n愿因陀罗增福慧，祈祷之主赐安祥；\n毗湿奴神越天涯，阔步威德护我家；\n敬礼梵天风神王，现前即梵真无妄；\n如实说梵义显彰，真理必言不欺诳；\n愿彼护我讲说人，身无恙兮慧深长。",
              explanation: "吠陀众神和谐召唤，祈愿一切神灵护佑，真理显现，言语与心智和谐。",
              type: "吠陀和平咒",
              usage: "仪式和平召唤，讲法保护"
            },
            {
              title: "众神吉祥",
              devanagari: "भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः ।\nस्थिरैरङ्गैः तुष्टुवाग्ं सस्तनूभिः । व्यशेम देवहितं यदायुः ॥\nस्वस्ति न इन्द्रो वृद्धश्रवाः । स्वस्ति नः पूषा विश्ववेदाः ।\nस्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः । स्वस्ति नो बृहस्पतिर्दधातु ॥",
              sanskrit: "bhadraṃ karṇebhiḥ śṛṇuyāma devāḥ । bhadraṃ paśyemākṣabhiryajatrāḥ ।\nsthirairaṅgaiḥ tuṣṭuvāgṃ sastanūbhiḥ । vyaśema devahitaṃ yadāyuḥ ॥\nsvasti na indro vṛddhaśravāḥ । svasti naḥ pūṣā viśvavedāḥ ।\nsvasti nastārkṣyo ariṣṭanemiḥ । svasti no bṛhaspatirdadhātu ॥",
              translation: "愿以耳闻天神赐吉祥，愿以眼见祭祀呈瑞光；\n身稳肢坚赞咏声悠扬，体全意专神赐寿无疆；\n愿因陀罗神盛名远扬，愿全知普善神赐吉祥；\n愿陀刹尤神法轮常转，愿布哈斯帕蒂赐安康。",
              explanation: "吠陀吉祥祈愿，通过耳闻、眼见、身行获得神灵护佑，祈愿因陀罗等众神赐福。",
              type: "吉祥咒",
              usage: "吉祥祈愿，神灵护佑"
            },
          {
            title: "祭祀圆满",
            devanagari: "तच्छं योरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शन्नो अस्तु द्विपदे । शं चतुष्पदे ॥",
            sanskrit: "tacchaṃ yorāvṛṇīmahe । gātuṃ yajñāya । gātuṃ yajñapataye ।\ndaivī svastirastu naḥ । svastirmānuṣebhyaḥ ।\nūrdhvaṃ jigātu bheṣajam । śanno astu dvipade । śaṃ catuṣpade ॥",
            translation: "为此求庇护，祭礼得圆成，祀主得安宁；\n神赐吉祥临，人天共太平；\n良药升霄汉，二足享康宁，四足得昌荣。",
            explanation: "吠陀祭祀圆满祈祷，愿祭祀成功，吉祥降临一切众生，药力升天普济万物。",
            type: "吠陀仪式",
            usage: "祭祀结束，普世祝福"
          },
          {
            title: "三匝圣言",
            devanagari: "अहं वृक्षस्य रेरिवा । कीर्तिः पृष्ठं गिरेरिव ।\nऊर्ध्वपवित्रो वाजिनीव स्वमृतमस्मि ।\nद्रविणग्ं सवर्चसम् । सुमेध अमृतोक्षितः ।\nइति त्रिशङ्कोर्वेदानुवचनम् ॥",
            sanskrit: "ahaṃ vṛkṣasya reriva । kīrtiḥ pṛṣṭhaṃ gireriva ।\nūrdhvapavitro vājinīva svamṛtamasmi ।\ndraviṇagṃ savarcasam । sumedhā amṛtokṣitaḥ ।\niti triśaṅkorvedānuvacanam ॥",
            translation: "我如栖木鸟，自由复逍遥；名若崇山脊，巍巍达九霄；\n净似骏马鬃，飞扬势凌空；身即甘露源，不朽契真宗；\n富慧双圆满，荣光耀灵台；善智润心田，圣露灌顶来。\n此为三匝圣言，千古永流传。",
            explanation: "三匝仙人吠陀宣言，表达与宇宙原理的认同，富足智慧圆满如甘露灌顶。",
            type: "吠陀宣言",
            usage: "自我确认，灵性宣言"
          },
            {
              title: "甘露颂",
              devanagari: "मधु वाता ऋतायते मधु क्षरन्ति सिन्धवः ।\nमाध्वीर्नः सन्त्वोषधीः ॥\nमधु नक्तमुतोषसो मधुमत्पार्थिवं रजः ।\nमधु द्यौरस्तु नः पिता ॥\nमधुमान्नो वनस्पतिर्मधुमाँ अस्तु सूर्यः ।\nमाध्वीर्गावो भवन्तु नः ॥",
              sanskrit: "madhu vātā ṛtāyate madhu kṣaranti sindhavaḥ ।\nmādhvīrnaḥ santvoṣadhīḥ ॥\nmadhu naktamutoṣaso madhumatpārthivaṃ rajaḥ ।\nmadhu dyaurastu naḥ pitā ॥\nmadhumān no vanaspatirmadhumām̐ astu sūryaḥ ।\nmādhvīrgāvo bhavantu naḥ ॥",
              translation: "甘露和风甜川融漾，芳草垂珠漾晴光；\n蜜露晨昏膏壤穰穰，慈天如父降嘉祥；\n神林沐甘曦车含饧，愿我牛群盈蜜浆。",
              explanation: "《梨俱吠陀》优美的甘露颂，祈求自然万物的甜美与吉祥。",
              type: "吠陀赞歌",
              usage: "自然礼拜，吉祥祈愿"
            },
            {
              title: "妙音礼赞",
              devanagari: "नमो वाचे या चोदिता या चानुदिता तस्यै वाचे नमो नमो वाचे नमो वाचस्पतये नम ऋषिभ्यो मन्त्रकृद्भ्यो मन्त्रपतिभ्यो मामामृषयो मन्त्रकृतो मन्त्रपतयः परादुर्माऽहमृषीन् मन्त्रकृतो मन्त्रपतीन् परादां वैश्वदेवीं वाचमुद्यासँ शिवामदस्तांजुष्टां देवेभ्यः शर्म मे द्यौः शर्म पृथिवी शर्म विश्वमिदं जगत् ।\nशर्म चन्द्रश्च सूर्यश्च शर्म ब्रह्मप्रजापती । भूतं वदिष्ये भुवनं वदिष्ये तेजो वदिष्ये यशो वदिष्ये तपो वदिष्ये ब्रह्म वदिष्ये सत्यं वदिष्ये तस्मा अहमिदमुपस्तरणमुपस्तृण उपस्तरणं मे प्रजायै पशूनां भुयादुपस्तरणमहं प्रजायै पशूनां भूयासं प्राणापानौ मृत्योर्मा पातं प्राणापानौ मा माहासिष्टं मधु मनिष्ये मधु जनिष्ये मधु वक्ष्यामि मधु वदिष्यामि मधुमतीं देवेभ्यो वाचमुद्यासँ शुश्रूषेण्यां मनुष्येभ्यस्तं मा देवा अवन्तु शोभायै पितरोऽनुमदन्तु ॥",
              sanskrit: "namo vāce yā coditā yā cānuditā tasyai vāce namo namo vāce namo vācaspataye nama ṛṣibhyo mantrakṛdbhyo mantrapatibhyo māmāmṛṣayo mantrakṛto mantrapatayaḥ parādurmā'hamṛṣīn mantrakṛto mantrapatīn parādāṃ vaiśvadevīṃ vācamudyāsaṃ śivāmadastāṃjuṣṭāṃ devebhyaḥ śarma me dyauḥ śarma pṛthivī śarma viśvamidaṃ jagat ।\nśarma candraśca sūryaśca śarma brahmaprajāpatī । bhūtaṃ vadiṣye bhuvanaṃ vadiṣye tejo vadiṣye yaśo vadiṣye tapo vadiṣye brahma vadiṣye satyaṃ vadiṣye tasmā ahamidamupastaraṇamupastṛṇa upastaraṇaṃ me prajāyai paśūnāṃ bhuyādupastaraṇamahaṃ prajāyai paśūnāṃ bhūyāsaṃ prāṇāpānau mṛtyormā pātaṃ prāṇāpānau mā māhāsiṣṭaṃ madhu maniṣye madhu janiṣye madhu vakṣyāmi madhu vadiṣyāmi madhumatīṃ devebhyo vācamudyāsaṃ śuśrūṣeṇyāṃ manuṣyebhyastaṃ mā devā avantu śobhāyai pitaro'numadantu ॥",
              translation: "言灵启噫，显隐俱寂，敬拜语主，偈颂圣帝；\n古贤造咒，今莫我弃，愿护法脉，永续天意；\n世语清新，献祀神明，月日得宁，造化咸定；\n寰宇安泰，万类俱靖；\n万物我将宣言，乾坤我将颂赞，光华我将昭显，贞名我将传衍；\n真谛我将宣演，至道我将证见；\n愿此为祚席，滋我牛羊衍，息出入，避永夜，离灾变；\n甘蜜思，甘蜜成，甘蜜言，奉诸天，献嘉言，泽人间；\n众神护，先祖欢，永光灿。",
              explanation: "深奥的言语礼赞和献祭祈祷，涵盖对言语之神、古代圣哲、宇宙万有的全面礼拜与献祭祈愿。",
              type: "吠陀礼赞",
              usage: "深度言语礼拜，全面献祭祈愿"
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
    devotional: sections.devotional.tabTitle,
    practice: sections.practice.tabTitle,
    wisdom: sections.wisdom.tabTitle,
    ritual: sections.ritual.tabTitle
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
                <div className="mb-4">
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
                          
                          {/* 第6行：类型和使用 */}
                          <div className="text-[11px] text-gray-500 pt-1 flex items-center gap-2">
                            <span className="bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                              {mantra.type}
                            </span>
                            <span className="text-gray-300">•</span>
                            <span>{mantra.usage}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
