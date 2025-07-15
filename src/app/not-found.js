import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">Oops! The page you're looking for doesn't exist or has been moved.</p>
      
      <Link
        href="/"
        className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        ⬅️ Go back to Homepage
      </Link>
    </main>
  );
}
