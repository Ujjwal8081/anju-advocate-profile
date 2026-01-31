import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailjsService } from '../../services/emailjs.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = '';
  showPrivacyModal = false;

  constructor(
    private fb: FormBuilder,
    private emailjsService: EmailjsService,
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[+]?[0-9\\s()\\-]{10,15}$')],
      ],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      consent: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  /**
   * Handle form submission and send email via EmailJS
   */
  onSubmit(): void {
    if (!this.contactForm.valid) {
      // Mark all fields as touched to show validation errors
      this.markFormGroupTouched();
      return;
    }

    this.isSubmitting = true;
    this.showSuccessMessage = false;
    this.showErrorMessage = false;

    // Get form values
    const formData = this.contactForm.value;

    // Convert subject key to human-readable label
    const subjectLabel = this.getSubjectLabel(formData.subject);

    // Prepare template parameters for EmailJS
    // These variable names must match your EmailJS template variables
    const templateParams = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      subject: subjectLabel,  // Send human-readable subject
      message: formData.message,
      consent: formData.consent ? 'Yes' : 'No',
    };

    // Send email through EmailJS
    this.emailjsService
      .sendContactEmail(templateParams)
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          this.handleSuccess();
        },
        (error) => {
          console.error('Email sending failed:', error);
          this.handleError(
            'Failed to send email. Please try again or call us directly at +91 8318350027',
          );
        },
      )
      .finally(() => {
        this.isSubmitting = false;
      });
  }

  /**
   * Handle successful email submission
   */
  private handleSuccess(): void {
    this.showSuccessMessage = true;
    this.showErrorMessage = false;

    // Reset form
    this.contactForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);

    // Optional: Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Handle email submission error
   * @param message - Error message to display
   */
  private handleError(message: string): void {
    this.showErrorMessage = true;
    this.showSuccessMessage = false;
    this.errorMessage = message;

    // Hide error message after 5 seconds
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 5000);
  }

  /**
   * Convert subject value to human-readable label
   */
  private getSubjectLabel(subject: string): string {
    const subjectLabels: { [key: string]: string } = {
      consultation: 'Legal Consultation',
      corporate: 'Corporate Law',
      family: 'Family Law',
      property: 'Property Disputes',
      criminal: 'Criminal Defense',
      civil: 'Civil Litigation',
      other: 'Other Legal Matters',
    };
    return subjectLabels[subject] || subject;
  }

  /**
   * Convert subject value to human-readable inquiry type
   */
  private getInquiryType(subject: string): string {
    const inquiryTypes: { [key: string]: string } = {
      consultation: 'Legal Consultation',
      corporate: 'Corporate Law Inquiry',
      family: 'Family Law Matters',
      property: 'Property Dispute',
      criminal: 'Criminal Defense',
      civil: 'Civil Litigation',
      other: 'Other Legal Matters',
    };
    return inquiryTypes[subject] || subject;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  // Getter methods for easy form validation in template
  get fullName() {
    return this.contactForm.get('fullName');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get consent() {
    return this.contactForm.get('consent');
  }

  /**
   * Open privacy policy modal
   */
  openPrivacyPolicy(): void {
    this.showPrivacyModal = true;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close privacy policy modal
   */
  closePrivacyPolicy(): void {
    this.showPrivacyModal = false;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }
}
