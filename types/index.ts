import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title:string;
    handlebtn: MouseEventHandler<HTMLButtonElement>;
    containerstyles?:string;
}
export interface Manufactureprops{
    setmanufacture:(manufacture:string) => void;
    manufacture:string;
}