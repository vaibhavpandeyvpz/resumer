import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { countries } from 'countries-list'
import { updateContactInformation } from '../store'

const ContactSection = ({ updateContactInformation, ...props }) => {
  const [editing, setEditing] = useState(false)
  const [email, setEmail] = useState(props.email || '')
  const [emailError, setEmailError] = useState('')
  const [phone, setPhone] = useState(props.phone || '')
  const [phoneError, setPhoneError] = useState('')
  const [address, setAddress] = useState(props.address || '')
  const [addressError, setAddressError] = useState('')
  const [city, setCity] = useState(props.city || '')
  const [cityError, setCityError] = useState('')
  const [country, setCountry] = useState(props.country || '')
  const [countryError, setCountryError] = useState('')
  const [zip, setZip] = useState(props.zip || '')
  const [zipError, setZipError] = useState('')
  const handleFormSubmit = (e) => {
    e.preventDefault()
    updateContactInformation({ email, phone, address, city, country, zip })
    setEditing(false)
  }
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        {!editing ? (
          <span className="float-end">
            <i className="bi-pencil text-primary me-1" />
            <a href="/"
               onClick={(e) => {
                 e.preventDefault()
                 setEditing(true)
               }}>
              Edit
            </a>
          </span>
        ) : null}
        <h5 className="card-title text-primary text-decoration-underline">Contact details</h5>
        <p className="card-text">
          Below is the contact information employers can reach you at.
        </p>
      </div>
      <div className="card-body border-top">
        {editing ? (
          <Fragment>
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contact-email">Email address</label>
                    <input className={classNames('form-control', { 'is-invalid': !!emailError })}
                           id="contact-email"
                           onChange={e => setEmail(e.target.value)}
                           onKeyUp={() => setEmailError('')}
                           placeholder="name@example.com"
                           value={email} />
                    {emailError ? <div className="invalid-feedback">{emailError}</div> : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contact-phone">Phone number</label>
                    <input className={classNames('form-control', { 'is-invalid': !!phoneError })}
                           id="contact-phone"
                           onChange={e => setPhone(e.target.value)}
                           onKeyUp={() => setPhoneError('')}
                           placeholder="+91XXXXXXXXXX"
                           value={phone} />
                    {phoneError ? <div className="invalid-feedback">{phoneError}</div> : null}
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="contact-address">Street address</label>
                <textarea className={classNames('form-control', { 'is-invalid': !!addressError })}
                          id="contact-address"
                          onChange={e => setAddress(e.target.value)}
                          onKeyUp={() => setAddressError('')}
                          placeholder="1, VPZ way"
                          value={address} />
                {addressError ? <div className="invalid-feedback">{addressError}</div> : null}
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contact-city">City / region</label>
                    <input className={classNames('form-control', { 'is-invalid': !!cityError })}
                           id="contact-city"
                           onChange={e => setCity(e.target.value)}
                           onKeyUp={() => setCityError('')}
                           placeholder="Delhi"
                           value={city} />
                    {cityError ? <div className="invalid-feedback">{cityError}</div> : null}
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contact-country">Country</label>
                    <select className={classNames('form-select', { 'is-invalid': !!countryError })}
                            id="contact-country"
                            onChange={e => {
                              setCountry(e.target.value)
                              setCountryError('')
                            }}
                            value={country}>
                      {Object.keys(countries).map(x => <option value={x}>{countries[x].name}</option>)}
                    </select>
                    {countryError ? <div className="invalid-feedback">{countryError}</div> : null}
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contact-zip">ZIP / PIN code</label>
                    <input className={classNames('form-control', { 'is-invalid': !!zipError })}
                           id="contact-zip"
                           onChange={e => setZip(e.target.value)}
                           onKeyUp={() => setZipError('')}
                           placeholder="110011"
                           value={zip} />
                    {zipError ? <div className="invalid-feedback">{zipError}</div> : null}
                  </div>
                </div>
              </div>
              <button className="btn btn-secondary">
                <i className="bi-check-lg me-1" /> Save
              </button>
            </form>
          </Fragment>
        ) : (
          <Fragment>
            <div className="row">
              <div className="col-lg-4">
                <div className="mb-3">
                  <strong>Email address</strong><br />
                  {email ? <a href={`mailto:${email}`}>{email}</a> : <span className="text-muted">n/a</span>}
                </div>
                <div className="mb-3 mb-lg-0">
                  <strong>Phone number</strong><br />
                  {phone ? <a href={`tel:${phone}`}>{phone}</a> : <span className="text-muted">n/a</span>}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="mb-3">
                  <strong>Street address</strong><br />
                  {address ? <address>{address}</address> : <span className="text-muted">n/a</span>}
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="mb-3 mb-lg-0">
                      <strong>City / region</strong><br />
                      {city ? <span>{city}</span> : <span className="text-muted">n/a</span>}
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="mb-3 mb-lg-0">
                      <strong>Country</strong><br />
                      {country ? <span>{countries[country].name}</span> : <span className="text-muted">n/a</span>}
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <strong>ZIP / PIN code</strong><br />
                    {zip ? <span>{zip}</span> : <span className="text-muted">n/a</span>}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default connect(
  ({ email, phone, address, city, country, zip }) =>
    ({ email, phone, address, city, country, zip }),
  { updateContactInformation }
)(ContactSection)
