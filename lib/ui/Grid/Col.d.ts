import * as React from "react";
export type ColElement = React.ElementRef<"div">;
export interface ColProps extends React.ComponentPropsWithoutRef<"div"> {
    className?: string;
    col?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
    props?: any;
}
declare const Col: React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLDivElement>>;
export default Col;
