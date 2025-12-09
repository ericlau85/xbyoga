'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function ChantsPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'seed-sounds' | 'laghu-mantras' | 'vedic-hymns' | 'shlokas' | 'mahavakyas' | 'ritual-recitations' | 'peace-invocations' | 'guru-pranama'>('seed-sounds');

  const chantsData = {
    zh: {
      title: "梵语圣音集",
      subtitle: "Sanskrit Sacred Sounds",
      intro: "梵语圣音是瑜伽传统中的神圣声音振动，具有净化心灵、连接灵性的力量。这些音节、咒语和赞歌源自古老的吠陀智慧，通过声音的振动频率直接影响身心能量系统。",
      
      categories: {
        'seed-sounds': {
          title: "种子音",
          subtitle: "बीजध्वनि • bīja dhvani • Seed Syllables"
        },
        'laghu-mantras': {
          title: "简短咒语",
          subtitle: "लघुमन्त्र • laghu mantras • Short Mantras"
        },
        'vedic-hymns': {
          title: "吠陀赞歌",
          subtitle: "मन्त्र • vaidika stotra • Vedic Hymns"
        },
        'shlokas': {
          title: "颂赞诗节",
          subtitle: "श्लोक • śloka • Verses"
        },
        'mahavakyas': {
          title: "哲学言语",
          subtitle: "महावाक्य • mahāvākya • Great Sayings"
        },
        'rituals-recitations': {
          title: "仪式诵文",
          subtitle: "ब्राह्मण • brāhmaṇa • Ritual Recitations"
        },
        'peace-invocations': {
          title: "和平祷文",
          subtitle: "शान्तिप्रार्थना • śānti prārthanā • Peace Invocations"
        },
        'guru-pranama': {
          title: "敬师礼拜",
          subtitle: "गुरुप्रणाम • guru praṇāma • Guru Reverence"
        }
      },
      
      chants: {
        'seed-sounds': [
          { devanagari: "ॐ", transliteration: "oṃ / auṃ", meaning: "太初元音，万化始生" },
          { devanagari: "सो ऽहम्", transliteration: "so'ham", meaning: "我即真如，呼吸自成" },
          { devanagari: "ह्रीं", transliteration: "hrīṃ", meaning: "圣母真音，造化本源" },
          { devanagari: "श्रीं", transliteration: "śrīṃ", meaning: "吉祥妙音，福慧双全" },
          { devanagari: "क्लीं", transliteration: "klīṃ", meaning: "净化真言，转识成智" },
          { devanagari: "लं", transliteration: "laṃ", meaning: "大地元音，安稳固本" },
          { devanagari: "वं", transliteration: "vaṃ", meaning: "水德清音，涤尘净垢" },
          { devanagari: "रं", transliteration: "raṃ", meaning: "火德光音，破暗启明" },
          { devanagari: "यं", transliteration: "yaṃ", meaning: "风德动音，周流不息" },
          { devanagari: "हं", transliteration: "haṃ", meaning: "空德遍音，含容太虚" }
        ],
        
        'laghu-mantras': [
          { devanagari: "ॐ नमः शिवाय", transliteration: "oṃ namaḥ śivāya", meaning: "敬礼湿婆尊，五字真言诵" },
          { devanagari: "ॐ नमो नारायणाय", transliteration: "oṃ namo nārāyaṇāya", meaning: "敬礼那罗延，遍满一切处" },
          { devanagari: "ॐ नमो भगवते वासुदेवाय", transliteration: "oṃ namo bhagavate vāsudevāya", meaning: "敬礼世尊主，遍照光明王" },
          { devanagari: "ॐ श्री महालक्ष्म्यै नमः", transliteration: "oṃ śrī mahālakṣmyai namaḥ", meaning: "敬礼吉祥天，福德自庄严" },
          { devanagari: "ॐ ऐं सरस्वत्यै नमः", transliteration: "oṃ aiṃ sarasvatyai namaḥ", meaning: "敬礼妙音天，智慧如海深" },
          { devanagari: "ॐ गं गणपतये नमः", transliteration: "oṃ gaṃ gaṇapataye namaḥ", meaning: "敬礼象头神，除障赐吉祥" },
          { devanagari: "ॐ ह्रीं श्रीं क्लीं", transliteration: "oṃ hrīṃ śrīṃ klīṃ", meaning: "三音和合诵，女神妙德彰" },
          { devanagari: "श्री गुरुभ्यो नमः । हरिः ॐ", transliteration: "śrī gurubhyo namaḥ । hariḥ oṃ", meaning: "敬礼诸师尊，哈里嗡声隆" },
          { devanagari: "लोकाः समस्ताः सुखिनो भवन्तु", transliteration: "lokāḥ samastāḥ sukhino bhavantu", meaning: "愿诸世界众，皆得安乐生" },
          { devanagari: "भद्रं नो अपि वातय मनः", transliteration: "bhadraṃ no api vātaya manaḥ", meaning: "愿吉祥心意，吹拂向我们" },
          { devanagari: "ॐ शान्तिः शान्तिः शान्तिः", transliteration: "oṃ śāntiḥ śāntiḥ śāntiḥ", meaning: "三界得清净，身心意安宁" },
          { devanagari: "ॐ तत् सत्", transliteration: "oṃ tat sat", meaning: "真理即实在，至高无上名" }
        ],
        
        'vedic-hymns': [
          {
            devanagari: "शं नो मित्रः शं वरुणः । शं नो भवत्वर्यमा । शं नो इन्द्रो बृहस्पतिः । शं नो विष्णुरुरुक्रमः ।",
            transliteration: "śaṃ no mitraḥ śaṃ varuṇaḥ । śaṃ no bhavatvaryamā । śaṃ no indro bṛhaspatiḥ । śaṃ no viṣṇururukramaḥ ।",
            meaning: "愿密特罗赐安宁，婆楼那神护无病；愿阿耆尼迎吉祥，阿里亚曼降平安；愿因陀罗增福慧，祈祷之主赐安祥；毗湿奴神越天涯，阔步威德护我家。"
          },
          {
            devanagari: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥",
            transliteration: "tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam । urvārukamiva bandhanān mṛtyormukṣīya māmṛtāt ॥",
            meaning: "顶礼三眼湿婆尊，芬芳滋养万物生；犹如熟瓜自然落，解脱死亡契永恒。"
          },
          {
            devanagari: "सह नाववतु सह नौ भुनक्तु सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै ।",
            transliteration: "saha nāvavatu saha nau bhunaktu saha vīryaṃ karavāvahai । tejasvi nāvadhītamastu mā vidviṣāvahai ।",
            meaning: "神佑共沐恩同享，勇毅齐心业共襄；智光永耀学无倦，怨憎不生睦久长。"
          }
        ],
        
        'shlokas': [
          {
            devanagari: "गणानां त्वा गणपतिंहवामहे कविं कवीनामुपमश्रवस्तमम् । ज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आनःशृण्वन्नूतिभिःसीदसादनम् ॥",
            transliteration: "gaṇānāṃ tvā gaṇapatiṃ havāmahe kaviṃ kavīnāmupamaśravastamam । jyeṣṭharājaṃ brahmaṇāṃ brahmaṇaspata ānaḥśṛṇvanūtibhiḥsīdasādanam ॥",
            meaning: "群主威临我赞扬，诗魁智邃誉八荒；梵天至上尊神首，闻祈降座赐祯祥。"
          },
          {
            devanagari: "वक्रतुण्ड महकाय सूर्य कोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्व कार्येषु सर्वदा ॥",
            transliteration: "vakratuṇḍa mahakāya sūrya kōṭi samaprabha । nirvighnaṃ kuru mē dēva sarva kāryēṣu sarvadā ॥",
            meaning: "象鼻巨躯耀千阳，神威赫赫放光芒；荡除诸障佑万事，永世顺遂得安康。"
          },
          {
            devanagari: "पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥",
            transliteration: "pūrṇamadaḥ pūrṇamidaṃ pūrṇāt pūrṇamudacyate । pūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate ॥",
            meaning: "彼满此亦满，满中生满全；取满满依旧，恒满自周圆。"
          }
        ],
        
        'mahavakyas': [
          {
            devanagari: "असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ।",
            transliteration: "asato mā sadgamaya । tamaso mā jyotirgamaya । mṛtyormā amṛtaṃ gamaya ।",
            meaning: "引我出虚幻，入真实境；引我离黑暗，向光明径；引我超生死，达永生城。"
          },
          {
            devanagari: "यो ब्रह्माणं विदधाति पूर्वं यो वै वेदांश्च प्रहिणोति तस्मै । तं ह देवमात्म बुद्धिप्रकाशं मुमुक्षुर्वै शरणमहं प्रपद्ये ॥",
            transliteration: "yo brahmāṇaṃ vidadhāti pūrvaṃ yo vai vedāṃśca prahiṇoti tasmai । taṃ ha devamātma buddhiprakāśaṃ mumukṣurvai śaraṇamahaṃ prapadye ॥",
            meaning: "太初造物梵天创，授予吠陀圣典彰；彼神即我真如性，求解脱者皈依王。"
          }
        ],
        
        'rituals-recitations': [
          {
            devanagari: "ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः । ॐ जनः । ॐ तपः । ॐ सत्यम् । ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥",
            transliteration: "oṃ bhūḥ । oṃ bhuvaḥ । oṃ suvaḥ । oṃ mahaḥ । oṃ janaḥ । oṃ tapaḥ । oṃ satyam । oṃ tat savitur vareṇyaṃ bhargo devasya dhīmahi । dhiyo yo naḥ pracodayāt ॥",
            meaning: "嗡声遍法界，七重宇宙音；彼生主神圣光，我等虔心冥思存；愿启智慧光明，照彻我等灵根。"
          },
          {
            devanagari: "वाङ्मे मनसि प्रतिष्ठिता । मनो मे वाचि प्रतिष्ठितम् । आविराविर्म एधि । वेदस्य म आणीस्थः । श्रुतं मे मा प्रहासीः ।",
            transliteration: "vāṅme manasi pratiṣṭhitā । mano me vāci pratiṣṭhitam । āvirāvirma edhi । vedasya ma āṇīsthaḥ । śrutaṃ me mā prahāsīḥ ।",
            meaning: "吾心立言，吾言寓心，神明昭昭，显我智真；吠陀精微，入我深魂，所闻圣言，永莫失沦。"
          }
        ],
        
        'peace-invocations': [
          {
            devanagari: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः । सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥",
            transliteration: "sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ । sarve bhadrāṇi paśyantu mā kaścit duḥkhabhāg bhavet ॥",
            meaning: "普天万众尽欢康，遍界群生俱泰祥；俱见嘉祯充宇内，莫教愁苦罹苍黄。"
          },
          {
            devanagari: "स्वस्ति प्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः । गोब्राह्मणेभ्यश्शुभमस्तु नित्यं लोकास्समस्तास्सुखिनो भवन्तु ॥",
            transliteration: "svasti prajābhyaḥ paripālayantāṃ nyāyēna mārgēṇa mahīṃ mahīśāḥ । gōbrāhmaṇēbhyaśśubhamastu nityaṃ lōkāssamastāssukhinō bhavantu ॥",
            meaning: "愿尔群生得护持，仁政王道守疆陲；圣俗恒沐吉祥祉，普世万民永乐熙。"
          },
          {
            devanagari: "काले वर्षतु पर्जन्यः पृथिवी सस्यशालिनी ॥ देशोऽयं क्षोभरहितः ब्राह्मणास्सन्तु निर्भयाः ॥",
            transliteration: "kāle varṣatu parjanyaḥ pṛthivī sasyaśālinī ॥ deśo'yaṃ kṣobharahitaḥ brāhmaṇāssantu nirbhayāḥ ॥",
            meaning: "时雨应期润八荒，沃畴嘉谷满盈仓；境无纷乱安黎庶，智者恬然释惕惶。"
          }
        ],
        
        'guru-pranama': [
          {
            devanagari: "आखण्डमण्डलाकारं व्याप्तं येन चराचरम् । तत्पदं दर्शितं येन तस्मै श्रीगुरवे नमः ॥१॥",
            transliteration: "ākhaṇḍa-maṇḍalākāraṃ vyāptaṃ yena carācaram । tat-padaṃ darśitaṃ yena tasmai śrī-gurave namaḥ ॥1॥",
            meaning: "无分周圆遍法界，动静万有皆渗透；至上境界师指引，顶礼吉祥上师佑。"
          },
          {
            devanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः । गुरुः साक्षात्परं ब्रह्म तस्मै श्रीगुरवे नमः ॥३॥",
            transliteration: "gurur-brahmā gurur-viṣṇur gurur-devo maheśvaraḥ । guruḥ sākṣāt paraṃ brahma tasmai śrī-gurave namaḥ ॥3॥",
            meaning: "师是创造梵天身，师是护持毗湿奴；师即毁灭大自在，现前绝对梵体真。"
          },
          {
            devanagari: "सदाशिवसमारम्भां शङ्कराचार्यमध्यमाम् । अस्मदाचार्यपर्यन्तां वन्दे गुरुपरम्पराम् ॥",
            transliteration: "sadāśiva samārambhāṃ śaṅkarācārya madhyamām । asmadācārya paryantāṃ vande guru paramparām ॥",
            meaning: "敬礼上师传承系，萨埵希瓦初开启；商羯罗师为中继，直至我师法脉继。"
          }
        ]
      }
    },
    
    en: {
      title: "Sacred Sanskrit Sounds",
      subtitle: "Divine Utterances from Ancient Wisdom",
      intro: "Sacred Sanskrit sounds are divine vibrations in the yogic tradition, possessing the power to purify the mind and connect with spirituality. These syllables, mantras, and hymns originate from ancient Vedic wisdom, directly affecting the mind-body energy system through sound vibration frequencies.",
      
      categories: {
        'seed-sounds': {
          title: "Seed Syllables",
          subtitle: "बीजध्वनि • bīja dhvani • Primordial Sounds"
        },
        'laghu-mantras': {
          title: "Short Mantras",
          subtitle: "लघुमन्त्र • laghu mantras • Concise Invocations"
        },
        'vedic-hymns': {
          title: "Vedic Hymns",
          subtitle: "मन्त्र • vaidika stotra • Ancient Chants"
        },
        'shlokas': {
          title: "Verses of Praise",
          subtitle: "श्लोक • śloka • Sacred Verses"
        },
        'mahavakyas': {
          title: "Great Sayings",
          subtitle: "महावाक्य • mahāvākya • Philosophical Utterances"
        },
        'rituals-recitations': {
          title: "Ritual Recitations",
          subtitle: "ब्राह्मण • brāhmaṇa • Ceremonial Texts"
        },
        'peace-invocations': {
          title: "Peace Invocations",
          subtitle: "शान्तिप्रार्थना • śānti prārthanā • Peace Prayers"
        },
        'guru-pranama': {
          title: "Guru Reverence",
          subtitle: "गुरुप्रणाम • guru praṇāma • Teacher Homage"
        }
      },
      
      chants: {
        'seed-sounds': [
          { devanagari: "ॐ", transliteration: "oṃ / auṃ", meaning: "The Primal Vibration from which all creation emanates" },
          { devanagari: "सो ऽहम्", transliteration: "so'ham", meaning: "I am That, the Self-revealing through breath" },
          { devanagari: "ह्रीं", transliteration: "hrīṃ", meaning: "The sound of Divine Mother, source of all creation" },
          { devanagari: "श्रीं", transliteration: "śrīṃ", meaning: "The sound of auspiciousness, bestowing prosperity and wisdom" },
          { devanagari: "क्लीं", transliteration: "klīṃ", meaning: "The purifying sound that transforms consciousness into wisdom" },
          { devanagari: "लं", transliteration: "laṃ", meaning: "The sound of earth element, providing stability and foundation" },
          { devanagari: "वं", transliteration: "vaṃ", meaning: "The sound of water element, cleansing and purifying" },
          { devanagari: "रं", transliteration: "raṃ", meaning: "The sound of fire element, dispelling darkness and illuminating" },
          { devanagari: "यं", transliteration: "yaṃ", meaning: "The sound of air element, moving and circulating ceaselessly" },
          { devanagari: "हं", transliteration: "haṃ", meaning: "The sound of ether element, all-pervading and all-containing" }
        ],
        
        'laghu-mantras': [
          { devanagari: "ॐ नमः शिवाय", transliteration: "oṃ namaḥ śivāya", meaning: "Adoration to Lord Shiva, the five-syllabled essence" },
          { devanagari: "ॐ नमो नारायणाय", transliteration: "oṃ namo nārāyaṇāya", meaning: "Adoration to Narayana, who pervades all existence" },
          { devanagari: "ॐ नमो भगवते वासुदेवाय", transliteration: "oṃ namo bhagavate vāsudevāya", meaning: "Adoration to the Lord Vasudeva, the luminous sovereign" },
          { devanagari: "ॐ श्री महालक्ष्म्यै नमः", transliteration: "oṃ śrī mahālakṣmyai namaḥ", meaning: "Adoration to Great Lakshmi, adorned with divine grace" },
          { devanagari: "ॐ ऐं सरस्वत्यै नमः", transliteration: "oṃ aiṃ sarasvatyai namaḥ", meaning: "Adoration to Saraswati, whose wisdom is deep as the ocean" },
          { devanagari: "ॐ गं गणपतये नमः", transliteration: "oṃ gaṃ gaṇapataye namaḥ", meaning: "Adoration to Ganapati, remover of obstacles and bestower of auspiciousness" },
          { devanagari: "ॐ ह्रीं श्रीं क्लीं", transliteration: "oṃ hrīṃ śrīṃ klīṃ", meaning: "The threefold sound revealing the Goddess's divine qualities" },
          { devanagari: "श्री गुरुभ्यो नमः । हरिः ॐ", transliteration: "śrī gurubhyo namaḥ । hariḥ oṃ", meaning: "Adoration to all revered teachers, Hari Om resounds" },
          { devanagari: "लोकाः समस्ताः सुखिनो भवन्तु", transliteration: "lokāḥ samastāḥ sukhino bhavantu", meaning: "May all beings in all worlds dwell in happiness" },
          { devanagari: "भद्रं नो अपि वातय मनः", transliteration: "bhadraṃ no api vātaya manaḥ", meaning: "May auspicious thoughts blow upon us as a favourable wind" },
          { devanagari: "ॐ शान्तिः शान्तिः शान्तिः", transliteration: "oṃ śāntiḥ śāntiḥ śāntiḥ", meaning: "Peace in the three realms, serenity in body, mind and spirit" },
          { devanagari: "ॐ तत् सत्", transliteration: "oṃ tat sat", meaning: "That is the Truth, the Supreme Reality" }
        ],
        
        'vedic-hymns': [
          {
            devanagari: "शं नो मित्रः शं वरुणः । शं नो भवत्वर्यमा । शं नो इन्द्रो बृहस्पतिः । शं नो विष्णुरुरुक्रमः ।",
            transliteration: "śaṃ no mitraḥ śaṃ varuṇaḥ । śaṃ no bhavatvaryamā । śaṃ no indro bṛhaspatiḥ । śaṃ no viṣṇururukramaḥ ।",
            meaning: "May Mitra grant us peace, and Varuna grant us health; May Aryaman bring us welfare, and Indra bless our wealth."
          },
          {
            devanagari: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥",
            transliteration: "tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam । urvārukamiva bandhanān mṛtyormukṣīya māmṛtāt ॥",
            meaning: "We worship the three-eyed Lord Shiva, who is fragrant and who nourishes all beings. May He liberate us from death for the sake of immortality."
          },
          {
            devanagari: "सह नाववतु सह नौ भुनक्तु सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै ।",
            transliteration: "saha nāvavatu saha nau bhunaktu saha vīryaṃ karavāvahai । tejasvi nāvadhītamastu mā vidviṣāvahai ।",
            meaning: "May He protect us both! May He nourish us both! May we both work together with great energy! May our study be brilliant! May we never hate each other!"
          }
        ],
        
        'shlokas': [
          {
            devanagari: "गणानां त्वा गणपतिंहवामहे कविं कवीनामुपमश्रवस्तमम् । ज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आनःशृण्वन्नूतिभिःसीदसादनम् ॥",
            transliteration: "gaṇānāṃ tvā gaṇapatiṃ havāmahe kaviṃ kavīnāmupamaśravastamam । jyeṣṭharājaṃ brahmaṇāṃ brahmaṇaspata ānaḥśṛṇvanūtibhiḥsīdasādanam ॥",
            meaning: "We call upon Thee, Lord of Hosts, the Poet amongst poets, of matchless renown; The supreme sovereign of prayers, Lord of sacred wisdom."
          },
          {
            devanagari: "वक्रतुण्ड महकाय सूर्य कोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्व कार्येषु सर्वदा ॥",
            transliteration: "vakratuṇḍa mahakāya sūrya kōṭi samaprabha । nirvighnaṃ kuru mē dēva sarva kāryēṣu sarvadā ॥",
            meaning: "O Thou with the curved trunk and mighty body, whose splendour is equal to a crore of suns; Grant that my undertakings be ever free from obstacles."
          },
          {
            devanagari: "पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥",
            transliteration: "pūrṇamadaḥ pūrṇamidaṃ pūrṇāt pūrṇamudacyate । pūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate ॥",
            meaning: "That is full; this is full. From the full, the full doth proceed; Taking the full from the full, the full itself remaineth."
          }
        ],
        
        'mahavakyas': [
          {
            devanagari: "असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ।",
            transliteration: "asato mā sadgamaya । tamaso mā jyotirgamaya । mṛtyormā amṛtaṃ gamaya ।",
            meaning: "From the unreal, lead me to the Real; From darkness, lead me to Light; From death, lead me to Immortality."
          },
          {
            devanagari: "यो ब्रह्माणं विदधाति पूर्वं यो वै वेदांश्च प्रहिणोति तस्मै । तं ह देवमात्म बुद्धिप्रकाशं मुमुक्षुर्वै शरणमहं प्रपद्ये ॥",
            transliteration: "yo brahmāṇaṃ vidadhāti pūrvaṃ yo vai vedāṃśca prahiṇoti tasmai । taṃ ha devamātma buddhiprakāśaṃ mumukṣurvai śaraṇamahaṃ prapadye ॥",
            meaning: "Unto that Divinity who in the beginning created Brahmā, and who delivered unto him the Vedas; That God who is the Self, I, seeking liberation, do take refuge."
          }
        ],
        
        'rituals-recitations': [
          {
            devanagari: "ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः । ॐ जनः । ॐ तपः । ॐ सत्यम् । ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥",
            transliteration: "oṃ bhūḥ । oṃ bhuvaḥ । oṃ suvaḥ । oṃ mahaḥ । oṃ janaḥ । oṃ tapaḥ । oṃ satyam । oṃ tat savitur vareṇyaṃ bhargo devasya dhīmahi । dhiyo yo naḥ pracodayāt ॥",
            meaning: "Om, the terrestrial sphere; the intermediate region; the celestial sphere; Om, let us meditate on that excellent glory of the divine Savitṛ; May He enlighten our intellects."
          },
          {
            devanagari: "वाङ्मे मनसि प्रतिष्ठिता । मनो मे वाचि प्रतिष्ठितम् । आविराविर्म एधि । वेदस्य म आणीस्थः । श्रुतं मे मा प्रहासीः ।",
            transliteration: "vāṅme manasi pratiṣṭhitā । mano me vāci pratiṣṭhitam । āvirāvirma edhi । vedasya ma āṇīsthaḥ । śrutaṃ me mā prahāsīḥ ।",
            meaning: "May my speech be established in my mind; may my mind be established in my speech. O Self-revealing One, manifest unto me. May the essence of the Vedas be near unto me."
          }
        ],
        
        'peace-invocations': [
          {
            devanagari: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः । सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥",
            transliteration: "sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ । sarve bhadrāṇi paśyantu mā kaścit duḥkhabhāg bhavet ॥",
            meaning: "May all be happy; may all be free from infirmity; May all behold what is auspicious; may none suffer sorrow."
          },
          {
            devanagari: "स्वस्ति प्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः । गोब्राह्मणेभ्यश्शुभमस्तु नित्यं लोकास्समस्तास्सुखिनो भवन्तु ॥",
            transliteration: "svasti prajābhyaḥ paripālayantāṃ nyāyēna mārgēṇa mahīṃ mahīśāḥ । gōbrāhmaṇēbhyaśśubhamastu nityaṃ lōkāssamastāssukhinō bhavantu ॥",
            meaning: "May the rulers of the earth protect the people by the path of righteousness; May there ever be prosperity for the cows and the wise."
          },
          {
            devanagari: "काले वर्षतु पर्जन्यः पृथिवी सस्यशालिनी ॥ देशोऽयं क्षोभरहितः ब्राह्मणास्सन्तु निर्भयाः ॥",
            transliteration: "kāle varṣatu parjanyaḥ pṛthivī sasyaśālinī ॥ deśo'yaṃ kṣobharahitaḥ brāhmaṇāssantu nirbhayāḥ ॥",
            meaning: "May the rain-god send rain in due season; may the earth be rich with crops; May this country be free from turmoil."
          }
        ],
        
        'guru-pranama': [
          {
            devanagari: "आखण्डमण्डलाकारं व्याप्तं येन चराचरम् । तत्पदं दर्शितं येन तस्मै श्रीगुरवे नमः ॥१॥",
            transliteration: "ākhaṇḍa-maṇḍalākāraṃ vyāptaṃ yena carācaram । tat-padaṃ darśitaṃ yena tasmai śrī-gurave namaḥ ॥1॥",
            meaning: "Unto that glorious Preceptor who hath revealed the state of That which pervadeth all the moving and unmoving."
          },
          {
            devanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः । गुरुः साक्षात्परं ब्रह्म तस्मै श्रीगुरवे नमः ॥३॥",
            transliteration: "gurur-brahmā gurur-viṣṇur gurur-devo maheśvaraḥ । guruḥ sākṣāt paraṃ brahma tasmai śrī-gurave namaḥ ॥3॥",
            meaning: "The Preceptor is Brahmā; the Preceptor is Viṣṇu; the Preceptor is the great Lord Maheśvara; The Preceptor is verily the Supreme Brahman."
          },
          {
            devanagari: "सदाशिवसमारम्भां शङ्कराचार्यमध्यमाम् । अस्मदाचार्यपर्यन्तां वन्दे गुरुपरम्पराम् ॥",
            transliteration: "sadāśiva samārambhāṃ śaṅkarācārya madhyamām । asmadācārya paryantāṃ vande guru paramparām ॥",
            meaning: "I salute the succession of Preceptors, beginning with Sadāśiva, having Śaṅkarācārya in the middle, And extending up to my own Preceptor."
          }
        ]
      }
    }
  };

  const content = chantsData[language as keyof typeof chantsData];
  const currentChants = content.chants[activeCategory as keyof typeof content.chants];
  const currentCategory = content.categories[activeCategory as keyof typeof content.categories];

  // 类别按钮配置
  const categoryButtons = [
    { id: 'seed-sounds', label: content.categories['seed-sounds'].title },
    { id: 'laghu-mantras', label: content.categories['laghu-mantras'].title },
    { id: 'vedic-hymns', label: content.categories['vedic-hymns'].title },
    { id: 'shlokas', label: content.categories['shlokas'].title },
    { id: 'mahavakyas', label: content.categories['mahavakyas'].title },
    { id: 'rituals-recitations', label: content.categories['rituals-recitations'].title },
    { id: 'peace-invocations', label: content.categories['peace-invocations'].title },
    { id: 'guru-pranama', label: content.categories['guru-pranama'].title }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-12">
        {/* 标题部分 */}
        <div className="max-w-6xl mx-auto px-4 pt-4 pb-2">
          <h1 className="text-base md:text-lg font-medium text-gray-900 mb-0.5">
            {content.title}
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            {content.subtitle}
          </p>
          <p className="text-xs md:text-sm text-gray-700 mt-2 leading-snug">
            {content.intro}
          </p>
        </div>

        {/* 类别导航 */}
        <div className="max-w-6xl mx-auto px-4 pb-3">
          <div className="flex space-x-1 md:space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {categoryButtons.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-3 py-1.5 text-xs md:text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-red-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* 当前类别标题 */}
        <div className="max-w-6xl mx-auto px-4 pb-2">
          <h2 className="text-sm md:text-base font-medium text-gray-800 mb-0.5">
            {currentCategory.title}
          </h2>
          <p className="text-xs md:text-sm text-gray-600 italic">
            {currentCategory.subtitle}
          </p>
        </div>

        {/* 圣音内容区域 - 上下三段式布局 */}
        <div className="max-w-6xl mx-auto px-4 pb-6 md:pb-8">
          <div className="space-y-4">
            {currentChants.map((chant, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded p-3 hover:bg-gray-50/30"
              >
                {/* 第一段：天城体 */}
                <div className="mb-2">
                  <div className="font-sans text-base md:text-lg leading-snug tracking-tight">
                    {chant.devanagari}
                  </div>
                </div>
                
                {/* 第二段：罗马转写 */}
                <div className="mb-2">
                  <div className="text-xs md:text-sm italic text-gray-600 font-mono leading-snug">
                    {chant.transliteration}
                  </div>
                </div>
                
                {/* 第三段：释义 */}
                <div>
                  <div className="text-xs md:text-sm text-gray-700 leading-snug">
                    {chant.meaning}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 返回按钮 */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <a
              href="/knowledge"
              className="inline-flex items-center text-red-800 hover:text-red-900 font-medium text-xs"
            >
              <svg className="w-2.5 h-2.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {language === 'zh' ? '返回知识库' : 'Back to Knowledge Base'}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
