import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export const items: MenuProps['items'] = [
  {
    label: '新作业',
    key: 'new',
    icon: <MailOutlined />,
  },
  {
    label: '修改作业',
    key: 'edit',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: '查看作业',
    key: 'browse',
    icon: <SettingOutlined />,
  },
];
