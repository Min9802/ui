### Examples use package @min98/ui

# Grid

```tsx
import { Grid } from "@min98/ui";
<Grid col="3">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</Grid>;
```

# Col

```tsx
import { Col } from "@min98/ui";
<Col col="3">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</Col>;
```

# Flex

```tsx
import { Flex } from "@min98/ui";
<Flex display="inline-flex">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</Flex>;
```

## Input Customize

```tsx
import { InputForm } from "@min98/ui";
import { Icon } from "@iconify/react";
const Onchange = (event: any) => {
  const { name, value } = event.target;
};
<InputForm
  name="display_name"
  label="display name"
  type="text"
  iconStart={<Icon icon="mdi:label" />}
  placeholder="display name"
  description="display name"
  onChange={Onchange}
/>;
```

## ComboBox (Select)

```tsx
import { ComboBox }, { OptionComboBoxProps } from "@min98/ui";
const Onchange = (value: string | number) => {
    console.log(value);
}
const options: OptionComboBoxProps[] = [
    {
        value: "next.js",
        label: "Next.js",
        disabled: true,
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
]
<ComboBox options={options} callback={Onchange}/>
```

## MutipleSelect

```tsx
import { MultipleSelect, OptionMutiSelect } from "@min98/ui";
const [selecteds, setSelected] = React.useState<any>();
const selects: OptionMutiSelect[] = [
  {
    text: "Select1",
    value: "Select1",
  },
  {
    text: "Select2",
    value: "Select2",
  },
  {
    text: "Select3",
    value: "Select3",
  },
];
<MultipleSelect
  options={selects}
  callback={(value: any) => setSelected(value)}
  value={selecteds}
/>;
```

# Dropdown

```tsx
import Dropdown, { DropdownProps } from "@min98/ui";
const list: DropdownProps[] = [
  {
    label: "date",
    icon: <Icon icon="tabler:calendar-month" />,
    action: () => {
      console.log(143);
    },
    child: [
      {
        label: "date1",
        icon: <Icon icon="tabler:calendar-month" />,
        path: "/admin/date1",
        child: [
          {
            label: "date2",
            icon: <Icon icon="tabler:calendar-month" />,
            action: () => {
              console.log(123);
            },
          },
          {
            label: "dateRange2",
            icon: <Icon icon="tabler:calendar-week" />,
            path: "/admin/dateRange2",
          },
        ],
      },
      {
        label: "dateRange",
        icon: <Icon icon="tabler:calendar-week" />,
        path: "/admin/dateRange",
      },
    ],
  },
  {
    label: "dateRange",
    icon: <Icon icon="tabler:calendar-week" />,
    path: "/admin/dateRange",
  },
];
<Dropdown icon={<Icon icon="tabler:x" />} label="Nuxt.js" list={list} />;
```

# DatePicker

```tsx
import { DateTimePicker } from "@min98/ui";
const [date, setDate] = React.useState<Date>();
<DateTimePicker date={date} setDate={setDate} />;
```

# DateRangePicker

```tsx
import { DatePickerRange } from "@min98/ui";
const [dateRange, setDateRange] = React.useState<DateRange>();
<DatePickerRange setDate={setDateRange} />;
```

# ContextMenu

```tsx
import { ContextMenuProps, ContextMenuType, ContextMenu } from "@min98/ui";
const menus: ContextMenuType[] = [
  {
    title: "preview",
    shortcut: <Icon icon="mdi:eye" />,
    action: () => {
      console.log(143);
    },
  },
  {
    title: "preview1",
    shortcut: <Icon icon="mdi:eye" />,
    action: () => {
      console.log(123);
    },
  },
];
<ContextMenu title={"aaa"} list={menus} />;
```

# Modal

```tsx
import React from "react";
import { Modal } from "@min98/ui";
const [modal, setModal] = React.useState<boolean>(false);
const handleModal = (data: any) => {
  console.log(data);
};
<Modal
  title={"Info"}
  open={modal}
  cancel={() => setModal(false)}
  action={() => handleModal("Action Modal")}
  message={"Are you sure you want to"}
/>;
```

# DialogModal

```tsx
import React from "react";
import { DialogModal } from "@min98/ui";
const [modal, setModal] = React.useState<boolean>(false);
const handleModal = (data: any) => {
  console.log(data);
};
<DialogModal
  open={modal}
  size="4xl"
  action={() => setModal(false)}
  cancel={() => setModal(false)}
>
  <div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ab debitis
    molestiae cum libero eos maxime maiores laborum suscipit tempora sint, vero,
    nisi nemo eius nihil facilis? Dolor, quisquam! Quod.
  </div>
</DialogModal>;
```

# SheetCustom

```tsx
import React from "react";
import { SheetCustom } from "@min98/ui";
const [open, setOpen] = React.useState<boolean>(false);
const handleModal = (data: any) => {
  console.log(data);
};
<DialogModal
  open={open}
  cancel={() => setOpen(false)}
  title={"Lorem Ipsum"}
  description={"Lorem Ipsum description"}
  className="overflow-y-auto"
>
  <div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ab debitis
    molestiae cum libero eos maxime maiores laborum suscipit tempora sint, vero,
    nisi nemo eius nihil facilis? Dolor, quisquam! Quod.
  </div>
</DialogModal>;
```

# Tabs

```tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Input,
  Label,
  Button,
} from "@min98/ui";
<Tabs defaultValue="account" className="lg:w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    <Card>
      <CardHeader>
        <CardTitle>password</CardTitle>
        <CardDescription>password</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="password">Current Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save password</Button>
      </CardFooter>
    </Card>
  </TabsContent>
</Tabs>;
```

# Table

```tsx
import {
  Badge,
  Button,
  Card,
  CardContent,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  toast,
} from "@min98/ui";
import { ColumnDef } from "@tanstack/react-table";
type Role = {
  id: string;
  name: string;
  guard_name: string;
  permissions: Permission[];
  created_at: string;
  updated_at: string;
};
type Staff = {
  id: string;
  username: string;
  name: string;
  email: string;
  roles: Role[];
  status_2fa: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};
const list: Staff[] = [
  {
    id: 1,
    username: "Example",
    name: "Example",
    email: "Example@gmail.com",
    email_verified_at: null,
    status_2fa: 0,
    created_at: "2024-02-26T01:23:59.000000Z",
    updated_at: "2024-02-26T01:23:59.000000Z",
    deleted_at: null,
    roles: [
      {
        id: 1,
        name: "ExampleRole",
        guard_name: "ExampleGuard",
        created_at: "2024-02-26T01:23:59.000000Z",
        updated_at: "2024-02-26T01:23:59.000000Z",
      },
    ],
  },
  {
    id: 2,
    username: "Example2",
    name: "Example2",
    email: "Example2@gmail.com",
    email_verified_at: null,
    status_2fa: 0,
    created_at: "2024-02-26T01:23:59.000000Z",
    updated_at: "2024-02-26T01:23:59.000000Z",
    deleted_at: null,
    roles: [
      {
        id: 1,
        name: "ExampleRole2",
        guard_name: "ExampleGuard2",
        created_at: "2024-02-26T01:23:59.000000Z",
        updated_at: "2024-02-26T01:23:59.000000Z",
      },
    ],
  },
];
const columns: ColumnDef<Staff>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    maxSize: 40,
  },
  {
    accessorKey: "username",

    header: "username",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "email",

    header: "email",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "name",

    header: "name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "role",

    header: role,
    cell: ({ row }) => {
      const data = row.original;
      const roles = data.roles;

      return (
        <div className="text-center font-medium space-x-1 space-y-1">
          {roles.map((role, key) => (
            <Badge key={key} color="secondary">
              {role.name}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "banned",

    header: () => <div className="text-center">{"status"}</div>,
    cell: ({ row }) => {
      const value = row.getValue("banned");
      const data = row.original;
      return (
        <div className="text-center font-medium">
          {value == 1 ? (
            <Badge color="danger" onClick={() => toggleUpdateStatus(data)}>
              {"banned"}
            </Badge>
          ) : (
            <Badge color="success" onClick={() => toggleUpdateStatus(data)}>
              {"permitted"}
            </Badge>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    maxSize: 40,
    header: () => <div className="text-center">{"action"}</div>,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">{"open menu"}</span>
              <Icon icon="mdi:dots-horizontal" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t("label.action")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                console.log(data);
              }}
            >
              {"edit"}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                console.log(data);
              }}
              disabled={data.username == "Admin"}
            >
              <span className="text-red-500">{"delete"}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
<DataTable data={list} columns={columns} search="username" />;
```
