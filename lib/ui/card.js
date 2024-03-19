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
import { cn } from "../utils/utils";
const Card = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("rounded-xl my-3 border bg-card text-dark bg-white shadow dark:bg-boxdark-2 dark:text-bodydark", className) }, props)));
});
Card.displayName = "Card";
const CardHeader = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("flex flex-col space-y-1.5 p-3", className) }, props)));
});
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("h3", Object.assign({ ref: ref, className: cn("font-semibold leading-none tracking-tight", className) }, props)));
});
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("p", Object.assign({ ref: ref, className: cn("text-sm text-gray-500", className) }, props)));
});
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("p-3 py-3 ", className) }, props)));
});
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("flex items-center p-6 pt-0", className) }, props)));
});
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, };
