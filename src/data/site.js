// Single source of truth for every piece of copy on the site.
// Edit this file to change content, then run `npm run build`.
//
// Fields ending in `Html` intentionally contain inline markup (e.g. <strong>,
// <em>, &amp;) and are inserted as-is. Every other field is treated as plain
// text and HTML-escaped automatically by the component that renders it.

export const site = {
  meta: {
    lang: 'en',
    title: 'Debrup Banerjee — Engineering Leader',
    description: 'Debrup Banerjee is an engineering leader at Appian in Chennai, heading the Enterprise Integration group. Previously Fidelity Labs, CDW and HCL Technologies.',
    author: 'Debrup Banerjee',
    url: 'https://debrup-banerjee.github.io/',
    // Must match --bg in src/styles/00-base.css for light/dark respectively.
    themeColorLight: '#f8f9fa',
    themeColorDark: '#111827',
    og: {
      type: 'profile',
      title: 'Debrup Banerjee — Engineering Leader',
      description: 'Leading Enterprise Integration at Appian. Builder of high-throughput platforms, mobile apps and R&D prototypes since 2013.',
      url: 'https://debrup-banerjee.github.io/',
      image: 'https://debrup-banerjee.github.io/assets/img/og-image.png',
      imageWidth: 1200,
      imageHeight: 630,
      firstName: 'Debrup',
      lastName: 'Banerjee',
    },
    twitterCard: 'summary_large_image',
    favicon: 'assets/img/favicon.svg',
    appleTouchIcon: 'assets/img/apple-touch-icon.png',
  },

  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Debrup Banerjee',
    url: 'https://debrup-banerjee.github.io/',
    jobTitle: 'Senior Manager, Software Development — Group Development Lead',
    worksFor: { '@type': 'Organization', name: 'Appian' },
    address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Management Calcutta' },
      { '@type': 'CollegeOrUniversity', name: 'National Institute of Technology Durgapur' },
      { '@type': 'CollegeOrUniversity', name: 'University Institute of Technology, The University of Burdwan' },
    ],
    sameAs: [
      'https://www.linkedin.com/in/debrupbanerjee',
    ],
  },

  brand: {
    mark: 'DB',
    name: 'Debrup Banerjee',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    eyebrow: 'Engineering Leader · Chennai, India',
    firstName: 'Debrup',
    lastName: 'Banerjee',
    ledeHtml: "I lead the <strong>Enterprise Integration group at Appian</strong>: 40+ developers and architects building how Appian connects to the systems enterprises run on. I've been shipping software since 2013, from innovation-lab prototypes to high-throughput financial platforms.",
    actions: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/debrupbanerjee', primary: true, external: true, arrow: true },
      { label: 'See experience', href: '#experience', primary: false },
    ],
    facts: [
      { term: 'Now', descriptionHtml: 'Senior Manager, Software Development · Appian' },
      { term: 'Group', descriptionHtml: 'Enterprise Integration · 40+ engineers' },
      { term: 'Before', descriptionHtml: 'Fidelity Labs · CDW · HCL Technologies' },
      { term: 'Education', descriptionHtml: 'IIM Calcutta · NIT Durgapur' },
    ],
  },

  about: {
    index: '01',
    label: 'About',
    title: 'An engineering leader who still thinks like a builder.',
    proseHtml: [
      "My career runs from hands-on R&amp;D to leading engineering at scale. Today I lead Appian's Enterprise Integration group and run the interviewing process for Appian India.",
      "Before Appian I spent close to five years at Fidelity Labs, part of Fidelity's Center for Applied Technology. There I designed a secure, high-throughput transaction platform from scratch and led mobile R&amp;D. Earlier, I led an AR/VR innovation team at CDW. At HCL, I prototyped on wearables, beacons and AR/VR in the Mobility Innovation Lab, then led Android development for the Mobility Practice.",
      'I care about resilient APIs, clean code and mentoring people from diverse backgrounds. I\'m also a Toastmaster and enjoy public speaking.',
    ],
    highlights: [
      { statHtml: '40+', descriptionHtml: 'developers and architects in the group I lead at Appian' },
      { statHtml: 'Since 2013', descriptionHtml: 'building across enterprise, fintech and mobile' },
      { statHtml: '3 R&amp;D teams', descriptionHtml: 'Fidelity Labs, CDW innovation and HCL Mobility Innovation Lab' },
      { statHtml: 'MADJAM 2016', descriptionHtml: "winner of HCL's award for the most innovative idea" },
    ],
  },

  experience: {
    index: '02',
    label: 'Experience',
    title: "Where I've worked",
    intro: 'Four companies, one thread: turning new technology into systems people rely on.',
    jobs: [
      {
        whenHtml: 'Mar 2023 — Present<br><span class="now">Current</span>',
        org: 'Appian',
        location: 'Chennai, India',
        roles: [
          { title: 'Senior Manager, Software Development: Group Development Lead', date: 'Apr 2026' },
          { title: 'Manager, Software Development', date: 'Feb 2024' },
          { title: 'Lead Software Engineer', date: 'Mar 2023' },
        ],
        impactHtml: [
          'Lead the Enterprise Integration group of 40+ developers and architects',
          'Own the features that connect Appian to external systems and let users work with Appian at scale',
          'Lead the interviewing process for Appian India',
        ],
      },
      {
        whenHtml: 'Aug 2018 — Mar 2023',
        org: 'Fidelity Investments',
        location: 'Fidelity Labs · Fidelity Center for Applied Technology · Chennai',
        roles: [
          { title: 'Software Engineering Lead' },
        ],
        impactHtml: [
          'Designed and built a secure, high-throughput transaction platform from scratch',
          'Wrote resilient APIs for millions of users on Node.js, TypeScript, Java, Kafka, MongoDB and Redis',
          'Led mobile R&amp;D, including a gamified financial app in React Native, Android and Kotlin',
        ],
      },
      {
        whenHtml: 'May 2017 — Jul 2018',
        org: 'CDW',
        location: 'formerly Sirius Computer Solutions · Chennai',
        roles: [
          { title: 'Senior Consultant' },
        ],
        impactHtml: [
          'Built full-stack web and hybrid mobile apps across UI and service layers with Angular, Ionic and Node.js',
          'Led an innovation team developing AR and VR solutions',
        ],
      },
      {
        whenHtml: 'Aug 2013 — May 2017',
        org: 'HCL Technologies',
        location: 'Chennai',
        roles: [
          { title: 'Senior Consultant: Android Lead, Mobility Practice', date: 'Sep 2016' },
          { title: 'Lead Engineer, Mobility Innovation Lab', date: 'Oct 2014' },
          { title: 'Software Engineer, BT Financial Group (Westpac)', date: 'Aug 2013' },
        ],
        impactHtml: [
          'Led Android app development for the Mobility Practice, from concept to implementation',
          'Prototyped on Google Glass, Samsung Gear, Microsoft Band, beacons and AR/VR',
          'Core team member on an iBeacon indoor navigation app for a large airport',
          'Built an award-winning, near-real-time proactive healthcare prototype on Android, Tizen and Azure',
        ],
      },
    ],
  },

  work: {
    index: '03',
    label: 'Selected work',
    title: "Things I've built and led",
    intro: 'Highlights from my roles.',
    projects: [
      {
        tagHtml: 'Appian · Leadership',
        title: 'Enterprise Integration',
        descriptionHtml: "Leading the group behind Appian's integration capabilities: connecting the platform to external systems and enabling users to interact with Appian at scale.",
        meta: ['40+ engineers', '2023 – now'],
      },
      {
        tagHtml: 'Fidelity Labs · Platform',
        title: 'High-throughput transaction platform',
        descriptionHtml: 'A secure, scalable backend designed from scratch, with resilient APIs built for millions of users in financial services.',
        meta: ['Node.js', 'TypeScript', 'Kafka', 'MongoDB'],
      },
      {
        tagHtml: 'Fidelity Labs · Mobile R&amp;D',
        title: 'Gamified financial app',
        descriptionHtml: 'A gamified financial mobile application, built as part of mobile R&amp;D at the Fidelity Center for Applied Technology.',
        meta: ['React Native', 'Android', 'Kotlin'],
      },
      {
        tagHtml: 'HCL · Innovation Lab',
        title: 'Airport indoor navigation',
        descriptionHtml: 'A one-of-a-kind indoor wayfinding app for a large airport, built primarily on iBeacons.',
        meta: ['iBeacons', 'Mobile'],
      },
      {
        tagHtml: 'HCL · Award-winning',
        title: 'Proactive healthcare prototype',
        descriptionHtml: 'An end-to-end, near-real-time proof of concept for the emerging needs of proactive healthcare, spanning wearables and the cloud.',
        meta: ['Android', 'Tizen', 'Azure Event Hub', 'Storm', 'HBase'],
      },
      {
        tagHtml: 'CDW · Innovation',
        title: 'AR & VR solutions',
        descriptionHtml: 'Led an innovation team focused on developing augmented and virtual reality solutions.',
        meta: ['AR', 'VR'],
      },
    ],
  },

  skills: {
    index: '04',
    label: 'Skills',
    title: 'What I bring',
    intro: "Drawn from the work above: what I've led, designed and shipped.",
    groups: [
      {
        title: 'Engineering leadership',
        items: [
          'Leading multi-team engineering groups',
          'Hiring & interviewing',
          'Mentoring & team development',
          'R&D and innovation labs',
          'Agile delivery',
        ],
      },
      {
        title: 'Systems & backend',
        items: [
          'Enterprise integration',
          'Distributed, high-throughput systems',
          'Resilient API design',
          'Clean code & design patterns',
          'Node.js · TypeScript',
          'Java · Spring Boot',
          'Kafka · MongoDB · Redis · Elasticsearch',
        ],
      },
      {
        title: 'Mobile & web',
        items: [
          'Android · Kotlin',
          'React Native',
          'iOS · Swift',
          'Ionic · Cordova',
          'React · Angular',
          'HTML · CSS · JavaScript',
        ],
      },
      {
        title: 'Cloud & emerging tech',
        items: [
          'Microsoft Azure: Event Hub, Storm, HBase',
          'Near-real-time data pipelines',
          'Wearables: Samsung Gear, Microsoft Band, Google Glass',
          'iBeacons & indoor positioning',
          'AR · VR',
        ],
      },
    ],
    // Each entry is the full <li> inner HTML (own <strong> tags included) so
    // related awards can share one pill, as "Spot Award" and "On The Spot
    // Award" do below.
    awards: [
      { html: "<strong>Winner, MADJAM 2016</strong>: HCL's most innovative idea award" },
      { html: '<strong>Ideapreneurship Award</strong>' },
      { html: '<strong>Above and Beyond</strong>' },
      { html: '<strong>Spot Award</strong> · <strong>On The Spot Award</strong>' },
    ],
  },

  education: {
    index: '05',
    label: 'Education',
    title: 'Engineering, security and management',
    schools: [
      { year: '2017 — 2018', name: 'Indian Institute of Management Calcutta', program: 'Executive Program in Management' },
      { year: '2010 — 2012', name: 'National Institute of Technology Durgapur', program: 'M.Tech, Information Technology: Information Security' },
      { year: '2005 — 2009', name: 'University Institute of Technology, Burdwan', program: 'B.E., Computer Engineering' },
    ],
  },

  contact: {
    index: '06',
    label: 'Contact',
    titleHtml: "Let's build <em>something</em> together.",
    intro: 'Open to conversations about engineering leadership, enterprise integration and emerging tech.',
    links: [
      { label: 'LinkedIn', value: 'in/debrupbanerjee', href: 'https://www.linkedin.com/in/debrupbanerjee', external: true },
      { label: 'Email', value: 'dban.nitdgp@gmail.com', href: 'mailto:dban.nitdgp@gmail.com', external: false },
    ],
  },

  footer: {
    name: 'Debrup Banerjee',
    builtWithHtml: 'Built with HTML &amp; CSS · Hosted on <a href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages</a>',
  },
};
