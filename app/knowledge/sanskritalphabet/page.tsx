// app/knowledge/sanskritalphabet/page.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function SanskritAlphabetPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<
    'intro' | 'pronunciation' | 'alphabet' | 'vowels' | 'consonants' | 'conjuncts' | 'syllable' | 'sandhi'
  >('intro');

  // 完整的双语内容
  const content = {
    zh: {
      title: '梵语字母',
      subtitle: 'संस्कृत अक्षर saṃskṛta akṣara',
      sections: {
        intro: '引言',
        pronunciation: '发音基础',
        alphabet: '字母表',
        vowels: '元音系统',
        consonants: '辅音系统',
        conjuncts: '复合字母',
        syllable: '音节结构',
        sandhi: '连音规则'
      },
      
      // 引言部分
      intro: {
        title: '梵语 Sanskrit',
        subtitle: 'संस्कृतम् saṃskṛtam',
        content: `संस्कृत 的字面意思是"神圣、净化、完美"，因此梵语被称为神圣的言语，是世界上最古老的语言之一，属于印欧语系的印度-伊朗语族。是印度古代宗教、哲学、文学和科学的主要用语。

天城文（देवनागरी devanāgarī）是书写梵语最常用的文字，也用于书写印地语hindī、马拉地语marāṭhī和尼泊尔语nepālī等语言。

国际梵文译音字母表 (IAST，International Alphabet of Sanskrit Transliteration)是为便于学术研究和国际交流，将梵语的天城文字母遵循国际标准转换为拉丁字母的过程。

注：ISO-15919 标准有几个字母转写区别：r̥ r̥̄ l̥ l̥̄ ē ō aṁ`
      },
      
      // 发音基础
      pronunciation: {
        title: '发音基础',
        subtitle: 'उच्चारण-मूलम् uccāraṇa-mūlam',
        sections: [
          {
            title: '发音部位',
            devanagari: 'उच्चारण-स्थान uccāraṇa-sthāna',
            content: '梵语发音根据口腔与舌位的不同位置分为五个主要发音部位：',
            items: [
              { sanskrit: 'कण्ठ्य kaṇṭhya', meaning: '喉音（软腭）' },
              { sanskrit: 'तालव्य tālavya', meaning: '颚音（硬颚）' },
              { sanskrit: 'मूर्धन्य mūrdhanya', meaning: '顶音（卷舌）' },
              { sanskrit: 'दन्त्य dantya', meaning: '齿音（齿龈）' },
              { sanskrit: 'ओष्ठ्य oṣṭhya', meaning: '唇音' },
              { sanskrit: 'नासिक्य nāsikya', meaning: '鼻腔' },
              { sanskrit: 'जिह्वामूलम् jihvāmūlam', meaning: '舌根' }
            ]
          },
          {
            title: '音长',
            devanagari: 'काल kāla',
            content: `古典梵语简化使用两个发音长度：
• 短元音 ह्रस्व hrasva：发音时长为一个音节单位 (eka-mātrā)
• 长元音 दीर्घ dīrgha：发音时长为两个音节单位 (dvi-mātrā)

吠陀梵语额外使用延长元音：
• 延长元音 प्लुत pluta：末尾加上数字3表示，如：अ a  आ ā  आ३ ā³`
          },
          {
            title: '音调',
            devanagari: 'स्वराः svarāḥ',
            items: [
              { sanskrit: 'उदात्त udātta', meaning: '高调' },
              { sanskrit: 'अनुदात्त anudātta', meaning: '低调' },
              { sanskrit: 'स्वरित svarita', meaning: '混调' }
            ]
          },
          {
            title: '鼻音化',
            devanagari: 'आनुनासिक्यम् ānunāsikyam',
            content: `所有梵语音素都可以鼻音化。基于音长、音调、鼻音化的组合，每个音素可能存在多种形式。

          示例音素组合：
          1. 高调系列：
             • अ॑ a॑    आ॑ ā̍    आ॑३
             • अँ॑ a̐̍   आँ॑ ā̐̍   आँ॑३
             
          2. 无调（基础）系列：
             • अ a     आ ā     आ३
             • अँ a̐    आँ ā̐    आँ३
             
          3. 低调系列：
             • अ॒ a̱     आ॒ ā̱     आ॒३
             • अँ॒ a̱̐    आँ॒ ā̱̐    आँ॒३

          符号说明：
          • ँ (candra-bindu) - 鼻音化标记
          • ॑ (udātta) - 高调符号
          • ॒ (anudātta) - 低调符号
          • ३ - 延长音标记
          • ̍ - 国际音标高调符号
          • ̱ - 国际音标低调符号`
          }
        ]
      },
      
      // 字母表概览
      alphabet: {
        title: '梵语字母表',
        subtitle: 'वर्णमाला varṇamālā',
        content: '梵语字母表被称为 वर्णमाला varṇamālā，字面意思是"字母花环"。梵语本质上是一种表音语言，其字母的书面形态直接对应独特的发音(कार kāra)，字母的名称即是其本身的读音。传统梵语由16个元音和33个辅音组成。',
        tables: [
          {
            title: '元音表 (16个)',
            headers: ['天城体', '罗马转写', '类型', '音长'],
            rows: [
              ['अ', 'a', '短元音', '1单位'],
              ['आ', 'ā', '长元音', '2单位'],
              ['इ', 'i', '短元音', '1单位'],
              ['ई', 'ī', '长元音', '2单位'],
              ['उ', 'u', '短元音', '1单位'],
              ['ऊ', 'ū', '长元音', '2单位'],
              ['ऋ', 'ṛ', '短元音', '1单位'],
              ['ॠ', 'ṝ', '长元音', '2单位'],
              ['ऌ', 'ḷ', '短元音', '1单位'],
              ['ॡ', 'ḹ', '长元音', '2单位'],
              ['ए', 'e', '复合元音', '2单位'],
              ['ऐ', 'ai', '复合元音', '2单位'],
              ['ओ', 'o', '复合元音', '2单位'],
              ['औ', 'au', '复合元音', '2单位'],
              ['अं', 'aṃ', '随韵 (鼻音)', ''],
              ['अः', 'aḥ', '止韵 (呼气音)', '']
            ]
          },
          {
              title: '梵语辅音分类表 (33个)',
                          headers: ['发音部位', '清不送气', '清送气', '浊不送气', '浊送气', '鼻音', '其他'],
                          rows: [
                            ['喉音 (कण्ठ्य)', 'क् k', 'ख् kh', 'ग् g', 'घ् gh', 'ङ् ṅ', 'ह् h (擦音)'],
                            ['腭音 (तालव्य)', 'च् c', 'छ् ch', 'ज् j', 'झ् jh', 'ञ् ñ', 'य् y (半元音), श् ś (擦音)'],
                            ['卷舌音 (मूर्धन्य)', 'ट् ṭ', 'ठ् ṭh', 'ड् ḍ', 'ढ् ḍh', 'ण् ṇ', 'र् r (流音), ष् ṣ (擦音)'],
                            ['齿音 (दन्त्य)', 'त् t', 'थ् th', 'द् d', 'ध् dh', 'न् n', 'ल् l (流音), स् s (擦音)'],
                            ['唇音 (ओष्ठ्य)', 'प् p', 'फ् ph', 'ब् b', 'भ् bh', 'म् m', 'व् v (半元音)']
                          ]
                        }
                      ]
                    },
      
      // 元音系统
      vowels: {
        title: '元音系统',
        subtitle: 'स्वर-व्यवस्था svara-vyavasthā',
        definition: '元音是在发音过程中气流通过口腔而不受阻碍发出的音，也称为母音。',
        sections: [
          {
            title: '基本元音',
            devanagari: 'समानाक्षर samānākṣara',
            content: '仅使用一个发音点发出的元音，称为基本元音或单元音：अ a इ i उ u ऋ ṛ ऌ ḷ。当音长延长一倍时即成为长元音：आ ā ई ī ऊ ū ॠ ṝ ॡ ḹ'
          },
          {
            title: '复合元音',
            devanagari: 'सन्ध्यक्षर sandhyakṣara',
            content: '使用两个发音点发出的元音，称为复合元音或双元音，复合元音都是长音：ए e ऐ ai ओ o औ au'
          },
          {
            title: '辅助元音',
            devanagari: 'उभयक्स्हर ubhayakshara',
            content: `两个在音节中的正常元音上添加的特定音。为便于示范发音，通常在辅助元音前加上一个基础元音 अ a：

• 随韵 अनुस्वारः anusvāraḥ (符号：ं，转写：ṃ)
  表示前一元音的鼻音化，或根据后续辅音转化为相应的鼻辅音。在同组擦音前与前面的元音发同组鼻音；作尾音则发 m
  例：क + ं = कं (ka+ṃ=kaṃ)

• 止韵 विसर्गः visargaḥ (符号：ः，转写：ḥ)
  清喉擦音呼气音，通常出现在词尾，发前一个元音的回声
  例：aḥ 发音 aha，ūḥ 发音 ūhu，aiḥ 发音 aihi`
          }
        ]
      },
      
        // 辅音系统（修改这里）
              consonants: {
                title: '辅音系统',
                subtitle: 'व्यञ्जन-व्यवस्था vyañjana-vyavasthā',
                definition: '辅音是在发音过程中气流通过口腔受阻碍发出的音，也称为子音。',
                intro: '梵语有33个辅音，按发音方式可分为：',
                categories: [
                  {
                    name: '塞音 स्पृष्ट spṛṣṭa',
                    description: '气流完全阻塞突然释放，包括清浊、送气不送气',
                    subcategories: [
                      '清不送气：ka ca ṭa ta pa',
                      '清送气：kha cha ṭha tha pha',
                      '浊不送气：ga ja ḍa da ba',
                      '浊送气：gha jha ḍha dha bha'
                    ]
                  },
                  {
                    name: '鼻音 आनुनासिकाः anunāsikāḥ',
                    description: '气流通过鼻腔共鸣',
                    example: 'ṅa ña ṇa na ma，例：ण्क ṇka'
                  },
                  {
                    name: '流音与半元音',
                    description: '介于元音与辅音之间的音',
                    subcategories: [
                      '流音：र ra, ल la',
                      '半元音：य ya, व va',
                      '卷舌边音：ळ ḷ（见于吠陀梵语）'
                    ]
                  },
                  {
                    name: '擦音 ऊष्माणः ūṣmāṇaḥ',
                    description: '气流通过狭窄通道产生摩擦',
                    subcategories: [
                      '腭擦音：श śa',
                      '卷舌擦音：ष ṣa',
                      '齿龈擦音：स sa',
                      '喉擦音：ह ha'
                    ]
                  },
                  {
                    name: '特殊辅音',
                    description: 'विसर्गः visargaḥ ḥ（止韵，词尾呼气音）'
                  }
                ]
              },
      
      // 复合字母
      conjuncts: {
        title: '复合字母',
        subtitle: 'संयुक्ताक्षर saṃyuktākṣara',
        definition: '复合字母是一组连续没有元音的辅音组合，通常与元音结合以形成完整的发音单位。',
        rules: [
          '同化：辅音在组合中可能改变发音以适应相邻辅音，如：t + s → tsa',
          '送气与浊化：送气辅音与不送气辅音结合时，送气可能减弱',
          '鼻音化：鼻音与塞音结合时，常伴随鼻腔共鸣，如 mpa'
        ],
        specialCombinations: [
          {
            devanagari: 'क्ष',
            transliteration: 'kṣa',
            components: 'क्(k) + ष(ṣa)',
            examples: ['क्षत्रिय kṣatriya (刹帝利)', 'क्षमा kṣamā (原谅)']
          },
          {
            devanagari: 'त्र',
            transliteration: 'tra',
            components: 'त्(t) + र(ra)',
            examples: ['त्रिशूल triśūla (三叉戟)', 'त्रिमूर्ति trimūrti (三相神)']
          },
          {
            devanagari: 'ज्ञ',
            transliteration: 'jña',
            components: 'ज्(j) + ञ(ña)',
            examples: ['ज्ञान jñāna (知识)', 'विज्ञान vijñāna (科学)']
          },
          {
            devanagari: 'श्र',
            transliteration: 'śra',
            components: 'श्(ś) + र(ra)',
            examples: ['श्रम śrama (努力)', 'श्रवण śravaṇa (聆听)']
          }
        ],
        note: `发音提示：复合辅音 ज्ञ (jña) 在实际发音（尤其是在印地语和瑜伽术语中）常简化为 "gya" 的音：
• ज्ञान jñāna → gyāna（知识/智慧）
• विज्ञान vijñāna → vigyāna（科学）
• प्रज्ञा prajñā → pragyā（智慧）

初学者了解这一点有助于理解实际的拼读。`
      },
      
      // 音节结构
      syllable: {
        title: '音节结构',
        subtitle: 'अक्षर-रचना akṣara-racanā',
        definition: '音节是梵语发音的基本单位，以元音分音节，每个音节只有一个元音。',
        types: [
          { name: '开音节', example: 'क ka', description: '尾音为元音' },
          { name: '闭音节', example: 'म् m', description: '尾音为辅音' }
        ],
        rules: [
          '音节的核心是元音，每个音节必须包含一个元音',
          '辅音与元音结合形成音节：क् k + अ a = क ka',
          '两个或多个辅音结合时，形成一个复合辅音，并与一个元音组成音节：क् k + ष ṣ + अ a = क्ष kṣa',
          '末尾有其他音将归于最后一个音节中：सुखम् → सु खम् sukham → su kham',
          '辅助元音与元音在同一个音节中：संस्कृत → सं स्कृ त saṃskṛta → saṃ skṛ ta'
        ],
        weight: {
          light: '轻音节 लघु laghu：短元音或简单结构',
          heavy: '重音节 गुरु guru：带有长元音、辅助音、辅音组合',
          note: '重音节发音时长为轻音节的两倍。符号：重- 轻⏑ 可轻可重⏓'
        }
      },
      
      // 连音规则
      sandhi: {
        title: '连音规则',
        subtitle: 'सन्धि-नियम sandhi-niyama',
        definition: '是指词与词之间或词内部音节之间的音变规则。这些规则是为了使发音更加流畅和自然。梵语的连声规则非常复杂，涵盖了元音、辅音以及复合音的变化。',
        types: [
          {
            name: '元音连音',
            devanagari: 'स्वर-सन्धि svara-sandhi',
            description: '当两个元音相连时，根据元音类型发生合并、替换或插入辅音',
            examples: [
              'अ + अ → आ (a + a → ā)',
              'इ + इ → ई (i + i → ī)',
              'अ + इ → ए (a + i → e)',
              '例句：पाद + उत्तानासन → पादोत्तानासन'
            ]
          },
          {
            name: '辅音连音',
            devanagari: 'व्यञ्जन-सन्धि vyañjana-sandhi',
            description: '当辅音与辅音或元音相遇时，发生同化、浊化、鼻化等音变',
            examples: [
              'त् + न = न्न (t + na = nna)',
              'तत् + नाम → तन्नाम (tat + nāma → tannāma)',
              'तत् + अपि → तद् अपि (tat + api → tad api)'
            ]
          },
          {
            name: '止韵连音',
            devanagari: 'विसर्ग-सन्धि visarga-sandhi',
            description: '当词尾的 ḥ 后接其他词时，根据后续音素发生音变',
            examples: [
              'ḥ + अ → 变为对应元音：शिवः + अहम् → शिवो ऽहम्',
              'ḥ + क → 变为 श् ś：योगः + चित्त → योगश् चित्त',
              'ḥ + ग → 变为 र् r：प्राणः + गच्छति → प्राणर् गच्छति'
            ]
          }
        ]
      }
    },
    
    en: {
      title: 'Sanskrit Alphabet',
      subtitle: 'संस्कृत अक्षर saṃskṛta akṣara',
      sections: {
        intro: 'Introduction',
        pronunciation: 'Pronunciation',
        alphabet: 'Alphabet',
        vowels: 'Vowels',
        consonants: 'Consonants',
        conjuncts: 'Conjuncts',
        syllable: 'Syllable',
        sandhi: 'Sandhi Rules'
      },
      
      intro: {
        title: 'Sanskrit',
        subtitle: 'संस्कृतम् saṃskṛtam',
        content: `The literal meaning of संस्कृत is "sacred, purified, perfected," hence Sanskrit is called the sacred language. It is one of the world's oldest languages, belonging to the Indo-Iranian branch of the Indo-European language family. It was the primary language of ancient Indian religion, philosophy, literature and science.

Devanagari (देवनागरी devanāgarī) is the most commonly used script for writing Sanskrit, and is also used for languages such as Hindi, Marathi and Nepali.

The International Alphabet of Sanskrit Transliteration (IAST) is the process of converting Devanagari script to Latin letters following international standards for academic research and international exchange. Additionally, ISO-15919 has some differences in transliteration: r̥ r̥̄ l̥ l̥̄ ē ō aṁ`
      },
      
      pronunciation: {
        title: 'Pronunciation Basics',
        subtitle: 'उच्चारण-मूलम् uccāraṇa-mūlam',
        sections: [
          {
            title: 'Points of Pronunciation',
            devanagari: 'उच्चारण-स्थान uccāraṇa-sthāna',
            content: 'Sanskrit pronunciation is divided into five main points of articulation based on different positions in the mouth and tongue:',
            items: [
              { sanskrit: 'कण्ठ्य kaṇṭhya', meaning: 'Guttural (soft palate)' },
              { sanskrit: 'तालव्य tālavya', meaning: 'Palatal (hard palate)' },
              { sanskrit: 'मूर्धन्य mūrdhanya', meaning: 'Cerebral (retroflex)' },
              { sanskrit: 'दन्त्य dantya', meaning: 'Dental' },
              { sanskrit: 'ओष्ठ्य oṣṭhya', meaning: 'Labial (lips)' },
              { sanskrit: 'नासिक्य nāsikya', meaning: 'Nasal' },
              { sanskrit: 'जिह्वामूलम् jihvāmūlam', meaning: 'Tongue root' }
            ]
          },
          {
            title: 'Length of Pronunciation',
            devanagari: 'काल kāla',
            content: `Classical Sanskrit simplified to use two pronunciation lengths:
• Short vowels ह्रस्व hrasva: duration of one syllable unit (eka-mātrā)
• Long vowels दीर्घ dīrgha: duration of two syllable units (dvi-mātrā)

Vedic Sanskrit additionally uses prolonged vowels:
• Prolonged vowels प्लुत pluta: marked with 3 at the end, e.g.: अ a आ ā आ३ ā³`
          },
          {
            title: 'Accent',
            devanagari: 'स्वराः svarāḥ',
            items: [
              { sanskrit: 'उदात्त udātta', meaning: 'High tone' },
              { sanskrit: 'अनुदात्त anudātta', meaning: 'Low tone' },
              { sanskrit: 'स्वरित svarita', meaning: 'Mixed tone' }
            ]
          },
          {
            title: 'Nasality',
            devanagari: 'आनुनासिक्यम् ānunāsikyam',
            content: `All Sanskrit phonemes can be nasalised. Based on combinations of length, accent, and nasality, each phoneme may have multiple forms.

          Example phoneme combinations:
          1. High tone series:
             • अ॑ a॑    आ॑ ā̍    आ॑३
             • अँ॑ a̐̍   आँ॑ ā̐̍   आँ॑३
             
          2. Neutral (base) series:
             • अ a     आ ā     आ३
             • अँ a̐    आँ ā̐    आँ३
             
          3. Low tone series:
             • अ॒ a̱     आ॒ ā̱     आ॒३
             • अँ॒ a̱̐    आँ॒ ā̱̐    आँ॒३

          Symbol explanations:
          • ँ (candra-bindu) - nasalisation mark
          • ॑ (udātta) - high tone symbol
          • ॒ (anudātta) - low tone symbol
          • ३ - prolongation mark
          • ̍ - IPA high tone symbol
          • ̱ - IPA low tone symbol`
          }
        ]
      },
      
      alphabet: {
        title: 'Sanskrit Alphabet',
        subtitle: 'वर्णमाला varṇamālā',
        content: 'The Sanskrit alphabet is called वर्णमाला varṇamālā, literally meaning "garland of letters." Sanskrit is essentially a phonetic language where the written form of letters directly corresponds to unique sounds (कार kāra), and the name of the letter is its pronunciation. Traditional Sanskrit consists of 16 vowels and 33 consonants.',
        tables: [
          {
            title: 'Vowels (16)',
            headers: ['Devanagari', 'Transliteration', 'Type', 'Length'],
            rows: [
              ['अ', 'a', 'Short vowel', '1 unit'],
              ['आ', 'ā', 'Long vowel', '2 units'],
              ['इ', 'i', 'Short vowel', '1 unit'],
              ['ई', 'ī', 'Long vowel', '2 units'],
              ['उ', 'u', 'Short vowel', '1 unit'],
              ['ऊ', 'ū', 'Long vowel', '2 units'],
              ['ऋ', 'ṛ', 'Short vowel', '1 unit'],
              ['ॠ', 'ṝ', 'Long vowel', '2 units'],
              ['ऌ', 'ḷ', 'Short vowel', '1 unit'],
              ['ॡ', 'ḹ', 'Long vowel', '2 units'],
              ['ए', 'e', 'Compound vowel', '2 units'],
              ['ऐ', 'ai', 'Compound vowel', '2 units'],
              ['ओ', 'o', 'Compound vowel', '2 units'],
              ['औ', 'au', 'Compound vowel', '2 units'],
              ['अं', 'aṃ', 'Anusvāra (nasal)', ''],
              ['अः', 'aḥ', 'Visarga (breath)', '']
            ]
          },
          {
            title: 'Consonants (33)',
            headers: ['Point', 'Unaspirated V.', 'Aspirated V.', 'Unaspirated Vd.', 'Aspirated Vd.', 'Nasal', 'Others'],
            rows: [
              ['Guttural', 'क् k', 'ख् kh', 'ग् g', 'घ् gh', 'ङ् ṅ', 'ह् h'],
              ['Palatal', 'च् c', 'छ् ch', 'ज् j', 'झ् jh', 'ञ् ñ', 'य् y, श् ś'],
              ['Retroflex', 'ट् ṭ', 'ठ् ṭh', 'ड् ḍ', 'ढ् ḍh', 'ण् ṇ', 'र् r, ष् ṣ'],
              ['Dental', 'त् t', 'थ् th', 'द् d', 'ध् dh', 'न् n', 'ल् l, स् s'],
              ['Labial', 'प् p', 'फ् ph', 'ब् b', 'भ् bh', 'म् m', 'व् v']
            ]
          }
        ]
      },
      
      vowels: {
        title: 'Vowel System',
        subtitle: 'स्वर-व्यवस्था svara-vyavasthā',
        definition: 'Vowels are sounds produced without obstruction of airflow through the mouth during pronunciation, also called sonants.',
        sections: [
          {
            title: 'Simple Vowels',
            devanagari: 'समानाक्षर samānākṣara',
            content: 'Vowels produced using only one point of articulation are called simple vowels or monophthongs: अ a इ i उ u ऋ ṛ ऌ ḷ. When the sound length is doubled, they become long vowels: आ ā ई ī ऊ ū ॠ ṝ ॡ ḹ'
          },
          {
            title: 'Compound Vowels',
            devanagari: 'सन्ध्यक्षर sandhyakṣara',
            content: 'Vowels produced using two points of articulation are called compound vowels or diphthongs. Compound vowels are always long: ए e ऐ ai ओ o औ au'
          },
          {
            title: 'Support Vowels',
            devanagari: 'उभयक्स्हर ubhayakshara',
            content: `Two specific sounds added to normal vowels in syllables. For demonstration purposes, the basic vowel अ a is usually added before support vowels:

• Anusvāra अनुस्वारः (symbol: ं, transliteration: ṃ)
  Indicates nasalisation of the preceding vowel, or transforms into corresponding nasal consonant depending on following consonant.
  Example: क + ं = कं (ka+ṃ=kaṃ)

• Visarga विसर्गः (symbol: ः, transliteration: ḥ)
  A voiceless glottal fricative breath sound, usually appearing at word endings, pronounced as an echo of preceding vowel.
  Examples: aḥ pronounced aha, ūḥ pronounced ūhu, aiḥ pronounced aihi`
          }
        ]
      },
      
      consonants: {
        title: 'Consonant System',
        subtitle: 'व्यञ्जन-व्यवस्था vyañjana-vyavasthā',
        definition: 'Consonants are sounds produced with obstruction of airflow through the mouth during pronunciation, also called consonants.',
        intro: 'There are 33 consonants in Sanskrit, which can be divided by manner of articulation into:',
        categories: [
          {
            name: 'Plosives स्पृष्ट spṛṣṭa',
            description: 'Complete obstruction of airflow followed by sudden release',
            subcategories: [
              'Voiceless अघोषः aghoṣāḥ: ka ca ṭa ta pa',
              'Voiced घोषवन्तः ghoṣavantaḥ: ga ja ḍa da ba',
              'Aspirated महाप्राणाः mahāprāṇāḥ: kha cha ṭha tha pha',
              'Unaspirated अल्पप्राणाः alpaprāṇāḥ: ka ca ṭa ta pa'
            ]
          },
          {
            name: 'Nasals आनुनासिकाः anunāsikāḥ',
            description: 'Airflow resonates through nasal cavity: ṅa ña ṇa na ma',
            example: 'Example: ṇka'
          },
          {
            name: 'Semivowels अन्तःस्थ antaḥstha',
            description: 'Gliding sounds between vowels and consonants: ya ra la va',
            example: 'Example: yoga'
          },
          {
            name: 'Sibilants ऊष्माणः ūṣmāṇaḥ',
            description: 'Friction produced as air passes through narrow channel: śa ṣa sa ha',
            example: 'Example: śiva'
          },
          {
            name: 'Special Consonants',
            description: 'Retroflex lateral: ळ ḻa ळ्ह ḻha (found in Vedic Sanskrit, rarely used in Classical Sanskrit)'
          }
        ]
      },
      
      conjuncts: {
        title: 'Conjunct Letters',
        subtitle: 'संयुक्ताक्षर saṃyuktākṣara',
        definition: 'Conjunct letters are groups of consecutive consonants without vowels, usually combined with vowels to form complete pronunciation units.',
        rules: [
          'Assimilation: Consonants may change pronunciation to adapt to adjacent consonants, e.g.: t + s → tsa',
          'Aspiration and Voicing: When aspirated and unaspirated consonants combine, aspiration may weaken',
          'Nasalisation: When nasals combine with stops, often accompanied by nasal resonance, e.g. mpa'
        ],
        specialCombinations: [
          {
            devanagari: 'क्ष',
            transliteration: 'kṣa',
            components: 'क्(k) + ष(ṣa)',
            examples: ['क्षत्रिय kṣatriya (warrior)', 'क्षमा kṣamā (forgiveness)']
          },
          {
            devanagari: 'त्र',
            transliteration: 'tra',
            components: 'त्(t) + र(ra)',
            examples: ['त्रिशूल triśūla (trident)', 'त्रिमूर्ति trimūrti (trimurti)']
          },
          {
            devanagari: 'ज्ञ',
            transliteration: 'jña',
            components: 'ज्(j) + ञ(ña)',
            examples: ['ज्ञान jñāna (knowledge)', 'विज्ञान vijñāna (science)']
          },
          {
            devanagari: 'श्र',
            transliteration: 'śra',
            components: 'श्(ś) + र(ra)',
            examples: ['श्रम śrama (effort)', 'श्रवण śravaṇa (listening)']
          }
        ],
        note: `Pronunciation note: The conjunct consonant ज्ञ (jña) in practical pronunciation (especially in Hindi and yoga terminology) is often simplified to "gya":
• ज्ञान jñāna → gyāna (knowledge/wisdom)
• विज्ञान vijñāna → vigyāna (science)
• प्रज्ञा prajñā → pragyā (wisdom)

Beginners understanding this will help with practical spelling and pronunciation.`
      },
      
      syllable: {
        title: 'Syllable Structure',
        subtitle: 'अक्षर-रचना akṣara-racanā',
        definition: 'The syllable is the basic unit of Sanskrit pronunciation. Syllables are divided by vowels, each syllable having only one vowel.',
        types: [
          { name: 'Open syllable', example: 'क ka', description: 'Ends with a vowel' },
          { name: 'Closed syllable', example: 'म् m', description: 'Ends with a consonant' }
        ],
        rules: [
          'The core of a syllable is the vowel, each syllable must contain one vowel',
          'Consonants combine with vowels to form syllables: क् k + अ a = क ka',
          'When two or more consonants combine, they form a conjunct consonant and combine with one vowel: क् k + ष ṣ + अ a = क्ष kṣa',
          'Other sounds at the end belong to the final syllable: सुखम् → सु खम् sukham → su kham',
          'Support vowels and vowels are in the same syllable: संस्कृत → सं स्कृ त saṃskṛta → saṃ skṛ ta'
        ],
        weight: {
          light: 'Light syllable लघु laghu: short vowels or simple structure',
          heavy: 'Heavy syllable गुरु guru: with long vowels, support sounds, or consonant clusters',
          note: 'Heavy syllables usually have twice the pronunciation duration of light syllables. Symbols: heavy - light ⏑ can be light or heavy ⏓'
        }
      },
      
      sandhi: {
        title: 'Sandhi Rules',
        subtitle: 'सन्धि-नियम sandhi-niyama',
        definition: 'Refers to phonetic change rules between words or within syllables of words. These rules make pronunciation more fluent and natural. Sanskrit sandhi rules are very complex, covering changes in vowels, consonants and compound sounds.',
        types: [
          {
            name: 'Vowel Sandhi',
            devanagari: 'स्वर-सन्धि svara-sandhi',
            description: 'When two vowels meet, they merge, replace or insert consonants according to vowel type',
            examples: [
              'अ + अ → आ (a + a → ā)',
              'इ + इ → ई (i + i → ī)',
              'अ + इ → ए (a + i → e)',
              'Example: पाद + उत्तानासन → पादोत्तानासन'
            ]
          },
          {
            name: 'Consonant Sandhi',
            devanagari: 'व्यञ्जन-सन्धि vyañjana-sandhi',
            description: 'When consonants meet consonants or vowels, assimilation, voicing, nasalisation occur',
            examples: [
              'त् + न = न्न (t + na = nna)',
              'तत् + नाम → तन्नाम (tat + nāma → tannāma)',
              'तत् + अपि → तद् अपि (tat + api → tad api)'
            ]
          },
          {
            name: 'Visarga Sandhi',
            devanagari: 'विसर्ग-सन्धि visarga-sandhi',
            description: 'When word-final ḥ is followed by another word, sound changes occur',
            examples: [
              'ḥ + अ → becomes corresponding vowel: शिवः + अहम् → शिवो ऽहम्',
              'ḥ + क → becomes श् ś: योगः + चित्त → योगश् चित्त',
              'ḥ + ग → becomes र् r: प्राणः + गच्छति → प्राणर् गच्छति'
            ]
          }
        ]
      }
    }
  };

    const langContent = content[language as keyof typeof content];
    const sectionData = langContent[activeSection];

    return (
      <>
        <Navigation />
        
        <div className="min-h-screen bg-white pt-12">
          {/* 页面标题 - 紧凑学术风格 */}
          <div className="max-w-6xl mx-auto px-4 pt-4 pb-2">
            <h1 className="text-base md:text-lg font-medium text-gray-900 mb-0.5 tracking-tight">
              {langContent.title}
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-sans">
              {langContent.subtitle}
            </p>
          </div>

          {/* 标签切换 - 紧凑 */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 border-b border-gray-200 mb-2">
            <div className="flex flex-wrap gap-1 md:gap-1 -mb-px">
              {(Object.entries(langContent.sections) as [string, string][]).map(([key, title]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key as any)}
                  className={`px-2 py-1 md:px-3 md:py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-150 rounded-t border ${
                    activeSection === key
                      ? 'text-gray-900 bg-white border-gray-300 border-b-white -mb-px'
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          {/* 内容区域 */}
          <div className="max-w-6xl mx-auto px-4 pb-6 md:pb-8">
            <div className="font-['Futura','Segoe UI',system-ui,sans-serif]">
              
              {/* 标题和副标题 */}
              <div className="mb-3">
                <h2 className="text-sm font-medium text-gray-800 inline-block">
                  {sectionData.title}
                </h2>
                {sectionData.subtitle && (
                  <span className="ml-1.5 text-xs text-gray-500 font-sans font-normal">
                    {sectionData.subtitle}
                  </span>
                )}
              </div>
              
              {/* 定义/描述 */}
              {sectionData.definition && (
                <p className="text-xs text-gray-700 mb-3 leading-snug">
                  {sectionData.definition}
                </p>
              )}
              
              {/* 主要内容 - 文本块 */}
              {sectionData.content && typeof sectionData.content === 'string' && (
                <div className="mb-4">
                  <div className="text-xs text-gray-700 whitespace-pre-line leading-snug">
                    {sectionData.content}
                  </div>
                </div>
              )}
              
              {/* 简介内容 */}
              {sectionData.intro && (
                <p className="text-xs text-gray-700 mb-3 leading-snug">
                  {sectionData.intro}
                </p>
              )}

              {/* 表格 - 紧凑学术表格 */}
              {sectionData.tables && sectionData.tables.map((table: any, idx: number) => (
                <div key={idx} className="mb-4 overflow-x-auto">
                  {table.title && (
                    <h3 className="text-xs font-medium text-gray-800 mb-1.5">
                      {table.title}
                    </h3>
                  )}
                  <table className="min-w-full border-collapse border border-gray-200 text-xs">
                    <thead>
                      <tr className="bg-gray-50">
                        {table.headers.map((header: string, i: number) => (
                          <th
                            key={i}
                            className="border border-gray-200 px-2 py-1 text-left font-medium text-gray-700 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row: string[], rowIdx: number) => (
                        <tr
                          key={rowIdx}
                          className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-50/80'}
                        >
                          {row.map((cell: string, cellIdx: number) => (
                            <td
                              key={cellIdx}
                              className="border border-gray-200 px-2 py-1 text-gray-700 align-top"
                            >
                              {cellIdx === 0 ? (
                                <span className="font-medium">{cell}</span>
                              ) : (
                                cell
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}

              {/* 子章节（发音基础等） */}
              {sectionData.sections && !sectionData.types && (
                <div className="space-y-4">
                  {sectionData.sections.map((subsection: any, idx: number) => (
                    <div key={idx} className="border-l border-gray-200 pl-2.5">
                      <h3 className="text-xs font-medium text-gray-800 mb-1">
                        {subsection.title}
                        {subsection.devanagari && (
                          <span className="ml-1.5 text-xs text-gray-500 font-sans font-normal">
                            {subsection.devanagari}
                          </span>
                        )}
                      </h3>
                      
                      {subsection.content && (
                        <div className="text-xs text-gray-700 mb-1.5 whitespace-pre-line leading-snug">
                          {subsection.content}
                        </div>
                      )}
                      
                      {subsection.items && (
                        <ul className="text-xs text-gray-700 space-y-0.5">
                          {subsection.items.map((item: any, itemIdx: number) => (
                            <li key={itemIdx} className="flex items-baseline py-0.5">
                              {item.sanskrit && (
                                <span className="font-sans text-gray-600 min-w-[100px]">
                                  {item.sanskrit}
                                </span>
                              )}
                              {item.meaning && (
                                <span className="ml-1.5">{item.meaning}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 辅音分类 */}
              {sectionData.categories && (
                <div className="space-y-3">
                  {sectionData.categories.map((category: any, idx: number) => (
                    <div key={idx} className="border-l border-gray-300 pl-2.5">
                      <h3 className="text-xs font-medium text-gray-800 mb-0.5">
                        {category.name}
                      </h3>
                      <p className="text-xs text-gray-700 mb-1">
                        {category.description}
                      </p>
                      {category.subcategories && (
                        <ul className="text-xs text-gray-700 ml-3 space-y-0">
                          {category.subcategories.map((sub: string, subIdx: number) => (
                            <li key={subIdx} className="flex py-0">
                              <span className="mr-1">•</span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {category.example && (
                        <p className="text-xs text-gray-600 mt-1">
                          {category.example}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 规则列表 */}
              {sectionData.rules && (
                <div className="mb-4">
                  <ul className="text-xs text-gray-700 space-y-0.5 ml-0.5">
                    {sectionData.rules.map((rule: string, idx: number) => (
                      <li key={idx} className="flex py-0.5">
                        <span className="mr-1.5">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 特殊复合辅音 - 紧凑卡片 */}
              {sectionData.specialCombinations && (
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-gray-800 mb-2">
                    {language === 'zh' ? '特殊复合辅音' : 'Special Conjuncts'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sectionData.specialCombinations.map((item: any, idx: number) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded p-2 hover:bg-gray-50/30"
                      >
                        <div className="flex items-baseline mb-0.5">
                          <div className="text-sm font-sans mr-1.5">{item.devanagari}</div>
                          <div className="text-xs italic text-gray-600 font-mono">{item.transliteration}</div>
                        </div>
                        <div className="text-xs text-gray-500 mb-1">{item.components}</div>
                        {item.examples && (
                          <div className="text-xs text-gray-700 mt-1.5 space-y-0">
                            {item.examples.map((ex: string, exIdx: number) => (
                              <div key={exIdx} className="font-sans">{ex}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {sectionData.note && (
                    <div className="mt-2 text-xs text-gray-600 italic border-l border-gray-300 pl-2 py-0.5">
                      {sectionData.note}
                    </div>
                  )}
                </div>
              )}

              {/* 音节类型 - 紧凑卡片 */}
              {sectionData.types && Array.isArray(sectionData.types) && sectionData.types[0] && sectionData.types[0].name && (
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-gray-800 mb-1.5">
                    {language === 'zh' ? '音节类型' : 'Syllable Types'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sectionData.types.map((type: any, idx: number) => (
                      <div key={idx} className="border border-gray-200 rounded p-2">
                        <div className="text-xs font-medium text-gray-800 mb-0.5">{type.name}</div>
                        <div className="text-xs font-sans text-gray-600 mb-0.5">{type.example}</div>
                        <div className="text-xs text-gray-500">{type.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 音节重量 - 紧凑面板 */}
              {sectionData.weight && (
                <div className="mb-4 p-2 border border-gray-200 rounded">
                  <h3 className="text-xs font-medium text-gray-800 mb-1.5">
                    {language === 'zh' ? '音节重量' : 'Syllable Weight'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-1.5">
                    <div>
                      <div className="text-xs font-medium text-gray-700 mb-0">
                        {language === 'zh' ? '轻音节' : 'Light syllable'}
                      </div>
                      <div className="text-xs text-gray-600">{sectionData.weight.light}</div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-700 mb-0">
                        {language === 'zh' ? '重音节' : 'Heavy syllable'}
                      </div>
                      <div className="text-xs text-gray-600">{sectionData.weight.heavy}</div>
                    </div>
                  </div>
                  {sectionData.weight.note && (
                    <div className="text-xs text-gray-500 italic">
                      {sectionData.weight.note}
                    </div>
                  )}
                </div>
              )}

              {/* 连音类型 */}
              {sectionData.types && Array.isArray(sectionData.types) && sectionData.types[0] && sectionData.types[0].devanagari && (
                <div className="space-y-3">
                  {sectionData.types.map((type: any, idx: number) => (
                    <div key={idx} className="border-l border-gray-300 pl-2">
                      <h3 className="text-xs font-medium text-gray-800 mb-0.5">
                        {type.name}
                        {type.devanagari && (
                          <span className="ml-1.5 text-xs text-gray-500 font-sans font-normal">
                            {type.devanagari}
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-gray-700 mb-1.5">
                        {type.description}
                      </p>
                      <ul className="text-xs text-gray-700 space-y-0 ml-0.5">
                        {type.examples.map((example: string, exIdx: number) => (
                          <li key={exIdx} className="flex py-0">
                            <span className="mr-1">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* 瑜伽哲学与脉轮对应关系 - 紧凑 */}
              {activeSection === 'intro' && language === 'zh' && (
                <div className="mt-4 p-3 border border-gray-200 rounded bg-gray-50/50">
                  <h3 className="text-xs font-medium text-gray-800 mb-1.5">
                    瑜伽哲学中的梵语字母
                  </h3>
                  <p className="text-xs text-gray-700 mb-2">
                    在瑜伽哲学中，不同的梵语字母被认为与身体的能量中心（脉轮）相关联：
                  </p>
                  <div className="text-xs text-gray-600 space-y-0.5">
                    {[
                      { char: 'ॐ', name: '顶轮（千花瓣）' },
                      { char: 'उँ', name: '额轮（2花瓣）' },
                      { char: 'हं', name: '喉轮（16花瓣）' },
                      { char: 'यं', name: '心轮（12花瓣）' },
                      { char: 'रं', name: '脐轮（10花瓣）' },
                      { char: 'वं', name: '腹轮（6花瓣）' },
                      { char: 'लं', name: '根轮（4花瓣）' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="font-sans mr-1.5">{item.char}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'intro' && language === 'en' && (
                <div className="mt-4 p-3 border border-gray-200 rounded bg-gray-50/50">
                  <h3 className="text-xs font-medium text-gray-800 mb-1.5">
                    Sanskrit Letters in Yoga Philosophy
                  </h3>
                  <p className="text-xs text-gray-700 mb-2">
                    In yoga philosophy, different Sanskrit letters are believed to be associated with the body's energy centres (chakras):
                  </p>
                  <div className="text-xs text-gray-600 space-y-0.5">
                    {[
                      { char: 'ॐ', name: 'Crown Chakra (Thousand Petals)' },
                      { char: 'उँ', name: 'Brow Chakra (2 Petals)' },
                      { char: 'हं', name: 'Throat Chakra (16 Petals)' },
                      { char: 'यं', name: 'Heart Chakra (12 Petals)' },
                      { char: 'रं', name: 'Solar Plexus Chakra (10 Petals)' },
                      { char: 'वं', name: 'Sacral Chakra (6 Petals)' },
                      { char: 'लं', name: 'Root Chakra (4 Petals)' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="font-sans mr-1.5">{item.char}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
