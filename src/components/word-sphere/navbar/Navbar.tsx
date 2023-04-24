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
        <div className='flex justify-center items-center text-[22px] text-white bg-[#0C0216] px-8 py-8 cursor-pointer'>
            <ul className='hidden md:flex '>
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
        <div onClick={handleNav} className='block md:hidden text-white bg-[#0C0216] px-8 py-8 cursor-pointer'>
            {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}                
        </div>
            <div className={!nav ? 'fixed w-[30%] text-white h-full' : 'fixed right-[100%]'}>
                <ul className='flex flex-col justify-center items-center h-full md:hidden'>
                    <li className='hover:text-[#8A2BE2] p-8 '>
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
    )
}

export default Navbar