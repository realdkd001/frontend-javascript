/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />

export const Cpp = Subjects.Cpp;
export const Java = Subjects.Java;
export const React = Subjects.React;
export type Teacher = Subjects.Teacher;

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());