import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('IsLogin', 'true');
    navigate('/');
  };
  return (
    <div className="h-full bg-secondary  items-center justify-center flex-col gap-10 flex">
      <h1 className="font-bold text-pale-yellow text-5xl">TaskMate</h1>
      <input
        type="text"
        name="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
        className="text-pale-yellow border-2 border-pale-yellow px-4 py-2 rounded-2xl"
        placeholder="Enter Username"
      />
      <button
        onClick={handleLogin}
        className="text-base text-pale-yellow font-bold border-2 border-pale-yellow px-6 py-2 rounded-2xl hover:bg-pale-yellow hover:text-secondary ease-in-out duration-300"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
