import { FaBuilding, FaBalanceScale, FaClipboardList } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-edmanGray border-t border-edmanGold/30 text-gray-300">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">

        {/* Company Information */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FaBuilding className="text-edmanGold text-xl" />
            <h3 className="text-edmanGold font-semibold text-lg">
              Corporate Information
            </h3>
          </div>

          <ul className="space-y-3 text-sm leading-relaxed">
            <li><strong>Company Registration No:</strong> CS201741224</li>
            <li><strong>TIN:</strong> C0064890767</li>
            <li><strong>Company Type:</strong> Private Limited Company</li>
            <li><strong>Incorporated:</strong> 10 December 2024</li>
            <li><strong>Registered Office:</strong> Accra, Ghana</li>
          </ul>
        </div>

        {/* Compliance Status */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FaBalanceScale className="text-edmanGold text-xl" />
            <h3 className="text-edmanGold font-semibold text-lg">
              Regulatory & Compliance Status
            </h3>
          </div>

          <ul className="space-y-3 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-edmanGold">✔</span>
              Fully registered with the Registrar of Companies
            </li>
            <li className="flex items-start gap-2">
              <span className="text-edmanGold">✔</span>
              TIN and VAT compliant
            </li>
            <li className="flex items-start gap-2">
              <span className="text-edmanGold">✔</span>
              GRA & SSNIT compliant
            </li>
            <li className="flex items-start gap-2">
              <span className="text-edmanGold">✔</span>
              Operating under structured internal governance
            </li>
          </ul>
        </div>

        {/* Registered Objects */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FaClipboardList className="text-edmanGold text-xl" />
            <h3 className="text-edmanGold font-semibold text-lg">
              Registered Business Objects
            </h3>
          </div>

          <ul className="space-y-3 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-edmanGold">•</span>
              General trading
            </li>
            <li className="flex items-start gap-2">
              <span className="text-edmanGold">•</span>
              Cleaning services & equipment supply
            </li>
            <li className="flex items-start gap-2">
              <span className="text-edmanGold">•</span>
              Import and export of general goods
            </li>
            <li className="flex items-start gap-2">
              <span className="text-edmanGold">•</span>
              Institutional operational support services
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-edmanGold/20"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">

        <p>
          © {new Date().getFullYear()} Edman Resources Ltd. All Rights Reserved.
        </p>

        <p className="mt-3 md:mt-0">
          Structured Institutional Supply & Operational Support Partner
        </p>

      </div>
    </footer>
  );
}