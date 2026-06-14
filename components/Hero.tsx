import Image from "next/image";
export function Hero() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center pt-28 md:pt-0">
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div>
            <p className="text-green-500 font-semibold uppercase tracking-widest">
            VitalForge
            </p>

            <h1 className="mt-4 text-5xl font-bold max-w-xl leading-tight">
            Built For Strength.
            Engineered For Performance.            
            </h1>
          </div>

          <p className="mt-4 text-gray-400">
            Science-backed nutrition designed to maximize strength, recovery, and athletic performance.
          </p>

          <button className="mt-8 bg-green-500 text-black px-12 py-6 rounded-lg font-semibold">
            Shop Now
          </button>
        </div>

        <div className="flex justify-center">
        <Image
            src="/vitalforge-product 2.png"
            alt="VitalForge Product"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </section>
    </main>
  );
}