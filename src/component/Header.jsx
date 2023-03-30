import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Container from './Container'

const Header = () => {

    const [activeMenu, setActiveMenu] = useState(false)
    const  location =  useRouter();
 
    return (
        <div className='relative bg-white'>
            <Container className='h-20 flex  justify-between items-center'>

                <div>LOGO</div>
                <button className='btn-buger-container'
                    onClick={() => {
                        console.log('cerrando')
                        setActiveMenu(!activeMenu)
                    }}
                >
                    <div
                        className={`menu-burger ${activeMenu ? 'close-menu' : ''}  lg:hidden`} />
                </button>

                <nav className={`menuContainer   z-10 ${activeMenu ? 'h-auto py-16 lg:py-0' : ''} `}>
                    <ul className={`listContainer  space-y-6 lg:space-y-0 text-dark`}>
                        <li onClick={()=>setActiveMenu(!activeMenu)} >
                            <Link className={`linkMenu ${  location.pathname === '/'?'text-primary':''}`}    href={'/'}>Home</Link> </li>
                        <li onClick={()=>setActiveMenu(!activeMenu)}>
                            <Link className={`linkMenu ${  location.pathname === '/blogs'?'text-primary':''}`}  href={'/blogs'}>Blogs</Link>
                        </li>
                        <li onClick={()=>setActiveMenu(!activeMenu)}>  
                            <Link className={`linkMenu ${  location.pathname === '/about'?'text-primary':''}`} href={'/about'}>About</Link>
                        </li>
                        { }
                    </ul>
                </nav>
            </Container>
        </div>
    )
}

export default Header