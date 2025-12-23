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
        content: '本指南旨在帮助您理解阿斯汤加瑜伽的传统精髓，掌握安全有效的在线练习方法，并为Mysore练习做好身心准备。无论您是初学者还是资深练习者，本指南都将为您提供清晰的指导与实用建议，帮助您建立专注、自律的练习习惯。请仔细阅读。'
      },
      {
        title: '第一章：阿斯汤加系统与在线Mysore教学',
        subtitle: '理解传统，精进练习',
        sections: [
          {
            title: '1.1 传统精髓',
            items: [
              '阿斯汤加瑜伽是一套通过固定体式、呼吸与凝视点三者协同（Tristhāna）以实现身心净化的系统。',
              '在线课程恪守其核心教学法——迈场（Mysore），即练习者在集体环境中按各自记忆的序列与节奏练习，老师通过观察进行一对一指导。这种方式确保了教学的个性化与渐进性。',
              '在线Mysore的深意在于：在独处中建立自律，在熟悉中创造神圣，在距离中建立连接。'
            ]
          },
          // 中文版本
          {
            title: '1.2 哲学根基',
            items: [
              '阿斯汤加（Aṣṭāṅga）意为"八支"，源自帕坦伽利《瑜伽经》的完整修行路径。',
              '每一次阿斯汤加体式练习，都是帕坦伽利八支瑜伽的完整微观实践——从外在伦理到内在解脱的完整旅程：',
              '1. 禁制（Yama）',
              '• 在集体中保持自身的专注边界，是对"不伤害"（Ahiṃsā）的第一重践行。',
              '• 不超前练习，不避重就轻，是对知识传承的"不偷盗"（Asteya），亦是谦卑。',
              '2. 劝制（Niyama）',
              '• 清洁空间，是物理的"清净"；保持晨间练习的纯粹性，是心意的"清净"（Śauca）。',
              '• 无论状态好坏都开始练习，是火性的"自律"（Tapas）——燃烧杂质，淬炼意志。',
              '• 接纳当下的局限，是"满足"（Saṃtoṣa）——体式不是征服的对象，而是对话的伙伴。',
              '3. 坐法（Āsana）',
              '• 身体成为祭坛，呼吸成为祭品，意识成为祭司。体式不是目的，而是净化与准备的场所。',
              '4. 调息（Prāṇāyāma）',
              '• 呼吸的声音如海浪，冲刷意识的岸边。呼吸是连接粗身与精身的桥梁。',
              '5. 制感（Pratyāhāra）',
              '• 凝视点（Dṛṣṭi）是感官收摄的"钩子"。当眼睛不再游荡，心便开始回家。',
              '6. 专注（Dhāraṇā）',
              '• 在序列的重复中，记忆被驯服，意识从思虑中解脱，安住于此刻的呼吸。',
              '7. 禅定（Dhyāna）',
              '• 当体式、呼吸、凝视点失去边界，动作不再是"我做"，而是"通过我发生"。这是流动中的静默，动作中的禅定。',
              '8. 三昧（Samādhi）',
              '• 虽难以言诠，但在深度练习中，偶尔瞥见一种无分别的宁静——练习者、练习与被练习之物合一。这是瑜伽的终极指向。'
            ]
          },
          {
            title: '1.3 重要梵语术语',
            items: [
              'Aṣṭāṅga：八支瑜伽体系',
              'Vinyāsa：呼吸与动作的精密串联',
              'Tristhāna：体式、呼吸、凝视点"三位一体"',
              'Samasthitiḥ：稳定站立（序列的开始与结束）',
              'Sūrya Namaskāra：拜日',
              'Bandha：收束法（能量锁）',
              'Dṛṣṭi：凝视点',
              'Citta Vṛtti Nirodhaḥ：心念波动的止息',
              'Prāṇa：生命能量',
              'Avidyā：无明/无知',
              'Śarīra：身体（三层：粗身、精身、因果身）',
              'Manas：心意/心智',
              'Buddhi：理智/智性',
              'Ahaṃkāra：自我意识',
              'Tapas：自律与精进',
              'Ahiṃsā：不伤害（首要戒律）'
            ]
          },
          {
            title: '1.4 给初学者的特别建议',
            items: [
              '适应期：在线Mysore对初学者可能更具挑战。前1-3个月的重点在于建立对拜日式的熟悉度、呼吸节奏与基本的凝视点意识。请给予自己足够的耐心。',
              '序列记忆：请勿依赖屏幕上的提示或笔记。记忆序列是练习的一部分，每次只需要记住一个体式即可。',
              '简化期望：练习初期可能感觉混乱或挫败，这是正常的。请优先关注稳定的呼吸，而非完美的体式外形。',
              '在线调整的特殊性：在线教学以清晰的言语指令进行"指导"或"微调"，无法进行物理辅助。您需要比线下课堂更敏锐地聆听身体信号。'
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
              '空间准备：准备一个安全、整洁、防滑且无障碍物的区域。确保光线充足，摄像头能完整拍摄全身。',
              '设备要求：将摄像头置于侧方，练习时保持麦克风静音。建议开启扩音器或佩戴耳机以确保听力清晰。',
              '个人准备：穿着贴身、便于观察身体顺位的练习服。尽量保持练习前3-4小时空腹。',
              '时间安排：请于约定时间前5分钟进入线上教室，铺好垫子，自行开始拜日，无需等待。如参加领课，请至少提前10分钟上线准备，避免匆忙开始。'
            ]
          },
          {
            title: '2.2 课堂礼仪与安全责任',
            items: [
              '专注即尊重：全程专注于自身的呼吸与练习。除非在领课等特殊环节经老师允许，请勿在屏幕上观察或评论他人练习。',
              '安全第一：您是对自身安全负责的第一人。练习中如出现剧痛、头晕或关节失控等不适，请立即：',
              '1. 缓慢退出当前体式',
              '2. 进入婴儿式休息',
              '3. 平静地注视摄像头（此为安全信号，老师看到后会给予关注）',
              '安全信号：练习中如果需要老师紧急关注（如感到不适、呼吸困难等），请直接看向摄像头并举起一只手（如果可以安全做到）。',
              '沟通方式：如有临时伤病，可在聊天区简短文字告知。复杂问题请留待课后单独沟通。'
            ]
          },
          {
            title: '2.3 休息安排',
            items: [
              '固定休息日：每周六，以及新月、满月日为传统休息日，以使身心与自然节律同步。',
              '自主休息：因生理期（前三天建议完全休息）、感冒或个人事务需要休息，提前简单告知即可。',
              '老师的承诺：如因老师原因取消课程，定会为您补足课时。'
            ]
          }
        ]
      },
      {
        title: '第三章：练习核心：三位一体（Tristhāna）',
        subtitle: '体式 • 呼吸 • 凝视点的精密协同',
        sections: [
          {
            title: '3.1 体式（Āsana）与串联（Vinyāsa）',
            items: [
              '体式通过Vinyāsa串联成具有疗愈逻辑的固定序列。',
              '初级序列（Yoga Chikitsa）侧重身体排毒与调整，中级序列（Nadi Shodhana）侧重神经系统净化。',
              '按序练习能让意识从记忆动作中解放，更深地沉浸于当下。'
            ]
          },
          {
            title: '3.2 调息（Prāṇāyāma）与收束（Bandha）',
            items: [
              '呼吸引领并决定动作的速度与幅度。在呼吸中建立柔和的声音以锚定意识。',
              '轻微的喉部收束（Jālandhara Bandha）协同上提盆底（会阴收束 Mūla Bandha）、内收下腹（腹部收束 Uḍḍīyāna Bandha）以引导能量、稳定核心并保护关节。',
              '收束应在老师的指导下逐步建立，避免过度用力。'
            ]
          },
          {
            title: '3.3 凝视点（Dṛṣṭi）',
            items: [
              '每个体式或动作都有指定的凝视点（如鼻尖、眉心、肚脐等）。',
              '凝视点用以收摄视觉感官，防止心意散乱，是实践"制感（Pratyāhāra）"的关键工具。',
              '即使在闭眼的体式中，也要保持内在的凝视点意识。'
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
              '开场唱诵：礼敬上师与圣哲帕坦伽利，设定练习意向，帮助身心从日常状态过渡到练习状态。',
              '结束唱诵：将个人练习的功德回向给所有众生，体现瑜伽的联结与奉献精神。',
              '即使不熟悉梵文，也可以聆听并感受唱诵的振动带来的平静与专注。'
            ]
          },
          {
            title: '4.2 社群共同约定',
            items: [
              '相互尊重：以专注自身练习来表达对老师与同修的最大尊重。',
              '信任与承诺：老师承诺提供安全、专业的指导；练习者承诺保持规律、真诚的练习态度。',
              '隐私保护：未经许可，禁止对课堂进行录音、录像、截图或传播。',
              '专业沟通：课程疑问请通过指定方式在课下时间与老师沟通。'
            ]
          }
        ]
      },
      {
        title: '第五章：常见问题与练习建议',
        subtitle: '实践中的智慧与解答',
        sections: [
          {
            title: '5.1 常见问题解答',
            items: [
              'Q：网络中断怎么办？',
              'A：请继续您的练习，老师会尝试重连。若无法恢复，请完成序列并充分休息，课后告知老师情况。',
              'Q：听不清指导怎么办？',
              'A：可轻微转头看向摄像头示意，或在安全时做手势。避免在练习中说话或打字。',
              'Q：如何保持动力并记录进步？',
              'A：建议建立练习仪式感，并准备一本"练习日志"，记录练习日期、身体感受、老师给予的新体式或调整，以及涌现的问题。进步应以年为单位衡量，重点关注呼吸质量与专注力的提升。'
            ]
          },
          {
            title: '5.2 麦克风与设备使用说明',
            items: [
              '练习全程保持麦克风静音以避免环境杂音。',
              '请开启扩音器，若担心影响家人可佩戴一只耳机。',
              '如有需要向老师示意或提问，请靠近镜头或开启麦克风做简短说明。',
              '请避免在练习中长时间交谈。'
            ]
          },
          {
            title: '5.3 长期中断后回归练习',
            items: [
              '请假规则：请提前简单告知老师即可，无需重复解释原因。',
              '回归策略：长时间中断（如1个月以上）后回归，建议：',
              '1. 降低强度（如只练习至坐立体式为止）',
              '2. 延长休息体式停留时间',
              '3. 降低对自己体式"回到原来水平"的预期',
              '回归的首周以重新建立身体节奏与呼吸连接为主要目标。'
            ]
          }
        ]
      },
      {
        title: '结语',
        content: '在线阿斯汤加练习的深意，在于在独处中建立自律，在熟悉中创造神圣，在距离中建立连接。每一次踏上垫子的决定，每一次稳定而深长的呼吸，每一次将意识收回当下的努力，都是八支瑜伽的鲜活实践。愿您的每一次练习，都是一次与内在自我的深刻对话。'
      }
    ],
    
    teacherInfo: {
      name: '希波 Eric',
      note: '（本指南基于阿斯汤加瑜伽传统教学原则编写，具体练习细节请遵循授课老师的即时指导。）'
    },
    
    contactTitle: '联系方式',
    contactInfo: [
      'hi@xbyoga.com',
      '+86 131 2121 2007',
      '微信：xbyogi'
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
        content: 'This guide aims to help you understand the traditional essence of Ashtanga yoga, master safe and effective online practice methods, and prepare physically and mentally for Mysore practice. Whether you are a beginner or an experienced practitioner, this guide provides clear instructions and practical advice to help you establish focused, disciplined practice habits. Please read carefully.'
      },
      {
        title: 'Chapter 1: Ashtanga System & Online Mysore Teaching',
        subtitle: 'Understanding Tradition, Progressing in Practice',
        sections: [
          {
            title: '1.1 Traditional Essence',
            items: [
              'Ashtanga yoga is a system that achieves purification of body and mind through the coordinated trinity (Tristhāna) of fixed postures, breath, and gaze points.',
              'Online courses adhere to its core teaching method—Mysore, where practitioners practice memorized sequences at their own pace in a collective environment, while the teacher provides one-on-one guidance through observation. This method ensures personalized and progressive teaching.',
              'The deeper meaning of online Mysore lies in: building discipline in solitude, creating sacredness in familiarity, and establishing connection across distance.'
            ]
          },
          {
            title: '1.2 Philosophical Foundation',
            items: [
              'Ashtanga (Aṣṭāṅga) means "eight limbs", derived from the complete cultivation path of Patañjali\'s Yoga Sūtras.',
              'Each Ashtanga posture practice session is a complete microcosm of Patañjali\'s eight-limbed yoga—a full journey from external ethics to inner liberation:',
              '1. Restraints (Yama)',
              '• Maintaining one\'s focus boundary in a group setting is the primary practice of "non-violence" (Ahiṃsā).',
              '• Not practising ahead of sequence, not avoiding challenges, is respect for knowledge transmission—"non-stealing" (Asteya)—and also humility.',
              '2. Observances (Niyama)',
              '• Cleaning the practice space is physical "purity"; maintaining the purity of morning practice is mental "purity" (Śauca).',
              '• Beginning practice regardless of one\'s state is the fiery "discipline" (Tapas)—burning impurities, tempering will.',
              '• Accepting current limitations is "contentment" (Saṃtoṣa)—postures are not objects to conquer, but partners for dialogue.',
              '3. Posture (Āsana)',
              '• The body becomes the altar, breath the offering, consciousness the priest. Postures are not the goal, but the site for purification and preparation.',
              '4. Breath Control (Prāṇāyāma)',
              '• The sound of breath like ocean waves, washing the shores of awareness. Breath is the bridge connecting the gross and subtle bodies.',
              '5. Sense Withdrawal (Pratyāhāra)',
              '• The gaze point (Dṛṣṭi) is the "hook" for sense withdrawal. When the eyes cease wandering, the heart begins its homecoming.',
              '6. Concentration (Dhāraṇā)',
              '• In the repetition of sequences, memory is tamed, consciousness liberated from ruminations, abiding in the present breath.',
              '7. Meditation (Dhyāna)',
              '• When postures, breath, and gaze points lose their boundaries, action is no longer "I do", but "through me it happens". This is silence in movement, meditation in action.',
              '8. Samādhi (Absorption)',
              '• Though indescribable, in deep practice one may occasionally glimpse a non-dual stillness—practitioner, practice, and that which is practised become one. This is the ultimate direction of yoga.'
            ]
          },
          {
            title: '1.3 Important Sanskrit Terms',
            items: [
              'Aṣṭāṅga: Eight-limbed yoga system',
              'Vinyāsa: Precise synchronisation of breath and movement',
              'Tristhāna: "Trinity" of posture, breath, and gaze point',
              'Samasthitiḥ: Steady standing (beginning and end of sequence)',
              'Sūrya Namaskāra: Sun Salutation',
              'Bandha: Energy lock (contraction)',
              'Dṛṣṭi: Gaze point',
              'Citta Vṛtti Nirodhaḥ: Cessation of mind fluctuations',
              'Prāṇa: Life force energy',
              'Avidyā: Ignorance/nescience',
              'Śarīra: Body (three layers: gross, subtle, causal)',
              'Manas: Mind/mentality',
              'Buddhi: Intellect/discernment',
              'Ahaṃkāra: Ego/self-identity',
              'Tapas: Discipline and effort',
              'Ahiṃsā: Non-violence (primary restraint)'
            ]
          },
          {
            title: '1.4 Special Advice for Beginners',
            items: [
              'Adaptation period: Online Mysore can be more challenging for beginners. Focus during the first 1-3 months is on building familiarity with Sun Salutations, breathing rhythm, and basic gaze point awareness. Give yourself sufficient patience.',
              'Sequence memory: Do not rely on on-screen prompts or notes. Memorizing sequences is part of the practice; you only need to remember one posture at a time.',
              'Simplify expectations: Feeling confused or frustrated during early practice is normal. Prioritize stable breathing over perfect posture form.',
              'Specifics of online adjustments: Online teaching provides "guidance" or "fine-tuning" through clear verbal instructions, without physical assistance. You need to listen to bodily signals more acutely than in in-person classes.'
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
              'Space preparation: Prepare a safe, tidy, non-slip area free of obstacles. Ensure sufficient lighting for full-body camera visibility.',
              'Equipment requirements: Position the camera to the side; keep microphone muted during practice. Speakers or headphones are recommended for clear audio.',
              'Personal preparation: Wear fitted practice attire for clear observation of body alignment. Maintain 3-4 hours of fasting before practice.',
              'Time arrangement: Enter the online classroom 5 minutes before the scheduled time, unroll your mat, and begin Sun Salutations without waiting. For Led classes, log in at least 10 minutes early to prepare, avoiding rushed starts.'
            ]
          },
          {
            title: '2.2 Class Etiquette & Safety Responsibility',
            items: [
              'Focus as respect: Maintain full focus on your own breathing and practice. Unless permitted by the teacher in specific sessions like Led class, avoid observing or commenting on others\' practice on screen.',
              'Safety first: You are the primary person responsible for your own safety. If discomfort such as sharp pain, dizziness, or joint instability occurs during practice, immediately:',
              '1. Slowly exit the current posture',
              '2. Rest in Child\'s Pose',
              '3. Calmly look at the camera (this is the safety signal; the teacher will provide attention upon noticing)',
              'Safety signal: If you need urgent teacher attention during practice (e.g., discomfort, breathing difficulty), look directly at the camera and raise one hand (if safely possible).',
              'Communication method: For temporary injuries or illnesses, briefly inform via chat. Complex issues should be discussed separately after class.'
            ]
          },
          {
            title: '2.3 Rest Arrangements',
            items: [
              'Fixed rest days: Every Saturday, plus new moon and full moon days are traditional rest days, allowing body and mind to synchronize with natural rhythms.',
              'Personal rest: For menstrual periods (complete rest recommended for first three days), colds, or personal matters requiring rest, simply inform in advance.',
              'Teacher\'s commitment: If the teacher cancels a class, missed sessions will definitely be compensated.'
            ]
          }
        ]
      },
      {
        title: 'Chapter 3: Practice Core: Trinity (Tristhāna)',
        subtitle: 'Precise Coordination of Posture • Breath • Gaze Point',
        sections: [
          {
            title: '3.1 Posture (Āsana) & Flow (Vinyāsa)',
            items: [
              'Postures are connected through Vinyāsa into fixed sequences with therapeutic logic.',
              'Primary Series (Yoga Chikitsa) focuses on body detoxification and alignment; Intermediate Series (Nadi Shodhana) focuses on nervous system purification.',
              'Practicing in order allows consciousness to be liberated from memorizing movements, immersing deeper into the present moment.'
            ]
          },
          {
            title: '3.2 Breath Control (Prāṇāyāma) & Locks (Bandha)',
            items: [
              'Breath leads and determines the speed and amplitude of movements. Establish a soft sound in the breath to anchor awareness.',
              'Gentle throat lock (Jālandhara Bandha) coordinates with lifting the pelvic floor (root lock Mūla Bandha) and drawing in the lower abdomen (abdominal lock Uḍḍīyāna Bandha) to guide energy, stabilize the core, and protect joints.',
              'Bandhas should be gradually established under teacher guidance, avoiding excessive force.'
            ]
          },
          {
            title: '3.3 Gaze Point (Dṛṣṭi)',
            items: [
              'Each posture or movement has a designated gaze point (e.g., tip of nose, between eyebrows, navel, etc.).',
              'Gaze points are used to withdraw visual senses, prevent mind distraction, and are key tools for practicing "sense withdrawal (Pratyāhāra)".',
              'Even in closed-eye postures, maintain inner awareness of gaze points.'
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
              'Opening chant: Honors the lineage of teachers and sage Patañjali, sets practice intention, helps transition body and mind from daily state to practice state.',
              'Closing chant: Dedicates merit of personal practice to all beings, embodying yoga\'s connection and devotion spirit.',
              'Even if unfamiliar with Sanskrit, you can listen and feel the calm and focus brought by chanting vibrations.'
            ]
          },
          {
            title: '4.2 Community Agreements',
            items: [
              'Mutual respect: Express greatest respect for teacher and fellow practitioners by focusing on your own practice.',
              'Trust and commitment: Teacher commits to providing safe, professional guidance; practitioners commit to maintaining regular, sincere practice attitude.',
              'Privacy protection: Without permission, recording, videoing, screenshotting, or disseminating class content is prohibited.',
              'Professional communication: Course questions should be communicated with teacher through designated methods after class.'
            ]
          }
        ]
      },
      {
        title: 'Chapter 5: Common Questions & Practice Suggestions',
        subtitle: 'Wisdom & Answers in Practice',
        sections: [
          {
            title: '5.1 Common Questions Answered',
            items: [
              'Q: What if internet connection is interrupted?',
              'A: Please continue your practice; teacher will attempt to reconnect. If unable to restore, complete the sequence and rest fully, inform teacher after class.',
              'Q: What if I cannot hear instructions clearly?',
              'A: Slightly turn head to look at camera to signal, or gesture when safe. Avoid speaking or typing during practice.',
              'Q: How to maintain motivation and track progress?',
              'A: Establish practice ritual awareness; prepare a "practice journal" recording practice dates, bodily sensations, new postures or adjustments given by teacher, and emerging questions. Progress should be measured in years, focusing on improvement in breath quality and concentration.'
            ]
          },
          {
            title: '5.2 Microphone & Equipment Usage Instructions',
            items: [
              'Keep microphone muted throughout practice to avoid ambient noise.',
              'Please use speakers; if concerned about affecting family members, wear only one earphone',
              'Should you need to signal the teacher or ask a question, approach the camera or activate the microphone for a brief explanation.',
              'Please avoid prolonged conversation during practice.'
            ]
          },
          {
            title: '5.3 Returning to Practice After Long Interruption',
            items: [
              'Leave rules: Simply inform teacher in advance; no need to repeatedly explain reasons.',
              'Return strategy: After long interruption (e.g., one month or more), suggest:',
              '1. Reduce intensity (e.g., practice only up to seated postures)',
              '2. Extend resting posture duration',
              '3. Lower expectations of postures "returning to previous level"',
              'First week after return should focus primarily on re-establishing body rhythm and breath connection.'
            ]
          }
        ]
      },
      {
        title: 'Conclusion',
        content: 'The deeper meaning of online Ashtanga practice lies in building discipline in solitude, creating sacredness in familiarity, and establishing connection across distance. Every decision to step onto the mat, every stable deep breath, every effort to bring awareness back to the present moment is a living practice of the eight-limbed yoga. May each of your practice sessions be a profound dialogue with your inner self.'
      }
    ],
    
    teacherInfo: {
      name: 'Eric Xibo',
      note: '(This guide is based on traditional Ashtanga yoga teaching principles. Specific practice details should follow the real-time guidance of the teaching teacher.)'
    },
    
    contactTitle: 'Contact Information',
    contactInfo: [
      'hi@xbyoga.com',
      '+86 131 2121 2007',
      'WeChat: xbyogi'
    ]
  }
};


export default function PracticeGuidePage() {
  const { language } = useLanguage();
  const content = guideContent[language as keyof typeof guideContent];
  
  return (
    <div className="min-h-screen safe-top safe-bottom pt-12">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-6"> {/* 修改1: py-8 → py-6 */}
        
        {/* 返回链接 */}
        <div className="mb-4"> {/* mb-6 → mb-4 */}
          <a
            href="/courses/ashtanga"
            className="text-xs text-gray-600 hover:text-gray-900 inline-flex items-center transition-colors">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* w-4 → w-3 */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {content.backButton}
          </a>
        </div>
        
        {/* 标题区域 */}
        <div className="mb-6"> {/* mb-8 → mb-6 */}
          <h1 className="text-xl font-light text-gray-900 mb-1"> {/* text-2xl → text-xl */}
            {content.title}
          </h1>
          <p className="text-xs text-gray-500 mb-1"> {/* text-sm → text-xs */}
            {content.subtitle}
          </p>
          <p className="text-xs text-gray-400"> {/* 保持xs */}
            {content.lastUpdated}
          </p>
        </div>
        
        {/* 指南内容 - 核心修改 */}
        <div className="prose prose-xs md:prose-sm max-w-none"> {/* prose-sm → prose-xs */}
          {content.parts.map((part: any, index: number) => (
            <section key={index} className="mb-8 last:mb-4"> {/* mb-10 → mb-8 */}
              <h2 className="text-lg font-medium text-gray-900 mb-3 border-b border-gray-200 pb-2"> {/* text-xl → text-lg */}
                {part.title}
              </h2>
              
              {part.content && (
                <div className={`
                  ${part.title === '序言' || part.title === 'Preamble' || 
                    part.title === '结语' || part.title === 'Conclusion'
                    ? 'text-gray-700 leading-relaxed mb-4 text-sm' /* mb-6 → mb-4, 加text-sm */
                    : 'text-gray-600 italic mb-4 text-xs' /* mb-6 → mb-4, text-sm → text-xs */
                  }
                `}>
                  {part.content}
                </div>
              )}
              
              {part.subtitle && (
                <p className="text-gray-600 italic mb-4 text-xs"> {/* mb-6 → mb-4, text-sm → text-xs */}
                  {part.subtitle}
                </p>
              )}
              
              {part.sections && part.sections.map((section: any, sectionIndex: number) => (
                <div key={sectionIndex} className="mb-6"> {/* mb-8 → mb-6 */}
                  <h3 className="text-base font-medium text-gray-800 mb-2"> {/* text-lg → text-base */}
                    {section.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700"> {/* space-y-3 → space-y-2 */}
                    {section.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start">
                        {item.match(/^Q：/) || item.match(/^Q:/) ||
                         item.match(/^A：/) || item.match(/^A:/) ? (
                          <span className="text-red-800 mr-2 mt-0.5 flex-shrink-0 text-xs">
                            {item.match(/^Q/) ? 'Q' : 'A'}
                          </span>
                        ) : item.match(/^\d+\./) ? (
                          <span className="text-red-800 mr-2 mt-0.5 flex-shrink-0 text-xs">
                            {item.split('.')[0]}.
                          </span>
                        ) : item.match(/^•/) ? (
                          <span className="text-red-800 mr-2 mt-0.5 flex-shrink-0 text-xs">•</span>
                        ) : (
                          <span className="text-red-800 mr-2 mt-0.5 flex-shrink-0 text-xs">—</span>
                        )}
                        <span className="leading-relaxed text-sm"> {/* 加text-sm */}
                          {item.replace(/^(Q：|Q:|A：|A:|\d+\. |• )/, '')}
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
        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-5"> {/* mt-12 → mt-10, p-6 → p-5 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* w-5 → w-4 */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-900 mb-1"> {/* text-sm → text-xs */}
                {language === 'zh' ? '教学者：' : 'Teacher: '}
                <span className="text-red-800">{content.teacherInfo.name}</span>
              </p>
              <p className="text-xs text-gray-600 leading-relaxed"> {/* text-xs保持不变 */}
                {content.teacherInfo.note}
              </p>
            </div>
          </div>
        </div>
        
        {/* 联系信息 */}
        <div className="mt-6 pt-6 border-t border-gray-200"> {/* mt-8 → mt-6, pt-8 → pt-6 */}
          <h3 className="text-base font-medium text-gray-900 mb-3"> {/* text-lg → text-base */}
            {content.contactTitle}
          </h3>
          <div className="space-y-1 text-gray-700 text-sm"> {/* space-y-2 → space-y-1, 加text-sm */}
            {content.contactInfo.map((info: string, index: number) => (
              <div key={index} className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* w-4 → w-3 */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{info}</span>
              </div>
            ))}
          </div>
          
          {/* 说明信息 */}
          <div className="mt-4 pt-4 border-t border-gray-100"> {/* mt-6 → mt-4, pt-6 → pt-4 */}
            <p className="text-gray-600 text-xs leading-relaxed"> {/* text-sm → text-xs */}
              {language === 'zh'
                ? '本指南为阿斯汤加瑜伽在线练习的指导手册。关于课程费用、支付方式、取消退款等具体条款，请参阅《费用与服务协议》。'
                : 'This guide is an instruction manual for Ashtanga yoga online practice. For specific terms regarding course fees, payment methods, cancellations, refunds, etc., please refer to the "Fee & Service Agreement".'}
            </p>
          </div>
        </div>
        
        {/* 底部签名 */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center"> {/* mt-12 → mt-10, pt-8 → pt-6 */}
          <p className="text-gray-500 text-xs"> {/* text-sm → text-xs */}
            {language === 'zh' ? '持守传统，精进不懈。' : 'Hold fast to tradition, progress diligently.'}
          </p>
          <p className="text-gray-400 text-xs mt-1"> {/* text-sm → text-xs, mt-2 → mt-1 */}
            Namaste
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
