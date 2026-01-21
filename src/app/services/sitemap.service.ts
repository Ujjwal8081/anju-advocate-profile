import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SitemapService {

  constructor(private http: HttpClient) { }

  /**
   * Generate sitemap.xml content
   * This should be called to generate the actual sitemap file
   */
  generateSitemapContent(domain: string = 'https://advocateportfolio.com'): string {
    const lastmod = new Date().toISOString().split('T')[0];
    
    const urls = [
      { loc: `${domain}/`, priority: 1.0, changefreq: 'weekly' },
      { loc: `${domain}/home`, priority: 0.9, changefreq: 'weekly' },
      { loc: `${domain}/about-us`, priority: 0.8, changefreq: 'monthly' },
      { loc: `${domain}/services`, priority: 0.9, changefreq: 'weekly' },
      { loc: `${domain}/practice-area`, priority: 0.8, changefreq: 'monthly' },
      { loc: `${domain}/clients`, priority: 0.7, changefreq: 'monthly' },
      { loc: `${domain}/contact-us`, priority: 0.8, changefreq: 'weekly' },
    ];

    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
`;

    urls.forEach(url => {
      sitemapXml += `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>
`;
    });

    sitemapXml += `</urlset>`;

    return sitemapXml;
  }

  /**
   * Get sitemap content for download
   */
  getSitemap(domain: string = 'https://advocateportfolio.com') {
    return this.generateSitemapContent(domain);
  }
}
