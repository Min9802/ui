import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { DateTime } from "luxon";
import { cn } from "../../utils/utils";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import { Icon } from "@iconify/react";
export const DateTimePicker = ({ date, setDate }) => {
    const [selectedDateTime, setSelectedDateTime] = React.useState(DateTime.fromJSDate(date !== null && date !== void 0 ? date : new Date()));
    /**
     * handle selected date
     * @param selected
     */
    const handleSelect = (selected) => {
        const selectedDay = DateTime.fromJSDate(selected);
        const modifiedDay = selectedDay.set({
            hour: selectedDateTime.hour,
            minute: selectedDateTime.minute,
        });
        setSelectedDateTime(modifiedDay);
        setDate(modifiedDay.toJSDate());
    };
    /**
     * handle selected time
     * @param e
     */
    const handleTimeChange = (e) => {
        const { value } = e.target;
        const hours = Number.parseInt(value.split(":")[0] || "00", 10);
        const minutes = Number.parseInt(value.split(":")[1] || "00", 10);
        var modifiedDay = selectedDateTime.set({
            hour: hours,
            minute: minutes,
        });
        setSelectedDateTime(modifiedDay);
        setDate(modifiedDay.toJSDate());
    };
    const footer = (_jsxs(_Fragment, { children: [_jsxs("div", { className: "px-4 pt-0 pb-4", children: [_jsx(Label, { children: "Time" }), _jsx(Input, { type: "time", step: "1", onChange: handleTimeChange, value: selectedDateTime.toFormat("HH:mm") })] }), !selectedDateTime && _jsx("p", { children: "Please pick a day." })] }));
    return (_jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, className: "z-10", children: _jsxs(Button, { variant: "outline", color: "secondary", className: cn("w-[280px] justify-start text-left font-normal", !date && "text-dark"), children: [_jsx(Icon, { icon: "mdi:calendar-month-outline", className: "mr-2 h-4 w-4" }), date ? (_jsx("span", { className: "text-dark", children: selectedDateTime.toFormat("DDD HH:mm") })) : (_jsx("span", { children: "Pick a date" }))] }) }), _jsxs(PopoverContent, { className: "w-auto p-0", children: [_jsx(Calendar, { mode: "single", selected: selectedDateTime.toJSDate(), onSelect: handleSelect, initialFocus: true }), footer] })] }));
};
DateTimePicker.displayName = "DateTimePicker";
