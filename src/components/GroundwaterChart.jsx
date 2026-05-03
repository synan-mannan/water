import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { mockMetrics } from "../data/mock";

const data = [
  { date: "Day 1", level: 2.6 },
  { date: "Day 2", level: 2.5 },
  { date: "Day 3", level: 2.4 },
  { date: "Day 4", level: 2.45 },
  { date: "Day 5", level: 2.3 },
  { date: "Day 6", level: 2.45 },
  { date: "Day 7", level: mockMetrics.groundwater },
];

const GroundwaterChart = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-80">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Groundwater Level Trends
        </h3>
        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          {mockMetrics.groundwater}m
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="groundwaterGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--gray-100))"
            vertical={false}
          />
          <XAxis
            dataKey="date"
            stroke="hsl(var(--gray-500))"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
          />
          <YAxis
            stroke="hsl(var(--gray-500))"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            unit="m"
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="level"
            stroke="#10b981"
            strokeWidth={3}
            fill="url(#groundwaterGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GroundwaterChart;
