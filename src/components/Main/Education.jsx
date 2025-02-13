import React from "react";

const Education = () => {
  const getStars = (percentage) => {
    const stars = Math.round(percentage / 20); // Convert percentage to stars (0-5)
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < stars ? "text-yellow-500" : "text-gray-300"}>★</span>
    ));
  };

  return (
    <div id="education" className="pt-20 flex flex-wrap flex-col pb-32 gap-10 bg-white bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Education</h2>
      
      <div className="max-w-5xl mx-auto mt-10 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-semibold text-blue-500">PG-DAC Course</h3>
          <p className="text-gray-700">Institute: Institute of Emerging Technologies Pvt Ltd (IET)</p>
          <p className="text-gray-700">Authorized Training Centre (ATC) of the Centre for Development of Advanced Computing (C-DAC)</p>
          <p className="text-gray-700">Year: February 2025</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-semibold text-blue-500">Bachelor of Engineering in Electronics & Telecommunication</h3>
          <p className="text-gray-700">Institute: Aditya Engineering College, Beed</p>
          <p className="text-gray-700">Dr. Babasaheb Ambedkar Marathwada University, Aurangabad, Maharashtra</p>
          <p className="text-gray-700">Year: november 2024</p>
          <p className="text-gray-700">Percentage: 82.5%  {getStars(82.5)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-semibold text-blue-500">Diploma in Electronics & Telecommunication</h3>
          <p className="text-gray-700">Institute: Shri Shivaji Polytechnic Institute, Parbhani</p>
          <p className="text-gray-700">Maharashtra State Board of Technical Education, Mumbai, Maharashtra</p>
          <p className="text-gray-700">Year: May 2019</p>
          <p className="text-gray-700">Percentage: 70.41%  {getStars(70.41)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-semibold text-blue-500">High School</h3>
          <p className="text-gray-700">Institute:  Bal Vidya Mandir High School, Parbhani</p>
          <p className="text-gray-700">Maharashtra State Board of Secondary & Higher Secondary Education, Pune</p>
          <p className="text-gray-700">Year: 2016</p>
          <p className="text-gray-700">Percentage: 80.6% {getStars(80.6)}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
