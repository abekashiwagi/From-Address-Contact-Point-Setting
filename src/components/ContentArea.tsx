import { Pencil, Info } from "lucide-react";
import type { ContactPoint } from "@/data/properties";

interface ContentAreaProps {
  activeView: "email" | "sms";
  contactPoints: ContactPoint[];
}

export function ContentArea({ activeView, contactPoints }: ContentAreaProps) {
  const title =
    activeView === "sms" ? '"From" SMS Numbers' : '"From" Email Addresses';
  const editLabel =
    activeView === "sms" ? "Edit SMS Numbers" : "Edit Email Addresses";

  const grouped = contactPoints.reduce(
    (acc, cp) => {
      if (!acc[cp.category]) acc[cp.category] = [];
      acc[cp.category].push(cp);
      return acc;
    },
    {} as Record<string, ContactPoint[]>
  );

  return (
    <div className="flex-1 bg-entrata-light-bg p-6">
      <div className="bg-white rounded-sm border border-entrata-border shadow-sm">
        <div className="flex items-center justify-between px-5 py-3 border-b border-entrata-border">
          <h2 className="text-[15px] font-semibold text-entrata-dark">
            {title}
          </h2>
          <button className="flex items-center gap-1.5 text-[12px] text-gray-500 hover:text-entrata-tab-active cursor-pointer transition-colors">
            <Pencil className="w-3 h-3" />
            <span>{editLabel}</span>
          </button>
        </div>

        <div className="px-5 py-4">
          {Object.entries(grouped).map(([category, points]) => (
            <div key={category} className="mb-4 last:mb-0">
              <h3 className="text-[13px] font-bold text-entrata-dark mb-3 pb-2 border-b border-entrata-border">
                {category}
              </h3>
              {points.map((point) => (
                <div
                  key={point.id}
                  className="flex items-center justify-between py-2 px-1 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-[12px] text-gray-600 min-w-[180px]">
                      {point.label}
                    </span>
                    <span className="text-[12px] text-gray-700">
                      {point.value}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-entrata-tab-active cursor-pointer transition-colors">
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          ))}

          {contactPoints.length === 0 && (
            <div className="text-center py-8 text-gray-400 text-[12px]">
              No {activeView === "sms" ? "SMS numbers" : "email addresses"}{" "}
              configured for this property.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
