
module.exports = {
  findBySlug: (collection, slug) => {
    return collection.find((item) => item.fileSlug === slug);
  },

  protectRunts: (string) => {
    const index = string.lastIndexOf(' ');
    return string.substr(0, index) + '&nbsp;' + string.substr(index + 1);
  }
}
