// app/enroll/success/page.tsx
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../../../lib/language-context';
import Link from 'next/link';

function SuccessContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const [order, setOrder] = useState<any>(null);
  const [courseType, setCourseType] = useState('ashtanga'); // 默认阿斯汤加

  // 从URL获取课程类型
  useEffect(() => {
    const urlCourse = searchParams.get('course');
    if (urlCourse && ['ashtanga', 'sanskrit', 'private'].includes(urlCourse)) {
      setCourseType(urlCourse);
    }
  }, [searchParams]);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
      localStorage.removeItem('lastOrder');
    }
  }, []);

  // 根据课程类型决定返回哪个页面
  const getBackLink = () => {
    switch (courseType) {
      case 'sanskrit':
        return { href: '/courses/sanskrit', text: language === 'zh' ? '返回梵语课程' : 'Back to Sanskrit Course' };
      case 'private':
        return { href: '/courses/private', text: language === 'zh' ? '返回私教课程' : 'Back to Private Course' };
      default: // ashtanga
        return { href: '/courses/ashtanga', text: language === 'zh' ? '返回阿斯汤加课程' : 'Back to Ashtanga Course' };
    }
  };

  const backLink = getBackLink();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-check text-green-500 text-2xl"></i>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {language === 'zh' ? '报名成功！' : 'Enrollment Successful!'}
          </h1>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">{language === 'zh' ? '订单号' : 'Order ID'}</span>
              <span className="font-mono">ORD-{Date.now().toString().slice(-8)}</span>
            </div>
            
            {order && (
              <>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-600">{language === 'zh' ? '课程' : 'Course'}</span>
                  <span className="font-semibold">
                    {language === 'zh' ? order.package?.name_zh : order.package?.name_en}
                  </span>
                </div>
                
                <div className="flex justify-between mb-3">
                  <span className="text-gray-600">{language === 'zh' ? '金额' : 'Amount'}</span>
                  <span className="text-xl font-bold text-green-600">¥{order.package?.price}</span>
                </div>
              </>
            )}
            
            <div className="flex justify-between">
              <span className="text-gray-600">{language === 'zh' ? '支付时间' : 'Payment Time'}</span>
              <span>{new Date().toLocaleString(language === 'zh' ? 'zh-CN' : 'en-US')}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="text-left bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                {language === 'zh' ? '下一步' : 'Next Steps'}
              </h3>
              <ul className="text-blue-700 text-sm space-y-1">
              <li>• {language === 'zh' ? '请确保已添加微信 <strong>xbyogi</strong>' : 'Please ensure you have added WeChat <strong>xbyogi</strong>'}</li>
              <li>• {language === 'zh' ? '课程安排与资料将通过微信发送' : 'Course schedule and materials will be sent via WeChat'}</li>
              <li>• {language === 'zh' ? '通常会在24小时内联系您' : 'We will contact you within 24 hours'}</li>
              </ul>
            </div>
            
            <div className="flex gap-4 mt-8">
              <Link
                href="/"
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                {language === 'zh' ? '返回首页' : 'Back to Home'}
              </Link>
              
              {/* 动态返回链接 */}
              <Link
                href={backLink.href}
                className="flex-1 py-3 bg-red-800 text-white rounded-lg hover:bg-red-900"
              >
                {backLink.text}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>{language === 'zh' ? '有问题？联系我们' : 'Questions? Contact us'}</p>
          <p>WeChat: xbyogi | Email: info@xbyoga.com</p>
        </div>
      </div>
    </div>
  );
}

// 主组件
export default function PaymentSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">加载中...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
