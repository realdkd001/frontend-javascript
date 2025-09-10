import Cpp from "./subjects/Cpp";
import Java from "./subjects/Java";
import React from "./subjects/React";
import { Teacher } from "./subjects/Teacher";

// create and export constants
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// create and export teacher
export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
