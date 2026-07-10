import { useState } from "react";
import { Search, ChevronRight, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { Property } from "@/data/properties";

interface PropertySidebarProps {
  properties: Property[];
  selectedProperty: Property;
  onSelectProperty: (property: Property) => void;
}

export function PropertySidebar({
  properties,
  selectedProperty,
  onSelectProperty,
}: PropertySidebarProps) {
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = properties.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-[170px] min-w-[170px] border-r border-entrata-border bg-white flex flex-col">
      <div className="p-2 border-b border-entrata-border">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
          <Input
            placeholder="Find a Setting"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-[26px] pl-7 text-[11px] rounded-sm border-entrata-border bg-white"
          />
        </div>
      </div>

      <button
        onClick={() => setSortOpen(!sortOpen)}
        className="flex items-center justify-between px-3 py-1.5 text-[11px] text-gray-500 border-b border-entrata-border hover:bg-gray-50 cursor-pointer"
      >
        <span>Sort by Property Name</span>
        {sortOpen ? (
          <ChevronDown className="w-3 h-3" />
        ) : (
          <ChevronDown className="w-3 h-3" />
        )}
      </button>

      <div className="px-2 py-1.5 border-b border-entrata-border">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
          <Input
            placeholder=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-[22px] pl-7 text-[11px] rounded-sm border-entrata-border bg-white"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="py-0.5">
          {filtered.map((property) => (
            <button
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className={cn(
                "w-full text-left px-3 py-[5px] text-[11px] flex items-center justify-between cursor-pointer transition-colors",
                selectedProperty.id === property.id
                  ? "bg-entrata-selected text-entrata-tab-active font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <span className="truncate">{property.name}</span>
              {selectedProperty.id === property.id && (
                <ChevronRight className="w-3 h-3 text-entrata-tab-active flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
