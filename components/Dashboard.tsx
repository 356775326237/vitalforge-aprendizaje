export function Dashboard() {
  return (
    <section 
    id="dashboard"
    className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-green-500 font-semibold uppercase tracking-widest">
          Results
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Performance You Can Measure
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2 bg-zinc-900 rounded-2xl p-10 border border-zinc-800 flex flex-col justify-center">
            <p className="text-7xl font-bold text-green-500">
              +18%
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Strength Gain
            </h3>

            <p className="mt-3 text-gray-400">
              Average increase in strength reported by athletes using the VitalForge system.
            </p>

            <div className="mt-8 flex items-end gap-3 h-32">
                {[35, 45, 55, 65, 78, 88].map((height, index) => (
            <div
                key={index}
                className="flex-1 bg-green-500 rounded-t-lg"
                style={{ height: `${height}%` }}
    />
  ))}
</div>
          </div>

          <div className="flex flex-col gap-6">

            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <p className="text-4xl font-bold">-34%</p>
              <p className="mt-2 text-gray-400">
                Recovery Time
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <p className="text-4xl font-bold">92</p>
              <p className="mt-2 text-gray-400">
                Energy Score
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <p className="text-4xl font-bold">128</p>
              <p className="mt-2 text-gray-400">
                Day Streak
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}