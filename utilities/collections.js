module.exports = {
  people: (collection) => {
    return collection.getFilteredByGlob(["./src/people/**/*.md"]);
  },
  homepageSection: (collection) => {
    return collection.getFilteredByGlob(["./src/homepage/**/*.md"]);
  },
  insights: (collection) => {
    return collection.getFilteredByGlob(["./src/insights/**/*.md"]);
  },
}
