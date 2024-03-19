import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../../ui/table";
import { Icon } from "@iconify/react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "../../ui/select";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, } from "../../ui/dropdown-menu";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import classNames from "classnames";
import { repeat } from "../../utils/utils";
export const DataTable = ({ data = [], columns = [], search = "", callBack, }) => {
    var _a, _b, _c;
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnResizeMode, setColumnResizeMode] = React.useState("onChange");
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        columnResizeMode,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    /**
     * hook callback
     */
    React.useEffect(() => {
        const rowSelected = table.getSelectedRowModel().flatRows;
        const selected = rowSelected.map((action) => action.original);
        callBack === null || callBack === void 0 ? void 0 : callBack(selected);
    }, [rowSelection]);
    /**
     * hooke reset selection
     */
    React.useEffect(() => {
        repeat(() => {
            table.resetRowSelection();
        }, 60000);
    }, []);
    return (_jsxs("div", { className: "w-full", children: [_jsxs("div", { className: "lg:flex lg:flex-row md:flex md:flex-col py-4 gap-1 justify-between items-center", children: [_jsx("div", { className: "gap-1", children: search ? (_jsx(Input, { placeholder: "Filter...", value: (_b = (_a = table.getColumn(search)) === null || _a === void 0 ? void 0 : _a.getFilterValue()) !== null && _b !== void 0 ? _b : "", onChange: (event) => { var _a; return (_a = table.getColumn(search)) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); }, className: "max-w-sm" })) : null }), _jsxs("div", { className: "flex items-end justify-end", children: [_jsxs(Select, { value: columnResizeMode, onValueChange: (e) => setColumnResizeMode(e), children: [_jsx(SelectTrigger, { className: "w-auto", children: _jsx(SelectValue, { placeholder: "Choose select" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Resize" }), _jsx(SelectItem, { value: "onEnd", children: "Resize: onEnd" }), _jsx(SelectItem, { value: "onChange", children: "Resize: onChange" })] }) })] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "ml-auto", children: ["Columns", _jsx(Icon, { icon: "mdi:chevron-down", className: "ml-2 h-4 w-4" })] }) }), _jsx(DropdownMenuContent, { align: "end", children: table
                                            .getAllColumns()
                                            .filter((column) => column.getCanHide())
                                            .map((column) => {
                                            return (_jsx(DropdownMenuCheckboxItem, { className: "capitalize", checked: column.getIsVisible(), onCheckedChange: (value) => column.toggleVisibility(!!value), children: column.id }, column.id));
                                        }) })] })] })] }), _jsx("div", { className: "rounded-md border", children: _jsxs(Table, { style: { width: table.getTotalSize() }, children: [_jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header, index, headers) => {
                                    var _a;
                                    return (_jsxs(TableHead, { className: classNames("border-1 border-gray-200 relative !text-center", headerGroup.headers.length >= 5 &&
                                            index === headers.length - 1
                                            ? "sm:sticky sm:right-0 sm:bg-gray-200 md:sticky md:right-0 md:bg-gray-200 shadow-md"
                                            : "", (_a = header.column.columnDef) === null || _a === void 0 ? void 0 : _a.meta), style: {
                                            width: header.getSize(),
                                        }, colSpan: header.colSpan, children: [header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext()), _jsx("div", { onMouseDown: header.getResizeHandler(), onTouchStart: header.getResizeHandler(), className: "cursor-col-resize absolute right-0 top-0 h-full w-[5px] select-none touch-none", style: {
                                                    transform: columnResizeMode === "onEnd" &&
                                                        header.column.getIsResizing()
                                                        ? `translateX(${table.getState().columnSizingInfo.deltaOffset}px)`
                                                        : "",
                                                } })] }, header.id));
                                }) }, headerGroup.id))) }), _jsx(TableBody, { children: ((_c = table.getRowModel().rows) === null || _c === void 0 ? void 0 : _c.length) ? (table.getRowModel().rows.map((row) => (_jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell, index, cells) => {
                                    var _a;
                                    return (_jsx(TableCell, { style: {
                                            width: cell.column.getSize(),
                                        }, className: classNames(row.getVisibleCells().length >= 5 &&
                                            index === cells.length - 1
                                            ? "sm:sticky sm:right-0 sm:bg-gray-200 md:sticky md:right-0 md:bg-gray-200 shadow-md"
                                            : "", (_a = cell.column.columnDef) === null || _a === void 0 ? void 0 : _a.meta, "!text-center"), children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id));
                                }) }, row.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No Data" }) })) })] }) }), _jsxs("div", { className: "lg:flex lg:flex-row md:flex md:flex-col items-center justify-end space-x-2 py-4", children: [_jsxs("div", { className: "flex-1 text-sm text-dark dark:text-white", children: [table.getFilteredSelectedRowModel().rows.length, " of", " ", table.getFilteredRowModel().rows.length, " row(s) selected."] }), _jsxs("div", { className: "lg:flex lg:flex-row md:flex md:flex-col items-center gap-2", children: [_jsxs("div", { className: "flex flex-row", children: [_jsx(Button, { size: "sm", onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage(), tooltip: "first", children: "<<" }), _jsx(Button, { size: "sm", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), tooltip: "previous", children: "<" }), _jsx(Button, { size: "sm", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), tooltip: "next", children: ">" }), _jsx(Button, { size: "sm", onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage(), tooltip: "last", children: ">>" })] }), _jsxs("div", { className: "flex flex-row", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx("div", { children: "page" }), _jsxs("strong", { children: [table.getState().pagination.pageIndex + 1, " ", "of", table.getPageCount()] })] }), _jsxs("span", { className: "flex items-center gap-1", children: ["| ", "Go to", ":", _jsx(Input, { type: "number", defaultValue: table.getState().pagination.pageIndex + 1, onChange: (e) => {
                                                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                                    table.setPageIndex(page);
                                                }, className: "border p-1 rounded w-16" })] })] }), _jsx("div", { className: "flex flex-row", children: _jsxs(Select, { name: "status", value: String(table.getState().pagination.pageSize), onValueChange: (value) => {
                                        table.setPageSize(Number(value));
                                    }, children: [_jsx(SelectTrigger, { className: "w-auto", children: _jsx(SelectValue, { placeholder: "show" + table.getState().pagination.pageSize }) }), _jsx(SelectContent, { children: _jsx(SelectGroup, { children: ["10", "20", "30", "40", "50"].map((pageSize, key) => (_jsx(SelectItem, { value: pageSize, children: " show " + pageSize }, key))) }) })] }) })] })] })] }));
};
