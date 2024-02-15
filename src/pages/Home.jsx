import React from "react";
import Projects from "../components/projects/Projects";
import Aims from "../components/aims/Aims";
import NavBar from "../components/Navbar/NavBar";
import Sponsers from "../components/sponsers/Sponsers";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/contactus/ContactUs";

const Home = () => {
  return (
    <>
      <NavBar />
      <Sponsers />
      <Projects />
      <Aims />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
