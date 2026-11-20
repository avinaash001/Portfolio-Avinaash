import deosoft from "../images/deosoft_logo.png";
import jharkhand from "../images/Jharkhand.png";
import api from "../images/api.png";
import gradCap from "../images/graduation-cap.svg";
import chatgptIcon from "../images/chatgpt.svg";
import geminiIcon from "../images/gemini.svg";
import claudeIcon from "../images/claude.svg";
import antigravityIcon from "../images/antigravity.svg";
import netlifyIcon from "../images/netlify.svg";

export const Bio = {
  name: "Avinash Tiwari",
  roles: [
    ".NET Full-Stack Developer",
    "ASP.NET & React Developer",
    "Web API Developer",
  ],
  description:
    "I build scalable web applications using C#, ASP.NET, Web API and React. Currently working as an Assistant Software Engineer at the Govt. of Jharkhand, building the Birsa Kisan Integrated Portal.",
  github: "https://github.com/avinaash001",
  resume: "/",
  linkedin: "https://in.linkedin.com/in/avinash-tiwari-979060236",
  email: "avinaash001@gmail.com",
  phone: "+919934149091",
  whatsapp: "https://wa.me/919934149091",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Bootstrap",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "C# .NET",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
      {
        name: ".NET Core / .NET MVC",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "ASP.NET",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
      },
      {
        name: "Entity Framework",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg",
      },
      {
        name: "Web API",
        image: api,
      },
      {
        name: "MS SQL Server",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      },
      {
        name: "MySQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "AI Tools",
    subtitle: "AI-assisted development for faster, cleaner code.",
    skills: [
      {
        name: "ChatGPT",
        image: chatgptIcon,
      },
      {
        name: "Google Gemini",
        image: geminiIcon,
      },
      {
        name: "Claude",
        image: claudeIcon,
      },
      {
        name: "Google Antigravity",
        image: antigravityIcon,
      },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Visual Studio",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      },
      {
        name: "Postman",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Swagger",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
      },
      {
        name: "Selenium Automation",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
      },
      {
        name: "WordPress",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      },
      {
        name: "Vercel",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Netlify",
        image: netlifyIcon,
      },
      {
        name: "Figma",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: deosoft,
    role: "Backend Developer",
    company: "DeoSoft IT Services Pvt. Ltd.",
    date: "Jan 2023 - Feb 2025",
    desc: "Contributed to the design, development, and maintenance of scalable web applications with a strong focus on backend development using C# and ASP.NET. Built and optimized RESTful APIs, integrated databases with MS SQL Server and MySQL, and implemented automation to streamline business processes. Collaborated with cross-functional teams to deliver projects in domains such as finance, logistics, and e-commerce. Gained hands-on experience in front-end technologies and testing frameworks while ensuring clean, efficient, and maintainable code.",
    skills: [
      "C# .Net",
      "ASP .Net",
      "MS SQL Server",
      "MySQL",
      "HTML5",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Wordpress",
      "React Js",
      "Selenium Automation",
      "Web API",
    ],
  },
  {
    id: 1,
    img: jharkhand,
    role: "Assistant Software Engineer",
    company: "Agriculture, Animal Husbandry and Co-Operative Dept., Govt. of Jharkhand",
    date: "Mar 2025 - Present",
    desc: "Contributing to the development of the Birsa Kisan Integrated Portal, a flagship initiative of the Agriculture, Animal Husbandry and Co-Operative Department, Govt. of Jharkhand. Responsible for designing and implementing Aadhaar-based farmer registration, multi-role login system (SLBC, BANK, SNO, DNO, DC, PMU), scheme selection workflows, CAPTCHA and OTP verification, and multi-step registration forms. Also working on the official website of the Agriculture, Animal Husbandry & Co-operative Department (in development), covering schemes, tenders, notifications, directories, budget details and media. Worked extensively with .NET MVC, Dapper, SQL Server, and front-end technologies to deliver secure, scalable, and user-friendly solutions aligned with agricultural domain needs.",
    skills: [
      "C# .Net",
      "ASP .Net",
      ".Net MVC",
      "MS SQL Server",
      "HTML5",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Web API",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: gradCap,
    school: "Indira Gandhi National Open University (IGNOU), Delhi",
    degree: "MCA (Computer Science & Information Technology)",
    date: "Jan 2020 - Dec 2022",
    grade: "59.75%",
    desc: "Master of Computer Applications. Key coursework: Data Structures, Algorithms, DBMS, OOP, Operating Systems, Computer Networks.",
  },
  {
    id: 1,
    img: gradCap,
    school: "Marwari College, Ranchi",
    degree: "B.Com (Accounts Hons), Ranchi University",
    date: "2014 - 2017",
    grade: "69.38%",
    desc: "Bachelor of Commerce with specialization in Accounts.",
  },
  {
    id: 2,
    img: gradCap,
    school: "Marwari College, Ranchi",
    degree: "JAC (XII), I.Com",
    date: "2012 - 2014",
    grade: "70.4%",
    desc: "Intermediate in Commerce, Jharkhand Academic Council.",
  },
  {
    id: 3,
    img: gradCap,
    school: "Marwari School, Ranchi",
    degree: "JAC (X), Matriculation",
    date: "2012",
    grade: "69.4%",
    desc: "Secondary School Examination, Jharkhand Academic Council.",
  },
];
