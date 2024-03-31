"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiPython,
  SiCss3,
} from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
const Skills = () => {
  const skills = [
    {
      text: "React",
      Icon: FaReact,
    },
    {
      text: "Nextjs",
      Icon: TbBrandNextjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "JavaScript",
      Icon: RiJavascriptLine,
    },
    {
      text: "Node",
      Icon: FaNodeJs,
    },
    {
      text: "Mongo",
      Icon: SiMongodb,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "Css",
      Icon: SiCss3,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        name="Skills 🦾"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
