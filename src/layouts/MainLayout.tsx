import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return localStorage.getItem('IsLogin') == 'true' ? (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default MainLayout;
