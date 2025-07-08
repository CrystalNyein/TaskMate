import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="bg-secondary py-4 px-10 flex justify-between">
      <h5 className="font-bold text-pale-yellow text-3xl">TaskMate</h5>
      <nav className="flex gap-4 items-center text-pale-yellow">
        <Link className={location.pathname == '/' ? 'nav-link-active' : ''} to="/">
          Home
        </Link>
        <Link className={location.pathname == '/dashboard' ? 'nav-link-active' : ''} to="/dashboard">
          Dashboard
        </Link>
        <Link className={location.pathname == '/about' ? 'nav-link-active' : ''} to="/about">
          About
        </Link>
      </nav>
      {localStorage.getItem('IsLogin') == 'true' ? (
        <button
          onClick={() => {
            localStorage.setItem('IsLogin', 'false');
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            localStorage.setItem('IsLogin', 'true');
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
