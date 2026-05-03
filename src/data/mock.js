export const mockMetrics = {
  usage: 125430,
  usageChange: 12.5,
  recharge: 8450,
  rechargeChange: -3.2,
  sensors: 24,
  sensorsChange: 1,
  groundwater: 2.45,
  groundwaterChange: -0.5,
};

export const mockSensors = [
  {
    id: "S001",
    location: "Well A1",
    status: "active",
    level: 2.3,
    updated: "2024-04-29T10:30:00",
  },
  {
    id: "S002",
    location: "Well B2",
    status: "offline",
    level: 1.8,
    updated: "2024-04-29T09:15:00",
  },
  {
    id: "S003",
    location: "Pump C3",
    status: "active",
    level: 2.7,
    updated: "2024-04-29T10:45:00",
  },
  // Add more...
];

export const mockAlerts = [
  { type: "warning", message: "Low groundwater at Well B2" },
  { type: "error", message: "Sensor S002 offline > 1hr" },
  { type: "warning", message: "High usage in Sector 3" },
];
