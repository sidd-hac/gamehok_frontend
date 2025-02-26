"use client"

import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";




const Navbar = () => {

        const [isOpen, setIsOpen] = useState(false);
      


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-pink-400 shadow-lg">
            <div className=" flex items-center justify-between lg:px-5 px-2 py-3">
                
                <div className="hidden lg:flex lg:text-3xl sm:text-2xl max-sm:xl font-semibold text-white tracking-wider mr-2">
                    <Link href="/">Gamehok</Link>
                </div>
                <div className="flex lg:hidden lg:text-3xl sm:text-2xl max-sm:xl font-semibold text-white tracking-wider mr-2">
                    <Image src="/logos.png" alt="logo" width={50} height={50} />

                </div>

               
                <div className="flex items-center w-1/2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="  w-full sm:px-6 sm:py-2 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 max-sm:placeholder:text-xs sm:placeholder:text-sm max-w-96"
                    />
                  
                </div>

            
                <div className="flex items-center space-x-6">
                    
                    <Link href="/profile" className="hidden md:flex text-white hover:text-purple-200 transition duration-300 ease-in-out">

                        <Avatar className="md:w-8 md:h-8 sm:w-8 sm:h-8 max-sm:w-5 max-sm:h-5" >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </Link>
                    <button
                        className="md:hidden text-white hover:text-purple-200 transition duration-300 ease-in-out"
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white bg-opacity-90 border-t shadow-md">
                    <ul className="space-y-4 p-6">
                        <li>
                            <a
                                href="#"
                                className="block text-gray-800 hover:text-purple-600 font-medium transition duration-300 ease-in-out"
                            >
                                Shop
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-gray-800 hover:text-purple-600 font-medium transition duration-300 ease-in-out"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-gray-800 hover:text-purple-600 font-medium transition duration-300 ease-in-out"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;