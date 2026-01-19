import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  clientCategories = [
    {
      title: 'Individual Clients',
      description: 'Personal legal matters including consumer disputes, employment issues, and individual rights protection.',
      icon: 'fas fa-user',
      bgColor: 'bg-blue-500',
      clientCount: 200
    },
    {
      title: 'Corporate & Business',
      description: 'Comprehensive business law services including contracts, compliance, and corporate governance.',
      icon: 'fas fa-building',
      bgColor: 'bg-purple-500',
      clientCount: 150
    },
    {
      title: 'Startups & Entrepreneurs',
      description: 'Legal guidance for new businesses, intellectual property protection, and startup compliance.',
      icon: 'fas fa-rocket',
      bgColor: 'bg-green-500',
      clientCount: 80
    },
    {
      title: 'Families & Matrimonial',
      description: 'Family law matters including divorce, child custody, property settlements, and matrimonial disputes.',
      icon: 'fas fa-heart',
      bgColor: 'bg-pink-500',
      clientCount: 120
    },
    {
      title: 'Property Owners',
      description: 'Real estate law, property disputes, documentation, and land acquisition matters.',
      icon: 'fas fa-home',
      bgColor: 'bg-orange-500',
      clientCount: 100
    },
    {
      title: 'NGOs & Institutions',
      description: 'Legal support for non-profit organizations, educational institutions, and charitable trusts.',
      icon: 'fas fa-hands-helping',
      bgColor: 'bg-teal-500',
      clientCount: 45
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

}
