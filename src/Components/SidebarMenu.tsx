import React from 'react';
import { Layout, Menu } from 'antd';
import "../styles/SidebarMenu.css"

const { Sider } = Layout;

const items = [
  {
    key: '1',
    label: 'Hakkımda',
  },
  {
    key: '2',
    label: 'Projeler',
  },
  {
    key: '3',
    label: 'Contact',
  },
];

function SidebarMenu() {
  return (
    <Sider className="sidebar-menu">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
        className="custom-menu"
      />
    </Sider>
  );
}

export default SidebarMenu;
