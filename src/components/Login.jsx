import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Appbar from './Appbar';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      // Handle empty submission error
      alert('Please fill in all fields');
      return;
    }

    
    setTimeout(() => {
      setLoginSuccess(true);
    }, 1000);
  };

  return (
    <>
    <Appbar/>
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-md w-full p-6 space-y-6 rounded-md shadow-lg border mx-3">
        <h2 className="text-2xl text-center font-semibold">Login</h2>
        {loginSuccess ? (
          <div className="bg-black border text-white p-6 rounded-lg text-center flex flex-col">
          <p className='p-5 text-xl'>Successfully logged in!</p>
          <button onClick={() => navigate('/')} className='p-2 mx-auto text-white text-sm'>Home</button>
      </div>
        ) : (
          <form onSubmit={handleLogin} >
            <div className='text-white'>
              
              <input
              placeholder='Username'
                type="email"
                id="email"
                className="w-full p-2 border-b border-white bg-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              
              <div className="relative text-white my-5">
                <input
                placeholder='Password'
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full p-2 border-b border-white bg-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="absolute top-3 right-4 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute top-3 right-4 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] text-white p-2 rounded border border-black hover:border-white"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
    </>
  );
}
export default Login