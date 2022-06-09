import React from "react"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
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

const skillIcons = [
  {
    id: 1,
    icon: <FaHtml5 size="50px" title="HTML"></FaHtml5>,
  },
  {
    id: 2,
    icon: <FaCss3 size="50px" title="CSS"></FaCss3>,
  },
  {
    id: 3,
    icon: <FaJs size="50px" title="JavaScript"></FaJs>,
  },
  {
    id: 4,
    icon: <SiTypescript size="50px" title="TypeScript"></SiTypescript>,
  },
  {
    id: 5,
    icon: <FaReact size="50px" title="React"></FaReact>,
  },
  {
    id: 6,
    icon: <SiTailwindcss size="50px" title="Tailwind CSS"></SiTailwindcss>,
  },
  {
    id: 7,
    icon: <FaNodeJs size="50px" title="Node"></FaNodeJs>,
  },
  {
    id: 8,
    icon: <SiMongodb size="50px" title="MongoDB"></SiMongodb>,
  },
  {
    id: 9,
    icon: <SiDeno size="50px" title="Deno"></SiDeno>,
  },
  {
    id: 10,
    icon: <FaGitAlt size="50px" title="GitHub"></FaGitAlt>,
  },
  {
    id: 11,
    icon: <SiNetlify size="50px" title="Netlify"></SiNetlify>,
  },
  {
    id: 12,
    icon: <SiVisualstudiocode size="50px" title="VS Code"></SiVisualstudiocode>,
  },
]

const skillListItemsBackend = [
  {
    id: 1,
    text: "Node",
  },
  {
    id: 2,
    text: "Mongo",
  },

  {
    id: 3,
    text: "Deno",
  },
  {
    id: 4,
    text: "GraphQL",
  },
  {
    id: 5,
    text: "SQL",
  },
  {
    id: 6,
    text: "REST API",
  },
]

const skillListItemsFrontend = [
  {
    id: 1,
    text: "HTML",
  },
  {
    id: 2,
    text: "CSS",
  },
  {
    id: 3,
    text: "Javascript",
  },
  {
    id: 4,
    text: "TypeScript",
  },
  {
    id: 5,
    text: "React",
  },
  {
    id: 6,
    text: "Tailwind CSS",
  },
]

const skillListItemsOthers = [
  {
    id: 1,
    text: "Git",
  },
  {
    id: 2,
    text: "Responsive Design",
  },
  {
    id: 3,
    text: "VS Code",
  },
  {
    id: 4,
    text: "SEO",
  },
  {
    id: 5,
    text: "Scrum",
  },
  {
    id: 6,
    text: "Netlify",
  },
]

export {
  skillIcons,
  skillListItemsFrontend,
  skillListItemsBackend,
  skillListItemsOthers,
}
