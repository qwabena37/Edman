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

        {/* Printer / Toner */}
        <FaPrint className="absolute top-16 left-16 text-6xl opacity-10 animate-floatSlow" />

        {/* UPS Battery */}
        <FaBatteryFull className="absolute bottom-24 left-24 text-5xl opacity-10 animate-float" />

        {/* CAT6 Network Cable */}
        <GiNetworkBars className="absolute top-24 right-24 text-5xl opacity-10 animate-floatSlow" />

        {/* Keyboard & Mouse */}
        <FaKeyboard className="absolute bottom-16 right-16 text-6xl opacity-10 animate-float" />

        {/* External Storage */}
        <FaHdd className="absolute top-1/2 left-1/4 text-5xl opacity-10 animate-floatSlow" />

        {/* Surge Protector */}
        <FaPlug className="absolute top-1/3 right-1/3 text-5xl opacity-10 animate-float" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-edmanGold mb-6">
          Structured Institutional Supply Partner
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Edman Resources is a specialized institutional service provider dedicated 
          to optimizing the supply chains of Ghana’s leading financial and corporate 
          entities. We bridge the gap between high-demand operational needs and seamless, 
          reliable delivery. Led by a veteran of the banking industry and a technical 
          systems expert, we don't just supply products; we safeguard your operational continuity.
          Edman Resources Ltd is a duly incorporated Private Limited Company
          in Ghana positioned as a structured institutional operations and
          supply chain partner delivering disciplined execution aligned with
          governance and audit expectations.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="bg-edmanGold text-black px-8 py-3 rounded-md font-semibold hover:bg-edmanLightGold transition"
          >
            Explore Partnership
          </a>
        </div>
      </div>

    </section>
  );
}