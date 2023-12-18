import { useRef } from "react";
import emailjs from '@emailjs/browser';
import {  FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
	const form =useRef()

    const sendEmail = (e) => {
      e.preventDefault();
	
  
      emailjs.sendForm('service_ogobvag', 'template_qtlkvpn', form.current, 'pndgWc7HdsdPDRjuq')
        .then((result) => {
            console.log(result.text);
			e.reset()
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div>
			<h1 className="text-5xl bg-gradient-to-r pt-5 underline from-orange-100 to-teal-200 text-center font-bold">Contact Me</h1>
            <section className="p-6 bg-gradient-to-r from-orange-100 to-teal-200">
	<form ref={form} onSubmit={sendEmail} className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className=" text-3xl font-bold">Personal Inormation</p>
				<h1 className="text-2xl font-bold flex justify-start gap-3 items-center"><FaPhone /><span >Call me</span></h1>
				<h1>+8801755220704</h1>
				<h1 className="text-2xl font-bold flex justify-start gap-3 items-center"><MdOutlineMailOutline /><span>Email</span></h1>
				<h1>robiulislam29935@gmail.com</h1>
				<h1 className="text-2xl font-bold flex justify-start gap-3 items-center"><FaLocationDot /><span>Location</span></h1>
				<h1>Faridpur Dhaka Bangladesh</h1>
				
				
				<p className="text-2xl">To Contact Us you fill up this from</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm">First name</label>
					<input name="message" id="firstname" type="text" placeholder="First name" className="w-full border-2 text-black border-black rounded-lg p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-sm">Last name</label>
					<input name="message" id="lastname" type="text" placeholder="Last name" className="w-full border-2 text-black border-black rounded-lg p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm">Email</label>
					<input name="message" id="email" type="email" placeholder="Email" className="w-full border-2 text-black border-black rounded-lg p-2" />
				</div>
				<div className="col-span-full">
					<label for="address" className="text-sm">Address</label>
					<input name="message" id="address" type="text" placeholder="" className="w-full border-2 text-black border-black rounded-lg p-2" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="city" className="text-sm">City</label>
					<input name="message" id="city" type="text" placeholder="" className="w-full border-2 text-black border-black rounded-lg p-2" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="text-sm">State / Province</label>
					<input name="message" id="state" type="text" placeholder="" className="w-full border-2 text-black border-black rounded-lg p-2" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="zip" className="text-sm">ZIP / Postal</label>
					<input name="message" id="zip" type="text" placeholder="" className="w-full border-2 text-black border-black rounded-lg p-2" />
				</div>
				<input className="btn btn-outline px-10 py-3 text-xl font-bold text-white bg-red-500" type="submit" value="Send" />
			</div>
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default Contact;