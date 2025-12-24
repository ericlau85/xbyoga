// /app/policies/agreement/page.tsx
'use client';

import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const guideContent = {
  zh: {
    title: '阿斯汤加瑜伽在线练习指南',
    subtitle: '传统精要 • 课堂规范 • 练习建议',
    lastUpdated: '最后更新：2025年12月',
    backButton: '返回课程',
    
    parts: [
      {
        title: '序言',
        content: '本指南旨在帮助您理解阿斯汤加瑜伽的传统精髓，掌握安全有效的在线Mysore练习方法。无论您是初学者还是资深练习者，本指南都将提供清晰指导，助您建立专注、自律的练习习惯。请仔细阅读。'
      },
      {
        title: '第一章：阿斯汤加系统与在线Mysore教学',
        subtitle: '理解传统，精进练习',
        sections: [
          {
            title: '1.1 传统精髓',
            items: [
              '阿斯汤加瑜伽是一套通过固定体式、呼吸与凝视点三者协同（tristhāna）以实现身心净化的系统。',
              '在线课程恪守其核心教学法——迈场（Mysore），即在集体环境中按个人节奏练习，老师进行一对一指导。这种方式确保了教学的个性化与渐进性，其深意在于：在独处中建立自律，在熟悉中创造神圣，在距离中建立连接。'
            ]
          },
          {
            title: '1.2 哲学根基：八支瑜伽的垫上实践',
            items: [
              '阿斯汤加（aṣṭāṅga）意为"八支"，源自帕坦伽利《瑜伽经》。每一次体式练习，都是八支瑜伽的完整微观实践：',
              '禁制（yama）：在集体中保持专注边界，是"不伤害"；不超前练习，是"不偷盗"与谦卑。',
              '劝制（niyama）：清洁空间与心意，是"清净"；持续练习，是"自律"；接纳当下，是"满足"。',
              '坐法（āsana）：身体成为祭坛，呼吸成为祭品，意识成为祭司。',
              '调息（prāṇāyāma）：呼吸连接身体与能量，冲刷意识的岸边。',
              '制感（pratyāhāra）：凝视点（dṛṣṭi）是感官收摄的"锚点"，为心意回归提供支点。',
              '专注（dhāraṇā）：在重复序列中，意识安住于一处，不再散乱。',
              '禅定（dhyāna）：当体式、呼吸、凝视点融为一体，动作成为"通过我发生"的流动静默。',
              '三昧（samādhi）：偶尔瞥见练习者、练习与被练习之物无分别合一，是瑜伽的终极指向。'
            ]
          },
          {
            title: '1.3 重要梵语术语',
            items: [
              '基础术语：aṣṭāṅga（八支）, vinyāsa（串联）, sūrya namaskāra（拜日）, bandha（收束）, dṛṣṭi（凝视点）',
              '哲学概念：prāṇa（生命能量）, avidyā（无明）, ahiṃsā（不伤害）, tapas（自律）',
              '身心层次：śarīra（身体）, manas（心意）, buddhi（理智）, ahaṃkāra（自我）'
            ]
          },
          {
            title: '1.4 给初学者的特别建议',
            items: [
              '适应期：前1-3个月重点建立对基础体式、呼吸节奏和凝视点的熟悉。这是构建安全、稳定练习的必要阶段，请保持耐心。',
              '序列记忆：勿依赖图谱或笔记。记忆序列是练习的一部分，每次只需记住下一个体式。',
              '简化期望：练习初期可能感觉混乱或挫败。请优先关注稳定呼吸，而非完美体式外形。',
              '在线调整：以言语指令为主，需更敏锐地聆听身体信号。'
            ]
          }
        ]
      },
      {
        title: '第二章：课前准备与课堂规范',
        subtitle: '打造专注的练习环境',
        sections: [
          {
            title: '2.1 课前准备',
            items: [
              '空间：准备一个安全、整洁、防滑且无障碍物的区域、光线充足，摄像头可拍摄全身。',
              '设备：摄像头置于侧方，练习时麦克风静音。建议开启扬声器以确保听清指导。',
              '个人：穿着贴身、便于观察身体顺位的练习服，保持练习前3-4小时空腹。',
              '时间：Mysore课可提前进入，自行开始拜日，无需等待；领课提前10分钟上线准备，避免匆忙开始。'
            ]
          },
          {
            title: '2.2 课堂礼仪、安全与沟通',
            items: [
              '专注：全程专注于自身的练习。除非经老师明确要求，请勿在屏幕前观察他人练习。',
              '安全自护流程：您是对自身安全负责的第一人。如出现剧痛、头晕或关节失控：1. 立即缓慢退出当前体式。2. 进入婴儿式或仰卧休息。3. 平静注视摄像头（老师看到后会给予关注）。',
              '课堂沟通：练习中如遇设备问题或需紧急示意，可短暂开启麦克风做简短说明。复杂问题请于课后与老师单独沟通。',
              '课堂隐私：未经老师及所有出镜同修许可，严禁对课堂进行任何形式的录音、录像、截图及内容传播。'
            ]
          },
          {
            title: '2.3 关于休息',
            items: [
              '序列休息：完整练习务必包含练习前的静心准备，以及最后至少5-10分钟的平躺休息，这是整合练习效果的重要环节。',
              '自主休息：女性生理期（前三天建议休息，在结束之前应避免倒置和收束练习）、因感冒或个人事务需休息，提前简单告知即可。',
              '固定休息日：每周六，以及新月、满月日。以使身心与自然节律同步，实现深度恢复。'
            ]
          }
        ]
      },
      {
        title: '第三章：练习核心',
        subtitle: '体式 • 呼吸 • 凝视点的精密协同',
        sections: [
          {
            title: '3.1 体式（āsana）与串联（vinyāsa）',
            items: [
              '体式是练习的物理容器，通过Vinyāsa串联成具有疗愈逻辑的固定序列。持续的体式练习在体内产生清洁的热能（tapas），改善循环，润滑关节，促进身体的净化。这些序列依次侧重身体调整、排毒、能量净化与神经系统平衡。按序练习能让意识从记忆中解脱，更深入地沉浸于呼吸与觉知。'
            ]
          },
          {
            title: '3.2 调息（prāṇāyāma）与收束（bandha）',
            items: [
              '调息是生命能量的调控艺术，在动态体式练习中，每个动作必须跟随呼吸的节律，由呼吸引领动作（vinyasa），其深度决定了动作的速度与幅度，体式的稳定来自收束（bandha）的支撑——生命之锁。上提盆底(mūla bandha)、内收下腹(uḍḍīyāna bandha)协同喉部调控(jālandhara bandha)，这些身体内部的“锁印”为体式提供内在稳定的支撑和轻盈感 ，并引导生命能量（prāṇa）向上流动，滋养更高层的能量中心。轻微的喉锁产生平稳和均匀的呼吸声，成为意识的锚点。'
            ]
          },
          {
            title: '3.3 凝视点（dṛṣṭi）与计数（vinyāsa Count）',
            items: [
              '每个体式的进入、保持和退出都有对应的计数和凝视点（如鼻尖nāsāgre、眉心bhrūmadhye、脐部nābhou等）。在练习中跟随计数指引（如1 ekam、2 dve、3 trīṇi）并柔和地将目光投向指定方向，以保持清晰的意识。凝视的目的是引导能量流动，避免心意散乱————气动意动，气散心散，正是体式与调息练习的精髓。即使在闭眼体式中，也需保持内在的凝视意识，为专注与禅定奠定基础。'
            ]
          },
          {
            title: '三位一体（tristhāna）',
            items: [
              '体式、调息与凝视三者协同，共同指向身、息、意的整合，同步契合瑜伽修习的精进次第：体式建立身体稳定（sthira）；调息实现能量平衡（prāṇa-samyaṃ）；凝视点确保意识专注（ekāgratā）。'
            ]
          }
        ]
      },
      {
        title: '第四章：唱诵、哲学与社群精神',
        subtitle: '超越体式的更深层修行',
        sections: [
            {
              title: '4.1 唱诵的意义',
              items: [
                '开场唱诵',
                '开场唱诵礼敬上师，设定以根除无明为目标的练习意向。即使不理解梵文词汇，感受声音的振动，专注呼吸与声音的协调，也能帮助我们从日常生活进入练习状态。',
                'वन्दे गुरूणां चरणारविन्दे संदर्शितस्वात्मसुखावबोधे । निःश्रेयसे जाङ्गलिकायमाने संसारहालाहलमोहशान्त्यै ॥',
                'vande gurūṇāṃ caraṇāravinde saṃdarśitasvātmasukhāvabodhe । niḥśreyase jāṅgalikāyamāne saṃsārahālāhalamohaśāntyai ॥',
                '敬礼师尊莲足前，开示真我安乐禅；为求解脱施良药，灭尽痴毒醒迷眠。',
                'आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् । सहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥',
                'ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam । sahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥',
                '上身人形持法器，螺轮剑戟威德全；头顶皎洁千蛇冠，敬礼帕坦伽利前。',
                '结束唱诵',
                '结束唱诵将个人练习的功德回向众生，体现瑜伽的联结与奉献本质，从个体修行扩展到对世界的关怀。即使独自在家练习，也鼓励低声唱诵，以此作为进入和退出练习圣地的仪式。',
                'स्वस्तिप्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः । गोब्राह्मणेभ्यः शुभमस्तु नित्यं लोकाः समस्ताः सुखिनो भवन्तु ॥',
                'svasti prajābhyaḥ paripālayantāṃ nyāyena mārgeṇa mahīṃ mahīśāḥ । go brāhmaṇebhyaḥ śubhamastu nityaṃ lokāḥ samastāḥ sukhino bhavantu ॥',
                '愿王正法护苍生，公正治国天下平；牛智恒昌得吉祥，众生安乐离苦情。'
              ]
            },
          {
            title: '4.2 社群共同约定',
            items: [
              '相互尊重：以专注自身练习表达对老师与同修的最大尊重。',
              '师生同信：老师提供安全专业的指导；练习者保持规律、真诚的练习态度。',
              '友善共修：保持纯粹、友善的共修氛围，共同维护场域能量。',
              '持身以敬：修习始于课堂，持敬见于日常，请在体式外以瑜伽精神彼此支持。'
            ]
          }
        ]
      },
      {
        title: '第五章：常见问题与练习建议',
        subtitle: '实践中的智慧与解答',
        sections: [
          {
            title: '5.1 常见问题与内心解惑',
            items: [
              '1. 身体僵硬，可以练习吗？',
              '可以。练习的起点是呼吸与专注，而非身体的柔软度。请从拜日开始，关注自身的节奏。',
              '2. 曾在别处学过更多体式，在这里要如何练习？',
              '阿斯汤加序列是一个完整的疗愈与能量构建系统。为保障练习安全与深度，请给予老师约一个月的时间进行充分观察与了解。',
              '3. 身体柔软，感觉序列"太简单"，能否加快进度？',
              '柔软不等于稳定。在基础体式中建立控制、呼吸与能量的衔接，往往需要更多的耐心与内在觉察。',
              '4. 如何区分正常的练习感受与受伤的疼痛？',
              '关节的刺痛、锐痛或麻木是必须停止的信号。肌肉的伸展感、温和的酸胀，并能在体式保持中通过呼吸缓解放松的，多属良性的过程。如有疑虑，请立即停止并咨询老师。',
              '5. 总记不住序列和计数，怎么办？',
              '记忆是练习的一部分。请接受初期的缓慢与遗忘，每次只需记住下一个体式。通过每日重复，身体与呼吸会自然形成节奏。',
              '6. 如何保持动力并衡量进步？',
              '进步应以年为单位衡量，标准在于练习的规律性、呼吸的稳定、专注的深度与内心的从容，而非单日体式的表现。',
              '7. 长期中断后，如何回归练习？',
              '请全然接纳当下的状态，从缩短的序列和更长的休息开始。首要目标是温和地重建呼吸与身体的连接。'
            ]
          }
        ]
      },
      {
        title: '结语',
        content: '在线阿斯汤加练习的深意，在于将独处转化为自律，将熟悉升华为神圣，在距离中培育真正的连接。每一次踏上垫子的决定，每一次稳定而深长的呼吸，每一次将意识收回当下的努力，都是八支瑜伽的鲜活实践。愿您的每一次练习，都是一次与内在自我的深刻对话。'
      }
    ],
    
    teacherInfo: {
      name: '希波 Eric',
      note: '（以上内容基于传统教学原则编写，具体练习细节请遵循授课老师的即时指导。）'
    },
    
    contactTitle: '联系方式',
    contactInfo: [
      'hi@xbyoga.com',
      '+86 131 2121 2007',
    ]
  },
  
  en: {
    title: 'Ashtanga Yoga Online Practice Guide',
    subtitle: 'Traditional Essence • Class Norms • Practice Advice',
    lastUpdated: 'Last Updated: December 2025',
    backButton: 'Back to Course',
    
    parts: [
      {
        title: 'Preamble',
        content: 'This guide aims to help you understand the traditional essence of Ashtanga yoga and master safe, effective online Mysore practice methods. Whether you are a beginner or an experienced practitioner, this guide provides clear guidance to help you establish focused, disciplined practice habits. Please read carefully.'
      },
      {
        title: 'Chapter 1: Ashtanga System & Online Mysore Teaching',
        subtitle: 'Understanding Tradition, Progressing in Practice',
        sections: [
          {
            title: '1.1 Traditional Essence',
            items: [
              'Ashtanga yoga is a system that achieves purification of body and mind through the coordinated trinity (tristhāna) of fixed postures, breath, and gaze points.',
              'Online courses adhere to its core teaching method—Mysore, where practitioners practice at their own pace in a collective environment while the teacher provides one-on-one guidance. This ensures personalized and progressive teaching. Its deeper meaning lies in: building discipline in solitude, creating sacredness in familiarity, and establishing connection across distance.'
            ]
          },
          {
            title: '1.2 Philosophical Foundation: Eight Limbs on the Mat',
            items: [
              'Ashtanga (aṣṭāṅga) means "eight limbs", derived from Patañjali\'s Yoga Sūtras. Each posture practice is a complete micro-practice of the eight-limbed yoga:',
              'Restraints (yama): Maintaining focus boundaries in a group is "non-violence"; not practising ahead is "non-stealing" and humility.',
              'Observances (niyama): Cleaning space and mind is "purity"; consistent practice is "discipline"; accepting the present is "contentment".',
              'Posture (āsana): The body becomes the altar, breath the offering, consciousness the priest.',
              'Breath Control (prāṇāyāma): Breath connects body and energy, washing the shores of awareness.',
              'Sense Withdrawal (pratyāhāra): The gaze point (dṛṣṭi) is the "anchor" for sense withdrawal, providing a foothold for the mind\'s return.',
              'Concentration (dhāraṇā): In repeated sequences, consciousness abides in one place, no longer scattered.',
              'Meditation (dhyāna): When postures, breath, and gaze points merge, movement becomes flowing silence that "happens through me".',
              'Samadhi (Absorption): Occasionally glimpsing non-dual unity of practitioner, practice, and the practised is the ultimate direction of yoga.'
            ]
          },
          {
            title: '1.3 Important Sanskrit Terms',
            items: [
              'Basic terms: aṣṭāṅga (eight limbs), vinyāsa (flow), sūrya namaskāra (Sun Salutation), bandha (lock), dṛṣṭi (gaze point)',
              'Philosophical concepts: prāṇa (life force), avidyā (ignorance), ahiṃsā (non-violence), tapas (discipline)',
              'Body-mind levels: śarīra (body), manas (mind), buddhi (intellect), ahaṃkāra (ego)'
            ]
          },
          {
            title: '1.4 Special Advice for Beginners',
            items: [
              'Adaptation period: The first 1-3 months focus on familiarizing yourself with foundational postures, breathing rhythm, and gaze points. This is a necessary stage to build a safe and stable practice—please be patient.',
              'Sequence memory: Do not rely on charts or notes. Memorizing sequences is part of practice; just remember the next posture each time.',
              'Simplify expectations: Feeling confused or frustrated early on is normal. Prioritize stable breathing over perfect posture form.',
              'Online adjustments: Primarily verbal instructions; listen more acutely to body signals.'
            ]
          }
        ]
      },
      {
        title: 'Chapter 2: Pre-Practice Preparation & Class Norms',
        subtitle: 'Creating a Focused Practice Environment',
        sections: [
          {
            title: '2.1 Pre-Practice Preparation',
            items: [
              'Space: Prepare a safe, tidy, non-slip area free of obstacles, with good lighting for full-body camera view.',
              'Equipment: Place camera to the side; mute microphone during practice. Use speakers for clear instruction.',
              'Personal: Wear fitted practice attire for clear alignment observation; maintain 3-4 hours fasting before practice.',
              'Time: For Mysore, enter early and begin Sun Salutations independently; for Led class, log in 10 minutes early to prepare.'
            ]
          },
          {
            title: '2.2 Class Etiquette, Safety & Communication',
            items: [
              'Focus: Maintain full focus on your own practice. Unless explicitly requested by teacher, avoid observing others\' practice on screen.',
              'Safety self-care process: You are the primary person responsible for your safety. If sharp pain, dizziness, or joint instability occurs: 1. Immediately slowly exit current posture. 2. Rest in Child\'s Pose or supine position. 3. Calmly look at camera (teacher will provide attention upon noticing).',
              'Class communication: During practice, for equipment issues or urgent signals, briefly activate microphone for short explanation. Complex issues should be discussed with teacher separately after class.',
              'Class privacy: Without permission from teacher and all visible participants, any form of recording, videoing, screenshotting, or dissemination of class content is strictly prohibited.'
            ]
          },
          {
            title: '2.3 Rest Arrangements',
            items: [
              'Sequence Rest: A complete practice must include quiet mental preparation beforehand, and at least 5-10 minutes of supine rest (Śavāsana) at the end. This is an essential component for integrating the effects of practice.',
              'Personal Rest: For menstrual periods (rest recommended during the first three days; avoid inversions and bandha practice until completion), colds, or personal matters requiring rest, simply inform in advance.',
              'Fixed Rest Days: Every Saturday, plus new moon and full moon days, allowing body and mind to synchronise with natural rhythms for deep recovery.'
            ]
          }
        ]
      },
      {
        title: 'Chapter 3: Practice Core',
        subtitle: 'Precise Coordination of Posture • Breath • Gaze Point',
        sections: [
          {
            title: '3.1 Posture (āsana) & Flow (vinyāsa)',
            items: [
              'Postures are the physical vessels of practice, connected through Vinyāsa into fixed sequences with therapeutic logic. Sustained posture practice generates purifying heat (tapas) within the body, improving circulation, lubricating joints, and promoting physical purification. These sequences successively emphasise body adjustment, detoxification, energy purification, and nervous system balance. Practising in order frees consciousness from memory, allowing deeper immersion into breath and awareness.'
            ]
          },
          {
            title: '3.2 Breath Control (prāṇāyāma) & Locks (bandha)',
            items: [
              'Breath control is the art of regulating life force energy. In dynamic posture practice, each movement must follow the rhythm of breath—led by breath (vinyasa), its depth determining the speed and amplitude of movement. Postural stability derives from the support of bandhas—the "locks of life". Lifting the pelvic floor (mūla bandha), drawing the lower abdomen inward (uḍḍīyāna bandha), and coordinating with throat regulation (jālandhara bandha), these internal "seals" provide intrinsic stable support and lightness to postures, guiding life force energy (prāṇa) upward to nourish higher energy centres. The gentle throat lock produces steady, even breath sounds, becoming the anchor of awareness.'
            ]
          },
          {
            title: '3.3 Gaze Point (dṛṣṭi) & Count (vinyāsa Count)',
            items: [
              'Each posture\'s entry, hold, and exit have corresponding counts and gaze points (e.g., nose tip nāsāgre, eyebrow centre bhrūmadhye, navel nābhou, etc.). During practice, follow the count guidance (e.g., 1 ekam, 2 dve, 3 trīṇi) and gently direct your gaze toward the specified direction to maintain clear awareness. The purpose of gazing is to guide energy flow and prevent mental distraction—where breath moves, mind moves; where breath scatters, mind scatters—this is the essence of posture and breath practice. Even in closed-eye postures, maintain inner gazing awareness to establish the foundation for concentration and meditation.'
            ]
          },
          {
            title: 'Threefold Method (tristhāna)',
            items: [
              'Posture, breath control, and gaze work in harmony, jointly directing the integration of body, breath, and mind, synchronously aligning with the progressive stages of yoga practice: posture establishes bodily steadiness (sthira); breath control achieves energy equilibrium (prāṇa-samyaṃ); the gaze point ensures mental focus (ekāgratā).'
            ]
          }
        ]
      },
      {
        title: 'Chapter 4: Chanting, Philosophy & Community Spirit',
        subtitle: 'Deeper Practice Beyond Postures',
        sections: [
            {
              title: '4.1 Meaning of Chanting',
              items: [
                'Opening Chant',
                'The opening chant honours the teacher lineage, establishing practice intention aimed at eradicating ignorance (avidyā). Even without understanding the Sanskrit words, feeling the vibration of the sounds and focusing on the coordination of breath and voice can help transition from daily life into practice state.',
                'वन्दे गुरूणां चरणारविन्दे संदर्शितस्वात्मसुखावबोधे । निःश्रेयसे जाङ्गलिकायमाने संसारहालाहलमोहशान्त्यै ॥',
                'vande gurūṇāṃ caraṇāravinde saṃdarśitasvātmasukhāvabodhe । niḥśreyase jāṅgalikāyamāne saṃsārahālāhalamohaśāntyai ॥',
                'I bow to the lotus feet of the teachers, who reveal the joy of knowing the true Self; who act as physicians administering the remedy for liberation, extinguishing the poison of delusion in worldly existence.',
                'आबाहुपुरुषाकारं शङ्खचक्रासिधारिणम् । सहस्रशिरसं श्वेतं प्रणमामि पतञ्जलिम् ॥',
                'ābāhupuruṣākāraṃ śaṅkhacakrāsidhāriṇam । sahasraśirasaṃ śvetaṃ praṇamāmi patañjalim ॥',
                'With upper body in human form, holding conch, disc, and sword; with a thousand white-hooded heads, I bow to Patañjali.',
                'Closing Chant',
                'The closing chant dedicates the merit of personal practice to all beings, embodying the connective and devotional essence of yoga, expanding from individual practice to care for the world. Even when practising alone at home, quiet chanting is encouraged as a ritual for entering and leaving the sacred space of practice.',
                'स्वस्तिप्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः । गोब्राह्मणेभ्यः शुभमस्तु नित्यं लोकाः समस्ताः सुखिनो भवन्तु ॥',
                'svasti prajābhyaḥ paripālayantāṃ nyāyena mārgeṇa mahīṃ mahīśāḥ । go brāhmaṇebhyaḥ śubhamastu nityaṃ lokāḥ samastāḥ sukhino bhavantu ॥',
                'May the rulers protect the people according to law; may there always be auspiciousness for cows and sages; may all beings in all worlds be happy.'
              ]
            },
          {
            title: '4.2 Community Agreements',
            items: [
              'Mutual respect: Express greatest respect for teacher and fellow practitioners by focusing on your own practice.',
              'Teacher-student trust: Teacher provides safe, professional guidance; practitioners maintain regular, sincere practice attitude.',
              'Friendly shared practice: Maintain pure, friendly shared practice atmosphere, collectively maintaining field energy.',
              'Conduct with reverence: Practice begins in class, reverence appears in daily life; please support each other with yoga spirit beyond postures.'
            ]
          }
        ]
      },
      {
        title: 'Chapter 5: Common Questions & Practice Suggestions',
        subtitle: 'Wisdom & Answers in Practice',
        sections: [
          {
            title: '5.1 Common Questions & Inner Resolutions',
            items: [
              '1. Can I practice if my body is stiff?',
              'Yes. The starting point of practice is breath and focus, not body flexibility. Begin with Sun Salutations, attend to your own rhythm.',
              '2. How to practice here if I\'ve learned more postures elsewhere?',
              'Ashtanga sequences form a complete therapeutic and energy-building system. To ensure practice safety and depth, allow teacher about one month for thorough observation and understanding.',
              '3. Can I accelerate progress if my body is flexible and sequences feel "too simple"?',
              'Flexibility does not equal stability. Establishing control, breath, and energy connection in basic postures often requires more patience and inner awareness.',
              '4. How to distinguish normal practice sensations from injury pain?',
              'Sharp, stabbing, or numb pain in joints are signals to stop. Muscle stretching sensations, gentle soreness that can relax through breath during posture holds mostly belong to benign processes. If in doubt, stop immediately and consult teacher.',
              '5. What if I can\'t remember sequences and counts?',
              'Memory is part of practice. Accept initial slowness and forgetting; just remember the next posture each time. Through daily repetition, body and breath naturally form rhythm.',
              '6. How to maintain motivation and measure progress?',
              'Progress should be measured in years, with standards being practice regularity, breath stability, depth of focus, and inner composure—not single-day posture performance.',
              '7. How to return to practice after long interruption?',
              'Completely accept the current state, starting with shortened sequences and longer rests. The primary goal is gently rebuilding breath-body connection.'
            ]
          }
        ]
      },
      {
        title: 'Conclusion',
        content: 'The deeper meaning of online Ashtanga practice lies in transforming solitude into discipline, sublimating familiarity into sacredness, and cultivating true connection across distance. Every decision to step onto the mat, every stable deep breath, every effort to bring awareness back to the present moment is a living practice of the eight-limbed yoga. May each of your practice sessions be a profound dialogue with your inner self.'
      }
    ],
    
    teacherInfo: {
      name: 'Xibo Eric',
      note: '(The above content is based on traditional teaching principles. Specific practice details should follow the real-time guidance of the teaching teacher.)'
    },
    
    contactTitle: 'Contact Information',
    contactInfo: [
      'hi@xbyoga.com',
      '+86 131 2121 2007',
    ]
  }
};


export default function PracticeGuidePage() {
  const { language } = useLanguage();
  const content = guideContent[language as keyof typeof guideContent];
  
  return (
    <div className="min-h-screen safe-top safe-bottom pt-12">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* 返回链接 */}
        <div className="mb-4">
          <a
            href="/courses/ashtanga"
            className="text-xs text-gray-600 hover:text-gray-900 inline-flex items-center transition-colors">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {content.backButton}
          </a>
        </div>
        
        {/* 标题区域 */}
        <div className="mb-6">
          <h1 className="text-xl font-light text-gray-900 mb-1">
            {content.title}
          </h1>
          <p className="text-xs text-gray-500 mb-1">
            {content.subtitle}
          </p>
          <p className="text-xs text-gray-400">
            {content.lastUpdated}
          </p>
        </div>
        
        {/* 指南内容 */}
        <div className="prose prose-xs md:prose-sm max-w-none">
          {content.parts.map((part: any, index: number) => (
            <section key={index} className="mb-6 last:mb-4">
              <h2 className="text-base font-medium text-gray-900 mb-3 border-b border-gray-200 pb-2">
                {part.title}
              </h2>
              
              {part.content && (
                <div className={`
                  ${part.title === '序言' || part.title === 'Preamble' || 
                    part.title === '结语' || part.title === 'Conclusion'
                    ? 'text-gray-700 leading-relaxed mb-3 text-sm md:text-sm'
                    : 'text-gray-600 italic mb-3 text-xs'
                  }
                `}>
                  {part.content}
                </div>
              )}
              
              {part.subtitle && (
                <p className="text-gray-600 italic mb-3 text-xs">
                  {part.subtitle}
                </p>
              )}
              
                                                            {part.sections && part.sections.map((section: any, sectionIndex: number) => (
                                                              <div key={sectionIndex} className="mb-4">
                                                                <h3 className="text-sm font-medium text-gray-800 mb-1">
                                                                  {section.title}
                                                                </h3>
                                                                <ul className="space-y-1 text-gray-700">
                                                                  {section.items.map((item: string, itemIndex: number) => (
                                                                    <li key={itemIndex} className="flex items-start">
                                                                      <span className="leading-relaxed text-xs md:text-sm text-gray-700">
                                                                        {item}
                                                                      </span>
                                                                    </li>
                                                                  ))}
                                                                </ul>
                                                              </div>
                                                            ))}
            </section>
          ))}
        </div>
        
        {/* 教师信息 */}
        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-5">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-900 mb-1">
                {language === 'zh' ? '教学者：' : 'Teacher: '}
                <span className="text-red-800">{content.teacherInfo.name}</span>
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {content.teacherInfo.note}
              </p>
            </div>
          </div>
        </div>
        
        {/* 联系信息 */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-base font-medium text-gray-900 mb-3">
            {content.contactTitle}
          </h3>
          <div className="space-y-1 text-gray-700 text-sm">
            {content.contactInfo.map((info: string, index: number) => (
              <div key={index} className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{info}</span>
              </div>
            ))}
          </div>
          
          {/* 说明信息 */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-gray-600 text-xs leading-relaxed">
              {language === 'zh'
                ? '本指南为阿斯汤加瑜伽在线练习的指导手册。关于课程费用、支付、取消等具体服务条款，请参阅《在线教学服务协议》。'
                : 'This guide serves as the practice manual for Ashtanga yoga online instruction. For specific service terms regarding course fees, payment, cancellation, etc., please refer to the "Online Teaching Service Agreement".'}
            </p>
          </div>
        </div>
        
        {/* 底部签名 */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-xs">
            {language === 'zh' ? '持守传统，精进不懈。' : 'Hold fast to tradition, progress diligently.'}
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Namaste
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
