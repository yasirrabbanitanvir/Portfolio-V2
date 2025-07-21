import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Yeasir Rabbani Tanvir - Junior Web Developer</title>
        <meta
          name="description"
          content="Yeasir Rabbani Tanvir - Junior Web Developer | PHP Developer | Computer Science Graduate | Portfolio | Reactjs Developer"
        />
        <meta
          name="keywords"
          content="Yeasir Rabbani Tanvir, front-end developer, PHP developer, React developer, JavaScript, HTML, CSS, web developer, portfolio"
        />
        <meta name="author" content="Yeasir Rabbani Tanvir" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Yeasir Rabbani Tanvir - Junior Web Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Yeasir Rabbani Tanvir – a Junior Web Developer skilled in PHP, React, and full-stack web development."
        />
        <meta
          property="og:image"
          content="https://yasirrabbanitanvirdev.vercel.app/preview.jpg"
        />
        <meta
          property="og:url"
          content="https://yasirrabbanitanvirdev.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="w-[90%] md:w-[80%] mx-auto space-y-8">
        <Nav />
        <Header />
      </section>

      <section className="w-[90%] md:w-[80%] mx-auto space-y-8 bg-white">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ToastContainer />
      </section>

      <div className="mt-10 md:mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;