export interface Property {
  id: string;
  name: string;
}

export interface ContactPoint {
  id: string;
  label: string;
  type: "email" | "sms";
  value: string;
  category: "RESIDENTS" | "PROSPECTS" | "VENDORS" | "APPLICANTS";
}

export const properties: Property[] = [
  { id: "1", name: "AMLI 8800" },
  { id: "2", name: "AMLI 8800 Retail" },
  { id: "3", name: "AMLI 900" },
  { id: "4", name: "AMLI 900 Retail" },
  { id: "5", name: "AMLI Addison" },
  { id: "6", name: "AMLI Aero" },
  { id: "7", name: "AMLI Arc" },
  { id: "8", name: "AMLI Art District" },
  { id: "9", name: "AMLI Art District Retail" },
  { id: "10", name: "AMLI Arts Center" },
  { id: "11", name: "AMLI Arts Center Retail" },
  { id: "12", name: "AMLI Atlantic Station" },
  { id: "13", name: "AMLI at Mueller" },
  { id: "14", name: "AMLI at Mueller Retail" },
  { id: "15", name: "AMLI at Seven Bridges" },
  { id: "16", name: "AMLI Bellevue Park" },
  { id: "17", name: "AMLI Buckhead" },
  { id: "18", name: "AMLI Cherry Creek" },
  { id: "19", name: "AMLI Covered Bridge" },
  { id: "20", name: "AMLI Dadeland" },
];

export const smsContactPoints: ContactPoint[] = [
  {
    id: "sms-1",
    label: "Maintenance Notification:",
    type: "sms",
    value: "SMS only - Default (7866604892)",
    category: "RESIDENTS",
  },
];

export const emailContactPoints: ContactPoint[] = [
  {
    id: "email-1",
    label: "Maintenance Notification:",
    type: "email",
    value: "maintenance@amli8800.com",
    category: "RESIDENTS",
  },
  {
    id: "email-2",
    label: "Lease Renewal:",
    type: "email",
    value: "renewals@amli8800.com",
    category: "RESIDENTS",
  },
  {
    id: "email-3",
    label: "General Communication:",
    type: "email",
    value: "info@amli8800.com",
    category: "PROSPECTS",
  },
];
