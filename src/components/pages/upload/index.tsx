import React, { HTMLAttributes } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

interface UploaderProps {
  upload_text?: string;
  upload_hint?: string;
}

const Upprops: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://localhost:5713',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message
        .success(`${info.file.name} file uploaded successfully.`)
        .then((res) => console.log(res));
    } else if (status === 'error') {
      message
        .error(`${info.file.name} file upload failed.`)
        .then((res) => console.log(res));
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Uploader: React.FC<UploaderProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { upload_text, upload_hint, ...restProps } = props;
  return (
    <div {...restProps}>
      <Dragger {...Upprops}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          {upload_text ? upload_text : '点击或拖拽文件到此处以上传文件'}
        </p>
        <p className="ant-upload-hint">
          {upload_hint
            ? upload_hint
            : 'Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.'}
        </p>
      </Dragger>
    </div>
  );
};

export default Uploader;
