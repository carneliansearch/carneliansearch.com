const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

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
