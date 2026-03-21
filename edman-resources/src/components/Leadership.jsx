import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaChartLine } from "react-icons/fa";

export default function Leadership() {
  return (
    <section id="about" className="py-24 bg-edmanGray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Executive Overview */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-edmanGold mb-6"
          >
            Corporate Governance & Strategic Direction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto"
          >
            Edman Resources Ltd is led by seasoned executive leadership with over
            two decades of institutional governance and risk management experience,
            supported by a technically competent operations team. We deliver not
            only products, but disciplined supply execution aligned with internal
            control frameworks and audit expectations.
          </motion.p>
        </div>

        {/* Leadership Image Banner */}
        <div className="mb-20">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
            alt="Corporate Leadership"
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-edmanDark p-10 rounded-2xl shadow-xl border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaEye className="text-edmanGold text-3xl" />
              <h3 className="text-edmanGold text-2xl font-semibold">
                Vision
              </h3>
            </div>

            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Vision"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />

            <p className="text-gray-300 leading-relaxed">
              To become Ghana’s most trusted institutional operations continuity partner.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-edmanDark p-10 rounded-2xl shadow-xl border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBullseye className="text-edmanGold text-3xl" />
              <h3 className="text-edmanGold text-2xl font-semibold">
                Mission
              </h3>
            </div>

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Mission"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />

            <p className="text-gray-300 leading-relaxed">
              To deliver compliant, reliable, and performance-driven supply solutions
              that enhance institutional efficiency and safeguard operational continuity.
            </p>
          </motion.div>

        </div>

        {/* Strategic Intent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-edmanDark p-12 rounded-2xl shadow-2xl border border-gray-800"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <FaChartLine className="text-edmanGold text-3xl" />
            <h3 className="text-edmanGold text-2xl md:text-3xl font-semibold text-center">
              Strategic Intent (2026–2029)
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Strategy Image */}
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Strategy"
              className="w-full h-[300px] object-cover rounded-xl"
            />

            {/* Strategy Points */}
            <ul className="space-y-5 text-gray-300 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-edmanGold">✔</span>
                Establish structured supply frameworks across multi-branch institutions
              </li>
              <li className="flex items-start gap-3">
                <span className="text-edmanGold">✔</span>
                Develop analytics-driven consumption forecasting models
              </li>
              <li className="flex items-start gap-3">
                <span className="text-edmanGold">✔</span>
                Expand regional distribution footprint
              </li>
              <li className="flex items-start gap-3">
                <span className="text-edmanGold">✔</span>
                Secure long-term institutional supply agreements
              </li>
            </ul>

          </div>
        </motion.div>

      </div>
    </section>
  );
}