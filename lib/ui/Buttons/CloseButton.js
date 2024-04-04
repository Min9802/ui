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
import React from "react";
import classNames from "classnames";
import { Icon } from "@iconify/react";
export const CloseButton = React.forwardRef((_a, ref) => {
    var { className, disabled, white } = _a, rest = __rest(_a, ["className", "disabled", "white"]);
    return (_jsx("button", Object.assign({ type: "button", className: classNames("btn-close", {
            "btn-close-white": white,
        }, disabled, className), "aria-label": "Close", disabled: disabled }, rest, { ref: ref, children: _jsx(Icon, { icon: "tabler:x" }) })));
});
CloseButton.displayName = "CloseButton";
export default CloseButton;
