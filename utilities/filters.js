
module.exports = {
  findBySlug: (collection, slug) => {
    return collection.find((item) => item.fileSlug === slug);
  },

  peopleByRole: (people, role = 'staff') => {
      return people.filter((person) => person.role === role);
  },

  protectRunts: (string) => {
    const index = string.lastIndexOf(' ');
    return string.substr(0, index) + '&nbsp;' + string.substr(index + 1);
  },

  highlightCarnelian: (string) => {
    return string.replace('Carnelian', '<span class="text-red">Carnelian</span>');
  }
}
