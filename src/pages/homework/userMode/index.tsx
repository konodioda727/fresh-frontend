import React from 'react';
import Uploader from '../../../components/pages/upload';

const HomeworkUserMode: React.FC = () => {
  return (
    <>
      usermode
      <Uploader onClick={() => console.log('clicked')}></Uploader>
    </>
  );
};

export default HomeworkUserMode;
