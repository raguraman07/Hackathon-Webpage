export interface TimelineEvent {
  step: number;
  date: string;
  time: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  highlight?: boolean;
}

export interface Prize {
  title: string;
  rank: string;
  amount: string;
  perks: string[];
  highlight?: boolean;
  badge?: string;
  color: string;
}

export interface ScheduleItem {
  id: string;
  day: 'day1' | 'day2';
  time: string;
  title: string;
  location: string;
  description: string;
  highlight?: boolean;
}

export interface RuleCategory {
  category: string;
  items: { title: string; detail: string }[];
}

export interface JudgingCriterion {
  title: string;
  percentage: number;
  description: string;
  checklist: string[];
}

export interface Person {
  id: string;
  name: string;
  role: string;
  organization: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'Title' | 'Platinum' | 'Gold' | 'Tech Partner' | 'Community';
  logoText: string;
  website: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  points?: string[];
}

export const HACKATHON_DETAILS = {
  name: "COREXATHON '26",
  fullTitle: "Department of Computer Science & Engineering 24-Hour Hackathon",
  tagline: "Ignite Innovation. Conquer Code. Shape the Future.",
  dates: "August 28 - 29, 2026",
  duration: "24 Hours Non-Stop",
  targetDate: "2026-08-28T10:00:00+05:30",
  venue: "SNS DT Play House",
  address: "SNS Kalvi Nagar, Sathy Main Road, Kurumbapalayam, Coimbatore, Tamil Nadu 641107",
  prizePool: "₹5,00,000+",
  minTeamSize: 2,
  maxTeamSize: 4,
  contactEmail: "corexathon@snsce.ac.in",
  contactPhone: "+91 98765 43210",
  collegeName: "SNS College of Engineering",
  department: "Department of Computer Science & Engineering",
  departmentShort: "Department of CSE",
  accreditation: "Autonomous Institution | NAAC 'A' Grade | NBA Accredited",
  registrationUrl: "https://docs.google.com/forms/",
  googleMapsUrl: "https://maps.app.goo.gl/mLV9ieNTtxh6WZJt5",
};

export const TIMELINE: TimelineEvent[] = [
  {
    step: 1,
    date: "August 1, 2026",
    time: "10:00 AM",
    title: "Registrations Open",
    description: "Online team registration opens across India. Form your 2-4 member team and submit your registration details.",
    status: "completed"
  },
  {
    step: 2,
    date: "August 25, 2026",
    time: "11:59 PM",
    title: "Registrations Close",
    description: "Deadline to register teams via official Google Form.",
    status: "current",
    highlight: true
  },
  
  {
    step: 3,
    date: "August 28, 2026",
    time: "09:00 AM",
    title: "Check-in & Welcome Breakfast",
    description: "Participants arrive at SNS DT Play House, collect badge kits, and settle into hack stations.",
    status: "upcoming"
  },
  {
    step: 4,
    date: "August 28, 2026",
    time: "09:30 AM",
    title: "Inauguration & Problem Statement Release",
    description: "Keynotes by Chief Guests, sponsor briefing, and official problem statements unveiled offline at the venue.",
    status: "upcoming"
  },
  {
    step: 5,
    date: "August 28, 2026",
    time: "10:00 AM",
    title: "24-Hour Coding Sprint Begins!",
    description: "Timer starts! Teams begin coding, building, and prototyping uninterrupted.",
    status: "upcoming",
    highlight: true
  },
  {
    step: 6,
    date: "August 28, 2026",
    time: "03:00 PM",
    title: "Mentorship Round 1",
    description: "Industry mentors review team architecture, data pipelines, and offer feedback.",
    status: "upcoming"
  },
  {
    step: 7,
    date: "August 28, 2026",
    time: "11:00 PM",
    title: "Midnight Coding",
    description: "Energy drinks, snacks, music session,and overnight coding acceleration.",
    status: "upcoming"
  },
  {
    step: 8,
    date: "August 29, 2026",
    time: "08:00 AM",
    title: "Mentorship Round 2 (Code Review)",
    description: "Technical mentors conduct deep code review and UI sanity checks.",
    status: "upcoming"
  },
  {
    step: 9,
    date: "August 29, 2026",
    time: "10:00 AM",
    title: "Sprint End & GitHub Freeze",
    description: "Codinging officially stops. Code repository URLs Should be submitted in the portal.",
    status: "upcoming"
  },
  {
    step: 10,
    date: "August 29, 2026",
    time: "10:30 AM",
    title: "Grand Jury Evaluation & Demos",
    description: "Shortlisted teams pitch live in front of the judge panel at SNS Central Auditorium.",
    status: "upcoming"
  },
  {
    step: 11,
    date: "August 29, 2026",
    time: "01:00 PM",
    title: "Prize Ceremony & Closing Valedictory",
    description: "Announcement of Grand Winner, Runner-ups, and Trophy distribution.",
    status: "upcoming",
    highlight: true
  }
];

export const PRIZES: Prize[] = [
  {
    title: "Grand Champion",
    rank: "1st Place Overall",
    amount: "₹2,50,000",
    badge: "Overall Winner",
    color: "#FFD400",
    highlight: true,
    perks: [
      "Official COREXATHON Champion Trophy",
      "Direct Entry to SNS iHub Incubation with ₹10L Seed Grant Support",
      "Direct Interview Calls with Title Sponsor Tech Team",
      "₹1,00,000 Cloud Credits (AWS/GCP)",
      "Swag Kit & Lifetime Alumni Badge"
    ]
  },
  {
    title: "First Runner-Up",
    rank: "2nd Place Overall",
    amount: "₹1,50,000",
    badge: "Runner Up",
    color: "#E2E8F0",
    perks: [
      "First Runner-Up Trophy & Medals",
      "Fast-track Internship Interviews",
      "₹50,000 Cloud Credits",
      "Premium Swag Box & Mentorship Vouchers"
    ]
  },
  {
    title: "Second Runner-Up",
    rank: "3rd Place Overall",
    amount: "₹1,00,000",
    badge: "2nd Runner Up",
    color: "#CD7F32",
    perks: [
      "Second Runner-Up Trophy & Medals",
      "Internship Opportunity Review",
      "₹25,000 Cloud Credits",
      "Special Tech Gadget Hampers"
    ]
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    id: "s1",
    day: "day1",
    time: "08:30 AM - 09:15 AM",
    title: "Participant Check-In & Breakfast",
    location: "SNS DT Play House Lobby",
    description: "Welcome kit distribution, badge scanning, and energetic breakfast."
  },
  {
    id: "s2",
    day: "day1",
    time: "09:15 AM - 10:00 AM",
    title: "Grand Inauguration & Keynote",
    location: "SNS DT Play House",
    description: "Welcome address, Chief Guest keynote, and hackathon rules brief."
  },
  {
    id: "s3",
    day: "day1",
    time: "10:00 AM",
    title: "HACKATHON TIMER STARTS",
    location: "All Hack Zones",
    description: "24-Hour Non-stop coding sprint begins. Systems go!",
    highlight: true
  },
  {
    id: "s4",
    day: "day1",
    time: "01:00 PM - 02:00 PM",
    title: "Power Lunch",
    location: "SNS DT Play House Lobby",
    description: "Buffet lunch for all registered teams and mentors."
  },
  {
    id: "s5",
    day: "day1",
    time: "03:00 PM - 05:00 PM",
    title: "Mentorship Session 1: Architecture Check",
    location: "Hack Bays",
    description: "Senior engineers review system design, tech stack choice, and data model."
  },
  {
    id: "s6",
    day: "day1",
    time: "05:30 PM - 06:00 PM",
    title: "High Tea & Networking Snack",
    location: "SNS DT Play House Lobby",
    description: "Coffee, tea, snacks, and casual sponsor interaction."
  },
  {
    id: "s7",
    day: "day1",
    time: "08:30 PM - 09:30 PM",
    title: "Buffet Dinner",
    location: "SNS DT Play House Lobby",
    description: "Nutritious dinner to fuel the overnight hack."
  },
  {
    id: "s8",
    day: "day1",
    time: "11:00 PM - 12:30 AM",
    title: "Midnight Refreshment Station",
    location: "SNS DT Play House",
    description: "Music,energy drinks,and mini quiz."
  },
  {
    id: "s9",
    day: "day2",
    time: "01:00 AM - 04:00 AM",
    title: "Overnight Coding Accelerator",
    location: "SNS DT Play House",
    description: "Deep focus hour. Technical support desk remains active."
  },
  {
    id: "s10",
    day: "day2",
    time: "04:00 AM - 05:30 AM",
    title: "Mentorship Session 2: Code & Feature Freeze Check",
    location: "SNS DT Play House",
    description: "Mentors inspect core feature completeness and UX readiness."
  },
  {
    id: "s11",
    day: "day2",
    time: "08:30 AM - 09:30 AM",
    title: "Fresh Breakfast & Coffee Refresh",
    location: "SNS DT Play House Lobby",
    description: "Morning breakfast to energize teams for final pitch preparation."
  },
  {
    id: "s12",
    day: "day2",
    time: "10:00 AM",
    title: "HACKATHON TIMER ENDS (CODE FREEZE)",
    location: "COREXATHON Portal",
    description: "GitHub commit freeze! Final submission link must be turned in.",
    highlight: true
  },
  {
    id: "s13",
    day: "day2",
    time: "10:00 AM - 11:30 AM",
    title: "Jury Pitching & Demo Rounds",
    location: "Presentation At Play House",
    description: "Shortlisted teams present 5-minute live demo + 3-minute Q&A to judge panel."
  },
  {
    id: "s14",
    day: "day2",
    time: "12:00 PM - 01:30 PM",
    title: "Grand Award Ceremony & Valedictory",
    location: "SNS DT Play House",
    description: "Winner announcements, cash prize handover, trophy distribution, and vote of thanks."
  }
];

export const RULES: RuleCategory[] = [
  {
    category: "Eligibility & Team Formation",
    items: [
      {
        title: "Student Status",
        detail: "Open to all current undergraduate students pursuing B.E / B.Tech , Arts & Science from any recognized institution."
      },
      {
        title: "Team Size",
        detail: "Teams can consist of 2 to 4 members. Inter-disciplinary and cross-college teams are encouraged."
      },
      {
        title: "Team Leader Responsibility",
        detail: "Each team must designate one Team Leader who will serve as the primary contact person for all official communications."
      }
    ]
  },
  {
    category: "Code & Intellectual Property",
    items: [
      {
        title: "Original Code",
        detail: "All code, design assets, and prototypes must be developed exclusively during the 24-hour hacking window. Pre-built complete applications will result in instant disqualification."
      },
      {
        title: "Open Source Libraries & APIs",
        detail: "Teams are free to use open-source libraries, frameworks, SDKs, and public APIs, provided they are declared in the final repository README."
      }
    ]
  },
  {
    category: "Submission & Code Freeze",
    items: [
      {
        title: "GitHub Repository",
        detail: "Teams must submit a public GitHub repository link containing clean commits created within the hackathon duration."
      }
    ]
  },
  {
    category: "Code of Conduct & Ethics",
    items: [
      {
        title: "Fair Play & Integrity",
        detail: "Plagiarism, misrepresentation, or copying code from other participating teams will lead to immediate disqualification."
      },
      {
        title: "Inclusive & Respectful Environment",
        detail: "SNS College of Engineering maintains a strict zero-tolerance policy against any form of harassment, discrimination, or offensive behavior."
      },
      {
        title: "Safety & Campus Decorum",
        detail: "Participants must wear their hackathon ID badges at all times on campus and adhere to campus safety guidelines."
      }
    ]
  }
];

export const JUDGING_CRITERIA: JudgingCriterion[] = [
  {
    title: "Innovation & Originality",
    percentage: 25,
    description: "How creative, unique, and novel is the proposed solution compared to existing market alternatives?",
    checklist: [
      "Fresh perspective on the problem",
      "Unconventional application of technology",
      "Distinct competitive advantage"
    ]
  },
  {
    title: "Technical Complexity & Feasibility",
    percentage: 25,
    description: "Evaluation of the underlying technology stack, algorithms, system architecture, and technical execution depth.",
    checklist: [
      "Robust architectural design",
      "Effective integration of APIs / Models",
      "Functional working prototype (not just mockups)"
    ]
  },
  {
    title: "Design & User Experience (UI/UX)",
    percentage: 20,
    description: "Is the interface intuitive, responsive, aesthetically polished, and accessible for the target audience?",
    checklist: [
      "Clean UI visual design & typography",
      "Seamless user onboarding flow",
      "Accessibility & responsive layouts"
    ]
  },
  {
    title: "Real-World Impact & Scalability",
    percentage: 15,
    description: "Does the solution solve a genuine pain point with realistic market adoption potential and commercial scalability?",
    checklist: [
      "Clear target demographic & value metric",
      "Scalable infrastructure feasibility",
      "Viable business or social model"
    ]
  },
  {
    title: "Code Quality & Documentation",
    percentage: 10,
    description: "Clean code structure, modularity, inline documentation, clear Git commit history, and comprehensive README.",
    checklist: [
      "Readable code & modular functions",
      "Descriptive README setup guide",
      "Active commit history during the sprint"
    ]
  },
  {
    title: "Pitch & Presentation",
    percentage: 5,
    description: "Clarity, confidence, and effectiveness of the team in communicating their problem, solution, and live demo.",
    checklist: [
      "Concise problem-solution elevator pitch",
      "Flawless live working demo showcase",
      "Crisp response to jury technical Q&A"
    ]
  }
];

export const SPEAKERS_MENTORS: Person[] = [
  {
    id: "m1",
    name: "Dr. Vikram Subramanian",
    role: "Director of AI Research",
    organization: "NeuroTech Labs",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: "Ex-Google AI researcher with 14+ years in Deep Learning, Computer Vision, and Generative AI systems.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    id: "m2",
    name: "Ananya Deshmukh",
    role: "Head of Product & Design",
    organization: "FinCloud Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Design leader passionate about human-centered interfaces, micro-interactions, and accessibility in FinTech.",
    linkedin: "https://linkedin.com"
  },
  {
    id: "m3",
    name: "Karthik Raja",
    role: "Principal Security Architect",
    organization: "CyberShield Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Certified Ethical Hacker and Zero-Trust specialist advising Fortune 500 companies on cloud security.",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    id: "m4",
    name: "Priya Sundaram",
    role: "Founder & CEO",
    organization: "GreenTech Ventures",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Serial entrepreneur mentoring early-stage CleanTech & AgriTech startups with SNS iHub.",
    linkedin: "https://linkedin.com"
  },
  {
    id: "m5",
    name: "Rajesh Kannan",
    role: "Staff Engineering Lead",
    organization: "Zoho Corporation",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Building distributed cloud infrastructure handling 50M+ concurrent user queries daily.",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    id: "m6",
    name: "Dr. S. Naren Kumar",
    role: "Head of Innovation",
    organization: "SNS iHub Incubation",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Spearheading student entrepreneurship, patent filings, and seed funding ecosystems at SNS Institutions.",
    linkedin: "https://linkedin.com"
  }
];

export const SPONSORS: Sponsor[] = [
  {
    id: "s1",
    name: "Apex Cloud Systems",
    tier: "Title",
    logoText: "APEX CLOUD",
    website: "https://example.com",
    description: "Title Sponsor providing ₹1,00,000 Cloud Infrastructure Credits & Direct Hiring."
  },
  {
    id: "s2",
    name: "Nexus AI Platform",
    tier: "Platinum",
    logoText: "NEXUS AI",
    website: "https://example.com",
    description: "Platinum Sponsor powering GenAI track API access."
  },
  {
    id: "s3",
    name: "CyberShield Security",
    tier: "Platinum",
    logoText: "CYBERSHIELD",
    website: "https://example.com",
    description: "Providing security audit licenses and penetration testing tools."
  },
  {
    id: "s4",
    name: "Polygon DevNet",
    tier: "Gold",
    logoText: "POLYGON",
    website: "https://example.com",
    description: "Official Web3 track partner sponsoring gas fees & bounty rewards."
  },
  {
    id: "s5",
    name: "Devfolio Partner",
    tier: "Tech Partner",
    logoText: "DEVFOLIO",
    website: "https://example.com",
    description: "Official Hackathon Platform Partner."
  },
  {
    id: "s6",
    name: "GitHub Education",
    tier: "Tech Partner",
    logoText: "GITHUB",
    website: "https://example.com",
    description: "Providing Student Developer Packs and copilot access."
  },
  {
    id: "s7",
    name: "Red Bull Energy",
    tier: "Community",
    logoText: "RED BULL",
    website: "https://example.com",
    description: "Official Caffeine & Energy Drinks Sponsor for midnight hack."
  },
  {
    id: "s8",
    name: "SNS iHub Incubation",
    tier: "Title",
    logoText: "SNS iHUB",
    website: "https://snsgroups.com",
    description: "Incubation & Seed Grant Partner."
  }
];

export const ORGANIZERS: Person[] = [
  {
    id: "o1",
    name: "Dr. R. Radhakrishnan",
    role: "Chief Patron & Principal",
    organization: "SNS College of Engineering",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
    bio: "Championing technical excellence and experiential learning across SNS College of Engineering."
  },
  {
    id: "o2",
    name: "Prof. K. Venkatesh",
    role: "Convener & Head of CSE",
    organization: "SNS College of Engineering",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "Overall faculty coordinator overseeing track selection, jury onboarding, and logistics."
  },
  {
    id: "o3",
    name: "Aakash V.",
    role: "Student President & Lead Organizer",
    organization: "COREXATHON Student Cell",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    bio: "Final year CSE student leading team management, registrations, and sponsorship outreach."
  },
  {
    id: "o4",
    name: "Meera Krishnan",
    role: "Technical Lead & Developer",
    organization: "COREXATHON Student Cell",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    bio: "3rd year AI & DS student managing track problem statements and judging portal integration."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Who is eligible to participate in COREXATHON '26?",
    answer: "Open to All Engineering and Arts & Science student innovators across recognized institutions in India.",
    points: [
      "Open to B.E / B.Tech students.",
      "Open to Arts and Science students.",
      "Students from any recognized Engineering College or Arts and Science College or university across India can apply."
    ]
  },
  {
    id: "faq2",
    question: "Is there any registration fee to participate?",
    answer: "Yes, registration fee details below:",
    points: [
      "Registration fee is ₹500 per Person.",
      "Complimentary meals, high-speed Wi-Fi & caffeine stations included.",
      "Free overnight stay facilities provided on SNS campus."
    ]
  },
  {
    id: "faq3",
    question: "What is the team size requirement?",
    answer: "Teams must consist of 2 to 4 members.",
    points: [
      "Flexible team size from 2 (Pair) up to 4 members.",
      "Inter-departmental team combinations are permitted.",
      "Cross-college teams with students from different institutions are welcomed."
    ]
  },
  {
    id: "faq4",
    question: "Can I participate virtually or is in-person attendance mandatory?",
    answer: "COREXATHON '26 is an in-person, on-campus hackathon.",
    points: [
      "In-person physical attendance is required at SNS DT Play House, Coimbatore.",
      "Physical presence is mandatory for live demo judging and award distribution.",
      "No remote or virtual participation options are available."
    ]
  },
  {
    id: "faq5",
    question: "What should participants bring with them?",
    answer: "Essential items to carry for the 24-hour hackathon.",
    points: [
      "Valid institutional College ID card (Mandatory).",
      "Personal laptop with chargers.",
      "Toiletries & basic personal supplies for overnight stay.",
      "Microcontrollers, sensors, or hardware components (if applicable)."
    ]
  },
  {
    id: "faq6",
    question: "What support will be provided during the 24 hours?",
    answer: "Full campus hospitality and technical support throughout the event.",
    points: [
      "High-speed optical fiber Wi-Fi & dedicated power sockets.",
      "24/7 technical mentors & domain experts for guidance.",
      "Coffee, snacks & food court meals.",
      "24/7 campus security & medical first-aid support."
    ]
  }
];
