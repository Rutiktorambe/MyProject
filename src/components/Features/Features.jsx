import React from 'react';

const FeatureItem = ({ icon, title, descriptions }) => (
  <div className="flex flex-col items-center p-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
    </svg>
    <h3 className="my-3 text-3xl font-semibold">{title}</h3>
    <div className="space-y-1 leadi">
      {descriptions.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
    </div>
  </div>
);

const Features = ({ features }) => (
  <section className="m-4 md:m-8 text-gray-800 bg-white">
    <div className="container mx-auto p-4 my-6 space-y-2 text-center">
      <h2 className="text-5xl font-bold">Built to empower every team</h2>
      <p className="text-gray-400">Libero minima optio qui</p>
    </div>
    <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>
  </section>
);

export default Features;

// // Example usage of Features component with props
// <Features
//   features={[
//     { icon: 'some-icon-1', title: 'Product 1', descriptions: ['Description 1.1', 'Description 1.2'] },
//     { icon: 'some-icon-2', title: 'Product 2', descriptions: ['Description 2.1', 'Description 2.2'] },
//     // Add more sets of features as needed
//   ]}
// />;
