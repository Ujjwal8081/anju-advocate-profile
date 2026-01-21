import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  setPageTitle(title: string) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ name: 'twitter:title', content: title });
  }

  setMetaDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  setCanonicalURL(url: string = '') {
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = url || window.location.href;
    document.head.appendChild(canonicalLink);
  }

  updateOGImage(imageUrl: string) {
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }

  setKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  setStructuredData(data: any) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Home Page SEO
  setHomeSEO() {
    this.setPageTitle('Expert Legal Services | Advocate Portfolio - Corporate & Criminal Law');
    this.setMetaDescription('Professional legal services specializing in corporate law, criminal defense, and civil litigation. 150+ satisfied clients, 500+ successful cases. Get free consultation today.');
    this.setKeywords('advocate, lawyer, legal services, corporate law, criminal law, civil litigation, legal consultation');
    
    const homeSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Advocate Anju Singh',
      'description': 'Premium legal services and advocacy',
      'image': 'https://advanjusingh.com/assets/images/profile-image.jpg',
      'telephone': '+91-8318350027',
      'email': 'advanjusingh89@gmail.com',
      'url': 'https://advanjusingh.com',
      'priceRange': '$$',
      'areaServed': 'United States'
    };
    this.setStructuredData(homeSchema);
  }

  // About Page SEO
  setAboutSEO() {
    this.setPageTitle('About Us | Expert Legal Professionals | Advocate Portfolio');
    this.setMetaDescription('Learn about our team of experienced legal professionals with 10+ years of expertise. Dedicated to delivering justice and excellence in legal services.');
    this.setKeywords('about advocate portfolio, legal team, experienced lawyers, legal professionals, law firm');
    
    const aboutSchema = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About Advocate Anju Singh',
      'description': 'Meet our team of expert legal professionals',
      'url': 'https://advanjusingh.com/about-us'
    };
    this.setStructuredData(aboutSchema);
  }

  // Services Page SEO
  setServicesSEO() {
    this.setPageTitle('Legal Services | Criminal, Corporate & Civil Law | Advocate Portfolio');
    this.setMetaDescription('Comprehensive legal services including corporate law, criminal defense, civil litigation, family law, and more. Proven expertise with 500+ successful cases.');
    this.setKeywords('legal services, corporate law, criminal law, civil litigation, family law, legal consultation, attorney services');
    
    const servicesSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Legal Services',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Advocate Portfolio'
      },
      'areaServed': 'United States',
      'availableLanguage': 'en'
    };
    this.setStructuredData(servicesSchema);
  }

  // Clients Page SEO
  setClientsSEO() {
    this.setPageTitle('Our Clients & Testimonials | Advocate Anju Singh');
    this.setMetaDescription('See what 150+ satisfied clients say about our legal services. Real testimonials and case results showcasing our expertise and dedication.');
    this.setKeywords('client testimonials, legal reviews, case results, client feedback, advocate portfolio');
    
    const clientsSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'Review',
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
          'author': { '@type': 'Person', 'name': 'Client' },
          'reviewBody': 'Excellent legal services'
        }
      ]
    };
    this.setStructuredData(clientsSchema);
  }

  // Contact Page SEO
  setContactSEO() {
    this.setPageTitle('Contact Us | Get Free Legal Consultation | Advocate Anju Singh');
    this.setMetaDescription('Get in touch with our legal team for a free consultation. Contact us via phone, email, or contact form. Available 24/7 for your legal needs.');
    this.setKeywords('contact us, legal consultation, advocate portfolio, phone number, email address, legal help');
    
    const contactSchema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact Advocate Anju Singh',
      'url': 'https://advanjusingh.com/contact-us',
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'telephone': '+91-8318350027',
        'email': 'advanjusingh89@gmail.com'
      }
    };
    this.setStructuredData(contactSchema);
  }

  // Practice Area Page SEO
  setPracticeAreaSEO() {
    this.setPageTitle('Practice Areas | Specialized Legal Services | Advocate Anju Singh');
    this.setMetaDescription('Explore our specialized practice areas: corporate law, criminal defense, civil litigation, family law, and tax compliance. Expert legal solutions.');
    this.setKeywords('practice areas, corporate law, criminal law, civil litigation, family law, legal specializations');
    
    const practiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': 'Practice Areas',
      'description': 'Specialized legal practice areas'
    };
    this.setStructuredData(practiceSchema);
  }

  // Breadcrumb Schema
  setBreadcrumb(breadcrumbs: Array<{ name: string; url: string }>) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.url
      }))
    };
    this.setStructuredData(breadcrumbSchema);
  }

  // FAQ Schema
  setFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
    this.setStructuredData(faqSchema);
  }
}
