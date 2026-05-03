import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { mockMetrics } from "../data/mock";

const data = [
  { category: "Recharge", value: mockMetrics.recharge },
  { category: "Consumption", value: mockMetrics.recharge * 1.2 },
];

const COLORS = ["#10b981", "#ef4444"];

const RechargeChart = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-80">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recharge vs Consumption
        </h3>
        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          {mockMetrics.recharge}L/h
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--gray-100))"
            vertical={false}
          />
          <XAxis
            dataKey="category"
            stroke="hsl(var(--gray-500))"
            axisLine={false}
            tickLine={false}
            tickMargin={12}
          />
          <YAxis
            stroke="hsl(var(--gray-500))"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
          />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RechargeChart;
