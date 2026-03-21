import { motion } from "framer-motion";
import { FaLaptop, FaBoxOpen, FaCogs } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-edmanGray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-edmanGold mb-6"
        >
          Our Core Service Areas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg"
        >
          We provide structured, reliable, and performance-driven supply solutions
          tailored to support institutional efficiency, compliance, and continuity.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Service 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-edmanDark rounded-2xl shadow-xl overflow-hidden border border-gray-800"
          >
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="IT Consumables"
              className="w-full h-52 object-cover"
            />

            <div className="p-8">
              <div className="flex justify-center mb-4">
                <FaLaptop className="text-edmanGold text-3xl" />
              </div>

              <h3 className="text-xl font-semibold text-edmanGold mb-4">
                IT Consumables & Accessories
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Reliable supply of essential IT materials supporting institutional
                technology infrastructure continuity.
              </p>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-edmanDark rounded-2xl shadow-xl overflow-hidden border border-gray-800"
          >
            <img
              src="./images/officeS.PNG"
              alt="Office Supplies"
              className="w-full h-52 object-cover"
            />

            <div className="p-8">
              <div className="flex justify-center mb-4">
                <FaBoxOpen className="text-edmanGold text-3xl" />
              </div>

              <h3 className="text-xl font-semibold text-edmanGold mb-4">
                Structured Office Supply Packs
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Organized and audit-aligned office consumable packages designed
                for operational efficiency.
              </p>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-edmanDark rounded-2xl shadow-xl overflow-hidden border border-gray-800"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Operational Support"
              className="w-full h-52 object-cover"
            />

            <div className="p-8">
              <div className="flex justify-center mb-4">
                <FaCogs className="text-edmanGold text-3xl" />
              </div>

              <h3 className="text-xl font-semibold text-edmanGold mb-4">
                Operational Continuity Support
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Structured support systems ensuring uninterrupted institutional
                operations.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Highlight Banner */}
        <div className="mt-20">
          <div className="bg-edmanDark rounded-2xl p-10 shadow-2xl border border-gray-800 max-w-5xl mx-auto">
            <h3 className="text-edmanGold text-2xl font-semibold mb-4">
              Delivering More Than Supplies
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              At Edman Resources Ltd, we go beyond product delivery — we provide
              structured systems, compliance alignment, and operational assurance
              that enable institutions to function efficiently and confidently.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}