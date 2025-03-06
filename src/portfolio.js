/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nitish",
  title: "Hi all, I'm Nitish",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Java / JavaScript / Reactjs / Nodejs / TypeScript and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nitishsaikumark",
  linkedin: "https://www.linkedin.com/in/nitishsaikumar/",
  gmail: "nitishsaikumarkadiyam@gmail.com",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Expertise in creating Real-Time and Scalable Web Applications"),

    emoji(
      "⚡ Integration with back-end services and third-party platforms such as AWS, Firebase, and PostgreSQL for efficient system performance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Utah",
      logo: require("./assets/images/uicon.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "Aug 2023 - May 2025",
      desc: "GPA: 3.96/4.0",
      descBullets: [
        "Research Assistant : 1 year+",
        "Teaching Assistant : 6 months"
      ]
    },
    {
      schoolName: "Sastra University",
      logo: require("./assets/images/sastra.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2017 - June 2021",
      desc: "GPA: 9.07/10.0",
      descBullets: [
        "Ranked Top 10% in the program and received Dean merit scholarship for 3 years straight"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.png"),
      date: "July 2021 – Oct 2022",
      desc: "Optimized full-stack applications using React, Java, Flask, and SQL, significantly improving performance, user experience, and engagement by implementing features like lazy loading, universal filters, and interactive dashboards.",
      tech: "Java, React, JavaScript, Flask, SQL, HTML, AWS"
    },

    {
      role: "Software Engineer",
      company: "Kaleris",
      companylogo: require("./assets/images/kaleris.jpg"),
      date: "Oct 2022 – Aug 2023",
      desc: "Developed and optimized Full stack-based features, resolved user-reported issues, enhanced test coverage, and streamlined CI/CD processes, achieving improved performance, customer satisfaction, and deployment efficiency",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
      tech: "Java, Spring, Hibernate, SQL, HTML, CSS, Junit"
    },

    {
      role: "Research Intern",
      company: "University of utah",
      companylogo: require("./assets/images/uicon.jpg"),
      date: "May 2024 – present",
      desc: "Exploring advanced mesh generation techniques in EEG problem to enhance resolution and improve the accuracy.",
      tech: "C++, Python"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/smartaigmail.webp"),
      projectName: "Smart Email Assistant",
      projectDesc:
        "Developed a Smart Email Assistant using Java, Spring Boot and Gemini API automating replies within Gmail.",
      tech: "Java, Spring Boot, REST API, Reactjs, HTML, CSS",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "https://cute-buddy.netlify.app/"
        // },
        {
          name: "Github",
          url: "https://github.com/nitishsaikumark/Smart_Email_Assistant-using-Java"
        }
      ]
    },
    {
      image: require("./assets/images/cbudy.webp"),
      projectName: "Ecommerce Website",
      projectDesc:
        "Developed an e-commerce web application with dynamic product features, real-time GraphQL queries, and seamless cart management.",
      tech: "Reactjs, Typescript, Javascript, GraphQL, HTML, CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cute-buddy.netlify.app/"
        },
        {
          name: "Github",
          url: "https://github.com/nitishsaikumark/CuteBuddy"
        }
      ]
    },
    {
      image: require("./assets/images/insta.png"),
      projectName: "Instagram Clone",
      projectDesc:
        "Created a full-stack Instagram clone with image uploads, commenting, liking, email verification, and secure authentication.",
      tech: "Reactjs, Redux, Javascript, Express.js, MySql, HTML, CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://insta-flax-nine.vercel.app/"
        },
        {
          name: "Github",
          url: "https://github.com/nitishsaikumark/InstagramCloneUsingReact"
        }
      ]
    },
    {
      image: require("./assets/images/taskk.webp"),
      projectName: "Real Time Task Management",
      projectDesc:
        "A collaborative task management Kanban board designed for teams to easily manage and track their tasks.",
      tech: "Vue 3, Node.js, Express, MongoDB, Socket.io, CSS",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "https://github.com/nitishsaikumark/TaskNest-app/"
        // },
        //  you can add extra buttons here.
        {
          name: "Github",
          url: "https://github.com/nitishsaikumark/TaskNest-app"
        }
      ]
    },
    {
      image: require("./assets/images/fooot.webp"),
      projectName: "Fifa Vizplay",
      projectDesc:
        "Designed an interactive dashboard to visualize global player distribution and assess match-fixing risks associated with players.",
      tech: "Javascript, D3.js, HTML, CSS, Bootstrap",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://adityagattu.github.io/"
        },
        {
          name: "Github",
          url: "https://github.com/nitishsaikumark/FifaVizplay"
        }
      ]
    },
    {
      image: require("./assets/images/covid.png"),
      projectName: "Covid19 World Tracker",
      projectDesc:
        "Developed a COVID-19 case tracker dashboard with interactive geo-maps and trend comparisons using D3.js, providing global health insights.",
      tech: "Javascript, D3.js, HTML, CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nitishsaikumark.github.io/"
        },
        {
          name: "Github",
          url: "https://github.com/nitishsaikumark/nitishsaikumark.github.io"
        }
      ]
    },
    {
      image: require("./assets/images/portfolio.webp"),
      projectName: "My Portfolio",
      projectDesc:
        "Developed My Portfolio as a web application showcasing my academic and work experience along with few projects.",
      tech: "Reactjs, Vanilla Javascript, HTML, CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://portfolio-nitish-sai-kumars-projects.vercel.app"
        },
        {
          name: "Github",
          url: "https://github.com/nitishsaikumark/Portfolio"
        }
      ]
    },
    {
      image: require("./assets/images/icemagic.jpeg"),
      projectName: "My First Ever Web App",
      projectDesc:
        "Developed an Online ice cream ordering web application with features like Add, Remove from Cart, and Place Order.",
      tech: "Reactjs, Redux, Javascript, Firebase, HTML, CSS,  REST API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://myrestaurant-74b08.web.app"
        },
        {
          name: "Github",
          url: "https://github.com/nitishsaikumark/IceMagic"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-0000000000",
  email_address: "nitishsaikumarkadiyam@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
