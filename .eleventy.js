const collections = require("./utilities/collections.js");
const filters = require("./utilities/filters.js");
const shortcodes = require("./utilities/shortcodes.js");

const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPlugin(pluginRss);

  // Collections
  Object.keys(collections).forEach((collectionName) => {
    eleventyConfig.addCollection(collectionName, collections[collectionName]);
  });

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName]);
  });

  // Send the compiled styles straight through
  eleventyConfig.addPassthroughCopy('src/assets/css/styles.css');
  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy('src/assets/svg');
  eleventyConfig.addPassthroughCopy('src/assets/favicon');
  eleventyConfig.addPassthroughCopy('src/assets/core_img');
  eleventyConfig.addPassthroughCopy('src/admin/config.yml');
  eleventyConfig.addPassthroughCopy('_redirects');

  eleventyConfig.addWatchTarget('./src/admin/config.yml');
  eleventyConfig.addWatchTarget('./src/assets/css/tailwind.css');

  return {
    dir: {
      includes: "_includes",
      data: "_data",
      input: 'src',
      output: 'public'
    }
  }
}
