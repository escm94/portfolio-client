import React from "react"
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/matthew-escalante-4b391bb0/",
  },
  {
    id: 2,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/matt.escalante.3/",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/escm94",
  },
]

export default data
