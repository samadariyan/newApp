var uniqueRandomArray = require("unique-random-array");
var courses = require("./courses.json");

module.exports = {
  all: courses,
  random: uniqueRandomArray(courses),
};
