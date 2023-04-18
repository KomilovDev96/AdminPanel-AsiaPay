import * as React from 'react';
import {
  BarChartOutlined,
  UserSwitchOutlined,
  TeamOutlined,
  SettingOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  danger?: boolean | null,
  children?: MenuItem[],
  theme?: 'light' | 'dark',
): MenuItem {
  return {
    label,
    key,
    icon,
    danger,
    children,
    theme,
  } as MenuItem;
}
export const items: MenuProps['items'] = [
  getItem("Все транзакции", '/admin', <BarChartOutlined />),
  getItem("Партнеры", '/admin/porters', <UserSwitchOutlined />),
  getItem("Клиенты", '/admin/clients', <TeamOutlined />),
  getItem("Настройка", '/admin/settings', <SettingOutlined />, null, [
    getItem("Профил", '/admin/settings/users'),
    getItem("Темы", '/admin/settings/profile'),
  ]),
  getItem("Выйти", 'sigout', <ExclamationCircleOutlined />, true),
]
