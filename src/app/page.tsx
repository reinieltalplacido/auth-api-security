import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 font-sans">
      
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
        Welcome
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
        Choose an option to continue
      </p>

    
      <div className="flex gap-6">
        <Link
          href="/login"
          className="px-8 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-8 py-3 rounded-lg bg-white text-blue-600 border border-blue-600 text-lg font-semibold shadow-md hover:bg-blue-50 transition"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
