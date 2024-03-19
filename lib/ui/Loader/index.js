import { jsx as _jsx } from "react/jsx-runtime";
export const Loader = () => {
    return (_jsx("div", { className: "flex h-screen items-center justify-center bg-white", children: _jsx("div", { className: "h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" }) }));
};
