const collections = require("./utilities/collections.js");
const filters = require("./utilities/filters.js");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");

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

  // 11ty Images
  eleventyConfig.addNunjucksAsyncShortcode("imageAvatar", async function(src, alt, sizes = "100vw") {
    if(alt === undefined) {
      throw new Error(`Missing \`alt\` on imageAvatar from: ${src}`);
    }

    let metadata = await Image(src, {
      widths: [64, 128],
      formats: ['webp', 'jpeg'],
      urlPath: "/assets/img/",
      outputDir: "./public/assets/img"
    });

    let lowsrc = metadata.jpeg[0];

    return `<picture class="rounded-full h-16 w-16 block overflow-hidden flex-shrink-0">
      ${Object.values(metadata).map(imageFormat => {
        return `  <source type="image/${imageFormat[0].format}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
        <img
          src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}">
      </picture>`;
  });

  // Send the compiled styles straight through
  eleventyConfig.addPassthroughCopy('src/assets/css/styles.css');
  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy('src/admin/config.yml');

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
