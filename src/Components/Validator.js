import React, { useState, useRef, useEffect } from "react";

/**
 * @author
 * @function Validator
 **/

export const Validator = (props) => {
  const input = "border-b-2 bg-transparent mx-2";

  const [char, setChar] = useState("");
  const [digit, setDigit] = useState("");
  const [cDigit, setCDigit] = useState("");
  const [result, setResult] = useState(null);
  const charRef = useRef();
  const digitRef = useRef();
  const cDigitRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setResult(e.target.value);
    let charSum = 0;
    if (char.length == 1) {
      charSum += 5;
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        charSum += ((char.charCodeAt(0) - 55) * 8) % 11;
      } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        charSum += ((char.charCodeAt(0) - 87) * 8) % 11;
      }
    }

    console.log(charSum);

    let digitSum = 0;
    for (let i = 5; i >= 0; i--) {
      // digitSum += parseInt(digit[7 - i]);
      if (parseInt(digit[5 - i]) * (i + 2) >= 12) {
        digitSum += (parseInt(digit[5 - i]) * (i + 2)) % 11;
      } else {
        digitSum += parseInt(digit[5 - i]) * (i + 2);
      }
    }

    const sum = charSum + digitSum + parseInt(cDigit);
    if (sum % 11 == 0) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  useEffect(() => {
    if (char.length >= 1) {
      digitRef.current.focus();
    }
    if (digit.length >= 6) {
      cDigitRef.current.focus();
    }
    if (char.length == 1 && digit.length == 6 && cDigit.length == 1) {
    }
  }, [char, digit, cDigit]);

  return (
    <div className="h-screen bg-green-300">
      <h1 className="text-8xl font-light">HKID Validator</h1>
      <form className="text-4xl my-8">
        <input
          ref={charRef}
          className={`${input} w-8`}
          onChange={(e) => {
            setChar(e.target.value);
          }}
          maxLength="1"
        />
        <input
          ref={digitRef}
          className={`${input} w-32`}
          onChange={(e) => {
            setDigit(e.target.value);
          }}
          maxLength="6"
        />
        <input
          ref={cDigitRef}
          className={`${input} w-8`}
          onChange={(e) => {
            setCDigit(e.target.value);
          }}
          maxLength="1"
        />
        <button onClick={submitHandler} className="inline-block border">
          Submit
        </button>
      </form>
      <p>{result && result}</p>
    </div>
  );
};
