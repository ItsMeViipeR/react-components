import React from 'react';
import clsx from 'clsx';

import "./Table.css";  // Assurez-vous de créer ce fichier pour y ajouter les styles de votre tableau.

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({children, className, ...props}: TableProps) => {
    return (
      <table className={clsx("table", className ? className : "")} {...props}>
          {children}
      </table>
    );
}
