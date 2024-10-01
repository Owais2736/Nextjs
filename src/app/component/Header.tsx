import React from 'react'
import Button from './Button'
import Link from 'next/link'

function Header() {
  return (
    <div>
      

      <nav>
        <div className='container flex justify-between p-5'>
            <div className='name font-bold text-2xl pl-12 '>
                Owais Ali.
            </div>
            <ul className='flex gap-12 p-2 font-bold'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/profile"><li>Profile</li></Link>
            <Link href="/course"><li>Courses</li></Link>
            <Link href="/result"><li>Result</li></Link>
                
               
            </ul>
            <div>
                <Button value={"SignUp"}/>
            </div>
            
        </div>
      </nav>
    </div>
  )
}

export default Header
