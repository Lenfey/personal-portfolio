import {
  nitk,
  oracle,
  pba,
  ethglobal,
  polkadot,
  ethindia,
  silicom
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiFillSchedule
} from "react-icons/ai";

import {
  SiVmware,
  SiPurescript,
  SiVeeam,
  SiSonicwall,
  SiFortinet,
  SiMicrosoftazure,
  SiDell
} from "react-icons/si";

import {
  FaNetworkWired,
  FaAws,
  FaMicrosoft,
  FaLinux,
  FaPython,
  FaDocker,
  FaProjectDiagram,
  FaResolving,
  FaAtlassian
} from "react-icons/fa";

import {
  GiFlagObjective
} from "react-icons/gi";

import {
  GrSystem,
  GrAruba
} from "react-icons/gr";

import {
  PiMicrosoftOutlookLogoBold,
  PiMicrosoftTeamsLogoFill
} from "react-icons/pi";

import {
  VscTerminalPowershell,
  VscDiffRenamed
} from "react-icons/vsc";

import {
  CiSun
} from "react-icons/ci";

import {
  RiEnglishInput
} from "react-icons/ri";

import {
  MdMonitorHeart
} from "react-icons/md";

export const resumeLink = "https://1drv.ms/b/c/aaf3a3050c8e0167/EWnT5lNZ-7dDoYO16V76aQABIyAgxP-C0kHW7NQxnrj4kQ?e=3FJ1IL";
export const repoLink = "";

export const callToAction = "https://www.linkedin.com/in/matthiasfellerch/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "HES-SO - Geneva",
    degree: "Bachelor",
    duration: "July 2013 - September 2016",
    content1: "Engineer bachelor in Information Technology",
    content2: "Major in Communications, Multimedia and Networks",
  },
  {
    id: "education-2",
    icon: pba,
    title: "CFPT - Geneva",
    degree: "",
    duration: "August 2012 - August 2013",
    content1: "Preparatory class",
  },
  {
    id: "education-3",
    icon: pba,
    title: "High School - Annemasse",
    degree: "",
    duration: "August 2009 - August 2012",
    content1: "Scientific baccalaureate",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: pba,
    event: "Microsoft Certified: Azure Administrator Associate",
    position: "Microsoft",
    content1: "Managing Entra/Azure infrastructure",
    content2: "",
    content3: "",
    article: "https://learn.microsoft.com/api/credentials/share/en-us/MatthiasFeller-9741/AFF41288817A2443?sharingId",
    //project: "https://devfolio.co/projects/khoj-3336",
    //youtube: "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
  },
  {
    id: "a-2",
    icon: pba,
    event: "SE: Core Client Credential 2020",
    position: "DELL",
    content1: "Knowledge of DELL workstation and laptop products",
    content2: "",
    content3: "",
    //article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    //project: "https://devfolio.co/projects/chargeswap-3527",
    //youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-3",
    icon: pba,
    event: "SE: Server Credential 2020",
    position: "DELL",
    content1: "Knowledge of DELL servers and network products",
    content2: "",
    content3: "",
    //github: "https://github.com/pranav2305/GreenTrust",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Technical skills",
    items: [
      {
        id: "pl-1",
        icon: GrSystem,
        name: "System",
      },
      {
        id: "pl-2",
        icon: FaNetworkWired,
        name: "Network",
      },
      {
        id: "pl-3",
        icon: SiVmware,
        name: "VMWare",
      },
      {
        id: "pl-4",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "pl-5",
        icon: PiMicrosoftOutlookLogoBold,
        name: "Microsoft 365",
      },
      {
        id: "pl-6",
        icon: FaAws,
        name: "AWS",
      },
      {
        id: "pl-7",
        icon: FaMicrosoft,
        name: "Windows",
      },
      {
        id: "pl-8",
        icon: FaLinux,
        name: "Linux",
      },
      {
        id: "pl-9",
        icon: VscTerminalPowershell,
        name: "Powershell",
      },
      {
        id: "pl-10",
        icon: FaPython,
        name: "Python",
      },
      {
        id: "pl-11",
        icon: SiPurescript,
        name: "Scripting",
      },
      {
        id: "pl-12",
        icon: FaDocker,
        name: "Docker",
      }
    ],
  },
  {
    title: "Social skills",
    items: [
      {
        id: "f-1",
        icon: FaProjectDiagram,
        name: "Project Management",
      },
      {
        id: "f-2",
        icon: FaResolving,
        name: "Incident Resolution",
      },
      {
        id: "f-3",
        icon: GiFlagObjective,
        name: "Objective axed",
      },
      {
        id: "f-4",
        icon: CiSun,
        name: "Adaptation",
      },
      {
        id: "f-5",
        icon: AiFillSchedule,
        name: "Organisation",
      },
      {
        id: "f-6",
        icon: VscDiffRenamed,
        name: "French",
      },
      {
        id: "f-7",
        icon: RiEnglishInput,
        name: "English",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiVeeam,
        name: "Veeam",
      },
      {
        id: "t-2",
        icon: PiMicrosoftTeamsLogoFill,
        name: "Office 365",
      },
      {
        id: "t-3",
        icon: GrAruba,
        name: "Aruba",
      },
      {
        id: "t-4",
        icon: SiSonicwall,
        name: "Sonicwall",
      },
      {
        id: "t-5",
        icon: SiFortinet,
        name: "Fortinet",
      },
      {
        id: "t-6",
        icon: FaAtlassian,
        name: "Atlassian",
      },
      {
        id: "t-7",
        icon: MdMonitorHeart,
        name: "PRTG",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Silicom",
    logo: silicom,
    link: "https://silicom.ch",
    positions: [
      {
        title: "Network & System Administrator",
        duration: "April 2018 - Present",
        content: [
          {
            text: "Network, system and cloud engineer in Geneva<br/>- Infrastructure maintenance (Switch, servers, VMWare virtualization, Hyper-V)<br/>- Data storage, hyper-converged systems (Simplivity, DFS, Veeam replication)<br/>- Coordination between services (network,dev, security)<br/>- Monitoring (PRTG, OpsGenie)<br/>- Load Balancing (Azure Gateway, Microsoft RDS)<br/>- Microsoft Office 365 Administration (SharePoint, Teams, Exchange Online)<br/>- System Administration (Active Directory, Veeam, Domain Controler, GPO, WSUS)<br/>- Network administrator (Firewall, VLAN, Switch)<br/>- Scripting (Bash, Powershell, Python)<br/>- Support 2nd level, 3rd level<br/>- Project management for small and medium business",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
/*   {
    id: "project-1",
    title: "Comicify.ai",
    github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://comicify-ai.vercel.app/",
    image: comicify_ai,
    content:
      "Convert any academic/news/boring text into cool comic strips using GPT-3.5 and Stable Diffusion!",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  }, */
];

// Add links to blogs here
export const blogPosts = [
/*   {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  }, */
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Managed clients",
    value: "20+",
  },
  {
    id: "stats-3",
    title: "Finished projects",
    value: "100+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
/*   {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  }, */
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/matthiasfellerch/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Lenfey",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:matthiasfellerch@gmail.com",
  },
/*   {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/mittalparth_",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/mittalparth_",
  }, */
];

// Your professional summary
export const aboutMe = {
    name: "Matthias Feller",
    githubUsername: 'lenfey',
    tagLine: "System Engineer | Network Engineer | Cloud Engineer | Support specialist",
    intro: "Passionate about technology, dreaming about passions, ready to challenge your enterprise."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 1;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
