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
import { Cross2Icon } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { cn } from "../utils/utils";
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Viewport, Object.assign({ ref: ref, className: cn("fixed top-0 z-55 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className) }, props)));
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
export const toastVariants = cva("group pointer-events-auto mt-[5px] relative flex w-full items-center space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-white text-dark dark:bg-dark dark:text-white",
            outline: "outlined outlined:bg-transparent outlined:hover:bg-gray-200",
        },
        color: {
            default: "group border-2 border-gray-100",
            primary: "group bg-primary text-primary-light hover:bg-primary/80 border-2 border-primary",
            secondary: "group bg-secondary text-secondary-light hover:bg-secondary/80 border-2 border-secondary",
            success: "group bg-success text-success-light hover:bg-success/80 border-2 border-success",
            info: "group bg-info text-info-light hover:bg-info/80 border-2 border-info",
            warning: "group bg-warning text-warning-light hover:bg-warning/80 border-2 border-warning",
            danger: "group bg-danger text-danger-light hover:bg-danger/80 border-2 border-danger",
            "primary-light": "group bg-primary-light text-primary-dark hover:bg-primary/80 border-2 border-primary-light",
            "secondary-light": "group bg-secondary-light text-secondary-dark hover:bg-secondary/80 border-2 border-secondary-light",
            "success-light": "group bg-success-light text-success-dark hover:bg-success/80 border-2 border-success-light",
            "info-light": "group bg-info-light text-info-dark hover:bg-info/80 border-2 border-info-light",
            "warning-light": "group bg-warning-light text-warning-dark hover:bg-warning/80 border-2 border-warning-light",
            "danger-light": "group bg-danger-light text-danger-dark hover:bg-danger/80 border-2 border-danger-light",
        },
    },
    defaultVariants: {
        variant: "default",
        color: "default",
    },
});
const Toast = React.forwardRef((_a, ref) => {
    var { className, variant = "default", color = "default" } = _a, props = __rest(_a, ["className", "variant", "color"]);
    return (_jsx(ToastPrimitives.Root, Object.assign({ ref: ref, className: cn(toastVariants({ variant, color }), className) }, props)));
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Action, Object.assign({ ref: ref, className: cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-dark disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-dark/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-white group-[.destructive]:focus:ring-destructive", className) }, props)));
});
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Close, Object.assign({ ref: ref, className: cn("absolute right-1 top-1 rounded-md p-1 text-dark/50 opacity-0 transition-opacity hover:text-dark focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className), "toast-close": "" }, props, { children: _jsx(Cross2Icon, { className: "h-4 w-4" }) })));
});
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Title, Object.assign({ ref: ref, className: cn("text-sm font-semibold [&+div]:text-xs", className) }, props)));
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ToastPrimitives.Description, Object.assign({ ref: ref, className: cn("text-sm opacity-90", className) }, props)));
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;
export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, };
