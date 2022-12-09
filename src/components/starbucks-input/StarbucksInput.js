import React from "react";
import { useEffect } from "react";

function StarbucksInput({ name, value, onChange: change, error }) {
  return (
    <>
      <input
        aria-label={name}
        id="inp"
        name={name}
        value={value}
        onChange={(e) => change(e.target.value)}
      />

      {error && <div className="">{error}</div>}
    </>
  );
}

export default StarbucksInput;
