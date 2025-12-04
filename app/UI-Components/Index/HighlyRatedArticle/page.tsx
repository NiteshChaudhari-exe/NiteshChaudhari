"use client";

import Image from "next/image";
import Link from "next/link";

import ArticlesData from "@/app/JsonData/Blogs.json";

export default function HighlyRatedArticle() {
  return (<>
    <div className="px-[8%] lg:px-[7%] py-20 text-(--white)">
      <div className="title">
        <h1 className="Unbounded font-bold text-2xl md:text-5xl">EDITORS CHOICE</h1>
        <p className="text-(--text-light) text-lg font-medium mt-2 Notoserif">Featured And Highly Rated Articles.</p>
      </div>
        <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {ArticlesData.slice(0 , 2).map((article , index) =>(
                    <div className="" key={index}>
                    <Link href= {`/app/UI-Components/Blogs/blogDetails/${article.id}`}>
                        <div className="article-card flex flex-col p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) group cursor-pointer transition-all duration-300">
                            <div className="">
                                <Image 
                                src={article.image} 
                                alt={article.title}
                                width={400}
                                height={400}
                                className="rounded-2xl w-full h-full"
                                />
                            </div>
                            <div className="mt-3 px-3">
                                <div className="flex justify-between items-center gap-3">
                                    <span className="text-(--text-light) Notoserif">{article.tag}</span>
                                    <span className="text-(--text-light) Notoserif">
                                        <i className="bi bi-clock-history text-sm"></i>{article.time}
                                        </span>
                                </div>
                                <h2 className="Notoserif text-3xl font-bold my-5 group-hover:text-(--prim-color) transition-all duration-300">
                                    {article.title}
                                    </h2>
                                    <div className="flex justify-between items-center gap-3">
                                        <div className="flex items-center gap-3 w-auto">
                                            <Image 
                                            src={article.author} 
                                            alt={article.name}
                                            width={70}
                                            height={70}
                                            className="rounded-full object-cover" 
                                            />
                                            <div className="flex flex-col w-full">
                                                <h2 className="text-(--text-light) Notoserif font-bold text-xl">
                                                    {article.name}
                                                    </h2>
                                                    <h2 className="text-(--text-light)">{article.date}</h2>
                                            </div>
                                        </div>
                                        <Link 
                                            href= {`/app/UI-Components/Blogs/blogDetails/${article.id}`}
                                            className="link-btn text-(--white) font-bold Notoserif"
                                        >Read More
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
                {ArticlesData.slice(2 , 5).map((article , index) =>(
                    <div className="" key={index}>
                    <Link href= {`/app/UI-Components/Blogs/blogDetails/${article.id}`}>
                        <div className="article-card flex flex-col p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) group cursor-pointer transition-all duration-300">
                            <div className="">
                                <Image 
                                src={article.image} 
                                alt={article.title}
                                width={400}
                                height={400}
                                className="rounded-2xl w-full h-full"
                                />
                            </div>
                            <div className="mt-3 px-3">
                                <div className="flex justify-between items-center gap-3">
                                    <span className="text-(--text-light) Notoserif">{article.tag}</span>
                                    <span className="text-(--text-light) Notoserif">
                                        <i className="bi bi-clock-history text-sm"></i>{article.time}
                                        </span>
                                </div>
                                <h2 className="Notoserif text-xl font-bold my-5 group-hover:text-(--prim-color) transition-all duration-300">
                                    {article.title}
                                    </h2>
                                    <div className="flex justify-between items-center gap-3">
                                        <div className="flex items-center gap-3 w-auto">
                                            <Image 
                                            src={article.author} 
                                            alt={article.name}
                                            width={70}
                                            height={70}
                                            className="rounded-full object-cover" 
                                            />
                                            <div className="flex flex-col w-full">
                                                <h2 className="text-(--text-light) Notoserif font-bold text-xl">
                                                    {article.name}
                                                    </h2>
                                                    <h2 className="text-(--text-light)">{article.date}</h2>
                                            </div>
                                        </div>
                                        <Link 
                                            href= {`/app/UI-Components/Blogs/blogDetails/${article.id}`}
                                            className="link-btn text-(--white) font-bold Notoserif"
                                        >Read More
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center my-10">
                <Link href="/UI-Components/Blogs/blog">
                    <button className="btn nav-btn w-[200px] h-[50px] text-white text-xl font-medium px-4 py-2 rounded-md hover:opacity-90 transition">View More!</button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}
