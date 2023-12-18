import image1 from"../assets/Screenshot (19).png"
import image2 from"../assets/Screenshot (20).png"
import image3 from"../assets/Screenshot (21).png"
import image4 from"../assets/Screenshot (22).png"
import image5 from"../assets/Screenshot (25).png"
import image6 from"../assets/Screenshot (26).png"
import image7 from"../assets/Screenshot (27).png"
import image8 from"../assets/Screenshot (28).png"
import image9 from"../assets/Screenshot (29).png"
import image10 from"../assets/Screenshot (30).png"
import image11 from"../assets/Screenshot (23).png"
import image12 from"../assets/Screenshot (24).png"
import image13 from"../assets/Screenshot (31).png"
import image14 from"../assets/Screenshot (32).png"
import image15 from"../assets/Screenshot (33).png"



import Marquee from "react-fast-marquee";

const Projects = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center text-white my-5">Projects</h1>
       <div className="bg-gradient-to-r pt-5 from-orange-100 to-teal-200 p-10 rounded-2xl">
       <div className="">
         <div className="grid lg:grid-cols-2 py-10 justify-around items-center gap-5">
            {/* 1 */}
                <div className="">
                <h1 className="text-black font-bold text-4xl">01.Tech Store (Technology based website) </h1>
         
                </div>
                <div>
                    <a href="https://brand-shop-39abd.web.app"><h1 className="btn btn-outline bg-red-300 ">Live Link</h1></a>
                    <a href="https://github.com/Robiul704/tech-store-server"><h1 className="btn btn-outline m-5 bg-red-300 ">Server Code</h1></a>
                    <a href="https://github.com/Robiul704/tech-store-client"> <h1 className="btn btn-outline bg-red-300 ">Client code</h1></a>
                    
                   
                </div>
            </div>
         </div>
         <div>
            <Marquee pauseOnHover={true}>
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image1} alt="Image 1" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image2} alt="Image 2" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image3} alt="Image 3" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image4} alt="Image 4" />
	
</div>
</Marquee>
       </div>
           
            </div>
         {/* 2 */}
        <div className="bg-gradient-to-r pt-5  from-orange-100 to-teal-200 my-10 p-10 rounded-2xl">
        <div className=" ">
         <div className="grid lg:grid-cols-2 p-10 justify-around  items-center gap-5">
                <div className="">
                <h1 className="text-black font-bold text-4xl">02.Service Provider(Products Selling Website </h1>
         
                </div>
                <div>
                    <a href="https://dimple-firebase-e6967.web.app"><h1 className="btn btn-outline bg-red-300 ">Live Link</h1></a>
                    <a href="https://github.com/Robiul704/visitors-client"><h1 className="btn btn-outline m-5 bg-red-300 ">Server Code</h1></a>
                    <a href="https://github.com/Robiul704/service-provider-client"> <h1 className="btn btn-outline bg-red-300 ">Client code</h1></a>
                    
                   
                </div>
            </div>
         </div>
         <div>
            <Marquee pauseOnHover={true}>
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image11} alt="Image 1" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image12} alt="Image 2" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image13} alt="Image 3" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image14} alt="Image 4" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image15} alt="Image 4" />
	
</div>
</Marquee>
           
            </div>
        </div>
         {/* //3 */}
     <div className="bg-gradient-to-r pt-5 from-orange-100 to-teal-200 p-10 rounded-2xl mb-5">
     <div className="">
         <div className="grid lg:grid-cols-2 py-10 justify-around  p-10 items-center gap-5">
                <div className="">
                <h1 className="text-black font-bold text-4xl">03.VisiTors (Blogs Website) </h1>
          
                </div>
                <div className="ml-5">
                    <a href="https://agni-2-31315.web.app"><h1 className="btn btn-outline bg-red-300 ">Live Link</h1></a>
                    <a href="https://github.com/Robiul704/visitors-server"><h1 className="btn btn-outline m-5 bg-red-300 ">Server Code</h1></a>
                    <a href="https://github.com/Robiul704/visitors-client"> <h1 className="btn btn-outline bg-red-300 ">Client code</h1></a>
                    
                   
                </div>
            </div>
         </div>

            <div>
            <Marquee pauseOnHover={true}>
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image5} alt="Image 1" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image6} alt="Image 2" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image7} alt="Image 3" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image8} alt="Image 4" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image9} alt="Image 3" />
	<img className="h-72 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={image10} alt="Image 4" />
	
</div>
</Marquee>
           
            </div>
     </div>
        </div>
    );
};

export default Projects;