import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addHobby, removeHobby } from '../store'

const HobbySection = ({ hobbies, addHobby, removeHobby }) => {
  const [hobby, setHobby] = useState('')
  const handleFormSubmit = e => {
    e.preventDefault()
    if (hobby) {
      addHobby(hobby)
      setHobby('')
    }
  }
  const handleRemoveClick = (e, i) => {
    e.preventDefault()
    removeHobby(i)
  }
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Hobbies</h5>
        <p className="card-text">
          Put any hobbies you may have e.g., drawing sketches, listening to music or as cool as street racing.
        </p>
      </div>
      {hobbies.length > 0
        ? (
        <ul className="list-group list-group-flush border-top">
          {hobbies.map((hobby, i) => (
            <li className="list-group-item" key={`hobby-${i}`}>
              <div className="d-flex justify-content-between">
                <span>{i + 1}. {hobby}</span>
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
                   id="hobby-name"
                   onChange={e => setHobby(e.target.value)}
                   placeholder="Hindi, English etc."
                   value={hobby} />
            <label htmlFor="hobby-name">Hobby name</label>
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
  ({ hobbies }) => ({ hobbies }),
  { addHobby, removeHobby }
)(HobbySection)
