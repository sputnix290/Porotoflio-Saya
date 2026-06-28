import {
  profileData,
  experiencesData,
  skillsData,
  projectsData,
  certificationsData,
} from "./data";

// Fetch Data Profile
export async function getProfile() {
  return Promise.resolve(profileData);
}

// Fetch Data Experience
export async function getExperiences() {
  return Promise.resolve(experiencesData);
}

// Fetch Data Skills
export async function getSkills() {
  return Promise.resolve(skillsData);
}

// Fetch Data Projects
export async function getProjects() {
  return Promise.resolve(projectsData);
}

// Fetch Data Certifications
export async function getCertifications() {
  return Promise.resolve(certificationsData);
}

