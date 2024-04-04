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
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../utils/utils";
const Slider = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsxs(SliderPrimitive.Root, Object.assign({ ref: ref, className: cn("relative flex w-full touch-none select-none items-center", className) }, props, { children: [_jsx(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: _jsx(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }) }), _jsx(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-dark shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-dark disabled:pointer-events-none disabled:opacity-50" })] })));
});
Slider.displayName = SliderPrimitive.Root.displayName;
export { Slider };
