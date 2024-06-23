import React, { useCallback, useEffect, useState } from "react";

import useMultiplierby10 from "./useMultiplierby10";

export default function Checke(props) {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let val = await fetch("https://fakestoreapi.com/products/2");
        if (!val.ok) {
          throw new Error(`HTTP error! Status: ${val.status}`);
        }
        let result = await val.json();
        console.log(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  let { val, val23 } = props;
  let [state, setState] = useState(0);

  const func = () => {
    setState(state + 1);
  };

  const remov = () => {
    setState(0);
  };

  const [color, setColor] = useState("red");
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAl, setCharAl] = useState(false);

  const handleChange = () => {
    setNumberAllowed((prevState) => !prevState);
  };

  const handleChange1 = () => {
    setCharAl((prev) => !prev);
  };

  const passwordGenerator = useCallback(() => {
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let pass = "";

    for (let i = 0; i < length; i++) {
      let ind = Math.floor(Math.random() * str.length);
      pass += str.charAt(ind);
    }

    let valsd = document.getElementById("mainval");
    valsd.value = pass;
  }, [numberAllowed, charAl, length]);

  useEffect(() => {
    passwordGenerator();
  }, [charAl, numberAllowed]);

  const customHookSimplestExample = useMultiplierby10(11);

  return (
    <div>
      <h2 style={{ backgroundColor: color }}>
        Hello world from an entirely different function that would be helpful in
        the near future
        <br />
        <b>
          {val} <br /> {val23}{" "}
        </b>
        <br />
        <br />
      </h2>

      <br />
      <br />
      <b>{state}</b>

      <button onClick={func}>click On me</button>

      <br />
      <br />
      <button onClick={remov}>click to remove</button>

      <br />
      <br />
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("yellow")}>yellow</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("purple")}>purple</button>

      <br />
      <br />
      {customHookSimplestExample}
      <br />
      <br />

      <input type="text" name="mainval" id="mainval" />

      <br />
      <label htmlFor="numberCheckbox">Numbers allowed</label>
      <input
        type="checkbox"
        id="numberCheckbox"
        checked={numberAllowed}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="charCheckbox">Characters Allowed</label>
      <input
        type="checkbox"
        id="charCheckbox"
        checked={charAl}
        onChange={handleChange1}
      />
      <br />
      {/* <button onClick={passwordGenerator}>Generate Password</button> */}
    </div>
  );
}
