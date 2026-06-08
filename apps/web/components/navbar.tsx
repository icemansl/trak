export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-800">
      <h1 className="text-2xl font-bold">TRAK</h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/watchlist">Watchlist</a>
      </div>

      <div className="flex gap-4">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}