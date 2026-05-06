export type AdnuCourseStatus = "active" | "on-hold";

export type AdnuProgram = {
  id: string;
  name: string;
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
      { id: "bs-accountancy", name: "BS Accountancy", status: "active" },
      {
        id: "bs-ba-accounting-information-management",
        name: "BS BA Accounting Information Management",
        status: "active",
      },
      {
        id: "bs-ba-financial-management-and-accounting",
        name: "BS BA Financial Management and Accounting",
        status: "active",
      },
      {
        id: "bs-entrepreneurship-tourism",
        name: "BS Entrepreneurship with specialized track on Tourism",
        status: "active",
      },
      {
        id: "bs-tourism-management",
        name: "BS Tourism Management",
        status: "active",
      },
      {
        id: "bs-ba-banking-and-finance",
        name: "BS BA Banking and Finance",
        status: "active",
      },
      {
        id: "bs-ba-business-economics",
        name: "BS BA Business Economics",
        status: "on-hold",
      },
      {
        id: "bs-ba-business-engineering",
        name: "BS BA Business Engineering",
        status: "on-hold",
      },
      {
        id: "bs-ba-business-management-honors-program",
        name: "BS BA Business Management Honors Program",
        status: "active",
      },
      {
        id: "bs-ba-hospital-and-health-care-management",
        name: "BS BA Hospital and Health Care Management",
        status: "on-hold",
      },
      {
        id: "bs-ba-legal-management",
        name: "BS BA Legal Management",
        status: "active",
      },
      {
        id: "bs-ba-management",
        name: "BS BA Management",
        status: "active",
      },
      {
        id: "bs-ba-marketing-management",
        name: "BS BA Marketing Management",
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
        status: "active",
      },
      {
        id: "bs-computer-science",
        name: "BS Computer Science",
        status: "active",
      },
      {
        id: "bs-digital-illustration-and-animation",
        name: "BS Digital Illustration and Animation",
        status: "active",
      },
      {
        id: "bs-information-systems",
        name: "BS Information Systems",
        status: "active",
      },
      {
        id: "bs-information-technology",
        name: "BS Information Technology",
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
        status: "active",
      },
      {
        id: "bachelor-of-elementary-education",
        name: "Bachelor of Elementary Education",
        status: "active",
      },
      {
        id: "bachelor-of-physical-education",
        name: "Bachelor of Physical Education",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-english",
        name: "Bachelor of Secondary Education major in English",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-filipino",
        name: "Bachelor of Secondary Education major in Filipino",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-mathematics",
        name: "Bachelor of Secondary Education major in Mathematics",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-science",
        name: "Bachelor of Secondary Education major in Science",
        status: "active",
      },
      {
        id: "bachelor-of-secondary-education-social-studies",
        name: "Bachelor of Secondary Education major in Social Studies",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-early-childhood",
        name: "Bachelor of Special Needs Education with specialization in Early Childhood Education",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-elementary-school-teaching",
        name: "Bachelor of Special Needs Education with specialization in Elementary School Teaching",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-generalist",
        name: "Bachelor of Special Needs Education – Generalist",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-deaf-hard-of-hearing",
        name: "Bachelor of Special Needs Education with specialization in Teaching Deaf and Hard-of-Hearing Learners",
        status: "active",
      },
      {
        id: "bachelor-of-special-needs-education-visual-impairment",
        name: "Bachelor of Special Needs Education with specialization in Teaching Learners with Visual Impairment",
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
        status: "on-hold",
      },
      {
        id: "ab-communication",
        name: "AB Communication",
        status: "active",
      },
      {
        id: "ab-economics",
        name: "AB Economics",
        status: "active",
      },
      {
        id: "ab-english-language-studies",
        name: "AB English Language Studies",
        status: "active",
      },
      {
        id: "ab-journalism",
        name: "AB Journalism",
        status: "on-hold",
      },
      {
        id: "ab-literature",
        name: "AB Literature",
        status: "active",
      },
      {
        id: "ab-philosophy-teaching",
        name: "AB Philosophy Track 1: Teaching",
        status: "on-hold",
      },
      {
        id: "ab-philosophy-pre-law",
        name: "AB Philosophy Track 2: Pre-Law",
        status: "active",
      },
      {
        id: "ab-philosophy-foreign-service-international-relations",
        name: "AB Philosophy Track 3: Foreign Service/International Relations",
        status: "active",
      },
      {
        id: "ab-political-science",
        name: "AB Political Science",
        status: "active",
      },
      {
        id: "ab-religious-and-values-education",
        name: "AB Religious and Values Education",
        status: "active",
      },
      {
        id: "bs-development-communication",
        name: "BS Development Communication",
        status: "active",
      },
      {
        id: "bs-psychology",
        name: "BS Psychology",
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
        status: "active",
      },
      {
        id: "bs-biology",
        name: "BS Biology",
        status: "active",
      },
      {
        id: "bs-civil-engineering",
        name: "BS Civil Engineering",
        status: "active",
      },
      {
        id: "bs-architecture",
        name: "BS Architecture",
        status: "active",
      },
      {
        id: "bs-computer-engineering",
        name: "BS Computer Engineering",
        status: "active",
      },
      {
        id: "bs-electronics-engineering",
        name: "BS Electronics Engineering",
        status: "active",
      },
      {
        id: "bs-environmental-management",
        name: "BS Environmental Management",
        status: "active",
      },
      {
        id: "bs-mathematics",
        name: "BS Mathematics",
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
        status: "active",
      },
    ],
  },
];