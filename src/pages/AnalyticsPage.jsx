import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react";

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState("week");
  const [metric, setMetric] = useState("usage");

  const analyticsData = {
    usage: {
      current: 125430,
      previous: 111620,
      change: 12.3,
      unit: "Liters",
    },
    recharge: {
      current: 8450,
      previous: 8732,
      change: -3.2,
      unit: "L/hour",
    },
    efficiency: {
      current: 87.5,
      previous: 84.2,
      change: 3.3,
      unit: "%",
    },
    savings: {
      current: 15200,
      previous: 12800,
      change: 18.75,
      unit: "Liters",
    },
  };

  const dailyData = [
    { day: "Mon", usage: 112000, recharge: 8200 },
    { day: "Tue", usage: 118500, recharge: 8450 },
    { day: "Wed", usage: 121200, recharge: 8320 },
    { day: "Thu", usage: 125430, recharge: 8450 },
    { day: "Fri", usage: 119800, recharge: 8100 },
    { day: "Sat", usage: 95600, recharge: 7800 },
    { day: "Sun", usage: 88200, recharge: 8050 },
  ];

  const getCurrentData = () => analyticsData[metric];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 p-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                <RefreshCw size={18} />
                Refresh
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-water-500 text-white rounded-lg hover:bg-water-600 transition">
                <Download size={18} />
                Export Report
              </button>
            </div>
          </div>
          <p className="text-gray-600">Comprehensive water usage and performance analytics</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-8">
        {/* Time Range and Metric Selection */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setTimeRange("day")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  timeRange === "day"
                    ? "bg-water-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setTimeRange("week")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  timeRange === "week"
                    ? "bg-water-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setTimeRange("month")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  timeRange === "month"
                    ? "bg-water-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setTimeRange("year")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  timeRange === "year"
                    ? "bg-water-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Year
              </button>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} />
              <span className="text-sm">
                {timeRange === "day"
                  ? "Today"
                  : timeRange === "week"
                    ? "Last 7 days"
                    : timeRange === "month"
                      ? "Last 30 days"
                      : "Last 12 months"}
              </span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(analyticsData).map(([key, data]) => (
            <div
              key={key}
              onClick={() => setMetric(key)}
              className={`rounded-xl shadow-sm border p-6 cursor-pointer transition ${
                metric === key
                  ? "bg-water-50 border-water-300"
                  : "bg-white border-gray-200 hover:shadow-md"
              }`}
            >
              <p className="text-gray-600 text-sm font-medium capitalize mb-2">
                {key === "usage"
                  ? "Water Usage"
                  : key === "recharge"
                    ? "Recharge Rate"
                    : key === "efficiency"
                      ? "Efficiency"
                      : "Water Saved"}
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">
                    {data.current.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">{data.unit}</p>
                </div>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded ${
                    data.change >= 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {data.change >= 0 ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  <span className="text-xs font-semibold">
                    {Math.abs(data.change)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Daily Trends */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 size={20} className="text-water-500" />
              Daily Trends
            </h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {dailyData.map((data, idx) => {
                const maxValue = Math.max(...dailyData.map((d) => d.usage));
                const height = (data.usage / maxValue) * 100;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex justify-center">
                      <div
                        className="w-full bg-gradient-to-t from-water-500 to-water-400 rounded-t-lg transition hover:opacity-80"
                        style={{ height: `${height}%`, minHeight: "4px" }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">{data.day}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              Water Usage (Liters)
            </p>
          </div>

          {/* Comparison */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Period Comparison
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Current Period
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {getCurrentData().current.toLocaleString()}{" "}
                    {getCurrentData().unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-water-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Previous Period
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {getCurrentData().previous.toLocaleString()}{" "}
                    {getCurrentData().unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Change</span>
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
                      getCurrentData().change >= 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {getCurrentData().change >= 0 ? (
                      <TrendingUp size={16} />
                    ) : (
                      <TrendingDown size={16} />
                    )}
                    <span className="font-semibold">
                      {getCurrentData().change > 0 ? "+" : ""}
                      {getCurrentData().change}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Report Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Detailed Report
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">
                    Usage (L)
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">
                    Recharge (L/h)
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">
                    Efficiency
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {dailyData.map((data, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{data.day}</td>
                    <td className="py-3 px-4 text-gray-900">
                      {data.usage.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-gray-900">{data.recharge}</td>
                    <td className="py-3 px-4 text-gray-900">
                      {(87 + Math.random() * 5).toFixed(1)}%
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Normal
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
