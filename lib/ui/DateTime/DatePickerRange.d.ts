import React from "react";
import { DateRange } from "react-day-picker";
export interface DatePickerRangeProps {
    setDate: (date: DateRange) => void;
}
export declare const DatePickerRange: React.FC<DatePickerRangeProps>;
