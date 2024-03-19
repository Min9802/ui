import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, } from "react";
import { Icon } from "@iconify/react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "../../ui/command";
import { Badge } from "../badge";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { cn } from "../..";
export const MultipleSelect = ({ options = [], value, callback, }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const [typing, SetTyping] = useState(false);
    React.useEffect(() => { }, [typing]);
    /**
     * handle Click
     * @param value
     * @param type
     */
    const handleClick = (value, type) => {
        const newSelect = [...selected];
        if (type === "add") {
            if (!newSelect.includes(value)) {
                newSelect.push(value);
            }
        }
        else if (type === "remove") {
            const indexToRemove = newSelect.indexOf(value);
            if (indexToRemove !== -1) {
                newSelect.splice(indexToRemove, 1);
            }
        }
        setSelected(newSelect);
    };
    /**
     * get all values
     * @param options
     * @returns
     */
    const getAllValues = (options) => {
        let values = [];
        for (const option of options) {
            if (option.value !== undefined) {
                values.push(option.value);
            }
            else if (option.options) {
                values = values.concat(getAllValues(option.options));
            }
        }
        return values;
    };
    /**
     * get text for selected value
     * @param options
     * @param selectedValues
     * @returns
     */
    const getTextForSelectedValues = (options, selectedValues) => {
        const selectedTexts = [];
        for (const option of options) {
            if (option.value !== undefined && selectedValues.includes(option.value)) {
                selectedTexts.push(option);
            }
            else if (option.options) {
                selectedTexts.push(...getTextForSelectedValues(option.options, selectedValues));
            }
        }
        return selectedTexts;
    };
    React.useEffect(() => {
        if (value) {
            setSelected(value);
        }
    }, []);
    React.useEffect(() => {
        callback === null || callback === void 0 ? void 0 : callback(selected);
    }, [selected]);
    /**
     * render options
     * @param optionsList
     * @returns
     */
    /**
     * render selected
     * @returns
     */
    const RenderSelected = () => {
        return (_jsx("div", { className: "flex flex-wrap gap-1", children: getTextForSelectedValues(options, selected).map((option, key) => {
                return (_jsxs(Badge, { color: "secondary", className: "justify-center items-center", children: [option.text, _jsx("span", { "aria-hidden": "true", onClick: () => {
                                handleClick(option.value, "remove");
                            }, className: "ml-1 text-danger", children: "\u00D7" })] }, key));
            }) }));
    };
    return (_jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: "w-auto h-auto justify-between", children: [Object.values(selected).length > 0 ? _jsx(RenderSelected, {}) : "select", selected.length > 0 ? (_jsx("span", { onClick: () => setSelected([]), className: "pl-2 pr-1", children: _jsx(Icon, { icon: "tabler:x", color: "red" }) })) : null, _jsx(Icon, { icon: "carbon:chevron-sort", className: "h-4 w-4 shrink-0 opacity-50" })] }) }), _jsx(PopoverContent, { className: "w-[200px] p-0", children: _jsxs(Command, { children: [_jsx(CommandInput, { placeholder: "Search...", onFocus: () => SetTyping(true), onBlur: () => SetTyping(false) }), _jsx(CommandEmpty, { children: "No Data" }), _jsx(CommandGroup, { children: options.map((option, index) => {
                                return (_jsxs(CommandItem, { onSelect: (currentValue) => {
                                        currentValue === option.value ? "" : currentValue;
                                        selected.includes(option === null || option === void 0 ? void 0 : option.value)
                                            ? handleClick(option === null || option === void 0 ? void 0 : option.value, "remove")
                                            : handleClick(option === null || option === void 0 ? void 0 : option.value, "add");
                                        // setOpen(false);
                                    }, children: [_jsx(Icon, { icon: "tabler:check", className: cn("mr-2 h-4 w-4", selected.includes(option === null || option === void 0 ? void 0 : option.value)
                                                ? "opacity-100"
                                                : "opacity-0") }), option.text] }, index));
                            }) })] }) })] }));
};
MultipleSelect.displayName = "MultipleSelect";
