import React, { useEffect, useState } from "react";

/**
 * @author
 * @function Generator
 **/

export const Generator = (props) => {
  const [result, setResult] = useState("");
  const button = "bg-white rounded-xl my-4 mx-2 p-2 border border-black-200";
  const generateHandler = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const char = alphabet[Math.floor(Math.random() * alphabet.length)];
    const digit = Math.floor(100000 + Math.random() * 900000);
    const digitString = digit.toString();
    let digitSum = 0;
    for (let i = 5; i >= 0; i--) {
      digitSum += (parseInt(digitString[i]) * (7 - i)) % 11;
    }
    const charDigitSum = 5 + (((char.charCodeAt(0) - 55) * 8) % 11);
    const sum = charDigitSum + digitSum;
    let cDigit;
    if (sum % 11 == 0) {
      cDigit = "0";
    } else if (11 - (sum % 11) == 10) {
      cDigit = "A";
    } else {
      cDigit = 11 - (sum % 11);
    }
    setResult(char.concat(digit).concat("(").concat(cDigit).concat(")"));
  };

  useEffect(() => {
    generateHandler();
  }, []);

  return (
    <div className="h-screen bg-blue-300">
      <h1 className="pt-8 xl:text-8xl text-4xl font-bold xl:font-light">
        HKID Generator
      </h1>
      <div className="text-4xl my-8 font-bold">
        <p>{result}</p>
        <button className={button} onClick={generateHandler}>
          🧬 Generate
        </button>
      </div>
    </div>
  );
};
