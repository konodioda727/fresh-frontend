import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload, ConfigProvider,message } from 'antd';
import type { UploadFile,  RcFile } from 'antd/es/upload/interface';

interface UploaderProps {
  className?: string;
  onChange: (files: FormData)=> void;
}
const Uploader: React.FC<UploaderProps> = (props) => {
  const { className, onChange } = props;
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    },
  ]);

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
    let newFileList = [...info.fileList];
    const formData = new FormData();
    newFileList.forEach((file) => {
      formData.append('files[]', file as RcFile);
    });
    onChange(formData);
    // newFileList = newFileList.slice(-3);
    newFileList = newFileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };

  const actionProps: UploadProps = {
    onChange: handleChange,
    multiple: true,
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    }
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F79B2E',
        },
      }}
    >
      <Upload {...actionProps} fileList={fileList} className={className}>
        <Button icon={<UploadOutlined />}>上传</Button>
      </Upload>
    </ConfigProvider>
  );
};

export default Uploader;
