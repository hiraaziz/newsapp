import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
const Navbar = () => {
  return (
    <div className="flex list-none justify-evenly items-center w-full h-20 font-bold text-lg bg-blue-900 text-white">
  
      
        <div className='flex space-x-4'>
            <Link to='/usanews'><li>US</li></Link>
            <Link to='/uknews'><li>UK</li></Link>
        </div>
    </div>
  )
}

export default Navbar