const contrast = require("get-contrast");

module.exports = {
  eleventyComputed: {
    ratio: (data) => {
      if (!data.eleventy.serverless) {
        return 1;
      }

      const { foreground, background } = data.eleventy.serverless.query;

      return contrast.ratio(foreground, background);
    },
    formattedRatio: (data) => {
      return Number(data.ratio).toFixed(2);
    },
    ogImage: (data) => {
      if (!data.eleventy.serverless) {
        return null;
      }

      const { foreground, background } = data.eleventy.serverless.query;

      const url = encodeURIComponent(`https://contrast-checker-11ty.netlify.app/contrast/?foreground=${foreground}&background=${background}`);

      return `https://contrast-checker-11ty.netlify.app/screenshot/${url}/opengraph`;
    },
  },
};
