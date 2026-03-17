// ============================================================
//  📁 data.js — YOUR PORTFOLIO CONTENT
//  Edit this file to update your portfolio.
//  No need to touch any component files!
// ============================================================

export const personal = {
  name: "Dil Mahmud Khan",
  title: "SOC Analyst & Cybersecurity",
  email: "dilmahmudkhan@gmail.com",
  phone: "+90 553 873 02 77",
  location: "Istanbul, Turkey",
  linkedin: "https://linkedin.com/in/dil-mahmud-khan-71b4191a0",
  linkedinHandle: "dil-mahmud-khan-71b4191a0",
  github: "https://github.com/Dil-Mahmud-Khan",
  githubHandle: "Dil-Mahmud-Khan",
  languages: "English (B2)",
  status: "Open to Opportunities",
  // Hero section
  heroEyebrow: "Cybersecurity & Blue Team",
  heroTitle: ["Dil Mahmud", "Khan"],         // Two lines for large display
  heroAccentWord: "Khan",                    // Which word gets the cyan accent
  heroDesc: "Cybersecurity master's student focused on SOC operations, threat detection, and blue team defence. Hands-on experience with SIEM alert triage, log analysis, and MITRE ATT&CK mapping - backed by a solid foundation in software engineering and secure system design.",
  // Stat cards below hero
  stats: [
    { num: "MSc", label: "Erasmus Mundus" },
    { num: "SOC", label: "Blue Team" },
    { num: "2+", label: "Years Dev" },
    { num: "75+", label: "Project Built" },

  ],
  // CTA buttons
  resumeUrl: "#contact",      // change to your actual resume PDF url
  // About section paragraphs (each string = one <p>)
  aboutParagraphs: [
  "I'm a cybersecurity specialist currently pursuing an Erasmus Mundus Joint Master's in Applied Cyber Security (CyberMacs) at Kadir Has University & SRH Berlin - one of Europe's most competitive scholarship programmes. My core focus is SOC (Security Operations Center) work: threat detection, alert triage, log analysis, and incident response.",
  "What sets me apart is my software engineering background. Having built fintech platforms, banking systems, and enterprise backends in Java and Spring Boot, I understand how systems are constructed - which means I understand exactly how they can be attacked and how to defend them.",
  "I practice continuously through TryHackMe SOC labs, where I map security alerts to MITRE ATT&CK techniques and sharpen my Splunk SIEM skills. I hold a Salesforce Certified Administrator credential and am actively pursuing CompTIA Security+ and CCNA."
  ],
  // Terminal widget lines in About
  terminalLines: [
    { prompt: "dil@soc-lab", cmd: "whoami", out: "Dil Mahmud Khan — CyberMacs MSc · Blue Team" },
    { prompt: "dil@soc-lab", cmd: "cat current_focus.txt", out: "SOC Operations · SIEM · Threat Detection · Incident Response" },
    { prompt: "dil@soc-lab", cmd: "echo $STATUS", out: "Open to SOC Analyst & Blue Team roles" },
  ],
};

// ── SKILLS ─────────────────────────────────────────────────
// Each group has a title and a list of skills.
// Set highlight: true to make a skill cyan/prominent.
export const skillGroups = [
  {
    title: " SOC & Blue Team Operations",
    skills: [
      { name: "Security Monitoring", highlight: true },
      { name: "Alert Triage", highlight: true },
      { name: "Threat Detection", highlight: true },
      { name: "Log Analysis", highlight: true },
      { name: "Incident Response", highlight: true },
      { name: "IOC Identification" },
      { name: "Event Investigation" },
      { name: "Risk Assessment" },
      { name: "Threat Intelligence" },
    ],
  },
  {
    title: " Security Tools & Frameworks",
    skills: [
      { name: "Splunk (SIEM)", highlight: true },
      { name: "MITRE ATT&CK", highlight: true },
      { name: "TryHackMe", highlight: true },
      { name: "IDS / IPS" },
      { name: "EDR" },
      { name: "SOAR" },
      { name: "Firewalls / Access Control" },
      { name: "ISMS" },
      { name: "Vulnerability Assessment" },
      { name: "Penetration Testing" },
    ],
  },
  {
    title: " Networking & Systems",
    skills: [
      { name: "TCP/IP", highlight: true },
      { name: "Linux Security", highlight: true },
      { name: "DNS" },
      { name: "HTTP / HTTPS" },
      { name: "Endpoint Security" },
      { name: "Cryptography" },
      { name: "Docker" },
      { name: "GitHub" },
      { name: "Linux CLI" },
    ],
  },
  {
    title: " Software Engineering (Background)",
    skills: [
      { name: "Java", highlight: true },
      { name: "Spring Boot", highlight: true },
      { name: "Spring Security / JWT" },
      { name: "Salesforce / Apex" },
      { name: "React.js" },
      { name: "MySQL · PostgreSQL" },
      { name: "RESTful API" },
      { name: "Microservices" },
      { name: "JPA / Hibernate" },
    ],
  },
];

// ── EXPERIENCE ─────────────────────────────────────────────
export const experiences = [
  {
    role: "Software Developer",
    company: "Incepta Solutions",
    location: "Ontario, Canada",
    period: "04/2024 – 08/2024",
    desc: "Automated Salesforce processes and workflows, improving efficiency, data management, and security at enterprise scale.",
    bullets: [
      "Automated processes and workflows using Salesforce admin tools to improve operational efficiency.",
      "Developed custom plugins and configurations extending Salesforce functionalities for tailored business needs.",
      "Implemented secure API integrations, authentication, access control, and audit logging.",
      "Deepened expertise in Apex, Lightning Web Components (LWC), Flow, and Salesforce architecture.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Project2Morrow Software Limited",
    location: "Dhaka, Bangladesh",
    period: "06/2023 – 04/2024",
    desc: "Contributed to fintech and large-scale enterprise applications using Java and Spring Boot, focusing on scalability and system reliability.",
    bullets: [
      "Wrote clean, efficient Java Spring Boot code according to specifications and design patterns.",
      "Applied secure coding principles — input validation, error handling — across all backend services.",
      "Conducted thorough testing and participated in code reviews to maintain quality standards.",
      "Monitored and debugged systems to improve reliability and maintain a secured dev environment.",
    ],
  },
];

// ── PROJECTS ───────────────────────────────────────────────
export const projects = [
  {
    icon: "🔍",
    category: "Cybersecurity · SOC",
    title: "SOC Detection Lab",
    desc: "Hands-on SOC simulation via TryHackMe. Performed alert triage and log analysis, then mapped findings to MITRE ATT&CK techniques in a simulated SIEM environment to support incident investigation reporting.",
    tags: ["Splunk SIEM", "MITRE ATT&CK", "Alert Triage", "Log Analysis"],
    url: "",  // add a github link if you want
  },
  {
    icon: "🏦",
    category: "Fintech · Enterprise",
    title: "Bulk Pro — Banking Platform",
    desc: "Secure enterprise banking platform with LDAP authentication for Active Directory login. Enabled bulk data uploads via CSV/Excel with advanced validation, deduplication, and authoriser dashboards.",
    tags: ["Java", "Spring Boot", "React.js", "LDAP", "MySQL", "OracleDB"],
    url: "",
  },
  {
    icon: "📋",
    category: "EdTech · Enterprise",
    title: "Master Control — Exam Portal",
    desc: "Full-featured Learning and Assessment Portal with exam monitoring. Built the Exam Service from scratch — question bank, bulk Excel import/export, and concurrent candidate handling.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JPA / Hibernate"],
    url: "",
  },
  {
    icon: "💼",
    category: "HR Tech · Platform",
    title: "LAP — Job Application Platform",
    desc: "Enterprise job application and learning platform with Spring Boot, Spring Security (JWT), and React.js. Advanced candidate filtering, quiz-based progress tracking, and admin controls.",
    tags: ["Spring Boot", "JWT", "React.js", "Spring Security"],
    url: "",
  },
  {
    icon: "🪪",
    category: "GovTech · Identity",
    title: "E-KYC Verification",
    desc: "Identity verification solution that scans ID cards, matches data against national records, and processes results for government software — ensuring accuracy, security, and regulatory compliance.",
    tags: ["Java", "Spring Boot", "OCR", "REST API"],
    url: "",
  },
  {
    icon: "☁️",
    category: "CRM · Automation",
    title: "Salesforce Automation Suite",
    desc: "Custom Salesforce automation — process workflows, Apex plugins, LWC components, and secure API integrations. Optimised enterprise data management for Canadian business clients.",
    tags: ["Salesforce", "Apex", "LWC", "Flow", "REST API"],
    url: "",
  },
];

// ── EDUCATION ──────────────────────────────────────────────
export const education = [
  {
    degree: "Erasmus Mundus Joint Masters in Applied Cyber Security — CyberMacs",
    school: "Kadir Has University & SRH Berlin University of Applied Sciences",
    period: "09/2025 – Present",
    current: true,
    badge: "Erasmus Mundus Scholar",
    courses: "Cybersecurity Basics · Computer Networks and Security · Cryptography · System Exploitation and Penetration Testing · Security Technologies (IDS/IPS, Firewalls, Access Control) · Information Security Management Systems (ISMS) · Threat Intelligence",
  },
  {
    degree: "Masters in Applied Sciences and Engineering: Computer Science",
    school: "Vrije Universiteit Brussel — Brussels, Belgium",
    period: "09/2024 – 09/2025",
    current: false,
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    school: "American International University – Bangladesh",
    period: "01/2020 – 02/2024",
    current: false,
  },
];

// ── CERTIFICATIONS ─────────────────────────────────────────
// status options: "active" | "progress" | "award" | "certificate"
export const certifications = [
  { icon: "🛡️", name: "TryHackMe SOC Level 1", org: "TryHackMe", status: "active" },
  { icon: "🛡️", name: "TryHackMe Junior Penetration Tester", org: "TryHackMe", status: "active" },
  { icon: "☁️", name: "Salesforce Certified Administrator", org: "Salesforce Inc · June 2024", status: "active" },
  { icon: "🔐", name: "CompTIA Security+", org: "CompTIA", status: "progress" },
  { icon: "🌐", name: "CCNA", org: "Cisco", status: "progress" },
  { icon: "🏆", name: "Student of the Year — Outstanding Talent", org: "Education Board Bangladesh · 2016", status: "award" },
  { icon: "📜", name: "National Skill Standard Basic Course", org: "Bangladesh Technical Education Board · 2017", status: "certificate" },
  { icon: "🧮", name: "Regional Math Olympiad", org: "Boson Biggan Sangha · 2015", status: "award" },
  { icon: "🔬", name: "Boson Science Olympiad", org: "Boson Biggan Sangha · 2014", status: "award" },
  { icon: "🧠", name: "Boson General Knowledge Olympiad", org: "Boson Biggan Sangha · 2014", status: "award" },
];

// ── LEADERSHIP & ACTIVITIES ────────────────────────────────
export const activities = [
  {
    icon: "🦊",
    org: "Firefox @ AIUB",
    role: "Executive & Diversity Lead",
    url: "https://aiubcc.org/firefox-at-aiub/",
    urlLabel: "aiubcc.org/firefox-at-aiub",
    bullets: [
      "Led Firefox @ AIUB's tech empowerment initiative for juniors, blending academic enhancement with personal growth.",
      "Cultivated a tech-driven environment for student development and success.",
      "Hosted events to promote technological diversity and inclusivity among students.",
      "Built a student community to engage and evolve with technology, valuing diverse perspectives.",
    ],
  },
  {
    icon: "🎮",
    org: "AIUB Cyber Gaming Fest 2022",
    role: "Management Volunteer",
    url: "https://cgf.aiubcc.org/",
    urlLabel: "cgf.aiubcc.org",
    bullets: [
      "Volunteered in managing the AIUB Cyber Gaming Fest 2022, connecting students across institutions.",
      "Partnered with leading tech firms, enhancing the event's influence and scope across the tech community.",
    ],
  },
  {
    icon: "💻",
    org: "AIUB Computer Club",
    role: "Research & Development Member",
    url: "https://aiubcc.org/",
    urlLabel: "aiubcc.org",
    bullets: [
      "Engaged closely with the community, particularly seniors, benefiting from guidance and the collaborative atmosphere.",
      "Acquired invaluable technical skills and industry confidence through research and development activities.",
    ],
  },
  {
    icon: "📷",
    org: "AIUB Photography Club",
    role: "Content Writer & Event Volunteer",
    url: "",
    urlLabel: "",
    bullets: [
      "Honed documentation and presentation abilities through club activities and projects.",
      "Learned the significance of collaboration and adaptability through team experiences.",
    ],
  },
];
