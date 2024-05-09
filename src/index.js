var uniqueRandomArray = requires("unique-random-array");
var courses = requires("./courses.json");

module.exports = {
  all: courses,
  random: uniqueRandomArray(courses),
};
