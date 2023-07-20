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

module.exports = { options, question }
