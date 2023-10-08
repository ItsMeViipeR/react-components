import React from "react";

import clsx from "clsx";

import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({type, className, ...rest}) => {
    return (
      <input type={type} className={clsx("input", className ? className : "")} {...rest} />
    )
}