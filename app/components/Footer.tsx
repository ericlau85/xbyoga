// app/components/Footer.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  if (isHomePage) return null;

  return (
    <footer style={{
      padding: '16px 12px',
      textAlign: 'center',
      marginTop: '50px',
      borderTop: '1px solid #e0e0e0',
      backgroundColor: '#f8f9fa',
      width: '100%',           // 确保宽度100%
      display: 'flex',         // 使用flex布局
      justifyContent: 'center', // 水平居中
      alignItems: 'center'     // 垂直居中
    }}>
      <div style={{
        maxWidth: '1000px',
        width: '100%',         // 确保div宽度100%
        margin: 0,
        textAlign: 'center'    // 文字居中对齐
      }}>
        <p style={{ margin: 0, color: '#666', fontSize: '10px' }}>
          &copy; 2025 ASHTANGA STUDIO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
