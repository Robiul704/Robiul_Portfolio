import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const About = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])
    return (
        <div data-aos="zoom-in" className="py-10">
            <h1 className="text-5xl font-bold text-center py-5 bg-gradient-to-r pt-5 from-orange-100 to-teal-200 "><span className="">About</span> <span className="">MySelf</span></h1>
            <p className="text-2xl bg-gradient-to-r pt-5 from-orange-100 to-teal-200 p-10">My Name Is MD Robiul Islam.I  am a student of BBA at national univercity of bangladesh.Now i am in study.I want to get a Job.I live in faridpur Distric at Bangladesh.I am a MERN stack developer from Bangladesh.I am a student of BBA in national univercity of Bangladesh.I was tryed to be a proffetional web developer in react technologie system last one year.Specialy i am a frontend developer.i can create a unique webside none other then.
            <br /> As a MERN (MongoDB, Express.js, React.js, Node.js) Stack Web Developer, I am passionate about creating dynamic and responsive web applications that deliver seamless user experiences. With a strong foundation in both front-end and back-end technologies, I specialize in building modern, scalable, and feature-rich solutions.
<br />
On the front end, I harness the power of React.js to create interactive and user-friendly interfaces. My proficiency extends to crafting components that not only enhance visual appeal but also ensure optimal performance. Leveraging the flexibility of the MERN stack, I seamlessly integrate these front-end elements with a robust back-end.
<br />
In the back end, I utilize Node.js and Express.js to develop scalable server-side architectures. I am adept at designing RESTful APIs, ensuring efficient communication between the server and the client. My expertise extends to MongoDB, where I employ its NoSQL capabilities to create flexible and scalable database structures.
<br />
Passionate about staying abreast of the latest technologies, I am committed to continuous learning and innovation. With a keen eye for detail and a commitment to delivering high-quality code, I thrive in collaborative environments and am dedicated to turning creative ideas into functional and impactful web solutions.
</p>
        </div>
    );
};

export default About;