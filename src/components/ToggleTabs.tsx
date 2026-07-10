interface ToggleTabsProps {
  activeView: "email" | "sms";
  onViewChange: (view: "email" | "sms") => void;
}

export function ToggleTabs({ activeView, onViewChange }: ToggleTabsProps) {
  return (
    <div
      className="flex items-center px-[10px] py-[5px] gap-[4px]"
      style={{ background: "#7a7a7a", fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <button
        onClick={() => onViewChange("email")}
        className="px-[12px] py-[4px] text-[10px] font-bold tracking-[0.5px] uppercase rounded-[3px] cursor-pointer"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          background: activeView === "email" ? "#383838" : "#868686",
          color: "#ffffff",
        }}
      >
        From Email Addresses
      </button>
      <button
        onClick={() => onViewChange("sms")}
        className="px-[12px] py-[4px] text-[10px] font-bold tracking-[0.5px] uppercase rounded-[3px] cursor-pointer"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          background: activeView === "sms" ? "#383838" : "#868686",
          color: "#ffffff",
        }}
      >
        From SMS Numbers
      </button>
    </div>
  );
}
