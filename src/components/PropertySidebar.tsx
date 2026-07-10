import { useState } from "react";
import { Search, ChevronRight, ChevronDown } from "lucide-react";
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

  const filtered = properties.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="w-[150px] min-w-[150px] flex flex-col"
      style={{
        background: "#fdfdfd",
        borderRight: "1px solid #e8e8e8",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Find a Setting search */}
      <div className="px-[6px] py-[6px]" style={{ borderBottom: "1px solid #e8e8e8", background: "#f7f7f7" }}>
        <div className="relative">
          <Search
            className="absolute left-[6px] top-1/2 -translate-y-1/2 w-[11px] h-[11px]"
            style={{ color: "#adadad" }}
            strokeWidth={2}
          />
          <input
            placeholder="Find a Setting"
            className="w-full h-[22px] pl-[22px] pr-[6px] text-[11px] rounded-[10px] outline-none"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              border: "1px solid #cccccc",
              background: "#ffffff",
              color: "#383838",
            }}
          />
        </div>
      </div>

      {/* Sort by Property Name */}
      <button
        className="flex items-center justify-between px-[8px] py-[5px] text-[11px] cursor-pointer"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          borderBottom: "1px solid #e8e8e8",
          background: "#ffffff",
          color: "#7a7a7a",
        }}
      >
        <span>Sort by Property Name</span>
        <ChevronDown className="w-[10px] h-[10px]" style={{ color: "#adadad" }} strokeWidth={2} />
      </button>

      {/* Property filter search */}
      <div className="px-[6px] py-[4px]" style={{ borderBottom: "1px solid #e8e8e8" }}>
        <div className="relative">
          <Search
            className="absolute left-[5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px]"
            style={{ color: "#cccccc" }}
            strokeWidth={2}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[20px] pl-[20px] pr-[4px] text-[11px] rounded-[2px] outline-none"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              border: "1px solid #cccccc",
              background: "#ffffff",
              color: "#383838",
            }}
          />
        </div>
      </div>

      {/* Property list */}
      <ScrollArea className="flex-1">
        <div>
          {filtered.map((property) => (
            <button
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className={cn(
                "w-full text-left px-[8px] py-[4px] text-[11px] flex items-center justify-between cursor-pointer",
              )}
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                background: selectedProperty.id === property.id ? "#dfedfa" : "transparent",
                color: selectedProperty.id === property.id ? "#4a6d8c" : "#383838",
                fontWeight: selectedProperty.id === property.id ? 700 : 400,
              }}
            >
              <span className="truncate">{property.name}</span>
              {selectedProperty.id === property.id && (
                <ChevronRight
                  className="w-[10px] h-[10px] flex-shrink-0 ml-1"
                  style={{ color: "#4a6d8c" }}
                  strokeWidth={2.5}
                />
              )}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
