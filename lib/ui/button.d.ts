import * as React from "react";
import { type VariantProps } from "class-variance-authority";
export declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "outline" | "ghost" | "icon" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonCustom extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export interface ButtonProps extends Omit<ButtonCustom, "color">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    variant?: "outline" | "ghost" | "link" | "icon";
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light";
    tooltip?: any;
    size?: "default" | "sm" | "lg";
    children?: any;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
