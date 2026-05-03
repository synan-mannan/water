import SummaryCard from "./SummaryCard";
import { mockMetrics } from "../data/mock";

const SummaryCards = () => {
  const cards = [
    {
      title: "Total Water Usage",
      value: mockMetrics.usage.toLocaleString(),
      change: mockMetrics.usageChange,
      type: "usage",
      unit: "Liters",
    },
    {
      title: "Recharge Rate",
      value: mockMetrics.recharge.toLocaleString(),
      change: mockMetrics.rechargeChange,
      type: "recharge",
      unit: "L/hour",
    },
    {
      title: "Active Sensors",
      value: mockMetrics.sensors,
      change: mockMetrics.sensorsChange,
      type: "sensors",
    },
    {
      title: "Groundwater Level",
      value: `${mockMetrics.groundwater}m`,
      change: mockMetrics.groundwaterChange,
      type: "groundwater",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <SummaryCard key={index} {...card} />
      ))}
    </div>
  );
};

export default SummaryCards;
