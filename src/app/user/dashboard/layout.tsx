export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col">
        <div className="px-6 py-4 border-b border-green-600">
          <h1 className="text-2xl font-bold">User Panel</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <a
            href="/user/dashboard"
            className="block px-3 py-2 rounded-lg hover:bg-green-600"
          >
            Dashboard
          </a>
          <a
            href="/user/register"
            className="block px-3 py-2 rounded-lg hover:bg-green-600"
          >
            Register
          </a>
          <a
            href="/user/profile"
            className="block px-3 py-2 rounded-lg hover:bg-green-600"
          >
            Profile
          </a>
          <a
            href="/user/notifications"
            className="block px-3 py-2 rounded-lg hover:bg-green-600"
          >
            Notifications
          </a>
        </nav>
        <div className="px-6 py-4 border-t border-green-600">
          <a
            href="/login"
            className="block bg-white text-green-700 text-center py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
