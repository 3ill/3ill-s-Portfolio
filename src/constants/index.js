import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  solidity,
  ethers,
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
  uhuru,
  thrillswap,
  tripguide,
  threejs,
  hoobank,
  dsamerch,
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
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Ethers JS",
    icon: ethers,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Blockchain Developer",
    company_name: "HeasdsbyBnxn",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web smart contracts using Solidity and other related technologies.",
      "Testing smart contracts to ensure security",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Dsa Corp",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing and maintaining web smart contracts using Solidity and other related technologies.",
      "Testing smart contracts to ensure security",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Uhuruverse",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2022 - Present",
    points: [
      "Developing and maintaining web smart contracts using Solidity and other related technologies.",
      "Testing smart contracts to ensure security",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The contracts were hack proof and the gas optimizations were efficient",
    name: "Mazi Aso Obinna",
    designation: "Founder",
    company: "Uhuruverse",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Chike does.",
    name: "Victor Martins",
    designation: "CEO",
    company: "Dsa Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The contract audit done by Chike was extremely effective and improved the authenticity of the entire project  ",
    name: "Ral Andrews",
    designation: "CTO",
    company: "UhuruNFTs",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "UhuruNFT",
    description:
      "Decentralized application powered by an ERC721 smart contract that allows users to seamlessly mint NFTs",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: uhuru,
    source_code_link: "https://github.com/Uhurunfts",
  },
  {
    name: "3illSwap",
    description:
      "Web application that enables users to quickly swap tokens on the blockchain",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: thrillswap,
    source_code_link: "https://github.com/3illSwap",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },

  {
    name: "hoobank",
    description: "The front-end design of a banking application",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/3ill/Hoobank",
  },

  {
    name: "dsam3rch",
    description: "A 3D react project powered by AI",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",

        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: dsamerch,
    source_code_link: "https://github.com/3ill/DSAM3RCH.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
