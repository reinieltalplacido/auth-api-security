"use client";

import { Megaphone } from "lucide-react";

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Megaphone className="w-6 h-6 text-blue-600" />
        Announcements
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600">
          This is where you can manage barangay announcements.
        </p>
        {/* Later we’ll add a table or list of announcements here */}
      </div>
    </div>
  );
}
