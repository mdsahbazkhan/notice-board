import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-gray-900 transition-colors hover:text-blue-600"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
            📋
          </span>
          Notice Board
        </Link>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            All Notices
          </Link>
          <Link
            href="/create"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-95"
          >
            + Create Notice
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 sm:hidden"
        >
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-gray-200 bg-white px-6 py-3 sm:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            All Notices
          </Link>
          <Link
            href="/create"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            + Create Notice
          </Link>
        </div>
      )}
    </header>
  );
}
