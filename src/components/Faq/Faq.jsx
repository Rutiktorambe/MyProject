import React from 'react';

const FaqItem = ({ question, answer }) => (
  <details>
    <summary className="py-2 outline-none cursor-pointer focus:underline">{question}</summary>
    <div className="px-4 pb-4">
      <p>{answer}</p>
    </div>
  </details>
);

const Faq = () => {
  const faqData = [
    { question: 'How does it work?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.' },
    { question: 'What can I do with it?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.' },
    { question: 'How does it work?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.' },
    { question: 'What can I do with it?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.' }
  ];

  return (
    <div>
      <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracki text-center uppercase">How it works</p>
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:dark:divide-gray-700">
            {faqData.map((item, index) => (
              <FaqItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;


