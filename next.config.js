// next.config.js
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

// const {
//   SENTRY_DSN,
//   SENTRY_ORG,
//   SENTRY_PROJECT,
//   SENTRY_AUTH_TOKEN,
//   NODE_ENV,
//   API_URL,
//   NEW_API_URL,
//   MONITORING_API_KEY,
//   MONITORING_API_URL,
// } = process.env;

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        handleImages: ["jpg", "jpeg", "png", "svg", "webp", "gif", "ico"],
      },
    ],
  ],
  {
    target: "serverless",
    // env: {
    //   API_URL,
    //   NEW_API_URL,
    //   SENTRY_DSN,
    //   SENTRY_AUTH_TOKEN,
    //   SENTRY_ORG,
    //   SENTRY_PROJECT,
    //   MONITORING_API_KEY,
    //   MONITORING_API_URL,
    // },
  }
);
