module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        additionalData: `
        @import "~@/styles/main.sass"
        @import "~@/styles/_variables.sass"
        `,
      },
    },
  },
};
