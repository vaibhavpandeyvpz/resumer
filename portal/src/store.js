import { createSlice, configureStore } from '@reduxjs/toolkit'

const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    // Basic details
    'name': '',
    'gender': 'undisclosed',
    'bio': '',
    // Educational qualifications
    'qualifications': [],
    // Professional experiences
    'experiences': [],
    // Skills
    'skills': [],
    // Languages
    'languages': [],
    // Hobbies
    'hobbies': [],
    // Links
    'links': [],
    // Contact information
    'email': '',
    'phone': '',
    'address': '',
    'city': '',
    'country': 'IN',
    'zip': '',
  },
  reducers: {
    // Basic details
    updateBasicDetails(state, { payload }) {
      state.name = payload.name || '';
      state.gender = payload.gender || '';
      state.bio = payload.bio || ''
    },
    // Educational qualifications
    addQualification(state, { payload }) {
      state.qualifications.push(payload)
    },
    updateQualification(state, { payload }) {
      state.qualifications.map((o, i) => i === payload.id ? payload.data : o)
    },
    removeQualification(state, { payload }) {
      state.qualifications.splice(payload, 1)
    },
    // Professional experiences
    addExperience(state, { payload }) {
      state.experiences.push(payload)
    },
    updateExperience(state, { payload }) {
      state.experiences.map((o, i) => i === payload.id ? payload.data : o)
    },
    removeExperience(state, { payload }) {
      state.experiences.splice(payload, 1)
    },
    // Skills
    addSkill(state, { payload }) {
      state.skills.push(payload)
    },
    updateSkill(state, { payload }) {
      state.skills.map((o, i) => i === payload.id ? payload.data : o)
    },
    removeSkill(state, { payload }) {
      state.skills.splice(payload, 1)
    },
    // Languages
    addLanguage(state, { payload }) {
      state.languages.push(payload)
    },
    updateLanguage(state, { payload }) {
      state.languages.map((o, i) => i === payload.id ? payload.data : o)
    },
    removeLanguage(state, { payload }) {
      state.languages.splice(payload, 1)
    },
    // Hobbies
    addHobby(state, { payload }) {
      state.hobbies.push(payload)
    },
    updateHobby(state, { payload }) {
      state.hobbies.map((o, i) => i === payload.id ? payload.data : o)
    },
    removeHobby(state, { payload }) {
      state.hobbies.splice(payload, 1)
    },
    // Links
    addLink(state, { payload }) {
      state.links.push(payload)
    },
    updateLink(state, { payload }) {
      state.links.map((o, i) => i === payload.id ? payload.data : o)
    },
    removeLink(state, { payload }) {
      state.links.splice(payload, 1)
    },
    // Contact information
    updateContactInformation(state, { payload }) {
      state.email = payload.email || '';
      state.phone = payload.phone || '';
      state.address = payload.address || '';
      state.city = payload.city || '';
      state.country = payload.country || '';
      state.zip = payload.zip || ''
    },
  },
});

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
} = resumeSlice.actions;

export default configureStore({ reducer: resumeSlice.reducer });
