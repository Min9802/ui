/**
 *
 * type parameters
 */
export type Params = {
    disk: string;
    path: string;
};
/**
 * type directory
 */
export type Directory = {
    disk: string;
    name: string;
};
/**
 * type of config
 */
export type Config = {
    api: ApiInterface;
    location: Params;
};
/**
 * type for resolving
 */
export type Resolving = {
    default: string;
};
/**
 * interface for FileLoader
 */
export interface FileLoader {
    file: Promise<File>;
    uploadTotal: number;
    uploaded: number;
}
/**
 * interface for server
 */
export interface ServerInterface {
    onUploadProgress(data: any): void;
    abortUpload(): void;
    uploader(api: ApiInterface, params: Params, file: File): Promise<Resolving>;
    directoryExists: (api: ApiInterface, params: Params) => Promise<[]>;
    makeDirectory(api: ApiInterface, params: Directory): Promise<any>;
    previewFile(api: ApiInterface, data: Params): Promise<any>;
}
export interface ApiInterface {
    directoryExists: (params: Params) => Promise<any>;
    createDirectory: (params: Directory) => Promise<any>;
    upload: (params: FormData) => Promise<any>;
    preview: (params: Params) => Promise<any>;
}
/**
 * class Server Uploader
 */
export declare class Server implements ServerInterface {
    /**
     * check directory exists
     * @param api
     * @param params
     * @returns
     */
    directoryExists(api: ApiInterface, params: Params): Promise<any>;
    /**
     * make directory
     * @param config
     * @returns
     */
    makeDirectory(api: ApiInterface, params: Directory): Promise<any>;
    /**
     * preview file
     * @param data
     * @returns
     */
    previewFile(api: ApiInterface, data: Params): Promise<any>;
    onUploadProgress(data: any): any;
    /**
     * upload
     * @param config
     * @param loader
     * @returns
     */
    uploader(api: ApiInterface, params: Params, file: File): Promise<Resolving>;
    /**
     * abort the request
     */
    abortUpload(): void;
}
/**
 * class Upload Adapter
 */
export declare class UploadAdapter {
    private config;
    private server;
    private loader;
    constructor(config: Config, server: ServerInterface, loader: FileLoader);
    upload(): any;
    abort(): void;
}
