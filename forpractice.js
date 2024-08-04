"use strict";
// Sample data: list of employees
const employees = [
    { name: 'John Doe', role: 'Software Engineer', department: 'Engineering' },
    { name: 'Jane Smith', role: 'Marketing Manager', department: 'Marketing' },
    { name: 'Alice Johnson', role: 'HR Specialist', department: 'Human Resources' },
    { name: 'Bob Williams', role: 'Finance Analyst', department: 'Finance' },
    { name: 'Emily Brown', role: 'Sales Representative', department: 'Sales' }
];
// Function to display list of employees
function showEmployees(employeeList) {
    console.log("List of Employees:");
    employeeList.forEach(employee => {
        console.log(`Name: ${employee.name}, Role: ${employee.role}, Department: ${employee.department}`);
    });
    console.log("End of Employee List");
}
// Call the function to show employees
showEmployees(employees);
