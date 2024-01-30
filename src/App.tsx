import Header from "./components/structure/Header";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Section5 from "./components/Section5";
import Footer from "./components/structure/Footer";

function App() {
  return (
    <>
      <div className="leading-normal tracking-normal text-white gradient">
        <Header />
        <Hero />
        <OurServices />
        <Testimonials />
        <Pricing />
        <Section5 />
        <Footer />
      </div>
    </>
  );
}

export default App;
