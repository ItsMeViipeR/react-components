import React from 'react';
import clsx from 'clsx';

import "./Blockquote.css";

interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
    children: React.ReactNode;
}

export const Blockquote: React.FC<BlockquoteProps> = ({children, className, ...props}: BlockquoteProps) => {
    return (
        <blockquote className={clsx("blockquote", className ? className : "")} {...props}>
            {children}
        </blockquote>
    );
}