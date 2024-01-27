import React, { useState, useRef } from 'react';

const Codebox = ({ code, label }) => {
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopyClick = () => {
    codeRef.current.select();
    document.execCommand('copy');
    setIsCopied(true);

    // Reset the "Copied" state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div>
        <div>
          <p className="text-gray-600">{label}</p>
        </div>
    <div className="relative my-4">
      <textarea
        ref={codeRef}
        value={code}
        readOnly
        className="w-full h-40 p-2 bg-gray-800 text-white rounded-md font-mono"
      />
      <div className="absolute top-0 right-4 mt-2 mr-2">
        {!isCopied && (
          <button
            onClick={handleCopyClick}
            className="text-white px-3 py-2 rounded focus:outline-none focus:shadow-outline-blue relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
          </button>
        )}
        {isCopied && <span className="text-white absolute right-4">Copied!!</span>}
      </div>
      <div className="flex items-center space-x-2">
      </div>
    </div>
    </div>
  );
};

export default Codebox;



// <Codebox code="function helloWorld()
//            { console.log('Hello, World!'); }
//            b  jvh hjhbg 
//            djbcnbgcncbbtnmcbjhykbjhckkj
//            c
//            y
//            cy
//            t
//            tt

//            jv
//            sg" label="Sample Code:" />