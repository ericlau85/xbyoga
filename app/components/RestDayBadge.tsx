interface RestDayBadgeProps {
  variant?: 'desktop' | 'mobile';
}

export default function RestDayBadge({ variant = 'desktop' }: RestDayBadgeProps) {
  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
        <span className="text-green-700 text-[10px] font-medium">
          ●
        </span>
      </div>
    );
  }
  
  // 桌面版
  return (
    <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-green-100 text-green-700 rounded-full">
      ●
    </span>
  );
}
