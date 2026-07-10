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
    <nav
      className="flex items-end pl-3 h-[30px]"
      style={{ background: "#ebebeb", borderBottom: "1px solid #e8e8e8", fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-[10px] py-[4px] text-[11px] cursor-pointer -mb-px",
            "rounded-t-[3px]",
            activeTab === tab
              ? "font-bold"
              : "hover:bg-[#f5f5f5]"
          )}
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            color: activeTab === tab ? "#383838" : "#666666",
            background: activeTab === tab ? "#fdfdfd" : "transparent",
            border: activeTab === tab ? "1px solid #e8e8e8" : "1px solid transparent",
            borderBottom: activeTab === tab ? "1px solid #fdfdfd" : "1px solid transparent",
          }}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
