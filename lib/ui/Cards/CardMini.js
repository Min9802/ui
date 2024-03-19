import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const CardMini = ({ icon, body, desc, footer, style, }) => {
    const { border, height, width, backgroundColor } = style || {};
    const cardClass = "border border-stroke py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark";
    const borderRadius = border ? `rounded-${border}` : "rounded-lg border";
    const background = backgroundColor ? `bg-${backgroundColor}` : "bg-white";
    const Height = height ? `h-${height}` : "h-11.5";
    const Width = width ? `w-${width}` : "w-11.5";
    const BodyColor = (body === null || body === void 0 ? void 0 : body.color) ? body === null || body === void 0 ? void 0 : body.color : "text-black";
    const FooterColor = (footer === null || footer === void 0 ? void 0 : footer.color) ? footer === null || footer === void 0 ? void 0 : footer.color : "text-meta-3";
    return (_jsxs("div", { className: `${borderRadius} ${background} ${cardClass}`, children: [_jsx("div", { className: `flex ${Height} ${Width} items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4`, children: icon }), _jsxs("div", { className: "mt-4 flex items-end justify-between", children: [_jsxs("div", { children: [_jsx("h4", { className: `text-title-md font-bold dark:text-white ${BodyColor}`, children: body === null || body === void 0 ? void 0 : body.content }), _jsx("span", { className: "text-sm font-medium", children: desc })] }), _jsx("span", { className: `flex items-center gap-1 text-sm font-medium ${FooterColor}`, children: footer === null || footer === void 0 ? void 0 : footer.content })] })] }));
};
export default CardMini;
