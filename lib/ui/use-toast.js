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
// Inspired by react-hot-toast library
import React from "react";
const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 60000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST",
};
let count = 0;
/**
 * generate id
 * @returns
 */
const genId = () => {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
};
const toastTimeouts = new Map();
/**
 * remove toast from queue
 * @param toastId
 * @returns
 */
const addToRemoveQueue = (toastId) => {
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId,
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
/**
 * reducer function
 * @param state
 * @param action
 * @returns
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TOAST":
            return Object.assign(Object.assign({}, state), { toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) });
        case "UPDATE_TOAST":
            return Object.assign(Object.assign({}, state), { toasts: state.toasts.map((t) => t.id === action.toast.id ? Object.assign(Object.assign({}, t), action.toast) : t) });
        case "DISMISS_TOAST": {
            const { toastId } = action;
            // ! Side effects ! - This could be extracted into a dismissToast() action,
            // but I'll keep it here for simplicity
            if (toastId) {
                addToRemoveQueue(toastId);
            }
            else {
                state.toasts.forEach((toast) => {
                    addToRemoveQueue(toast.id);
                });
            }
            return Object.assign(Object.assign({}, state), { toasts: state.toasts.map((t) => t.id === toastId || toastId === undefined
                    ? Object.assign(Object.assign({}, t), { open: false }) : t) });
        }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return Object.assign(Object.assign({}, state), { toasts: [] });
            }
            return Object.assign(Object.assign({}, state), { toasts: state.toasts.filter((t) => t.id !== action.toastId) });
    }
};
const listeners = [];
let memoryState = { toasts: [] };
const dispatch = (action) => {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener) => {
        listener(memoryState);
    });
};
/**
 * toast function
 * @param param0
 * @returns
 */
const toast = (_a) => {
    var props = __rest(_a, []);
    const id = genId();
    const update = (props) => dispatch({
        type: "UPDATE_TOAST",
        toast: Object.assign(Object.assign({}, props), { id }),
    });
    const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
    dispatch({
        type: "ADD_TOAST",
        toast: Object.assign(Object.assign({}, props), { id, open: true, onOpenChange: (open) => {
                if (!open)
                    dismiss();
            } }),
    });
    return {
        id: id,
        dismiss,
        update,
    };
};
/**
 * useToast hook
 * @returns
 */
const useToast = () => {
    const [state, setState] = React.useState(memoryState);
    React.useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [state]);
    return Object.assign(Object.assign({}, state), { toast, dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }) });
};
export { useToast, toast };
