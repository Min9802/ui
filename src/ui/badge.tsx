import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        outline: "outlined",
      },
      color: {
        default: "",
        primary:
          "bg-primary text-primary-light hover:bg-primary/80 border-2 border-primary",
        secondary:
          "bg-secondary text-secondary-light hover:bg-secondary/80 border-2 border-secondary",
        success:
          "bg-success text-success-light hover:bg-success/80 border-2 border-success",
        warning:
          "bg-warning text-warning-light hover:bg-warning/80 border-2 border-warning",
        danger:
          "bg-danger text-danger-light hover:bg-danger/80 border-2 border-danger",
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
      color: "default",
    },
  }
);
export interface BadgeCustom extends React.HTMLAttributes<HTMLDivElement> {}

export interface BadgeProps
  extends Omit<BadgeCustom, "color">,
    VariantProps<typeof badgeVariants> {
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
}

const Badge = ({ className, variant, color, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ variant, color }), className)}
      {...props}
    />
  );
};
Badge.displayName = "Badge";
export { Badge, badgeVariants };
