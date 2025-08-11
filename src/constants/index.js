import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  gssoc,
  ibm,
  finly,
  autoai,
  pixelle,
  threejs,
  fullstack,
  devops,
  ai,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
    {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: fullstack,
  },
  {
    title: "Proficient in Java",
    icon: java,
  },
  {
    title: "DevOps Enthusiast",
    icon: devops,
  },
  {
    title: "Generative AI Explorer",
    icon: ai,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
{
  title: "Contributor",
  company_name: "GirlScript Summer of Code",
  icon: gssoc,
  iconBg: "#f2f0ef",
  date: "July 2025 - Present",
  points: [
    "Getting started with open-source contributions."
  ]
},
{
  title: "AI and Cloud Technologies Internship",
  company_name: "IBM SkillsBuild & Edunet Foundation",
  icon: ibm,
  iconBg: "#f2f0ef",
  date: "July 2025 - August 2025",
  points: [
    " Developed and deployed multiple machine learning models using IBM AutoAI, including a crop recommendation system for precision agriculture and a predictive maintenance classifier that analyzes real-time industrial machinery sensor data to identify early failure types, achieving a top F1-score of 0.978.",
    "Built and integrated an AI-powered chatbot for college admissions course selection, leveraging Python, Twilio API, and WhatsApp to automate and personalize student engagement across digital platforms"
  ]
},
];

const projects = [
  {
    name: "Pixelle -- E-Commerce Website",
    description:
      "Pixelle is a custom phone case brand that transforms your favorite memories into sleek, personalized phone covers. Designed for modern minimalists, Pixelle blends style, sentiment, and protection—letting your phone case reflect who you are, one pixel at a time.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: pixelle,
    source_code_link: "https://github.com/asarkar2210/pixelle-v4",
  },
  {
    name: "Predictive Maintenance of Industrial Machinery",
    description:
      "A predictive maintenance model built with IBM Watson Studio's AutoAI to anticipate industrial machine failures before they happen. Uses a Snap Decision Tree Classifier to predict failure types from sensor data.",
    tags: [
      {
        name: "Machine Learing",
        color: "blue-text-gradient",
      },
      {
        name: "IBM Cloud",
        color: "pink-text-gradient",
      },
    ],
    image: autoai,
    source_code_link: "https://github.com/asarkar2210/simple-calculator-webapp",
  },
  {
    name: "Finly - Finance Management Web App",
    description:
      "Finly is a sleek, modern web application designed to help individuals take control of their personal finances.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: finly,
    source_code_link: "https://github.com/asarkar2210/finly-finance-webapp",
  },
];

export { services, technologies, experiences, projects };
