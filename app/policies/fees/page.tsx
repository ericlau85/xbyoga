// /app/policies/fees/page.tsx
'use client';

import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const feesContent = {
  zh: {
    title: '费用与服务协议',
    lastUpdated: '最后更新：2025年12月',
    backButton: '返回课程',
    
    parts: [
      {
        title: '序言',
        content: '本协议规定了阿斯汤加瑜伽在线课程的购买、使用及相关的服务条款，是教学服务的基础协议。请仔细阅读本协议的全部条款。报名参加课程即表示您已阅读、理解、接受并同意遵守本协议的所有内容。'
      },
      {
        title: '第一部分：课程费用与有效期',
        items: [
          '课程费用需按所选周期预先支付。支付可通过双方约定的方式进行（如微信、支付宝、PayPal等）。',
          '您购买的是固定周期内的练习资格，而非具体课时数。费用基于教学者为维持固定教学时段、提供个性化指导所投入的排他性时间与精力。',
          '所有卡券自首次练习日（或与老师约定的起始日）起计算：',
          '周卡：覆盖随后连续的7个自然日',
          '月卡：覆盖随后完整的1个自然月周期（例如：3月15日至4月14日）',
          '季卡：覆盖随后完整的3个自然月周期',
          '周期结束后，卡券资格将自动失效，未使用的练习资格不予顺延或保留。'
        ]
      },
      {
        title: '第二部分：取消、改期与缺席',
        items: [
          '如需取消或改期已预约的课程，须至少于课程开始前12小时通知老师。',
          '因学员个人原因（包括未提前12小时通知的临时取消）导致的缺课，该次课时将正常扣除。',
          '如因老师原因取消课程，教学方承诺为受影响学员补足相应课时。'
        ]
      },
      {
        title: '第三部分：退款政策',
        items: [
          '基于线上个性化指导的排他性投入，课程费用支付后原则上不予退款。',
          '如遇严重疾病、意外等不可抗力情况需长期中断练习（通常指一个月以上），可凭有效证明与教学方启动个案协商。'
        ]
      },
      {
        title: '第四部分："练习回馈"计划',
        items: [
          '为鼓励持续、规律的练习，特设回馈计划：',
          '在主要的Mysore自我练习时段每次出勤可获得5元回馈额度',
          '参加分享会或唱诵活动可获得2元回馈额度',
          '此额度可用于下一周期续费时直接抵扣现金。此为本教学方设计的鼓励机制，具体细则以当期通知为准。'
        ]
      },
      {
        title: '第五部分：其他条款',
        items: [
          '教学方承诺按时开课。如遇特殊情况需要调整时间，将提前通知学员。',
          '学员应按时参加课程。迟到超过15分钟，老师可能无法为该次课程提供完整指导。',
          '双方如有争议，应首先友好协商解决。'
        ]
      }
    ],
    
    noticeTitle: '重要声明',
    contactTitle: '联系方式',
    contactInfo: [
      'hi@xbyoga.com',
      '+86 131 2121 2007',
      '微信：xbyogi'
    ]
  },
  
  en: {
    title: 'Fee & Service Agreement',
    lastUpdated: 'Last Updated: December 2025',
    backButton: 'Back to Course',
    
    parts: [
      {
        title: 'Preamble',
        content: 'This agreement regulates the purchase, usage, and related service terms for Ashtanga yoga online courses, forming the foundational agreement for teaching services. Please read all terms of this agreement carefully. By enrolling in courses, you acknowledge that you have read, understood, accepted, and agree to abide by all contents of this agreement.'
      },
      {
        title: 'Part 1: Course Fees & Validity',
        items: [
          'Course fees must be prepaid per selected period. Payments can be made through mutually agreed-upon methods (e.g., WeChat Pay, Alipay, PayPal, etc.).',
          'You are purchasing practice eligibility within a fixed period, not specific class hours. Fees are based on the teacher\'s exclusive time and effort invested in maintaining fixed teaching slots and providing personalized guidance.',
          'All passes are valid from the first practice day (or the start date agreed with the teacher):',
          'Weekly Pass: Covers the subsequent 7 consecutive calendar days',
          'Monthly Pass: Covers the subsequent one full calendar month cycle (e.g., March 15 to April 14)',
          'Quarterly Pass: Covers the subsequent three full calendar month cycles',
          'Upon cycle completion, pass eligibility expires automatically; unused practice eligibility will not be extended or retained.'
        ]
      },
      {
        title: 'Part 2: Cancellation, Rescheduling & Absence',
        items: [
          'To cancel or reschedule a booked session, notification must be given to the teacher at least 12 hours before the session starts.',
          'Absences due to personal reasons (including last-minute cancellations without 12-hour notice) will be deducted as usual.',
          'If the teacher cancels a class, the teaching party commits to fully compensating affected students for missed sessions.'
        ]
      },
      {
        title: 'Part 3: Refund Policy',
        items: [
          'Due to the exclusive commitment of personalized online guidance, course fees are non-refundable after payment.',
          'In cases of serious illness, accident, or force majeure requiring long-term practice interruption (typically one month or more), case-by-case negotiation may be initiated with valid documentation.'
        ]
      },
      {
        title: 'Part 4: "Practice Reward" Program',
        items: [
          'To encourage consistent, regular practice, a reward program is established:',
          'Each attendance during main Mysore self-practice sessions earns 5 yuan reward credit',
          'Participation in sharing sessions or chanting activities earns 2 yuan reward credit',
          'This credit can be directly deducted from next period\'s renewal fees. This is an encouragement mechanism designed by the teaching party; specific details are subject to current notifications.'
        ]
      },
      {
        title: 'Part 5: Additional Terms',
        items: [
          'The teaching party commits to starting classes on time. If schedule adjustments are needed due to special circumstances, advance notice will be given.',
          'Students should attend classes punctually. Being late for more than 15 minutes may affect the teacher\'s ability to provide complete guidance for that session.',
          'Any disputes between parties should first be resolved through friendly negotiation.'
        ]
      }
    ],
    
    noticeTitle: 'Important Notice',
    contactTitle: 'Contact Information',
    contactInfo: [
      'hi@xbyoga.com',
      '+86 131 2121 2007',
      'WeChat: xbyogi'
    ]
  }
};

export default function FeesPage() {
  const { language } = useLanguage();
  const content = feesContent[language as keyof typeof feesContent];
  
  return (
    <div className="min-h-screen safe-top safe-bottom pt-12">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-6"> {/* 减少py-8→py-6 */}
        {/* 返回链接 */}
        <div className="mb-4"> {/* 减少mb-6→mb-4 */}
          <a
            href="/courses/ashtanga"
            className="text-xs text-gray-600 hover:text-gray-900 inline-flex items-center transition-colors">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* w-4→w-3 */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {content.backButton}
          </a>
        </div>
        
        {/* 标题区域 */}
        <div className="mb-6"> {/* 减少mb-8→mb-6 */}
          <h1 className="text-xl font-light text-gray-900 mb-1"> {/* text-2xl→text-xl, mb-2→mb-1 */}
            {content.title}
          </h1>
          <p className="text-xs text-gray-500"> {/* text-sm→text-xs */}
            {content.lastUpdated}
          </p>
        </div>
        
        {/* 协议内容 */}
        <div className="prose prose-xs md:prose-sm max-w-none"> {/* prose-sm→prose-xs */}
          {content.parts.map((part: any, index: number) => (
            <section key={index} className="mb-8 last:mb-4"> {/* mb-10→mb-8 */}
              {index === 0 ? (
                // 序言部分
                <>
                  <h2 className="text-lg font-medium text-gray-900 mb-3 border-b border-gray-200 pb-2"> {/* text-xl→text-lg */}
                    {part.title}
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm"> {/* mb-6→mb-4, 加text-sm */}
                    {part.content}
                  </p>
                </>
              ) : (
                // 条款部分
                <>
                  <h3 className="text-base font-medium text-gray-800 mb-2"> {/* text-lg→text-base */}
                    {part.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700"> {/* space-y-3→space-y-2 */}
                    {part.items.map((item: string, itemIndex: number) => {
                      const isCardItem = (item.includes('卡：') || item.includes('Pass:')) &&
                                        !item.includes('所有卡券') && !item.includes('All passes');
                      const isRewardSubItem = part.title.includes('练习回馈') || part.title.includes('Practice Reward');
                      const showBullet = isCardItem ||
                                        (isRewardSubItem && !item.includes('回馈计划') && !item.includes('reward program'));
                      
                      return (
                        <li
                          key={itemIndex}
                          className={`flex items-start ${showBullet ? 'ml-4' : ''}`}
                        >
                          {showBullet ? (
                            <span className="text-red-800 mr-2 mt-0.5 flex-shrink-0 text-xs">•</span>
                          ) : null}
                          <span className="leading-relaxed text-sm"> {/* 加text-sm */}
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </section>
          ))}
        </div>
        
        {/* 重要声明卡片 */}
        <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-lg p-5"> {/* mt-12→mt-10, p-6→p-5 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"> {/* w-5→w-4 */}
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-xs font-medium text-yellow-800 mb-2"> {/* text-sm→text-xs */}
                {content.noticeTitle}
              </h4>
              <div className="text-xs text-yellow-700 leading-relaxed space-y-1"> {/* text-sm→text-xs, space-y-2→space-y-1 */}
                <p>
                  {language === 'zh'
                    ? '请确认您已完整阅读并理解本协议的全部条款。'
                    : 'Please confirm that you have fully read and understood all terms of this agreement.'}
                </p>
                <p className="font-medium">
                  {language === 'zh'
                    ? '报名参加课程即视为您接受并同意遵守本协议的所有内容。'
                    : 'Enrolling in courses indicates your acceptance of and agreement to abide by all contents of this agreement.'}
                </p>
                <p>
                  {language === 'zh'
                    ? '如有任何疑问，请在报名前联系我们进行澄清。'
                    : 'If you have any questions, please contact us for clarification before enrollment.'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 联系信息 */}
        <div className="mt-6 pt-6 border-t border-gray-200"> {/* mt-8→mt-6, pt-8→pt-6 */}
          <h3 className="text-base font-medium text-gray-900 mb-3"> {/* text-lg→text-base */}
            {content.contactTitle}
          </h3>
          <div className="space-y-1 text-gray-700 text-sm"> {/* space-y-2→space-y-1, 加text-sm */}
            {content.contactInfo.map((info: string, index: number) => (
              <div key={index} className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* w-4→w-3 */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{info}</span>
              </div>
            ))}
          </div>
          
          {/* 说明信息 */}
          <div className="mt-4 pt-4 border-t border-gray-100"> {/* mt-6→mt-4, pt-6→pt-4 */}
            <p className="text-gray-600 text-xs leading-relaxed"> {/* text-sm→text-xs */}
              {language === 'zh'
                ? '本协议为阿斯汤加瑜伽在线课程的费用与服务条款。如对课程内容、练习方法有疑问，请参阅《阿斯汤加瑜伽练习指南》。'
                : 'This agreement covers fee and service terms for Ashtanga yoga online courses. For questions about course content and practice methods, please refer to the "Ashtanga Yoga Practice Guide".'}
            </p>
          </div>
        </div>
        
        {/* 底部签名 */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center"> {/* mt-12→mt-10, pt-8→pt-6 */}
          <p className="text-gray-500 text-xs"> {/* text-sm→text-xs */}
            {language === 'zh' ? '持守传统，精进不懈。' : 'Hold fast to tradition, progress diligently.'}
          </p>
          <p className="text-gray-400 text-xs mt-1"> {/* text-sm→text-xs, mt-2→mt-1 */}
            Namaste
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
