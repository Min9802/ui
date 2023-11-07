"use client";

import { Icon } from "@iconify/react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../ui/toast";
import { useToast } from "../ui/use-toast";
import { ReactNode } from "react";
interface IconProps {
  status: string;
}
const RenderIcon: React.FC<IconProps> = ({ status }) => {
  let icon: ReactNode = "";
  switch (status) {
    case "success":
      icon = <Icon icon="tabler:circle-check" fontSize={24} />;
      break;
    case "error":
      icon = <Icon icon="tabler:alert-circle" fontSize={24} />;
      break;
    case "warning":
      icon = <Icon icon="tabler:alert-small" fontSize={24} />;
      break;
    case "info":
      icon = <Icon icon="tabler:exclamation-mark" fontSize={24} />;
      break;
    default:
      icon = <Icon icon="tabler:circle-check" fontSize={24} />;
      break;
  }
  return icon;
};

type ColorProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "primary-light"
  | "secondary-light"
  | "success-light"
  | "info-light"
  | "warning-light"
  | "danger-light";
const getColor = (status: any) => {
  let color: ColorProps = "primary";
  switch (status) {
    case "success":
      color = "success";
      break;
    case "error":
      color = "danger";
      break;
    case "warning":
      color = "warning";
      break;
    case "info":
      color = "info";
      break;
    default:
      color = "success";
      break;
  }
  return color;
};
const Toaster: React.FC = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(
        ({ id, title, description, status = "success", action, ...props }) => {
          const color = getColor(status);
          return (
            <Toast
              key={id}
              color={color}
              {...props}
              className={action ? "justify-between" : ""}
            >
              <RenderIcon status={status} />
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              {action}
              <ToastClose />
            </Toast>
          );
        }
      )}
      <ToastViewport />
    </ToastProvider>
  );
};
Toaster.displayName = "Toaster";
export { Toaster };
