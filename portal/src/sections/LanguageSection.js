import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addLanguage, removeLanguage } from '../store'

const LanguageSection = ({ languages, addLanguage, removeLanguage }) => {
  const [language, setLanguage] = useState('')
  const handleFormSubmit = e => {
    e.preventDefault()
    if (language) {
      addLanguage(language)
      setLanguage('')
    }
  }
  const handleRemoveClick = (e, i) => {
    e.preventDefault()
    removeLanguage(i)
  }
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Languages</h5>
        <p className="card-text">It's always nice to mentioned add languages you can understand, speak and write.</p>
      </div>
      {languages.length > 0
        ? (
        <ul className="list-group list-group-flush border-top">
          {languages.map((language, i) => (
            <li className="list-group-item" key={`language-${i}`}>
              <div className="d-flex justify-content-between">
                <span>{i + 1}. {language}</span>
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
                   id="language-name"
                   onChange={e => setLanguage(e.target.value)}
                   placeholder="Hindi, English etc."
                   value={language} />
            <label htmlFor="language-name">Language name</label>
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
  ({ languages }) => ({ languages }),
  { addLanguage, removeLanguage }
)(LanguageSection)
