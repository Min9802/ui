import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipPortal: React.FC<TooltipPrimitive.TooltipPortalProps>;
declare const TooltipArrow: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipArrowProps & React.RefAttributes<SVGSVGElement>>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Tooltip, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, TooltipProvider, };
