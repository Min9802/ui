import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
export type OptionMutiSelect = {
    value?: number | string;
    text?: string;
    disabled?: boolean;
};
export interface MultipleSelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, "option"> {
    /**
     * A string of all className you want applied to the component.
     */
    className?: string;
    /**
     * Specifies the number of visible options in a drop-down list.
     */
    htmlSize?: number;
    /**
     * Method called immediately after the `value` prop changes.
     */
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    /**
     * Options list of the select component. Available keys: `label`, `value`, `disabled`.
     * Examples:
     * - `options={[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]}`
     * - `options={['js', 'html']}`
     */
    options?: OptionMutiSelect[];
    /**
     * The `value` attribute of component.
     *
     * @controllable onChange
     */
    value?: string | number | string[];
    callback?: (agr: any) => void;
}
export declare const MultipleSelect: React.FC<MultipleSelectProps>;
