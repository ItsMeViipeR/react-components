import React from "react";
import clsx from "clsx";

import "./ProgressBar.css";

interface ProgressBarProps extends React.HTMLAttributes<HTMLProgressElement> {
    value: number;
    max: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({value, max, className, ...props}: ProgressBarProps) => {
    return (
        <progress className={clsx("progressbar", className ? className : "")} value={value} max={max} {...props}></progress>
    );
}