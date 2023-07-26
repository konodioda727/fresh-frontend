import React from 'react';
import UploadSection from '../../../components/pages/uploadWrap';

const HomeworkUserMode: React.FC = () => {
  return (
    <div style={{display:'flex'}}>
      <UploadSection title='作业' status button_title='提交作业'></UploadSection>
    </div>
  );
};

export default HomeworkUserMode;
