var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Buffer } from 'buffer';
/**
 * class Server Uploader
 */
export class Server {
    /**
     * check directory exists
     * @param api
     * @param params
     * @returns
     */
    directoryExists(api, params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield api.directoryExists({
                    disk: params.disk,
                    path: params.path,
                });
                resolve(response);
            }
            catch (err) {
                reject(err.message);
            }
        }));
    }
    /**
     * make directory
     * @param config
     * @returns
     */
    makeDirectory(api, params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield api.createDirectory({
                    disk: params.disk,
                    name: params.name,
                });
                resolve(response);
            }
            catch (err) {
                reject(err.message);
            }
        }));
    }
    /**
     * preview file
     * @param data
     * @returns
     */
    previewFile(api, data) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield api.preview(data);
                const mimeType = response.headers["content-type"].toLowerCase();
                const imgBase64 = Buffer.from(response.data, "binary").toString("base64");
                const imageURL = `data:${mimeType};base64,${imgBase64}`;
                resolve({
                    default: imageURL,
                });
            }
            catch (err) {
                reject(err.message);
            }
        }));
    }
    onUploadProgress(data) {
        return data;
    }
    /**
     * upload
     * @param config
     * @param loader
     * @returns
     */
    uploader(api, params, file) {
        const body = new FormData();
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const DirExists = yield this.directoryExists(api, params);
            if (!DirExists) {
                const location = {
                    disk: "public",
                    name: params.path,
                };
                yield this.makeDirectory(api, location);
            }
            body.append("files[]", file);
            body.append("disk", params.disk);
            body.append("path", params.path);
            body.append("overwrite", "1");
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            try {
                const response = yield api.upload(body);
                const data = {
                    disk: response.data.files[0].disk,
                    path: response.data.files[0].path,
                };
                const preview = this.previewFile(api, data);
                resolve(preview);
            }
            catch (err) {
                reject(err.message);
            }
        }));
    }
    /**
     * abort the request
     */
    abortUpload() {
    }
}
/**
 * class Upload Adapter
 */
export class UploadAdapter {
    constructor(config, server, loader) {
        this.config = config;
        this.server = server;
        this.loader = loader;
    }
    // Starts the upload process.
    upload() {
        return this.loader.file
            .then((file) => this.server.uploader(this.config.api, this.config.location, file));
    }
    ;
    // Aborts the upload process.
    abort() {
        this.server.abortUpload();
    }
}
