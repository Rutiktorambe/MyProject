import React from 'react';

const TitleComponent = ({ title, codeLanguage, description }) => {
  return (
    <div className="w-full my-4">
      {title && <h1 className="text-3xl font-bold mb-2">{title}</h1>}
      {codeLanguage && <p className="text-gray-600 mb-2">{`Code Language: ${codeLanguage}`}</p>}
      {description && <p className="mb-4">{description}</p>}
      <hr className="border-t-2 border-gray-300" />
    </div>
  );
};

export default TitleComponent;


{/* <TitleComponent
  title="Understanding React Hooks"
  codeLanguage="JavaScript"
  description="Exploring the basics of React hooks and how they simplify state management."
/> */}
