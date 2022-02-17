const { EleventyServerlessBundlerPlugin } = require('@11ty/eleventy');

// ewww! (forces the dependency to be included for serverless)
require('get-contrast');

/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig)) => EleventyReturnValue}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addWatchTarget('src/css');

  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    functionsDir: 'netlify/functions',
    name: 'onrequest',
  });

  return {
    dir: {
      input: 'src',
    },
  };
};
