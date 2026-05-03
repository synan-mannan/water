import { useState } from "react";
import {
  AlertTriangle,
  AlertCircle,
  Check,
  Trash2,
  Bell,
  Clock,
  MapPin,
  Settings,
  ChevronDown,
  Archive,
  Filter,
} from "lucide-react";

const AlertsPage = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "error",
      severity: "critical",
      title: "Sensor S002 Offline",
      message: "Sensor S002 (Well B2) has been offline for more than 1 hour",
      location: "Well B2",
      time: new Date(Date.now() - 65 * 60000), // 65 minutes ago
      read: false,
    },
    {
      id: 2,
      type: "warning",
      severity: "high",
      title: "Low Groundwater Level",
      message: "Groundwater level at critical threshold - 1.8m detected",
      location: "Well A1",
      time: new Date(Date.now() - 35 * 60000), // 35 minutes ago
      read: false,
    },
    {
      id: 3,
      type: "warning",
      severity: "medium",
      title: "High Water Usage",
      message: "Unusual spike in water usage detected in Sector 3 - 45% above average",
      location: "Sector 3",
      time: new Date(Date.now() - 15 * 60000), // 15 minutes ago
      read: false,
    },
    {
      id: 4,
      type: "info",
      severity: "low",
      title: "Maintenance Scheduled",
      message: "Routine maintenance scheduled for Sensor S005 on 2024-05-05",
      location: "Well C3",
      time: new Date(Date.now() - 2 * 60 * 60000), // 2 hours ago
      read: true,
    },
    {
      id: 5,
      type: "success",
      severity: "low",
      title: "System Online",
      message: "All sensors are now online and functioning normally",
      location: "System-wide",
      time: new Date(Date.now() - 4 * 60 * 60000), // 4 hours ago
      read: true,
    },
  ]);

  const [filterSeverity, setFilterSeverity] = useState("all");
  const [filterRead, setFilterRead] = useState("unread");

  const filteredAlerts = alerts.filter((alert) => {
    const severityMatch =
      filterSeverity === "all" || alert.severity === filterSeverity;
    const readMatch =
      filterRead === "all" ||
      (filterRead === "unread" && !alert.read) ||
      (filterRead === "read" && alert.read);
    return severityMatch && readMatch;
  });

  const getAlertColor = (type) => {
    switch (type) {
      case "error":
        return "bg-red-50 border-red-200 text-red-900";
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-900";
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-900";
      case "success":
        return "bg-green-50 border-green-200 text-green-900";
      default:
        return "bg-gray-50 border-gray-200 text-gray-900";
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "error":
        return (
          <AlertTriangle size={20} className="text-red-600 flex-shrink-0" />
        );
      case "warning":
        return (
          <AlertCircle size={20} className="text-yellow-600 flex-shrink-0" />
        );
      case "info":
        return <Bell size={20} className="text-blue-600 flex-shrink-0" />;
      case "success":
        return <Check size={20} className="text-green-600 flex-shrink-0" />;
      default:
        return <Bell size={20} className="text-gray-600 flex-shrink-0" />;
    }
  };

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const markAsRead = (id) => {
    setAlerts(alerts.map((a) => (a.id === id ? { ...a, read: true } : a)));
  };

  const deleteAlert = (id) => {
    setAlerts(alerts.filter((a) => a.id !== id));
  };

  const formatTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 60000); // minutes
    if (diff < 1) return "Just now";
    if (diff < 60) return `${diff}m ago`;
    const hours = Math.floor(diff / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const unreadCount = alerts.filter((a) => !a.read).length;
  const criticalCount = alerts.filter(
    (a) => a.severity === "critical" && !a.read
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 p-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Alerts</h1>
              {unreadCount > 0 && (
                <p className="text-red-600 text-sm font-medium mt-1">
                  {unreadCount} unread {criticalCount > 0 && `(${criticalCount} critical)`}
                </p>
              )}
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                <Archive size={18} />
                Archive All
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-water-500 text-white rounded-lg hover:bg-water-600 transition">
                <Settings size={18} />
                Settings
              </button>
            </div>
          </div>
          <p className="text-gray-600">Monitor system alerts and notifications</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Alerts</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {alerts.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Bell size={24} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Unread</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">
                  {unreadCount}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertCircle size={24} className="text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Critical</p>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {criticalCount}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle size={24} className="text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Resolved</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {alerts.filter((a) => a.read).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Check size={24} className="text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex gap-2">
              <button
                onClick={() => setFilterRead("all")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterRead === "all"
                    ? "bg-water-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterRead("unread")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterRead === "unread"
                    ? "bg-water-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Unread
              </button>
              <button
                onClick={() => setFilterRead("read")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterRead === "read"
                    ? "bg-water-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Read
              </button>
            </div>

            <div className="flex gap-2 ml-auto">
              <button
                onClick={() => setFilterSeverity("all")}
                className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
                  filterSeverity === "all"
                    ? "bg-gray-200 text-gray-900"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Severities
              </button>
              <button
                onClick={() => setFilterSeverity("critical")}
                className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
                  filterSeverity === "critical"
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Critical
              </button>
            </div>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`border-l-4 rounded-lg p-6 transition ${getAlertColor(alert.type)} ${!alert.read ? "shadow-md" : "opacity-75"}`}
              style={{
                borderLeftColor:
                  alert.type === "error"
                    ? "#dc2626"
                    : alert.type === "warning"
                      ? "#f59e0b"
                      : alert.type === "info"
                        ? "#3b82f6"
                        : "#10b981",
              }}
            >
              <div className="flex gap-4">
                <div className="mt-0.5">{getAlertIcon(alert.type)}</div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-lg">
                          {alert.title}
                        </h3>
                        {!alert.read && (
                          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        )}
                      </div>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getSeverityBadge(alert.severity)}`}
                      >
                        {alert.severity.charAt(0).toUpperCase() +
                          alert.severity.slice(1)}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm mb-3">{alert.message}</p>

                  <div className="flex items-center gap-4 text-xs opacity-75">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {alert.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {formatTime(alert.time)}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  {!alert.read && (
                    <button
                      onClick={() => markAsRead(alert.id)}
                      className="p-2 hover:bg-gray-200/50 rounded-lg transition"
                      title="Mark as read"
                    >
                      <Check size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => deleteAlert(alert.id)}
                    className="p-2 hover:bg-red-200/50 text-red-600 rounded-lg transition"
                    title="Delete alert"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <Check size={48} className="mx-auto text-green-300 mb-4" />
            <p className="text-gray-600 font-medium">No alerts found</p>
            <p className="text-gray-500 text-sm">All systems operating normally</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AlertsPage;
