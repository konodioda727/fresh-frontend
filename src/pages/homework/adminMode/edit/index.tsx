import React from 'react';
import './index.less'
import Selector from '../../../../components/pages/selector';
import UploadSection from '../../../../components/pages/uploadWrap';

const Edit: React.FC = () => {
  return (
    <div className='homework-edit-wrap'>
      <Selector title='组别选择' data={['产品组','前端组','后端组','安卓组','设计组']} className='selector-edit'></Selector>
      <UploadSection title='修改作业' button_title='确认修改'></UploadSection>
    </div>
  );
};


export default Edit;
