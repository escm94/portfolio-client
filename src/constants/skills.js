import React from "react"
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGitlab,
  SiGatsby,
  SiGraphql,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si"

const skillIcons = [
  {
    id: 1,
    icon: <FaJs size="50px" title="JavaScript"></FaJs>,
  },
  {
    id: 2,
    icon: <FaReact size="50px" title="React"></FaReact>,
  },
  {
    id: 3,
    icon: <SiTailwindcss size="50px" title="Tailwind CSS"></SiTailwindcss>,
  },
  {
    id: 4,
    icon: <SiPostman size="50px" title="Postman"></SiPostman>,
  },
  {
    id: 5,
    icon: <SiGatsby size="50px" title="Gatsby"></SiGatsby>,
  },
  {
    id: 6,
    icon: <SiTypescript size="50px" title="TypeScript"></SiTypescript>,
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
    icon: <SiGraphql size="50px" title="GraphQL"></SiGraphql>,
  },
  {
    id: 10,
    icon: <SiGithub size="50px" title="GitHub"></SiGithub>,
  },
  {
    id: 11,
    icon: <SiVisualstudiocode size="50px" title="VS Code"></SiVisualstudiocode>,
  },
  {
    id: 12,
    icon: <SiGitlab size="50px" title="GitLab"></SiGitlab>,
  },
]

const skillListItemsBackend = [
  {
    id: 1,
    text: "Node/Express",
  },
  {
    id: 2,
    text: "ASP.NET Core",
  },
  {
    id: 3,
    text: "MongoDB",
  },
  {
    id: 4,
    text: "MS SQL Server",
  },
]

const skillListItemsFrontend = [
  {
    id: 1,
    text: "JavaScript",
  },
  {
    id: 2,
    text: "React",
  },
  {
    id: 3,
    text: "Tailwind CSS",
  },
  {
    id: 4,
    text: "Gatsby",
  },
  {
    id: 5,
    text: "Next",
  },
  {
    id: 6,
    text: "Vue",
  },
]

const skillListItemsOthers = [
  {
    id: 1,
    text: "Git",
  },
  {
    id: 2,
    text: "Unit Testing",
  },
  {
    id: 3,
    text: "OO Principles",
  },
  {
    id: 4,
    text: "REST API",
  },
  {
    id: 5,
    text: "CI/CD",
  },
  {
    id: 6,
    text: "Agile Development",
  },
]

export {
  skillIcons,
  skillListItemsFrontend,
  skillListItemsBackend,
  skillListItemsOthers,
}
