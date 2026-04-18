import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  clientCategories = [
    {
      title: 'Criminal Law Clients',
      description: 'Individuals requiring expert defense in criminal matters, bail applications, trial proceedings, and criminal appeals.',
      icon: 'fas fa-gavel',
      bgColor: 'bg-red-500',
      clientCount: 120
    },
    {
      title: 'Civil Litigation Clients',
      description: 'Parties involved in civil disputes, contract breaches, property conflicts, and civil recovery matters.',
      icon: 'fas fa-balance-scale',
      bgColor: 'bg-blue-500',
      clientCount: 100
    },
    {
      title: 'Family & Matrimonial',
      description: 'Families requiring support in divorce, child custody, maintenance disputes, and matrimonial matters.',
      icon: 'fas fa-heart',
      bgColor: 'bg-pink-500',
      clientCount: 110
    },
    {
      title: 'Corporate & Business',
      description: 'Businesses requiring comprehensive legal services in compliance, contracts, and corporate governance.',
      icon: 'fas fa-building',
      bgColor: 'bg-green-500',
      clientCount: 95
    },
    {
      title: 'Property Owners & Buyers',
      description: 'Real estate clients requiring property transactions, title verification, and real estate dispute resolution.',
      icon: 'fas fa-home',
      bgColor: 'bg-orange-500',
      clientCount: 85
    },
    {
      title: 'Legal Consultation Seekers',
      description: 'Clients seeking expert legal advice, case assessment, and strategic planning for their matters.',
      icon: 'fas fa-headset',
      bgColor: 'bg-indigo-500',
      clientCount: 130
    },
    {
      title: 'Consumer Dispute Clients',
      description: 'Consumers requiring representation in CAT for defective products, unfair practices, and compensation claims.',
      icon: 'fas fa-shopping-cart',
      bgColor: 'bg-cyan-500',
      clientCount: 75
    },
    {
      title: 'Government Employees (SAT)',
      description: 'State government employees with administrative disputes, salary issues, and employment grievances.',
      icon: 'fas fa-id-badge',
      bgColor: 'bg-rose-500',
      clientCount: 60
    },
    {
      title: 'Federal Administrative Clients',
      description: 'Central government employees and organizations with administrative matters before CAT tribunal.',
      icon: 'fas fa-flag',
      bgColor: 'bg-teal-500',
      clientCount: 50
    }
  ];

  trustPoints = [
    {
      title: 'Long-term Relationships',
      description: 'We believe in building lasting partnerships with our clients based on trust and mutual respect.',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Confidential Representation',
      description: 'Maintaining strict confidentiality and ethical standards in all client interactions and legal proceedings.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Personalized Solutions',
      description: 'Tailored legal strategies designed to meet the unique needs and goals of each individual client.',
      icon: 'fas fa-cogs'
    },
    {
      title: 'Proven Track Record',
      description: 'Demonstrated success across multiple legal domains with a strong history of favorable outcomes.',
      icon: 'fas fa-trophy'
    }
  ];

  testimonials = [
    {
      initials: 'R.S.',
      quote: 'Exceptional legal expertise and personal attention. They guided me through a complex property dispute with professionalism and achieved a favorable outcome.',
      case: 'Property Dispute',
      location: 'Mumbai, Maharashtra'
    },
    {
      initials: 'A.K.',
      quote: 'Outstanding support during our corporate legal matters. Their knowledge of business law and timely advice helped us navigate challenging compliance issues.',
      case: 'Corporate Compliance',
      location: 'Delhi, NCR'
    },
    {
      initials: 'M.P.',
      quote: 'Compassionate and thorough representation in our family legal matter. They made a difficult time much easier with their understanding and expertise.',
      case: 'Family Law',
      location: 'Bangalore, Karnataka'
    }
  ];

  ngOnInit(): void {
    this.seoService.setClientsSEO();
  }

}
