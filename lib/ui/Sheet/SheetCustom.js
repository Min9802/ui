"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, } from "../../ui/sheet";
import { Button } from "../button";
export const SheetCustom = ({ className, open, title, description, children, cancel, }) => {
    return (_jsx(Sheet, { open: open, onOpenChange: cancel, children: _jsxs(SheetContent, { className: className, children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: title }), _jsx(SheetDescription, { children: description })] }), children, _jsx(SheetFooter, { children: _jsx(SheetClose, { asChild: true, children: _jsx(Button, { type: "button", color: "danger-light", children: "Cancel" }) }) })] }) }));
};
