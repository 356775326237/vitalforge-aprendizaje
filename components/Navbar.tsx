export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          Vital<span className="text-green-500">Forge</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#products" className="hover:text-green-500 transition">
            Products
          </a>
          <a href="#dashboard" className="hover:text-green-500 transition">
            Results
          </a>
          <a href="#subscribe" className="hover:text-green-500 transition">
            Subscribe
          </a>
        </div>

        <button className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-400 transition">
          Shop Now
        </button>
      </nav>
    </header>
  );
}