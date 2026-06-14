export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-2xl font-bold">
            Vital<span className="text-green-500">Forge</span>
          </p>
          <p className="mt-2 text-gray-400">
            Built for strength. Engineered for performance.
          </p>
        </div>

        <div className="flex gap-6 text-gray-400">
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

        <p className="text-gray-500 text-sm">
          © 2026 VitalForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
