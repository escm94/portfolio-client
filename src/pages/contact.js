import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
    <Seo title="Contact"/>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form>
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
