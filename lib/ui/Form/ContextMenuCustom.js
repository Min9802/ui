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
import { Slot } from "@radix-ui/react-slot";
import { ContextMenu as ContextMenuComponent, ContextMenuContent, ContextMenuItem, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, ContextMenuPortal, } from "../../ui/context-menu";
import React from "react";
import { Button } from "../button";
/**
 * render menu
 * @param param0
 * @returns
 */
const RenderMenu = ({ item }) => {
    return (_jsx(React.Fragment, { children: item.sub ? (_jsxs(ContextMenuSub, { children: [_jsx(ContextMenuSubTrigger, { children: item.title }), _jsx(RenderSubMenu, { item: item })] })) : (_jsxs(ContextMenuItem, { onClick: item === null || item === void 0 ? void 0 : item.action, disabled: item.disabled, children: [item.title, _jsx(ContextMenuShortcut, { children: item.shortcut })] })) }));
};
/**
 * render sub menu
 * @param param0
 * @returns
 */
const RenderSubMenu = ({ item }) => {
    const subs = item === null || item === void 0 ? void 0 : item.sub;
    return (_jsx(ContextMenuSubContent, { className: "w-48", onClick: item === null || item === void 0 ? void 0 : item.action, children: subs &&
            subs.length > 0 &&
            subs.map((item, key) => (_jsx(React.Fragment, { children: _jsx(RenderMenu, { item: item }) }, key))) }));
};
export const ContextMenuCustom = React.forwardRef((_a, ref) => {
    var { asChild, title, list = [] } = _a, props = __rest(_a, ["asChild", "title", "list"]);
    const Comp = asChild ? Slot : Button;
    return (_jsxs(ContextMenuComponent, { children: [_jsx(ContextMenuTrigger, { children: _jsx(Comp, Object.assign({ tooltip: "right click", variant: "ghost" }, props, { ref: ref, children: title })) }), _jsx(ContextMenuPortal, { children: _jsx(ContextMenuContent, { className: "w-auto", children: list.length > 0 &&
                        list.map((item, key) => (_jsx(React.Fragment, { children: _jsx(RenderMenu, { item: item }) }, key))) }) })] }));
});
ContextMenuCustom.displayName = "ContextMenu";
