import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";
import classNames from "classnames";

const buttonVariants = cva(
  "group inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:border-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent outlined:hover:bg-gray-200",
        outline: "outlined outlined:bg-transparent outlined:hover:bg-gray-200",
        ghost:
          "rounded-md hover:bg-transparent hover:bg-gray-200 border-none hover:border-gray-200",
        link: "text-primary underline-offset-4 hover:underline",
        icon: "h-9 w-9 !rounded-full icon icon:bg-transparent icon:hover:bg-gray-200 icon:px-0 icon:py-0",
      },
      size: {
        default: "h-9 rounded-md px-2 py-2",
        sm: "h-5 rounded-md px-2 text-xs",
        lg: "h-10 rounded-md px-8",
      },
      color: {
        default:
          "bg-transparent outlined:hover:bg-gray-200 border-2 border-gray-200",
        primary:
          "bg-primary text-primary-light hover:bg-primary/80 hover:text-primary border-2 border-primary",
        secondary:
          "bg-secondary text-secondary-light hover:bg-secondary/80 hover:text-secondary border-2 border-secondary",
        success:
          "bg-success text-success-light hover:bg-success/80 hover:text-success border-2 border-success",
        warning:
          "bg-warning text-warning-light hover:bg-warning/80 hover:text-warning border-2 border-warning",
        danger:
          "bg-danger text-danger-light hover:bg-danger/80 hover:text-danger border-2 border-danger",
        "primary-light":
          "bg-primary-light text-primary-dark hover:bg-primary/80 border-2 border-primary-light",
        "secondary-light":
          "bg-secondary-light text-secondary-dark hover:bg-secondary/80 border-2 border-secondary-light",
        "success-light":
          "bg-success-light text-success-dark hover:bg-success/80 border-2 border-success-light ",
        "warning-light":
          "bg-warning-light text-warning-dark hover:bg-warning/80 border-2 border-warning-light",
        "danger-light":
          "bg-danger-light text-danger-dark hover:bg-danger/80 border-2 border-danger-light",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  }
);
export interface ButtonCustom
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export interface ButtonProps
  extends Omit<ButtonCustom, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "primary-light"
    | "secondary-light"
    | "success-light"
    | "warning-light"
    | "danger-light";
  tooltip?: any;
  size?: "default" | "sm" | "lg";
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      color,
      asChild = false,
      tooltip = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={classNames(
          cn(buttonVariants({ variant, size, color, className })),
          tooltip && "relative"
        )}
        ref={ref}
        {...props}
      >
        {children}
        {tooltip ? (
          <div className="absolute bottom-3 flex flex-col items-center hidden mb-6 group-hover:flex animate-slide-up-fade">
            <span className="relative rounded-md z-10 p-1 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg dark:bg-white dark:text-dark">
              {tooltip}
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black dark:bg-white"></div>
          </div>
        ) : null}
      </Comp>
    );
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };
