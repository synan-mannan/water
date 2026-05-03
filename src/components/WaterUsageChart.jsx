import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { mockMetrics } from "../data/mock";

const data = [
  { time: "00:00", usage: 1200 },
  { time: "04:00", usage: 1100 },
  { time: "08:00", usage: 1300 },
  { time: "12:00", usage: 1400 },
  { time: "16:00", usage: 1250 },
  { time: "20:00", usage: 1350 },
  { time: "24:00", usage: 1180 },
];

const WaterUsageChart = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-80">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Water Usage Over Time
        </h3>
        <span className="text-2xl font-bold text-water-600 dark:text-water-400">
          {mockMetrics.usage.toLocaleString()}L
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--gray-100))"
            vertical={false}
          />
          <XAxis
            dataKey="time"
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
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="usage"
            stroke="#0ea5e9"
            strokeWidth={3}
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="usage"
            stroke="#0ea5e9"
            fill="url(#gradient)"
            strokeWidth={0}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterUsageChart;
