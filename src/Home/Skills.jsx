import { FaCss3Alt, FaHtml5, FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb,  SiReact, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Skills = () => {
   useEffect(()=>{
      Aos.init({duration:1000});
  },[])
    return (
       <div  className="my-10  py-10">
        <h1 className="text-5xl font-bold text-center text-white my-5">My Skills</h1>
         <div className="text-5xl px-10  gap-5 items-center  grid md:grid-cols-3 lg:grid-cols-3">
           <div data-aos="flip-up" className="bg-blue-300   p-7 pb-10 rounded-xl">
           <span className=""><SiMongodb /></span>
            <h1>MongoDB</h1>
           </div>
            <div data-aos="flip-up" className="bg-blue-300 p-7 pb-10 rounded-xl">
            <span><SiExpress /></span>
            <h1>Express.js</h1>
            </div>
           <div data-aos="flip-up" className="bg-blue-300 p-7 pb-10 rounded-xl">
           <span><SiReact /></span>
           <h1>React.js</h1>
           </div>
           
           <div data-aos="flip-up" className="bg-blue-300 p-7 pb-10 rounded-xl">
           <span><FaNode /></span>
           <h1>Node.js</h1>
           </div>
           <div data-aos="flip-up" className="bg-blue-300 p-7 pb-10 rounded-xl">
           <span><IoLogoFirebase /></span>
           <h1>Firebase</h1>
           </div>
           <div data-aos="flip-up" className="bg-blue-300 p-7 pb-10 rounded-xl">
           <span><IoLogoJavascript /></span>
           <h1>Java Script</h1>
           </div>
           <div data-aos="flip-up" className="bg-blue-300 p-7 pb-10 rounded-xl">
           <span><FaHtml5 /></span>
           <h1>HTML</h1>
           </div>
           <div data-aos="flip-up" className="bg-blue-300 p-7 pb-10 rounded-xl">
           <span><FaCss3Alt /></span>
           <h1>CSS</h1>
           </div>
           <div data-aos="flip-up" className="bg-blue-300 p-7 pb-10 rounded-xl">
           <span><SiTailwindcss /></span>
           <h1 className="">Tailwind</h1>
           </div>
        </div>
       </div>
    );
};

export default Skills;