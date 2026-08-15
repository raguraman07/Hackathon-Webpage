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
  dates: "September 2 - 3, 2026",
  duration: "24 Hours Non-Stop",
  targetDate: "2026-09-02T10:00:00+05:30",
  venue: "SNS Tech Campus Cloud Lab",
  address: "SNS Tech Campus, Sathy Main Road, Kurumbapalayam, Coimbatore, Tamil Nadu 641107",
  prizePool: "🏆 Attractive Cash Prizes for Winners! 🎁",
  minTeamSize: 2,
  maxTeamSize: 4,
  contactEmail: "corexathon@gmail.com",
  contactPhone: "+91 8838081160",
  collegeName: "SNS College of Engineering",
  department: "Department of Computer Science & Engineering",
  departmentShort: "Department of CSE",
  accreditation: "Autonomous Institution | NAAC 'A' Grade | NBA Accredited",
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfKwirKNQyOwT2_saMBKmDcR_OsQGa0PCdOalWgBpNKfuOb3A/viewform?usp=dialog",
  googleMapsUrl: "https://maps.app.goo.gl/mLV9ieNTtxh6WZJt5",
};

export const TIMELINE: TimelineEvent[] = [
  {
    step: 1,
    date: "August 15, 2026",
    time: "6:00 PM",
    title: "Registrations Open",
    description: "Online team registration opens across India. Form your 2-4 member team and submit your registration details.",
    status: "completed"
  },
  {
    step: 2,
    date: "August 29, 2026",
    time: "11:59 PM",
    title: "Registrations Close",
    description: "Deadline to register teams via official Google Form.",
    status: "current",
    highlight: true
  },
  {
    step: 3,
    date: "September 2, 2026",
    time: "09:00 AM",
    title: "Check-in & Environment Setup",
    description: "Participants arrive at SNS Tech Campus Cloud Lab, collect badge kits, configure environments, and settle into hack stations.",
    status: "upcoming"
  },
  {
    step: 4,
    date: "September 2, 2026",
    time: "09:30 AM",
    title: "Inauguration & Problem Statement Release",
    description: "Welcome address, hackathon rules briefing, and official problem statements unveiled offline at the venue.",
    status: "upcoming"
  },
  {
    step: 5,
    date: "September 2, 2026",
    time: "10:00 AM",
    title: "24-Hour Coding Sprint Begins!",
    description: "Timer starts! Teams begin coding, building, and prototyping uninterrupted.",
    status: "upcoming",
    highlight: true
  },
  {
    step: 6,
    date: "September 2, 2026",
    time: "03:00 PM",
    title: "Mentorship Round 1",
    description: "Industry mentors review team architecture, data pipelines, and offer feedback.",
    status: "upcoming"
  },
  {
    step: 7,
    date: "September 2, 2026",
    time: "11:00 PM",
    title: "Midnight Tech & Debugging Session",
    description: "Technical helpdesk support, live code reviews, and overnight coding acceleration.",
    status: "upcoming"
  },
  {
    step: 8,
    date: "September 3, 2026",
    time: "08:00 AM",
    title: "Mentorship Round 2 (Code Review)",
    description: "Technical mentors conduct deep code review and UI sanity checks.",
    status: "upcoming"
  },
  {
    step: 9,
    date: "September 3, 2026",
    time: "10:00 AM",
    title: "Sprint End & GitHub Freeze",
    description: "Codinging officially stops. Code repository URLs Should be submitted in the portal.",
    status: "upcoming"
  },
  {
    step: 10,
    date: "September 3, 2026",
    time: "10:30 AM",
    title: "Grand Jury Evaluation & Demos",
    description: "Shortlisted teams pitch live in front of the judge panel at SNS Central Auditorium.",
    status: "upcoming"
  },
  {
    step: 11,
    date: "September 3, 2026",
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
    amount: "Attractive Cash Prize",
    badge: "Overall Winner",
    color: "#FFD400",
    highlight: true,
    perks: [
      "Official COREXATHON Champion Trophy",
      "Direct Entry to SNS iHub Incubation & Seed Support",
      "Direct Interview Calls with Title Sponsor Tech Team",
      "Premium Cloud Credits (AWS/GCP)",
      "Swag Kit & Lifetime Alumni Badge"
    ]
  },
  {
    title: "First Runner-Up",
    rank: "2nd Place Overall",
    amount: "Attractive Cash Prize",
    badge: "Runner Up",
    color: "#E2E8F0",
    perks: [
      "First Runner-Up Trophy & Medals",
      "Fast-track Internship Interviews",
      "Cloud Credits & Dev Tools",
      "Premium Swag Box & Mentorship Vouchers"
    ]
  },
  {
    title: "Second Runner-Up",
    rank: "3rd Place Overall",
    amount: "Attractive Cash Prize",
    badge: "2nd Runner Up",
    color: "#CD7F32",
    perks: [
      "Second Runner-Up Trophy & Medals",
      "Internship Opportunity Review",
      "Cloud Credits & Perks",
      "Special Tech Gadget Hampers"
    ]
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    id: "s1",
    day: "day1",
    time: "08:30 AM - 09:15 AM",
    title: "Participant Check-In & Setup",
    location: "SNS Tech Campus Cloud Lab Lobby",
    description: "Welcome kit distribution, badge scanning, network configuration, and dev setup."
  },
  {
    id: "s2",
    day: "day1",
    time: "09:15 AM - 10:00 AM",
    title: "Grand Inauguration & Keynote",
    location: "SNS Tech Campus Cloud Lab",
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
    title: "Tech Briefing & Cloud Infrastructure Sync",
    location: "SNS Tech Campus Cloud Lab",
    description: "Technical briefing on cloud resources, APIs, database setup, and deployment pipelines."
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
    title: "Tech Showcase & Sponsor Connect",
    location: "SNS Tech Campus Cloud Lab Lobby",
    description: "Sponsor tech stack demonstrations, API walkthroughs, and developer networking."
  },
  {
    id: "s7",
    day: "day1",
    time: "08:30 PM - 09:30 PM",
    title: "Mid-Sprint Architecture & Code Sync",
    location: "SNS Tech Campus Cloud Lab",
    description: "System architecture sanity check, git repository sync, and peer technical discussions."
  },
  {
    id: "s8",
    day: "day1",
    time: "11:00 PM - 12:30 AM",
    title: "Midnight Debug & Rapid Troubleshooting",
    location: "SNS Tech Campus Cloud Lab",
    description: "Dedicated technical helpdesk support, live issue troubleshooting, and code optimization."
  },
  {
    id: "s9",
    day: "day2",
    time: "01:00 AM - 04:00 AM",
    title: "Overnight Coding Accelerator",
    location: "SNS Tech Campus Cloud Lab",
    description: "Deep focus hour. Technical support desk remains active."
  },
  {
    id: "s10",
    day: "day2",
    time: "04:00 AM - 05:30 AM",
    title: "Mentorship Session 2: Code & Feature Freeze Check",
    location: "SNS Tech Campus Cloud Lab",
    description: "Mentors inspect core feature completeness and UX readiness."
  },
  {
    id: "s11",
    day: "day2",
    time: "08:30 AM - 09:30 AM",
    title: "Pitch Deck & Live Demo System Prep",
    location: "SNS Tech Campus Cloud Lab Lobby",
    description: "Final slide deck preparation, live video output checks, and staging environment verification."
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
    location: "Presentation At Cloud Lab",
    description: "Shortlisted teams present 5-minute live demo + 3-minute Q&A to judge panel."
  },
  {
    id: "s14",
    day: "day2",
    time: "12:00 PM - 01:30 PM",
    title: "Grand Award Ceremony & Valedictory",
    location: "SNS Tech Campus Cloud Lab",
    description: "Winner announcements, cash prize handover, trophy distribution, and vote of thanks."
  }
];

export const RULES: RuleCategory[] = [
  {
    category: "Eligibility & Team Formation",
    items: [
      {
        title: "Student Status",
        detail: "Open exclusively to current undergraduate engineering students pursuing B.E / B.Tech from any recognized institution."
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



export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Who is eligible to participate in COREXATHON '26?",
    answer: "Open exclusively to undergraduate B.E / B.Tech engineering student innovators across recognized institutions in India.",
    points: [
      "Exclusively open to current B.E / B.Tech undergraduate engineering students.",
      "Students from any recognized Engineering College or Institute across India can apply.",
      "Valid institutional Engineering College ID card is required during physical check-in."
    ]
  },
  {
    id: "faq2",
    question: "Is there any registration fee to participate?",
    answer: "Yes, registration fee details below:",
    points: [
      "Registration fee is ₹500 per Person.",
      "High-speed optical fiber Wi-Fi & dedicated cloud developer resources included.",
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
      "In-person physical attendance is required at SNS Tech Campus Cloud Lab, Coimbatore.",
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
    answer: "Full technical support and infrastructure throughout the event.",
    points: [
      "High-speed optical fiber Wi-Fi & dedicated power sockets.",
      "24/7 technical mentors & domain experts for guidance.",
      "24/7 high-speed connectivity & dedicated power stations.",
      "24/7 campus security & medical first-aid support."
    ]
  }
];
