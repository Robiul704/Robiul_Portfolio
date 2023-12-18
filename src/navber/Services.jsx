
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Services = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
},[])
    return (
        <div className="p-5">
            <h1 className="text-6xl font-bold text-white text-center my-5">My Services</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5 mx-10 items-center justify-center">
            <article data-aos="zoom-in-down" className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt="Office"
    src="https://i.ibb.co/K6zmRDw/web-development-coding-programming-internet-260nw-1141706672.webp"
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
   
    <a href="#">
      <h3 className="mt-0.5 text-lg text-black font-bold">Web Application Development</h3>
    </a>

    <p className="mt-2 line-clamp-5 text-sm/relaxed text-gray-500">
    This is the core service where i create a web application based on the MongoDB database, Express.js for the backend, React for the frontend, and Node.js as the runtime environment.
i can design and implement features, user interfaces, and ensure the application is responsive and scalable.
    </p>
  </div>
</article>
            <article data-aos="zoom-in-down" className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt="Office"
    src="https://i.ibb.co/wSNywgW/api-application-programming-interface-software-260nw-1232339545.webp"
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
   
    <a href="#">
      <h3 className="mt-0.5 text-lg text-black font-bold">API Development</h3>
    </a>

    <p className="mt-2 line-clamp-5  text-sm/relaxed text-gray-500">
    I can provide services specifically focused on developing APIs using Express.js and Node.js.Using JSON web token i can secure your api then provide you a better expreance in any side.
    <br />API development includes designing endpoints, handling requests and responses, and implementing authentication and authorization mechanisms.
    </p>
  </div>
</article>
            <article data-aos="zoom-in-down" className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt="Office"
    src="https://i.ibb.co/pPZJjd0/database-157334670-5c29939d46e0fb0001edf766.jpg"
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
   
    <a href="#">
      <h3 className="mt-0.5 text-lg text-black font-bold">Database Design and Management:</h3>
    </a>

    <p className="mt-2 line-clamp-5 text-sm/relaxed text-gray-500">
    I am mongodb specialist.i can put data in mongodb database then if you need any kinds of data you can use the data from mongodb.Database management system is more powerful for a webside.
    </p>
  </div>
</article>
            </div>
        </div>
    );
};

export default Services;