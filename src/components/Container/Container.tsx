import { FC, ReactNode } from "react";

import "./Container.css";
import {Form} from "@/components/Form/Form";
import {Button} from "@/components/Button/Button";

interface ContainerProps {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <>
            <div className={"container"}>
                {children}
            </div>
        </>
    )
}