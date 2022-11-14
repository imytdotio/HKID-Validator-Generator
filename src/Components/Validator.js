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
    // console.log(char, digit, cDigit);
    let charSum = 0;
    // if (char.length == 1) {
    //   if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    //     charSum += ((char.charCodeAt(0) - 55) * 8) % 11;
    //   } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    //     charSum += ((char.charCodeAt(0) - 77) * 8) % 11;
    //   }
    // }
    // // charSum += 3;
    // console.log(charSum);

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
    charSum = char.charCodeAt(0);
    // console.log(charSum);
    // console.log(sum);
    // console.log(result);
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
          maxLength="2"
        />
        <input
          ref={digitRef}
          type="number"
          className="border inline-block w-32"
          onChange={(e) => {
            setDigit(e.target.value);
          }}
          maxLength="6"
        />
        <input
          ref={cDigitRef}
          type="number"
          className="border inline-block w-16"
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
