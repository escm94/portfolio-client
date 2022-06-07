import React from "react"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiDeno,
  SiVisualstudiocode,
  SiNetlify,
} from "react-icons/si"

const data = [
  {
    id: 1,
    icon: <FaHtml5 size="50px" title="HTML"></FaHtml5>,
    type: "Frontend",
    text: "HTML",
  },
  {
    id: 2,
    icon: <FaCss3 size="50px" title="CSS"></FaCss3>,
    type: "Frontend",
    text: "CSS",
  },
  {
    id: 3,
    icon: <FaJs size="50px" title="JavaScript"></FaJs>,
    type: "Frontend",
    text: "JavaScript",
  },
  {
    id: 4,
    icon: <SiTypescript size="50px" title="TypeScript"></SiTypescript>,
    type: "Frontend",
    text: "TypeScript",
  },
  {
    id: 5,
    icon: <FaReact size="50px" title="React"></FaReact>,
    type: "Frontend",
    text: "React",
  },
  {
    id: 6,
    icon: <SiTailwindcss size="50px" title="Tailwind CSS"></SiTailwindcss>,
    type: "Frontend",
    text: "Tailwind CSS",
  },
  {
    id: 7,
    icon: <FaNodeJs size="50px" title="Node"></FaNodeJs>,
    type: "Backend",
    text: "Node",
  },
  {
    id: 8,
    icon: <SiMongodb size="50px" title="MongoDB"></SiMongodb>,
    type: "Backend",
    text: "MongoDB",
  },
  {
    id: 9,
    icon: <SiDeno size="50px" title="Deno"></SiDeno>,
    type: "Backend",
    text: "Deno",
  },
  {
    id: 10,
    icon: <FaGithub size="50px" title="GitHub"></FaGithub>,
    type: "Others",
    text: "GitHub",
  },
  {
    id: 11,
    icon: <SiNetlify size="50px" title="Netlify"></SiNetlify>,
    type: "Others",
    text: "Netlify",
  },
  {
    id: 12,
    icon: <SiVisualstudiocode size="50px" title="VS Code"></SiVisualstudiocode>,
    type: "Others",
    text: "VS Code",
  },
]

export default data
