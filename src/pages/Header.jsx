import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch , FaBars, FaTimes} from 'react-icons/fa'
import { FoodContext } from '../context/context'

import { Link } from "react-router-dom";
function Header() {
  const { search, setSearch } = useContext(FoodContext)
  const [menuOpen,setMenuOpen]=useState(false)

  return (
    <header className='flex  justify-between items-center border-b-2 border-b-slate-400 w-full p-2'>
      <div className='flex gap-7 items-center flex-1'>
      <Link to="/">
        <div className='text-xl md:text-2xl lg:text-3xl text-green-800 font-black'>
          F<span className='text-lg md:text-xl lg:text-2xl text-green-400'>OOD</span>
        </div>
        </Link>
        <div className=' w-1/2 relative lg:block hidden sm:mt-0'>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='pl-10 py-2 px-4 rounded-xl border-2 border-green-900 text-xl font-bold w-full text-green-950 placeholder:text-green-900 outline-none'
            placeholder='Search For Your Recipe...'
          />
          <button type="submit">
            <FaSearch
              className='absolute left-2 top-1/2 -translate-y-1/2 text-xl text-green-800'
            />
          </button>
        </div>
      </div>
      
      <div className="block lg:hidden z-40">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-green-700 hover:text-green-400 active:text-green-600 duration-300 md:text-3xl text-2xl mt-2"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:space-x-6 lg:static fixed top-[76px] rounded-br-xl rounded-bl-xl left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 w-4/5 h-fit    bg-white/90 z-40 lg:bg-transparent lg:h-auto lg:w-auto lg:p-0 p-4`}
      >

       
        <li className='lg:border-0 border-b border-b-gray-100 '>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block lg:inline-block py-2 lg:py-0  lg:hover:translate-x-0 text-sm  md:text-xl lg:text-2xl font-black  hover:text-green-400 hover:translate-x-4 lg:hover:-translate-y-1 duration-300 
                ${isActive ? 'text-green-900' : 'text-green-500'}
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className='lg:border-0 border-b border-b-gray-100'>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `block lg:inline-block py-2  lg:py-0   lg:hover:translate-x-0 text-sm  md:text-xl lg:text-2xl font-black  hover:text-green-400  hover:translate-x-2 lg:hover:-translate-y-1 duration-300
                ${isActive ? 'text-green-900' : 'text-green-500'}
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>
        </li>
        <li className='lg:border-0 border-b border-b-gray-100'>
          <NavLink
            to="/Favorites"
            className={({ isActive }) =>
              `block lg:inline-block py-2  lg:py-0  lg:hover:translate-x-0 text text-sm  md:text-xl  lg:text-2xl font-black  hover:text-green-400  hover:translate-x-2 lg:hover:-translate-y-1 duration-300  ${isActive ? 'text-green-900' : 'text-green-500'}
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Favorites
          </NavLink>
        </li>
        <li>
        <div className=' w-full relative lg:hidden block mt-3'>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='pl-5 md:pl-7 py-1 px-2 md:px-4 md:py-2 rounded-lg border-2 border-green-900 text-xs md:text-lg font-bold w-full text-green-950 placeholder:text-green-900 outline-none'
            placeholder='Search For Your Recipe...'
          />
          <button type="submit">
            <FaSearch
              className='absolute md:left-2 left-1 top-1/2 -translate-y-1/2 text-sm md:text-lg text-green-800'
            />
          </button>
        </div>
        </li>
      </ul>
    </header>
  )
}

export default Header
