"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from "../../ui/alert-dialog";
export const Modal = ({ open, title, message, children, action, cancel, }) => {
    const handleAction = () => {
        action === null || action === void 0 ? void 0 : action();
    };
    const handleCancel = () => {
        cancel === null || cancel === void 0 ? void 0 : cancel();
    };
    return (_jsx(AlertDialog, { open: open, children: _jsxs(AlertDialogContent, { className: "lg:!w-3/4 md:!w-full sm:!w-full", children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: title }), _jsx(AlertDialogDescription, { children: message })] }), children, _jsxs(AlertDialogFooter, { children: [action ? (_jsx(AlertDialogAction, { onClick: () => handleAction(), children: "confirm" })) : null, _jsx(AlertDialogCancel, { onClick: () => handleCancel(), children: "cancel" })] })] }) }));
};
