"use client";

import Link from "next/link";
import { useAuth } from "@/src/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-800 bg-black text-white">
      <Link href="/" className="text-2xl font-bold">
        TRAK
      </Link>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/watchlist">Watchlist</Link>
      </div>

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span>{user.username}</span>

            <button
              onClick={logout}
              className="cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}