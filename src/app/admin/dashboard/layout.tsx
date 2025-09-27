"use client";

import React from "react";
import {
  LayoutDashboard,
  FileText,
  Megaphone,
  User,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700"
    }`;

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-lg font-bold text-white">Barangay Admin</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className={linkClasses("/admin/dashboard")}>
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>

          <Link href="/admin/requests" className={linkClasses("/admin/requests")}>
            <FileText className="w-5 h-5" />
            Requests
          </Link>

          <Link
            href="/admin/announcements"
            className={linkClasses("/admin/announcements")}
          >
            <Megaphone className="w-5 h-5" />
            Announcements
          </Link>

          <Link href="/admin/profile" className={linkClasses("/admin/profile")}>
            <User className="w-5 h-5" />
            Profile
          </Link>
        </nav>

        {/* Footer (Logout button at the bottom) */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={() => {
              // TODO: add real logout logic (e.g., clear token, redirect)
              alert("Logging out...");
            }}
            className="w-full flex items-center gap-3 text-gray-300 hover:bg-red-600 px-3 py-2 rounded-lg transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
