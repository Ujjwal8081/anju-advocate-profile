import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
  schemas?: unknown[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly siteName = 'Advocate Anju Singh';
  private readonly baseUrl = 'https://advanjusingh.com';
  private readonly defaultImage = `${this.baseUrl}/assets/images/profile-image.jpg`;
  private readonly canonicalSelector = 'link[rel="canonical"][data-managed="true"]';
  private readonly structuredDataSelector = 'script[data-seo-schema="true"]';

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

  applySeo(config: SeoConfig) {
    const canonicalUrl = this.getAbsoluteUrl(config.path);
    const image = config.image || this.defaultImage;

    this.setPageTitle(config.title);
    this.setMetaDescription(config.description);
    this.setKeywords(config.keywords || '');
    this.setCanonicalURL(canonicalUrl);

    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'robots', content: config.noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' });

    this.replaceStructuredData(config.schemas || []);
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
    const canonicalHref = url || window.location.href;
    let canonicalLink = document.head.querySelector(this.canonicalSelector) as HTMLLinkElement | null;

    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.setAttribute('data-managed', 'true');
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = canonicalHref;
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
    script.setAttribute('data-seo-schema', 'true');
    document.head.appendChild(script);
  }

  replaceStructuredData(schemas: unknown[]) {
    document.head.querySelectorAll(this.structuredDataSelector).forEach((node) => node.remove());
    schemas.forEach((schema) => this.setStructuredData(schema));
  }

  getAbsoluteUrl(path = '') {
    if (!path || path === '/') {
      return this.baseUrl;
    }

    if (path.startsWith('http')) {
      return path;
    }

    return `${this.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  getOrganizationSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: this.siteName,
      url: this.baseUrl,
      image: this.defaultImage,
      telephone: '+91-8318350027',
      email: 'advanjusingh89@gmail.com',
      areaServed: [
        {
          '@type': 'City',
          name: 'Lucknow'
        },
        {
          '@type': 'State',
          name: 'Uttar Pradesh'
        },
        {
          '@type': 'Country',
          name: 'India'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Chamber C-508, Kamta High Court',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        postalCode: '226001',
        addressCountry: 'IN'
      }
    };
  }

  getPersonSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Advocate Anju Singh',
      jobTitle: 'Advocate and Legal Consultant',
      image: this.defaultImage,
      worksFor: {
        '@type': 'LegalService',
        name: this.siteName
      },
      url: this.baseUrl,
      knowsAbout: [
        'Criminal Law',
        'Civil Litigation',
        'Family Law',
        'Corporate Law',
        'Property Law'
      ]
    };
  }

  getBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: this.getAbsoluteUrl(item.url)
      }))
    };
  }

  getFaqSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }

  getServiceSchema(service: {
    name: string;
    description: string;
    path: string;
    areaServed?: string[];
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.name,
      name: service.name,
      description: service.description,
      url: this.getAbsoluteUrl(service.path),
      provider: {
        '@type': 'LegalService',
        name: this.siteName,
        url: this.baseUrl
      },
      areaServed: (service.areaServed || ['Lucknow', 'Uttar Pradesh', 'India']).map((area) => ({
        '@type': 'Place',
        name: area
      }))
    };
  }

  // Home Page SEO
  setHomeSEO() {
    const faqs = [
      {
        question: 'What types of legal matters does Advocate Anju Singh handle in Lucknow?',
        answer: 'Advocate Anju Singh handles criminal defense, civil litigation, family disputes, corporate advisory, property disputes, and legal consultation matters in Lucknow and Uttar Pradesh.'
      },
      {
        question: 'Can I book a consultation for bail, property, or family disputes?',
        answer: 'Yes. The firm accepts consultation requests for bail matters, property disputes, family law cases, civil recovery, and corporate legal issues.'
      }
    ];

    this.applySeo({
      title: 'Advocate in Lucknow for Criminal, Civil, Family and Corporate Matters | Advocate Anju Singh',
      description: 'Advocate in Lucknow offering criminal defense, civil litigation, family law, property dispute and corporate legal services. Book a consultation with Advocate Anju Singh.',
      keywords: 'advocate in Lucknow, lawyer in Lucknow, criminal lawyer in Lucknow, civil lawyer in Lucknow, family lawyer in Lucknow, property lawyer in Lucknow, corporate lawyer in Lucknow',
      path: '/',
      schemas: [
        this.getOrganizationSchema(),
        this.getPersonSchema(),
        this.getFaqSchema(faqs)
      ]
    });
  }

  // About Page SEO
  setAboutSEO() {
    this.applySeo({
      title: 'About Advocate Anju Singh | Lawyer in Lucknow',
      description: 'Learn about Advocate Anju Singh, a Lucknow-based legal practitioner with experience in criminal, civil, family, property and corporate matters.',
      keywords: 'about Advocate Anju Singh, lawyer in Lucknow, advocate profile, legal consultant Lucknow',
      path: '/about-us',
      schemas: [
        this.getOrganizationSchema(),
        this.getPersonSchema(),
        this.getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' }
        ])
      ]
    });
  }

  // Services Page SEO
  setServicesSEO() {
    this.applySeo({
      title: 'Legal Services in Lucknow | Criminal, Civil, Family, Property and Corporate Lawyer',
      description: 'Explore legal services in Lucknow for criminal defense, civil litigation, family disputes, property matters, tribunal cases and corporate advisory.',
      keywords: 'legal services in Lucknow, criminal lawyer services, civil litigation lawyer, family lawyer, property dispute lawyer, corporate lawyer Lucknow',
      path: '/services',
      schemas: [
        this.getOrganizationSchema(),
        this.getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ])
      ]
    });
  }

  // Clients Page SEO
  setClientsSEO() {
    this.applySeo({
      title: 'Client Testimonials and Legal Experience | Advocate Anju Singh',
      description: 'Read client testimonials and case experience highlights for Advocate Anju Singh across criminal, civil, family and business legal matters.',
      keywords: 'advocate reviews Lucknow, lawyer testimonials, legal case experience, client feedback advocate',
      path: '/clients',
      schemas: [
        this.getOrganizationSchema(),
        this.getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Clients', url: '/clients' }
        ])
      ]
    });
  }

  // Contact Page SEO
  setContactSEO() {
    this.applySeo({
      title: 'Contact Advocate Anju Singh | Legal Consultation in Lucknow',
      description: 'Contact Advocate Anju Singh in Lucknow for legal consultation on criminal, civil, family, property and corporate matters.',
      keywords: 'contact lawyer in Lucknow, legal consultation Lucknow, advocate phone number, advocate contact form',
      path: '/contact-us',
      schemas: [
        this.getOrganizationSchema(),
        this.getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact Us', url: '/contact-us' }
        ])
      ]
    });
  }

  // Practice Area Page SEO
  setPracticeAreaSEO() {
    this.applySeo({
      title: 'Practice Areas | Criminal, Civil, Family, Property and Corporate Lawyer in Lucknow',
      description: 'Browse practice areas handled by Advocate Anju Singh including criminal cases, civil disputes, family law, property matters and corporate advisory work.',
      keywords: 'practice areas advocate, criminal lawyer in Lucknow, civil lawyer in Lucknow, family law advocate, property dispute lawyer',
      path: '/practice-area',
      schemas: [
        this.getOrganizationSchema(),
        this.getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Practice Areas', url: '/practice-area' }
        ])
      ]
    });
  }
}
