import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    h,
    ecsc,
    unicom,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#work",
      title: "Work",
    },
    {
      id: "blog.prajwolgautam.com.np",
      title: "Blog",
    },
    {
      id: "#contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "Photographer",
      icon: mobile,
    },
    
    {
      title: "Content Creator",
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
      name: "Redux Toolkit",
      icon: redux,
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
  ];
  
  const experiences = [
    {
      title: "Web Designer Intern",
      company_name: "Hub It WorkGroup",
      icon: h,
      iconBg: "#383E56",
      date: "Feb 2019 - April 2019",
      points: [
        "Assisted in the development and maintenance of company websites, ensuring optimal performance and usability",
        "Collaborating with senior developers to implement new features and resolve issue, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Wordpress  Developer Intern",
      company_name: "Unicom Portal",
      icon: unicom,
      iconBg: "#E6DEDD",
      date: "2019 - 2020",
      points: [
        "Successfully completed website design projects using page builders like Elementor, WP Bakery",
        "Implemented custom designs using CSS 3.",
        "Implemented plugins and custom modification on Plugins.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ECSC",
      icon: ecsc,
      iconBg: "#383E56",
      date: "Jan 2021 - Jul 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
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
      image: "",
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
      name: "Blog Application",
      description:
        "Web-based platform that allows users to publish Blog and manage using GraphQl, providing a convenient and efficient solution for Blogging needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NextJs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "blog.prajwolgautam56@gmail.com",
    },
    {
      name: "Chat Application",
      description:
        "Realtime Private Chat Application",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "chat.prajwolgautam.com.np",
    },
    {
      name: "Portfolio in React JS",
      description:
        "",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,//carrent
      source_code_link: "prajwolgautam56@gmail.com.np",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };