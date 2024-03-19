import React, { ReactNode } from "react";
export interface AlertDialogProps {
    open: boolean;
    title?: string;
    message?: string;
    children?: ReactNode;
    action?: () => void;
    cancel: () => void;
}
export declare const Modal: React.FC<AlertDialogProps>;
