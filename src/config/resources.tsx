import {
  DashboardOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import type { IResourceItem } from "@refinedev/core";
import { BikeWhiteIcon } from "../components";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "products",
    list: "/products",
    create: "/products/new",
    edit: "/products/:id/edit",
    show: "/products/:id",
    meta: {
      icon: <UnorderedListOutlined />,
    },
  },
  {
    name: "orders",
    list: "/orders",
    show: "/orders/:id",
    meta: {
      icon: <ShoppingOutlined />,
    },
  },
  {
    name: "couriers",
    list: "/couriers",
    create: "/couriers/new",
    edit: "/couriers/:id/edit",
    show: "/couriers/:id",
    meta: {
      icon: <BikeWhiteIcon />,
    },
  },
];
