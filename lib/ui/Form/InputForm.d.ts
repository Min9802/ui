import React, { ReactNode } from "react";
export interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control?: any;
    label?: string;
    name?: any;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    description?: string;
    placeholder?: string;
    props?: any;
    type?: string;
    handleFunc?: any;
}
export declare const InputForm: React.FC<InputFormProps>;
