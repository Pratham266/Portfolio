import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  android,
   java ,
 python ,
 cpp ,
 c ,
 githubimg ,
 express ,
  blockchain,
  php,
  grass,
  bvm,
  github,
  ecommerce, 
  fundraiser, 
  googleauth ,
  newsapp ,
  textutils,
  resume,  
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
    link:resume,
  }
];

const services = [
  {
    title: "MERN Stack",
    icon: web,
  },
  {
    title: "Advance JAVA",
    icon: mobile,
  },
  {
    title: "Android",
    icon: backend,
  },
  {
    title: "C++",
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
    name: "git",
    icon: git,
  },
  {
    name: "Blockchain",
    icon: blockchain,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Java",
    icon: java,
  },
  
];
const technologies2 = [
  
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
 
  {
    name: "c",
    icon: c,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Express",
    icon: express,
  }
];

const experiences = [
  {
    title: "ReactJS",
    company_name: "Grass Solution Pvt. Ltd",
    icon: grass,
    iconBg: "#383E56",
    date: "24-05-2022 to 12-06-2022",
    points: [
      "I completed an internship where I gained practical experience working with React, a popular JavaScript library used for building user interfaces",
      "I worked on a diverse range of projects, including creating various types of pages and components that were both functional and visually appealing",
      "I developed a frontend application that fetched data from a server using APIs and displayed it in a user-friendly manner",
    ],
  },
  {
    title: "Central Developer team Member",
    company_name: "BVM College",
    icon: bvm,
    iconBg: "#383E56",
    date: "7-10-2022 to 4-11-2022",
    points: [
      "As a central developer team member at my college, I contributed to various events",
      "I contributed to the success of the Genisis event by developing an e-ticket system that streamlined the check-in process for participants",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "The system provided participants with QR codes that we could scan at the entrance to verify their information and grant them access to the event",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Working with Pratham Barot was an absolute pleasure. They were professional, organized, and always went above and beyond to ensure that my website was exactly what I wanted. Their attention to detail and commitment to excellence is truly impressive, and I would recommend Pratham Barot to anyone looking for a talented and reliable web developer.",
    name: "Deep Brahmbhatt",
    designation: "CEO",
    company: "QumicoExim",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },

];

const projects = [
  {
    name: "FundRaiser Web App",
    description:
      "Developed a fundraiser web app on the Sepolia Ethereum Test Network, which allows users to create and donate to fundraising campaigns using their Metamask wallet IDs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
    ],
    image: fundraiser,
    source_code_link: "https://github.com/Sheel1211/MiniProject-frontend",
  },
  {
    name: "Ecommerce Application",
    description:
      "I developed an e-commerce web application that allows both buyers and sellers to participate in online transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },{
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Pratham266/ecommerce_frontend",
  },
  {
    name: "React News App",
    description:
      "I created a dynamic web application that utilizes News API data to display categorized information, providing users with an organized and user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://github.com/Pratham266/react_news_app",
  },
  {
    name: "Google Auth",
    description:
    "I recently completed a project that integrated Google Authentication into a web application using Passport.js. With this feature, users are able to securely log in to the app using their Google credentials.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "passportjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },{
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: googleauth,
    source_code_link: "https://github.com/Pratham266/GoogleAuth_Frontend",
  },
  {
    name: "Text Util",
    description:
    "This project allows users to edit text with a variety of features, including text formatting, case conversion, and character count. This web application provides a convenient and user-friendly way to manipulate text quickly and easily.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "javascript",
        color: "green-text-gradient",
      },

    ],
    image: textutils,
    source_code_link: "https://github.com/Pratham266/textutil",
  },
  
];

export { services, technologies,technologies2, experiences, testimonials, projects };
