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
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const contactUs = () => {
    window.location.href = "#contactus";
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    window.location.reload();
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {loading ? (
        <Loading darkMode={darkMode} />
      ) : (
        <div className="dark:bg-slate-950">
          <NavBar
            func={contactUs}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <Hero func={contactUs} />
          <Services />
          <Gallery />
          <Banner />
          <ContactUs />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
