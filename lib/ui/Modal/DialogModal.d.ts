import React from "react";
export interface DialogModalProps {
    className?: string;
    open: boolean;
    title?: string;
    desc?: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    children?: React.ReactNode;
    action?: (data?: any) => void;
    cancel: () => void;
}
export declare const DialogModal: React.FC<DialogModalProps>;
