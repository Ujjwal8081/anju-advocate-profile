import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services = [
    {
      id: 1,
      title: 'Legal Consultation',
      description: 'Expert legal advice and strategic consultation to guide you through complex legal matters.',
      icon: 'consultation',
      color: 'amber',
      features: [
        'Initial Case Assessment',
        'Legal Strategy Planning',
        'Risk Assessment & Mitigation'
      ]
    },
    {
      id: 2,
      title: 'Court Representation',
      description: 'Professional courtroom advocacy and litigation support across all levels of Indian courts.',
      icon: 'court',
      color: 'blue',
      features: [
        'Trial Court Proceedings',
        'High Court Appeals',
        'Supreme Court Matters'
      ]
    },
    {
      id: 3,
      title: 'Legal Documentation',
      description: 'Professional drafting and review of legal documents, contracts, and agreements.',
      icon: 'document',
      color: 'green',
      features: [
        'Contract Drafting & Review',
        'Legal Notice Preparation',
        'Agreement Formulation'
      ]
    },
    {
      id: 4,
      title: 'Dispute Resolution',
      description: 'Alternative dispute resolution services including mediation, arbitration, and negotiation.',
      icon: 'resolution',
      color: 'purple',
      features: [
        'Mediation Services',
        'Arbitration Proceedings',
        'Settlement Negotiations'
      ]
    },
    {
      id: 5,
      title: 'Legal Research & Advisory',
      description: 'Comprehensive legal research and strategic advisory services for informed decision-making.',
      icon: 'research',
      color: 'indigo',
      features: [
        'Case Law Research',
        'Regulatory Compliance',
        'Legal Opinions & Analysis'
      ]
    },
    {
      id: 6,
      title: 'Emergency Legal Assistance',
      description: 'Urgent legal support for time-sensitive matters requiring immediate intervention.',
      icon: 'emergency',
      color: 'red',
      features: [
        '24/7 Emergency Consultation',
        'Urgent Bail Applications',
        'Crisis Legal Support'
      ]
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Comprehensive discussion of your legal matter, case assessment, and understanding your specific requirements.'
    },
    {
      step: 2,
      title: 'Case Analysis',
      description: 'Thorough legal research, case law analysis, and development of strategic legal approach tailored to your case.'
    },
    {
      step: 3,
      title: 'Strategy Implementation',
      description: 'Execution of legal strategy, document preparation, and proactive legal action to achieve desired outcomes.'
    },
    {
      step: 4,
      title: 'Resolution & Follow-up',
      description: 'Successful case resolution, documentation of outcomes, and ongoing support for any follow-up matters.'
    }
  ];

  serviceCommitments = [
    {
      title: 'Timely Delivery',
      description: 'Commitment to delivering legal services within agreed timelines with regular progress updates and transparent communication.',
      icon: 'clock'
    },
    {
      title: 'Professional Excellence',
      description: 'Maintaining highest standards of legal practice with attention to detail, thoroughness, and unwavering commitment to quality.',
      icon: 'award'
    },
    {
      title: 'Complete Confidentiality',
      description: 'Strict adherence to attorney-client privilege and confidentiality protocols ensuring your information remains secure and protected.',
      icon: 'shield'
    }
  ];

  stats = [
    { value: '100%', label: 'Client Confidentiality' },
    { value: '98%', label: 'On-Time Delivery' },
    { value: '24/7', label: 'Emergency Support' },
    { value: '500+', label: 'Satisfied Clients' }
  ];

  scheduleConsultation() {
    console.log('Consultation scheduling requested');
    // Add consultation scheduling logic here
  }

  callOffice() {
    window.open('tel:+919876543210', '_self');
  }

  sendEmail() {
    window.open('mailto:services@anjusingh.in', '_self');
  }

  getEmergencySupport() {
    console.log('Emergency support requested');
    // Add emergency support logic here
  }
}
