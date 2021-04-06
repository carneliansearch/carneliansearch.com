const Image = require("@11ty/eleventy-img");

module.exports = {
  blockImage: (src, alt, sizes = "100vw", classes = "w-full") => {
    const options = {
      widths: [320, 640, 800, 1200],
      formats: ['webp', 'jpeg'],
      urlPath: "/assets/img/",
      outputDir: "./public/assets/img"
    };

    const imageAttributes = {
      class: classes,
      alt,
      sizes,
      loading: "lazy",
      decoding: "async"
    };

    return imageGen(src, options, imageAttributes);
  },

  imageAvatar: (src, alt, sizes = "100vw", classes = "w-full") => {
    const options = {
      widths: [64, 128],
      formats: ['webp', 'jpeg'],
      urlPath: "/assets/img/",
      outputDir: "./public/assets/img"
    };

    const imageAttributes = {
      class: classes,
      alt,
      sizes,
      loading: "lazy",
      decoding: "async"
    };

    return imageGen(src, options, imageAttributes);
  },

  imageSocial: (src) => {
    const options = {
      widths: [1200],
      formats: ['jpeg'],
      urlPath: "/assets/img/",
      outputDir: "./public/assets/img"
    };

    Image(src, options);
    metadata = Image.statsSync(src, options);
    return metadata.jpeg[0].url
  }
}


function imageGen(src, options, attributes) {
  Image(src, options);
  metadata = Image.statsSync(src, options);
  return Image.generateHTML(metadata, attributes);
}
