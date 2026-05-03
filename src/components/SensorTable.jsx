import { useState } from "react";
import { Search, Circle } from "lucide-react";
import { mockSensors } from "../data/mock";

const SensorTable = () => {
  const [search, setSearch] = useState("");

  const filteredSensors = mockSensors.filter(
    (sensor) =>
      sensor.id.toLowerCase().includes(search.toLowerCase()) ||
      sensor.location.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400";
      case "offline":
        return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-400";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Sensor Status
        </h3>
        <div className="relative flex-1 max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search sensors..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-water-500 focus:border-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-4 font-semibold text-gray-900 dark:text-white">
                Sensor ID
              </th>
              <th className="text-left py-4 font-semibold text-gray-900 dark:text-white">
                Location
              </th>
              <th className="text-left py-4 font-semibold text-gray-900 dark:text-white">
                Status
              </th>
              <th className="text-left py-4 font-semibold text-gray-900 dark:text-white">
                Water Level
              </th>
              <th className="text-left py-4 font-semibold text-gray-900 dark:text-white">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredSensors.map((sensor, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="py-4 font-mono text-water-600 dark:text-water-400">
                  {sensor.id}
                </td>
                <td className="py-4">{sensor.location}</td>
                <td className="py-4">
                  <span
                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sensor.status)}`}
                  >
                    <Circle size={10} className="inline mr-1" />
                    {sensor.status.toUpperCase()}
                  </span>
                </td>
                <td className="py-4 font-semibold">{sensor.level}m</td>
                <td className="py-4 text-sm text-gray-500 dark:text-gray-400">
                  {new Date(sensor.updated).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SensorTable;
