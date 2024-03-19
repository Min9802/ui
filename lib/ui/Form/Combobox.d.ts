import * as React from "react";
export type OptionComboBoxProps = {
    disabled?: boolean;
    label?: string;
    value?: string | number;
};
export interface ComboBoxProps {
    options?: OptionComboBoxProps[] | any;
    callback?: (agr: any) => void;
}
export declare const ComboBox: React.FC<ComboBoxProps>;
