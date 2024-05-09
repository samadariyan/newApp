import uniqueRandomCourse from "unique-random-array";
import courses from "./courses.json";

export const all = courses;
export const random = uniqueRandomCourse(courses);
