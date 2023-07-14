import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './routes/animatedRoutes';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes></AnimatedRoutes>
      </BrowserRouter>
    </>
  );
};

export default Router;
