import React from "react";

const Button = ({ styles, text }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-yellow-gradient rounded-[10px] outline-none btn ${styles}`}
  >
    {text}
  </button>
);

export default Button;
