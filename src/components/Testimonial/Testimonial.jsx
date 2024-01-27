import React from 'react';

const TestimonialItem = ({ quote, author }) => (
  <div className="flex flex-col items-center mx-12 lg:mx-0">
    <div className="relative text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
        {/* SVG path for the quote icon */}
      </svg>
      <p className="px-6 py-1 text-lg italic">{quote}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
        {/* SVG path for the quote icon */}
      </svg>
    </div>
    <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
    <p>{author}</p>
  </div>
);

const Testimonial = ({ testimonials }) => (
  <div>
    <section className="my-8">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index} {...testimonial} />
        ))}
      </div>
    </section>
  </div>
);

export default Testimonial;

// // Example usage of Testimonial component with props
// <Testimonial
//   testimonials={[
//     { quote: 'Lorem ipsum dolor sit...', author: 'Leroy Jenkins' },
//     { quote: 'Accusantium illum cupiditate...', author: 'John Doe' },
//     // Add more testimonials as needed
//   ]}
// />;
