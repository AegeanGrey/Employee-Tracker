// Takes the dependencies needed from package.json and stores them within variables
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');

// Allows us to use options and question arrays from 'cli.js'
const { options, question, department, role } = require('./lib/cli.js');

// Establishes express library call
const app = express();

// Middleware that anthing json will pass through first
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connects to MySQL database for us to run queries/interact with the db
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeeTracker_db'
  },
  console.log(`Connection successful`)
);

// When called will prompt the user to input a name to add a new department
function addDepartment() {
  return inquirer

  // Prompts the user with the department array
  .prompt(department)

  // Takes the user input and stores it in 'userDepartment'
  .then(({ userDepartment }) => {

    // Query call to the database that inserts 'userDepartment' as the value
    db.query(`INSERT INTO departments(department) VALUES('${userDepartment}')`, (err) => {
      if (err) {
        console.log(err);

      // If there's no error then it will log to the console that the new department has been added
      } else {
        console.log(`${userDepartment} has been added to departments`)
        cli.run();
      }
    });
  });
}

// When called will prompt the user to input a new role name, it's salary and the department it's associated with
function addRole(result) {

  // The stored query response will then be created into a new array for us to display the departments name to the user while their response is recognized as the departments ID
  var savedDepartments = result.map(departments => ({
    name: departments.department,
    value: departments.id
  }));

  // 2nd question that displays all of the departments from 'savedDepartments' variable for the user to select
  const role2 = [
    {
        type: 'list',
        name: 'userDepartment',
        message: 'Which department does this role belong to?',
        choices: savedDepartments
    }
  ];

  // 1st prompt that asks the name of the new role and their salary
  inquirer.prompt(role)

  // Stores response in 'userRole' and 'userSalary'
  .then(({ userRole, userSalary }) => {

    // 2nd prompt that asks the user the department the role belongs to 
    inquirer.prompt(role2)

    // The users response will save the selected departments ID to 'userDepartment'
    .then(({ userDepartment }) => {

        // Query call that will INSERT the users responses in the title, salary and associated department_id
      db.query(`INSERT INTO role(title, salary, department_id) VALUES('${userRole}', ${userSalary}, ${userDepartment})`, (err) => {
          if (err) {
          console.log(err);

          // If there are no errors then it will confirm the new role has been created to the console
          } else {
          console.log(`${userRole} role has been created`)
          cli.run();
          }
      });
    });
  });
}

class CLI {
  constructor () {}
  run() {
    return inquirer
  
    // Prompts user with question variable from 'cli.js'
    .prompt(question)
  
    // Takes user response stored in 'userSelect'
    .then(({ userSelect }) => {

    let newEmployee;

    // Switch case that compares 'userSelect' with the 'options' array to find a match
    switch (userSelect) {
      
        // Once a match is found it will execute a line of code that the matched statement is associated with

        // Shows all Departments w/ their id's and name
        case options[0]:
          db.query(`SELECT * FROM departments`, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              const table = cTable.getTable(result);
              console.log(`\n` + table);
              cli.run();
            }
          });
        break;
              
        // Shows all Roles w/ their id's, titles, associated departments and salary
        case options[1]:
          db.query(`SELECT role.id, role.title, departments.department, role.salary FROM departments LEFT JOIN role ON departments.id = role.department_id`, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              const table = cTable.getTable(result);
              console.log(`\n` + table);
              cli.run();
            }
          });
        break;
                  
        // Shows all of the Employees w/ their id's, first and last names, role, department, salary and manager
        case options[2]:
          db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, departments.department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM departments LEFT JOIN role ON departments.id = role.department_id LEFT JOIN employee ON role.id = employee.role_id LEFT JOIN employee manager ON manager.id = employee.manager_id`, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              const table = cTable.getTable(result);
              console.log(`\n` + table);
              cli.run();
            }
          });
        break;
  
        // Calls 'addDepartment' function to add the users input of a new department to th
        case options[3]:
          addDepartment();
        break;
              
        // Runs a query to get all departments for the user to select/associate their new created role with
        case options[4]:
          db.query(`SELECT * FROM departments`, (err, result) => {
            if (err) {
              console.log(err);

            // If there are no errors then it will call the 'addRole' function while passing the query response as 'result' 
            } else {
              addRole(result);    
            }
          });
        break;
                  
        case options[5]:
          console.log('Adding a new Employee');
        break;
                      
        case options[6]:
          console.log('Updating an Employee');
        break;
      
        case options[7]:

          // Disconnects the user from the application
          db.end(function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log('Goodbye');
            }
          });
        break;
        }
    });           
  }
}

// Takes the CLI Class and creates a new instance of it
const cli = new CLI();

// Calls the run function within the CLI class
cli.run();
