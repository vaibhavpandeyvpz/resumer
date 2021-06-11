import React from 'react'
import BasicSection from './sections/BasicSection'
import ContactSection from './sections/ContactSection'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import HobbySection from './sections/HobbySection'
import LanguageSection from './sections/LanguageSection'
import LinkSection from './sections/LinkSection'
import SkillSection from './sections/SkillSection'

export default function App() {
  return (
    <div>
      <main className="container my-3 my-lg-5">
        <h1>Resumer</h1>
        <p className="mb-3 mb-lg-5">
          Create your <strong>100% free</strong> online resume and download as PDF instantly.
        </p>
        <div className="mb-3 mb-lg-5">
          <BasicSection />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3 mb-lg-5">
              <EducationSection />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3 mb-lg-5">
              <ExperienceSection />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="mb-3 mb-lg-5">
              <SkillSection />
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="mb-3 mb-lg-5">
              <HobbySection />
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="mb-3 mb-lg-5">
              <LanguageSection />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="mb-3 mb-lg-5">
              <LinkSection />
            </div>
          </div>
          <div className="col-md-6 col-lg-8">
            <div className="mb-3 mb-lg-5">
              <ContactSection />
            </div>
          </div>
        </div>
        <button className="btn btn-primary">
          <i className="bi-arrow-clockwise" /> Generate
        </button>
      </main>
      <footer className="container mb-3 mb-lg-5">
        <p className="text-muted mb-0">
          <small style={{ lineHeight: '1em' }}>
            <strong>Disclaimer:</strong> Names and logos used are property of their respective owners.
            Open-source project by <a href="https://vaibhavpandey.com/">VPZ</a>, code hosted at <a href="https://github.com/vaibhavpandeyvpz/resumer">Github</a>.
            Built with <i className="bi-heart-fill text-danger" /> in India.
          </small>
        </p>
      </footer>
    </div>
  )
}
