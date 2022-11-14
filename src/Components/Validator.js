import React, { useState, useRef, useEffect } from "react";

/**
 * @author
 * @function Validator
 **/

export const Validator = (props) => {
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
    console.log(char, digit, cDigit);
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
    <div>
      <form onSubmit={() => {}}>
        <input
          ref={charRef}
          className="border inline-block w-8"
          onChange={(e) => {
            setChar(e.target.value);
          }}
        />
        <input
          ref={digitRef}
          type="number"
          className="border inline-block w-32"
          onChange={(e) => {
            setDigit(e.target.value);
          }}
        />
        <input
          ref={cDigitRef}
          type="number"
          className="border inline-block w-16"
          onChange={(e) => {
            setCDigit(e.target.value);
          }}
        />
        <button onClick={submitHandler} className="inline-block border">
          Submit
        </button>
      </form>
      <p>{result && result}</p>
    </div>
  );
};
