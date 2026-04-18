import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-practice-area',
  templateUrl: './practice-area.component.html',
  styleUrls: ['./practice-area.component.css']
})
export class PracticeAreaComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  practiceAreas = [
    {
      id: 1,
      title: 'Criminal Law',
      description: 'Expert defense in criminal matters including bail applications, anticipatory bail, trial proceedings, and criminal appeals.',
      icon: 'scales',
      color: 'amber',
      services: [
        'Bail Applications & Anticipatory Bail',
        'Criminal Trial Defense',
        'Criminal Appeals & Revisions'
      ]
    },
    {
      id: 2,
      title: 'Civil Litigation',
      description: 'Comprehensive civil dispute resolution including contract disputes, tort claims, recovery suits, and civil appeals.',
      icon: 'building',
      color: 'blue',
      services: [
        'Contract Disputes & Breach',
        'Recovery & Money Suits',
        'Civil Appeals & Revisions'
      ]
    },
    {
      id: 3,
      title: 'Family & Matrimonial Law',
      description: 'Sensitive handling of family matters including divorce proceedings, child custody, maintenance disputes, and domestic violence cases.',
      icon: 'heart',
      color: 'pink',
      services: [
        'Divorce & Separation',
        'Child Custody & Visitation',
        'Maintenance & Alimony'
      ]
    },
    {
      id: 4,
      title: 'Corporate & Commercial Law',
      description: 'Strategic business legal solutions including corporate compliance, contract drafting, commercial disputes, and business structuring.',
      icon: 'briefcase',
      color: 'green',
      services: [
        'Corporate Compliance & Governance',
        'Contract Drafting & Review',
        'Commercial Dispute Resolution'
      ]
    },
    {
      id: 5,
      title: 'Property & Real Estate Law',
      description: 'Comprehensive real estate legal services including property transactions, title verification, property disputes, and landlord-tenant matters.',
      icon: 'home',
      color: 'purple',
      services: [
        'Property Transaction & Due Diligence',
        'Title Verification & Registration',
        'Property Dispute Resolution'
      ]
    },
    {
      id: 6,
      title: 'Legal Consultation',
      description: 'Expert legal advice and consultation services to guide you through complex legal matters with strategic counsel and case assessment.',
      icon: 'question',
      color: 'indigo',
      services: [
        'Legal Advisory & Consultation',
        'Case Assessment & Strategy',
        'Document Review & Drafting'
      ]
    }
  ];

  whyChooseUs = [
    {
      title: '10+ Years Experience',
      description: 'Over a decade of professional legal experience across diverse practice areas with proven track record in complex legal matters.',
      icon: 'clock'
    },
    {
      title: 'Client-Focused Strategies',
      description: 'Personalized legal strategies tailored to each client\'s unique circumstances, ensuring optimal outcomes and client satisfaction.',
      icon: 'users'
    },
    {
      title: 'Strong Courtroom Representation',
      description: 'Aggressive advocacy and compelling courtroom presentation with meticulous case preparation and strategic legal arguments.',
      icon: 'scales'
    },
    {
      title: 'Ethical & Transparent Practice',
      description: 'Unwavering commitment to ethical legal practice with complete transparency in proceedings and honest communication throughout.',
      icon: 'shield'
    }
  ];

  stats = [
    { value: '500+', label: 'Cases Handled' },
    { value: '98%', label: 'Success Rate' },
    { value: '50+', label: 'Corporate Clients' },
    { value: '10+', label: 'Years Experience' }
  ];

  ngOnInit(): void {
    this.seoService.setPracticeAreaSEO();
  }

  bookConsultation() {
    console.log('Consultation booking requested');
    // Add booking logic here
  }

  callOffice() {
    window.open('tel:+919876543210', '_self');
  }

  sendEmail() {
    window.open('mailto:legal@anjusingh.in', '_self');
  }
}
