import { useState } from "react";
import { HeaderBar } from "@/components/HeaderBar";
import { PrimaryNav } from "@/components/PrimaryNav";
import { SecondaryNav } from "@/components/SecondaryNav";
import { PropertySidebar } from "@/components/PropertySidebar";
import { ToggleTabs } from "@/components/ToggleTabs";
import { ContentArea } from "@/components/ContentArea";
import {
  properties,
  smsContactPoints,
  emailContactPoints,
} from "@/data/properties";
import type { Property } from "@/data/properties";

function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property>(
    properties[0]
  );
  const [primaryTab, setPrimaryTab] = useState("Communication");
  const [secondaryTab, setSecondaryTab] = useState("From Addresses");
  const [activeView, setActiveView] = useState<"email" | "sms">("sms");

  const contactPoints =
    activeView === "sms" ? smsContactPoints : emailContactPoints;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <HeaderBar propertyName={selectedProperty.name} />
      <PrimaryNav activeTab={primaryTab} onTabChange={setPrimaryTab} />
      <SecondaryNav
        activeSubTab={secondaryTab}
        onSubTabChange={setSecondaryTab}
      />

      <div className="flex flex-1 overflow-hidden">
        <PropertySidebar
          properties={properties}
          selectedProperty={selectedProperty}
          onSelectProperty={setSelectedProperty}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <ToggleTabs activeView={activeView} onViewChange={setActiveView} />
          <ContentArea
            activeView={activeView}
            contactPoints={contactPoints}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
