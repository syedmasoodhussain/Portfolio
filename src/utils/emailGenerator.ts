// Email Generator utility

interface EmailTemplate {
  subject: string;
  body: string;
}

export class EmailGenerator {
  private static readonly TEMPLATES = {
    initial: {
      subject: "Regarding {{position}} opportunity at {{company}}",
      body: `Dear {{recruiterName}},

I hope this email finds you well. I recently applied for the {{position}} position at {{company}} through LinkedIn, and I wanted to express my strong interest in the role and your organization.

{{customizedPitch}}

I would welcome the opportunity to discuss how my skills and experience align with {{company}}'s needs. I'm available for an interview at your convenience.

Best regards,
{{fullName}}`
    },
    followUp: {
      subject: "Following up on {{position}} application - {{fullName}}",
      body: `Dear {{recruiterName}},

I hope you're doing well. I wanted to follow up on my application for the {{position}} role at {{company}}, which I submitted last week.

I remain very interested in the opportunity and would appreciate any updates you can provide about the status of my application.

Thank you for your time and consideration.

Best regards,
{{fullName}}`
    }
  };

  static generateEmail(
    type: 'initial' | 'followUp',
    data: {
      position: string;
      company: string;
      recruiterName: string;
      fullName: string;
      customizedPitch?: string;
    }
  ): EmailTemplate {
    const template = this.TEMPLATES[type];
    
    let subject = template.subject;
    let body = template.body;

    // Replace all placeholders
    Object.entries(data).forEach(([key, value]) => {
      const placeholder = new RegExp(`{{${key}}}`, 'g');
      subject = subject.replace(placeholder, value);
      body = body.replace(placeholder, value);
    });

    return { subject, body };
  }

  static generateCustomizedPitch(jobDescription: string, skills: string[]): string {
    // Implementation for generating a customized pitch based on the job description
    // This will be expanded with more sophisticated text generation
    return `With my background in ${skills.join(', ')}, I am confident in my ability to contribute effectively to your team.`;
  }
}