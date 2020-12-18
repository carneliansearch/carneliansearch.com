const collections = require("./utilities/collections.js");
const filters = require("./utilities/filters.js");
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

  // Send the compiled styles straight through
  eleventyConfig.addPassthroughCopy('src/assets/css/styles.css');
  eleventyConfig.addPassthroughCopy('src/admin/config.yml');

  eleventyConfig.addWatchTarget('./src/admin/config.yml');

  return {
    dir: {
      includes: "_includes",
      data: "_data",
      input: 'src',
      output: 'public'
    }
  }
}
