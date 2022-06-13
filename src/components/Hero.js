import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <div className="hero-img-outer-container">
          <div className="hero-img-container">
            <StaticImage
              src="../assets/images/profile-pic.jpg"
              className="hero-img"
              alt="portfolio picture"
            />
          </div>
        </div>
        <div className="hero-info">
          <article>
            <div className="underline"></div>
            <h1>Matt Escalante</h1>
            <h4>Full Stack Web Developer</h4>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a
                    href={link.url}
                    key={link.id}
                    className="social-link"
                    target="_blank"
                  >
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </header>
  )
}

export default Hero
