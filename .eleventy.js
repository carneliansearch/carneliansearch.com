
module.exports = function(eleventyConfig) {

  // Send the compiled styles straight through
  eleventyConfig.addPassthroughCopy('./src/css/styles.css');

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
