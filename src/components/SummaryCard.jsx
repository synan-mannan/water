import {
  TrendingUp,
  TrendingDown,
  Droplets,
  Gauge,
  Activity,
  Users,
} from "lucide-react";

const iconMap = {
  usage: Droplets,
  recharge: Activity,
  sensors: Users,
  groundwater: Gauge,
};

const SummaryCard = ({ title, value, change, type }) => {
  const Icon = iconMap[type];
  const isPositive = change >= 0;

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
            {value}
          </p>
        </div>
        <div className="p-3 bg-gradient-to-br from-water-100 to-primary-100 dark:from-water-900/50 dark:to-primary-900/50 rounded-xl">
          <Icon size={24} className="text-water-600 dark:text-water-400" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <div
          className={`text-sm font-semibold px-2 py-1 rounded-full ${isPositive ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400"}`}
        >
          {isPositive ? (
            <TrendingUp size={14} className="inline mr-1" />
          ) : (
            <TrendingDown size={14} className="inline mr-1" />
          )}
          {change.toFixed(1)}%
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
          {isPositive ? "vs last week" : "vs last week"}
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
