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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "../../ui/form";
import classNames from "classnames";
import { Input } from "../input";
export const InputForm = (_a) => {
    var { control, name, label, iconStart, iconEnd, placeholder, description, handleFunc } = _a, props = __rest(_a, ["control", "name", "label", "iconStart", "iconEnd", "placeholder", "description", "handleFunc"]);
    return (_jsx(FormField, { control: control, name: name, render: ({ field }) => (_jsxs(FormItem, { className: "block", children: [_jsx("div", { children: _jsx(FormLabel, { children: label }) }), _jsxs("div", { className: classNames(iconStart || iconEnd
                        ? "inline-flex items-center justify-center"
                        : ""), children: [iconStart ? (_jsx("button", { type: "button", className: "h-9 p-2 items-center justify-center bg-gray-100 text-dark border border-tl-gray-100 border-b-gray-300 rounded-br-none rounded-tr-none rounded-tl-md rounded-bl-md disabled:cursor-not-allowed disabled:opacity-50", disabled: props === null || props === void 0 ? void 0 : props.disabled, children: iconStart })) : null, _jsx(FormControl, { children: _jsx(Input, Object.assign({ className: classNames(iconStart ? "rounded-bl-none rounded-tl-none" : "", iconEnd ? "rounded-br-none rounded-tr-none" : ""), placeholder: placeholder }, field, props)) }), iconEnd ? (_jsx("button", { type: "button", className: "text-dark cursor-pointer h-9 p-2 items-center justify-center bg-gray-100 border border-tr-gray-100 border-b-gray-300 rounded-bl-none rounded-tl-none rounded-tr-md rounded-br-md disabled:cursor-not-allowed disabled:opacity-50", onClick: handleFunc, disabled: props === null || props === void 0 ? void 0 : props.disabled, children: iconEnd })) : null] }), _jsx(FormDescription, { children: description }), _jsx(FormMessage, {})] })) }));
};
InputForm.displayName = "InputForm";
