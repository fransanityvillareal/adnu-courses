export type AdnuCourseStatus = "active" | "on-hold";

export type AdnuProgram = {
  id: string;
  name: string;
  shortName: string;
  status: AdnuCourseStatus;
};

export type AdnuCollege = {
  id: string;
  name: string;
  programs: AdnuProgram[];
};

export const adnuColleges: AdnuCollege[] = [
  {
    id: "college-of-business-and-accountancy",
    name: "College of Business and Accountancy",
    programs: [
      {
        id: "bs-accountancy",
        name: "BS Accountancy",
        shortName: "BSA",
        status: "active",
      },
      {
        id: "bs-ba-accounting-information-management",
        name: "BS BA Accounting Information Management",
        shortName: "BSBA AIM",
        status: "active",
      },
      {
        id: "bs-ba-financial-management-and-accounting",
        name: "BS BA Financial Management and Accounting",
        shortName: "BSBA FMA",
        status: "active",
      },
      {
        id: "bs-entrepreneurship-tourism",
        name: "BS Entrepreneurship with specialized track on Tourism",
        shortName: "BS ENTREP TOURISM",
        status: "active",
      },
      {
        id: "bs-tourism-management",
        name: "BS Tourism Management",
        shortName: "BSTM",
        status: "active",
      },
      {
        id: "bs-ba-banking-and-finance",
        name: "BS BA Banking and Finance",
        shortName: "BSBA BF",
        status: "active",
      },
      {
        id: "bs-ba-business-economics",
        name: "BS BA Business Economics",
        shortName: "BSBA BE",
        status: "on-hold",
      },
      {
        id: "bs-ba-business-engineering",
        name: "BS BA Business Engineering",
        shortName: "BSBA BENG",
        status: "on-hold",
      },
      {
        id: "bs-ba-business-management-honors-program",
        name: "BS BA Business Management Honors Program",
        shortName: "BSBA BMHP",
        status: "active",
      },
      {
        id: "bs-ba-hospital-and-health-care-management",
        name: "BS BA Hospital and Health Care Management",
        shortName: "BSBA HHCM",
        status: "on-hold",
      },
      {
        id: "bs-ba-legal-management",
        name: "BS BA Legal Management",
        shortName: "BSBA LM",
        status: "active",
      },
      {
        id: "bs-ba-management",
        name: "BS BA Management",
        shortName: "BSBA MGT",
        status: "active",
      },
      {
        id: "bs-ba-marketing-management",
        name: "BS BA Marketing Management",
        shortName: "BSBA MM",
        status: "active",
      },
    ],
  },
  {
    id: "college-of-computer-studies",
    name: "College of Computer Studies",
    programs: [
      {
        id: "bachelor-of-library-and-information-science",
        name: "Bachelor of Library and Information Science",
        shortName: "BL IS",
        status: "active",
      },
      {
        id: "bs-computer-science",
        name: "BS Computer Science",
        shortName: "BS CS",
        status: "active",
      },
      {
        id: "bs-digital-illustration-and-animation",
        name: "BS Digital Illustration and Animation",
        shortName: "BS DIA",
        status: "active",
      },
      {
        id: "bs-information-systems",
        name: "BS Information Systems",
        shortName: "BS IS",
        status: "active",
      },
      {
        id: "bs-information-technology",
        name: "BS Information Technology",
        shortName: "BS IT",
        status: "active",
      },
    ],
  },
  {
    id: "college-of-education",
    name: "College of Education",
    programs: [
      {
        id: "bachelor-of-early-childhood-education",
        name: "Bachelor of Early Childhood Education",
        shortName: "BECED",
        status: "active",
      },
      {
        id: "bachelor-of-elementary-education",
        name: "Bachelor of Elementary Education",
        shortName: "BEED",
        status: "active",
      },
      {
        id: "bachelor-of-physical-education",
        name: "Bachelor of Physical Education",
        shortName: "BPED",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-english",
        name: "Bachelor of Secondary Education major in English",
        shortName: "BSED ENG",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-filipino",
        name: "Bachelor of Secondary Education major in Filipino",
        shortName: "BSED FIL",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-mathematics",
        name: "Bachelor of Secondary Education major in Mathematics",
        shortName: "BSED MATH",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-science",
        name: "Bachelor of Secondary Education major in Science",
        shortName: "BSED SCI",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-social-studies",
        name: "Bachelor of Secondary Education major in Social Studies",
        shortName: "BSED SOC STUD",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-early-childhood",
        name: "Bachelor of Special Needs Education with specialization in Early Childhood Education",
        shortName: "BSNED ECE",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-elementary-school-teaching",
        name: "Bachelor of Special Needs Education with specialization in Elementary School Teaching",
        shortName: "BSNED EST",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-generalist",
        name: "Bachelor of Special Needs Education – Generalist",
        shortName: "BSNED GEN",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-deaf-hard-of-hearing",
        name: "Bachelor of Special Needs Education with specialization in Teaching Deaf and Hard-of-Hearing Learners",
        shortName: "BSNED DHH",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-visual-impairment",
        name: "Bachelor of Special Needs Education with specialization in Teaching Learners with Visual Impairment",
        shortName: "BSNED VI",
        status: "active",
      },
    ],
  },
  {
    id: "college-of-humanities-and-social-sciences",
    name: "College of Humanities and Social Sciences",
    programs: [
      {
        id: "ab-broadcasting",
        name: "AB Broadcasting",
        shortName: "AB BCAST",
        status: "on-hold",
      },
      {
        id: "ab-communication",
        name: "AB Communication",
        shortName: "AB COMM",
        status: "active",
      },
      {
        id: "ab-economics",
        name: "AB Economics",
        shortName: "AB ECON",
        status: "active",
      },
      {
        id: "ab-english-language-studies",
        name: "AB English Language Studies",
        shortName: "AB ELS",
        status: "active",
      },
      {
        id: "ab-journalism",
        name: "AB Journalism",
        shortName: "AB JOURN",
        status: "on-hold",
      },
      {
        id: "ab-literature",
        name: "AB Literature",
        shortName: "AB LIT",
        status: "active",
      },
      {
        id: "ab-philosophy-teaching",
        name: "AB Philosophy Track 1: Teaching",
        shortName: "AB PHILO TEACHING",
        status: "on-hold",
      },
      {
        id: "ab-philosophy-pre-law",
        name: "AB Philosophy Track 2: Pre-Law",
        shortName: "AB PHILO PRE LAW",
        status: "active",
      },
      {
        id: "ab-philosophy-foreign-service-international-relations",
        name: "AB Philosophy Track 3: Foreign Service/International Relations",
        shortName: "AB PHILO FSIR",
        status: "active",
      },
      {
        id: "ab-political-science",
        name: "AB Political Science",
        shortName: "AB POL SCI",
        status: "active",
      },
      {
        id: "ab-religious-and-values-education",
        name: "AB Religious and Values Education",
        shortName: "AB RVE",
        status: "active",
      },
      {
        id: "bs-development-communication",
        name: "BS Development Communication",
        shortName: "BS DEV COMM",
        status: "active",
      },
      {
        id: "bs-psychology",
        name: "BS Psychology",
        shortName: "BS PSYCH",
        status: "active",
      },
    ],
  },
  {
    id: "college-of-science-and-engineering",
    name: "College of Science and Engineering",
    programs: [
      {
        id: "bachelor-of-engineering-technology-computer-engineering-technology",
        name: "Bachelor of Engineering Technology major in Computer Engineering Technology",
        shortName: "BET CPET",
        status: "active",
      },
      {
        id: "bs-biology",
        name: "BS Biology",
        shortName: "BS BIO",
        status: "active",
      },
      {
        id: "bs-civil-engineering",
        name: "BS Civil Engineering",
        shortName: "BS CE",
        status: "active",
      },
      {
        id: "bs-architecture",
        name: "BS Architecture",
        shortName: "BS ARCH",
        status: "active",
      },
      {
        id: "bs-computer-engineering",
        name: "BS Computer Engineering",
        shortName: "BS CPE",
        status: "active",
      },
      {
        id: "bs-electronics-engineering",
        name: "BS Electronics Engineering",
        shortName: "BS ECE",
        status: "active",
      },
      {
        id: "bs-environmental-management",
        name: "BS Environmental Management",
        shortName: "BS EM",
        status: "active",
      },
      {
        id: "bs-mathematics",
        name: "BS Mathematics",
        shortName: "BS MATH",
        status: "active",
      },
    ],
  },
  {
    id: "college-of-nursing",
    name: "College of Nursing",
    programs: [
      {
        id: "bs-nursing",
        name: "BS Nursing",
        shortName: "BSN",
        status: "active",
      },
    ],
  },
];