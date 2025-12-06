// app/enroll/page.tsx - 彻底优化版本
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../../lib/language-context';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import enrollmentOptions from '../../data/enrollment-options.json';

const PAYPAL_EMAIL = '13121212007@qq.com';

function EnrollContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const urlCourse = searchParams.get('course');

  // 状态管理 - 全部初始为空
  const [formData, setFormData] = useState({
    category: '',
    package: '',
    payment: '',
    student: {
      name: '',
      phone: '',
      email: '',
      wechat: ''
    }
  });

  const [showPaymentGuide, setShowPaymentGuide] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 根据选择获取数据
  const currentCategory = formData.category
    ? enrollmentOptions[formData.category as keyof typeof enrollmentOptions]
    : null;
    
  const currentPackage = currentCategory?.packages?.find(pkg => pkg.id === formData.package);

  // 初始化：根据URL参数提示，但不自动选择
  useEffect(() => {
    const validCategories = ['ashtanga', 'sanskrit', 'private'];
    if (urlCourse && validCategories.includes(urlCourse)) {
    }
  }, [urlCourse]);

  // 输入验证
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.student.name.trim()) {
      newErrors.name = language === 'zh' ? '请输入姓名' : 'Name is required';
    } else if (!/^[\p{L}\s]+$/u.test(formData.student.name)) {
      newErrors.name = language === 'zh' ? '姓名只能包含字母和空格' : 'Name can only contain letters and spaces';
    }
    
    if (!formData.student.phone.trim()) {
      newErrors.phone = language === 'zh' ? '请输入电话号码' : 'Phone number is required';
    } else if (!formData.student.phone.trim()) {
        newErrors.phone = language === 'zh' ? '请输入电话号码' : 'Phone number is required';
      }
    
    if (!formData.student.email.trim()) {
      newErrors.email = language === 'zh' ? '请输入邮箱地址' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.student.email)) {
      newErrors.email = language === 'zh' ? '邮箱格式不正确' : 'Invalid email format';
    }
    
    if (!formData.category) {
      newErrors.category = language === 'zh' ? '请选择课程类型' : 'Please select course type';
    }
    
    if (!formData.package) {
      newErrors.package = language === 'zh' ? '请选择套餐' : 'Please select a package';
    }
    
    if (!formData.payment) {
      newErrors.payment = language === 'zh' ? '请选择支付方式' : 'Please select payment method';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理输入变化
  const handleInputChange = (field: string, value: string) => {
    // 清除该字段的错误
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  // 格式化电话号码
    const formatPhoneNumber = (value: string) => {
      // 允许+号开头，只保留数字、+、空格、括号、横线
      return value.replace(/[^\d\s\+\-\(\)]/g, '');
    };

  // 处理电话号码输入
  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    handleInputChange('student.phone', formatted);
  };

  // 生成PayPal链接
  const getPayPalLink = () => {
    if (!currentPackage) return '#';
    const description = language === 'zh'
      ? `${currentCategory?.category} - ${currentPackage.name_zh}`
      : `${currentCategory?.category_en} - ${currentPackage.name_en}`;
    
    const params = new URLSearchParams({
      cmd: '_xclick',
      business: PAYPAL_EMAIL,
      item_name: description,
      amount: currentPackage.price.toFixed(2),
      currency_code: 'CNY',
      no_shipping: '1',
      no_note: '1',
      lc: language === 'zh' ? 'zh_CN' : 'en_US',
      return: `${window.location.origin}/enroll/success`,
      cancel_return: `${window.location.origin}/enroll`,
      bn: 'PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted'
    });
    
    return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`;
  };

  // 提交表单
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert(language === 'zh' ? '请检查表单中的错误' : 'Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    // 保存订单
    const order = {
      package: currentPackage,
      student: formData.student,
      paymentMethod: formData.payment,
      courseType: formData.category, // 新增：保存课程类型
      timestamp: new Date().toISOString(),
      orderId: `ORDER-${Date.now().toString().slice(-8)}`
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(order));
    
    try {
      if (formData.payment === 'paypal') {
        const link = getPayPalLink();
        window.open(link, '_blank');
        
        setTimeout(() => {
          alert(language === 'zh'
            ? 'PayPal支付页面已打开。支付完成后请返回此页面。'
            : 'PayPal payment page opened. Please return here after payment.');
        }, 500);
        
      } else if (formData.payment === 'wechat') {
        setShowPaymentGuide(true);
      }
    } catch (error) {
      console.error('支付处理错误:', error);
      alert(language === 'zh' ? '支付处理出错' : 'Payment processing error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 支付完成
  const handlePaymentComplete = () => {
    setShowPaymentGuide(false);
    setTimeout(() => {
      window.location.href = '/enroll/success';
    }, 800);
  };

  // 支付按钮文案
  const getPaymentButtonText = () => {
    if (isSubmitting) {
      return language === 'zh' ? '处理中...' : 'Processing...';
    }
    
    if (!currentPackage) {
      return language === 'zh' ? '请选择套餐' : 'Select a package';
    }
    
    const amount = `¥${currentPackage.price}`;
    
    if (!formData.payment) {
      return language === 'zh' ? '请选择支付方式' : 'Select payment method';
    }
    
    if (formData.payment === 'paypal') {
      return language === 'zh' ? `通过PayPal支付 ${amount}` : `Pay with PayPal ${amount}`;
    }
    
    return language === 'zh' ? `微信支付 ${amount}` : `WeChat Pay ${amount}`;
  };

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-4">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          {/* 标题 */}
          <div className="text-center mb-8 md:mb-12 pt-8">
            <h1 className="text-3xl md:text-4xl font-light text-gray-800">
              {language === 'zh' ? '报名' : 'Enroll'}
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              {language === 'zh' ? '请填写以下信息完成报名' : 'Please fill in the information below to enroll'}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* 左侧表单 */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 步骤1：选择课程 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3 font-bold">1</div>
                    <h2 className="text-xl font-bold text-gray-800">{language === 'zh' ? '选择课程' : 'Select Course'}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {/* 课程类型 */}
                    <div>
                      <label className="block text-gray-700 mb-3 font-medium">
                        {language === 'zh' ? '课程类型' : 'Course Type'} *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">{language === 'zh' ? '-- 请选择课程类型 --' : '-- Select Course Type --'}</option>
                        <option value="ashtanga">🧘 {language === 'zh' ? '阿斯汤加瑜伽' : 'Ashtanga Yoga'}</option>
                        <option value="sanskrit">📖 {language === 'zh' ? '梵语学习' : 'Sanskrit Learning'}</option>
                        <option value="private">🎯 {language === 'zh' ? '私教课程' : 'Private Sessions'}</option>
                      </select>
                      {errors.category && (
                        <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                      )}
                    </div>

                    {/* 套餐选择 */}
                    <div>
                      <label className="block text-gray-700 mb-3 font-medium">
                        {language === 'zh' ? '选择套餐' : 'Select Package'} *
                      </label>
                      <select
                        value={formData.package}
                        onChange={(e) => handleInputChange('package', e.target.value)}
                        disabled={!formData.category}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white ${errors.package ? 'border-red-500' : 'border-gray-300'} ${!formData.category ? 'bg-gray-50 text-gray-400' : ''}`}
                      >
                        <option value="">{language === 'zh' ? '-- 请先选择课程类型 --' : '-- Select course type first --'}</option>
                        {currentCategory?.packages?.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {language === 'zh' ? pkg.name_zh : pkg.name_en} - ¥{pkg.price}
                          </option>
                        ))}
                      </select>
                      {errors.package && (
                        <p className="text-red-500 text-sm mt-1">{errors.package}</p>
                      )}
                      {currentPackage && (
                        <p className="mt-3 text-gray-600 text-sm">
                          {language === 'zh' ? currentPackage.description_zh : currentPackage.description_en}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 步骤2：学员信息 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3 font-bold">2</div>
                    <h2 className="text-xl font-bold text-gray-800">{language === 'zh' ? '学员信息' : 'Student Information'}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* 姓名 */}
                    <div>
                      <label className="block text-gray-700 mb-2">
                        {language === 'zh' ? '姓名' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        value={formData.student.name}
                        onChange={(e) => handleInputChange('student.name', e.target.value)}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder={language === 'zh' ? '请输入您的姓名' : 'Enter your name'}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* 电话 */}
                    <div>
                      <label className="block text-gray-700 mb-2">
                        {language === 'zh' ? '电话' : 'Phone Number'} *
                      </label>
                      <input
                        type="tel"
                        value={formData.student.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                       placeholder={language === 'zh' ? '电话号码' : 'Phone number'}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* 邮箱 */}
                    <div>
                      <label className="block text-gray-700 mb-2">
                        {language === 'zh' ? '邮箱' : 'Email'} *
                      </label>
                      <input
                        type="email"
                        value={formData.student.email}
                        onChange={(e) => handleInputChange('student.email', e.target.value)}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="name@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* 微信 */}
                    <div>
                      <label className="block text-gray-700 mb-2">
                        WeChat ID <span className="text-gray-500 text-sm">({language === 'zh' ? '选填' : 'Optional'})</span>
                      </label>
                      <input
                        type="text"
                        value={formData.student.wechat}
                        onChange={(e) => handleInputChange('student.wechat', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="xbyogi"
                      />
                    </div>
                  </div>
                </div>

                {/* 步骤3：支付方式 */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3 font-bold">3</div>
                    <h2 className="text-xl font-bold text-gray-800">{language === 'zh' ? '支付方式' : 'Payment Method'}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {/* 支付方式选择 - 无默认选中 */}
                    <div>
                      <label className="block text-gray-700 mb-3 font-medium">
                        {language === 'zh' ? '选择支付方式' : 'Select Payment Method'} *
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {/* PayPal */}
                        <button
                          type="button"
                          onClick={() => handleInputChange('payment', 'paypal')}
                          className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${formData.payment === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <div className={`w-5 h-5 rounded-full border mr-2 flex items-center justify-center ${formData.payment === 'paypal' ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}>
                              {formData.payment === 'paypal' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </div>
                            <i className="fab fa-paypal text-2xl" style={{ color: '#0070BA' }}></i>
                          </div>
                          <div className="font-semibold text-gray-800">PayPal</div>
                          <div className="text-xs text-gray-600 mt-1">
                            {language === 'zh' ? '国际信用卡/借记卡' : 'Credit/Debit Card'}
                          </div>
                        </button>
                        
                        {/* 微信支付 */}
                        <button
                          type="button"
                          onClick={() => handleInputChange('payment', 'wechat')}
                          className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${formData.payment === 'wechat' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <div className={`w-5 h-5 rounded-full border mr-2 flex items-center justify-center ${formData.payment === 'wechat' ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}>
                              {formData.payment === 'wechat' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </div>
                            <i className="fab fa-weixin text-2xl" style={{ color: '#07C160' }}></i>
                          </div>
                          <div className="font-semibold text-gray-800">微信支付</div>
                          <div className="text-xs text-gray-600 mt-1">
                            {language === 'zh' ? '扫码或转账' : 'Scan or Transfer'}
                          </div>
                        </button>
                      </div>
                      {errors.payment && (
                        <p className="text-red-500 text-sm mt-1">{errors.payment}</p>
                      )}
                    </div>
                    
                    {/* 支付按钮 */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.package || !formData.payment}
                      className={`w-full py-4 text-white rounded-xl text-lg font-bold transition-colors shadow-md hover:shadow-lg ${(!formData.package || !formData.payment) ? 'bg-gray-400 cursor-not-allowed' : formData.payment === 'paypal' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}
                    >
                      {getPaymentButtonText()}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* 右侧订单摘要 */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">{language === 'zh' ? '订单摘要' : 'Order Summary'}</h3>
                  
                  {currentPackage ? (
                    <div className="space-y-4">
                      <div className="pb-4 border-b">
                        <h4 className="font-semibold text-gray-700 mb-1">
                          {language === 'zh' ? currentCategory?.category : currentCategory?.category_en}
                        </h4>
                        <p className="text-lg font-medium text-gray-800">
                          {language === 'zh' ? currentPackage.name_zh : currentPackage.name_en}
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          {language === 'zh' ? currentPackage.description_zh : currentPackage.description_en}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">{language === 'zh' ? '套餐价格' : 'Package Price'}</span>
                          <span className="font-semibold">¥{currentPackage.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">{language === 'zh' ? '有效期' : 'Validity'}</span>
                          <span>{language === 'zh' ? currentPackage.validity_zh : currentPackage.validity_en}</span>
                        </div>
                        {formData.payment && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">{language === 'zh' ? '支付方式' : 'Payment Method'}</span>
                            <span className={`font-medium ${formData.payment === 'paypal' ? 'text-blue-600' : 'text-green-600'}`}>
                              {formData.payment === 'paypal' ? 'PayPal' : '微信支付'}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-xl font-bold">
                          <span>{language === 'zh' ? '总计' : 'Total'}</span>
                          <span className="text-red-800">¥{currentPackage.price}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{language === 'zh' ? '人民币' : 'CNY'}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      <p>{language === 'zh' ? '请选择课程套餐' : 'Please select a course package'}</p>
                      <p className="text-xs mt-2">{language === 'zh' ? '选择后订单详情将显示在此' : 'Order details will appear here'}</p>
                    </div>
                  )}
                </div>

                {/* 重要提示 */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    {language === 'zh' ? '重要提示' : 'Important Note'}
                  </h4>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p>{language === 'zh'
                      ? '支付成功后，您的报名席位将被确认。'
                      : 'After successful payment, your enrollment will be confirmed.'}
                    </p>
                    <p>{language === 'zh'
                      ? '课程相关安排将通过您预留的联系方式发送。'
                      : 'Course details will be sent to your contact information.'}
                    </p>
                    <p className="text-xs text-blue-600 mt-3 pt-3 border-t border-blue-200">
                      {language === 'zh' ? '所有信息将严格保密' : 'All information is kept confidential'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 微信支付弹窗 */}
      {showPaymentGuide && currentPackage && formData.student.name && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <i className="fab fa-weixin mr-2" style={{ color: '#07C160' }}></i>
                微信支付
              </h3>
              <button onClick={() => setShowPaymentGuide(false)} className="text-2xl text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-red-800 mb-2">¥{currentPackage.price}</div>
              <p className="text-gray-700">{language === 'zh' ? currentPackage.name_zh : currentPackage.name_en}</p>
              <p className="text-sm text-gray-500 mt-1">{language === 'zh' ? '学员' : 'Student'}: {formData.student.name}</p>
            </div>
            
            <div className="bg-gray-100 p-5 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-center">{language === 'zh' ? '支付步骤' : 'Payment Steps'}</h4>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-red-800 text-white flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                  <span>{language === 'zh' ? '添加微信好友: ' : 'Add WeChat: '}<strong>xbyogi</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-red-800 text-white flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
                  <span>{language === 'zh' ? '转账金额: ' : 'Transfer: '}<strong>¥{currentPackage.price}</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-red-800 text-white flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
                  <span>
                    {language === 'zh' ? '备注: ' : 'Note: '}
                    <code className="bg-white px-2 py-1 rounded ml-1 text-xs font-mono block mt-1">
                      {formData.student.name} | {language === 'zh' ? currentPackage.name_zh : currentPackage.name_en}
                    </code>
                  </span>
                </li>
              </ol>
            </div>
            
            <div className="space-y-3">
              <button onClick={handlePaymentComplete} className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium">
                {language === 'zh' ? '我已支付完成' : 'Payment Completed'}
              </button>
              <button onClick={() => setShowPaymentGuide(false)} className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                {language === 'zh' ? '取消支付' : 'Cancel Payment'}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default function EnrollPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">加载中...</div>
      </div>
    }>
      <EnrollContent />
    </Suspense>
  );
}
