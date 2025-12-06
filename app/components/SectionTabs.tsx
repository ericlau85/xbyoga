// app/components/SectionTabs.tsx
'use client';

interface SectionTabsProps {
  sections: Record<string, string>;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function SectionTabs({ sections, activeSection, onSectionChange }: SectionTabsProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 border-b border-gray-200 mb-3">
      <div className="flex flex-wrap gap-1 md:gap-2 -mb-px">
        {(Object.entries(sections) as [string, string][]).map(([key, title]) => (
          <button
            key={key}
            onClick={() => onSectionChange(key)}
            className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-t-lg border ${
              activeSection === key
                ? 'text-gray-900 bg-white border-gray-300 border-b-white -mb-px'
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}
