import detailImages from "../images/detail/detailImages";
import portfolioImages from "../images/portfolio/portfolioImages";

const projectArray = [
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
