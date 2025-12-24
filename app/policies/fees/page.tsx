// /app/policies/fees/page.tsx
'use client';

import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const feesContent = {
  zh: {
    title: '在线教学服务协议',
    lastUpdated: '最后更新：2025年12月',
    backButton: '返回课程',
    
    parts: [
      {
        title: '序言',
        content: '本协议规定了由 XBYOGA（以下简称"教学方"，当前教学服务由希波（Eric）提供）提供的在线教学服务（包括但不限于阿斯汤加瑜伽、梵语课、私教课程等，以下简称"课程"或"服务"）的购买、使用及相关条款，是教学服务的基础协议。学员（即购买并参加课程的个人）报名参加课程即表示已阅读、理解、接受并同意遵守本协议的所有内容。请仔细阅读。'
      },
      {
        title: '第一部分：课程类型、费用与有效期',
        items: [
          '课程类型：教学方提供多种形式的课程，包括周期性的团体课（如阿斯汤加Mysore）、单次或系列的私教课、主题工作坊（如梵语课）等。具体课程内容、形式与时间以当期招生通知为准。',
          '费用与支付：课程费用需按所选课程或周期预先支付。支付可通过双方约定的方式进行（如微信、支付宝、PayPal等）。',
          '有效期（以常见课程包为例）：',
          '- 周卡/月卡/季卡：适用于周期性团体课。自首次练习日（或约定起始日）起，覆盖相应连续的自然日周期（如7日、1个自然月、3个自然月）。',
          '- 私教课套餐：自首次练习日（或约定起始日）起，具体有效期根据所选套餐而定。请在购买时确认。',
          '- 单次工作坊：费用对应单次活动的参与资格。',
          '（注：周期结束后，资格自动失效，未使用的课时不予顺延或保留。）'
        ]
      },
      {
        title: '第二部分：取消、改期与缺席',
        items: [
          '如需取消或改期已预约的课程，须至少于课程开始前12小时通知教学方。',
          '因学员个人原因（包括未提前12小时通知的临时取消）导致的缺课，该次课时将正常扣除。',
          '如因教学方原因取消课程，教学方承诺为受影响学员补足相应课时或协商其他补偿方案。'
        ]
      },
      {
        title: '第三部分：退款政策',
        items: [
          '基于个性化教学服务的排他性投入，课程费用支付后原则上不予退款。',
          '如遇严重疾病、意外等不可抗力情况需长期中断练习，可凭有效证明与教学方启动个案协商。'
        ]
      },
      {
        title: '第四部分："练习回馈"计划（如适用）',
        items: [
          '为鼓励持续、规律的练习，教学方可能对特定课程（如阿斯汤加Mysore）设立回馈计划。例如：',
          '- 在Mysore时段每次出勤可获得5元回馈额度。',
          '- 参加特定活动可获得2元回馈额度。',
          '此额度可用于下一周期续费时直接抵扣。此为鼓励机制，具体细则以当期课程通知为准。'
        ]
      },
      {
        title: '第五部分：课堂与设备',
        items: [
          '教学方承诺按时开课。如遇特殊情况需要调整，将提前通知学员。',
          '学员应按时参加在线课程，并确保网络与设备通畅。迟到超过15分钟，教学方可能无法为该次课程提供完整指导。',
          '为保障教学效果与课堂秩序，学员应遵守具体课程的课堂规范（详见各课程《练习指南》）。'
        ]
      },
      {
        title: '第六部分：隐私与数据保护',
        items: [
          '信息收集：为提供教学服务、记录进展及执行相关计划，教学方将收集学员的姓名、联系方式等为实现本协议目的所必需的个人信息。',
          '信息使用：上述信息仅用于课程管理、沟通及相关服务，不会用于其他商业用途或向无关第三方泄露。',
          '课堂内容：未经教学方及所有出镜同修的事先书面许可，严禁对在线课堂进行任何形式的录音、录像、截图及内容传播。',
          '您的权利：您有权查询或更正您的个人信息。如终止学习，可要求教学方删除您的个人练习记录。'
        ]
      },
      {
        title: '第七部分：其他条款',
        items: [
          '双方如有争议，应首先友好协商解决。'
        ]
      }
    ],
    
    noticeTitle: '重要声明',
    contactTitle: '联系方式',
    contactInfo: [
      'hi@xbyoga.com',
      '+86 131 2121 2007',
    ]
  },
  
  en: {
    title: 'Online Teaching Service Agreement',
    lastUpdated: 'Last Updated: December 2025',
    backButton: 'Back to Course',
    
    parts: [
      {
        title: 'Preamble',
        content: 'This agreement regulates the purchase, usage, and related terms of online teaching services (including but not limited to Ashtanga yoga, Sanskrit classes, private lessons, etc., hereinafter referred to as "courses" or "services") provided by XBYOGA (hereinafter referred to as "teaching party", with current teaching services provided by Xibo (Eric)). It forms the foundational agreement for teaching services. By enrolling in courses, students (individuals purchasing and participating) acknowledge that they have read, understood, accepted, and agree to abide by all contents of this agreement. Please read carefully.'
      },
      {
        title: 'Part 1: Course Types, Fees & Validity',
        items: [
          'Course Types: The teaching party offers various course formats, including periodic group classes (e.g., Ashtanga Mysore), single or series private lessons, themed workshops (e.g., Sanskrit), etc. Specific course content, format, and schedule are subject to current enrollment notices.',
          'Fees & Payment: Course fees must be prepaid per selected course or period. Payments can be made through mutually agreed-upon methods (e.g., WeChat Pay, Alipay, PayPal, etc.).',
          'Validity (Examples of common course packages):',
          '- Weekly/Monthly/Quarterly Pass: Applicable to periodic group classes. Valid from the first practice day (or agreed start date), covering corresponding consecutive calendar periods (e.g., 7 days, 1 calendar month, 3 calendar months).',
          '- Private Lesson Packages: Valid from the first practice day (or agreed start date), with specific validity period determined by the selected package. Please confirm validity at time of purchase.',
          '- Single Workshop: Fee corresponds to participation eligibility for a single event.',
          '(Note: Upon period completion, eligibility expires automatically; unused sessions will not be extended or retained.)'
        ]
      },
      {
        title: 'Part 2: Cancellation, Rescheduling & Absence',
        items: [
          'To cancel or reschedule a booked session, notification must be given to the teaching party at least 12 hours before the session starts.',
          'Absences due to personal reasons (including last-minute cancellations without 12-hour notice) will be deducted as usual.',
          'If the teaching party cancels a class, compensation for missed sessions or alternative arrangements will be provided to affected students.'
        ]
      },
      {
        title: 'Part 3: Refund Policy',
        items: [
          'Due to the exclusive commitment of personalized teaching services, course fees are non-refundable after payment.',
          'In cases of serious illness, accident, or force majeure requiring long-term practice interruption, case-by-case negotiation may be initiated with valid documentation.'
        ]
      },
      {
        title: 'Part 4: "Practice Reward" Program (If Applicable)',
        items: [
          'To encourage consistent, regular practice, the teaching party may establish reward programs for specific courses (e.g., Ashtanga Mysore). For example:',
          '- Each attendance during Mysore sessions earns 5 yuan reward credit.',
          '- Participation in specific activities earns 2 yuan reward credit.',
          'This credit can be directly deducted from next period\'s renewal fees. This is an encouragement mechanism; specific details are subject to current course notifications.'
        ]
      },
      {
        title: 'Part 5: Class & Equipment',
        items: [
          'The teaching party commits to starting classes on time. If schedule adjustments are needed due to special circumstances, advance notice will be given.',
          'Students should attend online classes punctually and ensure stable internet and equipment. Being late for more than 15 minutes may affect the teaching party\'s ability to provide complete guidance.',
          'To ensure teaching effectiveness and class order, students should adhere to specific course classroom norms (see each course\'s "Practice Guide").'
        ]
      },
      {
        title: 'Part 6: Privacy & Data Protection',
        items: [
          'Information Collection: To provide teaching services, track progress, and execute relevant programs, the teaching party will collect necessary personal information such as student names and contact details.',
          'Information Use: This information is used only for course management, communication, and related services, and will not be used for other commercial purposes or disclosed to unrelated third parties.',
          'Class Content: Without prior written permission from the teaching party and all appearing participants, any form of audio/video recording, screenshotting, or dissemination of online class content is strictly prohibited.',
          'Your Rights: You have the right to access or correct your personal information. Upon termination of studies, you may request deletion of your personal practice records.'
        ]
      },
      {
        title: 'Part 7: Additional Terms',
        items: [
          'Any disputes between parties should first be resolved through friendly negotiation.'
        ]
      }
    ],
    
    noticeTitle: 'Important Notice',
    contactTitle: 'Contact Information',
    contactInfo: [
      'hi@xbyoga.com',
      '+86 131 2121 2007',
    ]
  }
};

export default function FeesPage() {
  const { language } = useLanguage();
  const content = feesContent[language as keyof typeof feesContent];
  
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
          <p className="text-xs text-gray-500">
            {content.lastUpdated}
          </p>
        </div>
        
        {/* 协议内容 */}
        <div className="prose prose-xs md:prose-sm max-w-none">
          {content.parts.map((part: any, index: number) => (
            <section key={index} className="mb-8 last:mb-4">
              {index === 0 ? (
                // 序言部分
                <>
                  <h2 className="text-lg font-medium text-gray-900 mb-3 border-b border-gray-200 pb-2">
                    {part.title}
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {part.content}
                  </p>
                </>
              ) : (
                // 条款部分
                <>
                  <h3 className="text-base font-medium text-gray-800 mb-2">
                    {part.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {part.items.map((item: string, itemIndex: number) => {
                      const showBullet = item.startsWith('-') ||
                                        item.startsWith('(') ||
                                        (part.title.includes('练习回馈') && !item.includes('回馈计划')) ||
                                        (part.title.includes('Practice Reward') && !item.includes('reward program'));
                      
                      return (
                        <li
                          key={itemIndex}
                          className={`flex items-start ${showBullet ? 'ml-4' : ''}`}
                        >
                          {showBullet && item.startsWith('-') ? (
                            <span className="text-red-800 mr-2 mt-0.5 flex-shrink-0 text-xs">•</span>
                          ) : null}
                          <span className="leading-relaxed text-sm">
                            {item.startsWith('-') ? item.substring(2) : item}
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
        <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-lg p-5">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-xs font-medium text-yellow-800 mb-2">
                {content.noticeTitle}
              </h4>
              <div className="text-xs text-yellow-700 leading-relaxed space-y-1">
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
                ? '本协议为在线教学服务的通用条款。如对具体课程内容、练习方法有疑问，请参阅该课程对应的《练习指南》或说明。'
                : 'This agreement covers general terms for online teaching services. For questions about specific course content and practice methods, please refer to the corresponding "Practice Guide" or instructions for that course.'}
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
