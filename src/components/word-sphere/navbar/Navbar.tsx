import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div><span className='font-poppins text-xl text-white space-x-16 scroll-smooth'>
        <Link href="/about" >
            About
        </Link>
        <Link href="/portfolio">
            Portfolio
        </Link>
        <Link href="/experience">
            Experience
        </Link>
        <Link href="/">
            Résumé
        </Link></span>
    </div>
  )
}

export default Navbar