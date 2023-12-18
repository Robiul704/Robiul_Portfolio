
import './Banner.css'

import  Resume from "../assets/Robiul Personal Resume.pdf"
import moment from 'moment';
const Banner = () => {
  const time=moment().format(' h:mm:ss a')
const date=moment().subtract(10, 'days').calendar();
    return (
        <div className=''>
          <div className='flex justify-between items-center text-white font-bold p-5'>
         <div></div>
         <div>
         <h1>Time:{time}</h1>
    <h1>Date:{date}</h1>
         </div>

          </div>
            <div className="hero min-h-[500px] ">
              
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src="https://i.ibb.co/9TR7BkP/367071537-1084088192555421-2038517797379868910-n.jpg" className="   h-[500px] w-[500px] rounded-full" />
    <div>
      <div>
      <h1  className="text-5xl robiul "> <span>MD</span> ROBIUL <span>IS</span>LAM</h1></div>
      <h1 className="text-2xl font-bold">MERN stack Developer </h1>
      <p className="text-xl mb-5">Specialist in React </p>
     <a href={Resume} download={Resume}> <button
  className="btn  font-bold text-xl bg-gradient-to-r from-blue-600 to-green-400  hover:bg-yellow-500 btn-outline">
  Download Resume
</button></a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;