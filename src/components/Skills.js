import React from "react"
import Title from "./Title"
import {
  skillIcons,
  skillListItemsFrontend,
  skillListItemsBackend,
  skillListItemsOthers,
} from "../constants/skills"

const Skills = () => {
  return (
    <section className="section bg-grey">
      <Title title="Skills" />
      <div className="skills-section">
        <div className="skills-padding"></div>
        <div className="skills-outer-container">
          <div className="skills-text-outer-container">
            <div className="skills-text-type-container">
              <h3 className="skills_category-name">Frontend</h3>
              <ul>
                <div className="skills-text-inner-container">
                  {skillListItemsFrontend.map(skill => {
                    return (
                      <li key={skill.id} className="skill-text">
                        {skill.text}
                      </li>
                    )
                  })}
                </div>
              </ul>
            </div>
            <div className="skills-text-type-container">
              <h3 className="skills_category-name">Backend</h3>
              <ul>
                <div className="skills-text-inner-container">
                  {skillListItemsBackend.map(skill => {
                    return (
                      <li key={skill.id} className="skill-text">
                        {skill.text}
                      </li>
                    )
                  })}
                </div>
              </ul>
            </div>
            <div className="skills-text-type-container">
              <h3 className="skills_category-name">Others</h3>
              <ul>
                <div className="skills-text-inner-container">
                  {skillListItemsOthers.map(skill => {
                    return (
                      <li key={skill.id} className="skill-text">
                        {skill.text}
                      </li>
                    )
                  })}
                </div>
              </ul>
            </div>
            <ul></ul>
          </div>
          <div className="skills-icon-container">
            {skillIcons.map(skill => {
              return (
                <div key={skill.id} className="skill-icon">
                  {skill.icon}
                </div>
              )
            })}
          </div>
        </div>
        <div className="skills-padding"></div>
      </div>
    </section>
  )
}

export default Skills
