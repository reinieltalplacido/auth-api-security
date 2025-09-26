export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Residents Management */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Residents</h2>
          <p className="text-gray-600 text-sm mb-4">
            View and manage resident records.
          </p>
          <a
            href="/admin/residents"
            className="text-blue-600 font-medium hover:underline"
          >
            Manage Residents →
          </a>
        </div>

        {/* Barangay Officials */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Officials</h2>
          <p className="text-gray-600 text-sm mb-4">
            Update barangay officials and their roles.
          </p>
          <a
            href="/admin/officials"
            className="text-blue-600 font-medium hover:underline"
          >
            Manage Officials →
          </a>
        </div>

        {/* Requests */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Requests</h2>
          <p className="text-gray-600 text-sm mb-4">
            Approve or reject service requests.
          </p>
          <a
            href="/admin/requests"
            className="text-blue-600 font-medium hover:underline"
          >
            View Requests →
          </a>
        </div>
      </div>
    </div>
  );
}
