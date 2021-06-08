import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
const lists = ['home', 'overview', 'product', 'contact', 'about', 'help'];
function Index({ children }) {
  const [isClick, setIsClick] = useState(false);
  const sideBarRef = useRef();

  useEffect(() => {
    if (isClick) {
      sideBarRef.current.classList.toggle('-translate-x-64');
    }
  }, [isClick]);
  return (
    <>
      <div className='header  bg-gray-800 text-white w-full h-20 flex items-center justify-between px-2 shadow-md border-b-8 border-green-400'>
        <a href='logo' className='text-2xl font-bold'>
          Logo
        </a>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 cursor-pointer'
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
        className={`overlay fixed ${
          isClick ? 'block' : 'hidden'
        } h-screen w-screen top-0 left-0 right-0 buttom-0 bg-gray-700 bg-opacity-50 `}
      ></div>
      <div
        ref={sideBarRef}
        className={` sidebar fixed top-0 w-5/12 flex flex-col bg-gray-900 text-white z-20 h-screen  -right-64 transition transform  duration-300 ease-in-out ${
          isClick ? 'block  ' : 'hidden '
        }`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 m-1 bg-green-400 rounded-sm cursor-pointer self-end'
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
        {lists.map((item) => {
          return (
            <Link href={`/${item}`}>
              <a
                onClick={() => setIsClick(false)}
                className=' font-semibold text-lg hover:text-green-800  stroke-current stroke-1 hover:bg-white w-100 px-5 capitalize'
              >
                {item}
              </a>
            </Link>
          );
        })}
      </div>
      <div className='main'>{children}</div>
    </>
  );
}

export default Index;
