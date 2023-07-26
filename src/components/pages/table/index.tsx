import React, { useState, useEffect, CSSProperties } from 'react';
import { Pagination, Table } from 'antd';
import { columns } from './columnConfigDefault';
import { ConfigProvider } from 'antd';
import './index.less';

export interface DataType {
  key: string;
  name: string;
  grade: number;
  college: string;
  status: number;
}
export interface FormProps {
  columnConfig?: any;
  dataSet?: any;
  classNames?: string;
  style?: CSSProperties;
  onChange?: () => void;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Doe',
    grade: 5,
    college: 'ABC School',
    status: 1,
  },
  {
    key: '2',
    name: 'Jane Smith',
    grade: 8,
    college: 'XYZ Academy',
    status: 2,
  },
  {
    key: '3',
    name: 'Michael Johnson',
    grade: 11,
    college: 'PQR Institute',
    status: 1,
  },
  {
    key: '4',
    name: 'Emily Brown',
    grade: 3,
    college: 'LMN College',
    status: 3,
  },
  {
    key: '5',
    name: 'William Lee',
    grade: 9,
    college: 'DEF School',
    status: 2,
  },
  {
    key: '6',
    name: 'Sophia Wilson',
    grade: 6,
    college: 'GHI Academy',
    status: 1,
  },
  {
    key: '7',
    name: 'James Martinez',
    grade: 10,
    college: 'STU Institute',
    status: 2,
  },
  {
    key: '8',
    name: 'Olivia Taylor',
    grade: 4,
    college: 'JKL College',
    status: 3,
  },
  {
    key: '9',
    name: 'Ethan Anderson',
    grade: 7,
    college: 'MNO School',
    status: 1,
  },
  {
    key: '10',
    name: 'Ava Garcia',
    grade: 12,
    college: 'VWX Academy',
    status: 2,
  },
];

const Form: React.FC<FormProps> = (props) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setpageSize] = useState<number>(10);
  const { columnConfig, dataSet, style, classNames, onChange } = props;
  useEffect(() => {
    console.log(page);
  }, [page, pageSize]);
  const handleChange = (page: number, pageSize: number) => {
    setPage(page);
    setpageSize(pageSize);
    if (onChange) onChange();
  };
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#F79B2E',
          },
        }}
      >
        <div style={style} className={'form-wrap' + ' ' + classNames}>
          <Table
            columns={columnConfig ? columnConfig : columns}
            dataSource={dataSet ? dataSet : data}
            className="form-table"
            pagination={false}
            sticky
          />
        </div>
        <Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          onChange={(page, pageSize) => handleChange(page, pageSize)}
          className="form-pagination"
        ></Pagination>
      </ConfigProvider>
    </>
  );
};

export default Form;
