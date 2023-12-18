import Partical from "../Partical/Partical";
import About from "../navber/About";
import Contact from "../navber/Contact";
import Services from "../navber/Services";
import Banner from "./Banner";
import EducationalInfo from "./EducationalInfo";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import State from "./State";


const Home = () => {
    return (
        <div className="bodys">
            <Banner></Banner>
            <State></State>
            <Skills></Skills>
            <Services></Services>
            <Projects></Projects>
            <Experience></Experience>
            <EducationalInfo></EducationalInfo>
            <Contact></Contact> 
            <About></About>
            <Partical></Partical>
        </div>
    );
};

export default Home;