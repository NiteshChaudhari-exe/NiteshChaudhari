import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/public/google-Icon.svg";



export default function Signup() {
  return (
    <>
       <div className="px-[8%] lg:px-[16%] py-15 flex flex-col items-center register-box relative">
        <div className="title flex flex-col items-center justify-center mb-10">
          <h1 className="text-5xl Notoserif font-bold leading-15">Register</h1>
        </div>
        <div className="register-form mb-10 bg-(--bg-color) border border-[#222f43] rounded-2xl w-[450px] p-10">
          <div className="user-details mb-8">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full login-input border border-[#222f43] rounded-md px-5 py-3 focus:outline-none text:lg text-(--text-light) hover:border-(--prim-color)"
            />
          </div>
          <div className="email-details mb-8">
            <input
              type="email"
              placeholder="Email"
              className="w-full login-input border border-[#222f43] rounded-md px-5 py-3 focus:outline-none text:lg text-(--text-light) hover:border-(--prim-color)"
            />
          </div>
          <div className="user-details mb-8">
            <input
              type="text"
              placeholder="username"
              className="w-full login-input border border-[#222f43] rounded-md px-5 py-3 focus:outline-none text:lg text-(--text-light) hover:border-(--prim-color)"
            />
          </div>
          <div className="password-details border border-[#222f43]  hover:border-(--prim-color) rounded-md flex justify-between items-center mb-8">
            <input
              type="password"
              placeholder="password"
              className="w-full login-input px-5 py-3 focus:outline-none text:lg text-(--text-light)"
            />
            <i className="bi bi-eye-fill text-lg text-(--text-light) pe-4"></i>
          </div>
           <div className="password-details border border-[#222f43]  hover:border-(--prim-color) rounded-md flex justify-between items-center mb-8">
            <input
              type="password"
              placeholder="confirm password"
              className="w-full login-input px-5 py-3 focus:outline-none text:lg text-(--text-light)"
            />
            <i className="bi bi-eye-fill text-lg text-(--text-light) pe-4"></i>
          </div>

          <button className="btn nav-btn w-full h-[50px] text-white text-xl font-medium px-4 py-2 mb-5 rounded-md hover:opacity-90 transition">
            Create Account
          </button>
          <div className="">
            <h4 className="Notoserif mb-3 text-[#94a9c9] "></h4>
            <span className="text-[#94a9c9] Notoserif flex gap-1">
              Already Have Account
              <Link
                href="/UI-Components/Pages/Login"
                className="text-(--prim-color) Notoserif mb-2 cursor-pointer" 
              >
                Sign In
              </Link>
            </span>

        
           <div className="w-[full] bg-(--bg-color) rounded-2xl px-3 py-2 google-icon border border-[#222f43] flex items-center justify-center gap-2">
            <Image src={googleIcon} alt="googleicon" className=""/>
            <Link href="/" className="Notoserif text-[#94a9c9]">Sign in with Google</Link>
           </div>
  </div>
        </div>
      </div>
    </>
  )
}
