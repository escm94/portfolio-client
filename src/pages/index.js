import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Jobs />
        <Projects title="featured projects" showLink projects={projects} />
        <Skills />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        github
        id
        slug
        title
        stack {
          id
          title
        }
        url
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        Features
      }
      totalCount
    }
  }
`

export default IndexPage
