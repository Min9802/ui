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
import { cn } from "../utils/utils";
const Skeleton = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: cn("animate-pulse rounded-md bg-secondary/10", className) }, props)));
};
Skeleton.displayName = "Skeleton";
export { Skeleton };
