import re

with open('app/components/Navigation.tsx', 'r') as f:
    lines = f.readlines()

# 第134行（注意：行号从0开始，所以是133）
line_index = 133  # 因为数组从0开始

# 当前错误的内容
print(f"当前第134行: {lines[line_index]}")

# 替换为正确的内容
correct_line = '                  {isRestDay && <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-green-100 text-green-700 rounded-full">●</span>}\n'
lines[line_index] = correct_line

with open('app/components/Navigation.tsx', 'w') as f:
    f.writelines(lines)

print(f"修复后第134行: {correct_line}")
