'use strict';

let Information = {
    ID: [1000, 1001, 1002, 1003, 1004, 1005, 1006],
    FullName: ["Ghazi Samer", "Lana Ali", "Tamara Ayoub", "Safi Walid", "Omar Zaid", "Rana Saleh", "Hadi Ahmad"],
    Department: ["Administration", "Finance", "Marketing", "Administration", "Development", "Development", "Finance"],
    Level: ["Senior", "Senior", "Senior", "Mid-Senior", "Senior", "Junior", "Mid-Senior"], 
}

function Employee(employeeId, fullName, department, level) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;       
    this.level = level;                 
    this.salary = this.calculatingSalary(this.level);
}

Employee.prototype.calculatingSalary = function(myLevel) {
    let max;
    let min;
    if(myLevel == "Junior") {
        max = 1000;
        min = 500;
    } else if(myLevel == "Mid-Senior") {
        max = 1500;
        min = 1000;
    } else if(myLevel == "Senior") {
        max = 2000;
        min = 1500;
    }
    let initialSalary = Math.random() * (max - min) + min;
    let tax = initialSalary * 0.075;
    let netSalary = Math.floor(initialSalary - tax);
    return netSalary;
}

Employee.prototype.render = function() {
    document.write(`<tr> 
    <td> ${this.employeeId} </td> 
    <td> ${this.fullName} </td>
    <td> ${this.department} </td> 
    <td> ${this.level} </td> 
    <td> ${this.salary} </td> 
    </tr>`)
}

const employee0 = new Employee(Information.ID[0], Information.FullName[0], Information.Department[0], Information.Level[0]); 
const employee1 = new Employee(Information.ID[1], Information.FullName[1], Information.Department[1], Information.Level[1]); 
const employee2 = new Employee(Information.ID[2], Information.FullName[2], Information.Department[2], Information.Level[2]); 
const employee3 = new Employee(Information.ID[3], Information.FullName[3], Information.Department[3], Information.Level[3]); 
const employee4 = new Employee(Information.ID[4], Information.FullName[4], Information.Department[4], Information.Level[4]); 
const employee5 = new Employee(Information.ID[5], Information.FullName[5], Information.Department[5], Information.Level[5]); 
const employee6 = new Employee(Information.ID[6], Information.FullName[6], Information.Department[6], Information.Level[6]); 

document.write(`<table>`)
document.write(`<tr> 
    <th> Employee ID </th> 
    <th> Full Name </th> 
    <th> Department </th> 
    <th> Level </th> 
    <th> Salary </th> 
    <th> Image </th> 
    </tr>`);
employee0.render();
employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
document.write(`</table>`)