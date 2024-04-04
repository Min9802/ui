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
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../utils/utils";
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(TabsPrimitive.List, Object.assign({ ref: ref, className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-gray-50 p-1 text-dark", className) }, props)));
});
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(TabsPrimitive.Trigger, Object.assign({ ref: ref, className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-gray-100 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", "data-[state=active]:bg-white data-[state=active]:text-dark data-[state=active]:shadow", className) }, props)));
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(TabsPrimitive.Content, Object.assign({ ref: ref, className: cn("mt-2 ring-offset-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2", className) }, props)));
});
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
