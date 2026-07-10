import { cn } from "@/lib/utils";

const subTabs = [
  "General",
  "Contact Points",
  "From Addresses",
  "Notification Recipients",
  "Call-handling",
  "System Documents",
];

interface SecondaryNavProps {
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}

export function SecondaryNav({ activeSubTab, onSubTabChange }: SecondaryNavProps) {
  return (
    <nav
      className="flex items-center px-2 h-[28px]"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #ececec",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {subTabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSubTabChange(tab)}
          className={cn(
            "px-[10px] py-[3px] text-[11px] cursor-pointer h-full flex items-center",
          )}
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            color: activeSubTab === tab ? "#383838" : "#7a7a7a",
            fontWeight: activeSubTab === tab ? 700 : 400,
            borderBottom: activeSubTab === tab ? "2px solid #5a8abf" : "2px solid transparent",
          }}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
