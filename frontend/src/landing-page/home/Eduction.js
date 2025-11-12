import React from "react";

const Eduction = () => {
  return (
    <div className="container max-auto flex flex-col md:flex-row justify-between items-center gap-16 bg-gray-50 rounded-2xl shadow-sm p-5">
      <div className="flex-shrink-0">
        <img src="/media/images/education.svg" alt="Eduction" 
        className="w-[400px] max-w-full drop-shadow-md"
        />
      </div>

      <div className="max-w-xl space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Freeband Open market eduction</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Varsity the largest online stock market enduction book in the world
          covering everthing from the basics to advanced trading
        </p>
        <a href="#"
        className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:underline transition">
          Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>

        
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Varsity the largest online stock market enduction book in the world
          covering everthing from the basics to advanced trading
        </p>
        <a href="#"
        className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:underline transition">
          Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Eduction;
