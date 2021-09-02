export default {
  state: {
    challenges: [
      {
        name: "50projects50days",
        description: {
          ru:
            "50 уникальных мини-проектов для совершенствования ваших навыков HTML, CSS и JavaScript",
          en:
            "50 unique mini-projects to sharpen your HTML, CSS & JavaScript skills",
        },
        githubLink: "https://github.com/Nekrasov-A-A/50projects50days",
        originalLink: "https://50projects50days.com/",
        myWebSiteLink: "https://50days50projects-nekrasov-a-a.netlify.app/",
        image: require("@/assets/50projects50days.jpg"),
        stack: { js: true, css: true, html: true },
      },
      {
        name: `Front-end Mentor`,
        description: {
          ru:
            "Совершенствуйте свои навыки программирования, создавая реальные проекты. Решайте актуальные проблемы посредством HTML, CSS и JavaScript, работая над профессиональным дизайном. Присоединяйтесь к 206 176 разработчикам, которые создают проекты, проверяют код и помогают друг другу становиться лучше.",
          en:
            "Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 206 176 developers building projects, reviewing code, and helping each other get better.",
        },
        githubLink: "https://github.com/Nekrasov-A-A/frontend-mentor",
        originalLink: "https://www.frontendmentor.io/challenges",
        myWebSiteLink: "https://frontend-mentor-nekrasov-a-a.netlify.app/",
        image: require("@/assets/front-end-mentor.jpg"),
        stack: { vue: true, sass: true, html: true },
      },
    ],
  },
  getters: {
    getChallenges: (s) => s.challenges,
  },
};
