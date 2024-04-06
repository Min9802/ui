import React from "react";
import { ApiInterface } from "./UploadAdapter";
import { EventInfo } from "@ckeditor/ckeditor5-utils";
export interface PluginInterface {
    (editor: any): void;
}
export interface CKEDITOR {
    config: {
        location: {
            disk: string;
            path: string;
        };
        api: ApiInterface;
    };
    plugins?: PluginInterface[];
    onReady?: (editor: any) => void;
    onBlur?: (event: EventInfo, editor: any) => void;
    onFocus?: (event: EventInfo, editor: any) => void;
    onChange?: (event: EventInfo, editor: any) => void;
}
export interface EditorRef {
    CKEditor?: any;
    EditorCustom?: any;
}
export declare const CkEditorCustom: React.FC<CKEDITOR>;
