// Content script for LinkedIn interaction

import type { JobData } from './background';

// Selectors for LinkedIn elements
const SELECTORS = {
  jobTitle: '.job-details-jobs-unified-top-card__job-title',
  jobDescription: '.jobs-description__content',
  applyButton: '.jobs-apply-button',
  companyName: '.job-details-jobs-unified-top-card__company-name',
  locationInfo: '.job-details-jobs-unified-top-card__bullet',
  applicationForm: '.jobs-easy-apply-modal',
};

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'START_AUTO_APPLY':
      startAutoApplyProcess();
      break;
    case 'EXTRACT_JOB_INFO':
      extractJobInformation();
      break;
  }
  return true;
});

async function startAutoApplyProcess() {
  const jobData = await extractJobInformation();
  if (jobData) {
    await autoFillApplication(jobData);
  }
}

async function extractJobInformation(): Promise<JobData | null> {
  try {
    const title = document.querySelector(SELECTORS.jobTitle)?.textContent?.trim();
    const company = document.querySelector(SELECTORS.companyName)?.textContent?.trim();
    const location = document.querySelector(SELECTORS.locationInfo)?.textContent?.trim();
    const description = document.querySelector(SELECTORS.jobDescription)?.textContent?.trim();

    if (!title || !company || !description) {
      throw new Error('Could not extract all required job information');
    }

    return {
      id: window.location.pathname.split('/')?.[4] || '',
      title,
      company,
      location: location || 'Remote',
      description,
      postedDate: new Date().toISOString(),
      applied: false
    };
  } catch (error) {
    console.error('Error extracting job information:', error);
    return null;
  }
}

async function autoFillApplication(jobData: JobData) {
  // Implementation for auto-filling application forms
  // This will be expanded based on LinkedIn's form structure
}

// Inject custom styles for the extension UI
const style = document.createElement('style');
style.textContent = `
  .extension-highlight {
    border: 2px solid #2563eb !important;
  }
  .extension-button {
    background: #2563eb;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
`;
document.head.appendChild(style);