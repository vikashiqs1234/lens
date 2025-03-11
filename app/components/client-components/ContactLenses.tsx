// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function ContactLenses() {
  const brands = [
    "Aqualens",
    "Bausch Lomb",
    "Soflens",
    "Acuvue",
    "Iconnect",
    "Alcon"
  ];

  const disposability = [
    "Monthly",
    "Day & Night",
    "Daily",
    "Yearly",
    "Bi-weekly"
  ];

  const powers = [
    "Spherical - (CYL-0.5)",
    "Spherical + (CYL-0.5)",
    "Cylindrical Power(>0.75)",
    "Toric Power"
  ];

  const colors = [
    "Green",
    "Blue",
    "Brown",
    "Turquoise",
    "View all colors"
  ];

  const solutions = [
    "Small",
    "Large",
    "View all solutions"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Lens Comparison</title>
        <meta name="description" content="Compare different contact lens options" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="border-b border-gray-200">
          <div className="grid grid-cols-5 text-gray-900 font-medium pb-4">
            <div>Brands</div>
            <div>Explore By Disposability</div>
            <div>Explore By Power</div>
            <div>Explore By Color</div>
            <div>Solution</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-5 gap-4">
            {/* Brands Column */}
            <div className="space-y-4">
              {brands.map((brand, index) => (
                <div key={index} className="text-gray-500">{brand}</div>
              ))}
            </div>

            {/* Disposability Column */}
            <div className="space-y-4">
              {disposability.map((item, index) => (
                <div key={index} className="text-gray-500">{item}</div>
              ))}
            </div>

            {/* Power Column */}
            <div className="space-y-4">
              {powers.map((power, index) => (
                <div key={index} className="text-gray-500">{power}</div>
              ))}
            </div>

            {/* Color Column */}
            <div className="space-y-4">
              {colors.map((color, index) => (
                <div key={index} className="text-gray-500">{color}</div>
              ))}
            </div>

            {/* Solution Column */}
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="text-gray-500">{solution}</div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}