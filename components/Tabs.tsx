'use client';

interface Tab {
  id: string;
  label: string;
  isActive: boolean;
}

interface TabsProps {
  tabs: Tab[];
  onTabChange?: (tabId: string) => void;
}

export default function Tabs({ tabs, onTabChange }: TabsProps) {
  return (
    <div className="flex gap-1 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange?.(tab.id)}
          className={`px-6 py-3 font-medium text-sm transition-colors relative ${
            tab.isActive
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
