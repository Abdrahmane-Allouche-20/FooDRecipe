import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import {FaSearch} from'react-icons/fa'
import { FoodContext } from '../context/context'
function Header() {
  const {search,setSearch}=useContext(FoodContext)

  return (
   <header className='flex justify-between items-center border-b-2 border-b-slate-400 w-full p-2'>
    <div className='flex gap-7  items-center flex-1'>
    <div className='text-3xl text-green-800 font-black'>F<span className='text-2xl text-green-400'>OOD</span></div>

    <div className='w-1/2 relative'>
    <input type="text" 
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    className=' pl-10 py-2 relative px-4 rounded-xl border-2 border-green-900 text-xl font-bold w-full text-green-950 placeholder:text-green-900 outline-none'
    placeholder='Search For Your Recipe...' 
    />
     <button type="submit">
            <FaSearch
              className='absolute left-2 top-1/2 -translate-y-1/2 text-xl text-green-800'
            />
          </button>
    </div>
    </div>
   
    <ul className='flex justify-center items-center gap-4'>
      <li>
<NavLink 
to={'/'}
      className={({ isActive }) =>
        `${isActive ? 'text-green-900' : 'text-green-500'} font-black text-2xl`
      }>
Home
      </NavLink>
      </li>
      <li>
<NavLink 
to={'/About'}
      className={({ isActive }) =>
        `${isActive ? 'text-green-900' : 'text-green-500'} font-black text-2xl`
      }>
About Us
      </NavLink>
      </li>
      <li>
<NavLink 
to={'/Favorites'}
      className={({ isActive }) =>
        `${isActive ? 'text-green-900' : 'text-green-500'} font-black text-2xl`
      }>
Favorite
      </NavLink>
      </li>

    </ul>
   </header>
  )
}

export default Header