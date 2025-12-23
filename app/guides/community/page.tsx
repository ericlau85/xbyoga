'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

const communityGuideData = {
  en: {
    title: "Online Practice Community Guide",
    subtitle: "Creating a focused, safe, and mutually supportive practice environment",
    lastUpdated: "Last Updated: March 2024",
    
    sections: [
      {
        title: "1. Our Shared Commitment",
        content: [
          "This guide aims to create a focused, safe, and mutually supportive practice environment for online Mysore.",
          "We commit to each other: mutual trust, focus on oneself, and respect for each other's time and investment."
        ]
      },
      {
        title: "2. Pre-class Preparation",
        content: [
          "Space: Prepare a safe, tidy, non-slip area where the camera can fully capture your body.",
          "Equipment: Position the camera to the side, and keep your microphone muted during practice.",
          "Personal: Wear fitted practice attire for clear alignment observation; try to maintain an empty stomach 3-4 hours before practice.",
          "Time: Enter the online classroom 5 minutes before the scheduled time, lay out your mat, and begin Sun Salutations on your own without waiting."
        ]
      },
      {
        title: "3. Classroom Etiquette & Safety (Your Responsibility)",
        content: [
          "Focus & Respect: Focusing fully on your own breath and practice is the greatest form of respect.",
          "During class, do not watch others' practice or disturb their concentration, except during Led classes or workshops where observation is permitted.",
          "Safety First — Remember this signal: You are the primary person responsible for your safety.",
          "If you experience sharp pain, dizziness, joint instability, or other discomfort, please immediately:",
          "- Slowly exit the current posture.",
          "- Rest in Child's Pose.",
          "- Calmly look at the camera (this is our safety signal; the teacher will provide guidance upon seeing it).",
          "Please listen to your body's wisdom. Safely withdrawing is more beneficial than forcing completion.",
          "Communication: If you have special physical conditions (such as injuries), you may briefly inform in the chat area. For in-depth questions, please communicate privately after class."
        ]
      },
      {
        title: "4. About Rest Days",
        content: [
          "Scheduled Rest: Every Saturday, as well as New Moon and Full Moon days, are traditional rest days.",
          "Personal Rest: If you need to rest due to illness, menstrual period, or personal matters, a simple notification is sufficient.",
          "Teacher's Commitment: If classes are cancelled due to the teacher's reasons, your sessions will definitely be made up."
        ]
      },
      {
        title: "5. 'Practice Incentive' Program",
        content: [
          "To encourage consistent commitment, we offer direct feedback:",
          "- Main Mysore practice: ¥5 credit per attendance",
          "- Workshops or chanting: ¥2 credit per participation",
          "This credit can be directly deducted from your next cycle's renewal.",
          "This is not a penalty mechanism, but a token of appreciation for your persistence."
        ]
      },
      {
        title: "6. Key Fee Consensus (Summary)",
        content: [
          "Fees are prepaid per selected cycle (weekly/monthly/quarterly).",
          "If you need to cancel or reschedule, please notify at least 12 hours in advance.",
          "Due to the investment in personalized online guidance, fees are non-refundable after payment.",
          "For the complete 'Fee Policy', please visit:"
        ],
        links: [
          {
            text: "View the complete 'Fee Policy'",
            href: "/policies/fees"
          }
        ]
      },
      {
        title: "7. Deeper Exploration",
        content: [
          "If you are interested in Ashtanga tradition, philosophy, practice methods, and a more comprehensive guide, you are welcome to read our detailed manual.",
          "For deeper exploration, please visit:"
        ],
        links: [
          {
            text: "Explore 'Complete Guide to Ashtanga Online Practice'",
            href: "/guides/ashtanga-complete"
          }
        ]
      }
    ]
  },
  zh: {
    title: "线上练习社区指南",
    subtitle: "创建一个专注、安全、相互支持的练习环境",
    lastUpdated: "最后更新：2024年3月",
    
    sections: [
      {
        title: "一、我们的共同约定",
        content: [
          "本指南旨在为线上迈场（Mysore）创建一个专注、安全、相互支持的练习环境。",
          "我们共同约定：相互信任，专注自身，尊重彼此的时间与投入。"
        ]
      },
      {
        title: "二、课前准备",
        content: [
          "空间：准备一个安全、整洁、防滑的区域，摄像头能完整拍摄全身。",
          "设备：将摄像头置于侧面，练习时请保持麦克风静音。",
          "个人：请穿着贴身练习服，便于观察顺位；尽量保持练习前3-4小时空腹。",
          "时间：请于约定时间前5分钟进入线上教室，铺好垫子，自行开始拜日，无需等待。"
        ]
      },
      {
        title: "三、课堂礼仪与安全（您的责任）",
        content: [
          "专注与尊重：全程专注于自身的呼吸与练习，即是最大的尊重。",
          "课堂中请勿窥看别人练习或打扰他人专注。在领课或研习课堂需要观察学习时，在允许的情况下除外。",
          "安全第一 — 请记住这个信号：您是自身安全的第一责任人。",
          "如出现剧痛、头晕、关节失控等不适，请立即：",
          "- 缓慢退出当前体式。",
          "- 进入婴儿式休息。",
          "- 平静注视摄像头（这是我们的安全信号，老师看到后会给予指导）。",
          "请倾听身体的智慧，安全地退出比勉强完成更有益。",
          "沟通：如有特殊身体状况（如受伤），可在聊天区简短告知。深入问题请课后单独沟通。"
        ]
      },
      {
        title: "四、关于休息",
        content: [
          "固定休息：每周六，以及新月、满月日为传统休息日。",
          "自主休息：若因感冒、生理期或个人事务需要休息，简单告知即可。",
          "老师承诺：如因老师原因取消课程，定会为您补足课时。"
        ]
      },
      {
        title: "五、'练习回馈'计划",
        content: [
          "为鼓励持续投入，我们设有直接回馈：",
          "- 主要的迈场Mysore练习：每次出勤可获得5元回馈额度",
          "- 参加分享会或唱诵：可获得2元回馈额度",
          "此回馈额度用于您下一周期续费时直接抵扣现金。",
          "此非惩罚机制，而是对您坚持的一份感谢。"
        ]
      },
      {
        title: "六、重要费用共识（摘要）",
        content: [
          "费用按所选周期（周/月/季）预先支付。",
          "如需取消或改期，请至少提前 12小时 通知。",
          "基于线上个性化指导的投入，费用支付后原则上不予退款。",
          "查看完整的《费用政策》，请访问："
        ],
        links: [
          {
            text: "查看完整的《费用政策》",
            href: "/policies/fees"
          }
        ]
      },
      {
        title: "七、深入探索",
        content: [
          "如果您对阿斯汤加的传统、哲学、练习方法以及更完整的指南感兴趣，欢迎阅读我们的详细手册。",
          "深入探索，请访问："
        ],
        links: [
          {
            text: "探索《阿斯汤加在线练习完整指南》",
            href: "/guides/ashtanga-complete"
          }
        ]
      }
    ]
  }
};

export default function CommunityGuidePage() {
  const { language } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<{[key: number]: boolean}>({});
  const content = communityGuideData[language as keyof typeof communityGuideData];

  // 默认展开所有章节
  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-12 pb-16">
        {/* 页面标题 - 简洁设计 */}
        <div className="w-full px-4 py-6 border-b border-gray-100 bg-white sticky top-16 z-10 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl md:text-2xl font-light text-gray-900 text-center tracking-tight">
              {content.title}
            </h1>
            <p className="text-gray-500 text-xs text-center mt-1 font-medium">
              {content.lastUpdated}
            </p>
            <p className="text-gray-600 text-sm text-center mt-2">
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="w-full px-4 py-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3"> {/* 减少间距，使整体更紧凑 */}
              {content.sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="text-gray-900 font-medium text-sm md:text-base pr-3">
                        {section.title}
                      </div>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-500 transform transition-transform ${expandedSections[index] ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {(expandedSections[index] || Object.keys(expandedSections).length === 0) && (
                    <div className="px-4 pb-4">
                      <div className="space-y-1.5 text-gray-700 text-xs md:text-sm leading-relaxed">
                        {section.content.map((paragraph, pIndex) => (
                          paragraph.startsWith("- ") ? (
                            <div key={pIndex} className="flex items-start">
                              <span className="text-gray-400 mr-2 mt-1">•</span>
                              <span>{paragraph.substring(2)}</span>
                            </div>
                          ) : (
                            <p key={pIndex}>{paragraph}</p>
                          )
                        ))}
                      </div>
                      
                      {/* 链接部分 */}
                      {section.links && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.href}
                                className="inline-flex items-center text-red-600 hover:text-red-800 text-xs md:text-sm group"
                              >
                                <span>{link.text}</span>
                                <svg
                                  className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 底部提示卡片 */}
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-4 h-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-gray-700 text-xs mb-2">
                    {language === 'zh'
                      ? '本指南与《费用政策》及《阿斯汤加完整指南》共同构成了我们的教学框架。报名前请确保已阅读并理解相关内容。'
                      : 'This guide, together with the "Fee Policy" and "Complete Ashtanga Guide", constitutes our teaching framework. Please ensure you have read and understood relevant content before enrollment.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="/policies/fees"
                      className="bg-red-50 text-red-700 hover:bg-red-100 text-xs px-3 py-1 rounded-full transition-colors"
                    >
                      {language === 'zh' ? '费用政策' : 'Fee Policy'}
                    </a>
                    <a
                      href="/guides/ashtanga-complete"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs px-3 py-1 rounded-full transition-colors"
                    >
                      {language === 'zh' ? '完整指南' : 'Complete Guide'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
