// Job Application Tracker utility

interface JobApplication {
  id: string;
  company: string;
  position: string;
  status: 'applied' | 'interviewing' | 'rejected' | 'accepted';
  appliedDate: string;
  lastContactDate: string;
  notes: string;
}

export class JobTracker {
  static async addApplication(application: JobApplication): Promise<void> {
    const { applications = [] } = await chrome.storage.local.get('applications');
    applications.push(application);
    await chrome.storage.local.set({ applications });
  }

  static async updateStatus(id: string, status: JobApplication['status']): Promise<void> {
    const { applications = [] } = await chrome.storage.local.get('applications');
    const updatedApplications = applications.map(app => 
      app.id === id ? { ...app, status } : app
    );
    await chrome.storage.local.set({ applications: updatedApplications });
  }

  static async getApplications(): Promise<JobApplication[]> {
    const { applications = [] } = await chrome.storage.local.get('applications');
    return applications;
  }

  static async getStats(): Promise<{
    total: number;
    active: number;
    interviews: number;
    responses: number;
  }> {
    const applications = await this.getApplications();
    
    return {
      total: applications.length,
      active: applications.filter(app => app.status === 'applied').length,
      interviews: applications.filter(app => app.status === 'interviewing').length,
      responses: applications.filter(app => 
        ['interviewing', 'rejected', 'accepted'].includes(app.status)
      ).length
    };
  }
}