import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronsLeft, BiX } from "react-icons/bi";


const Nav = () => {
  const [rightNav, setRightNav] = useState(false)

  return (
    <nav className='fixed w-full h-14 z-[100] border-b-2 border-[#36382E] bg-DARK shadow-xl'>
      <div className='flex justify-between items-center w-full h-full '>
        <Image src='/../public/Eve.png' alt='Eve Drake Two Tone Logo' width='200' height='200' className='cursor-pointer'/>
        <ul className='text-LIGHT hidden md:flex'>
          <Link href='/'><li className='mx-2 hover:text-xl'>Home</li></Link>
          <Link href='/'><li className='mx-2 hover:text-xl'>About</li></Link>
          <Link href='/'><li className='mx-2 hover:text-xl'>Work</li></Link>
          <Link href='/'><li className='mx-2 hover:text-xl'>Contact</li></Link>
        </ul>

        <div className='md:hidden mx-2 cursor-pointer' onClick={()=>setRightNav(!rightNav)}>
          <BiChevronsLeft size={50} color='#ede6e3'/>
        </div>

      </div>
      <div className={rightNav ? 'fixed right-0 top-0 w-full h-screen bg-DARK/50 ease-in duration-200' : 'w-[-100%]'}>
        <nav className={rightNav? 'fixed  right-0 w-[50%] sm:w-[40%] h-screen bg-gradient-to-b from-ORANGE to-BLUE  py-2 ease-in duration-300' : 'fixed right-[-100%]'}>
          <div className='cursor-pointer' onClick={()=>setRightNav(!rightNav)}>
            <BiX size={50} />
          </div>
          <div className='text-center'>
            <h3 >Eve Drake</h3> 
            <h4>Web Development</h4>
          </div>
          <ul >
            <Link href='/'><li className='m-2 hover:text-xl'>Home</li></Link>
            <Link href='/'><li className='m-2 hover:text-xl'>About</li></Link>
            <Link href='/'><li className='m-2 hover:text-xl'>Work</li></Link>
            <Link href='/'><li className='m-2 hover:text-xl'>Contact</li></Link>
          </ul>
        </nav>
      </div>
      
    </nav>
);
  
}

export default Nav