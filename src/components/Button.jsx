import React from "react";
import { content } from "../constants";


const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Your Inxtra File
  </button>
);

export default Button;

