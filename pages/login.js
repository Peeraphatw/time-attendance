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
          className='mx-auto rounded-full h-14 w-14 p-2 mt-2 text-purple-600'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z' />
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
          <a className='block w-full text-center capitalize underline text-purple-800'>
            Forgot Password?
          </a>
        </Link>
        <button className='px-2 py-1 flex relative justify-center items-center  mx-auto  w-80 mt-2 mb-5  bg-purple-500 font-bold rounded-md focus:outline-none focus:ring-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 inline absolute left-2 text-purple-300'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z'
              clipRule='evenodd'
            />
          </svg>
          <span className='font-bold  text-white'>Sign in</span>
        </button>
      </form>
    </div>
  );
}

export default Login;
