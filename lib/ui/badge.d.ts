import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BadgeCustom extends React.HTMLAttributes<HTMLDivElement> {
}
export interface BadgeProps extends Omit<BadgeCustom, "color">, VariantProps<typeof badgeVariants> {
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light";
}
declare const Badge: {
    ({ className, variant, color, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Badge, badgeVariants };
