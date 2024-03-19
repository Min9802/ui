import * as React from "react";
export interface DataTableProps {
    data: any[];
    columns: any[];
    search?: string;
    callBack?: (arg: any) => void;
}
export declare const DataTable: React.FC<DataTableProps>;
