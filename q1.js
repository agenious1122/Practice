"use strict";
// var studentNames:string[]=["Adnan","Ghani"]
// console.log(studentNames.length)
// function pushNewItemArray(studentName:string)
// {
// 	studentNames[studentNames.length] = studentName
// }
// studentNames.push("Asif","Mani","Shafi")
// console.log(studentNames)
// var student1:string="zeeshan"
var studentsOfTnt = ["Adnan", "Ghani", "ASif", "Shafi", "Mani"];
// studentsOfTnt[1]="shafi"
// studentsOfTnt[studentsOfTnt.length]="shafi"
// console.log(studentsOfTnt)
// console.log(studentsOfTnt.length)
function adnanClass(studentName) {
    studentsOfTnt[studentsOfTnt.length] = studentName;
}
// adnanClass("zeeshan",)
// adnanClass("sabri",)
// adnanClass("buitta",)
// studentsOfTnt.push("zaheer","grango","sohail")//insert values in last of arry
// console.log(studentsOfTnt)
// studentsOfTnt.pop()
// studentsOfTnt.pop()//delet last onein array
// studentsOfTnt.unshift("bike staff","zia",)// insert values instart of array
// studentsOfTnt.shift()//delet one value of array in start
studentsOfTnt.splice(3, 2, "sabri");
console.log(studentsOfTnt);
