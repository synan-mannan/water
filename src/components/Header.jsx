import { Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-water-500 to-primary-500 bg-clip-text text-transparent">
            Water Monitoring Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Aquifer Recharge & Usage Insights
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 bg-gradient-to-r from-water-500 to-primary-500 rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
