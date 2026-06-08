import Link from "next/link";

export default function Navbar() {
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

      <div className="flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}