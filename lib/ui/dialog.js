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
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "../utils/utils";
import { cva } from "class-variance-authority";
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = (_a) => {
    var props = __rest(_a, []);
    return (_jsx(DialogPrimitive.Portal, Object.assign({}, props)));
};
DialogPortal.displayName = DialogPrimitive.Portal.displayName;
const DialogOverlay = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(DialogPrimitive.Overlay, Object.assign({ ref: ref, className: cn("fixed inset-0 z-12 bg-dark/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className) }, props)));
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const dialogVariants = cva("fixed max-h-[90vh] left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", {
    variants: {
        size: {
            default: "w-full max-w-lg",
            sm: "w-full max-w-sm",
            md: "w-full max-w-md",
            lg: "w-full max-w-lg",
            xl: "w-full max-w-xl",
            "2xl": "w-full max-w-2xl",
            "3xl": "w-full max-w-3xl",
            "4xl": "w-full max-w-4xl",
        },
    },
    defaultVariants: {
        size: "default",
    },
});
const DialogContent = React.forwardRef((_a, ref) => {
    var { size = "md", className, children } = _a, props = __rest(_a, ["size", "className", "children"]);
    return (_jsxs(DialogPortal, { children: [_jsx(DialogOverlay, {}), _jsxs(DialogPrimitive.Content, Object.assign({ ref: ref, className: cn(dialogVariants({ size, className })) }, props, { children: [children, _jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-dark transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-dark data-[state=open]:text-gray-500", children: [_jsx(Cross2Icon, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Close" })] })] }))] }));
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className) }, props)));
};
DialogHeader.displayName = "DialogHeader";
const DialogFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
};
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(DialogPrimitive.Title, Object.assign({ ref: ref, className: cn("text-lg font-semibold leading-none tracking-tight", className) }, props)));
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(DialogPrimitive.Description, Object.assign({ ref: ref, className: cn("text-sm text-gray-500", className) }, props)));
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;
export { Dialog, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, };
