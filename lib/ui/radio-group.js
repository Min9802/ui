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
import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../utils/utils";
const RadioGroup = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(RadioGroupPrimitive.Root, Object.assign({ className: cn("grid gap-2", className) }, props, { ref: ref })));
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx(RadioGroupPrimitive.Item, Object.assign({ ref: ref, className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-dark disabled:cursor-not-allowed disabled:opacity-50", className) }, props, { children: _jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: _jsx(CheckIcon, { className: "h-3.5 w-3.5 fill-primary" }) }) })));
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
export { RadioGroup, RadioGroupItem };
