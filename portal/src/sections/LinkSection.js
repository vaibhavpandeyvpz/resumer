import React, { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { addLink, removeLink } from '../store'

const LinkSection = ({ links, addLink, removeLink }) => {
  const [error, setError] = useState('')
  const [link, setLink] = useState('')
  const handleFormSubmit = e => {
    e.preventDefault()
    if (link) {
      addLink(link)
      setLink('')
    } else {
      setError('Please enter a URL.')
    }
  }
  const handleRemoveClick = (e, i) => {
    e.preventDefault()
    removeLink(i)
  }
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-primary text-decoration-underline">Links</h5>
        <p className="card-text">
          Add links to your website, portfolio, social media accounts or anything you want to share.
        </p>
      </div>
      {links.length > 0
        ? (
          <ul className="list-group list-group-flush border-top">
            {links.map((link, i) => (
              <li className="list-group-item" key={`link-${i}`}>
                <div className="d-flex justify-content-between">
                  <span className="text-nowrap overflow-hidden me-3" style={{textOverflow: 'ellipsis'}}>
                    {i + 1}. <a href={link} rel="noopener noreferrer" target="_blank">{link}</a>
                  </span>
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
                   id="link-name"
                   onChange={e => setLink(e.target.value)}
                   onKeyUp={() => setError('')}
                   placeholder="https://facebook.com/example"
                   value={link} />
            {error ? <div className="invalid-feedback">{error}</div> : null}
            <label htmlFor="link-name">URL</label>
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
  ({ links }) => ({ links }),
  { addLink, removeLink }
)(LinkSection)
