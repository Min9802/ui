import * as React from "react";
export type FlexElement = React.ElementRef<"div">;
export interface FlexProps extends React.ComponentPropsWithoutRef<"div"> {
    className?: string;
    display?: "flex" | "inline-flex" | "hidden" | "absolute" | "static" | "fixed" | "relative" | "sticky";
    direction?: "row" | "row-reverse" | "col" | "col-reverse";
    align?: "stretch" | "start" | "center" | "end" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    gap?: string;
    props?: any;
}
export declare const Flex: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>>;
