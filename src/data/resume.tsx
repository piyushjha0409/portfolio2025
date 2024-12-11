//TODO: need to change this data 
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

const DATA = {
  name: "Piyush Jha",
  initials: "PJ",
  url: "https://piyushjha.xyz",
  avatarUrl: "./pfp.jpeg",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description: "Full Stack Engineer with experience in React, Node.js, and blockchain technologies.",
  summary: "Software developer with a curious mindset",
  contact: {
    email: "peeyush0409@gmail.com",
    tel: "+91 8700885137",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/piyushjha",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/piyushjha",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/piyushjha",
        icon: Icons.x,
        navbar: true,
      },
    },
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://piyushjha.hashnode.dev/what-i-have-learnt-in-2022-as-a-full-stack-developer", icon: NotebookIcon, label: "Blog" },
  ],
  work: [
    {
      company: "Hibana Labs LLC",
      href: "https://hibanalabs.com",
      logoUrl: "./VSC-Logo.png",
      badges: [],
      location: "USA, (Remote)",
      title: "Software Engineer",
      start: "Oct 2022",
      end: "April 2023",
      description: "Designed and implemented a secure user authentication page, improving site security. Built a complete Crypto Exchange Website, now serving 1,000+ daily users. Developed APIs with Node.js and integrated them into React UI, enhancing functionality and reducing load times by 30%. Created RESTful APIs, like KYC and OTP verification, reducing fraud by 25%.",
    },
    {
      company: "Adigos LLP",
      href: "https://adigos.com",
      logoUrl: "./Adigos.jpeg",
      badges: [],
      location: "India, (Remote)",
      title: "Full Stack Developer Intern",
      start: "Oct 2023",
      end: "Nov 2024",
      description: "Working on VSC network powered by the HIVE blockchain ($157M market cap). Developing a mobile responsive frontend for Bitcoin wrapping provider for vsc defi for user interaction. Building a decentralized exchange for swapping hive token and hbd tokens on vsc defi. Learnt using making apis in graphql and initializing the graphql client. Worked on 3speak UI refactor for continuous improvement user experience - 3speak-nextjs-tan.vercel.app",
    },
  ],
  education: [
    {
      school: "Guru Gobind Singh Indraprastha University",
      href: "https://ipu.ac.in",
      logoUrl: "./ggsipu.png",
      degree: "Bachelor of Computer Science",
      start: "Sep 2020",
      end: "Sep 2023",
    },
  ],
  projects: [
    {
      title: "Askmesol.fun",
      href: "https://askmesol.fun",
      image: "/askmesol.png                   ",
      video: "",
      dates: "Sep 2023",
      active: true,
      description: "Creator can create a blink for AMA title and share to their followers. User can ask question to their creators anonymously. User can put a bid on their question for getting the reply as quick as possible. Developed a backend for handling all the serverless apis and storing data into mongodb database.",
      technologies: ["next.js", "mongodb", "web3.js", "solana", "prisma", "typescript"],
      links: [
        {
          type: "Website",
          href: "https://askmesol.fun",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/piyushjha/askmesol",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "NFT for S3SH Game in Ethereum",
      href: "https://github.com/piyushjha/s3sh-nft",
      image: "/S3SH.png",
      video: "",
      dates: "Sep 2023",
      active: true,
      description: "Developed a membership-based NFT system allowing access to a slot machine game with rewards. Limited minting to one token per user and distributed winnings as NFTs. Collaborated with multiple full stack devs for this project to achieve the goal.",
      technologies: ["reactjs", "nodejs", "expressjs", "mongodb", "ether.js", "solidity", "typescript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/piyushjha/s3sh-nft",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Resume builder",
      href: "https://resume-builder-ineuron.netlify.app/",
      image: "/resumeBuilder.png",
      video: "",
      dates: "Sep 2023",
      active: true,
      description: "Developed a resume builder site for a hackathon project within 24hrs.",
      technologies: ["reactjs", "nodejs", "expressjs", "mongodb", "ether.js", "solidity", "typescript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/piyushjha0409/Resume-Builder",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Golang",
    "React.js",
    "Node.js",
    "Next.js",
    "Web3.js",
    "Express.js",
    "GraphQL",
  ],
};

export default DATA;

