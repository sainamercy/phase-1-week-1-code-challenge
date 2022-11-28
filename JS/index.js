import { speedDetector } from "./challenge-2";
import { studentGradeGenerator } from "./challenge-1";
import netSalaryCalculator from "./challenge-3";


// appending reusts of all the challenges to the DOM
const gradeBtn = document.querySelector("#gradeBtn");
const pointsBtn = document.querySelector("#pointsBtn")
const salaryBtn = document.querySelector("#salaryBtn")

gradeBtn.addEventListener("click", studentGradeGenerator)

pointsBtn.addEventListener("click", speedDetector)

salaryBtn.addEventListener("click", netSalaryCalculator)

