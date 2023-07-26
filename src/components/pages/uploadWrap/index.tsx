import React, {useState, CSSProperties} from 'react';
import { ConfigProvider, Button } from 'antd';
import InputBox from '../input';
import './index.less'
import axiosInstance from '../../../services/interceptor';
interface UploadSectionProps {
  title?: string;
  status?: boolean;
  url?: string;
  className?: string;
  style?: CSSProperties;
  button_title?: string;
}
const rootUrl = 'api/v1'


const UploadSection: React.FC<UploadSectionProps> = (props) => {
  const { title,status,url,className,style,button_title } = props;
  const [formData, setformData] = useState<FormData>(new FormData())
  const handleChangeTitle = (e:string | FormData) => {
    let newFormData: FormData = formData as FormData;
    newFormData.set('title',e as string)
    setformData(newFormData)
  }
  const handleChangeContent = (e:string | FormData) => {
    let newFormData: FormData = formData as FormData;
    newFormData.set('content',e as string)
    setformData(newFormData)
  }
  const handleChangeUpload = (e:string | FormData) => {
    let newFormData: FormData = formData as FormData;
    if (e instanceof FormData) {
      const filesArray = Array.from(e.getAll('files[]'));
      for (const file of filesArray) {
        newFormData.set('files[]', file);
      }
    }
    setformData(newFormData);
  }
  const handleSubmit = () =>{
    axiosInstance.post(rootUrl + url, formData, {
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
  }
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#F79B2E',
          },
        }}
      >
        <div className={"upload-wrap "+ className} style={style}>
          <div className="upload-title">
            <div className="upload-title-text">
              {title}
              {typeof(status) != 'undefined' && <div className='upload-status'>{status?`已提交`:`未提交`}</div>}
            </div>
            <div className="upload-title-deco"></div>
            <InputBox label="标题" type="input" className="inp" limit={30} onChange={handleChangeTitle}></InputBox>
            <InputBox
              label="内容简介"
              type="textarea"
              className="inp"
              limit={500}
              onChange={handleChangeContent}
            ></InputBox>
            <InputBox label="添加附件" type="file" className="inp" onChange={handleChangeUpload}></InputBox>
          </div>
          <Button className="submit" onClick={handleSubmit}>{button_title}</Button>
        </div>
      </ConfigProvider>
    </>
  );
};

export default UploadSection