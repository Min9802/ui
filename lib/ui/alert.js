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
import { cva } from "class-variance-authority";
import { cn } from "../utils/utils";
const alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-50 [&>svg~*]:pl-7", {
    variants: {
        variant: {
            default: "bg-white text-white border border-white",
            primary: "bg-primary text-primary-light border border-primary",
            secondary: "bg-secondary text-secondary-light border border-secondary",
            success: "bg-success text-success-light border border-success",
            warning: "bg-warning text-warning-light border border-warning",
            danger: "bg-danger text-danger-light border border-danger",
            "primary-light": "bg-primary-light text-primary-dark border border-primary",
            "secondary-light": "bg-secondary-light text-secondary-dark border border-secondary",
            "success-light": "bg-success-light text-success-dark border border-success",
            "warning-light": "bg-warning-light text-warning-dark border border-warning",
            "danger-light": "bg-danger-light text-danger-dark border border-danger",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const Alert = React.forwardRef((_a, ref) => {
    var { className, variant } = _a, props = __rest(_a, ["className", "variant"]);
    return (_jsx("div", Object.assign({ ref: ref, role: "alert", className: cn(alertVariants({ variant }), className) }, props)));
});
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("h5", Object.assign({ ref: ref, className: cn("mb-1 font-medium leading-none tracking-tight", className) }, props)));
});
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("text-sm [&_p]:leading-relaxed", className) }, props)));
});
AlertDescription.displayName = "AlertDescription";
export { Alert, AlertTitle, AlertDescription, alertVariants };
