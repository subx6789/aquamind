import { useState } from 'react';
import Button from "./Button";

export default function NavBar({func}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav id='navbar' className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2 gap-1">
              <img className="w-12" src="Picture1.png" alt="logo"/>
                <span className="font-bold text-blue-500 text-lg">Aquamind</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <a href="#services" className=" font-medium py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-200">Services</a>
            <a href="#gallery" className="py-4 px-2 font-medium text-gray-500 hover:text-blue-500 transition duration-200">Gallery</a>
            <Button func={func}/>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block duration-1000' : 'hidden'} md:hidden`}>
        <a href="#services" className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-blue-500 duration-200 font-medium">Services</a>
        <a href="#gallery" className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-blue-500 duration-200 font-medium">Gallery</a>
        <div className="py-2 px-4">
          <Button func={func} />
        </div>
      </div>
    </nav>
  );
}