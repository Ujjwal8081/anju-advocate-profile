import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {

  constructor() {
    // Initialize EmailJS with your public key
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('9MvVIUd6O0X_x1SV7');
  }

  /**
   * Send contact form email using EmailJS
   * @param templateParams - Contact form data
   * @returns Promise with the result of email sending
   */
  sendContactEmail(templateParams: any): Promise<any> {   
    return emailjs.send('service_xqpf62h', 'template_4qm2oy8', templateParams);
  }
}
