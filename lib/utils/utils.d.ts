import { type ClassValue } from "clsx";
export type CallbackRepeat = () => void;
export declare const cn: (...inputs: ClassValue[]) => string;
export declare const repeat: (callback: CallbackRepeat, delay: number) => Promise<void>;
