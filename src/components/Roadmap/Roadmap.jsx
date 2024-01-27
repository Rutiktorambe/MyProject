import React from 'react';

const Roadmap = ({ sections }) => {
  return (
    <div className="container mx-auto bg-gray-200">
      <div className="relative overflow-hidden  pt-10 pb-10">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`mb-8 flex items-center justify-center w-full ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="w-4/12"></div>
            <div className={`flex items-center z-20 ${
              index % 2 === 0 ? 'order-1' : 'order-2'
            } bg-${index % 2 === 0 ? 'red-400' : 'gray-800'} rounded-full shadow-xl w-8 h-8`}>
              <h1 className="mx-auto font-semibold text-lg">{index + 1}</h1>
            </div>
            <div className={`order-2 ${index % 2 === 0 ? 'bg-gray-400' : 'bg-red-400'} rounded-lg shadow-xl w-4/12 px-2 py-4`}>
              <h3 className={`mb-3 font-bold ${index % 2 === 0 ? 'text-gray-800' : 'text-white'} text-xl`}>
                {section.title}
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
