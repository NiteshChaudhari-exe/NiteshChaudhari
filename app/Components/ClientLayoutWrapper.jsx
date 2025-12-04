"use client";
import { usePathname } from "next/navigation";  
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function ClientLayoutWrapper({ childern }) {
    const pathname = usePathname ();

    const hideNavbarRoutes = ["/Pages/Page404", "/404", "/login"];

    const shouldHideNavbar = hideNavbarRoutes.some((route) => 
        pathname?.includes(route)
    );

    return (
        <>
        {!shouldHideNavbar && <Navbar/>}
        {childern}
        {!shouldHideNavbar && <Footer/>}
        </>
    )
}