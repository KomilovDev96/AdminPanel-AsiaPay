import React, { ReactElement } from "react";
import SidebarStyle from "./Style";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { items } from "./sidebarMenu";
import { removeLocalStorage } from "../../Utils/LocalStorege";
import { ImageCustoms } from "../../Components/ImageCustoms";
import { LogoAsia } from "../../assets";

const { Sider } = Layout;

function Sidebar(): ReactElement {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "sigout") {
      // СДЕЛАТЬ / функция выхода здесь
      removeLocalStorage("isAuth");
      removeLocalStorage("api-session");
      navigate("/");
      window.location.reload();
    } else {
      navigate(key);
    }
  };
  return (
    <SidebarStyle>
      <Sider
        theme="dark"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        className="sidebar"
      >
        <div className="bg__logo">
          <Link to="/">
            <ImageCustoms src={LogoAsia} alt="svg" />
          </Link>
        </div>
        <Menu
          theme="dark"
          onClick={onClick}
          className="sidebar__menu"
          defaultSelectedKeys={[window.location.pathname]}
          items={items}
        />
      </Sider>
    </SidebarStyle>
  );
}

export default Sidebar;
