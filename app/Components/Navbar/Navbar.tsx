'use client'

import { useState } from "react";
import Link from "next/link";

type NavLink ={
  label: string;
  href: string;
  dropdown?: {label: string; href: string}[];
}

const navLinks: NavLink[]= [
  {label: "Home", href:"/"},
  {
    label: "Projects",
    href:"/UI-Components/Projects/Project",
    dropdown: [
      {label: "My Projects", href:"/niteshchaudhari/app/UI-Components/Projects/Project" },
      { label: "Projects Details", href:"/niteshchaudhari/app/UI-Components/Projects/ProjectDetails/[id]" }
    ]
  }

]
export default function Navbar() {
    const [isFixed, setIsFixed] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

  return (
    <>
    <div 
    className={`w-full transition-all duration-500 ${isFixed ? "fixed top-0 left-0 -z-100 bg-(--bg-color) backdrop-blur-lg" : ""}` }
    >
        <div className="flex items-center justify-between px-[8%] lg:px-[16%] py-5">
            {/* LOGO */}
            <Link
            href="/"
            className="text-3xl font-bold Merienda text-(--prim-color)"
            >
                NITESH <span className="text-(--white)">CHAUDHARI</span>
            </Link>

            {/* Desktop Nav */}
             <nav className="hidden lg:flex space-x-6 menu-link relative">
                {navLinks.map((link) =>
                   link.dropdown ?(
                    <div key={link.label} className="relative group z-50">
                      <Link
                      href={link.href}
                      className="flex menu-links items-center gap-1"
                      >
                        {link.label} <i className="ri-arrow-down-s-line"></i>
                      </Link>
                      <div className="absolute left-0 top-10 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-(--bg-color) shadow-xl border border-gray-50/10 rounded-lg min-w-[170px]">
                         {link.dropdown.map((item) =>(
                          <Link
                           key={item.label}
                           href={item.href}
                           className="block px-4 py-2 rounded-md hover:text-(--prim-color) transition-all"
                          >
                            <i className="bi bi-gear text-xs"></i> {item.label}
                          </Link>
                         ))}
                      </div>
                    </div>
                ):(
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                )
                )}
             </nav>

             {/* Right Section */}
             <div className="flex items-center gap-4">
                <Link href="/">
                <button className="btn nav-btn text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition">Log-In</button>
                </Link>
             </div>
        </div>
    </div>
    </>
  )
}
