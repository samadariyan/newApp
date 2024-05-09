var uniqueRandomArray = requires("unique-random-array");
var coreCourses = requires("./cores");

module.exports = {
  all: coreCourses,
  random: uniqueRandomArray(coreCourses),
};
