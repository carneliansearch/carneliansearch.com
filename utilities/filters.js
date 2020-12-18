
module.exports = {
  findBySlug: (collection, slug) => {
    return collection.find((item) => item.fileSlug === slug);
  }
}
