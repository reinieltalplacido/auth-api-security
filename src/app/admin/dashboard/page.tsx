"use client";

import { useState } from "react";
import {
  DollarSign,
  Users,
  Activity,
  TrendingUp,
  UserPlus,
  FileText,
  Home,
  Calendar,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for the graph
const data = [
  { date: "Apr 7", visitors: 200 },
  { date: "Apr 13", visitors: 350 },
  { date: "Apr 19", visitors: 220 },
  { date: "Apr 26", visitors: 400 },
  { date: "May 3", visitors: 300 },
  { date: "May 10", visitors: 500 },
  { date: "May 17", visitors: 380 },
  { date: "May 24", visitors: 450 },
  { date: "Jun 1", visitors: 420 },
  { date: "Jun 8", visitors: 600 },
  { date: "Jun 15", visitors: 550 },
  { date: "Jun 22", visitors: 700 },
  { date: "Jun 30", visitors: 650 },
];

export default function AdminDashboard() {
  const [filter, setFilter] = useState("3m");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Revenue */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h2 className="text-2xl font-bold text-gray-800">$1,250.00</h2>
              <p className="text-green-600 text-sm mt-1">+12.5% this month</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </div>
        </div>

        {/* Customers */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">New Residents</p>
              <h2 className="text-2xl font-bold text-gray-800">1,234</h2>
              <p className="text-red-600 text-sm mt-1">-20% this period</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        {/* Active Accounts */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Accounts</p>
              <h2 className="text-2xl font-bold text-gray-800">45,678</h2>
              <p className="text-green-600 text-sm mt-1">+12.5% growth</p>
            </div>
            <Activity className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        {/* Growth Rate */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Growth Rate</p>
              <h2 className="text-2xl font-bold text-gray-800">4.5%</h2>
              <p className="text-green-600 text-sm mt-1">Steady increase</p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Total Residents
          </h2>
          <div className="space-x-2">
            <button
              onClick={() => setFilter("3m")}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === "3m"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Last 3 months
            </button>
            <button
              onClick={() => setFilter("30d")}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === "30d"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Last 30 days
            </button>
            <button
              onClick={() => setFilter("7d")}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === "7d"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Last 7 days
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 text-left bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <UserPlus className="text-blue-500" size={20} />
              <div>
                <div className="font-medium">Register Resident</div>
                <div className="text-xs text-gray-500">Add new resident</div>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-3 text-left bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <FileText className="text-green-500" size={20} />
              <div>
                <div className="font-medium">Issue Certificate</div>
                <div className="text-xs text-gray-500">Generate documents</div>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-3 text-left bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Home className="text-purple-500" size={20} />
              <div>
                <div className="font-medium">Property Records</div>
                <div className="text-xs text-gray-500">Manage properties</div>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-3 text-left bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Calendar className="text-orange-500" size={20} />
              <div>
                <div className="font-medium">Schedule Events</div>
                <div className="text-xs text-gray-500">Community events</div>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Recent Activities
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">
                  New resident registered
                </div>
                <div className="text-xs text-gray-500">
                  Juan Dela Cruz - Purok 3
                </div>
              </div>
              <div className="text-xs text-gray-400">5 min ago</div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">
                  Barangay clearance issued
                </div>
                <div className="text-xs text-gray-500">
                  Maria Santos - Certificate #BC-2024-0156
                </div>
              </div>
              <div className="text-xs text-gray-400">12 min ago</div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">
                  Community meeting scheduled
                </div>
                <div className="text-xs text-gray-500">
                  Monthly assembly - October 15, 2024
                </div>
              </div>
              <div className="text-xs text-gray-400">1 hour ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
