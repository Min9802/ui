import * as React from "react";
import classNames from "classnames";

export type ColElement = React.ElementRef<"div">;
export interface ColProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  col?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  props?: any;
}
const Col = React.forwardRef<ColElement, ColProps>(
  ({ className, col, ...props }, forwardedRef) => {
    const Comp = "div";
    return (
      <Comp
        ref={forwardedRef}
        className={classNames(className, col ? `col-span-${col}` : "col-auto")}
        {...props}
      />
    );
  }
);
Col.displayName = "Col";

export default Col;
