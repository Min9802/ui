import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { addDays, format } from "date-fns";
import { cn } from "../../utils/utils";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
export const DatePickerRange = ({ className, setDate, }) => {
    const [date, setSelectedDate] = React.useState({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    });
    React.useEffect(() => {
        setDate === null || setDate === void 0 ? void 0 : setDate(date);
    }, [date]);
    return (_jsx("div", { className: cn("grid gap-2", className), children: _jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { id: "date", variant: "outline", color: "secondary-light", className: cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground"), children: [_jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }), (date === null || date === void 0 ? void 0 : date.from) ? (date.to ? (_jsxs(_Fragment, { children: [format(date.from, "LLL dd, y"), " -", " ", format(date.to, "LLL dd, y")] })) : (format(date.from, "LLL dd, y"))) : (_jsx("span", { children: "Pick a date" }))] }) }), _jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: _jsx(Calendar, { initialFocus: true, mode: "range", defaultMonth: date === null || date === void 0 ? void 0 : date.from, selected: date, onSelect: setSelectedDate, numberOfMonths: 2 }) })] }) }));
};
DatePickerRange.displayName = "DatePicker";
