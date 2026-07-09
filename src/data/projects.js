import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png"
import project3 from "@/assets/project-3.png"
import project4 from "@/assets/project-4.jpg"
import project5 from "@/assets/project-5.png"
import project6 from "@/assets/project-6.png"
import project7 from "@/assets/project-7.png"


export const PROJECTS = [
  {
    title: "Learning Management System",
    tag: "Education",
    img: project1,
    desc: "A complete LMS for students and teachers with attendance tracking, quizzes, assignments, announcements, timetables, and secure authentication.",
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "Express",
      "MUI Charts",
      "Tailwind CSS",
      "Cloudinary",
      "Redux ToolKit",
      "Redis",
      "OAuth",
      "Google Auth",
      "Github Auth",
      "Stripe"
    ],
    demo: "https://mindstack-lms.vercel.app/",
    repo: "https://github.com/Ahmadkhaan08/LMS",
  },

  {
    title: "Doctor Appointment System",
    tag: "Healthcare",
    img: project2,
    desc: "A doctor appointment booking platform where patients can schedule appointments, manage profiles, and doctors can organize schedules through a modern dashboard.",
    stack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Auth",
      "JWT",
    ],
    demo: "https://sehat360-frontend.vercel.app/",
    repo: "https://github.com/Ahmadkhaan08/sehat360",
  },

  {
    title: "E-Commerce Platform",
    tag: "E-Commerce",
    img: project3,
    desc: "A full-stack e-commerce web application featuring product management, shopping cart, secure authentication, order processing, and an admin dashboard.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe",
      "Auth",
      "JWT"
    ],
    demo: "https://babymart-sigma.vercel.app/",
    repo: "https://github.com/Ahmadkhaan08/Mern_Estate",
  },

  {
    title: "E-Commerce Mobile App",
    tag: "Mobile",
    img: project4,
    desc: "A mobile shopping application providing seamless browsing, authentication, cart management, and order tracking with a responsive user experience.",
    stack: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe",
      "Auth",
      "REST API",
    ],
    demo: "https://github.com/Ahmadkhaan08/E-Commerce-App",
    repo: "https://github.com/Ahmadkhaan08/E-Commerce-App",
  },
  

  

  {
    title: "Resort Booking UI",
    tag: "UI/UX",
    img: project6,
    desc: "A modern resort booking interface designed with responsive layouts, elegant user experience, and visually appealing landing pages. Focused purely on frontend design.",
    stack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],
    demo: "https://resort-app-iota.vercel.app/",
    repo: "https://github.com/Ahmadkhaan08/Resort_app",
  },

  {
    title: "Admin Dashboard",
    tag: "Dashboard",
    img: project5,
    desc: "A responsive admin dashboard featuring analytics, charts, user management, authentication, and reusable UI components for modern web applications.",
    stack: [
      "React",
      "Tailwind CSS",
      "MUI Charts",
      "JavaScript",
    ],
    demo: "https://admin-dashboard-taupe-alpha-49.vercel.app/",
    repo: "https://github.com/Ahmadkhaan08/Admin_Dashboard",
  },
  {
    title: "Real Estate App",
    tag: "Web App",
    img: project7,
    desc: "A modern real estate platform that allows users to browse, search, and manage property listings with secure authentication, advanced filtering, and a responsive user experience.",
    stack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Google Auth",
    ],
    demo: "https://khan-estate01.vercel.app/",
    repo: "https://github.com/Ahmadkhaan08/Mern_Estate",
  },
];

export const PROJECT_TAGS = [
  "All",
  "AI",
  "Web App",
  "Education",
  "Healthcare",
  "E-Commerce",
  "Mobile",
  "UI/UX",
  "Dashboard",
];