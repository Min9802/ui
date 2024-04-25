import * as React$1 from 'react';
import React__default, { InputHTMLAttributes, ChangeEventHandler, ReactNode } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { DayPicker, DateRange } from 'react-day-picker';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps as DialogProps$1 } from '@radix-ui/react-dialog';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as _radix_ui_react_slot from '@radix-ui/react-slot';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { EventInfo } from '@ckeditor/ckeditor5-utils';
import { PaginationState } from '@tanstack/react-table';
import { ClassValue } from 'clsx';
import * as input_otp from 'input-otp';

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const AlertDialog: React$1.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogContent: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const alertVariants: (props?: ({
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Alert: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const AspectRatio: React$1.ForwardRefExoticComponent<AspectRatioPrimitive.AspectRatioProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Avatar: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React$1.RefAttributes<HTMLImageElement>, "ref"> & React$1.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeCustom extends React$1.HTMLAttributes<HTMLDivElement> {
}
interface BadgeProps extends Omit<BadgeCustom, "color">, VariantProps<typeof badgeVariants> {
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light";
}
declare const Badge: {
    ({ className, variant, color, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "outline" | "ghost" | "icon" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonCustom extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
}
interface ButtonProps extends Omit<ButtonCustom, "color">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    variant?: "outline" | "ghost" | "link" | "icon";
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light";
    tooltip?: any;
    size?: "default" | "sm" | "lg";
    children?: any;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

type CalendarProps = React$1.ComponentProps<typeof DayPicker>;
declare const Calendar: {
    ({ className, classNames, showOutsideDays, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface DateTimePickerProps {
    date?: Date;
    setDate: (date: Date) => void;
}
declare const DateTimePicker: {
    ({ date, setDate }: DateTimePickerProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface DatePickerRangeProps {
    setDate: (date: DateRange) => void;
}
declare const DatePickerRange: React__default.FC<DatePickerRangeProps>;

declare const Card: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
declare const Carousel: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & CarouselProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: React$1.ForwardRefExoticComponent<Omit<ButtonProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React$1.ForwardRefExoticComponent<Omit<ButtonProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Checkbox: React$1.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Collapsible: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & React$1.HTMLAttributes<HTMLDivElement> & {
    label?: string | undefined;
    shouldFilter?: boolean | undefined;
    filter?: ((value: string, search: string) => number) | undefined;
    defaultValue?: string | undefined;
    value?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    loop?: boolean | undefined;
    vimBindings?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
interface CommandDialogProps extends DialogProps$1 {
}
declare const CommandDialog: {
    ({ children, ...props }: CommandDialogProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CommandInput: React$1.ForwardRefExoticComponent<Omit<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "type"> & {
    value?: string | undefined;
    onValueChange?: ((search: string) => void) | undefined;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<React$1.HTMLAttributes<HTMLDivElement>, "value" | "heading"> & {
    heading?: React$1.ReactNode;
    value?: string | undefined;
    forceMount?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<Omit<React$1.HTMLAttributes<HTMLDivElement> & {
    alwaysRender?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<React$1.HTMLAttributes<HTMLDivElement>, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean | undefined;
    onSelect?: ((value: string) => void) | undefined;
    value?: string | undefined;
    forceMount?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const ContextMenu: React$1.FC<ContextMenuPrimitive.ContextMenuProps>;
declare const ContextMenuTrigger: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const ContextMenuGroup: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuPortal: React$1.FC<ContextMenuPrimitive.ContextMenuPortalProps>;
declare const ContextMenuSub: React$1.FC<ContextMenuPrimitive.ContextMenuSubProps>;
declare const ContextMenuRadioGroup: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubContent: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuContent: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuLabel: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSeparator: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const dialogVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "md" | "xl" | "2xl" | "3xl" | "4xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface DialogCustom extends React$1.HTMLAttributes<HTMLDivElement> {
}
interface DialogProps extends DialogCustom, React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof dialogVariants> {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}
declare const DialogContent: React$1.ForwardRefExoticComponent<DialogProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    error?: react_hook_form.FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & React$1.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React$1.ForwardRefExoticComponent<Omit<_radix_ui_react_slot.SlotProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const FormDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

interface GridProps extends React$1.ComponentPropsWithoutRef<"div"> {
    className?: string;
    display?: string;
    col?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
    rows?: string;
    flow?: "row" | "col" | "row-dense" | "col-dense";
    align?: "stretch" | "start" | "center" | "end" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around";
    gap?: string;
    gapX?: string;
    gapY?: string;
    props?: any;
}
declare const Grid: React$1.ForwardRefExoticComponent<GridProps & React$1.RefAttributes<HTMLDivElement>>;

interface ColProps extends React$1.ComponentPropsWithoutRef<"div"> {
    className?: string;
    col?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
    spaceX?: string;
    spaceY?: string;
    start?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
    end?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
    props?: any;
}
declare const Col: React$1.ForwardRefExoticComponent<ColProps & React$1.RefAttributes<HTMLDivElement>>;

interface FlexProps extends React$1.ComponentPropsWithoutRef<"div"> {
    className?: string;
    display?: "flex" | "inline-flex" | "hidden" | "absolute" | "static" | "fixed" | "relative" | "sticky";
    direction?: "row" | "row-reverse" | "col" | "col-reverse";
    align?: "stretch" | "start" | "center" | "end" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    gap?: string;
    props?: any;
}
declare const Flex: React$1.ForwardRefExoticComponent<FlexProps & React$1.RefAttributes<HTMLDivElement>>;

declare const HoverCard: React$1.FC<HoverCardPrimitive.HoverCardProps>;
declare const HoverCardTrigger: React$1.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: React$1.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_types.ClassProp | undefined) => string> & React$1.RefAttributes<HTMLLabelElement>>;

declare const MenubarMenu: {
    (props: MenubarPrimitive.ScopedProps<MenubarPrimitive.MenubarMenuProps>): JSX.Element;
    displayName: string;
};
declare const MenubarGroup: React$1.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarPortal: React$1.FC<MenubarPrimitive.MenubarPortalProps>;
declare const MenubarSub: React$1.FC<MenubarPrimitive.MenubarSubProps>;
declare const MenubarRadioGroup: React$1.ForwardRefExoticComponent<MenubarPrimitive.MenubarRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const Menubar: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarTrigger: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const MenubarSubTrigger: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarSubContent: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarContent: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarItem: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarCheckboxItem: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarRadioItem: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarLabel: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarSeparator: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayname: string;
};

declare const NavigationMenu: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const NavigationMenuList: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React$1.RefAttributes<HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const NavigationMenuItem: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React$1.RefAttributes<HTMLLIElement>>;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare const NavigationMenuTrigger: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const NavigationMenuContent: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuLink: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const NavigationMenuViewport: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuIndicator: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Popover: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Progress: React$1.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const RadioGroup: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const ScrollArea: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Separator: React$1.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Sheet: React$1.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React$1.ForwardRefExoticComponent<SheetContentProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const Skeleton: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Slider: React$1.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

declare const Switch: React$1.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Table: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableElement> & React$1.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableRowElement> & React$1.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React$1.ForwardRefExoticComponent<React$1.ThHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React$1.ForwardRefExoticComponent<React$1.TdHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCaptionElement> & React$1.RefAttributes<HTMLTableCaptionElement>>;

declare const Tabs: React$1.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface TextareaProps extends React$1.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const ToastProvider: React$1.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React$1.RefAttributes<HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const Toast$1: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React$1.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light" | "info" | "info-light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type ToastProps = React$1.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = React$1.ReactElement<typeof ToastAction>;

declare const Toaster: React.FC;

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Toggle: React$1.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipPortal: React$1.FC<TooltipPrimitive.TooltipPortalProps>;
declare const TooltipArrow: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipArrowProps & React$1.RefAttributes<SVGSVGElement>>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type OptionMutiSelect = {
    value?: number | string;
    label?: string;
    disabled?: boolean;
};
interface MultipleSelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, "option"> {
    /**
     * A string of all className you want applied to the component.
     */
    className?: string;
    /**
     * Specifies the number of visible options in a drop-down list.
     */
    htmlSize?: number;
    /**
     * Method called immediately after the `value` prop changes.
     */
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    /**
     * Options list of the select component. Available keys: `label`, `value`, `disabled`.
     * Examples:
     * - `options={[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]}`
     * - `options={['js', 'html']}`
     */
    options?: OptionMutiSelect[];
    /**
     * The `value` attribute of component.
     *
     * @controllable onChange
     */
    selected?: string | number | string[];
    tags?: boolean;
    callback?: (agr: any) => void;
}
declare const MultipleSelect: React__default.FC<MultipleSelectProps>;

interface InputFormProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    control?: any;
    label?: string;
    name?: any;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    description?: string;
    placeholder?: string;
    props?: any;
    type?: string;
    handleFunc?: any;
}
declare const InputForm: React__default.FC<InputFormProps>;

type OptionComboBoxProps = {
    disabled?: boolean;
    label?: string;
    value?: string | number;
};
interface ComboBoxProps {
    options?: OptionComboBoxProps[] | any;
    selected?: string | number;
    callback?: (agr: any) => void;
}
declare const ComboBox: React$1.FC<ComboBoxProps>;

/**
 *
 * type parameters
 */
type Params = {
    disk: string;
    path: string;
};
/**
 * type directory
 */
type Directory = {
    disk: string;
    name: string;
};
/**
 * type of config
 */
type Config = {
    api: ApiInterface;
    location: Params;
};
/**
 * type for resolving
 */
type Resolving = {
    default: string;
};
/**
 * interface for FileLoader
 */
interface FileLoader {
    file: Promise<File>;
    uploadTotal: number;
    uploaded: number;
}
/**
 * interface for server
 */
interface ServerInterface {
    onUploadProgress(data: any): void;
    abortUpload(): void;
    uploader(api: ApiInterface, params: Params, file: File): Promise<Resolving>;
    directoryExists: (api: ApiInterface, params: Params) => Promise<[]>;
    makeDirectory(api: ApiInterface, params: Directory): Promise<any>;
    previewFile(api: ApiInterface, data: Params): Promise<any>;
}
interface ApiInterface {
    directoryExists: (params: Params) => Promise<any>;
    createDirectory: (params: Directory) => Promise<any>;
    upload: (params: FormData) => Promise<any>;
    preview: (params: Params) => Promise<any>;
}
/**
 * class Server Uploader
 */
declare class Server implements ServerInterface {
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
declare class UploadAdapter {
    private config;
    private server;
    private loader;
    constructor(config: Config, server: ServerInterface, loader: FileLoader);
    upload(): any;
    abort(): void;
}

interface PluginInterface {
    (editor: any): void;
}
interface CKEDITOR {
    config: {
        location: {
            disk: string;
            path: string;
        };
        api: ApiInterface;
    };
    plugins?: PluginInterface[];
    onReady?: (editor: any) => void;
    onBlur?: (event: EventInfo, editor: any) => void;
    onFocus?: (event: EventInfo, editor: any) => void;
    onChange?: (event: EventInfo, editor: any) => void;
}
declare const CkEditorCustom: React__default.FC<CKEDITOR>;

interface ContextMenuProps {
    className?: string;
    asChild?: boolean;
    title?: any;
    list?: ContextMenuType[];
    props?: any;
    ref?: any;
}
type ContextMenuType = {
    title?: any;
    disabled?: boolean;
    shortcut?: React__default.ReactNode;
    sub?: ContextMenuType[];
    action?: () => void;
};
interface ItemProps {
    item: ContextMenuType;
}
declare const ContextMenuCustom: React__default.ForwardRefExoticComponent<Omit<ContextMenuProps, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;

interface AlertDialogProps {
    open: boolean;
    title?: string;
    message?: string;
    children?: ReactNode;
    action?: () => void;
    cancel: () => void;
}
declare const Modal: React__default.FC<AlertDialogProps>;

interface DialogModalProps extends React__default.ComponentPropsWithoutRef<"div"> {
    className?: string;
    open: boolean;
    title?: string;
    desc?: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    children?: React__default.ReactNode;
    action?: (data?: any) => void;
    cancel: () => void;
    draggable?: boolean;
    props?: any;
}
declare const DialogModal: React__default.ForwardRefExoticComponent<DialogModalProps & React__default.RefAttributes<HTMLDivElement>>;

interface DataTableProps {
    data: any[];
    columns: any[];
    search?: string;
    hidden?: string[];
    pagination?: any;
    pageCount?: number;
    onPaginationChange?: (arg: any) => void;
    callBack?: (arg: any) => void;
    action?: string | React$1.ReactNode;
}
declare const usePagination: () => {
    limit: number;
    onPaginationChange: React$1.Dispatch<React$1.SetStateAction<PaginationState>>;
    pagination: PaginationState;
    skip: number;
};
declare const DataTable: React$1.FC<DataTableProps>;

type ButtonGroupProps = {
    children: React__default.ReactNode;
};
declare const ButtonGroup: React__default.FC<ButtonGroupProps>;

interface CloseButtonProps extends React__default.HTMLAttributes<HTMLButtonElement> {
    /**
     * A string of all className you want applied to the base component.
     */
    className?: string;
    /**
     * Toggle the disabled state for the component.
     */
    disabled?: boolean;
    /**
     * Change the default color to white.
     */
    white?: boolean;
}
declare const CloseButton: React__default.ForwardRefExoticComponent<CloseButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

interface PropsCard {
    icon?: ReactNode;
    body?: {
        content?: ReactNode;
        color?: string;
    };
    desc?: ReactNode | string;
    footer?: {
        content?: ReactNode | string;
        color?: string;
    };
    style?: {
        class?: string;
        border?: string;
        height?: string;
        width?: string;
        backgroundColor?: string;
    };
}
declare const CardMini: React__default.FC<PropsCard>;

type DropdownProps = {
    label: string;
    icon?: React__default.ReactNode;
    path?: string;
    child?: DropdownProps[];
    action?: () => void;
};
interface DropdownMenuProps {
    icon?: React__default.ReactNode;
    label?: string | React__default.ReactNode;
    list: DropdownProps[];
}
interface RenderMenuProps {
    item: DropdownProps;
}
declare const RenderMenu: React__default.FC<RenderMenuProps>;
declare const Dropdown: React__default.FC<DropdownMenuProps>;

declare const Loader: React__default.FC;

interface SheetProps {
    className?: string;
    open: boolean;
    title?: string;
    description?: string;
    children?: React__default.ReactNode;
    cancel: () => void;
}
declare const SheetCustom: React__default.FC<SheetProps>;

type ToasterToast = ToastProps & {
    id: string;
    title?: React__default.ReactNode;
    description?: React__default.ReactNode;
    status?: string | "success" | "error" | "warning" | "info";
    action?: ToastActionElement;
};
type Toast = Omit<ToasterToast, "id">;
/**
 * toast function
 * @param param0
 * @returns
 */
declare const toast: ({ ...props }: Toast) => {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
/**
 * useToast hook
 * @returns
 */
declare const useToast: () => {
    toast: ({ ...props }: Toast) => {
        id: string;
        dismiss: () => void;
        update: (props: ToasterToast) => void;
    };
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

type CallbackRepeat = () => void;
declare const cn: (...inputs: ClassValue[]) => string;
declare const repeat: (callback: CallbackRepeat, delay: number) => Promise<void>;

type SetValue<T> = T | ((val: T) => T);
declare function useLocalStorage<T>(key: string, initialValue: T): [T, (value: SetValue<T>) => void];

declare const InputOTP: React$1.ForwardRefExoticComponent<(Omit<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string | undefined;
    onChange?: ((newValue: string) => unknown) | undefined;
    maxLength: number;
    textAlign?: "center" | "right" | "left" | undefined;
    onComplete?: ((...args: any[]) => unknown) | undefined;
    pushPasswordManagerStrategy?: "none" | "increase-width" | undefined;
    containerClassName?: string | undefined;
    noScriptCSSFallback?: string | null | undefined;
} & {
    render: (props: input_otp.RenderProps) => React$1.ReactNode;
    children?: undefined;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> | Omit<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string | undefined;
    onChange?: ((newValue: string) => unknown) | undefined;
    maxLength: number;
    textAlign?: "center" | "right" | "left" | undefined;
    onComplete?: ((...args: any[]) => unknown) | undefined;
    pushPasswordManagerStrategy?: "none" | "increase-width" | undefined;
    containerClassName?: string | undefined;
    noScriptCSSFallback?: string | null | undefined;
} & {
    render?: undefined;
    children: React$1.ReactNode;
} & React$1.RefAttributes<HTMLInputElement>, "ref">) & React$1.RefAttributes<HTMLInputElement>>;
declare const InputOTPGroup: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const InputOTPSlot: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    index: number;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const InputOTPSeparator: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface Hour {
    number: string;
    translatedValue: string;
    selected?: boolean;
    arrayNumber?: number;
}
interface HourFormatProps {
    height: number;
    setHourFormat: (format: any) => void;
    hourFormat: any;
}
declare const HourFormat: React__default.FC<HourFormatProps>;

interface Hours {
    number: string;
    translatedValue: string;
    selected: boolean;
    hidden?: boolean;
}
interface HourWheelProps {
    height: number;
    value: string;
    setValue: (value: any) => void;
    use12Hours?: boolean;
}
declare const HourWheel: React__default.FC<HourWheelProps>;

interface Minute {
    number: string;
    translatedValue: string;
    selected: boolean;
}
interface MinuteWheelProps {
    height: number;
    value: string;
    setValue: (value: any) => void;
}
declare const MinuteWheel: React__default.FC<MinuteWheelProps>;

interface PickerEffectsProps {
    height: number;
}
declare const PickerEffects: React__default.FC<PickerEffectsProps>;

interface TimePickerSelectionProps {
    pickerDefaultValue?: string;
    initialValue: string;
    onChange?: (value: string) => void;
    height?: number;
    onSave?: (value: string) => void;
    onCancel?: () => void;
    cancelButtonText?: string;
    saveButtonText?: string;
    controllers?: boolean;
    setInputValue: (value: string | null) => void;
    setIsOpen: (isOpen: boolean) => void;
    seperator?: boolean;
    use12Hours?: boolean;
    onAmPmChange?: (value: string) => void;
}
declare const TimePickerSelection: React__default.FC<TimePickerSelectionProps>;

interface TimePickerProps extends Omit<TimePickerSelectionProps, "setInputValue" | "setIsOpen" | "initialValue" | "onFinish"> {
    className?: string;
    value?: string | null;
    height?: number;
    cellHeight?: number;
    placeHolder?: string;
    pickerDefaultValue?: string;
    onChange?: (value: string) => void;
    onFinish?: (payload?: any) => void;
    onFocus?: () => void;
    onSave?: () => void;
    onCancel?: () => void;
    disabled?: boolean;
    open?: boolean;
    required?: boolean;
    cancelButtonText?: string;
    saveButtonText?: string;
    controllers?: boolean;
    seperator?: boolean;
    id?: string | null;
    use12Hours?: boolean;
    onAmPmChange?: () => void;
    name?: string | null;
    onOpen?: () => void;
    inputClassName?: string | null;
}
declare const TimePicker: React__default.FC<TimePickerProps>;

declare const initialNumbersValue: (heightValue?: number, numbersLength?: number, value?: number | null) => {
    number: string;
    translatedValue: string;
    selected: boolean;
    hidden?: boolean;
}[];
declare const returnSelectedValue: (heightValue?: number, numbersLength?: number) => {
    number: string;
    translatedValue: string;
    arrayNumber: number;
}[];

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, type AlertDialogProps, AlertDialogTitle, AlertDialogTrigger, AlertTitle, type ApiInterface, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, type CKEDITOR, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardMini, CardTitle, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Checkbox, CkEditorCustom, CloseButton, type CloseButtonProps, Col, type ColProps, Collapsible, CollapsibleContent, CollapsibleTrigger, ComboBox, type ComboBoxProps, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, type Config, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuCustom, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, type ContextMenuProps, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, type ContextMenuType, DataTable, type DataTableProps, DatePickerRange, DateTimePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogModal, type DialogModalProps, DialogTitle, DialogTrigger, type Directory, Dropdown, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, type DropdownMenuProps, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, type DropdownProps, type FileLoader, Flex, type FlexProps, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Grid, type GridProps, type Hour, HourFormat, type HourFormatProps, HourWheel, type HourWheelProps, type Hours, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputForm, type InputFormProps, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, type ItemProps, Label, Loader, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, type Minute, MinuteWheel, type MinuteWheelProps, Modal, MultipleSelect, type MultipleSelectProps, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, type OptionComboBoxProps, type OptionMutiSelect, type Params, PickerEffects, type PickerEffectsProps, type PluginInterface, Popover, PopoverContent, PopoverTrigger, Progress, type PropsCard, RadioGroup, RadioGroupItem, RenderMenu, type RenderMenuProps, type Resolving, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Server, type ServerInterface, Sheet, SheetClose, SheetContent, SheetCustom, SheetDescription, SheetFooter, SheetHeader, type SheetProps, SheetTitle, SheetTrigger, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, TimePicker, type TimePickerProps, TimePickerSelection, type TimePickerSelectionProps, Toast$1 as Toast, ToastAction, type ToastActionElement, ToastClose, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger, UploadAdapter, alertVariants, badgeVariants, buttonVariants, cn, initialNumbersValue, navigationMenuTriggerStyle, repeat, returnSelectedValue, toast, toggleVariants, useFormField, useLocalStorage, usePagination, useToast };
