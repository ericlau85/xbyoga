// app/policies/fees/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const feesData = {
  en: {
    title: "Fee Policy",
    lastUpdated: "Last Updated: December 2025",
    sections: [
      {
        title: "1. Payment & Validity Period",
        content: [
          "Course fees are prepaid per selected period, purchasing practice eligibility within a fixed period.",
          "All passes are valid from the first practice day (or the start date agreed with the teacher):",
          "- Weekly Pass: Covers the subsequent 7 consecutive calendar days.",
          "- Monthly Pass: Covers the subsequent one full calendar month cycle (e.g., March 15 to April 14).",
          "- Quarterly Pass: Covers the subsequent three full calendar month cycles.",
          "Pass eligibility expires automatically at the end of the period."
        ]
      },
      {
        title: "2. Cancellation & Rescheduling",
        content: [
          "To cancel or reschedule a currently booked session, please notify the teacher at least 12 hours before the session starts.",
          "Sessions missed due to personal reasons will be deducted as usual."
        ]
      },
      {
        title: "3. Teacher's Commitment",
        content: [
          "The instructor commits to starting classes on time. If a session is cancelled due to the instructor's reasons, missed sessions will be fully compensated for affected students."
        ]
      },
      {
        title: "4. Special Notes",
        content: [
          "Due to the exclusive nature of personalized online guidance, fees are原则上 non-refundable after payment.",
          "In cases of serious illness, accident, or other force majeure requiring long-term interruption (typically one month or more), individual case consultation may be initiated upon presentation of valid documentation."
        ]
      },
      {
        title: "5. Practice Incentive Program",
        content: [
          "For specific details regarding the incentive program encouraging regular practice, please refer to the Online Practice Community Guide."
        ]
      },
      {
        title: "6. Payment Methods",
        content: [
          "Payment will be processed through mutually agreed-upon methods (e.g., WeChat Pay, Alipay, PayPal, etc.)."
        ]
      }
    ]
  },
  zh: {
    title: "费用政策",
    lastUpdated: "最后更新：2025年12月",
    sections: [
      {
        title: "1. 支付与有效期",
        content: [
          "课程费用按所选周期预先支付，购买的是固定周期内的练习资格。",
          "所有卡券有效期自首次练习日（或与老师约定的起始日）起计算：",
          "- 周卡：覆盖随后的7个连续自然日。",
          "- 月卡：覆盖随后的一个完整自然月周期（如3月15日至4月14日）。",
          "- 季卡：覆盖随后的三个完整自然月周期。",
          "周期结束后，卡券资格将自动失效。"
        ]
      },
      {
        title: "2. 取消与改期",
        content: [
          "如需取消或改期当前预约的课程，请至少于课程开始前12小时通知老师。",
          "因学员个人原因导致的缺课，课时将正常扣除。"
        ]
      },
      {
        title: "3. 教学方承诺",
        content: [
          "教学方承诺按时开课。如因教学方原因取消课程，将为受影响学员补足课时。"
        ]
      },
      {
        title: "4. 特别说明",
        content: [
          "由于个性化线上指导的专属性质，费用支付后原则上不予退款。",
          "如遇重大疾病、意外事故或其他不可抗力需要长期中断练习（通常为一个月及以上），可凭有效证明材料启动个案咨询。"
        ]
      },
      {
        title: "5. 练习激励计划",
        content: [
          "关于鼓励规律练习的激励计划具体细则，请参阅线上练习社群指南。"
        ]
      },
      {
        title: "6. 支付方式",
        content: [
          "支付将通过双方协商一致的方式进行（例如：微信支付、支付宝、PayPal等）。"
        ]
      }
    ]
  }
};

export default function FeesPolicyPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    // 直接使用本地数据，无需API调用
    const langData = language === 'zh' ? feesData.zh : feesData.en;
    setContent(langData);
  }, [language]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-500">
          {language === 'zh' ? '加载中...' : 'Loading...'}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-12 pb-16">
        {/* 页面标题区域 */}
        <div className="w-full px-4 py-6 border-b border-gray-100 bg-white sticky top-16 z-10 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl md:text-2xl font-light text-gray-900 text-center tracking-tight">
              {content.title}
            </h1>
            <p className="text-gray-500 text-xs text-center mt-1 font-medium">
              {content.lastUpdated}
            </p>
          </div>
        </div>

        {/* 政策内容区域 */}
        <div className="w-full px-4 py-8 bg-gray-50 flex-grow">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <div className="space-y-8">
                {content.sections.map((section: any, index: number) => (
                  <section
                    key={index}
                    className="pb-6 last:pb-0 border-b last:border-0 border-gray-100"
                  >
                    <h2 className="text-base md:text-lg font-medium text-gray-900 mb-4 tracking-tight">
                      {section.title}
                    </h2>
                    <div className="space-y-3">
                      {section.content.map((paragraph: string, pIndex: number) => (
                        <div
                          key={pIndex}
                          className="flex items-start"
                        >
                          {/* 为列表项添加项目符号 */}
                          {paragraph.startsWith("- ") ? (
                            <>
                              <span className="text-gray-400 mr-2 mt-1">•</span>
                              <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                                {paragraph.substring(2)}
                              </p>
                            </>
                          ) : (
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                              {paragraph}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* 联系信息卡片 */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-gray-900 font-medium mb-3">
                    {language === 'zh' ? '联系我们' : 'Contact Us'}
                  </h3>
                  <div className="space-y-2 text-gray-700 text-sm md:text-base">
                    <p className="flex items-center">
                      <span className="text-gray-500 mr-2"></span>
                      hi@xbyoga.com
                    </p>
                    <p className="flex items-center">
                      <span className="text-gray-500 mr-2"></span>
                      +86 131 2121 2007
                    </p>
                    <p className="flex items-center">
                      <span className="text-gray-500 mr-2"></span>
                      {language === 'zh' ? '微信：xbyogi' : 'WeChat: xbyogi'}
                    </p>
                  </div>
                  
                  {/* 温馨提示 */}
                  <div className="mt-6 pt-4 border-t border-amber-200">
                    <p className="text-gray-600 text-xs md:text-sm italic">
                      {language === 'zh'
                        ? '感谢您选择我们的课程。我们致力于为您提供最优质的瑜伽学习体验。如有任何疑问或需要帮助，请随时联系我们。'
                        : 'Thank you for choosing our courses. We are committed to providing you with the best yoga learning experience. Please feel free to contact us if you have any questions or need assistance.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* 底部提示 */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-500 text-xs text-center">
                  {language === 'zh'
                    ? '请仔细阅读并理解以上政策条款。报名参加课程即表示您同意遵守本政策。'
                    : 'Please read and understand the above policy terms carefully. By enrolling in our courses, you agree to comply with this policy.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
