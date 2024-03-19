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
export const Flex = React.forwardRef((_a, forwardedRef) => {
    var { className, display, direction, align, justify, wrap, gap } = _a, props = __rest(_a, ["className", "display", "direction", "align", "justify", "wrap", "gap"]);
    const Comp = "div";
    return (_jsx(Comp, Object.assign({ ref: forwardedRef, className: classNames(className, `${display ? display : "flex"}`, `flex-${direction ? direction : "row"}`, `items-${align ? align : "start"}`, `justify-${justify ? justify : "start"}`, `flex-${wrap ? wrap : "nowrap"}`, `gap-${gap ? gap : "1"}`) }, props)));
});
Flex.displayName = "Flex";
