import {FC, ReactNode} from "react";

import "./Box.css";

interface BoxProps {
    children: ReactNode;
}

export const Box: FC<BoxProps> = ({children}) => {
    return (
        <div className="box">
            {children}
        </div>
    )
}