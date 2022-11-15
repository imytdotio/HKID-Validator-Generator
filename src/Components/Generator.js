import React from "react";

/**
 * @author
 * @function Generator
 **/

export const Generator = (props) => {
  const button = "bg-white rounded-xl my-4 mx-2 p-2 border border-black-200";
  return (
    <div className="h-screen bg-blue-300">
      <h1 className="pt-8 xl:text-8xl text-4xl font-bold xl:font-light">HKID Generator</h1>
      <div className="text-4xl my-8 font-bold">
        <p>🧱 Building...</p>
        <button className={button}>🧬 Generate</button>
      </div>
    </div>
  );
};
