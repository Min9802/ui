import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-50 [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-white text-white border border-white",
        primary: "bg-primary text-primary-light border border-primary",
        secondary: "bg-secondary text-secondary-light border border-secondary",
        success: "bg-success text-success-light border border-success",
        warning: "bg-warning text-warning-light border border-warning",
        danger: "bg-danger text-danger-light border border-danger",
        "primary-light":
          "bg-primary-light text-primary-dark border border-primary",
        "secondary-light":
          "bg-secondary-light text-secondary-dark border border-secondary",
        "success-light":
          "bg-success-light text-success-dark border border-success",
        "warning-light":
          "bg-warning-light text-warning-dark border border-warning",
        "danger-light": "bg-danger-light text-danger-dark border border-danger",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
