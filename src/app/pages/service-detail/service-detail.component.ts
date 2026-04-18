import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICE_PAGES, ServicePageData } from '../../data/service-pages.data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  pageData?: ServicePageData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.pageData = SERVICE_PAGES.find((page) => page.slug === slug);

    if (!this.pageData) {
      this.router.navigateByUrl('/services');
      return;
    }

    this.seoService.applySeo({
      title: this.pageData.metaTitle,
      description: this.pageData.metaDescription,
      keywords: this.pageData.keywords,
      path: `/services/${this.pageData.slug}`,
      type: 'article',
      schemas: [
        this.seoService.getOrganizationSchema(),
        this.seoService.getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: this.pageData.title, url: `/services/${this.pageData.slug}` }
        ]),
        this.seoService.getServiceSchema({
          name: this.pageData.title,
          description: this.pageData.metaDescription,
          path: `/services/${this.pageData.slug}`
        }),
        this.seoService.getFaqSchema(this.pageData.faqs)
      ]
    });
  }
}
