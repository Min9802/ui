"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";
import { cn } from "../utils/utils";
import { buttonVariants } from "../ui/button";
const Calendar = (_a) => {
    var { className, classNames, showOutsideDays = true } = _a, props = __rest(_a, ["className", "classNames", "showOutsideDays"]);
    return (_jsx(DayPicker, Object.assign({ showOutsideDays: showOutsideDays, className: cn("p-3", className), classNames: Object.assign({ months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0", month: "space-y-4", caption: "flex justify-center pt-1 relative items-center", caption_label: "text-sm font-medium", nav: "space-x-1 flex items-center", nav_button: cn(buttonVariants({ variant: "outline" }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"), nav_button_previous: "absolute left-1", nav_button_next: "absolute right-1", table: "w-full border-collapse space-y-1", head_row: "flex", head_cell: "text-gray-500 rounded-md w-8 font-normal text-[0.8rem]", row: "flex w-full mt-2", cell: cn("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-gray-100", props.mode === "range"
                ? [
                    "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md ",
                    "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
                ]
                : "[&:has([aria-selected])]:rounded-md"), day: cn(buttonVariants({ variant: "ghost" }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"), day_range_start: "day-range-start", day_range_end: "day-range-end", day_selected: "text-gray-500 hover:!text-dark hover:bg-purple-200 focus:bg-purple-400 focus:text-dark", day_today: "bg-gray-50 text-gray-100", day_outside: "text-gray-300 opacity-50", day_disabled: "text-gray-300 opacity-50", day_range_middle: "aria-selected:bg-gray-100 aria-selected:text-gray-500", day_hidden: "invisible" }, classNames), components: {
            IconLeft: () => _jsx(ChevronLeftIcon, { className: "h-4 w-4" }),
            IconRight: () => _jsx(ChevronRightIcon, { className: "h-4 w-4" }),
        } }, props)));
};
Calendar.displayName = "Calendar";
export { Calendar };
