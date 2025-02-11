// Imports the Project interface for type checking
import { Project } from "../components/Interface";

// Defines an array of projects, each object following the Project interface structure
const ProjectData: Project[] = [
  {
    id: 1,
    projectTitle: "Audiophile, E-commerce Website",
    projectImage: "audiophile.png",
    tags: {
      tag1: "html.svg",
      tag2: "tailwind-css.svg",
      tag3: "typescript.svg",
      tag4: "react.svg",
    },
    bodyText:
      "I built the Audiophile app with React, Redux, and Tailwind CSS, focusing on responsive design, cart management, and checkout validation.",
    website: "https://audiophile-andrea.netlify.app/",
    github: "https://github.com/Andrea-Axelsson/audiophile",
  },
  {
    id: 2,
    projectTitle: "Lingoolo - AI Translation App",
    projectImage: "longoolo2.png",
    tags: {
      tag1: "html.svg",
      tag2: "sass.png",
      tag3: "typescript.svg",
      tag4: "react.svg",
      tag5: "ux-ui.png",
    },
    bodyText:
      "This is a passion project where I have explored the possibilities of integrating the OpenAI API with React and Vite to build a responsive, user-friendly translation tool.",
    website: "https://lingoloo.netlify.app/",
    github: "https://github.com/Andrea-Axelsson/lingoloo",
  },
  {
    id: 3,
    projectTitle: "Professional Portfolio",
    projectImage: "portfolio-2024.png",
    tags: {
      tag1: "html.svg",
      tag2: "css.svg",
      tag3: "typescript.svg",
      tag4: "react.svg",
      tag5: "ux-ui.png",
    },
    bodyText:
      "My portfolio: a dive into creative web development with TypeScript, featuring unique designs and interactive animations for a dynamic experience.",
    website: "https://andrea-portfolio-2024.netlify.app/",
    github: "https://github.com/Andrea-Axelsson/portfolio-mars-2024",
  },

  {
    id: 4,
    projectTitle: "Creative Portfolio",
    projectImage: "portfolio.png",
    tags: {
      tag1: "html.svg",
      tag2: "css.svg",
      tag3: "javascript.svg",
      tag4: "ux-ui.png",
      tag5: "react.svg",
    },

    bodyText:
      "Another passion project! I developed a portfolio focusing on reusable code and UI design, resulting in a nostalgic, colorful Y2K desktop style, emphasizing responsiveness.",
    website: "https://andrea-axelsson-portfolio.netlify.app/",
    github: "https://github.com/Andrea-Axelsson/Portfolio",
  },
  {
    id: 5,
    projectTitle: "Quizzical",
    projectImage: "quizzical.png",
    tags: {
      tag1: "html.svg",
      tag2: "css.svg",
      tag3: "javascript.svg",
      tag4: "api.png",
      tag5: "react.svg",
    },

    bodyText:
      "This is the solution to the solo project 'Quizzical' in the Scrimbas React course. Advancing from vanilla JS to mastering React by integrating APIs and managing states.",

    website: "https://quizzical-scrimba-quiz-game.netlify.app/",
    github: "https://github.com/Andrea-Axelsson/quizzical",
  },

  {
    id: 6,
    projectTitle: "Movie Watchlist",
    projectImage: "movie-watchlist.png",
    tags: {
      tag1: "html.svg",
      tag2: "css.svg",
      tag3: "javascript.svg",
      tag4: "api.png",
    },

    bodyText:
      "I embarked on honing API integration in the 'Movie-Watchlist' project, enhancing skills through deep dive into API documentation.",

    website: "https://movie-watchlist-scrimba-project.netlify.app/index.html",
    github: "https://github.com/Andrea-Axelsson/movie-watchlist",
  },
  {
    id: 7,
    projectTitle: "Color Generator",
    projectImage: "color-generator.png",
    tags: {
      tag1: "html.svg",
      tag2: "css.svg",
      tag3: "javascript.svg",
      tag4: "api.png",
    },

    bodyText:
      "Developed 'Color Generator' web app with JavaScript, featuring clipboard hex code and dynamic schemes from TheColorAPI.",
    website: "https://color-generator-scrimba.netlify.app/",
    github: "https://github.com/Andrea-Axelsson/color-generator",
  },

  /*  {
        id: 7,
        projectTitle: "Avatar Card Game",
        projectImage: "avatar-card-game.png",
        tags: {
            tag1: "html.svg",
            tag2: "css.svg",
            tag3: "javascript.svg",
            tag4: "ux-ui.png",

        },
    
        bodyText: "In this project, I got the chance to really geek out in 'Avatar: The Last Airbender' with tailored health and dice for each character, ensuring balanced and diverse gameplay outcomes.",
        website: "https://avatar-card-game.netlify.app/",
        github: "https://github.com/Andrea-Axelsson/avatar-card-game"
    }, */

  /* {
        id: 3,
        projectTitle: "VayCay Generator",
        projectImage: "VayCay.png",
        tags: {
            tag1: "html.svg",
            tag2: "css.svg",
            tag3: "javascript.svg",
            tag4: "ux-ui.png",
            tag5: "api.png",
        },
        bodyText: "This is my very first passion project. I created a travel tool that simplifies finding destinations and activities based on user preferences.",
        website: "https://vay-cay-generator.netlify.app/",
        github: "https://github.com/Andrea-Axelsson/vay-cay-generator"
    }, */
];

export default ProjectData;
