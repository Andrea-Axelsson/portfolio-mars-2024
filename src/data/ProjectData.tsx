import {Project} from '../components/Interface'

const ProjectData: Project[] = [
    {
        id: 1,
        projectTitle: "VayCay Generator",
        projectImage: "VayCay.png",
        tags: {
            tag1: "html.svg",
            tag2: "css.svg",
            tag3: "javascript.svg",
            tag4: "ux-ui.png",
            tag5: "api.png",
        },
        bodyText: "This is my very first passion project, a result of my time and learning at Scrimbas Front End Developer Bootcamp. <br><br>I enjoy traveling but not planning the trip or finding a destination. Navigating countless travel websites to find the perfect destination can quickly become overwhelming.<br><br> That's why I created a solution that simplifies this process. I usually only have a feeling of where I want to go, not exactly where. Therefore, I wanted to capture that feeling in simple options such as, beach, nature and city. Based on these preferences, my program uses code to suggest a suitable destination, complete with suggested activities. This tool aims to provide quick and relevant inspiration based on the user's wishes.<br><br>For the future, I have plans to integrate this tool with Chat GPT to expand the number of possible destinations and provide even more detailed descriptions. Currently, a basic database of trips resides in a data.js file.<br><br>For more information about this project, feel free to visit my git repo. I look forward to sharing this journey and its continued development.",
        website: "https://vay-cay-generator.netlify.app/",
        github: "https://github.com/Andrea-Axelsson/vay-cay-generator"
    },
    {
        id: 2,
        projectTitle: "Portfolio",
        projectImage: "portfolio.png",
        tags: {
            tag1: "html.svg",
            tag2: "css.svg",
            tag3: "javascript.svg",
            tag4: "ux-ui.png",
            tag5: "react.svg",
        },
        
        bodyText: "This project is my biggest passion project to date. I'm actually more happy and excited about my portfolio than the actual projects in my portfolio.<br><br> While working on this project, I fully realized the value of reusable code for the first time. I devoted myself to designing the code so that it would be as reusable as possible. <br><br>The project also gave me the chance to fully dive into UI design, exploring styles that truly represent me. The result was a nostalgic, colorful and playful 90s computer desktop, with a design that is fully responsive.<br><br>For a deeper insight into the process behind this project, don't hesitate to take a look at Github.",
        website: "https://andrea-axelsson-portfolio.netlify.app/",
        github: "https://github.com/Andrea-Axelsson/Portfolio"
    },
    {
        id: 3,
        projectTitle: "Quizzical",
        projectImage: "quizzical.png",
        tags: {
            tag1: "html.svg",
            tag2: "css.svg",
            tag3: "javascript.svg",
            tag4: "api.png",
            tag5: "react.svg",
        },
    
        bodyText: "This is the solution to the solo project 'Quizzical' in the Scrimbas React course. <br><br> The project 'Quizzical' was an amazing journey and a significant challenge in my development journey as a front end developer. One of the biggest challenges was immersing myself in React, which was a big step forward from my previous experience with only vanilla JavaScript.<br><br> This project not only gave me the chance to challenge myself and broaden my knowledge, but also to greatly improve my understanding and skill within this powerful library. By integrating external APIs and managing complex application states, I have taken my skills to a whole new level. <br><br>For more information about this project, feel free to visit my git repo.",

        website: "https://quizzical-scrimba-quiz-game.netlify.app/",
        github: "https://github.com/Andrea-Axelsson/quizzical"
    },
    {
        id: 4,
        projectTitle: "Avatar Card Game",
        projectImage: "avatar-card-game.png",
        tags: {
            tag1: "html.svg",
            tag2: "css.svg",
            tag3: "javascript.svg",
            tag4: "ux-ui.png",

        },
    
        bodyText: "In this project, I got the chance to really geek out in 'Avatar: The Last Airbender' by creating an interactive role-playing game.<br><br> It was my first introduction to JavaScript constructors, which provided an exciting challenge and a new perspective on coding. The game has character-specific health points and dice counts, carefully balanced to ensure varied game outcomes and a true representation of each character's abilities.<br><br> Integrating music from the series added a nice dimension to the experience. Going forward, I plan to improve the game with animations, such as the dice rolls, to further enrich the gaming experience. This project was more than just a programming challenge, it was a journey through a beloved universe. <br><br>For more information about this project, feel free to visit my git repo.",
        website: "https://avatar-card-game.netlify.app/",
        github: "https://github.com/Andrea-Axelsson/avatar-card-game"
    },
    {
        id: 5,
        projectTitle: "Movie Watchlist",
        projectImage: "movie-watchlist.png",
        tags: {
            tag1: "html.svg",
            tag2: "css.svg",
            tag3: "javascript.svg",
            tag4: "api.png",
        },
        
        bodyText: "In the 'Movie-Watchlist' project, I embarked on a challenging journey to master API integration.<br><br> Navigating through the complexities of retrieving the right data from the movie API proved to be a significant hurdle. This difficulty required a deep dive into the API documentation, which improved my understanding and skills in interpreting and using such technical resources. <br><br>The struggle to retrieve specific movie details from the API not only tested my patience but also greatly improved my ability to make efficient API requests and handle JSON data. <br><br> This project was an important learning experience in working with APIs and deciphering their documentation. For more information about this project, feel free to visit my git repo.",

        website: "https://movie-watchlist-scrimba-project.netlify.app/index.html",
        github: "https://github.com/Andrea-Axelsson/movie-watchlist"
    },
    {
        id: 6,
        projectTitle: "Color Generator",
        projectImage: "color-generator.png",
        tags: {
            tag1: "html.svg",
            tag2: "css.svg",
            tag3: "javascript.svg",
            tag4: "api.png",
        },

        bodyText: "'Color Generator' is a web application developed to create dynamic color schemes.<br><br> It uses pure JavaScript for its core functionality, including a challenging feature that allows copying the color's hex codes to the clipboard.<br><br> The application retrieves data from TheColorAPI to offer a variety of color options and uses HTML5, CSS3, Font Awesome icons and Google Fonts for an elegant and responsive design. <br><br>This project improved my skills in DOM manipulation, API integration and dynamic HTML rendering. <br><br>For more information about this project, feel free to visit my git repo.",
        website: "https://color-generator-scrimba.netlify.app/",
        github: "https://github.com/Andrea-Axelsson/color-generator"
    },
    {
        id: 7,
        projectTitle: "Oldagram",
        projectImage: "oldagram.png",
        tags: {
            tag1: "html.svg",
            tag2: "css.svg",
            tag3: "javascript.svg",
        },
        
        bodyText: "This was one of the projects I found to be the most fun at the beginning of my programming journey.<br><br> The concept of an Instagram copy, albeit only with historical artists, was very fun and engaging. <br><br>The project gave me the chance to dive deep into CSS animations, which was an exciting challenge. I focused on creating an interactive experience where users can 'like' posts, which activates a heart animation that fades in and out.<br><br> This project combined classic art with modern web technology in a unique way, helping to immerse my skills in JavaScript and dynamic content management. <br><br>For more information about this project, feel free to visit my git repo.",
        website: "https://oldagram-scrimba.netlify.app/",
        github: "https://github.com/Andrea-Axelsson/Oldagram"
    },

]

export default ProjectData