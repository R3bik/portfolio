import React from "react";
import { SiMongodb, SiReact, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Project = () => {
  const projects = [
    {
      title: "Nike Landing Page",
      tech: [SiReact, SiTailwindcss],
      Link: "https://nike-landing-page-indol-one.vercel.app/",
      cover: "/nike_landing.png",
      background: "bg-indigo-500",
    },
    {
      title: "Movie Searching using Api",
      tech: [SiReact, SiTailwindcss],
      Link: "https://github.com/R3bik/movie_serching_api.git",
      cover: "/movie_search.png",
      background: "bg-green-500",
    },
    {
      title: "Full stack Eccomerce website with chatbot(Final year project).",
      tech: [SiReact, SiTailwindcss, SiMongodb],
      Link: "https://github.com/R3bik/RamrosaleV2.git",
      cover: "/ramrosale.png",
      background: "bg-green-500",
    },
    {
      title: "Online Eccomerce(frontend).",
      tech: [TbBrandNextjs, SiTailwindcss],
      Link: "https://wholesale-wheat.vercel.app/",
      cover: "/onlineshop.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0 ">
      <Title
        name="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5 ">
        {projects.map((project, index) => {
          return (
            <Link href={project.Link} key={index}>
              <div className={cn("p-2 rounded-lg", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer "
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
