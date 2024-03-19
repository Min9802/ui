import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "../../ui/dialog";
import classNames from "classnames";
import { Button } from "../button";
export const DialogModal = ({ className, open, title, desc, size, children, action, cancel, }) => {
    const handleAction = () => {
        action === null || action === void 0 ? void 0 : action();
    };
    const handleCancel = () => {
        cancel === null || cancel === void 0 ? void 0 : cancel();
    };
    return (_jsx(Dialog, { open: open, onOpenChange: (value) => {
            !value && handleCancel();
        }, children: _jsxs(DialogContent, { size: size, className: classNames("bg-white max-h-[100vh] dark:bg-dark overflow-y-scroll", className), children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: title }), _jsx(DialogDescription, { children: desc })] }), children, _jsxs(DialogFooter, { className: "sm:justify-start md:justify-end lg:justify-end", children: [action && (_jsx(Button, { type: "button", color: "success", onClick: handleAction, children: "save" })), _jsx(DialogClose, { asChild: true, children: _jsx(Button, { type: "button", color: "secondary", children: "close" }) })] })] }) }));
};
