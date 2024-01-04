import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),

  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 16C32 24.8 24.8 32 16 32C7.2 32 0 24.8 0 16C0 7.2 7.2 0 16 0C24.8 0 32 7.2 32 16Z"
            fill="black"
          />
          <path
            d="M10.1818 8.72729H17.4546C21.4712 8.72729 24.7273 11.9834 24.7273 16C24.7273 20.0166 21.4712 23.2728 17.4546 23.2728H10.1818V8.72729Z"
            stroke="url(#paint0_linear_2235_3001)"
            stroke-width="1.11111"
          />
          <path
            d="M22.0786 10.4253C20.8365 9.40606 19.3857 8.74456 17.6556 8.72729L10.3614 16L17.6556 23.2728C19.3856 23.2554 20.8365 22.5753 22.0786 21.5562C22.0484 21.526 20.0999 19.6452 19.3941 18.9416C18.6883 18.238 16.9294 16.5276 16.4 16C16.4 16 22.0484 10.4554 22.0786 10.4253Z"
            stroke="url(#paint1_linear_2235_3001)"
            stroke-width="1.11111"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2235_3001"
              x1="10.1818"
              y1="8.72729"
              x2="10.1818"
              y2="23.2727"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9EE1EC" />
              <stop offset="1" stop-color="#E5A7E0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2235_3001"
              x1="10.3614"
              y1="8.72729"
              x2="10.3614"
              y2="23.2727"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9EE1EC" />
              <stop offset="1" stop-color="#E5A7E0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      getItem(
        "Figma",
        "Figma",
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="black"
          />
          <path
            d="M13.0619 24.7273C14.6516 24.7273 15.9419 23.424 15.9419 21.8182V18.9091H13.0619C11.4721 18.9091 10.1819 20.2124 10.1819 21.8182C10.1819 23.424 11.4721 24.7273 13.0619 24.7273Z"
            fill="#0ACF83"
          />
          <path
            d="M10.1819 16C10.1819 14.3942 11.4721 13.0909 13.0619 13.0909H15.9419V18.9091H13.0619C11.4721 18.9091 10.1819 17.6058 10.1819 16Z"
            fill="#A259FF"
          />
          <path
            d="M10.1818 10.1818C10.1818 8.57598 11.4721 7.27271 13.0618 7.27271H15.9418V13.0909H13.0618C11.4721 13.0909 10.1818 11.7876 10.1818 10.1818Z"
            fill="#F24E1E"
          />
          <path
            d="M15.9419 7.27271H18.8219C20.4117 7.27271 21.7019 8.57598 21.7019 10.1818C21.7019 11.7876 20.4117 13.0909 18.8219 13.0909H15.9419V7.27271Z"
            fill="#FF7262"
          />
          <path
            d="M21.7019 16C21.7019 17.6058 20.4117 18.9091 18.8219 18.9091C17.2321 18.9091 15.9419 17.6058 15.9419 16C15.9419 14.3942 17.2321 13.0909 18.8219 13.0909C20.4117 13.0909 21.7019 14.3942 21.7019 16Z"
            fill="#1ABCFE"
          />
        </svg>
      ),
      getItem(
        "Sketch",
        "Sketch",
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="black"
          />
          <path
            d="M10.9273 8.53629L16 8L21.0727 8.53629L25 13.8083L16 24.2887L7 13.8083L10.9273 8.53629Z"
            fill="#FDB300"
          />
          <path
            d="M10.6454 13.8083L16 24.2887L7 13.8083H10.6454Z"
            fill="#EA6C00"
          />
          <path
            d="M21.3542 13.8082L15.9997 24.2886L24.9997 13.8082H21.3542Z"
            fill="#EA6C00"
          />
          <path
            d="M10.6457 13.8082H21.3548L16.0002 24.2886L10.6457 13.8082Z"
            fill="#FDAD00"
          />
          <path
            d="M16.0002 8L10.9275 8.53628L10.6457 13.8083L16.0002 8Z"
            fill="#FDD231"
          />
          <path
            d="M16.0005 8L21.0732 8.53628L21.355 13.8083L16.0005 8Z"
            fill="#FDD231"
          />
          <path
            d="M24.9997 13.8084L21.0724 8.53638L21.3542 13.8084H24.9997Z"
            fill="#FDAD00"
          />
          <path
            d="M7 13.8084L10.9273 8.53638L10.6454 13.8084H7Z"
            fill="#FDAD00"
          />
          <path
            d="M16.0002 8L10.6457 13.8083H21.3548L16.0002 8Z"
            fill="#FEEEB7"
          />
        </svg>
      ),
      getItem("Spline", "Spline", <IoMdTime />),
    ],
    "group"
  ),
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Sidebar;
