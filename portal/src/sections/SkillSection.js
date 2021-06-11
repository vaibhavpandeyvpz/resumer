import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSkill, removeSkill } from '../store'

const SkillSection = ({ skills, addSkill, removeSkill }) => {
  const [skill, setSkill] = useState('')
  const handleFormSubmit = e => {
    e.preventDefault()
    if (skill) {
      addSkill(skill)
      setSkill('')
    }
  }
  const handleRemoveClick = (e, i) => {
    e.preventDefault()
    removeSkill(i)
  }
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Skills</h5>
        <p className="card-text">
          Mention all your professional skills e.g., copy writing, graphic designing, ethical hacking etc.
        </p>
      </div>
      {skills.length > 0
        ? (
          <ul className="list-group list-group-flush border-top">
            {skills.map((skill, i) => (
              <li className="list-group-item" key={`skill-${i}`}>
                <div className="d-flex justify-content-between">
                  <span>{i + 1}. {skill}</span>
                  <i className="bi-trash text-danger" onClick={e => handleRemoveClick(e, i)} />
                </div>
              </li>
            ))}
          </ul>
          )
        : null}
      <div className="card-body border-top">
        <form onSubmit={handleFormSubmit}>
          <div className="form-floating mb-3">
            <input className="form-control"
                   id="skill-name"
                   onChange={e => setSkill(e.target.value)}
                   placeholder="Hindi, English etc."
                   value={skill} />
            <label htmlFor="skill-name">Skill name</label>
          </div>
          <button className="btn btn-success">
            <i className="bi-plus" /> Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect(
  ({ skills }) => ({ skills }),
  { addSkill, removeSkill }
)(SkillSection)
