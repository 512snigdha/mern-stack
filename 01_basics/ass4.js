
let marks = parseInt(prompt("Enter your marks:"));

let grade;
if (marks >= 90) {
    grade = "Grade A";
} else if (marks >= 75) {
    grade = "Grade B";
} else if (marks >= 50) {
    grade = "Grade C";
} else {
    grade = "Grade D";
}

alert("Your grade is:" +grade);