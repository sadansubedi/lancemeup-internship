import React from 'react'
import { NavLink } from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
const Navbar = () => {
  return (
    <>
    <div className="container mx-auto mt-3">
  <div className="flex items-center justify-between bg-gray-500">    
    

    <div className="hidden lg:flex items-center space-x-10">
      <NavLink className="text-xl m-6 font-bold text-gray-200" to="/"><TelegramIcon/> TickTicketing</NavLink>
      <NavLink className="text-gray-200 text-2xl hover:underline" to="/">Home</NavLink>
      <NavLink className="text-gray-200 text-2xl hover:underline" to="/">Concerts</NavLink>
      <NavLink className="text-gray-200 text-2xl hover:underline" to="/">Movies</NavLink>
      <NavLink className="text-gray-200 text-2xl hover:underline" to="/">Theater Events</NavLink>
    </div>
    <div className='text-2xl text-gray-200  '>
        <button className='mr-3'>Login</button>
        <button className=' bg-red-500 m-2 p-2 ml-6 rounded-xl '>Register</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Navbar