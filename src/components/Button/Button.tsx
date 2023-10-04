import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  buttonStyle: "modern" | "rounded"; // Rename style to customStyle
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, type, buttonStyle, className, ...rest}) => {
  return (
    <button type={type} className={`btn-${buttonStyle}${className ? ` ${className}` : ``}`} {...rest}>
      {children}
    </button>
  );
}