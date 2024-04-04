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
import classNames from "classnames";
export const Col = React.forwardRef((_a, forwardedRef) => {
    var { className, col, start, end, spaceX, spaceY } = _a, props = __rest(_a, ["className", "col", "start", "end", "spaceX", "spaceY"]);
    const Comp = "div";
    return (_jsx(Comp, Object.assign({ ref: forwardedRef, className: classNames(className, col ? `col-span-${col}` : "col-auto", spaceX ? `space-x-${spaceX}` : "space-x-0", spaceY ? `space-y-${spaceY}` : "space-y-0", start ? `col-start-${start}` : "", end ? `col-end-${end}` : "") }, props)));
});
Col.displayName = "Col";
