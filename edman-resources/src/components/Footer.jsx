export default function Footer() {
  return (
    <footer className="bg-edmanGray border-t border-edmanGold/30 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        {/* Company Information */}
        <div>
          <h3 className="text-edmanGold font-semibold text-lg mb-6">
            Corporate Information
          </h3>

          <ul className="space-y-3 text-sm">
            <li><strong>Company Registration No:</strong> CS201741224</li>
            <li><strong>TIN:</strong> C0064890767</li>
            <li><strong>Company Type:</strong> Private Limited Company</li>
            <li><strong>Incorporated:</strong> 10 December 2024</li>
            <li><strong>Registered Office:</strong> Accra, Ghana</li>
          </ul>
        </div>

        {/* Compliance Status */}
        <div>
          <h3 className="text-edmanGold font-semibold text-lg mb-6">
            Regulatory & Compliance Status
          </h3>

          <ul className="space-y-3 text-sm">
            <li>• Fully registered with the Registrar of Companies</li>
            <li>• TIN and VAT compliant</li>
            <li>• GRA & SSNIT compliant</li>
            <li>• Operating under structured internal governance</li>
          </ul>
        </div>

        {/* Registered Objects */}
        <div>
          <h3 className="text-edmanGold font-semibold text-lg mb-6">
            Registered Business Objects
          </h3>

          <ul className="space-y-3 text-sm">
            <li>• General trading</li>
            <li>• Cleaning services & equipment supply</li>
            <li>• Import and export of general goods</li>
            <li>• Institutional operational support services</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-edmanGold/20 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Edman Resources Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}