"use client";

import { useParams } from "next/navigation";

import Image from "next/image";
import portfolio1 from "@/public/portfolio-1.webp";
import portfolio2 from "@/public/portfolio-2.webp";
import portfolio3 from "@/public/portfolio-3.webp";

import Projects from "@/app/JsonData/projects.json";
import Link from "next/link";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center text-gray-400 py-20 text-2xl">
        Project not found
      </div>
    );
  }

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 text-(--white)">
        <div className="heading border-b border-(--light-border) pb-5 px-5 mb-10">
          <div className="flex">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-app text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
              Home
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--white)"></i>
            </span>
            <Link
              href="/UI-Components/Projects/Project"
              className="text-(--text-light)"
            >
              <i className=" text-white me-2  rounded-full bg-(--prim-color)"></i>
              Projects
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--white)"></i>
            </span>
            <h2 className="text-(--text-light)">{project.title}</h2>
          </div>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/1">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-fit h-fit rounded-2xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="title flex flex-col items-center justify-center">
                  <h1 className="text-5xl mb-5 leading-[1.3] Unbounded font-bold text-(--prim-color)">
                    {project.title}
                  </h1>

                  <div className="mt-5 border-t border-(--light-border) pt-5 space-y-3">
                    <h3 className="text-2xl font-semibold text-(--white) Notoserif">
                      Project Overview
                    </h3>
                    <p className="text-(--text-light) text-base leading-relaxed">
                      This Project Represents A Creative Exploration Of Design
                      And Innovation. From Concept To Execution, The Focus Was
                      On Delivering Crafted To Ensure Brand Alignment And
                      Digital Impact
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="text-xl font-semibold text-(--white) mb-2 Notoserif">
                        Tools Used
                      </h4>
                      <ul className="text-(--text-light) list-disc list-inside space-y-1">
                        <li>Adobe Photoshop</li>
                        <li>Illustrator</li>
                        <li>Figma</li>
                        <li>Canva</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-(--white) mb-2 Notoserif">
                        Project Type
                      </h4>
                      <p className="text-(--text-light)">
                        Graphic Design / Creative Artwork
                      </p>

                      <h4 className="text-xl font-semibold text-(--white) mb-2 Notoserif">
                        Completion Date
                      </h4>
                      <p className="text-(--text-light)">September 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="Notoserif text-(--text-light) text-5xl font-bold mb-4">
                Project Details
              </h1>
              <p className="text-(--text-light) text-lg mb-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                officia nesciunt itaque voluptates maiores consectetur beatae
                rerum debitis nobis qui nam et at quia earum reprehenderit
                eaque. Aspernatur, veritatis ab.
              </p>
              <p className="text-(--text-light) text-lg mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                accusamus nihil deleniti veritatis voluptas sunt nam similique
                laborum perferendis quos, eaque voluptatibus dignissimos aliquam
                soluta unde consequatur? Suscipit, nesciunt perferendis?
              </p>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mt-5">
                <div>
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
                    alt="portfolio2"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center my-5 ">
                <h1 className="Notoserif text-(--text-light) text-3xl font-bold mb-4">
                  The Brand Identity
                </h1>
              </div>

              <h1 className="Notoserif text-(--text-light) text-5xl font-bold mb-4">
                HIRE ME
              </h1>
              <p className="text-(--text-light) text-lg mb-3 border-b border-(--light-border) pb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                officia nesciunt itaque voluptates maiores consectetur beatae
                rerum debitis nobis qui nam et at quia earum reprehenderit
                eaque. Aspernatur, veritatis ab.
              </p>
              <div className="flex items-center flex-wrap gap-5 mt-6">
                <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-2xl bg-(--bg-color) border border-(--light-border)">
                  <h2 className="Notoserif text-xl text-(--text-light)">Nature</h2>
                </div>
                <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-2xl bg-(--bg-color) border border-(--light-border)">
                  <h2 className="Notoserif text-xl text-(--text-light)">Beauty</h2>
                </div>
                <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-2xl bg-(--bg-color) border border-(--light-border)">
                  <h2 className="Notoserif text-xl text-(--text-light)">Travel</h2>
                </div>
                <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-2xl bg-(--bg-color) border border-(--light-border)">
                  <h2 className="Notoserif text-xl text-(--text-light)">Peace</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 sticky top-22 left-0 h-full">
          <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
           <div className="title mb-5 recent-post-title">
                <h1 className="Unbounded font-bold text-2xl">
                  Project Information
                </h1>
            </div>
            <div>
                <div className="text-(--text-light) border-b border-(--light-border) pb-3 mb-5">
                    <h2 className="text-(--white) Notoserif uppercase">Category</h2>
                    <p>Graphic Design, Marketing Kitz</p>
                </div>
                 <div className="text-(--text-light) border-b border-(--light-border) pb-3 mb-5">
                    <h2 className="text-(--white) Notoserif uppercase">client</h2>
                    <p>T Company Limited</p>
                </div>
                 <div className="text-(--text-light) border-b border-(--light-border) pb-3 mb-5">
                    <h2 className="text-(--white) Notoserif uppercase">Project Date</h2>
                    <p>01 September, 2025</p>
                </div>
                 <div className="text-(--text-light) border-b border-(--light-border) pb-3 mb-5">
                    <h2 className="text-(--white) Notoserif uppercase">Project URL</h2>
                    <p>https://github.com/NiteshChaudhari-exe</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
