export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroTitle: string;
  heroDescription: string;
  introTitle: string;
  introParagraphs: string[];
  servicePoints: string[];
  situations: string[];
  processTitle: string;
  processSteps: string[];
  faqTitle: string;
  faqs: ServicePageFaq[];
  relatedLinks: Array<{ label: string; path: string }>;
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'criminal-lawyer-lucknow',
    title: 'Criminal Lawyer in Lucknow',
    metaTitle: 'Criminal Lawyer in Lucknow | Bail, Trial and Appeal Matters | Advocate Anju Singh',
    metaDescription: 'Criminal lawyer in Lucknow for bail applications, anticipatory bail, trial defense and criminal appeals. Speak with Advocate Anju Singh for legal guidance.',
    keywords: 'criminal lawyer in Lucknow, bail lawyer Lucknow, anticipatory bail lawyer, criminal advocate Lucknow, trial lawyer Lucknow',
    heroTitle: 'Criminal Lawyer in Lucknow for Bail, Trial and Appeal Matters',
    heroDescription: 'Representation for bail applications, anticipatory bail, trial defense, criminal revisions and appeals before courts in Lucknow and Uttar Pradesh.',
    introTitle: 'Experienced criminal defence representation in Lucknow',
    introParagraphs: [
      'Advocate Anju Singh provides criminal law representation in matters requiring careful preparation, timely filing and practical courtroom strategy. Assistance is available for bail applications, anticipatory bail, defence in pending criminal cases, revisions and appeals.',
      'Every matter begins with a review of the FIR, complaint, notices, orders and supporting documents so that the legal position, urgency and available remedies can be assessed clearly before moving ahead.'
    ],
    servicePoints: [
      'Regular bail and anticipatory bail applications',
      'Criminal trial defense and case preparation',
      'Quashing, revision and appeal strategy',
      'Police complaint and FIR-related advisory'
    ],
    situations: [
      'Arrest risk or immediate bail requirement',
      'Pending criminal complaint or FIR',
      'Trial preparation and evidence review',
      'Need for appeal after an adverse order'
    ],
    processTitle: 'How criminal matters are handled',
    processSteps: [
      'Initial case review and urgency assessment',
      'Document, FIR, notice and order analysis',
      'Court strategy and filing preparation',
      'Representation, updates and next-step planning'
    ],
    faqTitle: 'Criminal law FAQs',
    faqs: [
      {
        question: 'Do you handle bail and anticipatory bail matters in Lucknow?',
        answer: 'Yes. The practice covers regular bail, anticipatory bail and urgent criminal appearance support based on the facts and documents available.'
      },
      {
        question: 'Can you help after an FIR has already been filed?',
        answer: 'Yes. The first step is reviewing the FIR, notices, procedural stage and possible immediate remedies before deciding the legal strategy.'
      }
    ],
    relatedLinks: [
      { label: 'Civil litigation services', path: '/services/civil-lawyer-lucknow' },
      { label: 'Family law services', path: '/services/family-lawyer-lucknow' },
      { label: 'Contact for consultation', path: '/contact-us' }
    ]
  },
  {
    slug: 'civil-lawyer-lucknow',
    title: 'Civil Lawyer in Lucknow',
    metaTitle: 'Civil Lawyer in Lucknow | Civil Litigation and Recovery Suits | Advocate Anju Singh',
    metaDescription: 'Civil lawyer in Lucknow for injunctions, contract disputes, recovery suits, property-related civil litigation and appeals. Contact Advocate Anju Singh.',
    keywords: 'civil lawyer in Lucknow, civil litigation lawyer Lucknow, recovery suit lawyer, injunction lawyer Lucknow, contract dispute advocate',
    heroTitle: 'Civil Lawyer in Lucknow for Disputes, Recovery and Injunction Matters',
    heroDescription: 'Support for civil litigation involving contract disputes, money recovery, injunction applications, appeals and strategic court representation.',
    introTitle: 'Civil litigation support for disputes, recovery and injunction matters',
    introParagraphs: [
      'Civil disputes often demand a balanced approach that combines legal analysis, strong drafting and consistent follow-up before the appropriate court or authority. Support is available for injunctions, recovery proceedings, contractual disputes and related civil claims.',
      'The focus is on understanding the documents, identifying the strongest legal position and guiding clients through filing, hearings and the next procedural steps with clarity.'
    ],
    servicePoints: [
      'Civil suits and written statement strategy',
      'Money recovery and commercial dispute handling',
      'Temporary and permanent injunction matters',
      'Appeals, revisions and document review'
    ],
    situations: [
      'Contract breach or payment dispute',
      'Urgent injunction requirement',
      'Property possession or ownership conflict',
      'Need to challenge a civil court order'
    ],
    processTitle: 'Typical civil litigation workflow',
    processSteps: [
      'Issue analysis and claim viability review',
      'Document examination and fact timeline creation',
      'Drafting, filing and hearing preparation',
      'Court updates, evidence planning and next actions'
    ],
    faqTitle: 'Civil litigation FAQs',
    faqs: [
      {
        question: 'Can you assist with recovery suits and injunction matters?',
        answer: 'Yes. Recovery claims and injunction applications are reviewed based on documents, timelines, urgency and forum suitability.'
      },
      {
        question: 'Do you handle civil appeals as well?',
        answer: 'Yes. Appeal and revision options can be assessed once the order, pleadings and procedural history are reviewed.'
      }
    ],
    relatedLinks: [
      { label: 'Property dispute lawyer', path: '/services/property-lawyer-lucknow' },
      { label: 'Corporate legal services', path: '/services/corporate-lawyer-lucknow' },
      { label: 'All legal services', path: '/services' }
    ]
  },
  {
    slug: 'family-lawyer-lucknow',
    title: 'Family Lawyer in Lucknow',
    metaTitle: 'Family Lawyer in Lucknow | Divorce, Custody and Maintenance Matters | Advocate Anju Singh',
    metaDescription: 'Family lawyer in Lucknow for divorce, child custody, maintenance, domestic disputes and matrimonial legal consultation. Contact Advocate Anju Singh.',
    keywords: 'family lawyer in Lucknow, divorce lawyer Lucknow, child custody lawyer, maintenance case advocate, matrimonial lawyer Lucknow',
    heroTitle: 'Family Lawyer in Lucknow for Divorce, Custody and Maintenance Cases',
    heroDescription: 'Legal support for matrimonial disputes, divorce proceedings, child custody, maintenance issues and related family court matters.',
    introTitle: 'Sensitive and confidential support in family law matters',
    introParagraphs: [
      'Family disputes require legal guidance that is both careful and respectful. Assistance is available in divorce proceedings, child custody and visitation matters, maintenance claims and related matrimonial issues.',
      'Clients are guided with confidentiality and clarity so they understand the available remedies, documentation requirements and possible course of proceedings before the family court.'
    ],
    servicePoints: [
      'Divorce and judicial separation guidance',
      'Child custody and visitation representation',
      'Maintenance, alimony and domestic dispute support',
      'Documentation and hearing preparation in family courts'
    ],
    situations: [
      'Need to file or respond in a divorce case',
      'Child custody disagreement or visitation issue',
      'Maintenance or alimony dispute',
      'Urgent need for confidential legal advice'
    ],
    processTitle: 'Approach for family and matrimonial matters',
    processSteps: [
      'Confidential consultation and fact review',
      'Forum, relief and documentation assessment',
      'Petition or response preparation',
      'Representation, updates and negotiation support'
    ],
    faqTitle: 'Family law FAQs',
    faqs: [
      {
        question: 'Do you handle divorce and child custody matters in Lucknow?',
        answer: 'Yes. The practice handles divorce, custody, maintenance and related matrimonial proceedings depending on the facts and court stage.'
      },
      {
        question: 'Is the consultation confidential?',
        answer: 'Yes. Family law consultations are handled confidentially and with attention to sensitive personal circumstances.'
      }
    ],
    relatedLinks: [
      { label: 'Criminal law support', path: '/services/criminal-lawyer-lucknow' },
      { label: 'Contact the office', path: '/contact-us' },
      { label: 'About Advocate Anju Singh', path: '/about-us' }
    ]
  },
  {
    slug: 'property-lawyer-lucknow',
    title: 'Property Lawyer in Lucknow',
    metaTitle: 'Property Lawyer in Lucknow | Property Dispute and Title Matters | Advocate Anju Singh',
    metaDescription: 'Property lawyer in Lucknow for title verification, property disputes, transaction review, registration support and civil property litigation.',
    keywords: 'property lawyer in Lucknow, property dispute lawyer, title verification lawyer, real estate lawyer Lucknow, property advocate Lucknow',
    heroTitle: 'Property Lawyer in Lucknow for Disputes, Title Checks and Transactions',
    heroDescription: 'Legal support for property disputes, due diligence, title verification, registration-related review and real estate litigation matters.',
    introTitle: 'Property law assistance for transactions and disputes',
    introParagraphs: [
      'Property matters often involve high-value decisions and long-term consequences. Legal support is available for title verification, document review, registration-related guidance, ownership disputes and civil proceedings connected with property rights.',
      'Before any transaction or litigation step, the documents and factual history can be reviewed carefully to identify legal risks, strengthen the client’s position and avoid avoidable complications.'
    ],
    servicePoints: [
      'Property dispute strategy and civil representation',
      'Title verification and due diligence review',
      'Sale deed, agreement and registration support',
      'Possession, boundary and ownership conflict handling'
    ],
    situations: [
      'Need title verification before purchase',
      'Ownership, possession or partition dispute',
      'Review of sale deed or property documentation',
      'Urgent legal advice before registration or litigation'
    ],
    processTitle: 'Property matter workflow',
    processSteps: [
      'Document and title paper review',
      'Risk identification and legal position analysis',
      'Drafting, notice, filing or transaction guidance',
      'Representation and follow-up through hearings or execution'
    ],
    faqTitle: 'Property law FAQs',
    faqs: [
      {
        question: 'Can you review title documents before a property transaction?',
        answer: 'Yes. Title and supporting documents can be reviewed to identify legal risks before moving forward with a transaction.'
      },
      {
        question: 'Do you handle property disputes in court?',
        answer: 'Yes. Property disputes, injunctions, possession issues and related civil proceedings can be assessed and handled based on the matter facts.'
      }
    ],
    relatedLinks: [
      { label: 'Civil litigation page', path: '/services/civil-lawyer-lucknow' },
      { label: 'Services overview', path: '/services' },
      { label: 'Book a consultation', path: '/contact-us' }
    ]
  },
  {
    slug: 'corporate-lawyer-lucknow',
    title: 'Corporate Lawyer in Lucknow',
    metaTitle: 'Corporate Lawyer in Lucknow | Contracts, Compliance and Advisory | Advocate Anju Singh',
    metaDescription: 'Corporate lawyer in Lucknow for business contracts, compliance, notices, dispute advisory and legal support for companies and founders.',
    keywords: 'corporate lawyer in Lucknow, business lawyer Lucknow, contract drafting lawyer, compliance lawyer, commercial lawyer Lucknow',
    heroTitle: 'Corporate Lawyer in Lucknow for Contracts, Compliance and Business Disputes',
    heroDescription: 'Business-focused legal support for contracts, compliance, advisory work, notices, documentation review and commercial dispute strategy.',
    introTitle: 'Corporate legal support for contracts, compliance and business disputes',
    introParagraphs: [
      'Businesses require legal advice that is commercially aware, practical and responsive. Support is available for contract drafting and review, notices, advisory work, compliance concerns and business dispute strategy.',
      'Whether the matter involves a one-time agreement or ongoing legal guidance, the objective is to reduce risk, protect commercial interests and support informed decision-making.'
    ],
    servicePoints: [
      'Contract drafting and review support',
      'Business compliance and legal advisory',
      'Commercial notices and dispute handling',
      'Ongoing legal support for founders and companies'
    ],
    situations: [
      'Need contract review before signing',
      'Compliance issue or regulatory concern',
      'Commercial notice or partner dispute',
      'Business needs recurring legal advisory support'
    ],
    processTitle: 'Corporate legal engagement flow',
    processSteps: [
      'Business issue scoping and risk review',
      'Contract, notice or compliance document assessment',
      'Drafting, negotiation or dispute strategy',
      'Implementation support and follow-up advisory'
    ],
    faqTitle: 'Corporate law FAQs',
    faqs: [
      {
        question: 'Can you help with contract drafting and review?',
        answer: 'Yes. Contract drafting, review and risk identification support is available for commercial agreements and business documentation.'
      },
      {
        question: 'Do you advise startups and growing businesses?',
        answer: 'Yes. The service can support founders and companies with compliance, notices, contracts and commercial legal concerns.'
      }
    ],
    relatedLinks: [
      { label: 'Property legal services', path: '/services/property-lawyer-lucknow' },
      { label: 'Civil litigation support', path: '/services/civil-lawyer-lucknow' },
      { label: 'Contact for advisory', path: '/contact-us' }
    ]
  }
];
