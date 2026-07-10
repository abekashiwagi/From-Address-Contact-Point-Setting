import { Bell, X, ChevronRight, Search } from "lucide-react";

interface HeaderBarProps {
  propertyName: string;
}

export function HeaderBar({ propertyName }: HeaderBarProps) {
  return (
    <header className="flex items-center justify-between bg-entrata-dark h-[36px] px-3 text-white text-[13px]">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-entrata-green tracking-wide text-[14px] italic">
          entrata
        </span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-white font-medium">{propertyName}</span>
      </div>
      <div className="flex items-center gap-3">
        <Search className="w-4 h-4 text-gray-300 cursor-pointer hover:text-white transition-colors" />
        <Bell className="w-4 h-4 text-gray-300 cursor-pointer hover:text-white transition-colors" />
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-gray-200 transition-colors">
          <X className="w-4 h-4" />
          <span>Close</span>
        </div>
      </div>
    </header>
  );
}
