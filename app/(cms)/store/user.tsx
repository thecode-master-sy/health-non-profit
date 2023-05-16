"use client";
import { useContext } from "react";

interface userInterface{
    name: string;
    id: any;
    email: string;
    type: string;
}

export const Provider = ({children}: {children:React.ReactNode}) => {
    return (
        <div>{children}</div>
    )
}