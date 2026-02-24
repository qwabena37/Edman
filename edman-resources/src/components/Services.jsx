export default function Services() {
  return (
    <section id="services" className="py-20 bg-edmanGray">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-edmanGold mb-12">
          Our Core Service Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-edmanDark p-8 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-edmanGold mb-4">
              IT Consumables & Accessories
            </h3>
            <p className="text-gray-400">
              Reliable supply of essential IT materials supporting institutional
              technology infrastructure continuity.
            </p>
          </div>

          <div className="bg-edmanDark p-8 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-edmanGold mb-4">
              Structured Office Supply Packs
            </h3>
            <p className="text-gray-400">
              Organized and audit-aligned office consumable packages designed
              for operational efficiency.
            </p>
          </div>

          <div className="bg-edmanDark p-8 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-edmanGold mb-4">
              Operational Continuity Support
            </h3>
            <p className="text-gray-400">
              Structured support systems ensuring uninterrupted institutional
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}