// app/components/PaymentInfo.tsx
'use client';

import { useLanguage } from '../../lib/language-context';

export default function PaymentInfo() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        {language === 'zh' ? '报名与支付方式' : 'Enrollment & Payment'}
      </h3>
      
      {/* 国内学员 */}
      <div className="mb-10">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <i className="fab fa-weixin text-green-500 text-xl mr-3"></i>
          {language === 'zh' ? '微信支付' : 'WeChat Pay'}
        </h4>
        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center">
              <img
                src="/images/wechat-qr.jpg"
                alt="WeChat QR Code"
                className="w-48 h-48 rounded-lg shadow-md mx-auto mb-4"
              />
              <p className="text-sm text-gray-600">
                WeChat ID: <span className="font-mono">xbyogi</span>
              </p>
            </div>
            <div className="flex-1">
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                  <span>{language === 'zh' ? '扫描二维码添加我的微信' : 'Scan QR code to add my WeChat'}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                  <span>{language === 'zh' ? '发送"报名+课程名称"' : 'Send "Enroll + Course Name"'}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                  <span>{language === 'zh' ? '我发送支付金额和账号' : 'I will send payment amount & account'}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                  <span>{language === 'zh' ? '微信转账完成报名' : 'Complete payment via WeChat Transfer'}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      {/* 国际学员 */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <i className="fab fa-paypal text-blue-500 text-xl mr-3"></i>
          {language === 'zh' ? 'PayPal支付' : 'PayPal'}
        </h4>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center">
              <div className="w-48 h-48 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-paypal text-blue-500 text-6xl"></i>
              </div>
              <p className="text-sm text-gray-600">
                PayPal: <span className="font-mono">info@xbyoga.com</span>
              </p>
            </div>
            <div className="flex-1">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">
                    {language === 'zh' ? '如何联系获取PayPal账号？' : 'How to get PayPal account?'}
                  </h5>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <a href="https://www.xiaohongshu.com/user/profile/xxx"
                       className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-lg hover:bg-pink-200">
                      <i className="fab fa-weibo mr-2"></i> 小红书
                    </a>
                    <a href="https://www.instagram.com/xbyoga"
                       className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200">
                      <i className="fab fa-instagram mr-2"></i> Instagram
                    </a>
                    <a href="mailto:info@xbyoga.com"
                       className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
                      <i className="fas fa-envelope mr-2"></i> Email
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border">
                  <p className="text-gray-700">
                    {language === 'zh'
                      ? '请通过社交媒体联系我，获取PayPal支付链接。付款时请备注："Yoga Course + 您的姓名"'
                      : 'Contact me via social media to get PayPal payment link. Please note "Yoga Course + Your Name" in payment.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 重要提示 */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start">
          <i className="fas fa-info-circle text-yellow-500 mt-1 mr-3"></i>
          <div>
            <p className="text-yellow-800 font-medium mb-1">
              {language === 'zh' ? '重要提示' : 'Important Notes'}
            </p>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• {language === 'zh' ? '付款后请截图保存凭证' : 'Save payment receipt screenshot'}</li>
              <li>• {language === 'zh' ? '课程名额以收到款项为准' : 'Seat confirmed upon payment received'}</li>
              <li>• {language === 'zh' ? '24小时内确认报名成功' : 'Enrollment confirmed within 24 hours'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
