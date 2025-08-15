import React from 'react';

const flags = [
  {
    name: 'Belgium',
    img: 'https://flagcdn.com/be.svg',
    style: 'top-4 -left-12 pl-2', // Top left corner, fully visible
  },
  {
    name: 'Canada',
    img: 'https://flagcdn.com/ca.svg',
    style: 'top-10 right-4', // Top right, below top
  },
  {
    name: 'UK',
    img: 'https://flagcdn.com/gb.svg',
    style: 'bottom-10 right-4', // Bottom right, above bottom
  },
  {
    name: 'South Africa',
    img: 'https://flagcdn.com/za.svg',
    style: 'bottom-4 left-4', // Bottom left corner
  },
  {
    name: 'India',
    img: 'https://flagcdn.com/in.svg',
    style: 'left-10 top-1/2 -translate-y-1/2', // Center left
  },
];

const HomeHero: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text & Form */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-red-600">Visa Support Made Simple –<br/>From Short Trips to</span>
            <br/>
            <span className="text-blue-800">Relocation</span>
          </h1>
          <p className="mb-6 text-gray-700">
            Your journey abroad starts here! We specialize in helping you prepare to travel, work, or relocate globally.
          </p>
          <form className="flex flex-col md:flex-row gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Where am I from?</label>
              <select className="border border-gray-400 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 appearance-none">
                <option>Select</option>
                {/* Add options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Where am I going?</label>
              <select className="border border-gray-400 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 appearance-none">
                <option>Select</option>
                {/* Add options here */}
              </select>
            </div>
          </form>
          <div className="flex gap-4">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold">Get - Visa Clinic</button>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold">Get a Consultation</button>
          </div>
        </div>
        {/* Right: Hero Image & Flags */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Belgium flag outside overflow-hidden */}
          <div className="absolute z-20 top-4 -left-12 pl-2 flex items-center gap-2 bg-white rounded-full shadow px-3 py-2 text-xs font-semibold">
            <img src="https://flagcdn.com/be.svg" alt="Belgium" className="w-5 h-5 rounded-full border" />
            <span>Belgium</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-[400px] h-[500px] md:w-[520px] md:h-[600px]">
            <img src={process.env.PUBLIC_URL + '/images/pics/home-hero.jpg'} alt="Visa Support" className="w-full h-full object-cover" />
            {/* Other Flags */}
            {flags.filter(f => f.name !== 'Belgium').map(flag => (
              <div
                key={flag.name}
                className={`absolute flex items-center gap-2 bg-white rounded-full shadow px-3 py-2 text-xs font-semibold ${flag.style}`}
                style={{ zIndex: 2 }}
              >
                <img src={flag.img} alt={flag.name} className="w-5 h-5 rounded-full border" />
                <span>{flag.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
