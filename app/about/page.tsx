'use client';

import { useLanguage } from '../../lib/language-context';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* 标题区域 */}
      <div className="w-full bg-white border-b border-gray-200 py-12 md:py-16 pt-16 md:pt-20">
        <div className="w-full max-w-4xl mx-auto px-4 relative">
          
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-light tracking-wider text-gray-900 uppercase mb-3">
              {language === 'zh' ? '关于希波' : 'About Xibo'}
            </h1>
            <div className="w-12 h-0.5 bg-gray-800 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 font-normal mb-6">
              {language === 'zh'
                ? '自律 · 专注 · 精进指导'
                : 'Discipline · Focus · Refined Guidance'
              }
            </p>
            <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
              {language === 'zh'
                ? '本在线阿斯汤加教学基于每日Mysore练习，为学生提供远程个性化指导。'
                : 'This online Ashtanga teaching is based on daily Mysore practice, providing remote personalized guidance for students.'
              }
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="relative">
        
          {/* 教师介绍 */}
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-gray-300">
                  <img
                    src="/images/rishikesh-eric.jpg"
                    alt={language === 'zh' ? '希波老师' : 'Teacher Eric'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="w-4 h-px bg-gray-800 opacity-30"></div>
                  <h2 className="text-xl font-normal text-gray-900">
                    {language === 'zh' ? '希波老师' : 'Teacher Eric'}
                  </h2>
                  <div className="w-4 h-px bg-gray-800 opacity-30"></div>
                </div>
                <p className="text-gray-800 font-normal text-base uppercase tracking-wide">
                  {language === 'zh'
                    ? '线上阿斯汤加教学者'
                    : 'Online Ashtanga Instructor'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* 教学之路 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {language === 'zh' ? '教学之路' : 'The Teaching Path'}
              </h3>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                <p className="mb-4">
                  {language === 'zh'
                    ? '2015年在北京开始教学，五年的线下经历让我深入理解每位练习者独特的身体和心路历程。2020年的特殊时期，线上课程成为连接的方式，这段临时之旅却成为我五年来持续的日常。'
                    : 'Began teaching in Beijing in 2015; five years of in-person experience gave me deep understanding of each practitioner\'s unique body and mental journey. During the unique period of 2020, online classes became a means of connection—this temporary journey unexpectedly became my sustained daily life for five years.'
                  }
                </p>
              </div>
              
              <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  {language === 'zh'
                    ? '距离迫使教学变得精微。我学习在屏幕的另一端"聆听"呼吸的深度，"观察"身体的智慧，"感知"意识的流动。这不再只是体式的指导，而是跨越空间的能量对话。'
                    : 'Distance forced teaching to become subtle. I learned to "listen" to breath depth, "observe" body wisdom, "sense" consciousness flow from the other side of the screen. This became not just asana guidance, but an energy dialogue across space.'
                  }
                </p>
              </div>
            </div>
          </section>

          {/* 教学理解 */}
          <section className="mb-12 md:mb-16">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {language === 'zh' ? '教学理解' : 'Teaching Understanding'}
              </h3>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3 text-base">
                    {language === 'zh' ? '体式是路径，呼吸是向导' : 'Asana is the Path, Breath the Guide'}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'zh'
                      ? '我关心的不是你能否触碰到脚趾，而是你在伸手的过程中是否保持了深长的呼吸。体式的完成只是表象，呼吸的质量才是实质。'
                      : 'My concern is not whether you can touch your toes, but whether you maintain deep breathing while reaching. Asana completion is merely appearance; breath quality is the substance.'
                    }
                  </p>
                </div>
                
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3 text-base">
                    {language === 'zh' ? '在重复中，发现新意' : 'In Repetition, Discover Freshness'}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'zh'
                      ? '阿斯汤加的序列是固定的，但每次练习都是全新的。真正的转变不来自偶然的突破，而来自日复一日的重复中积累的微小觉察。'
                      : 'Ashtanga sequences are fixed, yet each practice is entirely new. True transformation comes not from occasional breakthroughs, but from tiny insights accumulated through day-to-day repetition.'
                    }
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3 text-base">
                    {language === 'zh' ? '距离中的连接' : 'Connection Across Distance'}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'zh'
                      ? '线上教学让我明白，真正的连接不在于物理的接近，而在于专注的同频。我们在各自的晨光中，共享同一呼吸节奏，这或许比肩并肩更为深刻。'
                      : 'Online teaching taught me that true connection lies not in physical proximity, but in focused resonance. In our respective morning light, sharing the same breath rhythm may be deeper than side-by-side presence.'
                    }
                  </p>
                </div>
                
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3 text-base">
                    {language === 'zh' ? '序列，即当下' : 'Sequence as Presence'}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'zh'
                      ? '当身体记住序列，意识便从记忆中解脱。固定序列不是限制，而是为了让心意更自由地安住于当下的呼吸与觉察。'
                      : 'When the body remembers the sequence, consciousness is freed from memory. Fixed sequences are not limitations, but a means to let the mind dwell more freely in present breath and awareness.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 这个空间适合 */}
          <section className="mb-12 pt-8 border-t border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                {language === 'zh' ? '这个空间适合' : 'This Space Is For'}
              </h3>
              <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                <p className="mb-4">
                  {language === 'zh'
                    ? '如果你寻找的，不是体式的速成教程，而是练习的深度陪伴；'
                    : 'If what you seek is not a quick-fix asana tutorial, but deep companionship in practice;'
                  }
                </p>
                <p className="mb-4">
                  {language === 'zh'
                    ? '如果你相信，真正的进步来自日常的积累，而非瞬间的闪耀；'
                    : 'If you believe true progress comes from daily accumulation, not momentary brilliance;'
                  }
                </p>
                <p className="mb-6">
                  {language === 'zh'
                    ? '如果你愿意，在重复中发现新意，在固定中寻找自由——'
                    : 'If you\'re willing to discover freshness in repetition, find freedom within the fixed—'
                  }
                </p>
              </div>
              
              <div className="border border-gray-300 p-4 md:p-6">
                <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                  {language === 'zh'
                    ? '那么，欢迎来到这个空间。让我们隔着屏幕，在各自的晨光中，共享一段专注的练习时光。'
                    : 'Then, welcome to this space. Let us, through the screen, in our respective morning light, share a focused practice time.'
                  }
                </p>
              </div>
            </div>
          </section>
          
          {/* 一起练习的人 */}
                    <section className="mb-12 pt-8 border-t border-gray-200">
                      <div className="mb-6">
                        <h3 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-1">
                          {language === 'zh' ? '一起练习的人' : 'Fellow Practitioners'}
                        </h3>
                        <div className="w-16 h-0.5 bg-gray-800 opacity-30"></div>
                      </div>
                      
                      <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                        <p>
                          {language === 'zh'
                            ? '她们中，有的人练习时间比我更久，'
                            : 'Some have practiced longer than I have,'}
                        </p>
                        <p>
                          {language === 'zh'
                            ? '有的人体式比我做得更深入，'
                            : 'Some go deeper in their asanas,'}
                        </p>
                        <p>
                          {language === 'zh'
                            ? '但依然每天清晨，准时出现在屏幕前。'
                            : 'Yet every morning, they appear on screen, right on time.'}
                        </p>
                        
                        <div className="pt-2"></div>
                        
                        <p>
                          {language === 'zh'
                            ? '她们来，不是因为需要我教什么，'
                            : 'They come not because they need me to teach,'}
                        </p>
                        <p>
                          {language === 'zh'
                            ? '而是因为愿意和我一起练习。'
                            : 'But because they choose to practice together.'}
                        </p>
                        
                        <div className="pt-4 border-t border-gray-100 mt-4"></div>
                        
                        <p className="text-gray-800 font-medium">
                          {language === 'zh'
                            ? '这是我的荣幸。谢谢你们。'
                            : 'This is my honor. Thank you.'}
                        </p>
                      </div>
                    </section>
          
          {/* 行动号召 */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/courses/ashtanga"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-900 text-base font-normal rounded-none text-gray-900 bg-white hover:bg-gray-900 hover:text-white transition-colors duration-200"
              >
                {language === 'zh' ? '阿斯汤加课程' : 'Ashtanga Courses'}
              </a>
              <a
                href="/courses/special"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-normal rounded-none text-gray-700 bg-white hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
              >
                {language === 'zh' ? '特别课程' : 'Special Courses'}
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
