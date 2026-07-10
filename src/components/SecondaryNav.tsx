import { cn } from "@/lib/utils";

const subTabs = [
  "General",
  "Contact Points",
  "From Addresses",
  "Notification Recipients",
  "Call Handling",
  "System Documents",
];

interface SecondaryNavProps {
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}

export function SecondaryNav({ activeSubTab, onSubTabChange }: SecondaryNavProps) {
  return (
    <nav className="flex items-center gap-0 bg-white border-b border-entrata-border px-4 h-[32px]">
      {subTabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSubTabChange(tab)}
          className={cn(
            "px-3 py-1.5 text-[12px] transition-colors cursor-pointer border-b-2",
            activeSubTab === tab
              ? "text-entrata-dark font-semibold border-entrata-tab-active"
              : "text-gray-500 font-medium border-transparent hover:text-gray-700 hover:border-gray-300"
          )}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
