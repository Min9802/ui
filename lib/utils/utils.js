'use client';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
export const repeat = (callback, delay) => {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            callback();
            resolve();
        }, delay);
        return clearInterval(intervalId);
    });
};
