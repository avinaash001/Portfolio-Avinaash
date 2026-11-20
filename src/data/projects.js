// Projects data
// Images are placed in public/projects/ so you can easily replace them with real
// screenshots (.png, .jpg, .webp, or .svg) by changing the filename below.

export const projects = [
  {
    id: 1,
    title: "Poetry Website",
    description: "A responsive poetry publishing website featuring an admin panel for writing, editing, and managing poems.",
    tags: ["React", "JavaScript", "CSS", "Vercel"],
    webapp: "https://avipoetry.vercel.app",
    github: "",
    image: "/projects/poetry.jpg",
    badges: [],
  },
  {
    id: 2,
    title: "Chhath Puja Music Player",
    description: "An aesthetic single-page music player dedicated to traditional Chhath geet with an interactive playlist and smooth controls.",
    tags: ["React", "JavaScript", "CSS"],
    webapp: "https://chhathlive.netlify.app",
    github: "",
    image: "/projects/music.jpg",
    badges: [],
  },
  {
    id: 3,
    title: "Birsa Kisan Integrated Portal",
    description: "Official portal of the Dept. of Agriculture, Animal Husbandry & Co-operative, Govt. of Jharkhand, featuring Aadhaar-based farmer registration and a multi-role login system (SLBC, Bank, SNO, DNO, DC, etc.).",
    tags: ["C#", "ASP.NET MVC", "Web API", "MS SQL Server"],
    webapp: "https://bkip.jharkhand.gov.in/",
    github: "",
    image: "/projects/BKIP.jpg",
    badges: [
      { text: "Government Project", type: "gov", icon: "🏛️" },
    ],
  },
  {
    id: 4,
    title: "Agriculture & Co-operative Dept. Portal",
    description: "Official departmental portal providing all department information in one place: schemes, tenders, notifications, divisions, officers' details, budget and allocation, directories, vision, blogs and articles, and a media section.",
    tags: ["C#", "ASP.NET MVC", "Web API", "MS SQL Server"],
    webapp: "",
    github: "",
    image: "/projects/official-portal.jpg",
    badges: [
      { text: "Government Project", type: "gov", icon: "🏛️" },
      { text: "In Development", type: "wip", icon: "🚧" },
    ],
  },
];
