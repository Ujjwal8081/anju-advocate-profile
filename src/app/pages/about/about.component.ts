import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  practiceAreas = [
    {
      title: 'Criminal Law',
      description: 'Expert defense in criminal matters, bail applications, and trial proceedings with strategic case preparation.',
      icon: 'scales'
    },
    {
      title: 'Civil Litigation',
      description: 'Comprehensive civil dispute resolution including property matters, contracts, and commercial litigation.',
      icon: 'building'
    },
    {
      title: 'Family & Matrimonial Law',
      description: 'Sensitive handling of family disputes, divorce proceedings, and child custody matters with compassion.',
      icon: 'heart'
    },
    {
      title: 'Corporate & Legal Advisory',
      description: 'Strategic business legal solutions, compliance guidance, and corporate structuring for sustainable growth.',
      icon: 'briefcase'
    }
  ];

  whyChooseUs = [
    {
      title: '10+ Years Experience',
      description: 'Extensive courtroom and consultation experience across diverse legal matters with proven track record.'
    },
    {
      title: 'Personalized Legal Guidance',
      description: 'Tailored legal strategies and individual attention to each client\'s unique circumstances and requirements.'
    },
    {
      title: 'Strong Case Preparation',
      description: 'Meticulous case analysis, thorough research, and strategic preparation for optimal court representation.'
    },
    {
      title: 'Transparent & Ethical Practice',
      description: 'Complete transparency in proceedings, ethical conduct, and honest communication throughout legal processes.'
    }
  ];

  ngOnInit(): void {
    this.seoService.setAboutSEO();
  }

  bookConsultation() {
    // Placeholder for booking functionality
    console.log('Consultation booking requested');
  }

  callOffice() {
    // Placeholder for phone call functionality
    window.open('tel:+919876543210', '_self');
  }
}
