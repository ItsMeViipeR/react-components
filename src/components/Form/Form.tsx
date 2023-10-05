import React from "react";
import "./Form.css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    color: "dark" | "light";
    method: "post" | "get";
    action: string;
    children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ method, action, color, id, children, ...rest}) => {
    return (
      <form method={method} action={action} id={color} {...rest}>
        {children}
      </form>
    );
}