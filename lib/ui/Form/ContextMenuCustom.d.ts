import React from "react";
export interface ContextMenuProps {
    className?: string;
    asChild?: boolean;
    title?: any;
    list?: ContextMenuType[];
    props?: any;
    ref?: any;
}
export type ContextMenuType = {
    title?: any;
    disabled?: boolean;
    shortcut?: React.ReactNode;
    sub?: ContextMenuType[];
    action?: () => void;
};
export interface ItemProps {
    item: ContextMenuType;
}
export declare const ContextMenuCustom: React.ForwardRefExoticComponent<Omit<ContextMenuProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
