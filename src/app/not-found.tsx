import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Sorry, the page you are looking for cannot be found.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-accent text-white rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
