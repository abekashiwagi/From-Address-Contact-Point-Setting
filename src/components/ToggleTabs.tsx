import { cn } from "@/lib/utils";

interface ToggleTabsProps {
  activeView: "email" | "sms";
  onViewChange: (view: "email" | "sms") => void;
}

export function ToggleTabs({ activeView, onViewChange }: ToggleTabsProps) {
  return (
    <div className="flex items-center bg-[#555555] px-4 py-1.5 gap-1">
      <button
        onClick={() => onViewChange("email")}
        className={cn(
          "px-4 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-sm cursor-pointer transition-colors",
          activeView === "email"
            ? "bg-entrata-green text-white"
            : "bg-transparent text-gray-300 hover:text-white"
        )}
      >
        From Email Addresses
      </button>
      <button
        onClick={() => onViewChange("sms")}
        className={cn(
          "px-4 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-sm cursor-pointer transition-colors",
          activeView === "sms"
            ? "bg-entrata-green text-white"
            : "bg-transparent text-gray-300 hover:text-white"
        )}
      >
        From SMS Numbers
      </button>
    </div>
  );
}
