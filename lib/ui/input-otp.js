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
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { cn } from "../utils/utils";
export const InputOTP = React.forwardRef((_a, ref) => {
    var { className, containerClassName } = _a, props = __rest(_a, ["className", "containerClassName"]);
    return (_jsx(OTPInput, Object.assign({ ref: ref, containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName), className: cn("disabled:cursor-not-allowed", className) }, props)));
});
InputOTP.displayName = "InputOTP";
export const InputOTPGroup = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("flex items-center", className) }, props)));
});
InputOTPGroup.displayName = "InputOTPGroup";
export const InputOTPSlot = React.forwardRef((_a, ref) => {
    var { index, className } = _a, props = __rest(_a, ["index", "className"]);
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
    return (_jsxs("div", Object.assign({ ref: ref, className: cn("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-2 ring-ring ring-offset-background", className) }, props, { children: [char, hasFakeCaret && (_jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: _jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) }))] })));
});
InputOTPSlot.displayName = "InputOTPSlot";
export const InputOTPSeparator = React.forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    return (_jsx("div", Object.assign({ ref: ref, role: "separator" }, props, { children: _jsx(Dot, {}) })));
});
InputOTPSeparator.displayName = "InputOTPSeparator";
