import { cn } from "@/lib/utils";

const tabs = [
  "Property",
  "Pricing",
  "Marketing",
  "Leasing",
  "Residents",
  "Financial",
  "Communication",
  "Data Management",
];

interface PrimaryNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function PrimaryNav({ activeTab, onTabChange }: PrimaryNavProps) {
  return (
    <nav className="flex items-center bg-[#f0f0f0] border-b border-entrata-border px-2 h-[34px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-3 py-1.5 text-[12px] font-medium rounded-t-sm border border-transparent transition-colors cursor-pointer",
            "hover:bg-white hover:border-entrata-border hover:border-b-white",
            activeTab === tab
              ? "bg-white border-entrata-border border-b-white text-entrata-dark -mb-px"
              : "text-gray-600"
          )}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
