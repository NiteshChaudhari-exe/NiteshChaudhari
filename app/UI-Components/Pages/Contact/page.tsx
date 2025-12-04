import Link from "next/link";
import Image from "next/image";
import conicon1 from "@/public/contact-Icon1.svg";
import conicon2 from "@/public/contact-Icon2.svg";
import conicon3 from "@/public/contact-Icon3.svg";

export default function Contact() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="heading border-b border-(--light-border) pb-5 px-5">
          <div className="flex">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-app text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
              Home
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--white)"></i>
            </span>
            <h2 className="text-(--text-light)">Contact</h2>
          </div>
        </div>

        <div className="title-section flex flex-col justify-center items-center">
          <div className="title">
            <h1 className="text-6xl mb-5 Notoserif font-bold text-(--prim-color)">
              Contact Us
            </h1>
          </div>
          <p className="text-xl text-(--text-light) text-center lg:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            labore molestiae architecto eos soluta officia temporibus magni
            porro similique corrupti placeat fugiat dolorum reiciendis, saepe
            sunt esse! Id, natus nam!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
            <div className="contact-info flex gap-2">
              <Image src={conicon1} alt="contactIcon" />
              <div className="contact-text">
                <p className="text-(--text-light)">(+91) 9821209424</p>
                <p className="text-(--text-light)">(+977) 9821750929</p>
              </div>
            </div>
            <div className="contact-info flex gap-2">
              <Image src={conicon3} alt="contactIcon3" />
              <div className="contact-text">
                <p className="text-(--text-light)">
                  chaudharinitesh485@gmail.com
                </p>
                <p className="text-(--text-light)">nchaudhary379@rku.ac.in</p>
              </div>
            </div>
            <div className="contact-info flex gap-2">
              <Image src={conicon2} alt="contactIcon2" />
              <div className="contact-text">
                <p className="text-(--text-light)">Kathmandu, Nepal</p>
                <p className="text-(--text-light)">Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[16%] py-15">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712411!2d85.3261328!3d27.70896035000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sin!4v1764754111692!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="rounded-3xl border-3 hover:border-(--prim-color)"
          loading="lazy"
        ></iframe>
      </div>

      <div className="px-[8%] lg:px-[16%] py-15 flex-col-1 justify-self-center items-center">
        <div className="flex items-center justify-center text-center">
          <div className="title">
            <h1 className="text-5xl leading-25 md:text-7xl Notoserif font-bold text-(--prim-color)">
              Drop Us A Line...
            </h1>
            <p className="text-(--text-light) text-lg Notoserif">
              Your email address will not be published, Required fields are
              marked.
            </p>
          </div>
        </div>
        <div className="contact-form mt-10 px-2 py-3 border hover:border-[--prim-color] rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mt-3 px-2 rounded-xl">
            <div className="name-details">
              <input
                type="text"
                className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div className="email-details">
              <input
                type="email"
                className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md"
                placeholder="Email"
              />
            </div>
            <div className="subject-details">
              <input
                type="text"
                className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="message-details mt-6 px-5 py-1 flex items-center justify-between">
            <textarea
              className="border px-4 py-7 border-gray-600 W-full focus:outline-none rounded-md"
              placeholder="Message *"
            ></textarea>
            
          <div className="flex items-center justify-center my-10 px-15">
            <button
              className="btn nav-btn w-[200px] h-[50px] text-white text-xl font-medium px-4 py-2 rounded-md hover:opacity-90 transition">
              Send Message <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}
