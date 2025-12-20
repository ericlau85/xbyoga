'use client';

import { useState, useEffect } from 'react';
import ashtangaData from '../../../data/courses/ashtanga.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../../lib/language-context';

export default function AshtangaPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const [showEtiquette, setShowEtiquette] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);

  useEffect(() => {
    setContent(ashtangaData[language as keyof typeof ashtangaData]);
  }, [language]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 safe-top safe-bottom pt-12">
      <Navigation />

      {/* 蓝色标题区域 */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-light mb-3 text-center">
            {content.title}
          </h1>
          <h2 className="text-lg text-gray-200 font-medium mb-4 text-center">
            {content.subtitle}
          </h2>
          <p className="text-gray-300 text-base text-center max-w-3xl mx-auto">
            {content.intro}
          </p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* 卡片1：教师介绍 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-green-900">
                <img
                  src="/images/profile.jpg"
                  alt={content.teacher?.name || 'Teacher'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xl font-bold text-gray-900 mb-1">
                {content.teacher?.name}
              </div>
              <p className="text-red-800 font-medium text-base mb-3">
                {content.teacher?.title}
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                {content.teacher?.intro}
              </p>
            </div>
          </div>
        </div>

        {/* 卡片2：课程形式 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {language === 'zh' ? '课程形式' : 'Course Structure'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 左侧：课程形式 */}
            <div>
              <div className="space-y-6">
                {content.practiceFormats.map((item: any, index: number) => (
                  <div key={index} className="border-l-2 border-red-800 pl-4">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-xl text-red-800 mt-1">
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 mb-1">
                          {item.title}
                        </div>
                        <p className="text-gray-600 text-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 额外信息 */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="space-y-3">
                  <div className="text-base">
                    <span className="font-medium text-gray-900">{content.timeTable.privateBooking}</span>
                    <span className="text-gray-600 ml-2">{content.timeTable.privateTime}</span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    {content.timeTable.restDays}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 右侧：时间表 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {language === 'zh' ? '每周时间表' : 'Weekly Schedule'}
              </h3>
              
              {/* 移动版时间表 */}
              <div className="md:hidden">
                <div className="space-y-1">
                  {content.timeTable.days.map((day: string, index: number) => {
                    const isRest = content.timeTable.classes[index] === 'Rest' || content.timeTable.classes[index] === '休息';
                    const isSunday = index === 0;
                    
                    return (
                      <div key={index} className="py-1 border-b border-gray-100 last:border-0">
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-gray-900 text-xs">
                            {day}
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-medium text-gray-900">
                              {content.timeTable.classes[index]}
                            </div>
                            <div className="text-xs text-gray-500">
                              {isRest ? '-' : '6:30-8:00'}
                            </div>
                            {isSunday && (
                              <div className="text-xs text-gray-500 mt-0.5">
                                {language === 'zh' ? '研习会（不定期）' : 'Workshop (occasional)'}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* 桌面版时间表 */}
              <div className="hidden md:block">
                <div className="space-y-3">
                  {content.timeTable.days.map((day: string, index: number) => {
                    const isRest = content.timeTable.classes[index] === 'Rest' || content.timeTable.classes[index] === '休息';
                    const isSunday = index === 0;
                    
                    return (
                      <div key={index} className="flex items-center py-2 border-b border-gray-100 last:border-0">
                        <div className="w-24 font-medium text-gray-900 text-sm">
                          {day}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            {content.timeTable.classes[index]}
                          </div>
                          <div className="text-xs text-gray-500">
                            {isRest ? '-' : '6:30-8:00'}
                          </div>
                          {isSunday && (
                            <div className="text-xs text-gray-500 mt-1">
                              {language === 'zh' ? '研习会（不定期）' : 'Workshop (occasional)'}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 折叠面板：练习哲学 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <button
            onClick={() => setShowPhilosophy(!showPhilosophy)}
            className="w-full p-6 md:p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-1">
                {language === 'zh' ? '练习哲学' : 'Practice Philosophy'}
              </h2>
              <p className="text-sm text-gray-500">
                {language === 'zh' ? '了解阿斯汤加的传统与核心精神' : 'Understanding Ashtanga tradition and core spirit'}
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${showPhilosophy ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showPhilosophy && (
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-100">
              <div className="pt-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {language === 'zh'
                      ? '此练习远非止于身体锻炼。更是一门通过呼吸、动作与凝视点的精密结合，来系统性地净化身体、稳定心念、唤醒觉知的实践科学。'
                      : 'This practice extends beyond mere physical exercise. It is a practical science that systematically purifies the body, stabilizes the mind, and awakens awareness through the precise integration of breath, movement, and gaze.'}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {language === 'zh' ? '线上迈场教学' : 'Online Mysore Teaching'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-l-2 border-red-800 pl-4">
                      <div className="text-base font-bold text-gray-900 mb-1">
                        {language === 'zh' ? '个性化序列' : 'Personalised Sequence'}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {language === 'zh'
                          ? '按照老师指导的序列进行记忆练习'
                          : 'Practising memorised sequences as guided by the teacher'}
                      </p>
                    </div>
                    <div className="border-l-2 border-red-800 pl-4">
                      <div className="text-base font-bold text-gray-900 mb-1">
                        {language === 'zh' ? '一对一指导' : 'One-to-One Guidance'}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {language === 'zh'
                          ? '在集体练习课堂中，获得个别的计数校准与顺位调整'
                          : 'Receiving individual counting calibration and alignment adjustments in group practice sessions'}
                      </p>
                    </div>
                    <div className="border-l-2 border-red-800 pl-4">
                      <div className="text-base font-bold text-gray-900 mb-1">
                        {language === 'zh' ? '循序渐进' : 'Gradual Progression'}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {language === 'zh'
                          ? '体式的练习根据个人准备程度逐步展开'
                          : 'Posture practice unfolds gradually based on individual readiness'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {language === 'zh' ? '练习者的核心承诺' : 'Practitioner\'s Core Commitments'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="font-medium text-gray-900 mb-2">{language === 'zh' ? '诚实' : 'Honesty'}</div>
                      <p className="text-sm text-gray-600">
                        {language === 'zh'
                          ? '真诚面对身体与当下状态'
                          : 'Truthfully facing one\'s body and present state'}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="font-medium text-gray-900 mb-2">{language === 'zh' ? '纯净' : 'Purity'}</div>
                      <p className="text-sm text-gray-600">
                        {language === 'zh'
                          ? '全情投入，尽可能减少外在干扰'
                          : 'Wholehearted engagement, minimising external distractions'}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="font-medium text-gray-900 mb-2">{language === 'zh' ? '自律' : 'Discipline'}</div>
                      <p className="text-sm text-gray-600">
                        {language === 'zh'
                          ? '建立并守护规律练习习惯'
                          : 'Establishing and maintaining regular practice habits'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 折叠面板：线上礼仪 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <button
            onClick={() => setShowEtiquette(!showEtiquette)}
            className="w-full p-6 md:p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-1">
                {language === 'zh' ? '练习准备与礼仪' : 'Practice Preparation & Etiquette'}
              </h2>
              <p className="text-sm text-gray-500">
                {language === 'zh' ? '打造专注的练习环境与课堂规范' : 'Creating a focused practice environment and class norms'}
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${showEtiquette ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showEtiquette && (
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-100">
              <div className="pt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {language === 'zh' ? '课前准备' : 'Pre-Class Preparation'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {language === 'zh' ? '物理空间' : 'Physical Space'}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {language === 'zh'
                            ? '准备一个安静、整洁、防滑的区域，移开所有障碍物'
                            : 'Prepare a quiet, clean, non-slip area, clearing all obstacles'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {language === 'zh' ? '技术设备' : 'Technical Setup'}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {language === 'zh'
                            ? '摄像头全程开启，确保全身清晰位于画面中央；进入教室后麦克风静音'
                            : 'Camera on throughout, ensuring full body is clearly visible in frame centre; mute microphone upon entry'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {language === 'zh' ? '个人准备' : 'Personal Preparation'}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {language === 'zh'
                            ? '在练习前 3-4小时避免进食，穿着贴身练习服'
                            : 'Avoid eating 3-4 hours before practice, wear fitted practice attire'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {language === 'zh' ? '课中行为规范' : 'In-Class Conduct'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {language === 'zh' ? '准时' : 'Punctuality'}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {language === 'zh'
                            ? '请在约定时间准时上线，练习中保持对自身呼吸的觉察'
                            : 'Please log in punctually at scheduled time, maintaining awareness of own breath during practice'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {language === 'zh' ? '避免分心' : 'Avoiding Distractions'}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {language === 'zh'
                            ? '请将个人电子设备设为勿扰模式'
                            : 'Please set personal electronic devices to do-not-disturb mode'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {language === 'zh' ? '完整练习' : 'Complete Practice'}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {language === 'zh'
                            ? '练习前静心准备及最后至少5-10分钟的平躺休息'
                            : 'Mental preparation before practice and final supine rest of at least 5-10 minutes'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 卡片：价格体系 - 调整了字号 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {content.pricingTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 团体课程 */}
            <div>
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {content.groupTitle}
                </h3>
                <div className="space-y-3">
                  {content.groupPrices.map((price: any, index: number) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div className="font-medium text-gray-900 text-sm">
                        {price.title}
                      </div>
                      <div className="font-bold text-red-800 text-sm">
                        {price.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 私教课程 */}
            <div>
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {content.privateTitle}
                </h3>
                <div className="space-y-3">
                  {content.privatePrices.map((price: any, index: number) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div className="font-medium text-gray-900 text-sm">
                        {price.title}
                      </div>
                      <div className="font-bold text-red-800 text-sm">
                        {price.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* 政策说明 */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                {language === 'zh'
                  ? '更多详细政策说明将在报名后提供。'
                  : 'Further detailed policy information will be provided upon enrolment.'}
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => setShowPolicies(!showPolicies)}
                  className="text-sm text-red-800 hover:text-red-900 font-medium"
                >
                  {showPolicies
                    ? (language === 'zh' ? '收起政策详情' : 'Hide Policy Details')
                    : (language === 'zh' ? '查看政策详情' : 'View Policy Details')}
                </button>
              </div>
            </div>
            
            {showPolicies && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    {language === 'zh'
                      ? '• 课程为实时互动教学，不提供录播回放'
                      : '• Real-time interactive teaching, no video recordings provided'}
                  </p>
                  <p>
                    {language === 'zh'
                      ? '• 出勤实行积分制度，可用于续费抵扣'
                      : '• Attendance credit system for fee deduction upon renewal'}
                  </p>
                  <p>
                    {language === 'zh'
                      ? '• 课程费用按自然周期预先支付'
                      : '• Course fees payable in advance for natural calendar periods'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
