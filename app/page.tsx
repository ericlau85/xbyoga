'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../lib/language-context';

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  
  // 微信弹窗函数保持不变
  const showWechatQR = () => {
    const modal = document.getElementById('wechatQRModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeWechatQR = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const modal = document.getElementById('wechatQRModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  return (
    <div className="home-container safe-top safe-bottom">
      {/* 星空背景 */}
      <div className="stars-container">
        {Array.from({ length: 24 }).map((_, index) => {
          const size = Math.random() * 3 + 1;
          const delay = Math.random() * 2;
          return (
            <div key={index} className="star" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${delay}s`,
              width: `${size}px`,
              height: `${size}px`,
            }}></div>
          );
        })}
      </div>
      
      {/* 主要内容 */}
      <main style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        textAlign: 'center'
      }}>
        {/* 工作室名称 */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
          fontWeight: 300,
          color: 'white',
          marginBottom: '1rem',
          letterSpacing: '2px'
        }}>
          {language === 'zh' ? '阿斯汤加工作室' : 'Ashtanga Studio'}
        </h1>
        
        {/* 希波的名字 */}
        <div style={{
          fontSize: 'clamp(1rem, 4vw, 1.2rem)',
          color: '#FFD700',
          marginBottom: 'clamp(2rem, 6vw, 3rem)'
        }}>
          {language === 'zh' ? '希波' : 'Xibo'}
        </div>
        
        {/* 核心链接 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: 'clamp(2rem, 6vw, 3rem)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <Link
            href="/courses/ashtanga"
            style={{
              width: '100%',
              padding: 'clamp(0.875rem, 3vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              background: 'rgba(139, 0, 0, 0.8)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              fontSize: 'clamp(1rem, 3vw, 1.1rem)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(139, 0, 0, 1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(139, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {language === 'zh' ? '阿斯汤加课程' : 'Ashtanga Course'}
          </Link>
          
          <Link
            href="/courses/sanskrit"
            style={{
              width: '100%',
              padding: 'clamp(0.875rem, 3vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              background: 'rgba(71, 88, 65, 0.8)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              fontSize: 'clamp(1rem, 3vw, 1.1rem)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(71, 88, 65, 1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(71, 88, 65, 0.8)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {language === 'zh' ? '梵语课程' : 'Sanskrit Course'}
          </Link>
        </div>
          
        {/* 联系图标 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(1rem, 3vw, 1.25rem)',
          marginBottom: 'clamp(1.5rem, 4vw, 2rem)'
        }}>
          
          {/* 邮箱图标 */}
          <a
            href="mailto:info@xbyoga.com"
            style={{
              width: 'clamp(42px, 10vw, 46px)',
              height: 'clamp(42px, 10vw, 46px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.08)',
              color: 'white',
              borderRadius: '50%',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255,255,255,0.15)'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.color = '#4285F4';
              el.style.background = 'rgba(255,255,255,0.15)';
              el.style.borderColor = 'rgba(255,255,255,0.25)';
              el.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.color = 'white';
              el.style.background = 'rgba(255,255,255,0.08)';
              el.style.borderColor = 'rgba(255,255,255,0.15)';
              el.style.transform = 'scale(1)';
            }}
            title="Email: info@xbyoga.com"
          >
            <i className="fas fa-envelope" style={{ fontSize: 'clamp(16px, 4vw, 18px)' }}></i>
          </a>
          
          {/* 微信图标 */}
          <button
            onClick={showWechatQR}
            style={{
              width: 'clamp(42px, 10vw, 46px)',
              height: 'clamp(42px, 10vw, 46px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.08)',
              color: 'white',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.color = '#07C160';
              el.style.background = 'rgba(255,255,255,0.15)';
              el.style.borderColor = 'rgba(255,255,255,0.25)';
              el.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.color = 'white';
              el.style.background = 'rgba(255,255,255,0.08)';
              el.style.borderColor = 'rgba(255,255,255,0.15)';
              el.style.transform = 'scale(1)';
            }}
            title="WeChat: xbyogi"
          >
            <i className="fab fa-weixin" style={{ fontSize: 'clamp(18px, 4vw, 20px)' }}></i>
          </button>
          
          {/* Instagram图标 */}
          <a
            href="https://instagram.com/xbyoga"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 'clamp(42px, 10vw, 46px)',
              height: 'clamp(42px, 10vw, 46px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.08)',
              color: 'white',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'rgba(255,255,255,0.15)';
              el.style.borderColor = 'rgba(255,255,255,0.25)';
              el.style.transform = 'scale(1.1)';
              const icon = el.querySelector('i');
              if (icon) {
                icon.style.background = 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)';
                icon.style.WebkitBackgroundClip = 'text';
                icon.style.WebkitTextFillColor = 'transparent';
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'rgba(255,255,255,0.08)';
              el.style.borderColor = 'rgba(255,255,255,0.15)';
              el.style.transform = 'scale(1)';
              const icon = el.querySelector('i');
              if (icon) {
                icon.style.background = '';
                icon.style.WebkitBackgroundClip = '';
                icon.style.WebkitTextFillColor = '';
                icon.style.color = 'white';
              }
            }}
            title="Instagram: @xbyoga"
          >
            <i className="fab fa-instagram" style={{ fontSize: 'clamp(18px, 4vw, 20px)' }}></i>
          </a>
        </div>
          
        {/* 语言切换按钮 */}
        <button
          onClick={toggleLanguage}
          style={{
            padding: 'clamp(0.375rem, 2vw, 0.5rem) clamp(1.25rem, 4vw, 1.5rem)',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: 'clamp(0.8rem, 3vw, 0.9rem)',
            transition: 'all 0.3s ease',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          }}
        >
          {language === 'zh' ? 'EN' : '中文'}
        </button>
        
        {/* 联系信息 */}
        <div style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: 'clamp(0.8rem, 3vw, 0.9rem)',
          textAlign: 'center',
          marginTop: '1rem'
        }}>
          <p style={{ marginTop: '0.5rem', fontSize: 'clamp(0.75rem, 2.5vw, 0.8rem)' }}>
            {language === 'zh' ? '传统练习 · 个性化指导 · 线上便捷学习' : 'Traditional Practice · Personalized Guidance · Online Convenience'}
          </p>
        </div>
      </main>
      
      {/* 微信二维码弹窗 */}
      <div
        id="wechatQRModal"
        className="wechat-modal"
        onClick={closeWechatQR}
      >
        <div
          className="wechat-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="wechat-close" onClick={closeWechatQR}>
            &times;
          </button>
          <h3 className="m-xl md:text-xl font-bold text-gray-800 mb-2">
            {language === 'zh' ? '添加微信' : 'Add WeChat'}
          </h3>
          <p className="text-gray-600 mb-4 m-base md:text-base">
            {language === 'zh' ? '扫描二维码联系我' : 'Scan QR code to contact me'}
          </p>
          <img
            src="/images/wechat-qr.jpg"
            alt="WeChat QR Code"
            className="wechat-image"
          />
          <p className="wechat-username">
            WeChat ID: xbyogi
          </p>
        </div>
      </div>
    </div>
  );
}
