import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Image from 'next/image';

import {
  FaHome,
  FaSuitcase,
  FaAddressCard,
  FaTelegramPlane,
  FaQuestionCircle,
} from 'react-icons/fa';
const lists = [
  {
    name: 'หน้าหลัก',
    path: '/',
    icon: FaHome,
  },
  {
    name: 'ผลงาน',
    path: 'product',
    icon: FaSuitcase,
  },
  {
    name: 'ติดต่อ',
    path: 'contact',
    icon: FaAddressCard,
  },
  {
    name: 'เกี่ยวกับเรา',
    path: 'about us',
    icon: FaTelegramPlane,
  },
  {
    name: 'ช่วยเหลือ',
    path: 'help',
    icon: FaQuestionCircle,
  },
];

function Index({ children }) {
  const [isClick, setIsClick] = useState(false);
  const sideBarRef = useRef();
  const overlayRef = useRef();
  const router = useRouter();
  const outsideClick = (e) => {
    e.target === overlayRef.current && setIsClick(false);
  };
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
    });

    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });

    window.addEventListener('click', outsideClick);
    if (isClick) {
      sideBarRef.current.classList.toggle('-translate-x-64');
    }

    return () => {
      window.removeEventListener('click', outsideClick);
      NProgress.done();
    };
  }, [isClick]);
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/nprogress@0.2.0/nprogress.css'
        />
      </Head>
      <div className='header fixed flex  top-0 bg-[#6D2B83] text-white w-full h-20 items-center justify-between px-2 shadow-2xl border-b-8 border-[#6D2B83] z-20'>
        <a
          href='logo'
          className='text-2xl font-bold text-[#6D2B83] flex-shrink-0 mt-2'
        >
          <Image src='/logo.png' width='65' height='65' alt='logo' />
        </a>
        <nav className='hidden sm:hidden md:flex w-full mt-1 '>
          {lists.map((item, index) => {
            return (
              <Link key={index} href={`${item.path}`}>
                <a className=' ml-5 hover:text-gray-400 mx-auto flex font-sans font-bold text-md'>
                  <item.icon className='h-6 w-6  mb-2' />
                  <p className='text-1xl ml-4 capitalize'>{item.name}</p>
                </a>
              </Link>
            );
          })}
        </nav>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 cursor-pointer block sm:block md:hidden'
          viewBox='0 0 20 20'
          fill='currentColor'
          onClick={() => setIsClick(!isClick)}
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div
        ref={overlayRef}
        className={`overlay fixed ${
          isClick ? 'block' : 'hidden'
        } h-screen w-screen top-0 left-0 right-0 buttom-0 bg-gray-700 bg-opacity-50 z-30`}
      ></div>
      <div
        ref={sideBarRef}
        className={` sidebar fixed top-0 w-5/12 flex flex-col bg-gray-900 text-white z-40 h-screen -right-64  transition transform  duration-500 ease-out ${
          isClick ? 'block  ' : 'hidden '
        }`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 m-1 bg-purple-400 rounded-sm cursor-pointer self-start'
          viewBox='0 0 20 20'
          onClick={() => setIsClick(false)}
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
        {lists.map((item, index) => {
          return (
            <Link href={`${item.path}`} key={index}>
              <a
                onClick={() => setIsClick(false)}
                className='flex  items-center font-semibold text-lg hover:text-purple-800 active:bg-white active:text-purple-800  stroke-current stroke-1 hover:bg-white w-100 px-5 capitalize'
              >
                <item.icon className='w-5 h-5' />

                <span className='block ml-2'>{item.name}</span>
              </a>
            </Link>
          );
        })}
      </div>
      {children}
      <footer className='bg-gray-800 text-white flex h-20 justify-center items-center'>
        <p>Rodmay Design Website@2020</p>
      </footer>
    </>
  );
}

export default Index;
