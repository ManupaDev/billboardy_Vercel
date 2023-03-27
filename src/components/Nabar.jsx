import {useState} from 'react'
import {navLinks} from '../constants';





const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className=" sticky w-full flex py-8 justify-between items-center navbar">

      <img src="public/logob.svg" alt="logob"  className=" w-[283.5px] h-[27.5px]"/>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">

        {navLinks.map((nav, index) => (

          <li
          key={nav.id}
          className={`font-poppins font-normal  text-orange-500 cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
      
          </li>
        ))
        }
      </ul>

      <button className=" sm:flex hidden bg-gray-800 hover:bg-white text-orange-500 font-poppins py-2 px-4 rounded">
      List a board
      </button>


        {/* //Mobile menu */}

      <div className="sm:hidden flex flex-1 justify-end items-center">

          <button className="bg-gray-800 hover:bg-white text-orange-500 font-poppins py-2 px-4 rounded" onClick={() => setToggle((prev)=> (!prev))}>
          {toggle ? 'Close' : 'Menu'}
          </button>

        {/* //Mobile menu content */}

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gray-800 absolute top-20 right-0 my-2 min-w-[140px] rounded-xl sidebar`}>

            <ul className="list-none flex flex-col  justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal  text-orange-500 cursor-pointer text-[16px]  ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} `}>
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>

                </li>
              ))
              }
            </ul>

            

          </div>

      </div>

    </nav>
  )
}

export default Navbar