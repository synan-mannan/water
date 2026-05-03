import {
  LayoutDashboard,
  Settings,
  BarChart3,
  FileText,
  MapPin,
  CircleAlert,
  Users,
  FileCheck,
  Gauge,
  Droplet,
  Info,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen p-6 sticky top-0 flex flex-col">
      {/* Logo & Branding */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-r from-water-500 to-primary-500 rounded-lg flex items-center justify-center">
            <Droplet size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">WaterDash</h2>
            <p className="text-xs text-gray-500">Monitoring System</p>
          </div>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
          <div className="w-10 h-10 bg-gradient-to-r from-water-500 to-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Users size={16} className="text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
            <p className="text-xs text-gray-500">Active</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        {/* Dashboard */}
        <Link
          to="/"
          className={`flex items-center space-x-3 p-3 rounded-xl font-medium group transition ${
            isActive("/")
              ? "bg-water-100 text-water-600"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <LayoutDashboard size={20} />
          <div className="flex-1 min-w-0">
            <span className="font-medium">Dashboard</span>
            <p className="text-xs text-gray-500 mt-0.5">Overview & metrics</p>
          </div>
        </Link>

        {/* Sensors */}
        <Link
          to="/sensors"
          className={`flex items-center space-x-3 p-3 rounded-xl group relative transition ${
            isActive("/sensors")
              ? "bg-water-100 text-water-600"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <MapPin size={20} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-medium">Sensors</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                12 online
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">Live monitoring</p>
          </div>
        </Link>

        {/* Analytics */}
        <Link
          to="/analytics"
          className={`flex items-center space-x-3 p-3 rounded-xl group relative transition ${
            isActive("/analytics")
              ? "bg-water-100 text-water-600"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <BarChart3 size={20} />
          <div className="flex-1 min-w-0">
            <span className="font-medium">Analytics</span>
            <div className="flex items-center gap-1 mt-1">
              <Gauge size={12} className="text-blue-500" />
              <span className="text-xs text-blue-600">Usage trends</span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">Charts & reports</p>
          </div>
        </Link>

        {/* Reports */}
        <Link
          to="/analytics"
          className={`flex items-center space-x-3 p-3 rounded-xl group relative transition ${
            isActive("/analytics")
              ? "bg-water-100 text-water-600"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <FileText size={20} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-medium">Reports</span>
              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">
                5 new
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">Monthly summaries</p>
          </div>
        </Link>

        {/* Alerts */}
        <Link
          to="/alerts"
          className={`flex items-center space-x-3 p-3 rounded-xl group relative transition ${
            isActive("/alerts")
              ? "bg-water-100 text-water-600"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <CircleAlert size={20} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-medium">Alerts</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                3 active
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Critical notifications
            </p>
          </div>
        </Link>

        {/* Settings */}
        <Link
          to="/settings"
          className={`flex items-center space-x-3 p-3 rounded-xl group relative transition ${
            isActive("/settings")
              ? "bg-water-100 text-water-600"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <Settings size={20} />
          <div className="flex-1 min-w-0">
            <span className="font-medium">Settings</span>
            <p className="text-xs text-gray-500 mt-0.5">
              Account & preferences
            </p>
          </div>
        </Link>
      </nav>

      {/* Footer Info Section */}
      <div className="mt-auto pt-6 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-2">
            <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-gray-900">System Status</p>
              <p className="text-xs text-gray-600 mt-1">All sensors online and functioning normally</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Last updated:</p>
          <p className="text-xs font-medium text-gray-700">2 minutes ago</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
