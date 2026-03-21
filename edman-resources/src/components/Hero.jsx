import { motion } from "framer-motion";
import {
  FaPrint,
  FaBatteryFull,
  FaKeyboard,
  FaHdd,
  FaPlug
} from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-gradient-to-br from-edmanDark to-black">

      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
          alt="Corporate Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Floating Icons (Refined) */}
      <div className="absolute inset-0 pointer-events-none text-gray-500">

        <FaPrint className="absolute top-12 left-10 text-5xl opacity-10 animate-floatSlow" />
        <FaBatteryFull className="absolute bottom-24 left-16 text-4xl opacity-10 animate-float" />
        <GiNetworkBars className="absolute top-20 right-10 text-5xl opacity-10 animate-floatSlow" />
        <FaKeyboard className="absolute bottom-20 right-20 text-5xl opacity-10 animate-float" />
        <FaHdd className="absolute top-1/2 left-1/3 text-4xl opacity-10 animate-floatSlow" />
        <FaPlug className="absolute top-1/3 right-1/4 text-4xl opacity-10 animate-float" />

      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-edmanGold mb-6 leading-tight"
          >
            Structured Institutional Supply Partner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-300 leading-relaxed max-w-xl"
          >
            Edman Resources Ltd is a duly incorporated Private Limited Company
            in Ghana positioned as a structured institutional operations and
            supply chain partner delivering disciplined execution aligned with
            governance and audit expectations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="/contact"
              className="bg-edmanGold text-black px-8 py-3 rounded-lg font-semibold hover:bg-edmanLightGold transition shadow-lg"
            >
              Explore Partnership
            </a>

            <a
              href="#services"
              className="border border-edmanGold text-edmanGold px-8 py-3 rounded-lg font-semibold hover:bg-edmanGold hover:text-black transition"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="flex justify-center md:justify-end mt-10 md:mt-0"
>
  <img
    src="./images/chain.PNG"
    alt="Supply Chain Operations"
    className="
      w-[85%] sm:w-[70%] md:w-full
      h-[250px] sm:h-[300px] md:h-[420px]
      object-cover rounded-2xl shadow-2xl
    "
  />
</motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm animate-bounce">
        ↓ Scroll
      </div>

    </section>
  );
}