

import React from 'react'

export default function Contact() {
 
  return (

<>

<div className='contact my-5'>

<form className='  w-75 mx-auto py-5'>
<h2 className='text-center text-dark mt-5'  > Get in touch</h2>

<input type="text" className=' form-control  my-3' placeholder='user name ..' />
<input type="text" className=' form-control  my-3' placeholder='user age ..' />
<input type="email" className=' form-control my-3 ' placeholder='user email ..' />
<input type="password" className=' form-control  my-3' placeholder='user password ..' />
<input type="submit" value=" Send massage" className='btn btn-outline-info' />

</form>





</div>









</>











  )
}
