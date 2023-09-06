import {
    backend,
    frontend,
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
    springboot,
    docker,
    meta,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    facebook,
    instagram,
    github1,
  linkedin,
  prestige,
  edidact,
  afia,
  yellowpage,
  training,
  makeup
    
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
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
    /*{
      name: "TypeScript",
      icon: typescript,
    },*/
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
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
    },
    /*{
      name: "springboot",
      icon: springboot,
    }*/
    /*{
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Prestige Formation & Consulting",
      icon: prestige,
      iconBg: "rgb(15, 2, 25)",
      date: "Jun 2023 - Sep 2023",
      points: [
        "Developing web application of an HR audit application aimed at measure and evaluate the company's compliance with regulations and internal human resource policies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "MERN Stack, Figma, Trello, Postman, VisualStudio"
      ],
    },
    {
      title: "Web Developer",
      company_name: "Edidact",
      icon: edidact,
      iconBg: "rgb(15, 2, 25)",
      date: "Jun 2022 - Sep 2022",
      points: [
        "Participation in the web development of the Edidact platform. Edidact, the learning platform that allows children aged 4 to 15 years to review all subjects taught at the Swiss Romand School in a fun, autonomous and motivating way for better results.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
        "Laravel, PHP, Bootstrap, MySQL"
      
      ],
    },
    {
      title: "Backend Developer",
      company_name: "AfiaTech",
      icon: afia,
      iconBg: "rgb(15, 2, 25)",
      date: "Feb 2021 - Jun 2021",
      points: [
        "Development of a web-based dental office application to facilitate the connection between the doctor and his staff and to help minimize the efforts of the doctor, staff and patients by reducing the time.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "SpringBoot, Java, API REST, Angular JS"
      ],
    },
  ];
  
  const projects = [
    {

      name: "Yellow Page",
      description:
        "Web-based platform that allows users to search and find local businesses and services quickly and efficiently.",
      tags: [
        {
          name: "nodejs",
          color: "violet-text-gradient",
        },
        {
          name: "expressjs",
          color: "pink-text-gradient",
        },
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        
      ],
      image: yellowpage,
      source_code_link: "https://github.com/hadil-kortas/yellow_page",
    },
    {
      name: "Training Center",
      description:
        "Web application  designed to streamline the process of managing training programs, trainers, and student registrations.",
      tags: [
        {
          name: "php",
          color: "violet-text-gradient",
        },
        {
          name: "symfony5",
          color: "pink-text-gradient",
        },
        {
          name: "twig",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
      ],
      image: training,
      source_code_link: "https://github.com/hadil-kortas/Gestion-des-formations",
    },
    {
      name: "Beauty Lover",
      description:
        "A mobile application based on Android for efficiently organizing and managing your makeup products and beauty essentials.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "green-text-gradient",
        },
      ],
      image: makeup,
      source_code_link: "https://github.com/hadil-kortas/Makeup-Storage",
    },
  ];

  const contacts = [
    
    {
      name: "linkedin",
      image: linkedin,
      source_link:"https://www.linkedin.com/in/kortas-hadil-a87834210/"
    },
    {
      name: "github",
      image: github1,
      source_link:"https://github.com/hadil-kortas"
    },
    {
      name: "facebook",
      image: facebook,
      source_link:"https://www.facebook.com/hadoula.kortas.3/"
    },
    {
      name: "instagram",
      image: instagram,
      source_link:"https://www.instagram.com/hadil.kortas/"
    }



    




  ]
  
  export { services, technologies, experiences, projects, contacts };