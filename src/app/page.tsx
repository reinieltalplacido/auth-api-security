// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 font-sans px-4">
      {/* Title */}
      <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
        Barangay Information System
      </h1>

      {/* Subtitle */}
      <p className="text-gray-700 dark:text-gray-300 mb-12 text-lg text-center max-w-xl">
        Manage barangay records, announcements, and resident services in one
        place. Login or Signup to get started.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/login"
          className="px-8 py-3 rounded-xl bg-blue-600 text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-8 py-3 rounded-xl bg-white text-blue-600 border border-blue-600 text-lg font-semibold shadow-md hover:bg-blue-50 transition dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Signup
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Barangay Information System
      </footer>
    </div>
  );
}
