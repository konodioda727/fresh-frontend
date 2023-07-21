import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Main from '../pages/index';
import HomeWork from '../pages/homework';
import HomeworkAdminMode from '../pages/homework/adminMode';
import HomeworkUserMode from '../pages/homework/userMode';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main></Main>}></Route>
        {/* 作业 */}
        <Route path="/homework" element={<HomeWork></HomeWork>}>
          <Route path="" element={<HomeworkUserMode></HomeworkUserMode>}></Route>
          {/* 管理员 */}
          <Route path="admin" element={<HomeworkAdminMode></HomeworkAdminMode>}></Route>
          {/* 用户 */}
          <Route path="user" element={<HomeworkUserMode></HomeworkUserMode>}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
