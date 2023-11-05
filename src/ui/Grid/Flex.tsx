import * as React from "react";
import classNames from "classnames";

export type FlexElement = React.ElementRef<"div">;
export interface FlexProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  display?:
    | "flex"
    | "inline-flex"
    | "hidden"
    | "absolute"
    | "static"
    | "fixed"
    | "relative"
    | "sticky";
  direction?: "row" | "row-reverse" | "col" | "col-reverse";
  align?: "stretch" | "start" | "center" | "end" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  props?: any;
}
const Flex = React.forwardRef<FlexElement, FlexProps>(
  (
    { className, display, direction, align, justify, wrap, gap, ...props },
    forwardedRef
  ) => {
    const Comp = "div";
    return (
      <Comp
        ref={forwardedRef}
        className={classNames(
          className,
          `${display ? display : "flex"}`,
          `flex-${direction ? direction : "row"}`,
          `items-${align ? align : "start"}`,
          `justify-${justify ? justify : "start"}`,
          `flex-${wrap ? wrap : "nowrap"}`,
          `gap-${gap ? gap : "1"}`
        )}
        {...props}
      />
    );
  }
);
Flex.displayName = "Flex";

export default Flex;
