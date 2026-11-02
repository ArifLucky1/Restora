import React from 'react'

const Navbar = () => {
  return (
    <div><>
        <nav className='fixed top-0 z-20 px-auto w-full transition-all duration-300 bg-transparent'>
            <div className='flex items-center justify-between font-medium py-4 mx-auto max-w-7xl'>
                <a href="//">
                    <img src="/assets/logo.svg" alt="logo" />
                </a>
            </div>
        </nav>
    </></div>
  )
}

export default Navbar