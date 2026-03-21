import { motion } from "framer-motion";
import {
  FaFileInvoice,
  FaCheckCircle,
  FaClock,
  FaBoxes,
  FaBalanceScale,
} from "react-icons/fa";

export default function Operations() {
  return (
    <section id="operations" className="py-24 bg-edmanDark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-edmanGold text-center mb-6"
        >
          Our Operating Discipline
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg"
        >
          Our operations are built on structured systems, compliance frameworks,
          and disciplined execution to ensure reliability, transparency, and
          long-term institutional trust.
        </motion.p>

        {/* Banner Image */}
        <div className="mb-20">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            alt="Operations"
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Operations Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Item 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-edmanGray p-8 rounded-2xl shadow-xl border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaFileInvoice className="text-edmanGold text-3xl" />
              <h3 className="text-edmanGold text-xl font-semibold">
                LPO-Based Supply Discipline
              </h3>
            </div>
            <p className="text-gray-300">
              All procurement and supply operations are strictly aligned with
              approved Local Purchase Orders, ensuring accountability and audit readiness.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-edmanGray p-8 rounded-2xl shadow-xl border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaCheckCircle className="text-edmanGold text-3xl" />
              <h3 className="text-edmanGold text-xl font-semibold">
                VAT-Compliant Invoicing
              </h3>
            </div>
            <p className="text-gray-300">
              Transparent pricing structures supported by VAT-compliant invoicing,
              ensuring regulatory compliance and financial clarity.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-edmanGray p-8 rounded-2xl shadow-xl border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaClock className="text-edmanGold text-3xl" />
              <h3 className="text-edmanGold text-xl font-semibold">
                48-Hour Delivery Timeline
              </h3>
            </div>
            <p className="text-gray-300">
              A structured turnaround system designed to meet delivery timelines
              within 48 hours, supporting uninterrupted operations.
            </p>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-edmanGray p-8 rounded-2xl shadow-xl border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBoxes className="text-edmanGold text-3xl" />
              <h3 className="text-edmanGold text-xl font-semibold">
                Inventory Buffer Systems
              </h3>
            </div>
            <p className="text-gray-300">
              Strategic inventory buffering to mitigate supply chain disruptions
              and maintain operational continuity.
            </p>
          </motion.div>

          {/* Item 5 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-edmanGray p-8 rounded-2xl shadow-xl border border-gray-800 md:col-span-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBalanceScale className="text-edmanGold text-3xl" />
              <h3 className="text-edmanGold text-xl font-semibold">
                Ethical Procurement & Compliance
              </h3>
            </div>
            <p className="text-gray-300">
              We uphold strict ethical procurement standards with zero tolerance
              for non-compliance, ensuring integrity across all operations.
            </p>
          </motion.div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center">
          <div className="bg-edmanGray p-10 rounded-2xl shadow-2xl border border-gray-800 max-w-4xl mx-auto">
            <h3 className="text-edmanGold text-2xl font-semibold mb-4">
              Built on Discipline. Driven by Trust.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our operational framework is not just about efficiency — it is about
              delivering consistency, accountability, and confidence at every level
              of institutional engagement.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}