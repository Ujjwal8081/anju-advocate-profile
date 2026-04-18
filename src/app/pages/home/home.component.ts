import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  practiceAreas = [
    {
      title: 'Criminal Law',
      description: 'Expert defense in criminal matters including bail applications, trial proceedings, and appellate cases with a proven track record.',
      features: ['White Collar Crimes', 'Bail Applications', 'Trial Defense', 'Criminal Appeals']
    },
    {
      title: 'Civil Law', 
      description: 'Comprehensive civil litigation services including property disputes, contract matters, and civil appeals with strategic approach.',
      features: ['Property Disputes', 'Contract Litigation', 'Civil Appeals', 'Injunction Matters']
    },
    {
      title: 'Family Law',
      description: 'Sensitive handling of family matters with compassionate legal counsel ensuring protection of rights and interests.',
      features: ['Divorce Proceedings', 'Child Custody', 'Maintenance Issues', 'Matrimonial Disputes']
    }
  ];

  ngOnInit(): void {
    this.seoService.setHomeSEO();
  }

  consultationBooking() {
    // Placeholder for booking functionality
    console.log('Consultation booking requested');
  }

  viewPracticeAreas() {
    // Placeholder for navigation to practice areas section
    const element = document.querySelector('#practice-areas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
