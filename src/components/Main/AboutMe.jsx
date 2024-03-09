import React from "react";
import img from "../../assets/img1.webp"
const AboutMe = () => {
  return (
    <div id="about" className="flex gap-10 max-w-5xl mx-auto py-24 max-sm:flex-wrap">
      <img className="w-2/5 rounded-lg mr-7 max-sm:w-4/5 max-sm:mx-auto" src={img} alt="" />
      <ul className="flex flex-col gap-2 p-3">
        <li className="text-blue-600 font-bold text-lg text-center">ABOUT ME</li>
        <li className="text-2xl font-bold text-zinc-800 text-center">Front-End Developer</li>
        <li className="text-lg text-neutral-500 text-center">
          Tushar Borul, a skilled Frontend Developer with 2 years of expertise. Proficient in HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Bootstrap, Redux, and Git. Passionate about crafting seamless user experiences, I bring creativity and technical prowess to every project. Let's elevate the digital landscape together.
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
