import { useState, useRef, useEffect } from "react";
import { Pencil, ChevronDown, X } from "lucide-react";
import type { ContactPoint } from "@/data/properties";

interface ContentAreaProps {
  activeView: "email" | "sms";
  contactPoints: ContactPoint[];
}

const smsOptions = [
  "SMS only - Default (6199012783)",
  "SMS only - Default (7866604892)",
  "SMS only - Custom (5551234567)",
];

function InfoPopover({
  description,
  onClose,
}: {
  description: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-[24px] z-50"
      style={{
        width: "320px",
        background: "#ffffff",
        border: "1px solid #d1d1d1",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        className="flex items-center justify-between px-[10px] py-[6px]"
        style={{ borderBottom: "1px solid #e3e3e3", background: "#f5f5f5" }}
      >
        <span className="text-[11px] font-bold" style={{ color: "#383838" }}>
          Info
        </span>
        <button
          onClick={onClose}
          className="cursor-pointer flex items-center justify-center"
          style={{ color: "#adadad", background: "none", border: "none" }}
        >
          <X className="w-[10px] h-[10px]" strokeWidth={2} />
        </button>
      </div>
      <div className="px-[10px] py-[8px]">
        <p
          className="m-0 text-[11px] leading-[1.5]"
          style={{ color: "#555555" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function ContentArea({ activeView, contactPoints }: ContentAreaProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState<Record<string, string>>({});
  const [openInfoId, setOpenInfoId] = useState<string | null>(null);

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

  function handleEdit() {
    const initial: Record<string, string> = {};
    contactPoints.forEach((cp) => {
      initial[cp.id] = cp.value;
    });
    setEditValues(initial);
    setIsEditing(true);
  }

  function handleCancel() {
    setIsEditing(false);
    setEditValues({});
  }

  function handleSave() {
    setIsEditing(false);
    setEditValues({});
  }

  return (
    <div
      className="flex-1 p-[20px] overflow-auto"
      style={{ background: "#ffffff", fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div style={{ background: "#f5f5f5", border: "1px solid #e3e3e3" }}>
        {/* Header row */}
        <div
          className="flex items-center justify-between px-[16px] py-[10px]"
          style={{ borderBottom: "1px solid #e3e3e3" }}
        >
          <h2 className="text-[14px] font-bold m-0" style={{ color: "#383838" }}>
            {title}
          </h2>
          {!isEditing && (
            <button
              onClick={handleEdit}
              className="flex items-center gap-[6px] text-[11px] cursor-pointer rounded-[14px] px-[12px] py-[4px]"
              style={{
                color: "#676767",
                background: "#f5f5f5",
                border: "1px solid #d1d1d1",
              }}
            >
              <Pencil className="w-[12px] h-[12px]" style={{ color: "#ffbb19" }} strokeWidth={2} />
              <span>{editLabel}</span>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="px-[16px] py-[12px]">
          {Object.entries(grouped).map(([category, points]) => (
            <div key={category} className="mb-[12px] last:mb-0">
              <h3
                className="text-[12px] font-bold m-0 pb-[6px] mb-[8px]"
                style={{ color: "#383838", borderBottom: "1px solid #e3e3e3" }}
              >
                {category}
              </h3>
              {points.map((point) => (
                <div
                  key={point.id}
                  className="flex items-center justify-between py-[6px] relative"
                  style={{ borderBottom: "1px solid #efefef" }}
                >
                  <div className="flex items-center">
                    <span
                      className="text-[11px] flex-shrink-0"
                      style={{
                        color: "#7a7a7a",
                        width: isEditing ? "auto" : "200px",
                        marginRight: isEditing ? "12px" : "0",
                        textAlign: isEditing ? "right" : "left",
                        minWidth: isEditing ? "180px" : "auto",
                      }}
                    >
                      {point.label}
                    </span>

                    {isEditing ? (
                      <div className="relative">
                        <select
                          value={editValues[point.id] || point.value}
                          onChange={(e) =>
                            setEditValues((prev) => ({
                              ...prev,
                              [point.id]: e.target.value,
                            }))
                          }
                          className="appearance-none pr-[24px] pl-[8px] py-[4px] text-[11px] rounded-[2px] cursor-pointer"
                          style={{
                            fontFamily: "Arial, Helvetica, sans-serif",
                            border: "1px solid #9a9a9a",
                            background: "#ffffff",
                            color: "#383838",
                            minWidth: "200px",
                            outline: "none",
                          }}
                        >
                          {(activeView === "sms" ? smsOptions : [point.value]).map(
                            (opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            )
                          )}
                        </select>
                        <ChevronDown
                          className="absolute right-[6px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] pointer-events-none"
                          style={{ color: "#878787" }}
                          strokeWidth={2}
                        />
                      </div>
                    ) : (
                      <span className="text-[11px]" style={{ color: "#383838" }}>
                        {point.value}
                      </span>
                    )}
                  </div>

                  <div className="relative flex-shrink-0">
                    <button
                      onClick={() =>
                        setOpenInfoId(openInfoId === point.id ? null : point.id)
                      }
                      className="w-[16px] h-[16px] rounded-[2px] flex items-center justify-center cursor-pointer"
                      style={{ border: "1px solid #c4ccd7", background: "#fdfdfd" }}
                      title="Info"
                    >
                      <span
                        className="text-[10px] font-bold leading-none"
                        style={{ color: "#7a8a9a" }}
                      >
                        i
                      </span>
                    </button>

                    {openInfoId === point.id && point.description && (
                      <InfoPopover
                        description={point.description}
                        onClose={() => setOpenInfoId(null)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {contactPoints.length === 0 && (
            <div
              className="text-center py-[20px] text-[11px]"
              style={{ color: "#adadad" }}
            >
              No {activeView === "sms" ? "SMS numbers" : "email addresses"}{" "}
              configured for this property.
            </div>
          )}
        </div>

        {/* Footer bar with Save / Cancel (edit mode only) */}
        {isEditing && (
          <div
            className="flex items-center justify-end px-[16px] py-[8px] gap-[10px]"
            style={{ background: "#ebebeb", borderTop: "1px solid #e1e1e1" }}
          >
            <button
              onClick={handleSave}
              className="px-[20px] py-[5px] text-[11px] font-bold rounded-[3px] cursor-pointer"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                background: "#56895e",
                color: "#ffffff",
                border: "none",
              }}
            >
              Save
            </button>
            <span className="text-[11px]" style={{ color: "#7a7a7a" }}>
              or
            </span>
            <button
              onClick={handleCancel}
              className="text-[11px] cursor-pointer"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "#56895e",
                background: "none",
                border: "none",
                textDecoration: "none",
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
