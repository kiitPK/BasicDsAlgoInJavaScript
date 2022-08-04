// 1. Question

var obj = {
  name: "san",
  printMyName: () => {
    console.log("What is your", name);
  },
};

console.log(obj.printMyName());

const employees = [
  { name: "San", salary: 5000 },
  { name: "John", salary: 5000 },
];

let searchedEmployeeName = "San";

const updatedEmployees = employees.map((employee) => {
  if (employee.name == searchedEmployeeName) {
    //employee.salary = employee.salary * 10;
    employee = { ...employee, salary: employee.salary * 10 };
  }
  return employee;
});

console.log(employees, updatedEmployees);
