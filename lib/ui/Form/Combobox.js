"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "../../ui/command";
import { Icon } from "@iconify/react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { cn } from "../../utils/utils";
export const ComboBox = ({ options = [], callback, }) => {
    var _a;
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    React.useEffect(() => {
        callback === null || callback === void 0 ? void 0 : callback(value);
    }, [value]);
    return (_jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: "w-[200px] justify-between", children: [value
                            ? (_a = options.find((option) => option.value === value)) === null || _a === void 0 ? void 0 : _a.label
                            : "Select...", _jsx(Icon, { icon: "carbon:chevron-sort", className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), _jsx(PopoverContent, { className: "w-[200px] p-0", children: _jsxs(Command, { children: [_jsx(CommandInput, { placeholder: "Search..." }), _jsx(CommandEmpty, { children: "No Result found." }), _jsx(CommandGroup, { children: options.map((option) => (_jsxs(CommandItem, { onSelect: (currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue);
                                    setOpen(false);
                                }, children: [_jsx(Icon, { icon: "tabler:check", className: cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0") }), option.label] }, option.value))) })] }) })] }));
};
ComboBox.displayName = "ComboBox";
