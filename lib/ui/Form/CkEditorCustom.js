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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import EditorCustom from "@min98/ckeditor5-custom";
import { Server, UploadAdapter } from "./UploadAdapter";
export const CkEditorCustom = (_a) => {
    var { config } = _a, props = __rest(_a, ["config"]);
    if (!config.api) {
    }
    const UploadPlugin = function (editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            const server = new Server();
            return new UploadAdapter(config, server, loader);
        };
    };
    const Plugins = props.plugins ? props.plugins.map((plugin) => plugin) : [];
    const Configuration = {
        extraPlugins: [UploadPlugin, ...Plugins],
    };
    return (_jsx(CKEditor, Object.assign({ config: Configuration, editor: EditorCustom, onReady: (editor) => {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.onReady) === null || _a === void 0 ? void 0 : _a.call(props, editor);
        }, onBlur: (event, editor) => {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event, editor);
        }, onFocus: (event, editor) => {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, event, editor);
        }, onChange: (event, editor) => {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, event, editor);
        } }, props)));
};
CkEditorCustom.displayName = "CkEditorCustom";
