import React from "react";
export type DropdownProps = {
    label: string;
    icon?: React.ReactNode;
    path?: string;
    child?: DropdownProps[];
    action?: () => void;
};
export interface DropdownMenuProps {
    icon?: React.ReactNode;
    label?: string | React.ReactNode;
    list: DropdownProps[];
}
export interface RenderMenuProps {
    item: DropdownProps;
}
export declare const RenderMenu: React.FC<RenderMenuProps>;
export declare const Dropdown: React.FC<DropdownMenuProps>;
export default Dropdown;
