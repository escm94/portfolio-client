import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <p className="contact-description">
            If you have a project or job in mind, think you need my help, or
            even just fancy saying hey, then please fill out the form below. I
            promise I'll get back to you super soon.
          </p>
          <form name="contact" method="POST" data-netlify="true">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              ></input>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="form-control"
              ></input>
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
              <input type="hidden" name="form-name" value="contact" />
              <button type="submit" className="submit-btn btn">
                submit here
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
