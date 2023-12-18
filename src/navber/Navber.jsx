import { NavLink } from "react-router-dom";
import { FaBlog, FaFacebookSquare, FaHome, FaInstagramSquare, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrServices } from "react-icons/gr";

const Navber = () => {


    const links=<>
    <NavLink to={'/'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "rounded-es-2xl rounded-tr-2xl  bg-gradient-to-r mr-3 from-red-600 to-fuchsia-400 py-1 px-3" : "rounded-es-2xl rounded-tr-2xl  mr-3 hover:bg-gradient-to-r  from-red-600 to-fuchsia-400-700 py-1 px-3"
  }><span className="flex justify-center items-center"><FaHome/>Home</span></NavLink>
  <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "rounded-es-2xl rounded-tr-2xl  bg-gradient-to-r mr-3 from-red-600 to-fuchsia-400 py-1 px-3" : "rounded-es-2xl rounded-tr-2xl  mr-3 hover:bg-gradient-to-r  from-red-600 to-fuchsia-400 py-1 px-3"
  } to={'/services'}><span className="flex justify-center items-center"><GrServices/>Services</span></NavLink>
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "rounded-es-2xl rounded-tr-2xl  bg-gradient-to-r mr-3 from-red-600 to-fuchsia-400 py-1 px-3" : "rounded-es-2xl rounded-tr-2xl  mr-3 hover:bg-gradient-to-r  from-red-600 to-fuchsia-400 py-1 px-3"
  } to={'/about'}><span className="flex justify-center  items-center"><span className="text-xl"><FcAbout /></span>About</span></NavLink>
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "rounded-es-2xl rounded-tr-2xl  bg-gradient-to-r mr-3 from-red-600 to-fuchsia-400 py-1 px-3" : "rounded-es-2xl rounded-tr-2xl  mr-3 hover:bg-gradient-to-r  from-red-600 to-fuchsia-400 py-1 px-3"
  } to={'/blog'}><span className="flex justify-center items-center"><FaBlog/>Blog</span></NavLink>
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "rounded-es-2xl rounded-tr-2xl  bg-gradient-to-r mr-3 from-red-600 to-fuchsia-400 py-1 px-3" : "rounded-es-2xl rounded-tr-2xl  mr-3 hover:bg-gradient-to-r  from-red-600 to-fuchsia-400 py-1 px-3"
  } to={'/contact'}><span className="flex justify-center items-center"><FaPhone/>Contact</span></NavLink>
    
    </>
    return (
        <div className=" ">
            <div className="navbar bg-gradient-to-r from-violet-700 to-fuchsia-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
       {links}
      </ul>
    </div>
    <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/NWq52Sn/20231210-124227-0000.png" alt="" /> <span className="text-white font-bold ml-1">R <span className="text-pink-500">WEBER</span></span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end text-2xl">
  
  <FaFacebookSquare />
  <FaLinkedin />
  <FaInstagramSquare />
  <FaTwitter />
     
    

    

  </div>
</div>
        </div>
    );
};

export default Navber;