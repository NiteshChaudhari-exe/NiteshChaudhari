import Link from "next/link";

const PROJECT_VERSION = "0.1.0";

export default function Footer() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 text-(--white)">
        <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
          <div className="p-0 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* First Column */}
            <div>
              <Link
                href="/"
                className="text-3xl font-bold Merienda text-(--prim-color)"
                id="logo"
              >
                Nitesh <span className="text-(--white)">Chaudhari</span>
              </Link>
              <p className="text-(--text-light) Notoserif text-[15px] mt-5">
                This site was built the old way: by hand, with respect, and
                without witnesses. No cookies were harmed. No trackers were sent
                to the mattresses---
                <br />
                <br />
                Keep your friends close.
                <br />
                I’ll keep the code closer.
              </p>
              <h2 className="mt-5 Notoserif">
                Your visit stays between us — just like it should. You came here
                on your own. You leave the same way. Capisce?
              </h2>
              <p className="text-(--text-light)"></p>
              <p className="text-(--text-light)"></p>
            </div>
            {/* Second Column */}
            <div>
              <h2 className="Notoserif text-2xl font-bold text-(--text-light) mb-5">
                Here You Go...
              </h2>
              <div className="flex gap-x-20 gap-y-15">
                <div className="flex flex-col gap-4 pl-5">
                  <Link href="/" className="Notoserif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)">RESPECT</Link>
                  <Link href="/" className="Notoserif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)">HONESTY</Link>
                  <Link href="/" className="Notoserif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)">INTEGRITY</Link>
                  <Link href="/" className="Notoserif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)">DIGNITY</Link>
                  <Link href="/" className="Notoserif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)">GRATITUDE</Link>
                  <Link href="/" className="Notoserif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)">HONOR</Link>
                </div>
              </div>
            </div>
             {/* Third Column*/}
            <div>
                <h2 className="Notoserif text-2xl font-bold text-(--text-light) mb-5">Newsletter</h2>
                <p className="text-(--text-light) Notoserif mt-2">Even if a man has no natural ability, he can be a warrior by holding fast to discipline. </p>

                <div className="footer-input flex flex-col gap-2 pe-10 mt-5">
                    <div className="flex items-center border-b gap-2 pb-2">
                        <i className="bi bi-person"></i>
                        <input 
                        type="text" 
                        placeholder="Name"
                        className="outline-none w-full"
                        />
                    </div>
                    <div className="flex items-center border-b gap-2 pb-2">
                        <i className="bi bi-envelope"></i>
                        <input 
                        type="text" 
                        placeholder="Email"
                        className="outline-none w-full"
                        />
                    </div>
                    <div>
                        <button className="btn mt-2 text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition">Subscribe <i className="bi bi-arrow-right"></i>

                        </button>
                    </div>
                </div>
              </div>
          </div>
          <div className="mt-10 p-8 border-t border-(--light-border)">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                © Copyright 2025. All Rights Reserved <Link href="/" className="text-(--prim-color) Notoserif font-bold hover:underline ">Nitesh Chaudhari</Link>
                <div className="flex items-center gap-8">
                    <div className="hover:text-(--prim-color) transition cursor-pointer footer-link2">
                       <i className="bi bi-github"></i>
                        GitHub
                    </div>
                    <div className="hover:text-(--prim-color) transition cursor-pointer footer-link2">
                       <i className="bi bi-linkedin"></i>
                        LinkedIn
                    </div>
                    <div className="hover:text-(--prim-color) transition cursor-pointer footer-link2">
                       <i className="bi bi-instagram"></i>
                        Instagram
                    </div>
                 </div>
             </div>
          </div>
        </div>
        {/* Footer Bottom with Version */}
        <div className="mt-6 pt-6 border-t border-(--light-border) flex flex-col md:flex-row justify-between items-center text-center md:text-left">
         
          <p className="text-(--text-light) text-sm mt-3 md:mt-0 ">
            Version - <span className="text-(--prim-color) font-semibold">{PROJECT_VERSION}</span>
          </p>
        </div>
      </div>
    </>
  );
}
