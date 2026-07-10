import { Bell, X, ChevronRight, Search } from "lucide-react";

interface HeaderBarProps {
  propertyName: string;
}

export function HeaderBar({ propertyName }: HeaderBarProps) {
  return (
    <header
      className="flex items-center justify-between h-[32px] px-3 text-white text-[12px]"
      style={{ background: "#383838", fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="flex items-center gap-1.5">
        <span
          className="tracking-wide text-[13px]"
          style={{
            color: "#adadad",
            fontStyle: "italic",
            fontWeight: 700,
          }}
        >
          entrata
        </span>
        <ChevronRight className="w-3 h-3 mx-0.5" style={{ color: "#888888" }} strokeWidth={1.5} />
        <span className="font-bold text-[12px]" style={{ color: "#ffffff" }}>{propertyName}</span>
      </div>
      <div className="flex items-center gap-4">
        <Search className="w-[14px] h-[14px] cursor-pointer" style={{ color: "#cccccc" }} strokeWidth={2} />
        <Bell className="w-[14px] h-[14px] cursor-pointer" style={{ color: "#cccccc" }} strokeWidth={2} />
        <div className="flex items-center gap-1 cursor-pointer">
          <X className="w-[14px] h-[14px]" style={{ color: "#ffffff" }} strokeWidth={2} />
          <span style={{ color: "#ffffff" }}>Close</span>
        </div>
      </div>
    </header>
  );
}
