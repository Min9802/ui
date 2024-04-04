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
import { cn } from "../utils/utils";
const Table = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", { className: "w-full overflow-auto", children: _jsx("table", Object.assign({ ref: ref, className: cn("w-full caption-bottom text-sm", className) }, props)) }));
});
Table.displayName = "Table";
const TableHeader = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("thead", Object.assign({ ref: ref, className: cn("[&_tr]:border-b", className) }, props)));
});
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("tbody", Object.assign({ ref: ref, className: cn("[&_tr:last-child]:border-0", className) }, props)));
});
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("tfoot", Object.assign({ ref: ref, className: cn("bg-primary font-medium text-white", className) }, props)));
});
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("tr", Object.assign({ ref: ref, className: cn("border-b border-gray-300 dark:border-dark transition-colors hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-dark", "data-[state=selected]:bg-gray-200 data-[state=selected]:text-dark", className) }, props)));
});
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("th", Object.assign({ ref: ref, className: cn("h-10 px-2 text-left align-middle font-medium text-gray-700 hover:text-dark [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className) }, props)));
});
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("td", Object.assign({ ref: ref, className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className) }, props)));
});
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("caption", Object.assign({ ref: ref, className: cn("mt-4 text-sm text-gray-100", className) }, props)));
});
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, };
