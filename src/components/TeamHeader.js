import React from 'react';

const TeamHeader = () => {
  return (
    <section className="py-20 px-4 text-center text-white relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="inline-block relative mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase relative z-10">
            Meet the E-Board
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 rounded-full transform scale-x-75"></div>
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Eboard Applications are currently closed. Check back in January/February 2026 for Spring Eboard Applications!
        </p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-900/20 blur-[100px] rounded-full pointer-events-none -z-0"></div>
    </section>
  );
};

export default TeamHeader;
