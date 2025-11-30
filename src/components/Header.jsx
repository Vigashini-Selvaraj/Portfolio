import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Header () {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-slate-900/90 backdrop-blur-md shadow-lg px-5 h-16 shadow">

            {/* Logo */}
            <a className="font-bold text-white text-xl" href="#">Vigashini S</a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li className="px-2"><a href="#hero">Home</a></li>
                    <li className="px-2"><a href="#about">About</a></li>
                    <li className="px-2"><a href="#projects">Projects</a></li>
                    <li className="px-2"><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            {toggleMenu && (
                <nav className="absolute top-16 left-0 w-full bg-slate-900/90 backdrop-blur-md shadow-lg md:hidden">
                    <ul className="flex flex-col text-white p-4">
                        <li className="py-2"><a href="#">Home</a></li>
                        <li className="py-2"><a href="#">About</a></li>
                        <li className="py-2"><a href="#">Projects</a></li>
                        <li className="py-2"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            )}

            {/* Mobile Toggle Button */}
            <button 
                onClick={() => setToggleMenu(!toggleMenu)} 
                className="block md:hidden"
            >
                <Bars3Icon className="text-white h-6" />
            </button>
        </header>
    );
}
