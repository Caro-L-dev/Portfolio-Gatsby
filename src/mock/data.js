import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Caroline Liard',
  subtitle: 'Front-End Developer',
  cta: 'Who am I?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I joined O Clock school at the end of the year 2020 to do the training  "Web Developer Full Stack Javascript" + one month of React specialization (735h of intensive courses).',
  paragraphTwo: 'I work most often on React and JavaScript but I remain open to all proposals.',
  paragraphThree: 'I am currently looking for an internship or a job in the world of web development.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'miniature-hero.png',
    title: 'Hero',
    info: 'Website with several playable stories and multiple choices. Try to discover all the possible ends!',
    info2: 'Tech stack: ReactJs / NodeJs / Express',
    url: 'http://34.207.247.234:5000/#/',
    repo: 'https://github.com/Caro-L-dev/Hero', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'miniature-portfolio-dev-art.png',
    title: 'My portfolio dev & art',
    info: 'Portfolio that presents my work in web development and in the artistic field.',
    info2: 'Tech stack: JavaScript / ReactJs',
    url: 'https://www.caroline.totypice.fr/what-i-do',
    repo: 'https://github.com/Caro-L-dev/PORTFOLIO', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'miniature-antre-des-jeux.png',
    title: 'Antre des jeux',
    info: 'Boardgames website showcase with an e-commerce side.',
    info2: 'Tech stack: Gatsby(react) / TypeScript / GraphCms / GraphQl / Emotion.sh / Snipcart',
    url: 'https://l-antre-des-jeux.netlify.app/',
    repo: 'https://github.com/Moonpearl/l-antre-des-jeux', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/liardcaroline/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Caro-L-dev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
