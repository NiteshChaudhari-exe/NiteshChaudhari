"use client";

import Image from "next/image";
import RecentPostData from "@/app/JsonData/RecentPosts.json";

import Author1 from "@/public/author3.webp";
import Author2 from "@/public/author4.webp";
import Author3 from "@/public/author5.webp";

import gallery1 from "@/public/gallery.webp";
import gallery2 from "@/public/gallery2.webp";
import gallery3 from "@/public/gallery3.webp";
import gallery4 from "@/public/gallery4.webp";
import gallery5 from "@/public/gallery5.webp";
import gallery6 from "@/public/gallery6.webp";
import gallery7 from "@/public/gallery7.webp";
import gallery8 from "@/public/gallery8.webp";
import gallery9 from "@/public/gallery9.webp";

import Link from "next/link";

const CommentsData = [
  {
    id: "1",
    pere: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, excepturi debitis repellendus perspiciatis placeat at iure nostrum, qui ab nisi eligendi modi recusandae, voluptatum consectetur? Vitae explicabo necessitatibus earum asperiores!",
    name: "Nitesh Chaudhari",
    date: "2024-06-15",
    author: Author1,
  },
  {
    id: "2",
    pere: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, excepturi debitis repellendus perspiciatis placeat at iure nostrum, qui ab nisi eligendi modi recusandae, voluptatum consectetur? Vitae explicabo necessitatibus earum asperiores!",
    name: "Jane Doe",
    date: "2024-06-14",
    author: Author2,
  },
  {
    Id: "3",
    pere: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, excepturi debitis repellendus perspiciatis placeat at iure nostrum, qui ab nisi eligendi modi recusandae, voluptatum consectetur? Vitae explicabo necessitatibus earum asperiores!",
    name: "John Smith",
    date: "2024-06-13",
    author: Author3,
  },
];

const GalleryData = [ gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9 ];




export default function RecetPosts() {
  return (
    <>
      <div className="px-[8%] lg:px-[10%] py-10 text-(--white)">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full lg:w-1/1 static lg:sticky top-0 left-0 h-full">
            <div className="title mb-10">
              <h1 className="Unbounded font-bold text-5xl md:text-6xl">
                Popular Certificates
              </h1>
              <p className="text-(--text-light) text-lg font-bold mt-2 Notoserif">
                Knowledge That Earns Respect —
Not Only Applause.
              </p>
            </div>
            {RecentPostData.map((post, index) => (
              <Link href="/app/UI-Components/Blogs/blog" key={index}>
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start gap-5 mb-6"
                >
                  <div className="w-full lg:w-1/2">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={500}
                      className="w-full h-60 object-contain rounded-3xl"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 pt-4">
                    <span className="bg-(--bg-color) border border-(--light-border) Notoserif font-bold rounded-full px-4 py-2">
                      {post.subtag}
                    </span>
                    <h2 className="mt-5 mb-3 Notoserif font-bold text-3xl hover:text-(--prim-color) cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-(--text-light) Notoserif">{post.pere}</p>
                    <div className="flex justify-between items-center gap-3 px-3 mt-2 border-t border-(--light-border) rounded-2xl">
                      <div className="flex items-center gap-3 my-1">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="text-(--text-light)">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* <p className="text-(--text-light)">
                        <i className="bi bi-clock-history"></i> {post.time}
                      </p> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full  lg:w-1/2 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
            {/* Popular Post */}
            <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
              <div className="title mb-5 recent-post-title">
                <h1 className="Unbounded font-bold text-3xl md:text-5xl">
                  Recent Certificates
                </h1>
                <p className="text-(--text-light) text-md font-bold mt-2 Notoserif">
                  Don’t miss what’s new.
Even the sharpest minds keep learning.
                </p>
              </div>
              {RecentPostData.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-2"
                >
                  <div className="w-1/3">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={150}
                      height={100}
                      className=" rounded-md md:rounded-full object-center"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h2 className="mt-0 md:mt-5 Notoserif font-bold text-xl md:text-lg hover:text-(--prim-color) cursor-pointer">
                      {post.title}
                    </h2>
                    <div className="flex justify-between items-center gap-3 px-3 mt-2 border-t border-(--light-border) rounded-2xl">
                      <div className="flex items-center gap-3 my-1">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="text-(--text-light)">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* <p className="text-(--text-light)">{post.date}</p>*/}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Comments... */}
            <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
              <div className="title mb-5 recent-post-title">
                <h1 className="Unbounded font-bold text-3xl md:text-5xl">
                  Latest Comments
                </h1>
                <p className="text-(--text-light) text-md font-bold mt-2 Notoserif">
                  Feel free to share your thoughts....
                </p>
              </div>
              {CommentsData.map((comment, index) => (
                <div key={index} className="mb-3">
                  <p className="text-(--text-light)">{comment.pere}</p>
                  <div className="flex items-center gap-3 mt-5 border-b border-(--light-border) pb-4">
                    <Image
                    src={comment.author}
                    alt={comment.name}
                    width={35}
                    height={35}
                    className="rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-(--text) Notoserif text-xs">{comment.name}</span>
                      <span className="text-(--text-light) text-xs">{comment.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Follow Us... */}
            <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
              <div>
                 <Link
            href="/"
            className="text-3xl font-bold Merienda text-(--prim-color)" id="logo"
            >
                Nitesh <span className="text-(--white)">Chaudhari</span>
            </Link>
                <h2 className="text-(--text-light) Notoserif font-bold">
                  Instagram
                </h2>
                {/* <p className="text-(--text-light) text-md font-bold mt-2 Notoserif">
                  Feel free to share your thoughts....
                </p> */}
              </div>
              <div className="my-3 grid grid-cols-3 gap-3">
              {GalleryData.map((Gallery, index) => (
                <Image
                key={index}
                src={Gallery}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-img w-full h-full rounded-2xl object-contain "
                />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
