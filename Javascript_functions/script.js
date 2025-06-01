function calculateAverage (score1,score2,score3) {
    return (score1+score2+score3) / 3
};

function assignGrade(marks) {
    if(marks >= 90) {
        console.log("Grade A");
    } else if(marks >= 80) {
        console.log("Grade B");
    } else if(marks >= 70) {
        console.log("Grade C");
    }
    else if (marks >= 60) {
        console.log("Grade D");
    }
    else {
        console.log("Grade F")
    }
}


var score1 = prompt("Enter the first grade");
var score2 = prompt("Enter the second grade");
var score3 = prompt("Enter the third grade");
score1 = parseFloat(score1);
score2 = parseFloat(score2); 
score3 = parseFloat(score3);

var avg = calculateAverage(score1,score2,score3);
console.log(avg)

assignGrade(avg)