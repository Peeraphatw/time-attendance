import React from 'react';
import Link from 'next/link';
function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-300'>
      <form className='login bg-white w-96 rounded-sm'>
        <div className='title mt-10 w-full text-center text-4xl font-extrabold'>
          Sign in
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='mx-auto border border-gray-500 rounded-full h-14 w-14 p-2 mt-2 bg-green-300 transform rotate-180'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
        <input
          className='block w-11/12 bg-gray-300 mx-auto rounded-sm text-lg my-2 px-2 py-2 focus:outline-none focus:ring-2'
          type='email'
          autoComplete='new-password'
          name=''
          id=''
          placeholder='Email'
          required={true}
        />
        <input
          className='block w-11/12 bg-gray-300 mx-auto rounded-sm text-lg my-2 px-2 py-2 focus:outline-none focus:ring-2'
          type='password'
          autoComplete='new-password'
          name=''
          id=''
          placeholder='Password'
          required={true}
        />
        <Link href='/'>
          <a className='block w-full text-center capitalize underline text-green-800'>
            Forgot Password?
          </a>
        </Link>
        <button className='px-2 py-1  block mx-auto  w-80 mt-2 mb-5  bg-green-600 font-bold rounded-sm focus:outline-none focus:ring-1'>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
