import Image from "next/image";
import PackImage from "@/public/404.svg";
import Link from "next/link";

export default function Page404() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center min-h-screen px-[8%] lg:px-[16%] gap-8 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-full lg:w-1/2 h-full">
            <Image src={PackImage} alt="PageImage" className="object-contain w-full h-[400px]"/>
            </div>
            <div className="w-full lg:w-1/2">
            <div className="title">
                <h1 className="Notoserif font-bold text-5xl leading-25 md:text-7xl">Page Not Found</h1>
                <p className="text-(--text-light) text-lg Notoserif">The page you are looking for has slipped into an unknown realm. Click the button below to go back to the homepage.</p>
                <div className="my-5">
                    <Link href="/">
                    <button className="btn nav-btn w-[150px] h-[50px] text-white text-xl font-medium px-4 py-2 rounded-md hover:opacity-90 transition">Back-Home


                    </button>
                    
                    </Link>
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}
