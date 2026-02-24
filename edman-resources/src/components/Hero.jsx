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
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-edmanDark to-black">

      {/* Background Icons */}
      <div className="absolute inset-0 pointer-events-none text-gray-500">

        {/* Printer */}
        <FaPrint className="absolute top-10 left-6 text-4xl sm:text-5xl md:text-6xl opacity-10 animate-floatSlow" />

        {/* UPS Battery */}
        <FaBatteryFull className="hidden sm:block absolute bottom-20 left-10 text-4xl md:text-5xl opacity-10 animate-float" />

        {/* Network Cable */}
        <GiNetworkBars className="absolute top-16 right-6 text-4xl sm:text-5xl md:text-6xl opacity-10 animate-floatSlow" />

        {/* Keyboard */}
        <FaKeyboard className="hidden md:block absolute bottom-16 right-16 text-6xl opacity-10 animate-float" />

        {/* External Storage */}
        <FaHdd className="hidden sm:block absolute top-1/2 left-1/4 text-4xl md:text-5xl opacity-10 animate-floatSlow" />

        {/* Surge Protector */}
        <FaPlug className="hidden md:block absolute top-1/3 right-1/3 text-5xl opacity-10 animate-float" />

      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-edmanGold mb-6 leading-tight">
          Structured Institutional Supply Partner
        </h2>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Edman Resources Ltd is a duly incorporated Private Limited Company
          in Ghana positioned as a structured institutional operations and
          supply chain partner delivering disciplined execution aligned with
          governance and audit expectations.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block bg-edmanGold text-black px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-edmanLightGold transition"
          >
            Explore Partnership
          </a>
        </div>
      </div>

    </section>
  );
}