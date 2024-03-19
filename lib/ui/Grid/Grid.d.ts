import * as React from "react";
export type GridElement = React.ElementRef<"div">;
export interface GridProps extends React.ComponentPropsWithoutRef<"div"> {
    className?: string;
    display?: string;
    col?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
    rows?: string;
    flow?: "row" | "col" | "row-dense" | "col-dense";
    align?: "stretch" | "start" | "center" | "end" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around";
    gap?: string;
    gapX?: string;
    gapY?: string;
    props?: any;
}
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
