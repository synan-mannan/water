// Mock Map Section - Simple SVG representation
const MapSection = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Sensor Locations
        </h3>
        <button className="px-4 py-2 bg-water-500 hover:bg-water-600 text-white rounded-lg text-sm font-medium transition-colors">
          View Full Map
        </button>
      </div>
      <div className="relative h-80 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
        <svg viewBox="0 0 400 250" className="w-full h-full">
          {/* Background */}
          <rect width="400" height="250" fill="currentColor" opacity="0.1" />

          {/* Landmasses */}
          <path
            d="M50 150 Q100 120 150 160 Q200 130 250 160 Q300 140 350 170 L350 250 L0 250 Z"
            fill="#10b981"
            opacity="0.6"
          />

          {/* Wells/Sensors */}
          <circle
            cx="100"
            cy="160"
            r="8"
            fill="#0ea5e9"
            stroke="white"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              values="8;10;8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="200"
            cy="150"
            r="8"
            fill="#ef4444"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="300"
            cy="165"
            r="8"
            fill="#0ea5e9"
            stroke="white"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              values="8;10;8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Labels */}
          <text x="95" y="175" fontSize="12" fill="white" fontWeight="bold">
            Well A1
          </text>
          <text x="190" y="175" fontSize="12" fill="white" fontWeight="bold">
            Well B2
          </text>
          <text x="290" y="175" fontSize="12" fill="white" fontWeight="bold">
            Pump C3
          </text>
        </svg>
        <div className="absolute bottom-4 left-6 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-lg text-sm shadow-lg">
          🟢 Active • 🔴 Offline
        </div>
      </div>
    </div>
  );
};

export default MapSection;
