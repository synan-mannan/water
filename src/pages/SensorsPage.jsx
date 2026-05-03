import { useState } from "react";
import {
  Search,
  Circle,
  MapPin,
  Activity,
  Clock,
  AlertCircle,
  Check,
  Plus,
  Settings,
  Download,
} from "lucide-react";
import { mockSensors } from "../data/mock";

const SensorsPage = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredSensors = mockSensors.filter((sensor) => {
    const matchesSearch =
      sensor.id.toLowerCase().includes(search.toLowerCase()) ||
      sensor.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || sensor.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    return status === "active"
      ? "text-green-600 bg-green-100"
      : "text-red-600 bg-red-100";
  };

  const getStatusIcon = (status) => {
    return status === "active" ? (
      <Check size={16} className="text-green-600" />
    ) : (
      <AlertCircle size={16} className="text-red-600" />
    );
  };

  const activeSensors = mockSensors.filter((s) => s.status === "active").length;
  const offlineSensors = mockSensors.filter((s) => s.status === "offline").length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 p-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Sensors</h1>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                <Download size={18} />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-water-500 text-white rounded-lg hover:bg-water-600 transition">
                <Plus size={18} />
                Add Sensor
              </button>
            </div>
          </div>
          <p className="text-gray-600">Monitor and manage all water sensors</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Sensors</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {mockSensors.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity size={24} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {activeSensors}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Check size={24} className="text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Offline</p>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {offlineSensors}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle size={24} className="text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search by ID or location..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-water-500 focus:border-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "all"
                    ? "bg-water-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus("active")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "active"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilterStatus("offline")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "offline"
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Offline
              </button>
            </div>
          </div>
        </div>

        {/* Sensors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSensors.map((sensor) => (
            <div
              key={sensor.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-r from-water-500 to-primary-500 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900">{sensor.id}</p>
                    <p className="text-sm text-gray-500">{sensor.location}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full flex items-center gap-1.5 ${getStatusColor(sensor.status)}`}>
                  {getStatusIcon(sensor.status)}
                  <span className="text-xs font-medium capitalize">
                    {sensor.status}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Water Level</span>
                  <span className="font-semibold text-gray-900">
                    {sensor.level}m
                  </span>
                </div>
              </div>

              <div className="flex items-center text-xs text-gray-500 mb-4">
                <Clock size={14} className="mr-1.5" />
                Last updated: {new Date(sensor.updated).toLocaleTimeString()}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-water-50 text-water-600 rounded-lg hover:bg-water-100 transition font-medium text-sm">
                  View
                </button>
                <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium text-sm">
                  <Settings size={14} className="inline mr-1" />
                  Config
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSensors.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <AlertCircle size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600">No sensors found</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SensorsPage;
