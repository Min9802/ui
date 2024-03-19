import React, { ReactNode } from "react";
export interface PropsCard {
    icon?: ReactNode;
    body?: {
        content?: ReactNode;
        color?: string;
    };
    desc?: ReactNode | string;
    footer?: {
        content?: ReactNode | string;
        color?: string;
    };
    style?: {
        class?: string;
        border?: string;
        height?: string;
        width?: string;
        backgroundColor?: string;
    };
}
export declare const CardMini: React.FC<PropsCard>;
export default CardMini;
