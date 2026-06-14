import Image from "next/image";
const products = [
  {
    name: "Forge Whey",
    benefit: "Muscle Growth",
    description: "Protein designed to support muscle growth and recovery.",
    price: "$39.99",
    image: "/forge-whey.png",
  },
  {
    name: "Forge Creatine",
    benefit: "Strength & Power",
    description: "Daily support for strength, power, and training output.",
    price: "$24.99",
    image: "/forge-creatine.png",
  },
  {
    name: "Forge Energy",
    benefit: "Energy & Focus",
    description: "Clean energy and focus for intense workouts.",
    price: "$29.99",
    image: "/forge-energy.png",
  },
];

export function Products() {
  return (
    <section 
    id="products"
    className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-green-500 font-semibold uppercase tracking-widest">
          Products
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Premium formulas for serious performance
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]"
            >
               <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="mb-6 rounded-xl"
/> 
              <p className="text-green-500 text-sm font-semibold">
                {product.benefit}
              </p>

              <h3 className="mt-3 text-2xl font-bold">{product.name}</h3>

              <p className="mt-3 text-gray-400">{product.description}</p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-3xl font-bold">{product.price}</span>

                <button className="bg-green-500 text-black px-5 py-3 rounded-lg font-semibold transition hover:bg-green-400">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}