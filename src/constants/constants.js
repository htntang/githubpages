import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
  ];
  
  const services = [
    {
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Marketing Strategy",
      icon: mobile,
    },
    {
      title: "Content Creation",
      icon: creator,
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
      name: "MongoDB",
      icon: mongodb,
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
    }
  ];
  
  const education = [
    {
      degree:"Full Stack Development Program",
      school:"InceptionU",
      icon:"",
      iconBg:"#383E56",
      date:"February 2023 - July 2023",
      city:"Calgary, AB, Canada"
    },
    {
      degree:"Bachelor of Arts (B.A.) - Religious Studies & Politics",
      school:"University of Manitoba",
      icon:"",
      iconBg:"#383E56",
      date: "September 2017 - April 2021",
      city: "Winnipeg, MB, Canada"
    },
    {
      degree: "Bachelor of Arts (B.A.) - Exchange Program",
      school:"Linköpings universitet",
      icon:"",
      iconBg: "#383E56",
      date:"January 2019 - August 2019",
      city:"Linköping, Östergötland, Sweden"
    }
  ]

  const volunteering = [
    {
      org:"Women's Heath Clinic",
      title:"Reproductive Health Counsellor",
      city:"Winnipeg, MB, Canada"
    },
    {
      org:"Manitoba Museum of Man and Nature",
      title:"Interpreter / Guide",
      city: "Winnipeg, MB, Canada"
    },
    {
      org: "Friends of Medicins Sans Frontier / Doctors Without Borders - University of Manitoba Chapter",
      title: "Vice President - Events",
      city: "Winnipeg, MB, Canada"
    },
    {
      org: "Look Good Feel Better (LGFB)",
      title: "Volunteer",
      city:"Winnipeg, MB, Canada"
    },
    {
      org: "Habitat For Humanity",
      title: "Volunteer",
      city:"Winnipeg, MB, Canada"
    }
  ]
  
  const experiences = [
    {
      title: "Marketing Strategist & Social Media Manager",
      company_name: "Scentrique",
      icon: "",
      iconBg: "#383E56",
      city:"Vancouver, BC, Canada",
      date: "July 2022 - June 2023",
      points: [
        "Pioneered overall marketing strategy (positioning and messaging) and developed key marketing initiatives, user acquisitions, conversions, and retention price-to-product launches.",
        "Grew social media presence on Instagram by 180% (from 4000 to 9000); and on TikTok (from 0 to 2000).",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "StriveOpp",
      description:
        "Worked in a team to create a full-stack web application that serves as a database for scholarships, bursaries, and funding opportunities for both domestic and international post-secondary students; and a platform to match mentors to student mentees via AI-powered sorting system.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
    {
      name: "TEC-YYC Coalition",
      description:
        "Collaborated in a team as a web developer to create a WordPress website that acts as a database of educational and career resources for Albertans who wish to pivot their careers into the tech industry.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
    {
      name: "Every Child Plays",
      description:
        "Worked in a team to create a web-based application that acts as a directory to catalogue, search, and filter through the playgrounds of Calgary by its accessible features to allow parents and/or guardians of neuro-diverse children of all physical abilities to find a place to play according to their needs.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
    {
      name: "Etymolo-Tree",
      description:
        "An etymology rolodex that tracks linguistic family trees and the development of language and meaning of words through cultural change, time, and political upheaval.",
      tags: [
        {
          name: "api",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, education, volunteering, experiences, testimonials, projects };