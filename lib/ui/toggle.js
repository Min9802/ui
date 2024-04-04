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
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";
import { cn } from "../utils/utils";
const toggleVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-dark hover:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-dark disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-dark data-[state=on]:text-gray-50", {
    variants: {
        variant: {
            default: "bg-transparent",
            outline: "border border-input bg-transparent shadow-sm hover:bg-dark hover:text-gray-50",
        },
        size: {
            default: "h-9 px-3",
            sm: "h-8 px-2",
            lg: "h-10 px-3",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Toggle = React.forwardRef((_a, ref) => {
    var { className, variant, size } = _a, props = __rest(_a, ["className", "variant", "size"]);
    return (_jsx(TogglePrimitive.Root, Object.assign({ ref: ref, className: cn(toggleVariants({ variant, size, className })) }, props)));
});
Toggle.displayName = TogglePrimitive.Root.displayName;
export { Toggle, toggleVariants };
