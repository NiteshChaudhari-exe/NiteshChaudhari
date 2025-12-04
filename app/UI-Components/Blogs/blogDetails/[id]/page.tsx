"use client";

import Link from "next/link";
import BlogsData from "@/app/JsonData/Blogs.json";
import { useParams } from "next/navigation";
import Image from "next/image";

import portfolio1 from "@/public/portfolio-1.webp";
import portfolio2 from "@/public/portfolio-2.webp";
import portfolio3 from "@/public/portfolio-3.webp";

import React from "react";

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

const GalleryData = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];

const PopularTag = [
    {
        id:"1",
        name:"Peace",
    },
    {
        id:"2",
        name:"Honor",
    },
    {
        id:"3",
        name:"Loyalty",
    },
    {
        id:"4",
        name:"Respect",
    },
    {
        id:"5",
        name:"Nature",
    },
    {
        id:"6",
        name:"Hacker",
    },
    {
        id:"7",
        name:"WebDev",
    },
    {
        id:"8",
        name:"CyberExpert",
    },
    {
        id:"9",
        name:"Designer",
    },

];



export default function BlogDetails() {
  const { id } = useParams();
  const blog = BlogsData.find((b) => String(b.id) === id);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-400 text-2xl">
        Blog not found
      </div>
    );
  }
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10">
        <div className="heading border-b border-(--light-border) pb-5 px-5 mb-10">
          <div className="flex items-center">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-app text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
              Home
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-white"></i>
            </span>
            <Link
              href="/UI-Components/Blogs/blog"
              className="text-(--text-light)"
            >
              Blog
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-white"></i>
            </span>
            <h2 className="text-(--text-light)">{blog.title}</h2>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="w-full lg:w-1/1">
              <h1 className="Notoserif text-3xl md:text-5xl font-bold text-(--prim-color)">
                {blog.title}
              </h1>
              <div className="flex items-center gap-3 w-auto mt-5">
                <Image
                  src={blog.author}
                  alt={blog.title}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="flex flex-col w-full">
                  <h2 className="text-(--text-light) Notoserif font-bold text-xl">
                    {blog.name}
                  </h2>
                  <div className="flex gap-3">
                    <h2 className="text-(--text-light)">{blog.date}</h2>
                    <h2 className="text-(--text-light)">{blog.tag}</h2>
                  </div>
                </div>
              </div>
              <p className="text-(--text-light) text-xl mt-5">{blog.desc}</p>
              <div className="mt-5">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={500}
                  className="rounded-2xl object-contain"
                />
              </div>
              <p className="text-(--text-light) text-xl mt-5">{blog.desc2}</p>
              <h2 className="Notoserif text-5xl font-bold text-(--text-light) my-5">
                Heading
              </h2>
              <p className="text-(--text-light) text-xl mt-5">
                An introduction to React Hooks and how to use them effectively.
                Learn about the new features and improvements in Next.js 13.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                <div className="">
                  <Image
                    src={portfolio1}
                    alt="portfolio1"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <Image
                    src={portfolio2}
                    alt="portfolio2"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                  <Image
                    src={portfolio3}
                    alt="portfolio3"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
              <h2 className="Notoserif text-4xl font-bold text-(--text-light) my-5">
                Smaller Heading
              </h2>
              <p className="text-(--text-light) text-lg mb-3 border-b border-(--light-border) pb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                sunt similique laboriosam a pariatur labore, quasi iusto veniam
                asperiores error ut reprehenderit deleniti fugiat ipsam quaerat
                numquam fugit aliquam excepturi?
              </p>

              <div className="flex items-center flex-wrap gap-5 mt-6">
                <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                  <h2 className="Notoserif text-xl text-(--text-light)">
                    #Nature
                  </h2>
                </div>
                <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                  <h2 className="Notoserif text-xl text-(--text-light)">
                    #Peace
                  </h2>
                </div>
                <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                  <h2 className="Notoserif text-xl text-(--text-light)">
                    #Honor
                  </h2>
                </div>
                <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                  <h2 className="Notoserif text-xl text-(--text-light)">
                    #Respect
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 sticky top-22 left-0 h-full">
              {/* Last Comment */}

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
                        <span className="text-(--text) Notoserif text-xs">
                          {comment.name}
                        </span>
                        <span className="text-(--text-light) text-xs">
                          {comment.date}
                        </span>
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
                    className="text-3xl font-bold Merienda text-(--prim-color)"
                    id="logo"
                  >
                    Nitesh <span className="text-(--white)">Chaudhari</span>
                  </Link>
                  <h2 className="text-(--text-light) Notoserif font-bold">
                    Follow Us For More...
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
              {/* Popular Tags*/}
              <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border)">
                <div className="title mb-5 recent-post-title">
                    <h1 className="Notoserif font-bold text-5xl md:text-2xl">Popular</h1>
                </div>
                <div className="flex items-center flex-wrap gap-3 mt-6">
                    {PopularTag.map((tag, index) => (
                        <div key={index} className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                            <h2 className="Notoserif text-xl text-(--text-light)">{tag.name}</h2>
                        </div>
                    ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
