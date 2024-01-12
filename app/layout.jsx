"use client"

import '../styles/globals.css';
import Nav from '@components/Nav';
import NavSmooth from '@components/NavSmooth';
import Footer from '@components/Footer';
import ChatWidget from '@components/ChatWidget';
import { metadata } from './layoutMetadata';

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

//Added in Nav component to layout higher order component
const RootLayout = ({ children }) => {

  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  useEffect(() => {
    const url = `${pathname}`
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])

  return (
    <html lang='en'>
        <body className='bg-tertiary-blue'>
            <main className=''>
                {pathname === '/' ? <NavSmooth /> : <Nav />}    
                {children}
                <ChatWidget />
                <Footer />

            </main>
        </body>
    </html>
  )
}

export default RootLayout