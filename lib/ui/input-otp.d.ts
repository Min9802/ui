import * as React from "react";
export declare const InputOTP: React.ForwardRefExoticComponent<(Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string | undefined;
    onChange?: ((newValue: string) => unknown) | undefined;
    maxLength: number;
    textAlign?: "center" | "right" | "left" | undefined;
    onComplete?: ((...args: any[]) => unknown) | undefined;
    pushPasswordManagerStrategy?: "none" | "increase-width" | undefined;
    containerClassName?: string | undefined;
    noScriptCSSFallback?: string | null | undefined;
} & {
    render: (props: import("input-otp").RenderProps) => React.ReactNode;
    children?: undefined;
} & React.RefAttributes<HTMLInputElement>, "ref"> | Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string | undefined;
    onChange?: ((newValue: string) => unknown) | undefined;
    maxLength: number;
    textAlign?: "center" | "right" | "left" | undefined;
    onComplete?: ((...args: any[]) => unknown) | undefined;
    pushPasswordManagerStrategy?: "none" | "increase-width" | undefined;
    containerClassName?: string | undefined;
    noScriptCSSFallback?: string | null | undefined;
} & {
    render?: undefined;
    children: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>, "ref">) & React.RefAttributes<HTMLInputElement>>;
export declare const InputOTPGroup: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const InputOTPSlot: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    index: number;
} & React.RefAttributes<HTMLDivElement>>;
export declare const InputOTPSeparator: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
