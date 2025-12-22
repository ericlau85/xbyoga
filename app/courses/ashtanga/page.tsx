'use client';

import { useState, useEffect } from 'react';
import ashtangaData from '../../../data/courses/ashtanga.json';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { useLanguage } from '../../../lib/language-context';

export default function AshtangaPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState<any>(null);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    tradition: false,
    preparation: false,
    adjustment: false
  });

  useEffect(() => {
    setContent(ashtangaData[language as keyof typeof ashtangaData]);
  }, [language]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen safe-top safe-bottom pt-12">
      <Navigation />

      {/* 蓝色标题区域 */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-light mb-2">
            {content.title}
          </h1>
          <h2 className="text-lg text-gray-200 font-medium mb-4">
            {content.subtitle}
          </h2>
          <p className="text-gray-300 text-base max-w-3xl mx-auto">
            {content.intro}
          </p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* 教师介绍 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-green-800">
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
              <p className="text-red-800 font-medium text-base mb-2">
                {content.teacher?.title}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {content.teacher?.intro}
              </p>
            </div>
          </div>
        </div>

        {/* 课程形式与时间表 */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 左侧：课程形式 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {content.practiceFormatsTitle || (language === 'zh' ? '课程形式' : 'Practice Formats')}
              </h3>
              
              <div className="space-y-6">
                {content.practiceFormats.map((item: any, index: number) => (
                  <div key={index} className="border-l-2 border-red-800 pl-4">
                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 右侧：时间表 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {language === 'zh' ? '每周时间表' : 'Weekly Schedule'}
              </h3>
              
              <div className="space-y-3">
                {content.timeTable.days.map((day: string, index: number) => {
                  const isRest = content.timeTable.classes[index] === 'Rest' || content.timeTable.classes[index] === '休息';
                  const isSunday = index === 0;
                  
                  return (
                    <div key={index} className="flex items-center py-2 border-b border-gray-200 last:border-0">
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

        {/* 传统方式 */}
        <div className="mb-8 border-t border-gray-200 pt-6">
          <button
            onClick={() => toggleSection('tradition')}
            className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
          >
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-1">
                {language === 'zh' ? '传统方式' : 'Traditional Method'}
              </h2>
              <p className="text-sm text-gray-500">
                {language === 'zh' ? '阿斯汤加的系统化练习' : 'Systematic practice system of Ashtanga'}
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedSections.tradition ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {expandedSections.tradition && (
            <div className="pt-4">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {language === 'zh'
                  ? '阿斯汤加瑜伽是一套系统化的练习，其核心在于通过固定的体式序列、呼吸与凝视点的精密结合，实现身心的净化与整合。'
                  : 'Ashtanga yoga is a systematic practice system whose core lies in the precise integration of fixed posture sequences, breath, and gaze points to achieve purification and integration of body and mind.'}
              </p>
              
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {language === 'zh'
                  ? '在线课程采用传统的迈场（Mysore）教学方式，这是阿斯汤加最核心的学习方法。在迈场中，每位练习者按照自己的节奏练习记忆中的序列，老师在集体环境中给予个别的指导。即使在线进行，我们依然恪守这一传统的精髓。'
                  : 'Online courses adopt the traditional Mysore teaching method, the most essential learning approach in Ashtanga. In Mysore, each practitioner follows their own rhythm to practice memorized sequences, while the teacher provides individual guidance within a group setting. Even conducted online, we strictly adhere to the essence of this tradition.'}
              </p>

              <div className="space-y-3 mb-4">
                <p className="text-gray-700 text-sm font-medium">
                  {language === 'zh' ? '迈场的特别之处在于：' : 'The special features of Mysore include:'}
                </p>
                <ul className="text-gray-600 text-sm space-y-2 pl-4">
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    {language === 'zh' ? '集体中的个性化：大家在同一时段练习，但每个人都在自己的序列中前进' : 'Individualization within the collective: Everyone practices during the same time slot, but each person progresses through their own sequence'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    {language === 'zh' ? '一对一指导：老师通过摄像头观察，给予个别的计数校准与顺位调整' : 'One-on-one guidance: The teacher observes through the camera, providing individual count calibration and alignment adjustments'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    {language === 'zh' ? '渐进式学习：体式根据你的准备程度逐个授予，确保安全与精进' : 'Progressive learning: Postures are granted one by one based on your readiness, ensuring safety and progress'}
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {language === 'zh'
                  ? '阿斯汤加（aṣṭāṅga）意为"八支"，源自帕坦伽利《瑜伽经》的完整修行体系：禁制、劝制、坐法、调息、制感、专注、禅定及三昧。在课堂中对体式的练习，正是我们践行伦理准则的实践场域，并系统地为通往更高阶的内心修炼铺平道路。每一次练习，都是一次完整的八支瑜伽微循环。'
                  : 'Ashtanga (aṣṭāṅga) means "eight limbs", derived from Patanjali\'s Yoga Sutras complete cultivation system: restraints, observances, posture, breath control, sense withdrawal, concentration, meditation, and samadhi. Posture practice in class is precisely the practical field where we implement ethical principles, systematically paving the way for higher levels of inner cultivation. Each practice is a complete micro-cycle of the eight-limbed yoga.'}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'zh'
                  ? '在线迈场的优势在于节省通勤时间，让你在最熟悉的环境中练习。但同时也需要更强的自律性、更主动的专注力，以及更清晰的自我觉察。'
                  : 'The advantages of online Mysore include saving commuting time and practicing in your most familiar environment. However, it also requires stronger self-discipline, more proactive concentration, and clearer self-awareness.'}
                </p>
            </div>
          )}
        </div>

        {/* 练习准备 */}
        <div className="mb-8 border-t border-gray-200 pt-6">
          <button
            onClick={() => toggleSection('preparation')}
            className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
          >
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-1">
                {language === 'zh' ? '练习准备' : 'Practice Preparation'}
              </h2>
              <p className="text-sm text-gray-500">
                {language === 'zh' ? '打造专注的练习环境' : 'Creating a focused practice environment'}
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedSections.preparation ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {expandedSections.preparation && (
            <div className="pt-4 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {language === 'zh' ? '物理空间' : 'Physical Space'}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm flex-1">
                      {language === 'zh'
                        ? '准备一个安静、整洁、防滑的区域，移开所有障碍物。确保光线充足，摄像头能清晰拍摄全身。'
                        : 'Prepare a quiet, clean, non-slip area, clearing all obstacles. Ensure sufficient lighting for clear full-body camera view.'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm flex-1">
                      {language === 'zh'
                        ? '提前告知家人练习时间，保持环境安静。'
                        : 'Inform family members of practice time in advance to maintain a quiet environment.'}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {language === 'zh' ? '技术设备' : 'Technical Equipment'}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm flex-1">
                      {language === 'zh'
                        ? '将摄像头放在侧面，能完整拍摄你的练习区域。'
                        : 'Place the camera on the side to fully capture your practice area.'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm flex-1">
                      {language === 'zh'
                        ? '使用耳机连接，练习时将麦克风设为静音。确保网络连接稳定。'
                        : 'Use headphones, mute the microphone during practice. Ensure stable internet connection.'}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {language === 'zh' ? '个人准备' : 'Personal Preparation'}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm flex-1">
                      {language === 'zh'
                        ? '练习前3-4小时避免进食，保持空腹状态。'
                        : 'Avoid eating 3-4 hours before practice, maintain an empty stomach.'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm flex-1">
                      {language === 'zh'
                        ? '穿着贴身、专业的练习服，以便老师清晰观察身体顺位。'
                        : 'Wear fitted, professional practice attire for clear observation of body alignment.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 关于休息 */}
        <div className="mb-8 border-t border-gray-200 pt-6">
          <button
            onClick={() => toggleSection('adjustment')}
            className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
          >
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-1">
                {language === 'zh' ? '关于休息' : 'About Rest Days'}
              </h2>
              <p className="text-sm text-gray-500">
                {language === 'zh' ? '每周六和新满月日休息' : 'Rest every Saturday and on Moon days'}
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedSections.adjustment ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {expandedSections.adjustment && (
            <div className="pt-4 space-y-6">

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {language === 'zh' ? '休息日' : 'Rest Days'}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm flex-1">
                      {language === 'zh'
                        ? '我们遵循在周六、新月及满月日休息的传统。月相影响体液与能量，休息是为了让身心与自然韵律同步，实现深度恢复。休息日可用于静坐、阅读、散步或温和的调息练习。'
                        : 'We follow the tradition of resting on Saturdays, new moon, and full moon days. Lunar phases affect bodily fluids and energy. Resting allows the body and mind to synchronize with natural rhythms, achieving deep recovery. Rest days can be used for sitting meditation, reading, walking, or gentle pranayama practice.'}
                    </p>
                  </div>
                </div>
              </div>
                                           
                                           <div>
                                             <h3 className="text-sm font-medium text-gray-900 mb-2">
                                               {language === 'zh' ? '女性生理期' : 'Menstrual Period (Ladies Holiday)'}
                                             </h3>
                                             <div className="space-y-2">
                                               <div className="flex items-start gap-3">
                                                 <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                   <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                                                 </div>
                                                 <p className="text-gray-600 text-sm flex-1">
                                                   {language === 'zh'
                                                     ? '前三天建议完全休息，这是身体的自然排毒期。三天后可恢复练习，但需避免倒立、跳跃、收束及强烈后弯，通常练习至坐立体式为止。请将此视为践行"清净（śauca）"与深度自我关爱的修行。'
                                                     : 'Complete rest is recommended for the first three days, as this is the body\'s natural detoxification period. Practice can resume after three days, but inversions, jumps, bandhas, and strong backbends should be avoided, usually practicing only up to seated postures. Please regard this as a practice of embodying "Purity (śauca)" and deep self-care.'}
                                                 </p>
                                               </div>
                                             </div>
                                           </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {language === 'zh' ? '生病或疲劳时' : 'During Illness or Fatigue'}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm flex-1">
                      {language === 'zh'
                        ? '请尊重身体的休息需求。如有感冒、发烧或严重疲劳，请休息。可只做几个拜日式，或完全以静坐代替。简单的练习往往比强迫的练习更有益。'
                        : 'Please respect the body\'s need for rest. If you have a cold, fever, or severe fatigue, please rest. You may do only a few Sun Salutations, or completely substitute with sitting meditation. Simple practice is often more beneficial than forced practice.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 课程费用 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {content.pricingTitle}
          </h2>
          
          <div className="space-y-2 mb-4">
            {content.groupPrices.map((price: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <div className="font-medium text-gray-900 text-sm">
                  {price.title}
                </div>
                <div className="font-bold text-red-800 text-sm">
                  {price.price}
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-2">
            <div className="text-xs text-gray-600 leading-relaxed">
              {language === 'zh'
                ? '实时在线教学，没有录播回放。请按自然周期预付，详细政策请咨询。'
                : 'Real-time online teaching, no recordings. Please prepay per natural cycle, detailed policies available upon consultation.'}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
