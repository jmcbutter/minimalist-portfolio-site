import detailImages from "../images/detail/detailImages";
import portfolioImages from "../images/portfolio/portfolioImages";

const projectArray = [
  {
    name: "rock-paper-scissors",
    detailImages: detailImages.rps,
    cardImage: portfolioImages.rps,
    title: "Rock, Paper, Scissors, Lizard, Spock",
    content:
      "This project required me to build a rock, paper, scissors, lizard, spock game versus the computer. I used HTML and Chakra UI in React.js for the design. React was also used to manage state and determine the winner of the game and update the display appropriately.",
    background: [
      "This project helped me become more familiar with Chakra UI and required a bit more CSS manipulation than previous projects, especially to get the design and layout of the buttons correct. At this point, I feel very comfortable in React, and am confident in my abilities to manage state, even through callback functions passed as props to React elements.",
      "This was a front-end  challenge from Frontend Mentor, which is a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. These projects provide a way for me to focus purely on code rather than on how I want a website to look.",
    ],
    buttonText: "View Project",
    buttonHref: "/project/rock-paper-scissors",
    tags: "Interaction Design / Front End Development",
    tech: "HTML / CSS / JS / React",
    liveURL: "https://jmcbutter.github.io/rock-paper-scissors/",
    repoURL: "https://github.com/jmcbutter/rock-paper-scissors",
  },
  {
    name: "to-do",
    detailImages: detailImages.todo,
    cardImage: portfolioImages.todo,
    title: "To Do",
    content:
      "This project required me to build an interactive to-do application. I used HTML and CSS/SASS in React.js for the design. React was also used to manage the state of the task list, and to sort and filter the tasks.",
    background: [
      "This project allowed me to get more experience using functional components in React, and React Hooks. Building the drag and drop functionality was trickier than I expected, but I was able to get it done using dropzone divs and reordering the task array on dropping the dragged task. This project uses localStorage to remember tasks, and is the first project I've uploaded to Firebase.",
      "This was a front-end  challenge from Frontend Mentor, which is a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. These projects provide a way for me to focus purely on code rather than on how I want a website to look.",
    ],
    buttonText: "View Project",
    buttonHref: "/project/to-do",
    tags: "Interaction Design / Front End Development",
    tech: "HTML / CSS / SASS / JS / React",
    liveURL: "https://to-do-app-a280d.web.app/",
    repoURL: "https://github.com/jmcbutter/to-do-app",
  },
  {
    name: "tic-tac-toe",
    detailImages: detailImages.tictactoe,
    cardImage: portfolioImages.tictactoe,
    title: "Tic Tac Toe",
    content:
      "This project required me to build an interactive tic tac toe game. I used HTML and CSS/SASS in React.js for the design. React was also used to manage the state of the game, and display prompts whenever somebody won.",
    background: [
      "This project allowed me to get substantial experience using React and React Hooks such as useState and useEffect. Managing the state and the rendering became more difficult the further I got into the project, simply due to the number of branching conditionals needed to display things correctly. Due to this, I created unit tests for some functions using Jest to help cover the different branches.",
      "This was a front-end  challenge from Frontend Mentor, which is a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. These projects provide a way for me to focus purely on code rather than on how I want a website to look.",
    ],
    buttonText: "View Project",
    buttonHref: "/project/tic-tac-toe",
    tags: "Interaction Design / Front End Development",
    tech: "HTML / CSS / SASS / JS / React",
    liveURL: "https://jmcbutter.github.io/tic-tac-toe/",
    repoURL: "https://github.com/jmcbutter/tic-tac-toe",
  },
  {
    name: "calculator",
    detailImages: detailImages.calculator,
    cardImage: portfolioImages.calculator,
    title: "Calculator",
    content:
      "This project required me to build a fully responsive calculator with three color themes based on the designs provided. I used HTML5, along with CSS Flexbox, CSS Grid, CSS Custom Properties, and Sass for the design. JavaScript was used to manage the calculations and input interactivity.",
    background: [
      "This project allowed me to get some experience with changing themes via CSS custom properties, manipulating the DOM with JavaScript, and using Regex to test input and make sure it fit certain criteria.",
      "This was a front-end  challenge from Frontend Mentor, which is a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. These projects provide a way for me to focus purely on code rather than on how I want a website to look.",
    ],
    buttonText: "View Project",
    buttonHref: "/project/calculator",
    tags: "Interaction Design / Front End Development",
    tech: "HTML / CSS / SASS / JS",
    liveURL: "https://jmcbutter.github.io/calculator-app/dist/index.html",
    repoURL: "https://github.com/jmcbutter/calculator-app",
  },
  {
    name: "github",
    detailImages: detailImages.github,
    cardImage: portfolioImages.github,
    title: "Github User Search",
    content:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    background: [
      "This project required the use of the JavaScript fetch API to access the Github users RESTful API. JavaScript was then used to place the fetched JSON data into the page. The layout of the page was completed using HTML5, CSS Grid, CSS Custom Properties for theme switching, and Sass.",
      "This was a front-end  challenge from Frontend Mentor, which is a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. These projects provide a way for me to focus purely on code rather than on how I want a website to look.",
    ],
    buttonText: "View Project",
    buttonHref: "/project/github",
    tags: "Interaction Design / Front End Development",
    tech: "HTML / CSS / SASS / JS",
    liveURL:
      "https://jmcbutter.github.io/github-user-search-app/dist/index.html",
    repoURL: "https://github.com/jmcbutter/github-user-search-app",
  },
  {
    name: "pod",
    detailImages: detailImages.pod,
    cardImage: portfolioImages.pod,
    title: "Pod Landing Page",
    content:
      "This was a fully responsive landing page project which mostly consisted of HTML and CSS. There was a small amount of JavaScript used for form validation on the email input.",
    background: [
      "This landing page project was one of the first projects I completed that made use of multiple responsive design code elements, such as media queries, as well as art direction and resolution switching for images.",
      "This was a front-end  challenge from Frontend Mentor, which is a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. These projects provide a way for me to focus purely on code rather than on how I want a website to look.",
    ],
    buttonText: "View Project",
    buttonHref: "/project/pod",
    tags: "Front End Development",
    tech: "HTML / CSS / JS",
    liveURL: "https://jmcbutter.github.io/landing-page/dist/index.html",
    repoURL: "https://github.com/jmcbutter/landing-page",
  },
];

export default projectArray;
