import React from "react";
import Projects from "../components/projects/Projects";
import Aims from "../components/aims/Aims";
import NavBar from "../components/Navbar/NavBar";
import Sponsers from "../components/sponsers/Sponsers";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (<>
          <Projects />
          <Aims />
          <NavBar/>
          <Sponsers/>
          <Footer/>
       </>);
}


export default Home;