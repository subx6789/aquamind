import { useEffect, useState } from "react";
import Banner from "./components/Banner.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import Services from "./components/Services.jsx";
import Loading from "./components/Loading.jsx";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const contactUs = () => {
    window.location.href = "#contactus";
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar func={contactUs} />
          <Hero func={contactUs} />
          <Services />
          <Gallery />
          <Banner />
          <ContactUs />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
