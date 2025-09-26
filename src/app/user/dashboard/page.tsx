export default function UserDashboardPage() {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        👤 User Dashboard
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Welcome! From here you can register, update your profile, and check
        notifications.
      </p>

      {/* Example Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-green-100 dark:bg-green-900 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">
            ➕ Register
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Register household members or barangay services.
          </p>
        </div>

        <div className="p-6 bg-blue-100 dark:bg-blue-900 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200">
            👤 Profile
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your personal details and account settings.
          </p>
        </div>

        <div className="p-6 bg-yellow-100 dark:bg-yellow-900 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200">
            🔔 Notifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            View announcements and barangay updates.
          </p>
        </div>
      </div>
    </div>
  );
}
