import React, { useEffect, useState } from 'react';

const Numbers = () => {
  const [numbers, setNumbers] = useState({
    industrialArea: 0,
    specializedMachines: 0,
    experienceYears: 0,
  });

  // Function to increment the number for each section
  const animateNumbers = (target, key) => {
    let start = 0;
    const increment = target / 200; // Adjust this for faster or slower counting
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setNumbers(prev => ({ ...prev, [key]: target }));
        clearInterval(interval);
      } else {
        setNumbers(prev => ({ ...prev, [key]: Math.ceil(start) }));
      }
    }, 10); // Adjust animation speed
  };

  // Trigger number animation on component mount
  useEffect(() => {
    animateNumbers(15000, 'industrialArea');
    animateNumbers(100, 'specializedMachines');
    animateNumbers(15, 'experienceYears');
  }, []);

  return (
    <section className="bg-[#005D79] py-12 font-poppins">
      <div className="flex justify-center items-center gap-5 md:gap-10">
        {/* Industrial Area */}
        <div className="flex flex-col items-center gap-5 text-center w-1/3">
          <div className="text-white text-4xl font-bold md:text-5xl">{numbers.industrialArea}</div>
          <div className="text-[#C5C5C5] text-lg md:text-xl">M2 de complexe industriel</div>
        </div>

        {/* Specialized Machines */}
        <div className="flex flex-col items-center gap-5 text-center w-1/3">
          <div className="text-white text-4xl font-bold md:text-5xl">{numbers.specializedMachines}</div>
          <div className="text-[#C5C5C5] text-lg md:text-xl">Engins Spécialisés</div>
        </div>

        {/* Experience Years */}
        <div className="flex flex-col items-center gap-5 text-center w-1/3">
          <div className="text-white text-4xl font-bold md:text-5xl">{numbers.experienceYears}</div>
          <div className="text-[#C5C5C5] text-lg md:text-xl">Années d&apos;expérience</div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
