import React from "react";
import img from "../../assets/img1.webp"
const AboutMe = () => {
  return (
    <div id="about" className="flex gap-10 max-w-5xl mx-auto py-24 max-sm:flex-wrap">
      <img className="w-2/5 rounded-lg mr-7 max-sm:w-4/5 max-sm:mx-auto" src={img} alt="" />
      <ul className="flex flex-col gap-2 p-3">
        <li className="text-blue-600 font-bold text-lg text-center">ABOUT ME</li>
        <li className="text-2xl font-bold text-zinc-800 text-center">Front-End Developer</li>
        <li className="text-lg text-neutral-500 text-center" >
        Hello, I am Tushar Borul, a passionate Front End Developer dedicated to creating engaging and user-friendly web experiences. With a robust foundation in HTML, CSS, JavaScript, and React.js. I specialize in building responsive and efficient web applications.

I hold a B.E. in Electronics and Telecommunication Engineering from Aditya Engineering College, Beed, and a Diploma from Shri. Shivaji Polytechnic Institute, Parbhani. My portfolio includes projects like an e-commerce website, a to-do app, and a Tic-Tac-Toe game, showcasing my ability to develop dynamic and scalable web solutions.
Let's connect to discuss how I can contribute to your next project.
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
