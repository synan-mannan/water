import { AlertCircle, AlertTriangle } from "lucide-react";
import { mockAlerts } from "../data/mock";

const AlertsPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockAlerts.map((alert, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl shadow-sm border-l-4 ${
            alert.type === "error"
              ? "bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-400"
              : "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 dark:border-yellow-400"
          }`}
        >
          <div className="flex items-start space-x-3">
            {alert.type === "error" ? (
              <AlertCircle
                size={24}
                className="text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5"
              />
            ) : (
              <AlertTriangle
                size={24}
                className="text-yellow-500 dark:text-yellow-400 flex-shrink-0 mt-0.5"
              />
            )}
            <div>
              <p className="text-sm font-medium text-black">{alert.message}</p>
              <p className="text-xs text-black mt-1">Check sensor logs</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertsPanel;
