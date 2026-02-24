export default function Leadership() {
  return (
    <section id="about" className="py-20 bg-edmanGray">
      <div className="max-w-6xl mx-auto px-6">

        {/* Executive Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edmanGold mb-6">
            Corporate Governance & Strategic Direction
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto">
            Edman Resources Ltd is led by seasoned executive leadership with over
            two decades of institutional governance and risk management experience,
            supported by a technically competent operations team. We deliver not
            only products, but disciplined supply execution aligned with internal
            control frameworks and audit expectations.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">

          <div className="bg-edmanDark p-8 rounded-lg shadow-lg">
            <h3 className="text-edmanGold text-2xl font-semibold mb-4">
              Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To become Ghana’s most trusted institutional operations continuity partner.
            </p>
          </div>

          <div className="bg-edmanDark p-8 rounded-lg shadow-lg">
            <h3 className="text-edmanGold text-2xl font-semibold mb-4">
              Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver compliant, reliable, and performance-driven supply solutions
              that enhance institutional efficiency and safeguard operational continuity.
            </p>
          </div>

        </div>

        {/* Strategic Intent */}
        <div className="bg-edmanDark p-10 rounded-lg shadow-xl">
          <h3 className="text-edmanGold text-2xl font-semibold mb-8 text-center">
            Strategic Intent (2026–2029)
          </h3>

          <ul className="space-y-4 text-gray-300 text-lg max-w-4xl mx-auto">
            <li>• Establish structured supply frameworks across multi-branch institutions</li>
            <li>• Develop analytics-driven consumption forecasting models</li>
            <li>• Expand regional distribution footprint</li>
            <li>• Secure long-term institutional supply agreements</li>
          </ul>
        </div>

      </div>
    </section>
  );
}