import React, { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { addLanguage, removeLanguage } from '../store'

const LanguageSection = ({ languages, addLanguage, removeLanguage }) => {
  const [error, setError] = useState('')
  const [language, setLanguage] = useState('')
  const handleFormSubmit = e => {
    e.preventDefault()
    if (language) {
      addLanguage(language)
      setLanguage('')
    } else {
      setError('Please enter a language.')
    }
  }
  const handleRemoveClick = (e, i) => {
    e.preventDefault()
    removeLanguage(i)
  }
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-primary text-decoration-underline">Languages</h5>
        <p className="card-text">It's always nice to mention languages you can speak and write e.g., Hindi, English etc.</p>
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
            <input className={classNames('form-control', { 'is-invalid': !!error })}
                   id="language-name"
                   onChange={e => setLanguage(e.target.value)}
                   onKeyUp={() => setError('')}
                   placeholder="Hindi, English etc."
                   value={language} />
            {error ? <div className="invalid-feedback">{error}</div> : null}
            <label htmlFor="language-name">Language name</label>
          </div>
          <button className="btn btn-secondary">
            <i className="bi-plus-lg me-1" /> Save
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
