"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from "../../ui/dropdown-menu";
import { Button } from "../button";
export const RenderMenu = ({ item }) => {
    const handleClickItem = (item) => {
        var _a, _b, _c;
        (_c = (_b = ((item === null || item === void 0 ? void 0 : item.action) && ((_a = item === null || item === void 0 ? void 0 : item.action) === null || _a === void 0 ? void 0 : _a.call(item)))) !== null && _b !== void 0 ? _b : ((item === null || item === void 0 ? void 0 : item.path) && window.location.replace(item === null || item === void 0 ? void 0 : item.path))) !== null && _c !== void 0 ? _c : null;
    };
    if (!item.child) {
        return (_jsxs(_Fragment, { children: [_jsxs(DropdownMenuItem, { onClick: () => handleClickItem(item), children: [item === null || item === void 0 ? void 0 : item.label, (item === null || item === void 0 ? void 0 : item.icon) ? (_jsx(DropdownMenuShortcut, { className: "ml-2", children: item === null || item === void 0 ? void 0 : item.icon })) : null] }), _jsx(DropdownMenuSeparator, {})] }));
    }
    else {
        return (_jsxs(DropdownMenuSub, { children: [_jsx(DropdownMenuLabel, { children: item === null || item === void 0 ? void 0 : item.label }), _jsx(DropdownMenuSubTrigger, { onClick: () => handleClickItem(item), children: item === null || item === void 0 ? void 0 : item.label }), _jsx(DropdownMenuPortal, { children: _jsx(DropdownMenuSubContent, { children: item.child.map((itemChild, key) => (_jsx(RenderMenu, { item: itemChild }, `child-${key}`))) }) })] }));
    }
};
export const Dropdown = ({ icon = null, label, list = [], }) => {
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: icon ? "icon" : "outline", children: icon ? icon : label ? label : null }) }), _jsx(DropdownMenuContent, { children: list.map((item, key) => (_jsx(RenderMenu, { item: item }, key))) })] }));
};
export default Dropdown;
