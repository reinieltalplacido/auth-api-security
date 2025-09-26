export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Barangay Portal</h1>
        <nav className="space-x-6">
          <a href="/client" className="hover:underline">Dashboard</a>
          <a href="/client/requests" className="hover:underline">Requests</a>
          <a href="/client/announcements" className="hover:underline">Announcements</a>
          <a href="/client/profile" className="hover:underline">Profile</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
