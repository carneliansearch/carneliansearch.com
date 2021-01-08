module.exports = {
  homepageSection: (collection) => {
    return collection.getFilteredByGlob(["./src/homepage/**/*.md"]);
  },
  insights: (collection) => {
    return collection.getFilteredByGlob(["./src/insights/**/*.md"]);
  },
  case_studies: (collection) => {
    const insights = collection.getFilteredByGlob(["./src/insights/**/*.md"]);
    return insights.filter((insight) => {
      if (insight.data.case_study && insight.data.case_study.is_case_study) {
        console.log(insight.data.title);
        return true;
      }

      return false;
    });
  }
}
