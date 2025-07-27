import React from 'react'

import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   
   <div className=' my-nav fixed-top  '>
<ul className='  d-flex  justify-content-between  align-items-center  me-5 mt-3'>


  <li><Link to="/" className='logo'> Start Framework

</Link></li>

 <span className=' d-flex gap-3  '>
<li> <Link to="about"> About</Link></li>
<li> <Link to="Portofolio" > Portofolio</Link></li>
<li> <Link to="contact" > contact</Link></li>

 </span>
</ul>

   </div>
   
   
   </>
  )
}
