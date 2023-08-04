import { Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataType } from './index';
import { NavLink } from 'react-router-dom';

export const columns: ColumnsType<DataType> = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '年级',
    dataIndex: 'grade',
    key: 'grade',
  },
  {
    title: '学院',
    dataIndex: 'college',
    key: 'college',
  },
  {
    title: '作业状态',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => {
      let color = 'green';
      let str = '已通过';
      if (!status) {
        color = 'volcano';
        str = '未通过';
      }
      return (
        <>
          <Tag color={color}>{str}</Tag>
        </>
      );
    },
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size="middle">
        <NavLink to={'/homework/admin/judge/1'}>点击查看</NavLink>
      </Space>
    ),
  },
];
