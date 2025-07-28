import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {

  return (
   <>
   
   <div className=' my-nav fixed-top  '>
<ul className='  d-flex  justify-content-between  align-items-center  me-5 mt-3'>


  <li><NavLink to="/" className='logo'> Start Framework

</NavLink></li>

 <span className=' d-flex gap-3  '>
<li> <NavLink to="about"> About</NavLink></li>
<li> <NavLink to="Portofolio" > Portofolio</NavLink></li>
<li> <NavLink to="contact" > contact</NavLink></li>

 </span>
</ul>

   </div>
   
   
   </>
  )
}
