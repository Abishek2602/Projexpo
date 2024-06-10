import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, emailid: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Successfully registered!');
        navigate('/login'); // Navigate to login page after successful registration
      } else {
        toast.error(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0 bg-gray-900">
      <div className="flex font-oswald bg-opacity-80 shadow-intense overflow-hidden max-w-sm lg:max-w-4xl w-full rounded-extra-lg" data-aos='zoom'>
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Create your account</p>
          <form onSubmit={handleRegister} className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            </div>
            <input
              className="text-gray-700 border rounded-extra-lg border-blue-600 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="flex justify-between mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            </div>
            <input
              className="text-gray-700 border rounded-extra-lg border-blue-600 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              </div>
              <input
                className="text-gray-700 border rounded-extra-lg border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-8">
              <button className="rounded-extra-lg bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
