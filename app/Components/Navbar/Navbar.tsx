'use client'

import { useState, useEffect } from "react";
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
    // dropdown: [
    //   {label: "My Projects", href:"/UI-Components/Projects/Project" },
    //   { label: "Projects Details", href:"/UI-Components/Projects/ProjectDetails" }
    // ],
  },
  {
    label: "Blog",
    href:"/UI-Components/Blogs/blog",
    // dropdown: [
    //   {label: "Blog", href:"/app/UI-Components/Blogs/blog" },
    //   { label: "Blog Details", href:"/app/UI-Components/Blogs/blogDetails" }
    // ],
  },
  {
    label: "Contact",
    href:"/UI-Components/Pages/Contact",
    // dropdown: [
    //   {label: "About", href:"/UI-Components/Pages/About" },
    //   { label: "LogIn", href:"/UI-Components/Pages/Login" },
    //   {label: "SignUp", href:"/UI-Components/Pages/Signup" },
    //   { label: " Contact", href:"/UI-Components/Pages/Contact" },
    //   { label: " Page404", href:"/UI-Components/Pages/Page404" },
    // ],
  },
  {label: "About",
   href:"/UI-Components/Pages/About" 
  },

]
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string , boolean>>({});
    const [isFixed, setIsFixed] = useState(false);

    // Set initial state only on client
    const [darkMode, setDarkMode] = useState(() => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme !== 'light';
      }
      return false;
    });

    // Sync theme changes to DOM and localStorage
    useEffect(() => {
      if (typeof window !== 'undefined') {
        if (darkMode) {
          document.documentElement.classList.remove('light');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.add('light');
          localStorage.setItem('theme', 'light');
        }
      }
    }, [darkMode]);

    const toggleTheme = () => {
      const newMode = !darkMode;
      setDarkMode(newMode);

      if (newMode) {
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    };

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
      }
    }, [darkMode]);

    useEffect(() => {
      const handleScroll = () => 
        setIsFixed(window.scrollY > 50);
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (label: string) => {
      setOpenDropdowns((prev) => (prev[label] ? {} : {[label]: true
      }));
    };

  return (
    <>
    <div 
    className={`w-full transition-all duration-500 ${isFixed ? "fixed top-0 left-0 z-100 bg-(--bg-color) backdrop-blur-lg" : ""}` }
    >
        <div className="flex items-center justify-between px-[8%] lg:px-[12%] py-5">
            {/* LOGO */}
            <Link
            href="/"
            className="text-3xl font-bold Merienda text-(--prim-color)" id="logo"
            >
                Nitesh <span className="text-(--white)">Chaudhari</span>
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
                      <div className="absolute left-0 top-10 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-(--bg-color) z-50 shadow-xl border border-gray-50/10 rounded-lg min-w-[170px]">
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
              {/* onClick */}
              <button
                onClick={toggleTheme}
                title={darkMode ? "Switch to dark mode" : "Switch to light mode"}
                aria-label={darkMode ? "Switch to dark mode" : "Switch to light mode"}
                className="mode flex items-center justify-center cursor-pointer w-10 h-10 bg-(--text-light) rounded-full relative overflow-hidden hover:opacity-90 transition"
              >
                <i
                  className={`bi bi-brightness-high-fill text-xl absolute duration-700 ease-in-out ${darkMode ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                  aria-hidden="true"
                ></i>
                <i
                  className={`bi bi-moon-stars-fill text-white text-xl absolute duration-700 ease-in-out ${darkMode ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                  aria-hidden="true"
                ></i>
              </button>
                <Link href="/UI-Components/Pages/Login">
                <button className="btn nav-btn text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition">Log-In</button>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-(--white) text-2xl"
                  title={mobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-label={mobileMenuOpen ? "Close mobile navigation" : "Open mobile navigation"}
                >
                  <i 
                  className={`ri-${mobileMenuOpen ? "close-line" : "menu-3-line" }`}
                  ></i>
                </button>
             </div>
        </div>
        {/* Mobile Menu */}
        <div 
        className={`lg:hidden bg-(--bg-color) border-t border-gray-700 overflow-hidden transition-all duration-500 : 
            ${mobileMenuOpen ? "max-h-[700px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
         >
          <div className="px-[8%] space-y-3">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="border menu-link border-gray-700/50 rounded-lg overflow-hidden"
                >
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-(--white-light) font-medium hover:text-(--prim-color) transition"                      
                    >
                      {link.label}
                      <i
                        className={`ri-arrow-down-s-line transition-transform duration-300 ${openDropdowns[link.label] ? 'rotate-180' : ''}`}
                      ></i>
                    </button>
                    <div
                     className={`pl-6 pr-4 bg-gray-800/40 border-t border-gray-700/40 transition-all duration-500 ${openDropdowns[link.label] 
                      ? 'max-h-[300px] py-2 opacity-100' 
                      : 'max-h-0 py-0 opacity-0 '}`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => { setMobileMenuOpen(false); setOpenDropdowns({}); }}
                          className="block py-2 text-sm hover:text-(--prim-color) transition border-gray-700/50 "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                   href={link.href}
                   onClick={() => { setMobileMenuOpen(false); setOpenDropdowns({}); }}
                   className="block px-4 py-3 text-white hover:text-(--prim-color)"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
    </div>
    </>
  )
}
