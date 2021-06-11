import { createSlice, configureStore } from '@reduxjs/toolkit'

const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    // Basic
    name: '',
    gender: 'undisclosed',
    bio: '',
    // Education
    qualifications: [],
    // Experiences
    experiences: [],
    // Skills
    skills: [],
    // Languages
    languages: [],
    // Hobbies
    hobbies: [],
    // Links
    links: [],
    // Contact
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'IN',
    zip: ''
  },
  reducers: {
    // Basic
    updateBasicDetails (state, { payload }) {
      state.name = payload.name || ''
      state.gender = payload.gender || ''
      state.bio = payload.bio || ''
    },
    // Education
    addQualification (state, { payload }) {
      state.qualifications.push(payload)
    },
    updateQualification (state, { payload }) {
      state.qualifications.map((o, i) => i === payload.id ? payload.data : o)
    },
    removeQualification (state, { payload }) {
      state.qualifications.splice(payload, 1)
    },
    // Experiences
    addExperience (state, { payload }) {
      state.experiences.push(payload)
    },
    updateExperience (state, { payload }) {
      state.experiences.map((o, i) => i === payload.id ? payload.data : o)
    },
    removeExperience (state, { payload }) {
      state.experiences.splice(payload, 1)
    },
    // Skills
    addSkill (state, { payload }) {
      state.skills.push(payload)
    },
    removeSkill (state, { payload }) {
      state.skills.splice(payload, 1)
    },
    // Languages
    addLanguage (state, { payload }) {
      state.languages.push(payload)
    },
    removeLanguage (state, { payload }) {
      state.languages.splice(payload, 1)
    },
    // Hobbies
    addHobby (state, { payload }) {
      state.hobbies.push(payload)
    },
    removeHobby (state, { payload }) {
      state.hobbies.splice(payload, 1)
    },
    // Links
    addLink (state, { payload }) {
      state.links.push(payload)
    },
    removeLink (state, { payload }) {
      state.links.splice(payload, 1)
    },
    // Contact
    updateContactInformation (state, { payload }) {
      state.email = payload.email || ''
      state.phone = payload.phone || ''
      state.address = payload.address || ''
      state.city = payload.city || ''
      state.country = payload.country || ''
      state.zip = payload.zip || ''
    }
  }
})

export const {
  updateBasicDetails,
  addQualification,
  updateQualification,
  removeQualification,
  addExperience,
  updateExperience,
  removeExperience,
  addSkill,
  updateSkill,
  removeSkill,
  addLanguage,
  updateLanguage,
  removeLanguage,
  addHobby,
  updateHobby,
  removeHobby,
  addLink,
  updateLink,
  removeLink,
  updateContactInformation
} = resumeSlice.actions

export default configureStore({ reducer: resumeSlice.reducer })
