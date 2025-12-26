// 临时修复脚本
const fs = require('fs');
const filePath = 'app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 替换有问题的行
content = content.replace(
  'setLanguage(langCode as Language);',
  'setLanguage(langCode as "zh" | "en");'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('修复完成');
