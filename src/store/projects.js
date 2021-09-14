export default {
  state: {
    projects: [
      {
        name: "Neomorphism form",
        image: require("@/assets/ProjectsPreview/neomorphism-form.jpg"),
        link: "https://neomorphism-form-nekrasov-a-a.netlify.app/",
        stack: { vue: true, js: true, sass: true },
      },
      {
        name: "First meeting with Three.js",
        image: require("@/assets/ProjectsPreview/first-meeting-with-Three.js.jpg"),
        link: "https://first-meeting-with-threejs-nekrasov-a-a.netlify.app/",
        stack: { vue: true, js: true, sass: true },
      },
      {
        name: "Firebase Form",
        image: require("@/assets/ProjectsPreview/firebase-form.jpg"),
        link: "https://firebase-form-nekrasov-a-a.netlify.app/signin",
        stack: { vuetify: true, vue: true, sass: true },
      },
      {
        name: "Winter is coming",
        image: require("@/assets/ProjectsPreview/winter-is-coming.jpg"),
        link: "https://winter-is-coming-nekrasov-a-a.netlify.app/",
        stack: { js: true, css: true, html: true },
      },
      {
        name: "Take a gift",
        image: require("@/assets/ProjectsPreview/take-a-gift.jpg"),
        link: "https://take-a-gift-nekrasov-a-a.netlify.app/",
        stack: { js: true, css: true, html: true },
      },
      {
        name: "Wave Animate",
        image: require("@/assets/ProjectsPreview/wave-animate.jpg"),
        link: "https://wave-animate-nekrasov-a-a.netlify.app/",
        stack: { js: true, css: true, html: true },
      },
      {
        name: "Line throught text",
        image: require("@/assets/ProjectsPreview/line-throught-text.jpg"),
        link: "https://line-throught-text-nekrasov-a-a.netlify.app/",
        stack: { js: true, css: true, html: true },
      },
      {
        name: "Effect mouse over",
        image: require("@/assets/ProjectsPreview/effect-mouse-over.jpg"),
        link: "https://effect-mouse-over-nekrasov-a-a.netlify.app/",
        stack: { js: true, css: true, html: true },
      },
    ],
  },
  getters: {
    getProjects: (s) => s.projects,
  },
};
