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
import { Icon } from "@iconify/react";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, } from "../ui/toast";
import { useToast } from "../ui/use-toast";
const RenderIcon = ({ status }) => {
    let icon = "";
    switch (status) {
        case "success":
            icon = _jsx(Icon, { icon: "tabler:circle-check", fontSize: 24 });
            break;
        case "error":
            icon = _jsx(Icon, { icon: "tabler:alert-circle", fontSize: 24 });
            break;
        case "warning":
            icon = _jsx(Icon, { icon: "tabler:alert-small", fontSize: 24 });
            break;
        case "info":
            icon = _jsx(Icon, { icon: "tabler:exclamation-mark", fontSize: 24 });
            break;
        default:
            icon = _jsx(Icon, { icon: "tabler:circle-check", fontSize: 24 });
            break;
    }
    return icon;
};
const getColor = (status) => {
    let color = "primary";
    switch (status) {
        case "success":
            color = "success";
            break;
        case "error":
            color = "danger";
            break;
        case "warning":
            color = "warning";
            break;
        case "info":
            color = "info";
            break;
        default:
            color = "success";
            break;
    }
    return color;
};
const Toaster = () => {
    const { toasts } = useToast();
    return (_jsxs(ToastProvider, { children: [toasts.map((_a) => {
                var { id, title, description, status = "success", action } = _a, props = __rest(_a, ["id", "title", "description", "status", "action"]);
                const color = getColor(status);
                return (_jsxs(Toast, Object.assign({ color: color }, props, { className: action ? "justify-between" : "", children: [_jsx(RenderIcon, { status: status }), _jsxs("div", { className: "grid gap-1", children: [title && _jsx(ToastTitle, { children: title }), description && (_jsx(ToastDescription, { children: description }))] }), action, _jsx(ToastClose, {})] }), id));
            }), _jsx(ToastViewport, {})] }));
};
Toaster.displayName = "Toaster";
export { Toaster };
