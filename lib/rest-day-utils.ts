// lib/rest-day-utils.ts

import {
  SHANGHAI_MOON_DAYS_2025,
  SHANGHAI_MOON_DAYS_2026
} from './rest-days-data';

/**
 * 获取上海时间的日期字符串
 * 上海时间 = GMT+8
 */
function getShanghaiDateString(date: Date): string {
  // 方法1：简单计算（加8小时）
  const shanghaiTime = new Date(date.getTime() + (8 * 60 * 60 * 1000));
  const year = shanghaiTime.getUTCFullYear();
  const month = String(shanghaiTime.getUTCMonth() + 1).padStart(2, '0');
  const day = String(shanghaiTime.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 获取本地时间的日期字符串
 */
function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 判断用户本地时间的今天是否是休息日
 * 规则：
 * 1. 如果是周六（本地时间），休息
 * 2. 如果上海时间的今天是新月或满月日，休息
 */
export function isTodayRestDay(): boolean {
  const localNow = new Date(); // 用户的本地时间
  const localDateStr = getLocalDateString(localNow);
  
  // 1. 检查是否是周六（基于本地时间）
  if (localNow.getDay() === 6) { // 6 = 周六
    return true;
  }
  
  // 2. 检查是否是新月/满月日（基于上海时间）
  return isMoonDayInShanghai(localNow);
}

/**
 * 判断在上海时间中，今天是否是新月或满月日
 */
function isMoonDayInShanghai(localNow: Date): boolean {
  // 获取上海时间的日期
  const shanghaiDateStr = getShanghaiDateString(localNow);
  const year = localNow.getFullYear();
  
  // 根据年份选择对应的月相数据
  if (year === 2025) {
    return SHANGHAI_MOON_DAYS_2025.includes(shanghaiDateStr);
  } else if (year === 2026) {
    return SHANGHAI_MOON_DAYS_2026.includes(shanghaiDateStr);
  }
  
  // 其他年份暂时返回false
  return false;
}

/**
 * 获取休息日类型和描述
 */
export function getRestDayInfo(language: 'zh' | 'en' = 'zh'): {
  isRestDay: boolean;
  type: 'saturday' | 'new_moon' | 'full_moon' | null;
  description: string;
} {
  const localNow = new Date();
  const isRestDay = isTodayRestDay();
  
  if (!isRestDay) {
    return {
      isRestDay: false,
      type: null,
      description: language === 'zh' ? '正常练习日' : 'Practice day'
    };
  }
  
  // 检查是否是周六
  if (localNow.getDay() === 6) {
    return {
      isRestDay: true,
      type: 'saturday',
      description: language === 'zh' ? '周六休息日' : 'Saturday rest day'
    };
  }
  
  // 检查是否是新月或满月
  const shanghaiDateStr = getShanghaiDateString(localNow);
  const year = localNow.getFullYear();
  
  // 这里简化处理：如果日期在月相列表中，返回月相日
  // 注意：这个简化版不区分新月和满月
  const moonDays = year === 2025 ? SHANGHAI_MOON_DAYS_2025 :
                   year === 2026 ? SHANGHAI_MOON_DAYS_2026 : [];
  
  if (moonDays.includes(shanghaiDateStr)) {
    return {
      isRestDay: true,
      type: 'new_moon', // 简化：不区分新月满月
      description: language === 'zh' ? '月相休息日' : 'Moon day rest'
    };
  }
  
  return {
    isRestDay: true,
    type: null,
    description: language === 'zh' ? '休息日' : 'Rest day'
  };
}

/**
 * 获取今天的日期信息（调试用）
 */
export function getTodayInfo(): {
  localDate: string;
  shanghaiDate: string;
  localDayOfWeek: number;
  isSaturday: boolean;
  isMoonDay: boolean;
} {
  const localNow = new Date();
  return {
    localDate: getLocalDateString(localNow),
    shanghaiDate: getShanghaiDateString(localNow),
    localDayOfWeek: localNow.getDay(),
    isSaturday: localNow.getDay() === 6,
    isMoonDay: isMoonDayInShanghai(localNow)
  };
}
