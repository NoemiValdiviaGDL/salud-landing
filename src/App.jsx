import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import WhatsAppFloating from "./components/WhatsAppFloating/WhastAppFloating.jsx";
import { useState } from "react";
import FAQ from "./components/FAQ/FAQ.jsx";

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  if (showPrivacy) {
    return <PrivacyPolicy onBack={() => setShowPrivacy(false)} />;
  }

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer onOpenPrivacy={() => setShowPrivacy(true)} />
      <WhatsAppFloating />
    </div>
  );
}

export default App;
