import React from "react";
export interface SheetProps {
    className?: string;
    open: boolean;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    cancel: () => void;
}
export declare const SheetCustom: React.FC<SheetProps>;
