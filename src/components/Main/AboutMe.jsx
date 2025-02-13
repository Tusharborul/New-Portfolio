import React from "react";
import img from "../../assets/photo.avif"
const AboutMe = () => {
  return (
    <div id="about" className="flex gap-10 w-full bg-gray-100 rounded-lg shadow-lg p-6">

      <div className="flex gap-10 max-w-5xl mx-auto py-24 max-sm:flex-wrap">
        <img className="w-2/5 rounded-lg mr-7 max-sm:w-4/5 max-sm:mx-auto" src={img} alt="" />
        <ul className="flex flex-col gap-2 p-3">
          <li className="text-blue-600 font-bold text-lg text-center">ABOUT ME</li>
          <li className="text-2xl font-bold text-blue-600 text-center">Front-End Developer</li>

          <li className="text-lg text-gray-700 text-left mb-2" >

            I am a driven and passionate Full Stack Developer with hands-on experience in building dynamic web applications and robust backend systems. My technical stack includes HTML5, CSS3, JavaScript, ReactJS, Node.js, Spring Boot, Advanced Java, Core Java, ASP.NET (C#), JSP, and Hibernate. I am eager to apply my skills and knowledge to build innovative solutions in the IT sector.
          </li>
          <li className="text-lg text-gray-700 text-left mb-2" >
            I have successfully completed my PG-DAC course and hold a B.E. degree. I am now eager to apply my skills and knowledge to build innovative solutions in the IT sector.
          </li>
          <li className="text-lg text-gray-700 text-left mb-2" >
            Actively seeking opportunities to join a team where I can grow, learn, and contribute to impactful projects.
            <span className="text-blue-500 font-semibold">Let's connect!</span>

          </li>
        </ul>
      </div>
    </div>
  );
};
export default AboutMe;
