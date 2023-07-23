// Array of contained options the user can click on
const options = [
    'View All Departments', 
    'View All Roles', 
    'View All Employees', 
    'Add Department', 
    'Add Role', 
    'Add Employee', 
    'Update Employee',
    'Quit'
];

// Presents user with the options array and stores their selection in 'userSelect'
const question = [
  {
    type: 'list',
    name: 'userSelect',
    message: 'What would you like to do?',
    choices: options
  }
];

// When prompt, it will ask the user for a department name to then store in 'userDepartment'
const department = [
  {
    type: 'input',
    name: 'userDepartment',
    message: 'What would you like to name this department?',
  }
];

const role = [
  {
    type: 'input',
    name: 'userRole',
    message: 'What would you like to name this role?'
  },
  {
    type: 'number',
    name: 'userSalary',
    message: 'How much is this roles salary?'
  }
];

module.exports = { options, question, department, role }
