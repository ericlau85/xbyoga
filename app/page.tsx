'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../lib/language-context';

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const [showWechat, setShowWechat] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <img
          src="/images/home.jpg"
          alt="Yoga Studio"
          className="w-full h-full object-cover object-center"
        />
        {/* 深色遮罩层 */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 左侧垂直导航栏 */}
      <nav className="fixed left-4 md:left-6 top-4 md:top-6 z-50">
        <div className="flex flex-col items-start gap-3 md:gap-4">
          
          {/* Logo */}
          <div className="mb-1 md:mb-2">
            <h1 className="text-white text-sm md:text-base font-light tracking-wider">
              {language === 'zh' ? '阿斯汤加工作室' : 'ASHTANGA STUDIO'}
            </h1>
          </div>

          {/* 主要导航链接 */}
          <div className="space-y-1.5 md:space-y-2">
            <Link
              href="/courses/ashtanga"
              className="group flex items-center gap-1.5 md:gap-2"
            >
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-800"></div>
              <span className="text-white/90 text-xs md:text-sm font-light tracking-wide hover:text-white transition-colors">
                {language === 'zh' ? '阿斯汤加课程' : 'Ashtanga Yoga'}
              </span>
            </Link>

            <Link
              href="/courses/sanskrit"
              className="group flex items-center gap-1.5 md:gap-2"
            >
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-amber-800"></div>
              <span className="text-white/90 text-xs md:text-sm font-light tracking-wide hover:text-white transition-colors">
                {language === 'zh' ? '梵语课程' : 'Sanskrit Studies'}
              </span>
            </Link>

            <Link
              href="/knowledge"
              className="group flex items-center gap-1.5 md:gap-2"
            >
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-800"></div>
              <span className="text-white/90 text-xs md:text-sm font-light tracking-wide hover:text-white transition-colors">
                {language === 'zh' ? '练习指南' : 'Practice Guide'}
              </span>
            </Link>
          </div>

          {/* 分割线 */}
          <div className="w-full h-px bg-white/20 my-0.5 md:my-1"></div>

          {/* 联系方式 */}
          <div className="flex gap-2 md:gap-3">
            <a
              href="mailto:info@xbyoga.com"
              className="group"
              title="Email: info@xbyoga.com"
            >
              <i className="fas fa-envelope text-white/70 text-xs group-hover:text-blue-600 transition-colors"></i>
            </a>

            <button
              onClick={() => setShowWechat(true)}
              className="group"
              title="WeChat: xbyogi"
            >
              <i className="fab fa-weixin text-white/70 text-xs group-hover:text-green-600 transition-colors"></i>
            </button>

            <a
              href="https://instagram.com/xbyoga"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="Instagram: @xbyoga"
            >
              <i className="fab fa-instagram text-white/70 text-xs group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all"></i>
            </a>
          </div>

          {/* 语言切换器 */}
          <button
            onClick={toggleLanguage}
            className="mt-0.5 md:mt-1 flex items-center gap-1 md:gap-1.5 group"
            title={language === 'zh' ? 'Switch to English' : '切换到中文'}
          >
            {/* 语言图标 */}
            <img
              src="/images/globe.svg"
              alt="Language"
              className="w-3 h-3 md:w-3 md:h-3 text-white/70 group-hover:text-white transition-colors filter brightness-0 invert opacity-70 group-hover:opacity-100"
            />
            
            <span className="text-white/70 text-xs font-medium uppercase tracking-wider group-hover:text-white transition-colors">
              {language === 'zh' ? 'English' : '简体中文'}
            </span>
          </button>
        </div>
      </nav>

      {/* 微信弹窗 - 优化手机端显示 */}
      {showWechat && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setShowWechat(false)}
        >
          <div
            className="bg-gradient-to-b from-gray-900 to-black rounded-xl md:rounded-2xl p-6 md:p-8 w-full max-w-xs md:max-w-sm border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 md:top-4 right-3 md:right-4 text-white/60 hover:text-white text-xl md:text-2xl"
              onClick={() => setShowWechat(false)}
            >
              &times;
            </button>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-center">
              {language === 'zh' ? '添加微信' : 'Add WeChat'}
            </h3>
            <p className="text-white/70 mb-4 md:mb-6 text-sm md:text-base text-center">
              {language === 'zh' ? '扫描二维码联系我' : 'Scan QR code to contact me'}
            </p>
            <div className="bg-white p-3 md:p-4 rounded-lg mb-4 md:mb-6">
              <img
                src="/images/wechat-qr.jpg"
                alt="WeChat QR Code"
                className="w-full h-auto"
              />
            </div>
            <p className="text-white/80 text-xs md:text-sm text-center">
              {language === 'zh' ? '微信号：' : 'WeChat ID: '}
              <span className="text-green-600">xbyogi</span>
            </p>
          </div>
        </div>
      )}

      {/* 全局字体图标 */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}
