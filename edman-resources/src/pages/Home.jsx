import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Operations from "../components/Operations";
import Leadership from "../components/Leadership";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Leadership />
      <Services />
      <Operations />
      <Contact />
      <Footer />
    </>
  );
}