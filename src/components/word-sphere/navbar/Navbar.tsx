import Link from 'next/link'
import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = React.useState(false)

    const handleNav = () => { 
        setNav(!nav)
    }

  return (
    <div>
        <div className='flex  text-xl text-white space-x-16 scroll-smooth bg-[#0C0216] px-8 py-8 justify-center cursor-pointer'>
            <ul className='flex '>
            <li className='hover:text-[#8A2BE2] p-8'>
                    <Link href='/about'>About</Link>
                </li>

                <li className='hover:text-[#8A2BE2] p-8'>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>
                
                <li className='hover:text-[#8A2BE2] p-8'>
                    <Link href='/experience'>Experience</Link>
                </li>

                <li className='hover:text-[#8A2BE2] p-8'>
                    <Link href='/resume'>Resume</Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}                
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full' : 'fixed left-[100%]'}>
                <ul className='flex flex-col justify-center items-center h-full'>
                    <li className='hover:text-[#8A2BE2] p-8'>
                        <Link href='/about'>About</Link>
                    </li>

                    <li className='hover:text-[#8A2BE2] p-8'>
                        <Link href='/portfolio'>Portfolio</Link>
                    </li>

                    <li className='hover:text-[#8A2BE2] p-8'>
                        <Link href='/experience'>Experience</Link>
                    </li>

                    <li className='hover:text-[#8A2BE2] p-8'>
                        <Link href='/resume'>Resume</Link>
                    </li>
                </ul>
                </div>
        </div>
    </div>
  )
}

export default Navbar