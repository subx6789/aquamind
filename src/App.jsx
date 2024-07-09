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
    return localStorage.getItem('darkMode') === 'true'
  });
  const [isAnimating, setIsAnimating] = useState(false);

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
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const contactUs = () => {
    window.location.href = "#contactus";
  };

  const toggleDarkMode = (event) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const circle = document.createElement('div');
    circle.style.position = 'fixed';
    circle.style.borderRadius = '50%';
    circle.style.pointerEvents = 'none';
    circle.style.transition = 'transform 0.8s ease-in-out';
    circle.style.zIndex = '49';

    const rect = event.target.getBoundingClientRect();
    const size = Math.max(document.documentElement.clientWidth, document.documentElement.clientHeight) * 2;

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${rect.top + rect.height / 2 - size / 2}px`;
    circle.style.left = `${rect.left + rect.width / 2 - size / 2}px`;
    circle.style.transform = 'scale(0)';
    circle.style.backgroundColor = darkMode ? 'white' : 'rgb(2 6 23)'; // slate-950 color

    document.body.appendChild(circle);

    // Force reflow
    circle.offsetWidth;

    circle.style.transform = 'scale(3)';

    setTimeout(() => {
      setDarkMode(!darkMode);
      circle.style.transition = 'opacity 0.3s ease-out';
      circle.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(circle);
        setIsAnimating(false);
      }, 300);
    }, 800);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      {loading ? (
        <Loading darkMode={darkMode} />
      ) : (
        <div className="dark:bg-slate-950 transition-colors duration-300">
          <NavBar func={contactUs} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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