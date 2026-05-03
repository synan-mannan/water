import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import WaterUsageChart from "./components/WaterUsageChart";
import RechargeChart from "./components/RechargeChart";
import GroundwaterChart from "./components/GroundwaterChart";
import SensorTable from "./components/SensorTable";
import AlertsPanel from "./components/AlertsPanel";
import MapSection from "./components/MapSection";
import SensorsPage from "./pages/SensorsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AlertsPage from "./pages/AlertsPage";
import { mockMetrics } from "./data/mock";
import "./App.css"; // Keep import but empty file

const DashboardPage = ({ metrics }) => (
  <>
    {/* Summary Cards */}
    <SummaryCards />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Charts */}
      <div className="space-y-6">
        <WaterUsageChart />
        <RechargeChart />
      </div>
      <div className="space-y-6">
        <GroundwaterChart />
        <SensorTable />
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <AlertsPanel />
      <MapSection />
    </div>
  </>
);

function App() {
  const [metrics, setMetrics] = useState(mockMetrics);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        usage: prev.usage + (Math.random() - 0.5) * 100,
        groundwater: Math.max(
          1.5,
          prev.groundwater + (Math.random() - 0.5) * 0.05,
        ),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          <div className="flex-1 flex flex-col">
            {/* Header */}
            <Header />

            <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
              <Routes>
                <Route path="/" element={<DashboardPage metrics={metrics} />} />
                <Route path="/sensors" element={<SensorsPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
