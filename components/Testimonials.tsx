const testimonials = [
  {
    name: "Marcus R.",
    role: "Strength Athlete",
    comment:
      "I felt stronger in the gym after only a few weeks. My recovery improved and I was able to train harder without feeling exhausted.",
  },
  {
    name: "Daniel P.",
    role: "Gym Enthusiast",
    comment:
    "My energy levels stayed consistent throughout my workouts and I felt more focused during every session.",
  },
  {
    name: "Alex T.",
    role: "Personal Trainer",
    comment:
    "As a trainer, I noticed better recovery and performance from my athletes after incorporating VitalForge into their routine.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-green-500 font-semibold uppercase tracking-widest">
          Testimonials
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Trusted by athletes chasing real progress
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800"
            >
              <p className="text-green-500 text-xl">★★★★★</p>

              <p className="mt-6 text-gray-300">
                “{testimonial.comment}”
              </p>

              <div className="mt-8">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}