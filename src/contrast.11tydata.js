const contrast = require("get-contrast");

module.exports = {
  eleventyComputed: {
    foreground: (data) => {
      if (!data.eleventy.serverless) return '#000000';

      const { foreground } = data.eleventy.serverless.query;
      if (foreground.startsWith('#') || foreground.startsWith('rgb') || foreground.startsWith('hsl')) return foreground;
      return `#${foreground}`;
    },
    background: (data) => {
      if (!data.eleventy.serverless) return '#ffffff';

      const { background } = data.eleventy.serverless.query;
      if (background.startsWith('#') || background.startsWith('rgb') || background.startsWith('hsl')) return background;
      return `#${background}`;
    },
    ratio: (data) => {
      if (!data.foreground && !data.background) return '1';
      return contrast.ratio(data.foreground, data.background);
    },
    formattedRatio: (data) => {
      return Number(data.ratio).toFixed(2);
    },
    ogImage: (data) => {
      if (!data.eleventy.serverless) {
        return '';
      }

      const url = encodeURIComponent(`https://contrast-checker-11ty.netlify.app/contrast/?foreground=${data.foreground.replace('#', '')}&background=${data.background.replace('#', '')}`);

      return `https://og-screenshot-11ty.netlify.app/${url}/opengraph`;
    },
  },
};
