import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiMap } from "react-icons/bi";

const ContactMe = () => {
  return (
    <div id="contact" className="pt-20 flex flex-wrap flex-col pb-32 gap-10 bg-white rounded-lg shadow-lg">
      <div className="mb-16 text-4xl max-sm:text-center text-center">
        <h1 className="text-blue-600 font-bold">Contact Us</h1>
        <p className="font-semibold text-gray-700">Feel free to reach out! 👇</p>
      </div>
      <div className="flex flex-wrap gap-12 mt-10">
        <div className="flex gap-5">
          <span className="p-3 rounded-full shadow-xl">
            <BiMap style={{ color: "#147efb" }} size="2rem" />
          </span>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-700 text-center">Location</span>
            <span className="text-xl text-gray-800">Located in Pune, India</span>
          </div>
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <span className="p-3 rounded-full shadow-xl">
              <HiOutlineMail style={{ color: "#147efb" }} size="2rem" />
            </span>
            <div className="flex flex-col items-center">

              <a
                className="text-zinc-500 hover:text-blue-500"
                href="mailto:Tusharborul45@gmail.com"
              >
                <span className="text-xl text-blue-600 hover:underline">Tusharborul45@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
