import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-edmanDark py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-edmanGold mb-12 text-center">
            Contact Edman Resources Ltd
          </h1>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE - Contact Information */}
            <div className="space-y-10">

              {/* Office Hours */}
              <div className="bg-edmanGray p-8 rounded-lg shadow-lg">
                <h3 className="text-edmanGold text-xl font-semibold mb-4">
                  Office Hours
                </h3>
                <p>Monday – Friday: 8:30 AM – 5:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday & Public Holidays: Closed</p>
              </div>

              {/* Telephone Numbers */}
              <div className="bg-edmanGray p-8 rounded-lg shadow-lg">
                <h3 className="text-edmanGold text-xl font-semibold mb-4">
                  Telephone
                </h3>
                <p>+233 24 000 0000</p>
                <p>+233 20 000 0000</p>
                <p>+233 30 000 0000</p>
              </div>

              {/* Google Map */}
              <div className="bg-edmanGray p-6 rounded-lg shadow-lg">
                <h3 className="text-edmanGold text-xl font-semibold mb-4">
                  Registered Office
                </h3>

                <p className="mb-4">Accra, Ghana</p>

                <iframe
                  title="Edman Location"
                  src="https://www.google.com/maps?q=Accra,Ghana&output=embed"
                  className="w-full h-64 rounded-md border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

            </div>

            {/* RIGHT SIDE - Contact Form */}
            <div className="bg-edmanGray p-10 rounded-lg shadow-xl">
              <h3 className="text-edmanGold text-2xl font-semibold mb-8">
                Partnership Inquiry Form
              </h3>

              <form className="space-y-6">

                <div>
                  <label className="block mb-2 text-sm">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-md bg-edmanDark border border-gray-600 focus:border-edmanGold outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">Institution / Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-md bg-edmanDark border border-gray-600 focus:border-edmanGold outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-md bg-edmanDark border border-gray-600 focus:border-edmanGold outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 rounded-md bg-edmanDark border border-gray-600 focus:border-edmanGold outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-edmanGold text-black py-3 rounded-md font-semibold hover:bg-edmanLightGold transition"
                >
                  Submit Inquiry
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}