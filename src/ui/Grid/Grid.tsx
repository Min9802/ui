import * as React from "react";
import classNames from "classnames";
export type GridElement = React.ElementRef<"div">;

export interface GridProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  display?: string;
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
  rows?: string;
  flow?: "row" | "col" | "row-dense" | "col-dense";
  align?: "stretch" | "start" | "center" | "end" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around";
  gap?: string;
  gapX?: string;
  gapY?: string;
  props?: any;
}
const Grid = React.forwardRef<GridElement, GridProps>(
  (
    {
      className,
      display,
      col,
      rows,
      flow,
      align,
      justify,
      gap,
      gapX,
      gapY,
      ...props
    },
    forwardedRef
  ) => {
    const Comp = "div";
    return (
      <Comp
        ref={forwardedRef}
        className={classNames(
          `${display ? display : "grid"}`,
          `grid-cols-${col ? col : "none"}`,
          `grid-rows-${rows ? rows : "none"}`,
          `grid-flow-${flow ? flow : ""}`,
          `items-${align ? align : "start"}`,
          `justify-${justify ? justify : "start"}`,
          `gap-${gap ? gap : "1"}`,
          `${gapX ? "gap-x-" + gapX : ""}`,
          `${gapY ? "gap-y-" + gapY : ""}`,
          className
        )}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";
export default Grid;
